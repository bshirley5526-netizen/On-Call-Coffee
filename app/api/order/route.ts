import { NextRequest, NextResponse } from 'next/server'
import { SquareClient, SquareEnvironment, Currency } from 'square'
import { randomUUID } from 'crypto'

export const dynamic = 'force-dynamic'

interface OrderItem {
  id: string
  name: string
  grind: string
  qty: number
  price: number
}

export async function POST(req: NextRequest) {
  const accessToken = process.env.SQUARE_ACCESS_TOKEN
  const locationId = process.env.SQUARE_LOCATION_ID

  if (!accessToken || !locationId) {
    return NextResponse.json({ error: 'Square not configured' }, { status: 500 })
  }

  const client = new SquareClient({
    token: accessToken,
    environment:
      process.env.SQUARE_ENVIRONMENT === 'production'
        ? SquareEnvironment.Production
        : SquareEnvironment.Sandbox,
  })

  try {
    const { items, freeShip } = await req.json() as { items: OrderItem[]; freeShip: boolean }

    if (!items?.length) {
      return NextResponse.json({ error: 'No items in order' }, { status: 400 })
    }

    const lineItems = items.map((item: OrderItem) => ({
      name:
        item.grind && item.grind !== 'Whole Bean'
          ? `${item.name} (${item.grind})`
          : item.name,
      quantity: String(item.qty),
      basePriceMoney: {
        amount: BigInt(Math.round(item.price * 100)),
        currency: Currency.Usd,
      },
    }))

    // Add shipping as a line item when below the free threshold
    if (!freeShip) {
      lineItems.push({
        name: 'Shipping',
        quantity: '1',
        basePriceMoney: {
          amount: BigInt(599),
          currency: Currency.Usd,
        },
      })
    }

    const response = await client.checkout.paymentLinks.create({
      idempotencyKey: randomUUID(),
      order: {
        locationId,
        lineItems,
      },
      checkoutOptions: {
        redirectUrl: `${req.nextUrl.origin}/order/success`,
        askForShippingAddress: true,
      },
    })

    const url = response.paymentLink?.url

    if (!url) {
      return NextResponse.json({ error: 'Failed to create checkout link' }, { status: 500 })
    }

    return NextResponse.json({ url })
  } catch (err) {
    console.error('Square error:', err)
    return NextResponse.json({ error: 'Payment session failed' }, { status: 500 })
  }
}

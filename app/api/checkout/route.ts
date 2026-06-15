import { NextRequest, NextResponse } from 'next/server'
import { SquareClient, SquareEnvironment } from 'square'
import { randomUUID } from 'crypto'

export const dynamic = 'force-dynamic'

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
    const { sourceId, amount, items, contact, shipping } = await req.json()

    if (!sourceId || !amount || !items?.length) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const note = items
      .map((i: { name: string; qty: number; grind: string }) =>
        `${i.qty}× ${i.name}${i.grind !== 'Whole Bean' ? ` (${i.grind})` : ''}`
      )
      .join(', ')

    const response = await client.payments.create({
      idempotencyKey: randomUUID(),
      sourceId,
      locationId,
      amountMoney: {
        amount: BigInt(amount),
        currency: 'USD',
      },
      buyerEmailAddress: contact.email,
      shippingAddress: {
        addressLine1: shipping.address1,
        ...(shipping.address2 ? { addressLine2: shipping.address2 } : {}),
        locality: shipping.city,
        administrativeDistrictLevel1: shipping.state,
        postalCode: shipping.zip,
        country: 'US',
      },
      note,
      referenceId: `OCC-${Date.now()}`,
    })

    const payment = response.payment

    if (payment?.status === 'COMPLETED') {
      return NextResponse.json({ paymentId: payment.id })
    }

    return NextResponse.json({ error: 'Payment not completed' }, { status: 400 })
  } catch (err: unknown) {
    console.error('Square payment error:', err)
    const message = err instanceof Error ? err.message : 'Payment failed'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

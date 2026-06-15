'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type CartItem = {
  id: string
  name: string
  origin: string
  roast: string
  price: number
  size: string
  bg: string
  bagColor: string
  foldColor: string
  qty: number
  grind: string
}

type CartContextType = {
  items: CartItem[]
  addItem: (product: Omit<CartItem, 'qty' | 'grind'>) => void
  setQty: (id: string, qty: number) => void
  setGrind: (id: string, grind: string) => void
  count: number
  subtotal: number
  clear: () => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem('occ-cart')
      if (stored) setItems(JSON.parse(stored))
    } catch {}
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    localStorage.setItem('occ-cart', JSON.stringify(items))
  }, [items, hydrated])

  const addItem = (product: Omit<CartItem, 'qty' | 'grind'>) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === product.id)
      if (existing) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...product, qty: 1, grind: 'Whole Bean' }]
    })
  }

  const setQty = (id: string, qty: number) => {
    if (qty <= 0) {
      setItems(prev => prev.filter(i => i.id !== id))
    } else {
      setItems(prev => prev.map(i => i.id === id ? { ...i, qty } : i))
    }
  }

  const setGrind = (id: string, grind: string) => {
    setItems(prev => prev.map(i => i.id === id ? { ...i, grind } : i))
  }

  const count = items.reduce((s, i) => s + i.qty, 0)
  const subtotal = items.reduce((s, i) => s + i.qty * i.price, 0)
  const clear = () => setItems([])

  return (
    <CartContext.Provider value={{ items, addItem, setQty, setGrind, count, subtotal, clear }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}

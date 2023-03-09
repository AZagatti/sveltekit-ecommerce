import type { Item } from '$/store'

export const mergeItem = (items: Item[], newItem: Item) => {
  const item = items.find((p) => p.name === newItem.name)
  if (item) {
    return [...items.filter((p) => p.name !== item.name), { ...item, quantity: item.quantity + 1 }]
  }
  return [...items, newItem]
}

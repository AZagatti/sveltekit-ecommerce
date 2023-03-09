<script lang="ts">
  import CollectionCard from '$/CollectionCard.svelte'
  import GridTile from '$/GridTile.svelte'
  import type { Item } from '$/store'
  import { setContext } from 'svelte'

  let products = [
    {
      name: 'cup',
      price: '$10',
      src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/Cup-front-black.png?v=1623159405',
      quantity: 1
    },
    {
      name: 'shirt',
      price: '$10',
      src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/short-sleeve-t-shirt-0.png?v=1622902418',
      quantity: 1
    }
  ]
  let newItems = [
    {
      name: 'Graphic T',
      src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/Front-NoModel_ec3be051-d579-4c03-b55b-64449d0b0445.png?v=1623255893',
      price: '$60.00',
      quantity: 1
    },
    {
      name: 'Jacket',
      src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/bomber-jacket-0.png?v=1622902777',
      price: '$80.00',
      quantity: 1
    }
  ]
  setContext<Item[]>('newItemsContext', newItems)
</script>

<main>
  <CollectionCard />
  {#each products as product (product.name)}
    <GridTile {product} />
  {/each}
</main>

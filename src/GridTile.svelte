<script lang="ts">
  import { cartItemsStore } from './store'
  import { mergeItem } from './utils/mergeItem'

  export let product = {
    name: 'No product provided',
    src: 'https://img.icons8.com/ios/500/no-image.png',
    price: '$0',
    quantity: 1
  }
  function addToCart() {
    cartItemsStore.update((data) => mergeItem(data, product))
  }
</script>

<div class="h-[50vh] w-full bg-indigo-600 overflow-hidden">
  <a
    href={`/product/${product.name.toLowerCase()}`}
    class="relative flex h-full w-full items-center justify-center"
    data-sveltekit-preload-data
  >
    <img
      src={product.src}
      class="max-h-full flex-none transition duration-300 ease-in-out"
      alt=""
    />
    <div class="text-white absolute top-0 left-0">
      <div class="bg-black p-3 text-2xl  font-medium">{product.name}</div>
      <div class="w-fit bg-black p-3 text-sm">{product.price}</div>
    </div>
    <div class="w-full absolute bottom-0 p-6">
      <button on:click={addToCart} class="bg-black w-full p-3"> Add To Cart </button>
    </div>
  </a>
</div>

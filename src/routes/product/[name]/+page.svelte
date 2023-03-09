<script lang="ts">
	import Modal from '$/Modal.svelte'
	import GridTile from '$/GridTile.svelte'
	import { cartItemsStore } from '$/store'
	import { mergeItem } from '$/utils/mergeItem'

	let showModal = false

	export let data
	let product = data.product

	function addItemToCart() {
		cartItemsStore.update((data) => (product ? mergeItem(data, product) : data))
	}
</script>

<div>
	{#if showModal}
		<Modal
			on:click={() => {
				showModal = false
			}}
		/>
	{/if}
	<div class="flex md:flex-row flex-col">
		<div class="md:w-2/3 md:h-90">
			<div class="relative h-4/5 bg-violet-700">
				<GridTile {product} />
			</div>
		</div>
		<div class="md:w-1/3 h-full p-6 text-xl">
			<p class="">{product?.price}</p>
			<button on:click={addItemToCart} class="text-base uppercase font-medium w-full bg-white text-black mt-6 p-2">
				Add To Cart
			</button>
		</div>
	</div>
</div>

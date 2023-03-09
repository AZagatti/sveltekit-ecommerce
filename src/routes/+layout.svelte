<script lang="ts">
	import '../app.css'
	import ShoppingCart from '$/ShoppingCart.svelte'
	import Modal from '$/Modal.svelte'
	import { cartItemsStore } from '$/store'

	let showCart = false
	let showModal = false
	let cartCount = 0
	$: cartItems = $cartItemsStore
	$: {
		cartCount = 0
		cartItems.forEach((item) => {
			cartCount += item.quantity
		})
	}
</script>

<div class="text-white bg-black">
	{#if showModal}
		<Modal
			on:click={() => {
				showModal = false
			}}
		>
			<span slot="body">
				<p class="text-center mb-6">The whole store is 20% off!</p>
			</span>
			<span slot="button" let:hover={hovering}>
				<button
					on:click={() => {
						showModal = false
					}}
					class="bg-pink-500 text-white uppercase font-medium p-2 rounded-md"
					>{hovering ? 'Close' : 'Awesome!'}</button
				></span
			></Modal
		>
	{/if}
	<div>
		<nav class="flex items-center border-b border-zinc-700 p-4 lg:px-6">
			<div class="flex w-full items-center justify-between">
				<div class="mr-4">
					<a href="/" class="">
						<picture>
							<source
								srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png"
								type="image/png"
							/>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png"
								alt="Svelte Logo"
								class="h-8"
							/>
						</picture>
					</a>
				</div>
				<button
					on:click={() => {
						showCart = true
					}}
					class="uppercase text-white flex items-center"
				>
					<div>Cart</div>
					<div
						class="w-5 h-5 ml-2 text-black bg-white rounded-full flex items-center justify-center text-xs font-bold"
					>
						{cartCount}
					</div>
				</button>
			</div>
		</nav>
	</div>
	<div class="relative">
		{#if showCart}
			<ShoppingCart
				on:click={() => {
					showCart = false
				}}
			/>
		{/if}
		<slot />
	</div>
</div>

<script>
	import Header from './Header.svelte';
	import '../app.css';
	import Footer from './Footer.svelte';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	:global(section) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	:global(h1) {
		text-align: left;
		background-image: linear-gradient(to right, var(--color-theme-2), var(--color-theme-2));
		background-position: 0 1.18em;
		background-repeat: repeat-x;
		display: inline-block;
		background-size: 100% 0.16em;
		padding-bottom: 0.16em;
	}
</style>

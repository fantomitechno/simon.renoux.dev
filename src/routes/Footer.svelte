<script>
	import quotes from '$lib/data/quotes.json';

	const date = new Date().toISOString().slice(5, 10);
	const quote =
		date in quotes.special
			? // @ts-ignore
				quotes.special[date]
			: quotes.classic[(Math.random() * quotes.classic.length) | 0];
</script>

<footer>
	<span>
		<a href="https://github.com/fantomitechno/simon.renoux.dev" target="_blank" rel="noreferrer"> source </a>
		·
		<a href="https://ko-fi.com/fantomitechno" target="_blank" rel="noreferrer"> money </a>
	</span>
	uwu · {quote} · uwu
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>

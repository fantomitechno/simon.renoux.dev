<script>
	const descriptions = [
		// foxboy who...
		'eats chocolate (too much)',
		'drink ice tea',
		'plays Minecraft',
		'creates random projects in the middle of the night',
		'is a CS student',
		'sleeps... sometimes'
	];

	const description = descriptions[(Math.random() * descriptions.length) | 0];
</script>

<svelte:head>
	<title>simon.renoux.dev</title>
	<meta name="description" content="Simon's homepage" />
</svelte:head>

<section>
	<h1>Hi, I'm Simon R.</h1>
	<h2>aka fantomitechno</h2>
	a foxboy who {description}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		background-image: linear-gradient(to right, #e2931d, #e2931d);
		background-position: 0 1.18em;
		background-repeat: repeat-x;
		background-size: 100% 0.16em;
		padding-bottom: 0.16em;
	}
</style>

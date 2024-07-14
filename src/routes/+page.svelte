<script>
	import fantom_maid from '$lib/images/fantom_maid.jpg';

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

	const birthdate = new Date(2004, 8, 18); // 18/09/2004
	const today = new Date();
	const dMonths = today.getUTCMonth() - birthdate.getUTCMonth();
	const dDays = today.getUTCDate() - birthdate.getUTCDate();
	const dYears = today.getUTCFullYear() - birthdate.getUTCFullYear();
	const age = dYears - +(dMonths < 0 || (dMonths === 0 && dDays < 0));
</script>

<svelte:head>
	<title>simon.renoux.dev</title>
	<meta name="description" content="Simon's homepage" />
</svelte:head>

<section>
	<span>
		<diV id="presplusimage">
			<img src={fantom_maid} alt="My character in a maid outfit by Liitchee" />
			<div id="presentation">
				<h1>Hi, I'm Simon R.</h1>
				<h2>aka fantomitechno</h2>
				a foxboy who {description}
			</div>
		</diV>
		I'm a {age} yo student in Polytech Nantes. I'm learning computer science but already started ahead
		with a *few* projects
	</span>
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
		text-align: left;
		background-image: linear-gradient(to right, #e2931d, #e2931d);
		background-position: 0 1.18em;
		background-repeat: repeat-x;
		display: inline-block;
		background-size: 100% 0.16em;
		padding-bottom: 0.16em;
	}

	span {
		align-items: left;
	}

	#presentation {
		margin-left: 1rem;
		margin-bottom: 1rem;
	}

	#presplusimage {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	img {
		height: 5rem;
		border-radius: 15%;
	}
</style>

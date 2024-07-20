<script>
	import fantom_maid from '$lib/images/fantom_maid.jpg';
	import fantom_main from '$lib/images/gallery/fantom_main.jpg';
	import fantom_christmas from '$lib/images/gallery/fantom_christmas.jpg';
	import fantom_halloween from '$lib/images/gallery/fantom_halloween.jpg';
	import banner from '$lib/images/gallery/banner_coco.gif';
	import fantom_jason from '$lib/images/gallery/fantom_jason.png';

	import fantom_girl from '$lib/images/gallery/picrew/fantom_girl.png';
	import foxboy_fac_chant from '$lib/images/gallery/picrew/foxboy_fac_chant.png';
	import foxboy_in_da_forest from '$lib/images/gallery/picrew/foxboy_in_da_forest.png';
	import foxboy_in_the_sunset from '$lib/images/gallery/picrew/foxboy_in_the_sunset.png';
	import foxboy_maid_flowers from '$lib/images/gallery/picrew/foxboy_maid_flowers.png';
	import irl_vs_ingame from '$lib/images/gallery/picrew/irl_vs_ingame.png';
	import me_and_nalo from '$lib/images/gallery/picrew/me_and_nalo.png';
	import me_girl4 from '$lib/images/gallery/picrew/me_girl4.png';
	import me_irl_but_maid2 from '$lib/images/gallery/picrew/me_irl_but_maid2.png';
	import me_irl from '$lib/images/gallery/picrew/me_irl.png';
	import me_girl from '$lib/images/me_girl.png';
</script>

<svelte:head>
	<title>art gallery</title>
	<meta name="description" content="Simon's art gallery" />
</svelte:head>

<section>
	<span>
		<h1>Art Gallery:</h1>
		<br />
		I'm not very good with doing art but I know people that are good at it
		<h2>Commisions by <a href="https://artbysoleil.carrd.co/">Soleil</a></h2>
		<div class="art-gallery">
			<img src={fantom_main} alt="My OC in his normal outfit" />
			<img src={fantom_maid} alt="My OC in a maid outfit" />
			<img src={fantom_christmas} alt="My OC ready for christmas" />
			<img src={fantom_halloween} alt="My OC after a blood bath I guess" />
		</div>
		<h2>Commision by cocoNOTshell</h2>
		<div class="art-gallery">
			<img src={banner} alt="My OC and his assistant bot looking at a sunset" />
		</div>
		<h2>Random drawing by isχyromαvro</h2>
		<div class="art-gallery">
			<img src={fantom_jason} alt="My OC in a silly drawing art style" />
		</div>
		<h2>and I have a lot of random picrews</h2>
		all my favorites:
		<div class="art-gallery">
			<img src={foxboy_in_the_sunset} alt="My OC with a sunset in the back" />
			<img src={me_and_nalo} alt="My OC and a close friend <3" />
			<img src={irl_vs_ingame} alt="Myself ingame vs myself irl" />
			<img src={foxboy_maid_flowers} alt="My OC in a maid outfit" />
			<img src={foxboy_fac_chant} alt="My OC with some part of myself irl" />
			<img src={foxboy_in_da_forest} alt="My OC in a forest" />
			<img src={fantom_girl} alt="My OC with some part of myself irl in a Cherry Blossom" />
			<img src={me_girl4} alt="My OC as a little catgirl :3" />
			<img src={me_irl_but_maid2} alt="IRL me in a maid outfit" />
			<img src={me_irl} alt="IRL me" />
			<img src={me_girl} alt="My OC as a girl" />
		</div>
	</span>
</section>

<style>
	span {
		align-items: left;
		width: 100%;
	}

	img {
		max-height: 12rem;
		margin: 0.3rem;
		border-radius: 5%;

		@media (max-width: 720px) {
			margin-left: auto;
			margin-right: auto;
		}
	}

	.art-gallery {
		display: flex;
		flex-wrap: wrap;
	}
</style>

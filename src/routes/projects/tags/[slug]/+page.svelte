<script>
	import ProjectList from '../../ProjectList.svelte';

	export let data;
	$: projects = data.projects;
</script>

<svelte:head>
	<title>Projects for {data.slug}</title>
	<meta name="description" content={`Project list`} />
</svelte:head>

<section>
	<span>
		<h1>Projects with the {data.slug} tag</h1>
		<h2><a href="/projects/">Back to full list</a></h2>

		<ProjectList {projects} />
	</span>
</section>

<style>
	span {
		align-items: left;
		width: 100%;
	}

	h2 a {
		color: var(--color-theme-2);
	}
</style>

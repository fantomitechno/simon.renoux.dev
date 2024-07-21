<script>
	import ProjectList from './ProjectList.svelte';

	export let data;
	$: projects = data.projects;
</script>

<svelte:head>
	<title>Projects</title>
	<meta name="description" content={`Project list`} />
</svelte:head>

<section>
	<span>
		<h1>My projects</h1>

		<ProjectList {projects} />
	</span>
</section>

<style>
	span {
		align-items: left;
		width: 100%;
	}
</style>

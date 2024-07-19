<script>
	import ProjectList from '../../ProjectList.svelte';

	export let data;
	$: projects = data.projects;
</script>

<section>
	<span>
		<h1>Projects with the {data.slug} tag</h1>

		<ProjectList {projects} />
	</span>
</section>

<style>
	span {
		align-items: left;
		width: 100%;
	}
</style>

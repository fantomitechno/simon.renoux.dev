<script lang="ts">
	import { DefaultRepo } from '$lib/icons/custom';
	import type { Project } from '$lib/projects/load';
	import { formatDate } from '$lib/utils';
	import { Icon } from 'svelte-icons-pack';
	import { RiSystemExternalLinkFill } from 'svelte-icons-pack/ri';

	export let projects: Project[];
</script>

<ul class="projects">
	{#each projects as project}
		<li class="project">
			{#if project.image}
				<img src={`/assets/projects/${project.slug}.png`} alt="" />
			{:else}
				<Icon src={DefaultRepo} size="5rem" />
			{/if}
			<hgroup>
				<h1 class="title">
					{#if project.post}
						<a href={`/projects/${project.slug}`}>{project.title}</a>
					{:else if project.url}
						<Icon src={RiSystemExternalLinkFill} />
						<a href={project.url} target="_blank" rel="noreferrer">
							{project.title}
						</a>
					{:else}
						{project.title}
					{/if}
				</h1>

				<p class="date">{formatDate(project.date)}</p>
				<div class="meta">
					{#each project.categories as category}
						<a class="tag" href={`/projects/tags/${category}`}>&num;{category}</a>
					{/each}
				</div>
				<p class="description">{project.description}</p>
			</hgroup>
		</li>
	{/each}
</ul>

<style>
	.projects {
		display: grid;
		grid-column: 2;
		grid-row: auto;
		gap: 2rem;
	}

	ul {
		list-style: none;
		padding: 0;
	}

	.project {
		display: flex;
		align-items: center;
		width: 100%;
	}

	.project img {
		height: 5rem;
		margin-right: 0.5rem;
	}

	.title {
		display: flex;
		background-image: none;
		padding: 0;
		margin: 0;
		font-size: 1rem;
		align-items: center;
		gap: 0.2rem;
	}

	.date {
		color: var(--color-secondary);
		margin-right: 2rem;
	}

	.meta {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 0.3rem;
		align-items: center;
	}

	.tag {
		color: var(--color-secondary);
		font-weight: auto;
		text-transform: none;
		margin-right: 0.25em;
		margin-left: 0.25em;
		-webkit-transition:
			box-shadow 0.2s ease-in-out,
			color 0.2s ease-in-out;
		transition:
			box-shadow 0.2s ease-in-out,
			color 0.2s ease-in-out;
	}

	.tag:hover {
		box-shadow: inset 0 -1.5em 0 var(--color-secondary);
		color: #fff;
	}
</style>

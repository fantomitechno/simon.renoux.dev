<script lang="ts">
	import { DefaultRepo } from '$lib/icons/custom';
	import { formatDate } from '$lib/utils';
	import { Icon } from 'svelte-icons-pack';

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<span class="title">
		{#if data.meta.image}
			<img src={`/assets/projects/${data.slug}.png`} alt="" />
		{:else}
			<Icon src={DefaultRepo} size="5rem" />
		{/if}
		<hgroup>
			<h1>{data.meta.title}</h1>
			<p>Creation date: {formatDate(data.meta.date)}</p>
		</hgroup>
	</span>
	<div class="tags">
		{#each data.meta.categories as category}
			<a class="tag" href={`/projects/tags/${category}`}>&num;{category}</a>
		{/each}
	</div>

	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>

<style>
	article {
		align-items: left;
		width: 100%;
	}

	.title {
		display: flex;
		align-items: left;
		margin-bottom: 1rem;
	}

	.title img {
		height: 5rem;
		margin-right: 0.5rem;
	}

	hgroup {
		margin-bottom: 0.3rem;
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

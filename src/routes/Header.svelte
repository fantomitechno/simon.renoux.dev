<script>
	import { page } from '$app/stores';
	import me_girl from '$lib/images/me_girl.png';
</script>

<header>
	<div class="corner">
		<a href="/">
			<img src={me_girl} alt="SvelteKit" />
			Simon R.
		</a>
	</div>

	<nav>
		<ul>
			<li>
				<a aria-current={$page.url.pathname === '/' ? 'page' : undefined} href="/">About me </a>
			</li>
			<li>
				<a aria-current={$page.url.pathname == '/gallery' ? 'page' : undefined} href="/gallery">
					Art Gallery
				</a>
			</li>
			<li>
				<a
					aria-current={$page.url.pathname.startsWith('/projects') ? 'page' : undefined}
					href="/projects"
				>
					Projects
				</a>
			</li>
			<li>
				<a aria-current={$page.url.pathname == '/links' ? 'page' : undefined} href="/links">
					Links & Socials
				</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		margin: 0.5em;
		display: flex;
		vertical-align: middle;
		line-height: 3em;
		justify-content: space-between;
	}

	.corner a,
	.corner a:hover {
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--color-text);
		text-decoration: none;
	}

	.corner img {
		width: 3em;
		height: 3em;
		object-fit: contain;
		border-radius: 15%;
		margin-right: 0.5em;
	}

	nav {
		display: flex;
		justify-content: center;
		margin: 0.5em;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	a[aria-current='page'] {
		color: var(--color-theme-2);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 500;
		font-size: 0.9rem;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>

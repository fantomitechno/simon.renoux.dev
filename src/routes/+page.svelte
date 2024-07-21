<script>
	import fantom_maid from '$lib/images/fantom_maid.jpg';

	import { Icon } from 'svelte-icons-pack';
	import { RiLogosJavaFill } from 'svelte-icons-pack/ri';
	import {
		SiTypescript,
		SiPython,
		SiGo,
		SiSvelte,
		SiNodedotjs,
		SiAstro,
		SiVisualstudiocode,
		SiIntellijidea,
		SiGit,
		SiPrisma,
		SiEndeavouros,
		SiGithub,
		SiModrinth,
		SiDiscord,
		SiX,
		SiTwitch,
		SiKofi,
		SiPnpm,
		SiPrettier,
		SiProtonmail
	} from 'svelte-icons-pack/si';

	import { GitGay } from '$lib/icons/custom';

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
		<diV id="presentation">
			<img src={fantom_maid} alt="My character in a maid outfit by Liitchee" />
			<hgroup id="titles">
				<h1>Hi, I'm Simon R.</h1>
				<h2>aka fantomitechno</h2>
				a foxboy who {description}
			</hgroup>
		</diV>
		<p>
			I'm a {age} yo student in Polytech Nantes. I'm learning computer science but already started ahead
			with a *<i>few</i>* projects.
		</p>
		<p>
			I mainly do backend stuff like API and bots, but I also do minecraft modding and web projects
			(for example the website you're seeing right now :D)
		</p>
		<div class="informations">
			<div id="knowledge-showcase">
				<h1>I use a lot of the stuff below</h1>
				<h2>Development tools</h2>
				<span id="knowledge">
					<a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
						<figure>
							<Icon src={SiVisualstudiocode} size="3em" className="icons" />
							<figcaption>VSCode</figcaption>
						</figure>
					</a>
					<a href="https://www.jetbrains.com/idea/" target="_blank" rel="noreferrer">
						<figure>
							<Icon src={SiIntellijidea} size="3em" className="icons" />
							<figcaption>Intellij Idea</figcaption>
						</figure>
					</a>
					<a href="https://git-scm.com/" target="_blank" rel="noreferrer">
						<figure>
							<Icon src={SiGit} size="3em" className="icons" />
							<figcaption>Git</figcaption>
						</figure>
					</a>
					<a href="https://endeavouros.com/" target="_blank" rel="noreferrer">
						<figure>
							<Icon src={SiEndeavouros} size="3em" className="icons" />
							<figcaption>Endeavour OS</figcaption>
						</figure>
					</a>
				</span>
				<h2>Languages</h2>
				<span id="knowledge">
					<a href="https://nodejs.org/" target="_blank" rel="noreferrer">
						<figure>
							<Icon src={SiNodedotjs} size="3em" className="icons" />
							<figcaption>Node.js</figcaption>
						</figure>
					</a>
					<a href="https://www.python.org/" target="_blank" rel="noreferrer">
						<figure>
							<Icon src={SiPython} size="3em" className="icons" />
							<figcaption>Python</figcaption>
						</figure>
					</a>
					<a href="https://www.java.com/" target="_blank" rel="noreferrer">
						<figure>
							<Icon src={RiLogosJavaFill} size="3em" className="icons" />
							<figcaption>Java</figcaption>
						</figure>
					</a>
					<a href="https://go.dev/" target="_blank" rel="noreferrer">
						<figure>
							<Icon src={SiGo} size="3em" className="icons" />
							<figcaption>Go</figcaption>
						</figure>
					</a>
				</span>
				<h2>NodeJS stuff</h2>
				<span id="knowledge">
					<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
						<figure>
							<Icon src={SiTypescript} size="3em" className="icons" />
							<figcaption>TypeScript</figcaption>
						</figure>
					</a>
					<a href="https://astro.build/" target="_blank" rel="noreferrer">
						<figure>
							<Icon src={SiAstro} size="3em" className="icons" />
							<figcaption>Astro</figcaption>
						</figure>
					</a>
					<a href="https://svelte.dev/" target="_blank" rel="noreferrer">
						<figure>
							<Icon src={SiSvelte} size="3em" className="icons" />
							<figcaption>Svelte</figcaption>
						</figure>
					</a>
					<a href="https://www.prisma.io/" target="_blank" rel="noreferrer">
						<figure>
							<Icon src={SiPrisma} size="3em" className="icons" />
							<figcaption>Prisma</figcaption>
						</figure>
					</a>
					<a href="https://pnpm.io/" target="_blank" rel="noreferrer">
						<figure>
							<Icon src={SiPnpm} size="3em" className="icons" />
							<figcaption>pnpm</figcaption>
						</figure>
					</a>
					<a href="https://prettier.io/" target="_blank" rel="noreferrer">
						<figure>
							<Icon src={SiPrettier} size="3em" className="icons" />
							<figcaption>Prettier</figcaption>
						</figure>
					</a>
				</span>
				See more on my <a href="/SimonRenoux.pdf" target="_blank" rel="noreferrer">CV</a>
			</div>
			<div id="accounts-showcase">
				<h1>I have accounts there</h1>
				<h2>Development projects</h2>
				<span id="accounts">
					<a href="https://www.github.com/fantomitechno" target="_blank" rel="noreferrer">
						<figure>
							<Icon src={SiGithub} size="3em" className="icons" />
							<figcaption>Github</figcaption>
						</figure>
					</a>
					<a href="https://git.gay/fantomitechno" target="_blank" rel="noreferrer">
						<figure>
							<Icon src={GitGay} size="3em" className="icons" />
							<figcaption>Git.gay</figcaption>
						</figure>
					</a>
					<a href="https://modrinth.com/user/fantomitechno" target="_blank" rel="noreferrer">
						<figure>
							<Icon src={SiModrinth} size="3em" className="icons" />
							<figcaption>Modrinth</figcaption>
						</figure>
					</a>
				</span>
				<h2>Socials & stuff</h2>
				<span id="accounts">
					<a href="https://discord.gg/NrnEpamdMc" target="_blank" rel="noreferrer">
						<figure>
							<Icon src={SiDiscord} size="3em" className="icons" />
							<figcaption>Discord</figcaption>
						</figure>
					</a>
					<a href="https://x.com/fantomitechno" target="_blank" rel="noreferrer">
						<figure>
							<Icon src={SiX} size="3em" className="icons" />
							<figcaption>X</figcaption>
						</figure>
					</a>
					<a href="https://twitch.tv/fantomitechno" target="_blank" rel="noreferrer">
						<figure>
							<Icon src={SiTwitch} size="3em" className="icons" />
							<figcaption>Twitch</figcaption>
						</figure>
					</a>
					<a href="https://ko-fi.com/fantomitechno" target="_blank" rel="noreferrer">
						<figure>
							<Icon src={SiKofi} size="3em" className="icons" />
							<figcaption>Ko-Fi</figcaption>
						</figure>
					</a>
				</span>
				<h2>Mails</h2>
				<span id="mails">
					<a href="mailto:simon@renoux.dev" target="_blank" rel="noreferrer">
						<figure>
							<Icon src={SiProtonmail} size="3em" className="icons" />
							<figcaption>simon@renoux.dev</figcaption>
						</figure>
					</a>

					<a href="mailto:me@fantomitechno.dev" target="_blank" rel="noreferrer">
						<figure>
							<Icon src={SiProtonmail} size="3em" className="icons" />
							<figcaption>me@fantomitechno.dev</figcaption>
						</figure>
					</a>
				</span>
			</div>
		</div>
	</span>
</section>

<style>
	span {
		width: 100%;
	}

	#titles {
		margin-left: 1rem;
		margin-bottom: 1rem;
	}

	#presentation {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	#presentation img {
		max-height: 5rem;
	}

	.informations {
		display: flex;
	}

	#knowledge {
		display: flex;
		flex-wrap: wrap;
		align-items: first baseline;
	}

	#knowledge a {
		text-decoration: none;
		color: var(--text-color);
	}

	#knowledge figure {
		margin: 1rem;
		text-align: center;
		width: 5rem;
	}

	:global(.icons:hover) {
		color: var(--color-secondary) !important;

		:global(.red) {
			fill: #fe9494;
		}
		:global(.orange) {
			fill: #ffc783;
		}
		:global(.yellow) {
			fill: #fff683;
		}
		:global(.green) {
			fill: #69cb86;
		}
		:global(.blue) {
			fill: #83a8ff;
		}
		:global(.purple) {
			fill: #c56ad4;
		}
	}

	#accounts {
		display: flex;
		flex-wrap: wrap;
		align-items: first baseline;
	}

	#accounts a {
		text-decoration: none;
		color: var(--text-color);
	}

	#accounts figure {
		margin: 1rem;
		text-align: center;
		width: 5rem;
	}

	#mails {
		display: flex;
		flex-wrap: wrap;
	}

	#mails a {
		text-decoration: none;
		color: var(--text-color);
	}

	#mails figure {
		margin: 1rem;
		text-align: center;
	}

	@media (min-width: 720px) {
		.informations > div {
			float: left;
			width: 50%;
		}

		#mails {
			justify-content: center;
		}
	}

	@media (max-width: 720px) {
		.informations {
			flex-direction: column;
		}
		div #accounts-showcase {
			order: 1;
			width: 100%;
		}
		div #knowledge-showcase {
			order: 2;
			width: 100%;
		}
		#mails figure {
			display: flex;
			flex-direction: row;
			gap: 1rem;
			align-items: center;
		}
	}
</style>

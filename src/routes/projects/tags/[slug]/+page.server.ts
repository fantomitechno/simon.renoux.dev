import { fetchProjects } from '$lib/projects/load';

export const load = async ({ params }) => {
	const projects = await fetchProjects(params.slug);
	return { projects, slug: params.slug };
};

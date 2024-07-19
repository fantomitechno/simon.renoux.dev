import { fetchProjects } from "$lib/projects/load";

export const load = async ({ params }) => {
  console.log(params.slug)
  const projects = await fetchProjects(params.slug);
  return { projects, slug: params.slug };
};
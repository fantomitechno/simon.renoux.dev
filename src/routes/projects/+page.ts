import { fetchProjects } from "$lib/projects/load";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
  const projects = await fetchProjects();
  return { projects };
};
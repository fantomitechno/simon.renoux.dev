export type Project = {
  title: string
  slug: string
  description: string
  date: string
  categories: string[]
  post: boolean
  image: boolean
  url: string
}

export const fetchProjects = async (tag?: string) => {
  let projects: Project[] = []

  const paths = import.meta.glob('/src/projects/*.md', { eager: true })

  for (const path in paths) {
    const file = paths[path]
    const slug = path.split('/').at(-1)?.replace('.md', '')

    if (file && typeof file === 'object' && 'metadata' in file && slug) {
      const metadata = file.metadata as Omit<Project, 'slug'>
      const post = { ...metadata, slug } satisfies Project
      projects.push(post)
    }
  }

  projects = projects.sort(
    (first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
  )

  return projects.filter(p => !tag || p.categories.includes(tag))
}
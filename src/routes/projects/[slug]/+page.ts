import type { Project } from '$lib/projects/load.js'
import { error } from '@sveltejs/kit'
import type { Component } from 'svelte'

export async function load({ params }) {
  try {
    const post = await import(`../../../projects/${params.slug}.md`)

    return {
      content: post.default as Component,
      meta: post.metadata as Project,
      slug: params.slug
    }
  } catch (e) {
    error(404, `Could not find ${params.slug}`)
  }
}

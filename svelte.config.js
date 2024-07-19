import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { mdsvex, escapeSvelte } from 'mdsvex'
import { getHighlighter } from 'shiki'
import remarkUnwrapImages from 'remark-unwrap-images'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter()
  },
  preprocess: [
    mdsvex({
      extensions: ['.md'],

      highlight: {
        highlighter: async (code, lang = 'text') => {
          const highlighter = await getHighlighter({
            themes: ['poimandres'],
            langs: ['javascript', 'typescript']
          })
          await highlighter.loadLanguage('javascript', 'typescript')
          const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'poimandres' }))
          return `{@html \`${html}\` }`
        }
      },
      remarkPlugins: [remarkUnwrapImages, [remarkToc, { tight: true }]],
      rehypePlugins: [rehypeSlug]
    }),
  ],
};

export default config;

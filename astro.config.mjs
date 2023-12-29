import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import partytown from '@astrojs/partytown'

const repo = 'https://github.com/#'
const site = 'https://example.com'

// https://astro.build/config
export default defineConfig({
	repo,
	site,
	integrations: [
		mdx({
			optimize: true,
		}),
		tailwind(),
		partytown(),
		sitemap(),
	],
})

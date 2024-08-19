import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://ztdocs.top',
	integrations: [starlight({ title: 'Site with sitemap' })],
	integrations: [
		starlight({
			title: '不折腾文档',
			locales: {
				root: {
				  label: '简体中文',
				  lang: 'zh-CN',
				},
			},
			social: {
				telegram: 'https://t.me/zhetengsha_group',
			},
			sidebar: [
				{ label:'主页', link:'/' },
				{ label:'传送门', link:'/home' },
				{
					label: '项目',
					items: [
						{ label: 'Sub Store', slug: 'project/sub-store/home' },
						{ label: 'Script Hub', slug: 'project/script-hub/home' },
						{ label: 'BoxJs', slug: 'project/boxjs/home' },
						{ label: 'PagerMaid-Pyro', slug: 'project/pagermaid-pyro/home' },
					],
				},
				{ label:'关于', slug:'about/about' }
			],
		}),
	],
});

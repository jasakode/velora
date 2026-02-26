import { defineConfig } from "vitepress";
import { version } from '../../package.json'

export default defineConfig({
  base: "/velora",
  title: "Velora",
  description: "A free and feature-rich web text editor library",

  themeConfig: {
    nav: [
      { text: `v${version}`, link: 'https://github.com/jasakode/velora' }
    ],
    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "Getting Started", link: "/guide" },
        ],
      },
    ],
  },
});

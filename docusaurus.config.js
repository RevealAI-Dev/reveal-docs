// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Reveal Widget Documentation',
  tagline: 'Integrate conversational studies and surveys into your website',
  favicon: 'https://usereveal.ai/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.usereveal.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'RevealAI-Dev', // Usually your GitHub org/user name.
  projectName: 'reveal-docs', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages', // The branch where the built website will be deployed

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/RevealAI-Dev/reveal-docs/tree/main/',
          routeBasePath: '/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/reveal-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        // disableSwitch: true,
        // respectPrefersColorScheme: false,
      },
      navbar: {
        logo: {
          alt: 'Reveal Logo',
          src: 'img/reveal-logo-neg.png',
          srcDark: 'img/reveal-logo.png',
        },
        items: [
          // {
          //   to: '/',
          //   position: 'left',
          //   label: 'Docs',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/',
              },
              {
                label: 'Getting Started',
                to: '/getting-started',
              },
              {
                label: 'Configuration',
                to: '/configuration',
              },
              {
                label: 'Floating Widget',
                to: '/floating-widget',
              },
              {
                label: 'Embedded Component',
                to: '/embedded-component',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'Contact Us',
                to: '/support',
              },
              {
                label: 'Email',
                href: 'mailto:support@usereveal.ai',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Reveal Website',
                href: 'https://usereveal.ai',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Reveal AI.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Serverless-App',
  tagline: 'Serverless-app is a platform for developers.',
  url: 'https://serverless-app.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicons/favicon.ico',
  organizationName: 'Serverless App', // Usually your GitHub org/user name.
  projectName: 'serverless-app', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      zh: {
        label: '简体中文',
      },
    },
  },
  themeConfig: {
    announcementBar: {
      id: 'start',
      content:
        '<div class="header-item">⭐️ If you like serverless-app, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/serverless-app-com/serverless-app">GitHub</a>!⭐️</div>'
    },
    algolia: {
      appId: 'PXMFHFWUGZ',
      apiKey: '2d1f4924c15d2cc0947820c01e65521f',
      indexName: 'serverless-app',
      contextualSearch: false,
    },
    navbar: {
      title: 'Serverless-App',
      logo: {
        alt: 'Serverless-App',
        src: 'img/logo.svg',
        srcDark: 'img/logoDark.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // {
        //   to: 'blog',
        //   label: 'Blog',
        //   position: 'left',
        // },
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
        {
          href: 'https://github.com/serverless-app-com/serverless-app',
          className: 'header-github-link',
          position: 'right',
        },
      ],
    },
    footer: {
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Getting Started',
      //         to: '/docs/quick-start',
      //       },
      //       {
      //         label: 'Tutorials',
      //         to: '/docs/tutorials/webservice',
      //       },
      //       {
      //         label: 'Core Concepts',
      //         to: '/docs/getting-started/core-concept',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/serverless-app-com/serverless-app',
      //       },
      //       {
      //         label: 'Blog',
      //         to: 'blog',
      //       },
      //     ],
      //   },
      // ],
      copyright: `
        <br />
        <strong>© Serverless-App @ ${new Date().getFullYear()} | Documentation Distributed under <a href="https://creativecommons.org/licenses/by/4.0">CC-BY-4.0</a> </strong> 
        <br />
      `,
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: ['cue', 'powershell'],
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      config: {
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)',
        },
      },
    },
  },
  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/img/favicons/apple-touch-icon.png",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/img/favicons/favicon-32x32.png",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/img/favicons/favicon-16x16.png",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/svg+xml",
        href: "/img/favicons/favicon.svg",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/png",
        href: "/img/favicons/favicon.png",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "manifest",
        href: "/img/favicons/site.webmanifest",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "mask-icon",
        color: "#ffffff",
        href: "/img/favicons/safari-pinned-tab.svg",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "theme-color",
        content: "#ffffff",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "msapplication-config",
        content: "/img/favicons/browserconfig.xml",
      },
    },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: function ({ locale, docPath }) {
            return `https://github.com/serverless-app-com/serverless-app/edit/main/docs/${docPath}`;
          },
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          includeCurrentVersion: true,
          remarkPlugins: [require('mdx-mermaid')],
        },
        gtag: {
          trackingID: 'G-5GLR1Y52M7',
          anonymizeIP: false,
        },
        blog: {
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          editUrl: 'https://github.com/serverless-app-com/serverless-app/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    require.resolve('docusaurus-plugin-image-zoom'),
  ],
  scripts: [
    {
      src: '/custom.js',
      async: true,
    },
  ],
};

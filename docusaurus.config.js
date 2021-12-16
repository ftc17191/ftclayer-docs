const codeTheme = {
  "plain": {
    "color": "#a9b7c6",
    "backgroundColor": "#232525"
  },
  "styles": [
    {
      "types": [
        "punctuation",
        "comment"
      ],
      "style": {
        "color": "rgb(128, 128, 128)"
      }
    },
    {
      "types": [
        "string"
      ],
      "style": {
        "color": "rgb(106, 135, 89)"
      }
    },
    {
      "types": [
        "number"
      ],
      "style": {
        "color": "rgb(104, 151, 187)"
      }
    },
    {
      "types": [
        "builtin",
        "keyword"
      ],
      "style": {
        "color": "rgb(204, 120, 50)"
      }
    },
    {
      "types": [
        "variable"
      ],
      "style": {
        "color": "rgb(152, 118, 170)"
      }
    },
    {
      "types": [
        "class-name",
        "function"
      ],
      "style": {
        "color": "rgb(169, 183, 198)"
      }
    },
    {
      "types": [
        "tag"
      ],
      "style": {
        "color": "rgb(204, 107, 46)"
      }
    },
    {
      "types": [
        "attr-name"
      ],
      "style": {
        "color": "rgb(186, 186, 138)"
      }
    },
    {
      "types": [
        "deleted"
      ],
      "style": {
        "color": "rgb(249, 38, 114)"
      }
    },
    {
      "types": [
        "inserted"
      ],
      "style": {
        "color": "rgb(166, 226, 46)"
      }
    },
    {
      "types": [
        "changed"
      ],
      "style": {
        "color": "rgb(230, 219, 116)"
      }
    }
  ]
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FTCLayer documentation',
  tagline: 'Make FTC programming easy',
  url: 'https://ftclayer-docs.pages.dev',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ftc17191', // Usually your GitHub org/user name.
  projectName: 'ftclayer-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.dev/ftc17191/FTCLayer-docs/blob/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'FTCLayer',
        logo: {
          alt: 'FIRST Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Getting Started',
          },
          {
            href: 'https://github.com/ftc17191/FTCLayer-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //   ],
          // },
          {
            title: 'GitHub',
            items: [
              {
                label: 'Docs',
                href: 'https://github.com/ftc17191/FTCLayer-docs',
              },
              {
                label: 'Source Code',
                href: 'https://github.com/ftc17191/FTCLayer',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} FTCLayer. Built with Docusaurus. Hosted on Cloudflare Pages`,
      },
      prism: {
        theme: codeTheme,
        additionalLanguages: ['java']
      },
    }),
};

module.exports = config;

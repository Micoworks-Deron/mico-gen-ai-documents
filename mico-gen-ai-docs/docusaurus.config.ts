import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Mico Gen AI",
  tagline: "Comprehensive AI Vision API for image processing and generation",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "mico", // Usually your GitHub org/user name.
  projectName: "mico-gen-ai-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
          routeBasePath: "docs/developers",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Mico Gen AI",
      logo: {
        alt: "Mico Gen AI Logo",
        src: "img/mico_logo.webp",
      },
      items: [
        {
          type: "dropdown",
          label: "Developers",
          position: "left",
          items: [
            {
              label: "API Documentation",
              to: "/docs/developers/mico-gen-ai/introduction",
            },
            {
              label: "Getting Started",
              to: "/docs/developers/getting-started",
            },
          ],
        },
        {
          type: "dropdown",
          label: "Resources",
          position: "left",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
          ],
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Developers",
          items: [
            {
              label: "API Documentation",
              to: "/docs/developers/mico-gen-ai/introduction",
            },
            {
              label: "Getting Started",
              to: "/docs/developers/getting-started",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mico Gen AI. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "api", // plugin id
        docsPluginId: "classic", // configured for preset-classic
        config: {
          micoGenAI: {
            specPath: "api-documents.yaml",
            outputDir: "docs/mico-gen-ai", // output to docs dir so that it's processed by docs plugin
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        },
      },
    ],
  ],
  themes: ["docusaurus-theme-openapi-docs"], // export theme components
};

export default config;

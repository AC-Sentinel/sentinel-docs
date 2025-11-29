import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';

function useHead() {
  const { asPath } = useRouter();
  const { frontMatter, title } = useConfig();
  const url = `https://docs.sentinel-ac.xyz${asPath}`;
  const description = frontMatter.description || "Sentinel-AC";
  console.log(title)
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/static/logo.ico" />
      <meta httpEquiv="Content-Language" content="en" />
      <title>Sentinel-AC</title>
    </>
  );
}

function useNextSeoProps() {
  const { asPath } = useRouter();
  const arr = asPath.replace(/[-_]/g, ' ').split('/');
  const category = (arr[1][0] !== '#' && arr[1]) || 'Community Ox';
  const rawTitle = arr[arr.length - 1];
  const title = /[a-z]/.test(rawTitle) && /[A-Z]/.test(rawTitle) ? rawTitle : '%s';
  console.log(rawTitle)
  return {
    titleTemplate: `${title} - ${
      rawTitle === category ? 'Documentation' : category.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
    }`,
  };
}


const config: DocsThemeConfig = {
  logo: (
    <div
      style={{
        paddingLeft: '50px',
        lineHeight: '38px',
        background: "url('https://avatars.githubusercontent.com/u/246709071?s=200&v=4') no-repeat left",
        backgroundSize: '38px',
        fontWeight: 550,
      }}
    >
      Sentinel-AC
    </div>
  ),
  chat: {
    link: 'https://discord.gg/a88uaZgwDp',
  },
  footer: {
    content: 'Sentinel-AC Documentation',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  toc: {
    backToTop: true,
  },
  head: useHead,
  useNextSeoProps: useNextSeoProps,
}

export default config

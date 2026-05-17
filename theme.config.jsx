import React from 'react'

/** @type {import('nextra-theme-docs').DocsThemeConfig} */
const config = {
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
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="https://avatars.githubusercontent.com/u/246709071?s=200&v=4" />
      <meta httpEquiv="Content-Language" content="en" />
      <title>Sentinel-AC</title>
      <meta property="og:title" content="Sentinel-AC Documentation" />
      <meta property="og:description" content="A FiveM Anticheat Documentation" />
      <meta property="og:image" content="https://avatars.githubusercontent.com/u/246709071?s=200&v=4" />
      <meta property="og:url" content="https://www.sentinel-ac.xyz/" />
      <meta property="og:type" content="website" />
    </>
  ),
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://github.com/clxsx" target="_blank" rel="noreferrer">
          Sentinel-AC
        </a>
        . Built with{' '}
        <a href="https://nextra.site" target="_blank" rel="noreferrer">Nextra</a>.
      </span>
    ),
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') return <span style={{ fontWeight: 700, fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: '.08em' }}>{title}</span>
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    float: true,
    title: 'On This Page',
    backToTop: true,
  },
  search: {
    placeholder: 'Search documentation…',
  },
  chat: {
    link: 'https://discord.gg/a88uaZgwDp',
  },
}

export default config

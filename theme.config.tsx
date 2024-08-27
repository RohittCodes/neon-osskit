import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  useNextSeoProps: () => ({
    titleTemplate: '%s | Neon OSS Kit',
    title: 'Neon OSS Kit',
  }),
  head: (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Neon OSS Kit" />
        <meta property="og:description" content="An open-source project starter kit with Next.js, Tailwind CSS, TypeScript, and more." />
      </>
  ),
  logo: <span>Neon OSS Kit</span>,
  project: {
    link: 'https://github.com/rohittcodes/neon-osskit',
  },
  chat: {
    link: 'https://discord.com',
  },
  gitTimestamp: (
    <></>
  ),
  sidebar: {
    toggleButton: true,
  },
  docsRepositoryBase: 'https://github.com/rohittcodes/neon-osskit/tree/main',
  footer: {
    component: (
      <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#111', borderTop: '1px solid #333' }}>
        <span className="text-sm">Made with ❤️ by&nbsp;
          <a
            href="https://rohittcodes.netlify.app" target="_blank" rel="noopener noreferrer"
            style={{ color: '#0099cc', textDecoration: 'underline' }}
          >
            RohittCodes
            </a>
        </span>
      </div>
    )
  },
}

export default config

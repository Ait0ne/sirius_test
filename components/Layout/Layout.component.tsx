import React, { ReactNode } from 'react'
import Head from 'next/head'
import {PageContainer} from '../../styles/default.styles';

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Sirius Future' }: Props) => (
  <PageContainer>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet"></link>
    </Head>
    {children}
  </PageContainer>
)

export default Layout

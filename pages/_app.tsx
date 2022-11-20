// import '../styles/globals.css'
import { Global } from '@emotion/react'
import "antd/dist/antd.css"
import { AppProps } from 'next/app'
import { globalStyles } from '../src/commons/styles/globalStyles'
import ApolloSetting from '../src/components/commons/apollo'
import Layout from '../src/components/commons/layout'


function MyApp({ Component, pageProps }: AppProps) {

  

  return (
    <ApolloSetting>
      <>
        <Global styles={globalStyles} />
        <Layout>
            <Component {...pageProps}/>
        </Layout>
      </>
    </ApolloSetting>
  );
}

export default MyApp;
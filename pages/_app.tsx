// import '../styles/globals.css'
import { Global } from '@emotion/react'
import "antd/dist/antd.css"
import { AppProps } from 'next/app'
import { globalStyles } from '../src/commons/styles/globalStyles'
import ApolloSetting from '../src/components/commons/apollo'
import Layout from '../src/components/commons/layout'
import {RecoilRoot} from "recoil"

function MyApp({ Component, pageProps }: AppProps) {

  

  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <Layout>
              <Component {...pageProps}/>
          </Layout>
        </>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
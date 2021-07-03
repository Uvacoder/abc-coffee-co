import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import OrderSummary from './OrderSummary'

export default function Layout({children}) {
    return (
      <div className="container" style={{minWidth: '100%', padding: "0", overflow: "hidden"}}>
        <Head>
          <title>Coffee Roasters</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="Description" content="Planet fact pages" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" /> 
        </Head>
        <Header />
          <main>
            {children}
          </main>
        <OrderSummary />
        <Footer />
      </div>
    )
  }
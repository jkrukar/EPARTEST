import '@/styles/globals.css'
import Script from 'next/script'


export default function App({ Component, pageProps }) {
  return (
  	<React.Fragment>
  	<Script src="/aframe-ar.js" />
  	<Script src="/aframe.min.js" />
  	<Component {...pageProps} />
  	</React.Fragment>
  	)
}

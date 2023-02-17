import '@/styles/globals.css'
import Script from 'next/script'


export default function App({ Component, pageProps }) {
  return (
  	<div>
  	<Script src="/aframe-ar.js" />
  	<Script src="/aframe.min.js" />
  	<Component {...pageProps} />
  	</div>
  	)
}

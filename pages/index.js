import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <main className={styles.main}>

    <Script src="/aframe.min.js" strategy='beforeInteractive' />
    <Script src="/aframe-ar.js" strategy='beforeInteractive' />
    

    <p>test</p>


    <a-scene embedded arjs='sourceType: webcam; debugUIEnabled: false;'>

<a-marker preset='hiro'>

<a-entity
        gltf-model="/arTestCube.gltf"
        scale="5 5 5"
        position="50 150 0"
      >
      </a-entity>

</a-marker>

<a-entity camera></a-entity>

</a-scene>

    </main>
    </>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <main className={styles.main}>

    <p>test</p>


        <div>
    <a-scene embedded arjs='sourceType: webcam; debugUIEnabled: false;'>

<a-marker preset='hiro'>

<a-box position='0 1 0' material='opacity: 0.5; color: #F70087;''></a-box>

</a-marker>

<a-entity camera></a-entity>

</a-scene>
  </div>

    </main>
    </>
  )
}

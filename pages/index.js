import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    
    <script src="https://aframe.io/releases/1.0.0/aframe.min.js"></script>
    <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
    <body style="margin : 0px; overflow: hidden;">
        <a-scene embedded arjs>
        <a-marker preset="hiro">
            <!-- we use cors proxy to avoid cross-origin problems ATTENTION! you need to set up your server -->
            <a-entity
            position="0 0 0"
            scale="0.05 0.05 0.05"
            gltf-model="your-server/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
            ></a-entity>
        </a-marker>
        <a-entity camera></a-entity>
        </a-scene>
    </body>

    </>
  )
}

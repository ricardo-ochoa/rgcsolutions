import { Suspense, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import { Canvas, extend, useLoader } from '@react-three/fiber'
import { OrbitControls, Environment, Effects, Loader, useTexture,Stars, ScrollControls } from '@react-three/drei'
import Sphere  from '../components/ui/World'
import Lottie from 'react-lottie-player'
import lottieJson from '../public/signal.json';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>RGC · Soluciones</title>
        <meta name="RGC Soluciones" content="Telemetría y comunicación integral" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <div className={styles.description}>
          {/* <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p> */}
          {/* <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div> */}
        </div>

        {/* <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div> */}

        <div className={styles.grid}>

          <div className={styles.card1}>
            <div className={inter.className}>
            <h2>
              RCG · SOLUCIONES
            </h2>
            <p>
              Telemetría y comunicación integral
            </p>
            </div>
          </div>

          <a
            className={styles.card}
            href="mailto:gerencia@rgcsoluciones.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className={inter.className}>
              Contáctanos <span>-&gt;</span>
            </h4>
            <p className={inter.className}>
              ¡Crece tu empresa y cuéntanos tu proyecto!
            </p>
          </a>

        </div>
      </main>

      <div className={styles.sat}>
      <span>🛰</span>

      {/* <Lottie
      loop
      animationData={lottieJson}
      className={styles.signals}
      play
      style={{ width: 150, height: 150, zIndex:'2', position:'absolute', marginTop:'1.9rem', marginRight:'1.6rem' }}
      /> */}

      <Canvas className={styles.worldBg} camera={{ zoom: 400, position:[40,10,50]}}>
        <spotLight intensity={0.5} angle={0.2} penumbra={1} position={[0, 15, 10]} />
        <pointLight position={[35, 35, 0]} intensity={0.4} />
        <pointLight position={[-35, -35, 0]} intensity={0.4} />
        <Stars radius={100} depth={50} count={5000} factor={20} saturation={0} fade speed={ 0.5 } />
        <Suspense fallback={null}>
          
          <Sphere />
          
        </Suspense>
        <OrbitControls autoRotate  autoRotateSpeed={ 0.054 } target={[0,0.8,0]} enableZoom={false} minPolarAngle={ 2.1 } maxPolarAngle={1}/>
      </Canvas>
      </div>
    </>
  )
}

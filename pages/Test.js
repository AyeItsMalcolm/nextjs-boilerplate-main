import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Malcolm Henzaga - Web3 Resume</title>
        <meta name="description" content="Malcolm Henzaga's Web3 Resume" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1 className={styles.title}>Malcolm Henzaga</h1>
        <p className={styles.description}>Web3 Developer &amp; Sound Artist</p>

        <section id="about" className={styles.section}>
          <h2>About Me</h2>
          <p>
            Hi, my name is Malcolm Henzaga. I hold a BSc in Sound Arts and an MSc in Blockchain and Cryptocurrency. As a versatile individual, I aim to excel in web3 development, with a goal of becoming a founder or joining an executive team. I bring 7 years of project management and executive support experience, specializing in audiovisual, music production, smart contracts, security tokens, and the educational foundations of web3 and blockchain technology. Explore my resume, NFT collection, and ways to connect with me below.
          </p>
        </section>

        <section id="nft-collection" className={styles.section}>
          <h2>NFT Collection</h2>
          <p>Check out my exclusive NFT collection showcasing my creative and technical skills.</p>
          {/* Add NFT collection preview here */}
        </section>

        <section id="contact" className={styles.section}>
          <h2>Contact</h2>
          <p>
            Let's get in touch! Reach out to me on{' '}
            <a href="https://twitter.com/your_twitter_handle" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>{' '}
            or{' '}
            <a href="mailto:your_email@example.com" target="_blank" rel="noopener noreferrer">
              email
            </a>
            .
          </p>
        </section>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </footer>
      </main>
    </>
  )
}

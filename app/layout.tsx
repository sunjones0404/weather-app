import 'styles/globals.scss'
import styles from './layout.module.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from './components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Weather App',
  description: 'Get the latest weather updates for your location'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  )
}

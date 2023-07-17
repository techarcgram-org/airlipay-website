import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AirliPay',
  description: 'The Landing Page For Our App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header/>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

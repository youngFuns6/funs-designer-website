import Footer from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FunSCADA - 云组态解决方案',
  description: '专业的云组态配置平台，提供工业级监控和数据采集解决方案',
  keywords: '云组态, SCADA, 工业自动化, 数据采集, 实时监控, 工业互联网',
  icons: {
    icon: '/favicon.ico',
    apple: '/logo192.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <header className="bg-primary">
          <Navigation />
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

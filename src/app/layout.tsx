import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FunSCADA - 云组态解决方案',
  description: '专业的云组态配置平台，提供工业级监控和数据采集解决方案',
  keywords: '云组态, SCADA, 工业自动化, 数据采集, 实时监控, 工业互联网',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <header className="bg-primary text-white">
          <div className="container mx-auto py-4 px-4 flex justify-between items-center">
            <div className="text-2xl font-bold">FunSCADA</div>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="/" className="hover:text-gray-200">首页</a></li>
                <li><a href="/features" className="hover:text-gray-200">功能</a></li>
                <li><a href="/solutions" className="hover:text-gray-200">解决方案</a></li>
                <li><a href="/about" className="hover:text-gray-200">关于我们</a></li>
                <li><a href="/contact" className="hover:text-gray-200">联系我们</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">FunSCADA</h3>
                <p>专业的云组态配置平台，为工业自动化提供现代化解决方案。</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">产品</h3>
                <ul className="space-y-2">
                  <li><a href="/features" className="hover:text-gray-300">功能</a></li>
                  <li><a href="/solutions" className="hover:text-gray-300">解决方案</a></li>
                  <li><a href="/documentation" className="hover:text-gray-300">文档</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">资源</h3>
                <ul className="space-y-2">
                  <li><a href="/blog" className="hover:text-gray-300">博客</a></li>
                  <li><a href="/tutorials" className="hover:text-gray-300">教程</a></li>
                  <li><a href="/faq" className="hover:text-gray-300">常见问题</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">联系我们</h3>
                <ul className="space-y-2">
                  <li>邮箱: contact@funscada.com</li>
                  <li>电话: 400-123-4567</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center">
              <p>© {new Date().getFullYear()} FunSCADA. 保留所有权利。</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 
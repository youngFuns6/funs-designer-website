"use client"

import Link from 'next/link'
import { useState } from 'react'

export default function Footer() {
  const [showQRCode, setShowQRCode] = useState(false);
  
  return (
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
              <li><Link href="/features" className="hover:text-gray-300">功能</Link></li>
              <li><Link href="/solutions" className="hover:text-gray-300">解决方案</Link></li>
              <li><Link href="/documentation" className="hover:text-gray-300">文档</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">资源</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="hover:text-gray-300">博客</Link></li>
              <li><Link href="/tutorials" className="hover:text-gray-300">教程</Link></li>
              <li><Link href="/faq" className="hover:text-gray-300">常见问题</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <ul className="space-y-2">
              <li>邮箱: 384597439@qq.com</li>
              <li>
                <div className="flex space-x-4 mt-4">
                  {/* Social media icons */}
                  {/* <a href="https://weibo.com" target="_blank" rel="noopener noreferrer" aria-label="微博">
                    <svg className="w-6 h-6 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10.098 20c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zm0-10.5c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5zM15 4a2 2 0 100 4 2 2 0 000-4z"></path>
                    </svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="领英">
                    <svg className="w-6 h-6 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                    </svg>
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <svg className="w-6 h-6 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
                    </svg>
                  </a> */}
                  {/* 添加微信图标 */}
                  <div className="relative" onMouseEnter={() => setShowQRCode(true)} onMouseLeave={() => setShowQRCode(false)}>
                    <svg className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.691 2C5.309 2 2.567 4.275 2.567 7.056c0 1.519.71 2.888 1.89 3.895L3.8 12.345c-.071.18.04.376.224.376.061 0 .122-.02.173-.06l1.733-1.2c.82.368 1.731.594 2.762.594 3.382 0 6.124-2.275 6.124-5.056S12.073 2 8.691 2zm-2.51 2.914c.403 0 .73.327.73.73s-.327.73-.73.73-.73-.327-.73-.73.327-.73.73-.73zm5.02 0c.403 0 .73.327.73.73s-.327.73-.73.73-.73-.327-.73-.73.327-.73.73-.73zM15.309 7.5c-3.382 0-6.124 2.275-6.124 5.056 0 1.519.71 2.888 1.89 3.895l-.657 1.394c-.071.18.04.376.224.376.061 0 .122-.02.173-.06l1.733-1.2c.82.368 1.731.594 2.762.594 3.382 0 6.124-2.275 6.124-5.056S18.691 7.5 15.309 7.5zm-2.51 2.914c.403 0 .73.327.73.73s-.327.73-.73.73-.73-.327-.73-.73.327-.73.73-.73zm5.02 0c.403 0 .73.327.73.73s-.327.73-.73.73-.73-.327-.73-.73.327-.73.73-.73z"/>
                    </svg>
                    {/* 悬停时显示二维码 */}
                    {showQRCode && (
                      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-md shadow-lg z-10 w-72">
                        <img 
                          src="/images/wechat-qrcode.jpg" 
                          alt="微信二维码" 
                          className="w-60 h-60 object-contain mx-auto"
                        />
                        <div className="text-center text-sm font-medium text-gray-800 mt-2">扫码联系我们</div>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>
            © {new Date().getFullYear()} FunSCADA. 保留所有权利。
            {" "}
            <a 
              href="https://beian.miit.gov.cn/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              皖ICP备2025082507号
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
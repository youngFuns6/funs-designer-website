import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const scandaUrl = "https://scanda.funsface.com"
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                专业的云组态配置平台
              </h1>
              <p className="text-xl mb-8">
                FunSCADA 提供工业级监控和数据采集解决方案，让您的自动化系统更加智能高效
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href={scandaUrl} target="_blank"
                  className="bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition">
                  在线演示
                </Link>
                <Link href="/contact" 
                  className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-opacity-10 transition">
                  联系我们
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-80 w-full">
                <div className="absolute inset-0 bg-white bg-opacity-10 rounded-lg shadow-2xl overflow-hidden">
                  {/* 由于没有真实图片，这里用一个占位颜色块 */}
                  <div className="h-full w-full">
                    <img style={{width: "100%", height: "100%"}} src="/images/离心泵.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">为什么选择 FunSCADA</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              我们的云组态平台提供全方位的工业自动化监控解决方案
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 transition hover:shadow-lg">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">高效配置</h3>
              <p className="text-gray-600">
                直观的拖拽式界面，快速创建复杂的工业监控画面，无需编程知识
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 transition hover:shadow-lg">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">实时数据</h3>
              <p className="text-gray-600">
                毫秒级数据采集和展示，确保您的决策基于最新的工业数据
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 transition hover:shadow-lg">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">安全可靠</h3>
              <p className="text-gray-600">
                多层次安全架构，保护您的工业数据和控制系统免受威胁
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">全面的云组态解决方案</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              从数据采集到可视化分析，FunSCADA 提供完整的工业自动化监控链
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 bg-white rounded-lg shadow">
              <h3 className="text-2xl font-semibold mb-6">数据采集与处理</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>支持多种工业协议：Modbus、OPC UA、Siemens S7等</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>边缘计算能力，实现数据本地预处理</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>高性能数据存储，支持历史数据快速检索</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>数据过滤与转换，确保数据质量</span>
                </li>
              </ul>
            </div>
            
            <div className="p-8 bg-white rounded-lg shadow">
              <h3 className="text-2xl font-semibold mb-6">可视化与分析</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>丰富的组件库，支持各类工业图表与仪表</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>自定义报表功能，支持数据导出与共享</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>趋势分析工具，预测设备状态与性能</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>多维度数据展示，支持3D可视化</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">准备提升您的工业自动化水平？</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            立即体验 FunSCADA 云组态平台，开启智能工业新篇章
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href={scandaUrl} target="_blank"
              className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition">
              免费试用
            </Link>
            <Link href="/documentation" 
              className="bg-transparent border-2 border-white px-8 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition">
              查看文档
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 
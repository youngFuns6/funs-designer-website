import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '功能特性 - FunSCADA 云组态平台',
  description: '探索 FunSCADA 的核心功能与特性，包括直观的组态设计、实时数据采集、智能分析等',
  keywords: '云组态功能, SCADA特性, 工业自动化功能, 数据可视化, 工业监控系统',
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary to-blue-800 py-16 px-4">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl font-bold mb-4">FunSCADA 功能特性</h1>
          <p className="text-xl max-w-3xl mx-auto">
            探索我们先进的云组态平台如何帮助您构建现代化的工业监控系统
          </p>
        </div>
      </div>

      {/* Main Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-24">
            {/* Feature 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-6 text-primary">直观的组态设计</h2>
                <p className="text-lg text-gray-700 mb-6">
                  通过简单的拖拽操作，轻松创建专业级的工业监控界面。无需编程知识，即可实现复杂功能。
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>丰富的工业组件库，包含阀门、管道、仪表等控件</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>可定制的图形元素，支持自定义外观与行为</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>强大的模板功能，一次创建多次使用</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>智能对齐与分布工具，确保界面美观规范</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2 bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="p-8 text-gray-500">图片占位 - 组态设计界面</div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="p-8 text-gray-500">图片占位 - 数据采集架构</div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">高效的数据采集</h2>
                <p className="text-lg text-gray-700 mb-6">
                  支持各种工业协议和设备，实现毫秒级的数据采集与传输，确保您的决策基于最新数据。
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>支持 Modbus TCP/RTU、OPC UA、Siemens S7 等协议</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>可配置的采集周期，满足不同场景需求</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>边缘计算节点，支持本地处理与过滤</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>断线续传功能，确保数据完整性</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-6 text-primary">智能数据分析</h2>
                <p className="text-lg text-gray-700 mb-6">
                  内置强大的分析工具，从海量数据中挖掘有价值的信息，辅助工业决策与优化。
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>实时数据趋势分析，预测系统行为</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>设备性能监测，优化运行效率</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>异常检测算法，提前预警潜在风险</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>自定义报表生成，支持多种导出格式</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2 bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="p-8 text-gray-500">图片占位 - 数据分析界面</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">更多强大功能</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Additional Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">多层次安全体系</h3>
              <p className="text-gray-600">
                精细的权限控制、数据加密传输、操作审计，全方位保障系统安全性
              </p>
            </div>

            {/* Additional Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">高可用架构</h3>
              <p className="text-gray-600">
                分布式部署、故障自动转移，确保系统 7x24 小时稳定运行
              </p>
            </div>

            {/* Additional Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">灵活的部署选项</h3>
              <p className="text-gray-600">
                支持公有云、私有云或混合部署模式，满足不同规模企业需求
              </p>
            </div>

            {/* Additional Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">开放 API 接口</h3>
              <p className="text-gray-600">
                丰富的 REST API，轻松与其他业务系统集成，如 ERP、MES 等
              </p>
            </div>

            {/* Additional Feature 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">多端访问</h3>
              <p className="text-gray-600">
                支持 PC、平板、手机等多种设备访问，随时随地掌握生产动态
              </p>
            </div>

            {/* Additional Feature 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">智能告警系统</h3>
              <p className="text-gray-600">
                支持短信、邮件、应用内推送等多种告警方式，确保关键事件及时响应
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">探索 FunSCADA 的更多功能</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            安排专业演示，了解 FunSCADA 如何满足您的工业自动化需求
          </p>
          <div className="flex justify-center">
            <a href="/contact" className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition">
              预约演示
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 
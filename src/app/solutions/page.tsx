import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '行业解决方案 - FunSCADA 云组态平台',
  description: '探索 FunSCADA 在各个行业的应用解决方案，包括制造业、能源、水处理等领域',
  keywords: '工业自动化解决方案, SCADA应用, 制造业解决方案, 能源管理, 水处理监控',
}

export default function SolutionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-blue-800 py-16 px-4">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl font-bold mb-4">行业解决方案</h1>
          <p className="text-xl max-w-3xl mx-auto">
            为不同行业提供专业的云组态解决方案，助力企业数字化转型
          </p>
        </div>
      </div>

      {/* Industry Solutions Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Manufacturing Solution */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <div className="text-gray-500">制造业解决方案图片</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">制造业解决方案</h3>
                <p className="text-gray-600 mb-4">
                  实现生产过程的实时监控、设备管理、质量控制，提升生产效率
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>生产线实时监控</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>设备预测性维护</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>质量追溯系统</span>
                  </li>
                </ul>
                <Link href="/solutions/manufacturing" className="text-primary font-medium hover:text-primary-dark">
                  了解更多 →
                </Link>
              </div>
            </div>

            {/* Energy Solution */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <div className="text-gray-500">能源管理解决方案图片</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">能源管理解决方案</h3>
                <p className="text-gray-600 mb-4">
                  实现能源消耗监控、优化调度、成本分析，提高能源利用效率
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>能源消耗监控</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>智能调度优化</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>成本分析报表</span>
                  </li>
                </ul>
                <Link href="/solutions/energy" className="text-primary font-medium hover:text-primary-dark">
                  了解更多 →
                </Link>
              </div>
            </div>

            {/* Water Treatment Solution */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <div className="text-gray-500">水处理解决方案图片</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">水处理解决方案</h3>
                <p className="text-gray-600 mb-4">
                  实现水质监测、设备控制、报警管理，确保供水安全可靠
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>水质实时监测</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>设备远程控制</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>智能报警管理</span>
                  </li>
                </ul>
                <Link href="/solutions/water" className="text-primary font-medium hover:text-primary-dark">
                  了解更多 →
                </Link>
              </div>
            </div>

            {/* Building Automation Solution */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <div className="text-gray-500">楼宇自动化解决方案图片</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">楼宇自动化解决方案</h3>
                <p className="text-gray-600 mb-4">
                  实现楼宇设备监控、环境控制、能源管理，提升建筑智能化水平
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>设备集中监控</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>环境智能控制</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>能源优化管理</span>
                  </li>
                </ul>
                <Link href="/solutions/building" className="text-primary font-medium hover:text-primary-dark">
                  了解更多 →
                </Link>
              </div>
            </div>

            {/* Transportation Solution */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <div className="text-gray-500">交通监控解决方案图片</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">交通监控解决方案</h3>
                <p className="text-gray-600 mb-4">
                  实现交通信号控制、车流监测、设备管理，提升交通运营效率
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>信号智能控制</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>车流实时监测</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>设备状态监控</span>
                  </li>
                </ul>
                <Link href="/solutions/transportation" className="text-primary font-medium hover:text-primary-dark">
                  了解更多 →
                </Link>
              </div>
            </div>

            {/* Custom Solution */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <div className="text-gray-500">定制化解决方案图片</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">定制化解决方案</h3>
                <p className="text-gray-600 mb-4">
                  根据客户需求提供个性化解决方案，满足特殊行业应用场景
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>需求分析评估</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>方案定制开发</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>专业实施服务</span>
                  </li>
                </ul>
                <Link href="/solutions/custom" className="text-primary font-medium hover:text-primary-dark">
                  了解更多 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">成功案例</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <div className="text-gray-500">案例图片</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">某大型制造企业智能化改造</h3>
                <p className="text-gray-600 mb-4">
                  通过 FunSCADA 云组态平台，实现生产线的智能化改造，提升生产效率 30%
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>客户行业：制造业</span>
                  <span className="mx-2">|</span>
                  <span>实施周期：3个月</span>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <div className="text-gray-500">案例图片</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">某水务集团智慧水务建设</h3>
                <p className="text-gray-600 mb-4">
                  利用 FunSCADA 实现水厂智能化管理，降低运营成本 20%
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>客户行业：水处理</span>
                  <span className="mx-2">|</span>
                  <span>实施周期：4个月</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">寻找适合您的解决方案</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            我们的专业团队将为您提供最适合的云组态解决方案
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition">
              联系我们
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '关于我们 - FunSCADA 云组态平台',
  description: '了解 FunSCADA 的发展历程、核心价值观和技术团队，我们致力于为工业自动化领域提供创新解决方案',
  keywords: '云组态公司, SCADA 团队, 工业自动化企业, 关于 FunSCADA, 技术团队, 企业使命',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-blue-800 py-16 px-4">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl font-bold mb-4">关于我们</h1>
          <p className="text-xl max-w-3xl mx-auto">
            FunSCADA 是领先的云组态平台提供商，致力于用创新技术重塑工业自动化
          </p>
        </div>
      </div>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">我们的故事</h2>
            <div className="prose prose-lg mx-auto">
              <p className="mb-4">
                FunSCADA 成立于 2015 年，由一群拥有丰富工业自动化经验的工程师和软件开发者共同创立。我们注意到传统的工业监控系统存在复杂性高、部署困难、集成能力弱等问题，决心开发一款更加现代化、易用且功能强大的云组态平台。
              </p>
              <p className="mb-4">
                经过多年的发展，FunSCADA 已从初创企业成长为行业领先的云组态解决方案提供商，服务于制造业、能源、水处理等多个行业的数百家企业客户。我们的平台不断进化，融合了云计算、大数据、人工智能等前沿技术，为工业企业的数字化转型提供强有力的支持。
              </p>
              <p>
                今天，FunSCADA 团队已拥有超过 100 名员工，包括系统架构师、软件工程师、自动化专家和行业顾问等，我们共同努力，持续创新，为客户提供最佳的工业自动化解决方案。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">使命与价值观</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">我们的使命</h3>
              <p className="text-gray-600">
                通过创新的云组态技术，赋能工业企业实现数字化转型，提高生产效率，降低运营成本，推动行业可持续发展。
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">我们的愿景</h3>
              <p className="text-gray-600">
                成为全球领先的工业自动化云平台，连接工业设备与人，构建更智能、更高效的工业未来。
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">核心价值观</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>持续创新</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>客户至上</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>开放协作</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>卓越品质</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">领导团队</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">照片</span>
              </div>
              <h3 className="text-xl font-bold">张志远</h3>
              <p className="text-primary font-medium mb-2">创始人 & CEO</p>
              <p className="text-gray-600">
                拥有 20 年工业自动化经验，曾任多家知名自动化企业高管，对行业趋势有深刻洞察
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">照片</span>
              </div>
              <h3 className="text-xl font-bold">李明</h3>
              <p className="text-primary font-medium mb-2">技术副总裁</p>
              <p className="text-gray-600">
                计算机科学博士，曾在国际知名科技公司担任架构师，云计算和分布式系统专家
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">照片</span>
              </div>
              <h3 className="text-xl font-bold">王晓燕</h3>
              <p className="text-primary font-medium mb-2">产品总监</p>
              <p className="text-gray-600">
                15 年产品管理经验，精通用户体验设计，主导过多个成功的工业软件产品
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">发展历程</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Milestone 1 */}
              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">1</div>
                  <div className="h-full w-0.5 bg-gray-300"></div>
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold">2015 年 - 公司成立</h3>
                  <p className="text-gray-600 mt-2">
                    FunSCADA 在北京成立，开始第一代云组态产品的研发
                  </p>
                </div>
              </div>

              {/* Milestone 2 */}
              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">2</div>
                  <div className="h-full w-0.5 bg-gray-300"></div>
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold">2017 年 - 产品发布</h3>
                  <p className="text-gray-600 mt-2">
                    推出 FunSCADA 1.0 版本，获得首批企业客户
                  </p>
                </div>
              </div>

              {/* Milestone 3 */}
              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">3</div>
                  <div className="h-full w-0.5 bg-gray-300"></div>
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold">2019 年 - 融资与扩张</h3>
                  <p className="text-gray-600 mt-2">
                    完成 A 轮融资，团队扩大到 50 人，开设上海和深圳分公司
                  </p>
                </div>
              </div>

              {/* Milestone 4 */}
              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">4</div>
                  <div className="h-full w-0.5 bg-gray-300"></div>
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold">2021 年 - 技术突破</h3>
                  <p className="text-gray-600 mt-2">
                    发布 FunSCADA 2.0，引入 AI 分析能力，客户数量突破 200 家
                  </p>
                </div>
              </div>

              {/* Milestone 5 */}
              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">5</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">2023 年 - 行业领先</h3>
                  <p className="text-gray-600 mt-2">
                    成为中国云组态市场份额第一的企业，开始国际化布局
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">合作伙伴</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Partner logos */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="bg-gray-100 h-24 rounded flex items-center justify-center">
                <div className="text-gray-500">合作伙伴 {item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">加入我们，共创未来</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            我们正在寻找热爱技术、充满激情的人才加入 FunSCADA 团队
          </p>
          <div className="flex justify-center">
            <a href="/careers" className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition">
              查看职位
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 
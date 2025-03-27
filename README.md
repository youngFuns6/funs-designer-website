# FunSCADA - 云组态平台官网

这是 FunSCADA 云组态平台的官方网站，基于 Next.js 构建，展示产品特性、行业解决方案以及公司信息。

## 技术栈

- **Next.js**: React 框架，支持 SSR 和 SSG
- **TypeScript**: 类型安全的 JavaScript 超集
- **Tailwind CSS**: 实用优先的 CSS 框架
- **React**: 用于构建用户界面的 JavaScript 库

## 主要功能

- 响应式设计，适配各种屏幕尺寸
- 优化的 SEO 配置，提高搜索引擎可见性
- 多页面结构，清晰展示产品和公司信息

## 项目结构

```
src/
├── app/               # Next.js App Router
│   ├── about/         # 关于我们页面
│   ├── contact/       # 联系我们页面
│   ├── features/      # 功能特性页面
│   ├── solutions/     # 解决方案页面
│   ├── layout.tsx     # 全局布局
│   ├── page.tsx       # 首页
│   └── globals.css    # 全局样式
├── components/        # 可复用组件
└── lib/              # 工具函数和共享代码
```

## 运行项目

确保您安装了 Node.js (v18.17 或更高版本)

```bash
# 安装依赖
npm install

# 开发环境运行
npm run dev

# 构建生产版本
npm run build

# 运行生产版本
npm run start
```

开发服务器默认运行在 http://localhost:3000

## 自定义与扩展

- 网站使用 Tailwind CSS 进行样式设计，可以通过修改 `tailwind.config.js` 文件自定义主题颜色和其他样式
- 页面内容可以在对应的页面文件中进行修改
- 全局布局在 `src/app/layout.tsx` 中定义

## SEO 优化

- 每个页面都包含元数据，包括标题、描述和关键词
- 语义化 HTML 结构，提高可访问性
- 针对搜索引擎优化的图片替代文本和页面结构

## 联系方式

如有任何问题或建议，请联系我们：contact@funscada.com # funs-designer-website

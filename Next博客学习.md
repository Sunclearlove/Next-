## Next.js 博客系统 · 基础功能开发笔记





#### 一、项目结构与技术选型

| 项目名称 |                     内容                     |
| :------: | :------------------------------------------: |
|   框架   |       Next.js App Router + TypeScript        |
|  UI框架  |    Tailwind CSS + @tailwindcss/typography    |
|  数据库  |       Supabase(POstgreSQL + REST API)        |
| 状态管理 | React Hooks (useState, useEffect, useRouter) |



#### 二、项目结构与技术选型

|      功能      |                         技术点                         |
| :------------: | :----------------------------------------------------: |
|  首页文章列表  |      Supabase select(*)查询，展示title + summary       |
|  文章详情页面  |  动态路由 /post/[id], 查询单篇文章数据并渲染Markdown   |
|   创建新文章   | 客户端组件("use client"), 使用表单 + Supabase.insert() |
| 编辑与删除文章 |    编辑页表单 update(), 删除使用按钮调用 .delete()     |
|  Markdown渲染  |    React-markdown + retype-highlight + highlight.js    |
|    SEO优化     |    使用export const metadata 和 generateMetadata()     |
|  ISR静态再生   | generateStaticParams() + export const revalidate = 60  |
|   数据库操作   |  supabase.from().select().insert().update().delete()   |



#### 三、项目结构与技术选型

- [x]  使用 Next.js App Router 开发实际项目
- [x]  掌握 Server Component / Client Component 区别
- [x]  对接 Supabase 做全套 CRUD
- [x]  实现 Markdown 渲染、页面 SEO、静态优化
- [x]  实战项目目录组织 & 模块化拆分






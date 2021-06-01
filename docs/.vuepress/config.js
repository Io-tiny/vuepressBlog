module.exports = {
  title: 'Io-Tiny Blog',
  description: '我的个人博客',
  head: [
    ['link', { ref: 'icon', href: '/logo.jpg' }],
    ['link', { rel: 'apple-touch-icon', href: '/photo.jpg' }],
  ],
  base: '/',    //  部署到github的配置
  makedown: {
    lineNumber: false // 代码块显示行号
  },
  themeConfig: {
    nav: [ // 导航栏配置
      { text: '前端基础', link: '/accumulate/' },
      { text: '算法题库', link: '/algorithm/' },
      { text: '微博', link: 'https://baidu.com' }
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  }
}

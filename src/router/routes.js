
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/Index.vue') },
      { path: 'about', name: 'about',  component: () => import('pages/about.vue') },
      { path: 'activities', name: 'activities',  component: () => import('pages/activities.vue') },
      { path: 'partners', name: 'partners',  component: () => import('pages/partners.vue') },
      { path: 'contact', name: 'contact',  component: () => import('pages/contact.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes

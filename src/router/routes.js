
const routes = [
  {
    path: '/',
    component: () => import('src/components/Login.vue'),
    // children: [
    //   { path: '', component: () => import('pages/Index.vue') }
    // ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  },
  {
    path: '/forgot',
    component: () => import('components/Forgot.vue')
  },
  {
    path: '/welcome',
    component: () => import('components/Welcome.vue')
  },
  {
    path: '/signup',
    component: () => import('components/SignUp.vue')
  }
]

export default routes

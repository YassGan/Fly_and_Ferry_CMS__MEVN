import Vue from 'vue';
import VueRouter from 'vue-router';



import PagePrincipale from '../views/PagePrincipale.vue'; 
import DahboardAdminCMS from '../views/DahboardAdminCMS.vue'; 

import ErrorPage from '../views/ErrorPage.vue'; 




Vue.use(VueRouter);

const routes = [
 


  {
    path: '/PagePrincipale',
    name: 'PagePrincipale',
    component: PagePrincipale,
  },

  {
    path: '/DahboardAdminCMS',
    name: 'DahboardAdminCMS',
    component: DahboardAdminCMS,
  },

  {
    path: '/AproposAdminCMS',
    name: 'AproposAdminCMS',
    component: () => import("@/views/AproposAdminCMS.vue"),

  },


  {
    path: '/ErrorPage',
    name: 'ErrorPage',
    component: ErrorPage,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // If the route requires authentication
    if (token) {
      // If the token exists
      next();
    } else {
      // If the token does not exist, redirect to ErrorPage
      next('/ErrorPage');
    }
  } else {
    next();
  }
});

export default router;

import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/front-door' },
    ],

    linkActiveClass: 'active',
    /*    scrollBehavior(_, _2, savedPosition) {
          if (savedPosition) {
            return savedPosition;
          }
          return { left: 0, top: 0 };
        }
    */
});


router.beforeEach(function (to, from, next) {
    to;
    from;
    next();
});


router.afterEach(function (to, from) {
    to;
    from;
});
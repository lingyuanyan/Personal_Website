import { createRouter, createWebHistory } from 'vue-router';
import { userRoleEnum } from "../../types/index"

import HeaderGuest from "../../headers/HeaderGuest.vue";
import FrontDoor from "../../pages/FrontDoor";
import FooterGuest from "../../footers/FooterGuest"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/front-door' },
        // guest
        {
            name: 'front-door',
            path: '/front-door',
            meta: { requiredRoles: [userRoleEnum.NONE] },
            components: { default: FrontDoor, footer: FooterGuest, header: HeaderGuest },
            /*children: [
              {
                name: 'team-members',
                path: ':teamId',
                component: TeamMembers,
                props: true
              } // /teams/t1
            ]*/
        },
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
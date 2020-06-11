import Vue from 'vue';
import Router from 'vue-router';

import Profile from './views/Profile';
import Home from './views/Home';

Vue.use(Router);

const routes = [
    {
        name: "home",
        path: "/",
        component: Home,
    },
    {
        name: "Profile",
        path: "/profile",
        component: Profile,
    },
]

const router = new Router({ routes });

export default router;
// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import More from './components/About.vue';
import Connection from './components/Connection.vue';
import pc1000 from './components/pc1000.vue';
import pc1200 from './components/pc1200.vue';
import pc1500 from './components/pc1500.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/more',
            name: 'More',
            component: More
        },
        {
            path: '/Connection',
            name: 'Connection',
            component: Connection
        },
        {
            path: '/pc1000',
            name: 'pc1000',
            component: pc1000
        },
        {
            path: '/pc1200',
            name: 'pc1200',
            component: pc1200
        },
        {
            path: '/pc1500',
            name: 'pc1500',
            component: pc1500
        },

    ]
});

export default router;

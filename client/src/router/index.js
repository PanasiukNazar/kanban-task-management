import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/boards/:id',
        component: () => import('@/components/Board.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

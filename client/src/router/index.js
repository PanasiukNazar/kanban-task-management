import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/boards/:id',
        component: () => import('@/components/Board.vue'),

        children: [
            {
                path: '/boards/:id/no-columns',
                component: () => import('@/components/NoColumnsBoard.vue'),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

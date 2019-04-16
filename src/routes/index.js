import Home from '@/views/Home'
import E404 from '@/views/404'
import Login from '@/views/Login'
import Dashboard from '@/views/Dashboard'

import Layout from '@/views/layout/Layout'

// 根目录
const rootPath = '';

// 页面路由
const routes = [
    {path: '', redirect: {name: 'login'}, hidden: true},
    {path: '/home', component: Home, name: 'home', hidden: true},
    {path: '/login', component: Login, name: 'login', hidden: true},
    {path: '/404', component: () => import('@/views/404'), hidden: true},
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        name: 'Dashboard',
        hidden: true,
        children: [{
            path: 'dashboard',
            component: () => import('@/views/Dashboard')
        }]
    }, {
        path: '/user',
        component: Layout,
        children: [
            {
                path: '',
                name: 'User',
                component: () => import('@/views/User'),
                meta: {title: 'User', icon: 'user'}
            }
        ]
    },
    {
        path: '/kyc',
        component: Layout,
        name: 'Kyc',
        meta: {
            title: 'Kyc',
            icon: 'form'
        },
        children: [
            {
                path: 'pending',
                component: () => import('@/views/kyc/Pending'),
                name: 'Pending',
                meta: {title: 'Pending'}
            },
            {
                path: 'legal-approved',
                name: 'Legal Approved',
                component: () => import('@/views/kyc/LegalApproved'),
                meta: {title: 'Legal Approved'}
            },
            {
                path: 'mas-approved',
                name: 'MAS Approved',
                component: () => import('@/views/kyc/MASApproved'),
                meta: {title: 'MAS Approved'}
            },
            {
                path: 'finished',
                name: 'Finished',
                component: () => import('@/views/kyc/Finished'),
                meta: {title: 'Finished'}
            },
            {
                path: 'refused',
                name: 'Refused',
                component: () => import('@/views/kyc/Refused'),
                meta: {title: 'Refused'}
            },
            {
                path: 'corp',
                name: 'Corporate',
                component: () => import('@/views/kyc/Corporate'),
                meta: {title: 'Kyc Corporate'},
                hidden: true
            }
        ]
    },
    { path: '*', redirect: '/404', hidden: true }
].map(route => {
    route.path = rootPath + route.path;
    return route;
});

// 404 页
routes.push({path: '*', component: E404, name: '404'});

export default routes;

import { RouteRecordRaw } from 'vue-router'

export const basicRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/home')
  },
  // 患者相关
  {
    path: '/patient/list',
    name: 'patientList',
    component: () => import('@/views/patient/patientList')
  },
  // 门诊相关
  {
    path: '/appointment/list',
    name: 'departmentList',
    component: () => import('@/views/appointment/departmentList')
  },
  {
    path: '/appointment/scheduling',
    name: 'scheduling',
    component: () => import('@/views/appointment/scheduling')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/Login.vue')
  }
]

import { createRouter, createWebHistory } from 'vue-router'
import AuthPage from '../views/AuthPage.vue'
import CreateTaskPage from '../views/CreateTaskPage.vue'
import MyTasksPage from '../views/MyTasksPage.vue'
import HistoryCreatedTasksPage from '../views/HistoryCreatedTasksPage.vue'

const routes = [
  {
    path: '/',
    name: 'AuthPage',
    component: AuthPage
  },
  {
    path: '/completed-tasks',
    name: 'CompletedTasksPage',
    component: () => import('../views/CompletedTasksPage.vue')
  },
  {
    path:'/create-task',
    name:'CreateTask',
    component: CreateTaskPage
  },
  {
    path:'/my-tasks',
    name:'MyTasks',
    component: MyTasksPage
  },
  {
    path: '/history-created-tasks',
    name: 'HistoryCreatedTasks',
    component: HistoryCreatedTasksPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

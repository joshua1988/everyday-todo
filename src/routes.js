import HomePage from './components/home/HomePage.vue'
import TodoPage from './components/todo/TodoPage.vue'
import CreatePage from './components/new/CreatePage.vue'

export const routes = [
    { path: '/', component: HomePage },
    { path: '/day', component: TodoPage },
    { path: '/new', component: CreatePage }
]
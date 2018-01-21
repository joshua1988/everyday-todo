import HomePage from './components/home/HomePage.vue'
import TodoPage from './components/todo/TodoPage.vue'

export const routes = [
    { path: '/', component: HomePage },
    { path: '/day', component: TodoPage }
]
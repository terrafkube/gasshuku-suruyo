import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from '../components/HelloWorld.vue'
import CampResultInputPage from '../components/pages/CampResultInputPage.vue'

const routes = [
	{
		path: '/',
		name: 'HelloWorld',
		component: HelloWorld
	},
	{
		path: '/camp-result-input',
		name: 'CampResultInput',
		component: CampResultInputPage
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router

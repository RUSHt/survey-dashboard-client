import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import SurveyDashboard from '../components/SurveyDashboard.vue'
import SurveyEditor from '../components/SurveyEditor.vue';
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'SurveyEditor',
    component: SurveyEditor
  },
  {
    path: '/index.html',
    name: 'SurveyEditor',
    component: SurveyEditor
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

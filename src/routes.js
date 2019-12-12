import oppList from './components/opportunityList/opportunities.vue';
import opportunity from './components/page/opportunity.vue'

export const routes = [
  {name: 'home', path: '', component: oppList },
  {name: 'profile', path: '/profile/:id', component: opportunity }
]

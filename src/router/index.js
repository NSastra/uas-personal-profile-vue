import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutIndex from '../views/frontend/about/Index.vue'
import AboutIndexBack from '../views/backend/about/Index.vue'
import PdkIndex from '../views/frontend/pendidikan/Index.vue'
import PdkIndexBack from '../views/backend/pendidikan/Index.vue'
import KerjaIndex from '../views/frontend/kerja/Index.vue'
import KerjaIndexBack from '../views/backend/kerja/Index.vue'
import KontakIndex from '../views/frontend/kontak/Index.vue'
import KontakIndexBack from '../views/backend/kontak/Index.vue'
import Createabout from '../views/backend/about/Create.vue'
import Creatependidikan from '../views/backend/pendidikan/Create.vue'
import Createkerja from '../views/backend/kerja/Create.vue'
import Createkontak from '../views/backend/kontak/Create.vue'
import Editabout from '../views/backend/about/Edit.vue'
import Editpendidikan from '../views/backend/pendidikan/Edit.vue'
import Editkerja from '../views/backend/kerja/Edit.vue'
import Editkontak from '../views/backend/kontak/Edit.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/about',
    name: 'About',
    component: AboutIndex
  },

  {
    path: '/aboutback',
    name: 'About',
    component: AboutIndexBack
  },

  {
    path: '/pendidikan',
    name: 'Pendidikan',
    component: PdkIndex
  },

  {
    path: '/pendidikanback',
    name: 'Pendidikan',
    component: PdkIndexBack
  },

  {
    path: '/kerja',
    name: 'Kerja',
    component: KerjaIndex
  },

  {
    path: '/kerjaback',
    name: 'Kerja',
    component: KerjaIndexBack
  },

  {
    path: '/kontak',
    name: 'Kontak',
    component: KontakIndex
  },

  {
    path: '/kontakback',
    name: 'Kontak',
    component: KontakIndexBack
  },

  {
    path: '/Createabout',
    name: 'About',
    component: Createabout
  },

  {
    path: '/Creatependidikan',
    name: 'Pendidikan',
    component: Creatependidikan
  },

  {
    path: '/Createkerja',
    name: 'Kerja',
    component: Createkerja
  },

  {
    path: '/Createkontak',
    name: 'Kontak',
    component: Createkontak
  },

  {
    path: '/Editabout/:id',
    name: 'Editabout',
    component: Editabout
  },

  {
    path: '/Editpendidikan/:id',
    name: 'Editpendidikan',
    component: Editpendidikan
  },

  {
    path: '/Editkerja/:id',
    name: 'Editkerja',
    component: Editkerja
  },

  {
    path: '/Editkontak/:id',
    name: 'Editkontak',
    component: Editkontak
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

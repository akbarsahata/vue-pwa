import Vue from 'vue'
import Router from 'vue-router'
import First from '@/components/First'
import Second from '@/components/Second'
import Third from '@/components/Third'
import Fourth from '@/components/Fourth'
import Fifth from '@/components/Fifth'
import Sixth from '@/components/Sixth'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'First',
      component: First,
      props: true
    },
    {
      path: '/second/:nama',
      name: 'Second',
      props: true,
      component: Second
    },
    {
      path: '/third',
      name: 'Third',
      props: (route) => ({
        asal: route.query.asal,
        tujuan: route.query.tujuan,
        kendaraan: route.query.kendaraan,
        sendiri: route.query.sendiri,
        atasan: route.query.atasan,
        bawahan: route.query.bawahan,
        perawakan: route.query.perawakan,
        merk: route.query.merk
      }),
      component: Third
    },
    {
      path: '/fourth/:percentage',
      props: true,
      component: Fourth
    },
    {
      path: '/fifth',
      props: true,
      component: Fifth
    },
    {
      path: '/sixth',
      component: Sixth
    }
  ],
  scrollBehavior (to, from, saved) {
    return { x: 0, y: 0 }
  }
})

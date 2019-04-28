import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ht from '@/components/ht'
import shouye from '@/components/shouye'
import yonghu from '@/components/yonghu'
import shangjia from '@/components/shangjia'
import guanli from '@/components/guanli'
import shipin from '@/components/shipin'
import dingdan from '@/components/dingdan'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ht',
      name: 'ht',
      component: ht,
      redirect:'/shouye',
      children:[
        {

          path:'/shouye',
          component: shouye,
        },
        {
          path:'/yonghu',
          component: yonghu,
        },
        {
          path:'/shangjia',
          component: shangjia,
        },
        {
          path:'/guanli',
          component: guanli,
        },
        {
          path:'/shipin',
          component: shipin,
        },
        {
          path:'/dingdan',
          component: dingdan,
        }
    ]
    }
  ]
})

import type { User } from '#/patient'

import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import PatientCard from './widget/card'

import style from './styles/patientList.module.scss'
export default defineComponent({
  name: 'PatientList',
  props: {
    //接收调用组件传回的参数
    grid: { type: Object, default: () => {} }
  },
  setup() {
    const router = useRouter()
    const handleCardItem = (value: User) => {
      console.log(value)
      router.push({
        path: '/appointment/list'
      })
    }
    return () => (
      <div class={style.container}>
        <div class={style.title}>请选择就诊人</div>
        <PatientCard onHandleCardItem={handleCardItem.bind(this)} />
      </div>
    )
  }
})

import type { User } from '#/patient'

import { defineComponent } from 'vue'

import style from '../styles/card.module.scss'
export default defineComponent({
  name: 'PatientCard',
  props: {
    //接收调用组件传回的参数
    patient: { type: Object, default: () => {} }
  },
  emits: {
    handleCardItem: (value: User) => value
  },
  setup(props, { emit }) {
    const handleCard = () => {
      emit('handleCardItem', { name: '蒋锋', idCard: '6222894782478274289' })
      //console.log(emit)
    }
    return () => (
      <div class={style.container} onClick={handleCard.bind(this)}>
        <div class={style.name}>
          蒋锋<span>本人</span>
        </div>
        <div class={style.id}>622********************</div>
        <div class={style.state}>默认就诊人</div>
      </div>
    )
  }
})

import type { GridItem } from '#/home'

import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

import style from '../style/grid.module.scss'

export default defineComponent({
  name: 'MyGrid',
  props: {
    //接收调用组件传回的参数
    grid: { type: Object, default: () => {} }
  },
  setup(props, context) {
    // 必须先声明调用
    const router = useRouter()

    const handlerGridItem = (item: GridItem) => {
      console.log('--- handlerGridItem --->', item)
      console.log(context)
      switch (item.title) {
        case '预约挂号':
          router.push({
            path: '/patient/list'
          })
          break

        default:
          return
          break
      }
    }
    const renderSpecialList = () => {
      let render = null
      if (props.grid.specialList && props.grid.specialList.length) {
        render = (
          <div class={style['special-list-container']}>
            {props.grid.specialList.map((item) => {
              return (
                <div class={style['special-list-content']} onClick={() => handlerGridItem(item)}>
                  <div class={style['s-t']}>
                    <div>{item.title}</div>
                    <div>{item.subtitle}</div>
                  </div>
                  <div class={style['s-i']}>
                    <van-icon
                      name='https://fastly.jsdelivr.net/npm/@vant/assets/icon-demo.png'
                      size='2.5rem'
                    />
                  </div>
                </div>
              )
            })}
          </div>
        )
      }
      return render
    }
    const renderGridList = () => {
      let render = null
      if (props.grid.gridList && props.grid.gridList.length) {
        render = (
          <van-grid>
            {props.grid.gridList.map((item) => {
              return (
                <van-grid-item
                  icon={item.img}
                  text={item.title}
                  onClick={handlerGridItem.bind(this, item)}
                />
              )
            })}
          </van-grid>
        )
      }
      return render
    }
    return () => (
      <div class={style['grid-container']}>
        <div class={style['grid-title']}>{props.grid.title}</div>
        {renderSpecialList()}
        {renderGridList()}
      </div>
    )
  }
})

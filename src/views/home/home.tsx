import { defineComponent, reactive, ref, nextTick, onMounted } from 'vue'

import MyGrid from './widget/grid'
import styles from './style/home.module.scss'

export default defineComponent({
  name: 'AppHome',

  setup() {
    const loading = ref<boolean>(true)
    const outpatient = reactive({
      title: '门诊服务',
      specialList: [
        {
          title: '预约挂号',
          subtitle: '在线挂号预约',
          img: ''
        },
        {
          title: '在线充值',
          subtitle: '就诊卡预存充值',
          img: ''
        }
      ],
      gridList: [
        {
          title: '候诊查询',
          img: 'photo-o'
        },
        {
          title: '自助缴费',
          img: 'photo-o'
        },
        {
          title: '门诊费用',
          img: 'photo-o'
        },
        {
          title: '在线退款',
          img: 'photo-o'
        }
      ]
    })
    const hospitalList = reactive({
      title: '医院服务',
      gridList: [
        {
          title: '医院介绍',
          img: 'photo-o'
        },
        {
          title: '医院导航',
          img: 'photo-o'
        },
        {
          title: '就医指南',
          img: 'photo-o'
        },
        {
          title: '健康百科',
          img: 'photo-o'
        }
      ]
    })

    onMounted(() => {
      setTimeout(() => {
        loading.value = false
      }, 100)
    })
    return () => (
      <div class={styles['hone-container']}>
        <van-skeleton title row={15} loading={loading.value}>
          <van-swipe class={styles['swipe']} autoplay={3000} indicator-color='white'>
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
          </van-swipe>

          <MyGrid grid={outpatient} />
          <MyGrid grid={hospitalList} />
        </van-skeleton>
      </div>
    )
  }
})

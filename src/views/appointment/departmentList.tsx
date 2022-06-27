import type { Department } from '#/appointment'

import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
//import style from './styles/departmentList.module.scss'
export default defineComponent({
  name: 'DepartmentList',
  props: {},
  setup() {
    const router = useRouter()
    const activeId = ref(1)
    const activeIndex = ref(0)
    const items = [
      {
        text: '内科',
        children: [
          { text: '呼吸内科', id: 1 },
          { text: '呼吸内科', id: 2 },
          { text: '呼吸内科', id: 3 },
          { text: '呼吸内科', id: 4 }
        ]
      },
      {
        text: '外科',
        children: [
          { text: '肝胆外科', id: 5 },
          { text: '肝胆外科', id: 6 },
          { text: '肝胆外科', id: 7 },
          { text: '肝胆外科', id: 8 }
        ]
      }
    ]
    const handleSelection = (value: Department) => {
      console.log(value)
      router.push({ path: '/appointment/scheduling' })
    }
    return () => (
      <van-tree-select
        v-model:active-id={activeId.value}
        v-model:main-active-index={activeIndex.value}
        items={items}
        onClickItem={handleSelection.bind(this)}
      />
    )
  }
})

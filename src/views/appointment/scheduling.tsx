import { defineComponent, ref } from 'vue'

import SchedulingDate from './widget/schedulingDate'
//import style from './styles/departmentList.module.scss'
export default defineComponent({
  name: 'DepartmentList',
  props: {},
  setup() {
    return () => (
      <div>
        <SchedulingDate />
      </div>
    )
  }
})

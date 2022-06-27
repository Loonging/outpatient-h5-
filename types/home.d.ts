export interface GridItem {
  title: string
  subtitle?: string
  img: string
}

export interface Grid {
  title: string
  specialList?: Array<GridItem>
  gridList: Array<GridItem>
}

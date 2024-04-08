import { RouteRecordRaw } from 'vue-router'

interface Prop {
  title: string
  icon?: string
  customIcon?: string
  order?: number
  requireAuth?: boolean
  prependIcon?: string  // vuetify内置Icon名称
  to?: string | {name:string}

  // permission?: string[]  // 权限
}

interface RouteItem extends RouteRecordRaw {
  // name: string
  value: string // 这里的value起到name的作用
  path: string
  redirect?: string
  isHidden?: boolean
  props?: Prop,
  children?: RoutesType
}

type RouteType = RouteItem & RouteRecordRaw

type RoutesType = Array<RouteType>

/** 前端导入的路由模块 */
type RouteModule = Record<string, { default: RouteType }>

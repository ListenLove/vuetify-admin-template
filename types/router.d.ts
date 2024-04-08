import { RouteRecordRaw } from 'vue-router'

interface Prop {
  title: string
  icon?: string
  customIcon?: string
  order?: number
  requireAuth?: boolean
  prependIcon?: string  // vuetify内置Icon名称
  // permission?: string[]  // 权限
}

interface RouteItem {
  // name: string
  value: string // 这里的value起到name的作用
  path: string
  redirect?: string
  isHidden?: boolean
  props?: Prop,
  children?: RoutesType
}

type RouteType = RouteRecordRaw & RouteItem

type RoutesType = Array<RouteType>

/** 前端导入的路由模块 */
type RouteModule = Record<string, { default: RouteType }>

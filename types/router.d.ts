import { RouteRecordRaw } from 'vue-router'

interface Meta {
  title?: string
  icon?: string
  customIcon?: string
  order?: number
  role?: Array<string>
  requireAuth?: boolean
}

interface RouteItem {
  name?: string
  value: string
  path: string
  redirect?: string
  isHidden?: boolean
  meta?: Meta,
  children?: RoutesType
}

type RouteType =  RouteItem & RouteRecordRaw

type RoutesType = Array<RouteType>

/** 前端导入的路由模块 */
type RouteModule = Record<string, { default: RouteType }>

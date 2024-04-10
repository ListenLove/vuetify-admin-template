import axios from 'axios'
import to from 'await-to-js'
import { reqReject, reqResolve, resReject, resResolve } from './interceptors'
import type { RequestConfig } from '~/types/axios'

export function createAxios(options = {}) {
  const defaultOptions = {
    timeout: 12000,
  }
  const service = axios.create({
    ...defaultOptions,
    ...options,
  })
  service.interceptors.request.use(reqResolve, reqReject)
  service.interceptors.response.use(resResolve, resReject)
  return service
}

export const request = createAxios({
  baseURL: import.meta.env.VITE_BASE_API,
})

type ResData = Record<string, never>

interface BaseResponse<T = ResData> {
  code: number
  message: string
  data: T
}

type ResponsePromise<T> = Promise<[Error, undefined] | [null, T]>
/**
 * NOTE: 请求方法简单封装：delete，get，post
 *  */
// delete 请求封装
function _delete<T = ResData>(config: RequestConfig): ResponsePromise<BaseResponse<T>>
function _delete<T = ResData>(config: RequestConfig): ResponsePromise<T> {
  return to<T>(
    request({
      method: 'delete',
      ...config,
    }),
  )
}
export const del = _delete

// get 请求封装
function _get<T = ResData>(config: RequestConfig): ResponsePromise<BaseResponse<T>>
function _get<T = ResData>(config: RequestConfig): ResponsePromise<T> {
  return to<T>(
    request({
      method: 'get',
      ...config,
    }),
  )
}
export const get = _get

// post 请求封装
function _post<T = ResData>(config: RequestConfig): ResponsePromise<BaseResponse<T>>
function _post<T = ResData>(config: RequestConfig): ResponsePromise<T> {
  return to<T>(
    request({
      method: 'post',
      ...config,
    }),
  )
}
export const post = _post

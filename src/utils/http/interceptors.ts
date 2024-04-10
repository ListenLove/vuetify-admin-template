import type { AxiosError, AxiosResponse } from 'axios'
import { AxiosRejectError, resolveResError } from './helpers'
import type { RequestConfig } from '~/types/axios'

/** 请求拦截 */
export function reqResolve(config: RequestConfig) {

  const token = '__This_is_a_TOKEN'

  /**
   * * 加上 token
   * ! 认证方案: JWT Bearer
   */
  const Authorization = config.headers?.Authorization || `Bearer ${token}`
  if (config.headers)
    config.headers.Authorization = config.headers.Authorization || `Bearer ${token}`
  else
    config.headers = { Authorization }

  return config
}

/** 请求错误拦截 */
export function reqReject(error: AxiosError) {
  return Promise.reject(error)
}

/** 响应拦截 */
export function resResolve(response: AxiosResponse) {
  // TODO: 处理不同的 response.headers
  const { data, status, statusText } = response
  if (data?.code !== 0) {
    const code = data?.code ?? status

    /** 根据code处理对应的操作，并返回处理后的message */
    const message = resolveResError(code, data?.message ?? statusText)
    // const { noNeedTip } = config as RequestConfig
    return Promise.reject(new AxiosRejectError({ code, message, data: data || response }))
  }
  return Promise.resolve(data)
}

/** 响应错误拦截 */
export function resReject(error: AxiosError) {
  if (!error || !error.response) {
    const code = error?.code
    /** 根据code处理对应的操作，并返回处理后的message */
    const message = resolveResError(code, error.message)
    return Promise.reject(new AxiosRejectError({ code, message, data: error }))
  }
  const { data, status } = error.response
  let { code, message } = data as AxiosRejectError
  code = code ?? status
  message = message ?? error.message
  message = resolveResError(code, message)
  /** 需要错误提醒 */

  return Promise.reject(new AxiosRejectError({ code, message, data: error.response?.data || error.response }))
}

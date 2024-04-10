/// <reference types="vite/client" />
type ProxyType = 'dev' | 'test' | 'prod';

interface ViteEnv {
  VITE_PORT: number
  VITE_APP_TITLE: string
  VITE_PUBLIC_PATH: string
  VITE_BASE_API: string
  // VITE_PROXY_TYPE?: ProxyType
  // VITE_USE_COMPRESS?: boolean
  // VITE_COMPRESS_TYPE?: 'gzip' | 'brotliCompress' | 'deflate' | 'deflateRaw'
}

interface ImportMetaEnv {
  readonly env: ViteEnv
}

interface ProxyConfig {
  /** 匹配代理的前缀，接口地址匹配到此前缀将代理的target地址 */
  prefix: string
  /** 代理目标地址，后端真实接口地址 */
  target: string
}


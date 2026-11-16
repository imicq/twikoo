/** 构建入口；公开工厂供无网络回归测试，生产入口延迟连接 Blob。 */
import { createHandler } from './handler.js'
export { createHandler } from './handler.js'
// 使用唯一名称导出，避免 Makers 平台把 dist 平铺内联进入口文件时
// 与 cloud-functions/index.js 的 export function onRequest 符号冲突
export const twikooEoHandler = createHandler()

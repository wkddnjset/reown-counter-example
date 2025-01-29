/**
 *
 * 토큰이 만료됐을 시, refresh token 을 요청하고, 새로운 토큰을 받아서 요청을 재시도합니다.
 * Promise 를 사용하여, 토큰 요청이 중복되지 않도록 합니다.
 *
 *
 * @example
 *
 * ```ts
 * const retry = retryRequestManager()
 *
 * const result = await retry({
 *  getToken: async () => {
 *    await delay(200)
 *    return 'token'
 * },
 * onRefetch: (token: string) => {
 *    return token
 * },
 * onError: (error: any) => {
 *    return error
 *  },
 * })
 *
 *
 */
export const retryRequestManager = (options?: {
  /**
   * 토큰 refresh 후, 설정한 시간안에 refresh 를 다시 시도 하지 않을경우 토큰을 삭제합니다.
   * @default 0
   *  */
  cleanupTimeOut?: number
}) => {
  const { cleanupTimeOut = 0 } = options || {}
  let token: Promise<string> | null = null
  let timeoutId: NodeJS.Timeout | null = null

  return async (params: {
    getToken: () => Promise<string>
    onRefetch: (refreshed: string) => any
    onError: (error: any) => any
  }) => {
    const { onError, onRefetch, getToken } = params

    try {
      if (!token) {
        token = getToken()
      }
      const refreshed = await token
      const refetched = await onRefetch(refreshed)
      return refetched
    } catch (err) {
      onError(err)
    } finally {
      if (timeoutId) clearTimeout(timeoutId)
      if (token) {
        timeoutId = setTimeout(() => {
          token = null
        }, cleanupTimeOut)
      }
    }
  }
}

import { useLocalStorage } from '@/stores/local/state'

import { useClient } from './useClient'

export const useAuth = () => {
  const token = useLocalStorage((store) => store.token)
  const isClient = useClient()

  const isLogin: boolean | null = isClient ? !!token?.access_token : null

  return { isLogin, token }
}

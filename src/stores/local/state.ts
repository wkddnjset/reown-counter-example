import { withSetter } from '@toktokhan-dev/zustand-react'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import { TokenType } from './types'
import { withStorageDOMEvents } from './utils/withStorageDOMEvents'

export type LocalStorage = {
  token: TokenType | null
  count: number
}

/**
 * zustand와 withSetter + persist + immer 사용 예제입니다.
 * 스토어 스토리지는 persist 미들웨어로 간단하게 관리할 수 있습니다.
 *
 * @see [Tokdocs] https://toktokhan-dev-docs.vercel.app/docs/zustand/overview#zustand
 * @see [zustand-persis] https://zustand.docs.pmnd.rs/migrations/migrating-to-v4#persist
 * @see [zustand-immer] https://zustand.docs.pmnd.rs/integrations/immer-middleware
 */
export const useLocalStorage = create(
  persist(
    withSetter(
      immer<LocalStorage>(() => ({
        token: null,
        count: 0,
      })),
    ),
    {
      name: '@toktokhan-dev',
    },
  ),
)

withStorageDOMEvents(useLocalStorage)

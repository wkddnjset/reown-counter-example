import { ComponentProps, ComponentType, useEffect } from 'react'

import { useRouter } from 'next/router'

import { useAuth } from '@/hooks/useAuth'

export default function withUnAuthGuard<T extends ComponentType<any>>(
  AppComponent: T,
) {
  return function WrappedAppComponent(props: ComponentProps<T>) {
    const router = useRouter()
    const { isLogin } = useAuth()

    useEffect(() => {
      if (isLogin)
        router.replace(
          router.query?.returnUrl ?
            decodeURIComponent(router.query?.returnUrl as string)
          : '/',
        )
    }, [isLogin, router])

    return isLogin === false ? <AppComponent {...props} /> : <></>
  }
}

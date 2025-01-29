import { FC } from 'react'

import type { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'
import { QueryClientProvider } from '@tanstack/react-query'

import AppKitProvider from '@/configs/appkit'
import { queryClient } from '@/configs/react-query'
import theme from '@/configs/theme'
import fonts from '@/configs/theme/foundations/typography/fonts'
import { GlobalStoreProvider } from '@/stores/global/state'

const coveredTheme = {
  ...theme,
  fonts,
}

function withAppProvider(AppComponent: FC<AppProps>) {
  return function WrappedAppComponent(props: AppProps) {
    return (
      <QueryClientProvider client={queryClient}>
        <ChakraProvider resetCSS theme={coveredTheme}>
          <GlobalStoreProvider>
            <AppKitProvider>
              <AppComponent {...props} />
            </AppKitProvider>
          </GlobalStoreProvider>
        </ChakraProvider>
      </QueryClientProvider>
    )
  }
}

export default withAppProvider

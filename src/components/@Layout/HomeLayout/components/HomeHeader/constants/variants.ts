import { ChakraProps } from '@chakra-ui/react'

export type HomeHeaderVariantType = 'dark' | 'light' | 'transparent'
export const HOME_HEADER_VARIANTS: Record<
  HomeHeaderVariantType,
  {
    header: ChakraProps
    drawer: ChakraProps
    pointColor: ChakraProps['color']
    subColor: ChakraProps['color']
  }
> = {
  dark: {
    header: { bg: '' },
    drawer: { bg: 'white' },
    pointColor: 'white',
    subColor: 'primary.3',
  },
  light: {
    header: { bg: 'primary.3' },
    drawer: { bg: 'white' },
    pointColor: 'white',
    subColor: 'white',
  },
  transparent: {
    header: { bg: 'transparent' },
    drawer: { bg: 'white' },
    pointColor: 'black',
    subColor: 'ter',
  },
}

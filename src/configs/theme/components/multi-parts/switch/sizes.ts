import { switchAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { cssVar } from '@chakra-ui/theme-tools'

const { definePartsStyle } = createMultiStyleConfigHelpers(parts.keys)

const $width = cssVar('switch-track-width')
const $height = cssVar('switch-track-height')
export const sizes = {
  sm: definePartsStyle({
    container: {
      [$width.variable]: '33px',
      [$height.variable]: '18px',
    },
    track: {
      p: '3px',
    },
  }),
  md: definePartsStyle({
    container: {
      [$width.variable]: '44px',
      [$height.variable]: '24px',
    },
    track: {
      p: '4px',
    },
  }),
}

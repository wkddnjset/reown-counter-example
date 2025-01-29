import { defineStyle } from '@chakra-ui/styled-system'
import { cssVar } from '@chakra-ui/theme-tools'

const $translateX = cssVar('switch-thumb-x')

export const baseStyleTrack = defineStyle((props) => {
  return {
    p: '0px',
    bgColor: 'background.basic.4',
    outlineColor: 'none',
    _focusVisible: {
      boxShadow: 'none',
      outlineColor: 'none',
    },
    _checked: {
      bgColor: 'primary.4',
      _dark: {
        bgColor: 'primary.4',
      },
      _disabled: {
        bgColor: 'primary.3',
        _dark: {
          bgColor: 'primary.3',
        },
      },
    },
    _disabled: {
      bgColor: 'background.basic.3',
      _dark: {
        bgColor: 'background.basic.3',
      },
    },
  }
})

export const baseStyleThumb = defineStyle({
  bg: 'background.basic.1',
  _checked: {
    transform: `translateX(${$translateX.reference})`,
  },
})

export const variants = {}

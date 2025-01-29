import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

import { sizes } from './sizes'
import { variants } from './variants'

const baseStyle = defineStyle({
  outline: 'none',
  transition: 'all 0.2s ease-in-out',

  transitionProperty: 'common',
  transitionDuration: 'normal',

  _disabled: {
    opacity: 1,
    cursor: 'not-allowed',
    boxShadow: 'none',
  },
  _focus: { boxShadow: 'none', outline: 'none' },
  _focusVisible: {
    boxShadow: 'outline',
    ringColor: 'transparent',
  },
  _hover: {
    _disabled: {
      opacity: 1,
      cursor: 'not-allowed',
      boxShadow: 'none',
    },
  },
})

const Button = defineStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    variant: 'solid-primary',
    size: 'md',
    colorScheme: 'primary.3',
  },
})

export default Button

import { selectAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, cssVar } from '@chakra-ui/styled-system'

import inputTheme from '../multi-parts/input'

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys)

const $bg = cssVar('select-bg')

const baseStyle = definePartsStyle({
  field: {
    ...inputTheme.baseStyle?.field,
    appearance: 'none',
    paddingBottom: '1px',
    lineHeight: 'normal',
    color: 'colors.gray.500',
    bg: $bg.reference,
    [$bg.variable]: 'colors.white',
    _dark: {
      [$bg.variable]: 'colors.gray.700',
    },
    '> option, > optgroup': {
      bg: $bg.reference,
      height: '40px',
    },
  },
  icon: {
    width: '24px',
    height: '24px',
    insetEnd: '2',
    position: 'relative',
    color: 'colors.gray.500',
    fontSize: '24px',
    _disabled: {
      opacity: 0.5,
    },
  },
})

const outline = definePartsStyle({
  field: inputTheme.variants?.outline.field,
})

const solid = definePartsStyle({
  field: inputTheme.variants?.solid.field,
})

const underlined = definePartsStyle({
  field: inputTheme.variants?.underlined.field,
})

const Select = defineMultiStyleConfig({
  baseStyle,
  variants: {
    solid,
    outline,
    underlined,
  },
  defaultProps: inputTheme.defaultProps,
})

export default Select

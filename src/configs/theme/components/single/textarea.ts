import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system'

import inputTheme from '../multi-parts/input'

const baseStyle = defineStyle({
  ...inputTheme.baseStyle?.field,
  px: '16px',
  py: '12px',
})

const variants = {
  outline: defineStyle({ ...inputTheme.variants?.outline.field }),
  solid: defineStyle({ ...inputTheme.variants?.solid.field }),
}

const Textarea = defineStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: 'outline',
  },
})

export default Textarea

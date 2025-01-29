import { checkboxAnatomy as parts } from '@chakra-ui/anatomy'
import { ChakraProps, createMultiStyleConfigHelpers } from '@chakra-ui/react'

import { textStyles } from '@/generated/tokens/text-styles'

const defineStyle = ({
  border,
  bg,
}: {
  border: ChakraProps['color']
  bg: ChakraProps['color']
}) => ({
  borderColor: border,
  background: bg,
  _hover: {
    borderColor: border,
    background: bg,
  },
})

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  _focusVisible: {
    boxShadow: 'outline',
  },
  control: {
    borderRadius: '3px',
    ...defineStyle({
      border: 'content.6',
      bg: 'transparent',
    }),
    _indeterminate: {
      ...defineStyle({
        border: 'primary.3',
        bg: 'primary.3',
      }),
    },
    _checked: {
      ...defineStyle({
        border: 'primary.3',
        bg: 'primary.3',
      }),
    },
    _disabled: {
      color: 'content.7',
      ...defineStyle({
        border: 'content.7',
        bg: 'transparent',
      }),
      _checked: {
        color: 'content.8',
        ...defineStyle({
          border: 'primary.2',
          bg: 'primary.2',
        }),
      },
    },
  },
  label: {
    color: 'content.1',
    m: 0,
    transition: 'all 0.2s ease-in-out',
  },
})

const sizes = {
  sm: definePartsStyle({
    container: { gap: '6px' },
    control: { boxSize: '16px', m: '2px' },
    label: { ...textStyles['pre-body-06'] },
  }),
  md: definePartsStyle({
    container: { gap: '6px' },
    control: { boxSize: '18px', m: '3px' },
    label: { ...textStyles['pre-body-04'] },
  }),
}

const Checkbox = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: 'md',
  },
})
export default Checkbox

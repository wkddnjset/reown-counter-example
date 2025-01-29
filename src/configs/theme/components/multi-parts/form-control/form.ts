import { formAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

import textStyles from '@/configs/theme/foundations/text-styles'

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys)

export const form = defineMultiStyleConfig({
  baseStyle: {
    container: {},
    helperText: {
      ...textStyles['pre-caption-02'],
      color: 'content.4',
      mt: '8px',
    },
  },
  variants: {
    basic: {},
  },
  defaultProps: {
    variant: 'basic',
  },
})

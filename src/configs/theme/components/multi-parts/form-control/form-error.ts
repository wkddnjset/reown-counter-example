import { formErrorAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

import { textStyles } from '@/generated/tokens/text-styles'

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys)

export const formError = defineMultiStyleConfig({
  baseStyle: {
    icon: {},
    text: {
      ...textStyles['pre-caption-02'],
      color: 'accent.red.2',
      mt: '8px',
    },
  },
})

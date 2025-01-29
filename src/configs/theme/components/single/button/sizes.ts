import { defineStyle } from '@chakra-ui/react'

import { textStyles } from '@/generated/tokens/text-styles'

export const ICON_SPACING_BY_SIZE = {
  lg: '6px',
  md: '4px',
  sm: '4px',
}

export const sizes = {
  lg: defineStyle((props) => {
    const py = '12px'
    const pl = props.leftIcon ? '24px' : '28px'
    const pr = props.rightIcon ? '24px' : '28px'

    return {
      p: `${py} ${pr} ${py} ${pl}`,
      borderRadius: 'full',
      ...textStyles['pre-heading-05'],
    }
  }),
  md: defineStyle((props) => {
    const py = '9px'
    const pl = props.leftIcon ? '18px' : '20px'
    const pr = props.rightIcon ? '18px' : '20px'

    return {
      p: `${py} ${pr} ${py} ${pl}`,
      borderRadius: 'full',
      ...textStyles['pre-heading-05'],
    }
  }),
  sm: defineStyle((props) => {
    const py = '6px'
    const pl = props.leftIcon ? '12px' : '14px'
    const pr = props.rightIcon ? '12px' : '14px'

    return {
      p: `${py} ${pr} ${py} ${pl}`,
      borderRadius: 'full',
      ...textStyles['pre-body-05'],
    }
  }),
}

import { defineStyle } from '@chakra-ui/styled-system'

import { textStyles } from '@/generated/tokens/text-styles'

const outline = defineStyle({
  field: {
    ...textStyles['pre-body-04'],
    height: '48px',
    borderWidth: '1px',
    borderColor: 'border.basic.1',
    borderRadius: '10px',

    /**
     *  컬러 토큰 적용이 되지 않습니다.
     *  caretColor: 'primary.3'
     */
    caretColor: '#3d6be5',

    _focus: {
      borderWidth: '1px',
      boxShadow: 'none',
      borderColor: 'primary.3',
    },
    _invalid: {
      borderWidth: '1px',
      borderColor: 'accent.red.2',
      _focusVisible: { borderColor: 'accent.red.2' },
      boxShadow: 'none',

      _disabled: {
        background: 'background.basic.2',
        borderColor: 'border.basic.1',
      },
    },

    _disabled: {
      background: 'background.basic.2',
      borderColor: 'border.basic.1',
    },
  },
})

const solid = defineStyle({
  field: {
    ...textStyles['pre-body-04'],
    height: '48px',
    border: 'none',
    borderRadius: '10px',
    bg: 'background.basic.3',

    /**
     *  컬러 토큰 적용이 되지 않습니다.
     *  caretColor: 'primary.3'
     */
    caretColor: '#3d6be5',

    _focus: {
      borderWidth: '1px',
      boxShadow: 'none',
      borderColor: 'primary.3',
      bg: 'background.basic.4',
    },
    _invalid: {
      bg: 'accent.red.1',
      boxShadow: 'none',
      _disabled: {
        background: 'background.basic.2',
        borderColor: 'border.basic.1',
      },
    },
    _disabled: {
      background: 'background.basic.2',
      borderColor: 'border.basic.1',
    },
  },
})

const underlined = defineStyle({
  field: {
    p: 0,
    py: '12px',
    ...textStyles['pre-body-04'],
    height: '48px',
    borderBottomWidth: '1px',
    borderColor: 'border.basic.2',
    borderRadius: '0px',

    /**
     *  컬러 토큰 적용이 되지 않습니다.
     *  caretColor: 'primary.3'
     */
    caretColor: '#3d6be5',

    _focus: {
      borderBottomWidth: '1px',
      boxShadow: 'none',
      borderColor: 'primary.3',
    },
    _invalid: {
      borderBottomWidth: '1px',
      boxShadow: 'none',
      borderColor: 'accent.red.2',
      _disabled: {
        borderBottomWidth: '1px',
        borderColor: 'border.basic.1',
      },
    },
    _disabled: {
      borderBottomWidth: '1px',
      borderColor: 'border.basic.1',
    },
  },
})

export const variants = {
  outline,
  solid,
  underlined,
}

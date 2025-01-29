import { ChakraProps } from '@chakra-ui/react'

interface ButtonAnatomyProps {
  color: ChakraProps['color']
  bgColor: ChakraProps['color']
  borderColor?: ChakraProps['color']
  otherStyle?: ChakraProps
}

type DefineVariantProps = {
  basic: ButtonAnatomyProps
  hover: Partial<ButtonAnatomyProps>
  active: Partial<ButtonAnatomyProps>
  disabled: Partial<ButtonAnatomyProps>
}

const defineVariant = ({
  basic,
  active,
  disabled,
  hover,
}: DefineVariantProps) => {
  return {
    ...basic,
    ...basic.otherStyle,
    borderWidth: basic?.borderColor ? '1px' : '0px',

    _hover: {
      ...hover,
      _disabled: {
        ...disabled,
        ...disabled.otherStyle,
      },
    },
    _active: {
      ...active,
      ...active.otherStyle,
    },
    _disabled: {
      ...disabled,
      ...disabled.otherStyle,
    },
  }
}

const solidPrimary = defineVariant({
  basic: {
    bgColor: 'primary.3',
    color: 'content.8',
  },
  hover: { bgColor: 'primary.4' },
  active: { bgColor: 'primary.5' },
  disabled: { color: 'content.5', bgColor: 'background.basic.4' },
})

const outlinePrimary = defineVariant({
  basic: {
    color: 'primary.3',
    bgColor: 'background.basic.1',
    borderColor: 'primary.3',
  },
  hover: { bgColor: 'primary.1' },
  active: { bgColor: 'primary.2' },
  disabled: {
    color: 'content.6',
    borderColor: 'border.basic.2',
    bgColor: 'background.basic.1',
  },
})

const outlineSecondary = defineVariant({
  basic: {
    color: 'primary.3',
    bgColor: 'background.basic.1',
    borderColor: 'border.basic.2',
  },
  hover: { bgColor: 'background.basic.3' },
  active: { bgColor: 'background.basic.4' },
  disabled: {
    color: 'content.6',
    borderColor: 'border.basic.2',
    bgColor: 'background.basic.1',
  },
})

const outlineTertiary = defineVariant({
  basic: {
    color: 'content.2',
    bgColor: 'background.basic.1',
    borderColor: 'border.basic.2',
  },
  hover: { bgColor: 'background.basic.3' },
  active: { bgColor: 'background.basic.4' },
  disabled: {
    color: 'content.6',
    borderColor: 'border.basic.2',
    bgColor: 'background.basic.1',
  },
})

const textPrimary = defineVariant({
  basic: {
    color: 'primary.3',
    bgColor: 'transparent',
    otherStyle: {
      p: '0px',
    },
  },
  hover: { color: 'primary.4', bgColor: 'transparent' },
  active: { color: 'primary.5', bgColor: 'transparent' },
  disabled: { color: 'content.6' },
})

const textSecondary = defineVariant({
  basic: {
    color: 'content.3',
    bgColor: 'transparent',
    otherStyle: {
      p: '0px',
    },
  },
  hover: { color: 'content.4', bgColor: 'transparent' },
  active: { color: 'content.5', bgColor: 'transparent' },
  disabled: { color: 'content.6' },
})

export const variants = {
  'solid-primary': solidPrimary,
  'outline-primary': outlinePrimary,
  'outline-secondary': outlineSecondary,
  'outline-tertiary': outlineTertiary,
  'text-primary': textPrimary,
  'text-secondary': textSecondary,
}

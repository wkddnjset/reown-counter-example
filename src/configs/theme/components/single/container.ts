import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const baseStyle = defineStyle({
  w: '100%',
  maxW: '100%',
  px: {
    base: '16px',
    sm: '24px',
    md: '40px',
  },
})

const variants = defineStyle({})

const Container = defineStyleConfig({
  baseStyle,
  variants,
})

export default Container

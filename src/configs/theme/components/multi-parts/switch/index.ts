import { switchAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

import { sizes } from './sizes'
import { baseStyleThumb, baseStyleTrack, variants } from './variants'

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle((props) => ({
  track: baseStyleTrack(props),
  thumb: baseStyleThumb,
}))

const Switch = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    size: 'md',
    colorScheme: 'primary',
  },
})
export default Switch

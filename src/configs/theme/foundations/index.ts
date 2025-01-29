import breakpoints from './breakpoints'
import colors from './colors'
import semanticTokens from './semantic-tokens'
import shadows from './shadows'
import styles from './styles'
import textStyles from './text-styles'
import typography from './typography'
import zIndices from './z-index'

export const foundations = {
  zIndices,
  breakpoints,
  styles,
  textStyles,
  colors,
  semanticTokens,
  shadows,
  ...typography,
}

import { ReactNode } from 'react'

import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormErrorMessageProps,
  FormHelperText,
  FormLabel,
  FormLabelProps,
  TextProps,
} from '@chakra-ui/react'

interface FormHelperProps extends FormControlProps {
  label?: string
  children: ReactNode | ReactNode[]

  message?: {
    help?: string
    error?: string
    success?: string
  }

  styles?: {
    label?: FormLabelProps
    help?: TextProps
    error?: FormErrorMessageProps
    success?: TextProps
  }
}

/**
 * Chakra 의 FormControl 을 Wrapping 하여 Label, Error Text, Success Text 등을 추가로 넘겨 줄수 있는 컴포넌트입니다.
 *
 * Chakra FormControl 은
 * Chakra 의 Form Element 를 children 으로 받아, isInvalid, isDisabled, isRequired 와 같은 상태를
 * 자식 Chakra Form Component 에게 Context 로 전달해줍니다.
 *
 * @see https://chakra-ui.com/docs/components/form/form-control
 *
 * Theming path: src/configs/theme/components/multi-parts/form-control
 * */
const FormHelper = ({
  //
  children,
  label,

  message,
  styles,

  ...basisProps
}: FormHelperProps) => {
  const isShowErrorText = !!message?.error
  const isShowSuccessText = !!message?.success && !isShowErrorText
  const isShowHelperText =
    !!message?.help && !isShowErrorText && !isShowSuccessText

  return (
    <FormControl isInvalid={isShowErrorText} {...basisProps}>
      {!!label && <FormLabel {...styles?.label}>{label}</FormLabel>}
      {children}
      {isShowErrorText && (
        <FormErrorMessage as={'p'} {...styles?.error}>
          {message?.error}
        </FormErrorMessage>
      )}
      {isShowSuccessText && (
        <FormHelperText as={'p'} color="accent.green.2" {...styles?.success}>
          {message?.success}
        </FormHelperText>
      )}
      {isShowHelperText && (
        <FormHelperText as={'p'} color="content.4" {...styles?.help}>
          {message?.help}
        </FormHelperText>
      )}
    </FormControl>
  )
}

export default FormHelper

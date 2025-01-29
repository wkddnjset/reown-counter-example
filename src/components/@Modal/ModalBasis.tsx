import { ReactNode } from 'react'

import {
  Button,
  ButtonGroup,
  ChakraProps,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
} from '@chakra-ui/react'

import { withProps } from '@/hocs/withProps'

export interface ModalBasisProps extends Omit<ModalProps, 'children'> {
  header?: ReactNode
  body?: ReactNode
  footer?: ReactNode
  styles?: {
    header?: ChakraProps
    body?: ChakraProps
    footer?: ChakraProps
  }
  visibleCloseButton?: boolean
}

const ModalBasis = ({
  header,
  body,
  footer,
  styles,
  visibleCloseButton = true,
  ...props
}: ModalBasisProps) => {
  return (
    <Modal isCentered {...props}>
      <ModalOverlay />
      <ModalContent>
        {visibleCloseButton && <ModalCloseButton />}
        <ModalHeader
          textStyle={'pre-heading-04'}
          color={'content.1'}
          {...styles?.header}
        >
          {header}
        </ModalHeader>
        <ModalBody
          textStyle={'pre-body-06'}
          color={'content.2'}
          {...styles?.body}
        >
          {body}
        </ModalBody>
        <ModalFooter {...styles?.footer}>{footer}</ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalBasis

ModalBasis.ButtonGroup = withProps(ButtonGroup, { width: '100%' })
ModalBasis.Button = withProps(Button, { width: '100%', size: 'md' })

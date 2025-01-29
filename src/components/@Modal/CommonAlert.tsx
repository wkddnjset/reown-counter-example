import React from 'react'

import { ButtonProps } from '@chakra-ui/react'

import ModalBasis, { ModalBasisProps } from './ModalBasis'

export interface AlertButton extends ButtonProps {
  label: string
}

interface CommonAlertProps extends ModalBasisProps {
  buttons: AlertButton[]
}

const CommonAlert = ({ buttons, ...props }: CommonAlertProps) => {
  return (
    <ModalBasis
      visibleCloseButton={false}
      variant="alert"
      footer={buttons.map((btn, idx) => (
        <ModalBasis.Button key={idx} {...btn}>
          {btn.label}
        </ModalBasis.Button>
      ))}
      {...props}
    />
  )
}

export default CommonAlert

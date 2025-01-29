import React from 'react'

import { Button, Text, useColorMode } from '@chakra-ui/react'

const ColorModeBtn = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button
      variant={'solid-primary'}
      position="fixed"
      zIndex={'sticky'}
      top="100px"
      right="100px"
      onClick={toggleColorMode}
      w="50px"
      h="50px"
      borderRadius="full"
    >
      {colorMode === 'light' ?
        <Text>DARK</Text>
      : <Text>LIGHT</Text>}
    </Button>
  )
}

export default ColorModeBtn

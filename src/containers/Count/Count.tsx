import { Button, Center, ChakraProps, Text, VStack } from '@chakra-ui/react'
import { useAppKitAccount } from '@reown/appkit/react'

import { useCounter } from './hooks/useCounter'

interface CountProps {
  styles?: {
    container?: ChakraProps
  }
}

function Count({ styles }: CountProps) {
  const { initialize, incrementCount, getCount } = useCounter()
  const { address } = useAppKitAccount()
  const { data: countData } = getCount
  const count = countData?.count.toNumber() || 0

  return (
    <Center {...styles?.container} flexDirection="column" pt={'100px'}>
      <VStack spacing={'12px'}>
        <Text textStyle={'pre-heading-01'}>Counter</Text>
        <Text>
          {address?.slice(0, 4)}...{address?.slice(-4)}
        </Text>

        <Text textStyle={'pre-display-01'}>{count}</Text>
        <Button onClick={() => incrementCount.mutate()}>Increment</Button>
        <Button onClick={() => initialize.mutate()}>Initialize</Button>
      </VStack>
    </Center>
  )
}

export default Count

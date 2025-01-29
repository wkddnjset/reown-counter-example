import { useEffect, useState } from 'react'

import { Text, VStack } from '@chakra-ui/react'

function CurrentTime() {
  const [currentTime, setCurrentTime] = useState('00:00:00')

  useEffect(() => {
    const getCurrentTime = () => {
      const now = new Date()
      return now.toLocaleTimeString('ko-KR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      })
    }

    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime())
    }, 1000)

    // 초기값 설정
    setCurrentTime(getCurrentTime())

    return () => clearInterval(timer)
  }, [])

  return (
    <VStack spacing={'0px'}>
      <Text textStyle={'pre-display-02'} lineHeight={'1'}>
        {currentTime}
      </Text>
      <Text textStyle={'pre-body-04'} color={'content.5'}>
        with Reown Appkit
      </Text>
    </VStack>
  )
}
export default CurrentTime

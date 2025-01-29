import { memo } from 'react'

import { Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'

import FormHelper from '../FormHelper'

type TimeLeftTextProps = {
  timeLeft: string
}

export const TimeLeftText = memo(function TimeLeftText({
  timeLeft,
}: TimeLeftTextProps) {
  return <Text>{timeLeft}</Text>
})

const VerificationInput = ({
  time,
  isEnd,
}: {
  time: string
  isEnd: boolean
}) => {
  return (
    <>
      <FormHelper
        label="인증번호"
        message={{
          help: '설명',
        }}
        isDisabled={isEnd}
      >
        <InputGroup>
          <Input type="number" placeholder="인증번호를 입력해 주세요" />
          <InputRightElement>
            <TimeLeftText timeLeft={time} />
          </InputRightElement>
        </InputGroup>
      </FormHelper>
    </>
  )
}

export default VerificationInput

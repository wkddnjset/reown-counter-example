import { Badge, Box, Center, Flex, HStack, Image, Text } from '@chakra-ui/react'

const Ticket = ({
  numbers,
  id = null,
}: {
  numbers: number[]
  id?: number | null
}) => {
  return (
    <Box
      border={'1px solid'}
      borderColor={'content.3'}
      borderRadius={'12px'}
      p={'8px'}
      my={'auto'}
      w={'fit-content'}
      backdropFilter={'blur(10px)'}
    >
      <HStack spacing={'0px'} h={'80px'}>
        <Box
          bgGradient={'linear(to-t, #000000, #222222)'}
          borderLeftRadius={'12px'}
          h={'80px'}
          w={'180px'}
          px={'5px'}
        >
          <Badge borderRadius={'6px'}>
            <Text textStyle={'pre-caption-03'}>#TICKET{id}</Text>
          </Badge>

          <HStack alignItems={'center'} justifyContent={'center'} mt={'2px'}>
            {numbers.map((num) => (
              <Box
                key={num}
                bg="black"
                color="white"
                borderRadius="full"
                w={'30px'}
                h={'30px'}
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="sm"
              >
                {num}
              </Box>
            ))}
          </HStack>
        </Box>

        <Flex
          backgroundImage={'images/ticket_line.png'}
          backgroundSize={'cover'}
          backgroundPosition={'center'}
          h={'100%'}
          w={'13.5px'}
        />
        <Center
          borderRightRadius={'12px'}
          bgGradient={'linear(to-t, #000000, #222222)'}
          h={'100%'}
          w={'70px'}
        >
          <Image src={'/images/solana.png'} alt={'solana'} boxSize={'40px'} />
        </Center>
      </HStack>
    </Box>
  )
}

export default Ticket

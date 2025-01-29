import { useMemo } from 'react'

import { useRouter } from 'next/router'

import { Link } from '@chakra-ui/next-js'
import {
  Button,
  Container,
  ContainerProps,
  HStack,
  Spinner,
  Text,
} from '@chakra-ui/react'
import { useAppKitAccount } from '@reown/appkit/react'

import ClientOnly from '@/components/ClientOnly'
import { ROUTES } from '@/generated/path/routes'

const HomeHeader = ({ ...props }: ContainerProps) => {
  const router = useRouter()
  const { address } = useAppKitAccount()
  const isAdmin = useMemo(() => {
    return address && process.env.NEXT_PUBLIC_ADMIN_ADDRESS?.includes(address)
  }, [address])

  return (
    <Container
      display={'flex'}
      w={'100%'}
      alignItems={'center'}
      justifyContent="space-between"
      borderBottom={'1px solid'}
      borderColor={'content.1'}
      backdropFilter={'blur(10px)'}
      // pr={'5px'}
      {...props}
    >
      <Link variant={'unstyled'} href={ROUTES.MAIN}>
        <Text
          color={'content.7'}
          textStyle={'pre-heading-02'}
        >{`Counter`}</Text>
      </Link>
      <HStack spacing="16px">
        {isAdmin && (
          <Button
            onClick={() => {
              router.push('/admin')
            }}
          >
            <Text>Admin</Text>
          </Button>
        )}
        <ClientOnly fallback={<Spinner size={'sm'} />}>
          <appkit-button />
        </ClientOnly>
      </HStack>
    </Container>
  )
}

export default HomeHeader

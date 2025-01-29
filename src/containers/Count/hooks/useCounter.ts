import { useEffect, useMemo, useState } from 'react'

import { useToast } from '@chakra-ui/react'
import { BN } from '@coral-xyz/anchor'
import { useAppKitAccount } from '@reown/appkit/react'
import { Cluster, PublicKey } from '@solana/web3.js'
import { useMutation, useQuery } from '@tanstack/react-query'

import { getCountProgram, getCountProgramId } from '@/anchor'
import { useAnchorProvider } from '@/hooks/useAnchorProvider'

export const useCounter = () => {
  const [countAddress, setCountAddress] = useState<any>()
  const toast = useToast()
  const { address } = useAppKitAccount()

  const { provider, cluster } = useAnchorProvider()
  const programId = useMemo(
    () => getCountProgramId(cluster as Cluster),
    [cluster],
  )
  const program = useMemo(
    () => getCountProgram(provider, programId),
    [provider, programId],
  )

  useEffect(() => {
    const updateState = async () => {
      if (!countAddress && address) {
        const [counterPDA] = await PublicKey.findProgramAddress(
          [Buffer.from('counter'), new PublicKey(address).toBuffer()],
          programId,
        )
        setCountAddress(counterPDA.toBase58())
      }
    }
    updateState()
  }, [address, programId, countAddress])

  const initialize = useMutation({
    mutationKey: ['test', 'initialize', { cluster }],
    mutationFn: () =>
      program.methods
        .initialize(new BN(0))
        .accounts({
          authority: address,
        })
        .rpc(),
    onSuccess: (signature) => {
      toast({
        title: 'Transaction successful',
        description: signature,
        status: 'success',
      })
    },
    onError: (error) =>
      toast({
        title: 'Failed to initialize account',
        description: error.message,
        status: 'error',
      }),
  })

  const incrementCount = useMutation({
    mutationFn: () =>
      program.methods.increment().accounts({ counter: countAddress }).rpc(),
    onSuccess: (signature) => {
      toast({
        title: 'Transaction successful',
        description: signature,
        status: 'success',
      })
      getCount.refetch()
    },
    onError: (error) =>
      toast({
        title: 'Failed to increment count',
        description: error.message,
        status: 'error',
      }),
  })

  const getCount = useQuery({
    queryKey: ['count', { cluster }],
    queryFn: () => program.account.counter.fetch(countAddress),
  })

  return {
    program,
    programId,
    initialize,
    incrementCount,
    getCount,
  }
}

export default useCounter

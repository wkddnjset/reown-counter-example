// Here we export some useful types and functions for interacting with the Anchor program.
import { AnchorProvider, Program } from '@coral-xyz/anchor'
import { Cluster, PublicKey } from '@solana/web3.js'

import CounterIDL from '../target/idl/counter.json'
import type { Counter } from '../target/types/counter'

// Re-export the generated IDL and type
export { Counter, CounterIDL }

// The programId is imported from the program IDL.
export const COUNTER_PROGRAM_ID = new PublicKey(CounterIDL.address)

// This is a helper function to get the Test Anchor program.
export function getCountProgram(provider: AnchorProvider, address?: PublicKey) {
  return new Program(
    {
      ...CounterIDL,
      address: address ? address.toBase58() : CounterIDL.address,
    } as Counter,
    provider,
  )
}

// This is a helper function to get the program ID for the Test program depending on the cluster.
export function getCountProgramId(cluster: Cluster) {
  switch (cluster) {
    case 'devnet':
    case 'testnet':
      // This is the program ID for the Test program on devnet and testnet.
      return new PublicKey('7e5kJk9pYxypQn2fGahUkAZWXWdRdtdyLuujKTArSsaW')
    case 'mainnet-beta':
    default:
      return COUNTER_PROGRAM_ID
  }
}

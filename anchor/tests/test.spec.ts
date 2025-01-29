import * as anchor from '@coral-xyz/anchor'
import { BN, Program } from '@coral-xyz/anchor'
import { Keypair } from '@solana/web3.js'

import { Counter } from '../target/types/counter'

describe('counter', () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env()
  anchor.setProvider(provider)
  const payer = provider.wallet as anchor.Wallet

  const program = anchor.workspace.Counter as Program<Counter>

  const testKeypair = Keypair.generate()

  it('Initialize Test', async () => {
    await program.methods
      .initialize(new BN(42))
      .accounts({
        // counter: testKeypair.publicKey,
        authority: payer.publicKey,
      })
      .signers([testKeypair])
      .rpc()

    const currentCount = await program.account.counter.fetch(
      testKeypair.publicKey,
    )

    expect(currentCount.count).toEqual(0)
  })

  it('Increment Test', async () => {
    await program.methods
      .increment()
      .accounts({ counter: testKeypair.publicKey })
      .rpc()

    const currentCount = await program.account.counter.fetch(
      testKeypair.publicKey,
    )

    expect(currentCount.count).toEqual(1)
  })

  it('Increment Test Again', async () => {
    await program.methods
      .increment()
      .accounts({ counter: testKeypair.publicKey })
      .rpc()

    const currentCount = await program.account.counter.fetch(
      testKeypair.publicKey,
    )

    expect(currentCount.count).toEqual(2)
  })
})

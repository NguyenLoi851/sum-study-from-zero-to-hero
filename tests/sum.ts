import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { expect } from "chai";
import { Sum } from "../target/types/sum";
// import * as spl from "@solana/spl-token";

describe("sum", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());
  const provider = anchor.AnchorProvider.env();

  const program = anchor.workspace.Sum as Program<Sum>;
  const sumAccountKeypair = anchor.web3.Keypair.generate();
  // console.log(program.provider.publicKey)
  // console.log(program.provider.publicKey.toBase58())

  it("Is initialized!", async () => {
    const sum_init = new anchor.BN(10);
    const tx = await program.methods
      .initialize(sum_init)
      .accounts({
        sumAccount: sumAccountKeypair.publicKey,
        user: program.provider.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .signers([sumAccountKeypair])
      .rpc();

    const sumAccountReturn = await program.account.sum.fetch(
      sumAccountKeypair.publicKey
    );
    // console.log(sumAccountReturn.value.toNumber())
    expect(sumAccountReturn.value.toNumber()).to.be.equal(sum_init.toNumber());
  });

  it("Is updated!", async () => {
    const sum_init_new = new anchor.BN(20);
    const tx = await program.methods
      .update(sum_init_new)
      .accounts({
        sumAccount: sumAccountKeypair.publicKey,
      })
      .rpc();

    const sumAccountReturn = await program.account.sum.fetch(
      sumAccountKeypair.publicKey
    );
    expect(sumAccountReturn.value.toNumber()).to.be.equal(
      sum_init_new.toNumber()
    );
  });

  it("Is increased!", async () => {
    const delta = new anchor.BN(30);
    const sumAccountReturn1 = await program.account.sum.fetch(
      sumAccountKeypair.publicKey
    );
    const before_value = sumAccountReturn1.value.toNumber();
    // console.log("Before value", before_value)

    const tx = await program.methods
      .increase(delta)
      .accounts({
        sumAccount: sumAccountKeypair.publicKey,
      })
      .rpc();

    const sumAccountReturn2 = await program.account.sum.fetch(
      sumAccountKeypair.publicKey
    );
    const after_value = sumAccountReturn2.value.toNumber();
    // console.log("After value", after_value)
    expect(after_value).to.be.equal(before_value + delta.toNumber());
  });
});

import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Vault } from "../target/types/vault";

describe("vault", () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.Vault as Program<Vault>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().accounts({
      user: provider.wallet.publicKey
    }).rpc();
    console.log("Your transaction signature", tx);
  });

  it("Deposits!", async () => {
    // Add your test here.
    const depositAmount = 0.1 * anchor.web3.LAMPORTS_PER_SOL;
    const tx = await program.methods
    .deposit(new anchor.BN(depositAmount))
    .accounts({
      user: provider.wallet.publicKey
    })
    .rpc();
    console.log("Your transaction signature", tx);
  });
  it("Withdraw!", async () => {
    // Add your test here.
    const withdrawAmount = 0.1 * anchor.web3.LAMPORTS_PER_SOL;
    const tx = await program.methods
    .withdraw(new anchor.BN(withdrawAmount))
    .accounts({
      user: provider.wallet.publicKey
    })
    .rpc();
    console.log("Your transaction signature", tx);
  });
});

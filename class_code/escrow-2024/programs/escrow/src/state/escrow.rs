use anchor_lang::prelude::*;

#[account]
pub struct Escrow {
    pub seed: u64, //so that user can have more than 1 escrow account
    pub maker: Pubkey, //signer or the authority
    pub mint_a: Pubkey, //the mint that we will be sending
    pub mint_b: Pubkey, //the mint that we will be receiving
    pub receive: u64, //the amount of mint_b that we will be receiving
   // pub send: u64, //the amount of mint_a that we will be sending
    pub bump: u8, //because our escrow account is a PDA
}

impl Space for Escrow {
    const INIT_SPACE: usize = 8 + 8 + 32 + 32 + 32 + 8 + 1;
}
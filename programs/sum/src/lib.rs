use anchor_lang::prelude::*;
use instructions::*;
pub mod instructions;
pub mod state;

declare_id!("BRFToHyskhgosAcNDCGRF7v5ENwheanfSSvdUVAqpSi1");

#[program]
pub mod sum {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>, value: u64) -> Result<()> {
        instructions::initialize_sum::initialize(ctx, value)
    }

    pub fn update(ctx: Context<Update>, new_value: u64) -> Result<()> {
        instructions::update_sum::update(ctx, new_value)
    }

    pub fn increase(ctx: Context<Increase>, delta: u64) -> Result<()> {
        instructions::increase_sum::increase(ctx, delta)
    }
}

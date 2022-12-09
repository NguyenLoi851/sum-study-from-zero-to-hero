use anchor_lang::prelude::*;
use crate::state::Sum;

pub fn initialize(ctx: Context<Initialize>, value: u64) -> Result<()> {
    let sum_acc = &mut ctx.accounts.sum_account;
    sum_acc.value = value;
    Ok(())
}

#[derive(Accounts)]
pub struct Initialize<'info>{
    #[account(init, payer = user, space = 8+8)]
    pub sum_account: Account<'info, Sum>,

    #[account(mut)]
    pub user: Signer<'info>,

    pub system_program: Program<'info, System>
}

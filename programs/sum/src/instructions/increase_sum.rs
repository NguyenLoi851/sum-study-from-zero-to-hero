use anchor_lang::prelude::*;
use crate::state::Sum;

pub fn increase(ctx: Context<Increase>, delta: u64) -> Result<()> {
    let sum_acc = &mut ctx.accounts.sum_account;
    sum_acc.value += delta;
    Ok(())
}

#[derive(Accounts)]
pub struct Increase<'info>{
    #[account(mut)]
    pub sum_account: Account<'info, Sum>
}

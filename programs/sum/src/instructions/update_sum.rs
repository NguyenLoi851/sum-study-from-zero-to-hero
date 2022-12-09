use anchor_lang::prelude::*;
use crate::state::Sum;

pub fn update(ctx: Context<Update>, new_value: u64) -> Result<()> {
    let sum_acc = &mut ctx.accounts.sum_account;
    sum_acc.value = new_value;
    Ok(())
}

#[derive(Accounts)]
pub struct Update<'info>{
    #[account(mut)]
    pub sum_account: Account<'info, Sum>
}

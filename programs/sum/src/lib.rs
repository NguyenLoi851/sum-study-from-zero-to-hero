use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod sum {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>, value: u64) -> Result<()> {
        ctx.accounts.sum_account.value = value;
        Ok(())
    }

    pub fn update(ctx: Context<Update>, new_value: u64) -> Result<()> {
        ctx.accounts.sum_account.value = new_value;
        Ok(())
    }

    pub fn increase(ctx: Context<Increase>, delta: u64) -> Result<()> {
        ctx.accounts.sum_account.value += delta;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info>{
    #[account(init, payer = user, space = 8+8)]
    pub sum_account: Account<'info, Sum>,

    #[account(mut)]
    pub user: Signer<'info>,

    pub system_program: Program<'info, System>
}

#[derive(Accounts)]
pub struct Update<'info>{
    #[account(mut)]
    pub sum_account: Account<'info, Sum>
}

#[derive(Accounts)]
pub struct Increase<'info>{
    #[account(mut)]
    pub sum_account: Account<'info, Sum>
}

#[account]
pub struct Sum{
    pub value: u64
}
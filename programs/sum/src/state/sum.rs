use anchor_lang::prelude::*;

#[account]
pub struct Sum{
    pub value: u64
}
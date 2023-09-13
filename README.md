# Change branch to see code from basic to standard

# Flow to write new instruction

- 1: Declare state in crate::state

- 2: Declare related account in crate::instructions

- 3: Declare function in crate::instructions

- 4: Declare instruction in crate::lib

- 5: anchor build

- 6: $ anchor keys list OR $ solana address -k target/deploy/sum-keypair.json to get Program ID and replace in lib.rs

# Flow and Note (base on test file)

Note 1: program.provider.publicKey is address of your wallet in your local computer (/home/user/.config/solana)

(it means program.provider.publicKey.toBase58() = $ solana address)

- Flow 1: Generate a keypair for sum account

Note 2: This is only keypair of sum account, not an account

- Flow 2: Send transaction with initialize instruction to solana network

- Flow 2.1: We need to pass accounts related to transaction / instructions. To get accounts of a instruction, we have 2 ways. First solution, we find function corresponds to instructions in lib.rs, then find struct is declared in ctx; after that accounts in struct are what we need to pass in instruction. Second solution, which is faster and done by front-end, find in IDL file.

- Flow 2.1.1: Sum-Program will invoke System Program to create new Sum account with sum keypair, which is declared first.

- Flow 2.1.2: System Program create new Sum Account and transfer ownership of Sum Account to Sum Program. Then, Sum Program can write to Sum Account.

- Flow 2.2: We need to pass signers, which are writable in instruction.

Note 3: With anchor, we do not need to pass accounts of DEFAULT / PROGRAM user in signatures parts. It will be automatically done by anchor.

Note 4: When creating struct to increase value for Sum Account, if we forget to declare #[account(mut)] for sum_account, test file will not return error.

Only work with solana version 1.14.18
Not work with solana version 1.66.0
($ solana-install upgrade <version>)

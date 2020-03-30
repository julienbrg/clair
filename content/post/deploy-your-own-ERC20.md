+++
author = "default"
title = "How to deploy your own ERC-20 (and why)"
date = "2020-01-15"
description = "How to deploy your own ERC-20 (and why)"
feature = "mst.png"
caption = "[http://remix.ethereum.org/](http://remix.ethereum.org/)"
+++

My Stupid Token ([MyStupidToken.sol](https://github.com/julienbrg/my-stupid-token/blob/master/MyStupidToken.sol)) is a template of a basic [ERC-20 token](https://eips.ethereum.org/EIPS/eip-20). It uses the set of Solidity contracts provided by OpenZeppelin ([here](https://github.com/OpenZeppelin/openzeppelin-solidity/contracts)).

It's one of the safest existing way to create a digital asset that can't be counterfeited. Once the contract is deployed, all the supply is sent to your own address. In the second part of this post, we'll review the most common use cases for the ERC-20 standard.

We will first deploy on [Goerli network](https://goerli.net/), which is an Ethereum testnet, to make sure everything works perfectly, then we'll deploy the same contract on Ethereum mainnet. You're going to need real money (a few cents) to deploy your contract on Ethereum and to interact with it.

-   Install [Metamask](https://metamask.io/).
-   Back it up as indicated.
-   Get some [Goerli](https://goerli.net/) ETH on the [Goerli Social Faucet](https://faucet.goerli.mudit.blog/).

[MyStupidToken.sol](https://github.com/julienbrg/my-stupid-token/blob/master/MyStupidToken.sol):

```javascript
pragma solidity ^0.5.0;

import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";

contract MyStupidToken is ERC20, ERC20Detailed
{
    constructor()
	public ERC20Detailed("My Stupid Token", "MST", 18)
	{
		_mint(msg.sender, 10000*10**18);
	}
}
```

-   Copy the piece of code above, and go to [Remix](http://remix.ethereum.org/), click on 'New File' (you'll rename it later), paste your code here, at line 9 change the name ('My Stupid Token') and the 3 letters ('MST'), at line 11 change the supply (10000).
-   Then in the file explorer (on the left), do a right click on your file and select 'rename'. Make sure each word of your '.sol' file name starts with a capital letter.
-   In the left menu, click on 'Solidity Compiler', then click on the big 'Compile' button.
-   In the left menu again, click on 'Deploy & run transactions' and select 'Injected Web3' as 'environment'.
-   In Metamask (Chrome extension), make sure you've selected the Goerli network (the blue one).
-   Click on 'Deploy'. Copy the address of this contract.

The token contract is now deployed on Goerli network, which also means that you currently have 100% of the supply in your wallet. You can check what's happening on the (Goerli) blockchain thanks to Etherscan:

<https://goerli.etherscan.io/>

## Add a custom token in Metamask

Let's add your token in Metamask:

-   In Metamask, click on the left menu.
-   At the bottom of the window, click on 'Add a token'.
-   Select 'Custom token', in 'Token contract address', paste the address of your contract, fill the 'Symbol' field with the three letters, and put '18' in the 'Decimals' field.
-   Click on 'Next'.

## Deploy on Ethereum

-   Get yourself a handful of ethers (ETH): feel free to ask me some via [Telegram](https://t.me/julienbrg). You can also click on 'deposit' and use Coinswitch to buy some ETH with your credit card.
-   Go back to [Remix](http://remix.ethereum.org/).
-   Select 'injected Web3' as environment but select 'Ethereum mainnet' in your Metamask.
-   Deploy and copy the address of your contract.

You can send your own tokens to your friends!

## Why would you deploy your own ERC-20?

So you now have your own ERC-20 tokens in your pocket. They're uncounterfeitable, your little system is entirely verifiable and transparent. It is also more than secure: attack and break the Ethereum network is no pic-nic. As of January 2020, there are billions of US dollars worth of ERC-20s currently flowing from wallets to wallets on the Ethereum blockchain... but yours is worth absolutely nothing: it's what we call a 'shitcoin'.

Thousands of scammers sold this kind of assets and made a lot of money. Others included their asset in a given app architecture, the asset is then called a 'utility token'. But yo, what happens if the team who's building that super mega platform just don't make it? What if this service is actually not solving any problem for anyone? Well, the token will not be needed, and there won't be anyone to buy it on the markets, which means that its price could quickly get to zero. In some cases it's pretty unclear if the team failed, or if they knew from the start that the Frankenstein-style product described in their so-called 'white paper' had any relevance whatsoever.

Then you have ERC-20s that represent shares of a company. This is easier to understand: instead of having your capital in the form of paper, it's a digital version of your company's shares. It's easier to manage and technically can offer a bunch of sexy features: holders may be able to directly redeem their shares when they want, enjoy cashing in some dividends, take part of the project's governance, get all sorts of discounts just proving they actually hold it. This is all absolutely great, but every local jurisdictions happen to have their own rules for these things and you're supposed to respect them.

ERC-20s also can be used as a reputation token: you do something and get one unit as a reward, then when you have a certain number of them you get an access other things. On-chain voting is an example: most of DAOs have ERC-20s that represent voting power. ERC-20s are transferable so they're not tight to a specific wallet or person.

On the currency thing, [Bernard Lietaer](http://www.lietaer.com/) often compared the US dollar to monoculture. I do believe we actually need a diversity of currencies if we want a more resilient financial system. In case if you don't know, there are thousands of complementary currencies in circulation on this planet, probably more than 5,000 different systems including time banking, mutual credit systems, and many others. The two important things to ask when you look at an alternative currency is "who issued it?" and "how was it distributed?".

The [DAI](https://oasis.app/trade/market/WETH/DAI) is an ERC-20. Its issuance process is designed in such a way that its price is stable: 1 DAI = 1 USD. No one is saying that it's perfect and flawless, but at least it's been stable for more than three years now. The decentralized finance, now called '[DeFi](https://defipulse.com/)', has just crossed [1 billion USD eq.](https://www.coindesk.com/why-defis-billion-dollar-milestone-matters) locked in all sorts of contracts, and a lot of these services all use the ERC-20 standard.

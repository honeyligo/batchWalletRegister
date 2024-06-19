const { ethers } = require("ethers");

const count = 10;

function generateWallets(count) {
  const wallets = [];
  for (let i = 0; i < count; i++) {
    const wallet = ethers.Wallet.createRandom();
    wallets.push(wallet);
  }

  return wallets;
}

function printWallets(wallets) {
  console.log(`index, Address, Private Key`);
  wallets.forEach((wallet, index) => {
    console.log(`${index + 1}` + `,${wallet.address}` + `,${wallet.privateKey}`);
  });
}

const wallets = generateWallets(count);
printWallets(wallets);

import { ethers } from "hardhat";


async function main() {
  const NFTContract = await ethers.getContractFactory("NFTContract");
  const nft = await NFTContract.deploy();

  await nft.deployed();

  console.log("NFT Contract deployed to:", nft.address,"for biconomy devrel application");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
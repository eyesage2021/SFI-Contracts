const { BigNumber } = require("@ethersproject/bignumber");

module.exports = async ({
    getNamedAccounts,
    deployments,
    getChainId,
    getUnnamedAccounts,
  }) => {
    const {deploy} = deployments;
    const {deployer, account1, account2} = await getNamedAccounts();

    console.log("Deplying contracts with account:", deployer);

    const SFIIceAgeTest = await deploy('SFIIceAge918', {
      from: deployer,
      gasLimit: 4000000,
      args: [],
    });

    console.log("SFIIceAgeTest deployed at:", SFIIceAgeTest.address);

    const stakingRewards = await deploy('StakingRewards', {
      from: deployer,
      gasLimit: 4000000,
      args: [deployer, "0xCE7593a8ba23A4Ad8DDb4e242Eaf251a30190325", "0x096Fb607aBac2f6401D635A03C0cc3dF265BfF19"],
    });

    console.log("StakingRewardsPGL contract deployed at:", stakingRewards.address)
  };
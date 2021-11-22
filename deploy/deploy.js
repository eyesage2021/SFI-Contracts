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

    // const SL3Test = await deploy('SL31010', {
    //   from: deployer,
    //   args: []
    // });

    // console.log("SL31010 deployed at:", SL3Test.address);

    const stakingRewardsSFITax = await deploy('StakingRewardsSFITax', {
      from: deployer,
      gasLimit: 4000000,
      args: ["0x2d924267ce8b35A25035eec0b4EF4167b42D8769", "0x1F1FE1eF06ab30a791d6357FdF0a7361B39b1537", "0x1F1FE1eF06ab30a791d6357FdF0a7361B39b1537"],
    });

    console.log("StakingRewardsSFITax contract deployed at:", stakingRewardsSFITax.address)

    const stakingRewardsSL3Tax = await deploy('StakingRewardsSL3Tax', {
      from: deployer,
      gasLimit: 4000000,
      args: ["0x2d924267ce8b35A25035eec0b4EF4167b42D8769", "0x1F1FE1eF06ab30a791d6357FdF0a7361B39b1537", "0x2841a8a2ce98a9d21ad8c3b7fc481527569bd7bb"],
    });

    console.log("StakingRewardsSL3Tax contract deployed at:", stakingRewardsSL3Tax.address)

    const stakingRewardsPGLSFI = await deploy('StakingRewardsPGLSFI', {
      from: deployer,
      gasLimit: 4000000,
      args: ["0x2d924267ce8b35A25035eec0b4EF4167b42D8769", "0x1F1FE1eF06ab30a791d6357FdF0a7361B39b1537", "0x18C8E1346D26824063706242AdB391DDB16C293E"],
    });

    console.log("StakingRewardsPGLSFI contract deployed at:", stakingRewardsPGLSFI.address)

    const stakingRewardsPGLSL3 = await deploy('StakingRewardsPGLSL3', {
      from: deployer,
      gasLimit: 4000000,
      args: ["0x2d924267ce8b35A25035eec0b4EF4167b42D8769", "0x1F1FE1eF06ab30a791d6357FdF0a7361B39b1537", "0xD9c91b8aF2317a82E1986A8D3De687437Ead50Dd"],
    });

    console.log("StakingRewardsPGLSL3 contract deployed at:", stakingRewardsPGLSL3.address)
  };
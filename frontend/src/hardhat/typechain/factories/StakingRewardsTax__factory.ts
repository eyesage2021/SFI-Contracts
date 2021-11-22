/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { StakingRewardsTax } from "../StakingRewardsTax";

export class StakingRewardsTax__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _owner: string,
    _rewardsToken: string,
    _stakingToken: string,
    overrides?: Overrides
  ): Promise<StakingRewardsTax> {
    return super.deploy(
      _owner,
      _rewardsToken,
      _stakingToken,
      overrides || {}
    ) as Promise<StakingRewardsTax>;
  }
  getDeployTransaction(
    _owner: string,
    _rewardsToken: string,
    _stakingToken: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _owner,
      _rewardsToken,
      _stakingToken,
      overrides || {}
    );
  }
  attach(address: string): StakingRewardsTax {
    return super.attach(address) as StakingRewardsTax;
  }
  connect(signer: Signer): StakingRewardsTax__factory {
    return super.connect(signer) as StakingRewardsTax__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StakingRewardsTax {
    return new Contract(address, _abi, signerOrProvider) as StakingRewardsTax;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rewardsToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_stakingToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerNominated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "isPaused",
        type: "bool",
      },
    ],
    name: "PauseChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Recovered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "RewardAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "RewardPaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newDuration",
        type: "uint256",
      },
    ],
    name: "RewardsDurationUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Staked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "earned",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "exit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getRewardForDuration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastPauseTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastTimeRewardApplicable",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastUpdateTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "min",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "nominateNewOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "nominatedOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "notifyRewardAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "periodFinish",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "recoverERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardPerToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardPerTokenStored",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "rewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardsDuration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardsToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_paused",
        type: "bool",
      },
    ],
    name: "setPaused",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rewardsDuration",
        type: "uint256",
      },
    ],
    name: "setRewardsDuration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakingToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userRewardPerTokenPaid",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000600655600060075562093a8060085534801561002157600080fd5b506040516118a93803806118a98339818101604052606081101561004457600080fd5b50805160208201516040909201516001600055909190826001600160a01b0381166100b6576040805162461bcd60e51b815260206004820152601960248201527f4f776e657220616464726573732063616e6e6f74206265203000000000000000604482015290519081900360640190fd5b600180546001600160a01b0319166001600160a01b0383169081179091556040805160008152602081019290925280517fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c9281900390910190a1506001546001600160a01b0316610162576040805162461bcd60e51b815260206004820152601160248201527013dddb995c881b5d5cdd081899481cd95d607a1b604482015290519081900360640190fd5b60048054610100600160a81b0319166101006001600160a01b0394851602179055600580546001600160a01b0319169190921617905550611701806101a86000396000f3fe608060405234801561001057600080fd5b50600436106101d95760003560e01c80637ae2b5c711610104578063a694fc3a116100a2578063d1af0c7d11610071578063d1af0c7d14610432578063df136d651461043a578063e9fad8ee14610442578063ebe2b12b1461044a576101d9565b8063a694fc3a146103e8578063c8f33c9114610405578063cc1a378f1461040d578063cd3daf9d1461042a576101d9565b80638980f11f116100de5780638980f11f146103865780638b876347146103b25780638da5cb5b146103d857806391b4ded9146103e0576101d9565b80637ae2b5c7146103535780637b0a47ee1461037657806380faa57d1461037e576101d9565b8063386a95251161017c5780635c975abb1161014b5780635c975abb1461030157806370a082311461031d57806372f702f31461034357806379ba50971461034b576101d9565b8063386a9525146102b05780633c6b16ab146102b85780633d18b912146102d557806353a47bb7146102dd576101d9565b806316c38b3c116101b857806316c38b3c1461026457806318160ddd146102835780631c1f78eb1461028b5780632e1a7d4d14610293576101d9565b80628cc262146101de5780630700037d146102165780631627540c1461023c575b600080fd5b610204600480360360208110156101f457600080fd5b50356001600160a01b0316610452565b60408051918252519081900360200190f35b6102046004803603602081101561022c57600080fd5b50356001600160a01b03166104d0565b6102626004803603602081101561025257600080fd5b50356001600160a01b03166104e2565b005b6102626004803603602081101561027a57600080fd5b5035151561053e565b6102046105b8565b6102046105bf565b610262600480360360208110156102a957600080fd5b50356105dd565b610204610773565b610262600480360360208110156102ce57600080fd5b5035610779565b610262610984565b6102e5610abf565b604080516001600160a01b039092168252519081900360200190f35b610309610ace565b604080519115158252519081900360200190f35b6102046004803603602081101561033357600080fd5b50356001600160a01b0316610ad7565b6102e5610af2565b610262610b01565b6102046004803603604081101561036957600080fd5b5080359060200135610bbd565b610204610bd5565b610204610bdb565b6102626004803603604081101561039c57600080fd5b506001600160a01b038135169060200135610be9565b610204600480360360208110156103c857600080fd5b50356001600160a01b0316610cbf565b6102e5610cd1565b610204610ce0565b610262600480360360208110156103fe57600080fd5b5035610ce6565b610204610ed3565b6102626004803603602081101561042357600080fd5b5035610ed9565b610204610f5c565b6102e5610faa565b610204610fbe565b610262610fc4565b610204610fe7565b6001600160a01b0381166000908152600c6020908152604080832054600b9092528220546104ca91906104c490670de0b6b3a7640000906104be9061049f90610499610f5c565b90610fed565b6001600160a01b0388166000908152600e60205260409020549061102f565b90611088565b906110ca565b92915050565b600c6020526000908152604090205481565b6104ea611124565b600280546001600160a01b0383166001600160a01b0319909116811790915560408051918252517f906a1c6bd7e3091ea86693dd029a831c19049ce77f1dce2ce0bab1cacbabce229181900360200190a150565b610546611124565b60045460ff161515811515141561055c576105b5565b6004805460ff1916821515179081905560ff161561057957426003555b6004546040805160ff90921615158252517f8fb6c181ee25a520cf3dd6565006ef91229fcfe5a989566c2a3b8c115570cec59181900360200190a15b50565b600d545b90565b60006105d860085460075461102f90919063ffffffff16565b905090565b60026000541415610635576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b600260005533610643610f5c565b600a5561064e610bdb565b6009556001600160a01b038116156106955761066981610452565b6001600160a01b0382166000908152600c6020908152604080832093909355600a54600b909152919020555b600082116106de576040805162461bcd60e51b8152602060048201526011602482015270043616e6e6f74207769746864726177203607c1b604482015290519081900360640190fd5b600d546106eb9083610fed565b600d55336000908152600e60205260409020546107089083610fed565b336000818152600e6020526040902091909155600554610734916001600160a01b03909116908461116d565b60408051838152905133917f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5919081900360200190a250506001600055565b60085481565b610781611124565b600061078b610f5c565b600a55610796610bdb565b6009556001600160a01b038116156107dd576107b181610452565b6001600160a01b0382166000908152600c6020908152604080832093909355600a54600b909152919020555b60065442106107fc576008546107f4908390611088565b60075561083f565b60065460009061080c9042610fed565b905060006108256007548361102f90919063ffffffff16565b600854909150610839906104be86846110ca565b60075550505b6000600460019054906101000a90046001600160a01b03166001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156108a357600080fd5b505afa1580156108b7573d6000803e3d6000fd5b505050506040513d60208110156108cd57600080fd5b50516008549091506108e0908290611088565b6007541115610936576040805162461bcd60e51b815260206004820152601860248201527f50726f76696465642072657761726420746f6f20686967680000000000000000604482015290519081900360640190fd5b42600981905560085461094991906110ca565b6006556040805184815290517fde88a922e0d3b88b24e9623efeb464919c6bf9f66857a65e2bfcf2ce87a9433d9181900360200190a1505050565b600260005414156109dc576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b6002600055336109ea610f5c565b600a556109f5610bdb565b6009556001600160a01b03811615610a3c57610a1081610452565b6001600160a01b0382166000908152600c6020908152604080832093909355600a54600b909152919020555b336000908152600c60205260409020548015610ab657336000818152600c6020526040812055600454610a7f916101009091046001600160a01b0316908361116d565b60408051828152905133917fe2403640ba68fed3a2f88b7557551d1993f84b99bb10ff833f0cf8db0c5e0486919081900360200190a25b50506001600055565b6002546001600160a01b031681565b60045460ff1681565b6001600160a01b03166000908152600e602052604090205490565b6005546001600160a01b031681565b6002546001600160a01b03163314610b4a5760405162461bcd60e51b81526004018080602001828103825260358152602001806115b46035913960400191505060405180910390fd5b600154600254604080516001600160a01b03938416815292909116602083015280517fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c9281900390910190a160028054600180546001600160a01b03199081166001600160a01b03841617909155169055565b6000818310610bcc5781610bce565b825b9392505050565b60075481565b60006105d842600654610bbd565b610bf1611124565b6005546001600160a01b03838116911614801590610c2257506004546001600160a01b038381166101009092041614155b610c5d5760405162461bcd60e51b815260040180806020018281038252602d815260200180611675602d913960400191505060405180910390fd5b600154610c77906001600160a01b0384811691168361116d565b604080516001600160a01b03841681526020810183905281517f8c1256b8896378cd5044f80c202f9772b9d77dc85c8a6eb51967210b09bfaa28929181900390910190a15050565b600b6020526000908152604090205481565b6001546001600160a01b031681565b60035481565b60026000541415610d3e576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b600260005560045460ff1615610d855760405162461bcd60e51b815260040180806020018281038252603c815260200180611639603c913960400191505060405180910390fd5b33610d8e610f5c565b600a55610d99610bdb565b6009556001600160a01b03811615610de057610db481610452565b6001600160a01b0382166000908152600c6020908152604080832093909355600a54600b909152919020555b60008211610e26576040805162461bcd60e51b815260206004820152600e60248201526d043616e6e6f74207374616b6520360941b604482015290519081900360640190fd5b6000610e3960096104be8561037061102f565b600d54909150610e4990826110ca565b600d55336000908152600e6020526040902054610e6690826110ca565b336000818152600e6020526040902091909155600554610e93916001600160a01b039091169030866111c4565b60408051828152905133917f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d919081900360200190a25050600160005550565b60095481565b610ee1611124565b6006544211610f215760405162461bcd60e51b815260040180806020018281038252605881526020018061155c6058913960600191505060405180910390fd5b60088190556040805182815290517ffb46ca5a5e06d4540d6387b930a7c978bce0db5f449ec6b3f5d07c6e1d44f2d39181900360200190a150565b6000600d5460001415610f725750600a546105bc565b6105d8610fa1600d546104be670de0b6b3a7640000610f9b600754610f9b600954610499610bdb565b9061102f565b600a54906110ca565b60045461010090046001600160a01b031681565b600a5481565b336000908152600e6020526040902054610fdd906105dd565b610fe5610984565b565b60065481565b6000610bce83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611224565b60008261103e575060006104ca565b8282028284828161104b57fe5b0414610bce5760405162461bcd60e51b81526004018080602001828103825260218152602001806116186021913960400191505060405180910390fd5b6000610bce83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506112bb565b600082820183811015610bce576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6001546001600160a01b03163314610fe55760405162461bcd60e51b815260040180806020018281038252602f8152602001806115e9602f913960400191505060405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526111bf908490611320565b505050565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b17905261121e908590611320565b50505050565b600081848411156112b35760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611278578181015183820152602001611260565b50505050905090810190601f1680156112a55780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000818361130a5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315611278578181015183820152602001611260565b50600083858161131657fe5b0495945050505050565b6060611375826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166113d19092919063ffffffff16565b8051909150156111bf5780806020019051602081101561139457600080fd5b50516111bf5760405162461bcd60e51b815260040180806020018281038252602a8152602001806116a2602a913960400191505060405180910390fd5b60606113e084846000856113e8565b949350505050565b60606113f385611555565b611444576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106114835780518252601f199092019160209182019101611464565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146114e5576040519150601f19603f3d011682016040523d82523d6000602084013e6114ea565b606091505b509150915081156114fe5791506113e09050565b80511561150e5780518082602001fd5b60405162461bcd60e51b8152602060048201818152865160248401528651879391928392604401919085019080838360008315611278578181015183820152602001611260565b3b15159056fe50726576696f7573207265776172647320706572696f64206d75737420626520636f6d706c657465206265666f7265206368616e67696e6720746865206475726174696f6e20666f7220746865206e657720706572696f64596f75206d757374206265206e6f6d696e61746564206265666f726520796f752063616e20616363657074206f776e6572736869704f6e6c792074686520636f6e7472616374206f776e6572206d617920706572666f726d207468697320616374696f6e536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775468697320616374696f6e2063616e6e6f7420626520706572666f726d6564207768696c652074686520636f6e74726163742069732070617573656443616e6e6f7420776974686472617720746865207374616b696e67206f72207265776172647320746f6b656e735361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a2646970667358221220ec87698faf9e4ddfdf343aa709e29dd72fa929277f4d75d206abcaf483ab26c864736f6c634300060c0033";

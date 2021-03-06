"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ERC1155SingleCollectionFactory__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "contract CollectionProxy",
                name: "proxy",
                type: "address"
            },
            {
                indexed: false,
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                indexed: false,
                internalType: "string",
                name: "name",
                type: "string"
            },
            {
                indexed: false,
                internalType: "string",
                name: "symbol",
                type: "string"
            },
            {
                indexed: false,
                internalType: "string",
                name: "uri",
                type: "string"
            },
            {
                indexed: false,
                internalType: "address",
                name: "creator",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "supply",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "address",
                name: "imp",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "salt",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "contract MintBoxPool",
                name: "pool",
                type: "address"
            },
            {
                components: [
                    {
                        internalType: "contract IERC20",
                        name: "payToken",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "price",
                        type: "uint256"
                    },
                    {
                        internalType: "uint64",
                        name: "open",
                        type: "uint64"
                    },
                    {
                        internalType: "uint64",
                        name: "close",
                        type: "uint64"
                    },
                    {
                        internalType: "string",
                        name: "uri",
                        type: "string"
                    },
                ],
                indexed: false,
                internalType: "struct CollectionWrapper.Param",
                name: "param",
                type: "tuple"
            },
        ],
        name: "Deployed",
        type: "event"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                internalType: "string",
                name: "name",
                type: "string"
            },
            {
                internalType: "string",
                name: "symbol",
                type: "string"
            },
            {
                internalType: "string",
                name: "uri",
                type: "string"
            },
            {
                internalType: "address",
                name: "creator",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "supply",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "imp",
                type: "address"
            },
            {
                internalType: "bytes32",
                name: "salt",
                type: "bytes32"
            },
            {
                internalType: "contract MintBoxPool",
                name: "pool",
                type: "address"
            },
            {
                components: [
                    {
                        internalType: "contract IERC20",
                        name: "payToken",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "price",
                        type: "uint256"
                    },
                    {
                        internalType: "uint64",
                        name: "open",
                        type: "uint64"
                    },
                    {
                        internalType: "uint64",
                        name: "close",
                        type: "uint64"
                    },
                    {
                        internalType: "string",
                        name: "uri",
                        type: "string"
                    },
                ],
                internalType: "struct CollectionWrapper.Param",
                name: "param",
                type: "tuple"
            },
        ],
        name: "deploy",
        outputs: [
            {
                internalType: "contract CollectionProxy",
                name: "proxy",
                type: "address"
            },
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                internalType: "string",
                name: "name",
                type: "string"
            },
            {
                internalType: "string",
                name: "symbol",
                type: "string"
            },
            {
                internalType: "string",
                name: "uri",
                type: "string"
            },
            {
                internalType: "address",
                name: "creator",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "supply",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "imp",
                type: "address"
            },
            {
                internalType: "bytes32",
                name: "salt",
                type: "bytes32"
            },
            {
                internalType: "contract MintBoxPool",
                name: "pool",
                type: "address"
            },
            {
                components: [
                    {
                        internalType: "contract IERC20",
                        name: "payToken",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "price",
                        type: "uint256"
                    },
                    {
                        internalType: "uint64",
                        name: "open",
                        type: "uint64"
                    },
                    {
                        internalType: "uint64",
                        name: "close",
                        type: "uint64"
                    },
                    {
                        internalType: "string",
                        name: "uri",
                        type: "string"
                    },
                ],
                internalType: "struct CollectionWrapper.Param",
                name: "param",
                type: "tuple"
            },
        ],
        name: "getAddress",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                internalType: "string",
                name: "name",
                type: "string"
            },
            {
                internalType: "string",
                name: "symbol",
                type: "string"
            },
            {
                internalType: "string",
                name: "uri",
                type: "string"
            },
            {
                internalType: "address",
                name: "creator",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "supply",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "imp",
                type: "address"
            },
            {
                internalType: "contract MintBoxPool",
                name: "pool",
                type: "address"
            },
            {
                components: [
                    {
                        internalType: "contract IERC20",
                        name: "payToken",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "price",
                        type: "uint256"
                    },
                    {
                        internalType: "uint64",
                        name: "open",
                        type: "uint64"
                    },
                    {
                        internalType: "uint64",
                        name: "close",
                        type: "uint64"
                    },
                    {
                        internalType: "string",
                        name: "uri",
                        type: "string"
                    },
                ],
                internalType: "struct CollectionWrapper.Param",
                name: "param",
                type: "tuple"
            },
        ],
        name: "getByteCode",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes"
            },
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                internalType: "string",
                name: "name",
                type: "string"
            },
            {
                internalType: "string",
                name: "symbol",
                type: "string"
            },
            {
                internalType: "string",
                name: "uri",
                type: "string"
            },
            {
                internalType: "address",
                name: "creator",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "supply",
                type: "uint256"
            },
            {
                internalType: "contract MintBoxPool",
                name: "pool",
                type: "address"
            },
            {
                components: [
                    {
                        internalType: "contract IERC20",
                        name: "payToken",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "price",
                        type: "uint256"
                    },
                    {
                        internalType: "uint64",
                        name: "open",
                        type: "uint64"
                    },
                    {
                        internalType: "uint64",
                        name: "close",
                        type: "uint64"
                    },
                    {
                        internalType: "string",
                        name: "uri",
                        type: "string"
                    },
                ],
                internalType: "struct CollectionWrapper.Param",
                name: "param",
                type: "tuple"
            },
        ],
        name: "getData",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes"
            },
        ],
        stateMutability: "pure",
        type: "function"
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b5061120d806100206000396000f3fe60806040523480156200001157600080fd5b5060043610620000525760003560e01c80635ec091911462000057578063abb198bc146200008b578063e52c1e7f14620000b1578063fdeccc4814620000c8575b600080fd5b6200006e6200006836600462000468565b620000df565b6040516001600160a01b0390911681526020015b60405180910390f35b620000a26200009c3660046200057d565b6200019c565b60405162000082919062000996565b620000a2620000c236600462000687565b62000233565b6200006e620000d936600462000468565b6200029e565b600080620000f48c8c8c8c8c8c8a8a62000233565b9050848682604051620001079062000329565b620001149291906200083e565b8190604051809103906000f590508015801562000135573d6000803e3d6000fd5b509150816001600160a01b03167f8f524dbe4ad0e50de179571b134bb342259b895bcbe403df0fbea8a610f0b96b8d8d8d8d8d8d8d8d8d8d604051620001859a9998979695949392919062000864565b60405180910390a2509a9950505050505050505050565b6060600060405180602001620001b29062000329565b601f1982820381018352601f9091011660405290506000620001db8c8c8c8c8c8c8b8b62000233565b9050818682604051602001620001f39291906200083e565b60408051601f19818403018152908290526200021392916020016200080b565b604051602081830303815290604052925050509998505050505050505050565b6060635fdaad5e60e01b89898989898989896040516024016200025e98979695949392919062000906565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152905098975050505050505050565b6000803085620002b68e8e8e8e8e8e8e8d8d6200019c565b805160209182012060405162000301949392016001600160f81b0319815260609390931b6bffffffffffffffffffffffff191660018401526015830191909152603582015260550190565b60408051808303601f1901815291905280516020909101209c9b505050505050505050505050565b61078f8062000a4983390190565b8035620003448162000a2f565b919050565b600082601f8301126200035a578081fd5b813567ffffffffffffffff81111562000377576200037762000a19565b6200038c601f8201601f1916602001620009b2565b818152846020838601011115620003a1578283fd5b816020850160208301379081016020019190915292915050565b600060a08284031215620003cd578081fd5b620003d960a0620009b2565b90508135620003e88162000a2f565b81526020828101359082015262000402604083016200044f565b604082015262000415606083016200044f565b6060820152608082013567ffffffffffffffff8111156200043557600080fd5b620004438482850162000349565b60808301525092915050565b803567ffffffffffffffff811681146200034457600080fd5b6000806000806000806000806000806101408b8d03121562000488578586fd5b620004938b62000337565b995060208b013567ffffffffffffffff80821115620004b0578788fd5b620004be8e838f0162000349565b9a5060408d0135915080821115620004d4578788fd5b620004e28e838f0162000349565b995060608d0135915080821115620004f8578788fd5b620005068e838f0162000349565b98506200051660808e0162000337565b975060a08d013596506200052d60c08e0162000337565b955060e08d01359450620005456101008e0162000337565b93506101208d01359150808211156200055c578283fd5b506200056b8d828e01620003bb565b9150509295989b9194979a5092959850565b60008060008060008060008060006101208a8c0312156200059c578485fd5b620005a78a62000337565b985060208a013567ffffffffffffffff80821115620005c4578687fd5b620005d28d838e0162000349565b995060408c0135915080821115620005e8578687fd5b620005f68d838e0162000349565b985060608c01359150808211156200060c578687fd5b6200061a8d838e0162000349565b97506200062a60808d0162000337565b965060a08c013595506200064160c08d0162000337565b94506200065160e08d0162000337565b93506101008c013591508082111562000668578283fd5b50620006778c828d01620003bb565b9150509295985092959850929598565b600080600080600080600080610100898b031215620006a4578384fd5b620006af8962000337565b9750602089013567ffffffffffffffff80821115620006cc578586fd5b620006da8c838d0162000349565b985060408b0135915080821115620006f0578586fd5b620006fe8c838d0162000349565b975060608b013591508082111562000714578586fd5b620007228c838d0162000349565b96506200073260808c0162000337565b955060a08b013594506200074960c08c0162000337565b935060e08b01359150808211156200075f578283fd5b506200076e8b828c01620003bb565b9150509295985092959890939650565b6000815180845262000798816020860160208601620009e6565b601f01601f19169290920160200192915050565b600060018060a01b03825116835260208201516020840152604082015167ffffffffffffffff80821660408601528060608501511660608601525050608082015160a060808501526200080360a08501826200077e565b949350505050565b600083516200081f818460208801620009e6565b83519083019062000835818360208801620009e6565b01949350505050565b6001600160a01b038316815260406020820181905260009062000803908301846200077e565b6001600160a01b038b81168252610140602083018190526000916200088c8483018e6200077e565b91508382036040850152620008a2828d6200077e565b91508382036060850152620008b8828c6200077e565b9150808a1660808501528860a085015280881660c08501528660e085015280861661010085015250828103610120840152620008f58185620007ac565b9d9c50505050505050505050505050565b6001600160a01b038981168252610100602083018190526000916200092e8483018c6200077e565b9150838203604085015262000944828b6200077e565b915083820360608501526200095a828a6200077e565b915080881660808501528660a085015280861660c08501525082810360e0840152620009878185620007ac565b9b9a5050505050505050505050565b600060208252620009ab60208301846200077e565b9392505050565b604051601f8201601f1916810167ffffffffffffffff81118282101715620009de57620009de62000a19565b604052919050565b60005b8381101562000a03578181015183820152602001620009e9565b8381111562000a13576000848401525b50505050565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811462000a4557600080fd5b5056fe608060405234801561001057600080fd5b5060405161078f38038061078f83398101604081905261002f91610314565b818161005c60017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd61042c565b6000805160206107488339815191521461008657634e487b7160e01b600052600160045260246000fd5b6100928282600061009b565b50505050610491565b6100a4836100d1565b6000825111806100b15750805b156100cc576100ca838361011160201b6100291760201c565b505b505050565b6100da8161013d565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606101368383604051806060016040528060278152602001610768602791396101fd565b9392505050565b610150816102d260201b6100551760201c565b6101b75760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b806101dc60008051602061074883398151915260001b6102d860201b61005b1760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b6060833b61025c5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016101ae565b600080856001600160a01b03168560405161027791906103dd565b600060405180830381855af49150503d80600081146102b2576040519150601f19603f3d011682016040523d82523d6000602084013e6102b7565b606091505b5090925090506102c88282866102db565b9695505050505050565b3b151590565b90565b606083156102ea575081610136565b8251156102fa5782518084602001fd5b8160405162461bcd60e51b81526004016101ae91906103f9565b60008060408385031215610326578182fd5b82516001600160a01b038116811461033c578283fd5b60208401519092506001600160401b0380821115610358578283fd5b818501915085601f83011261036b578283fd5b81518181111561037d5761037d61047b565b604051601f8201601f19908116603f011681019083821181831017156103a5576103a561047b565b816040528281528860208487010111156103bd578586fd5b6103ce83602083016020880161044f565b80955050505050509250929050565b600082516103ef81846020870161044f565b9190910192915050565b600060208252825180602084015261041881604085016020870161044f565b601f01601f19169190910160400192915050565b60008282101561044a57634e487b7160e01b81526011600452602481fd5b500390565b60005b8381101561046a578181015183820152602001610452565b838111156100ca5750506000910152565b634e487b7160e01b600052604160045260246000fd5b6102a8806104a06000396000f3fe60806040523661001357610011610017565b005b6100115b61002761002261005e565b610096565b565b606061004e838360405180606001604052806027815260200161024c602791396100ba565b9392505050565b3b151590565b90565b60006100917f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b3660008037600080366000845af43d6000803e8080156100b5573d6000f35b3d6000fd5b6060833b61011e5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084015b60405180910390fd5b600080856001600160a01b03168560405161013991906101cc565b600060405180830381855af49150503d8060008114610174576040519150601f19603f3d011682016040523d82523d6000602084013e610179565b606091505b5091509150610189828286610193565b9695505050505050565b606083156101a257508161004e565b8251156101b25782518084602001fd5b8160405162461bcd60e51b815260040161011591906101e8565b600082516101de81846020870161021b565b9190910192915050565b600060208252825180602084015261020781604085016020870161021b565b601f01601f19169190910160400192915050565b60005b8381101561023657818101518382015260200161021e565b83811115610245576000848401525b5050505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220480611d9a7ee3d0b03ebbc72b91fe4c45c391a682dd04901e61b5beac956d31e64736f6c63430008020033360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212202c187b2574b3861372bb6769e2d207dde9b27d6fb0eba2a8bdb9608b2f9366d364736f6c63430008020033";
var ERC1155SingleCollectionFactory__factory = /** @class */ (function (_super) {
    __extends(ERC1155SingleCollectionFactory__factory, _super);
    function ERC1155SingleCollectionFactory__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (args.length === 1) {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        else {
            _this = _super.apply(this, args) || this;
        }
        return _this;
    }
    ERC1155SingleCollectionFactory__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    ERC1155SingleCollectionFactory__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    ERC1155SingleCollectionFactory__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    ERC1155SingleCollectionFactory__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    ERC1155SingleCollectionFactory__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ERC1155SingleCollectionFactory__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ERC1155SingleCollectionFactory__factory.bytecode = _bytecode;
    ERC1155SingleCollectionFactory__factory.abi = _abi;
    return ERC1155SingleCollectionFactory__factory;
}(ethers_1.ContractFactory));
exports.ERC1155SingleCollectionFactory__factory = ERC1155SingleCollectionFactory__factory;

"use strict";
exports.__esModule = true;
var ethers_1 = require("ethers");
var ERC20__factory_1 = require("./ERC20__factory");
var types_1 = require("./types");
var Contracts = /** @class */ (function () {
    function Contracts() {
        this.DelegatePayMap = new Map();
        this.MintBoxPoolMap = new Map();
        this.ERC721SingleCollectionUpgradeableImpMap = new Map();
        this.ERC721MultiCollectionUpgradeableImpMap = new Map();
        this.ERC1155SingleCollectionUpgradeableImpMap = new Map();
        this.ERC721SingleCollectionFactoryAddressMap = new Map();
        this.ERC721MultipleCollectionFactoryAddressMap = new Map();
        this.ERC1155SingleCollectionFactoryAddressMap = new Map();
        // DAI
        this.dai = "0x2d2C8ab3A4006823260F862FF042b8cFDBcCE0C7";
        var testchains = [4, 97, 80001];
        for (var _i = 0, testchains_1 = testchains; _i < testchains_1.length; _i++) {
            var chain = testchains_1[_i];
            this.DelegatePayMap.set(chain, "0x4C7de9e14eeF1aCDfaE61978b4E6Abe14396fe27");
            this.MintBoxPoolMap.set(chain, "0xc41E90AcA4dA792Dc25af7Ff0A46433D4Ef93F66");
            this.ERC721SingleCollectionUpgradeableImpMap.set(chain, "0xA474F16c47164593E14156Cc3bE651B7417daAc2");
            this.ERC721MultiCollectionUpgradeableImpMap.set(chain, "0xdDBe0dDfcedB794a9C90F65256eb871Fb8f9B733");
            this.ERC1155SingleCollectionUpgradeableImpMap.set(chain, "0xd1f0C3C9D3648392348C38983B4b75b10aC8C0aF");
            this.ERC721SingleCollectionFactoryAddressMap.set(chain, "0x00AcAd4233B81AaAd48ca3d738d5F1E9A37ac659");
            this.ERC721MultipleCollectionFactoryAddressMap.set(chain, "0x6e942DD36Ca312Faf82Cf39D82bf6F079e4d15D4");
            this.ERC1155SingleCollectionFactoryAddressMap.set(chain, "0x758B0bDb994cEd9b5caB4256b8Dedf0B0A715E4f");
        }
        var mainChains = [1, 56, 137];
        for (var _a = 0, mainChains_1 = mainChains; _a < mainChains_1.length; _a++) {
            var c = mainChains_1[_a];
            this.DelegatePayMap.set(c, "0x4C7de9e14eeF1aCDfaE61978b4E6Abe14396fe27");
            this.MintBoxPoolMap.set(c, "0x2bB6a92E46f1e626BeCb361D3efF3E6f10107718");
            this.ERC721SingleCollectionUpgradeableImpMap.set(c, "0x98416DE52409855C1071A419e4C826e454b52a8B");
            this.ERC721MultiCollectionUpgradeableImpMap.set(c, "0x5632723Aa7B235cEbdcE96fC9229cbd83bbC6bf9");
            this.ERC1155SingleCollectionUpgradeableImpMap.set(c, "0xBD7F9Ee5B47C302FF371e9F8b44e411a589f1d51");
            this.ERC721SingleCollectionFactoryAddressMap.set(c, "0xeeF35D19f60bb79807f27DD06d6A3fa2925FBeE2");
            this.ERC721MultipleCollectionFactoryAddressMap.set(c, "0xe0Fb944135B4c08B34516eC71b0752A6986f2924");
            this.ERC1155SingleCollectionFactoryAddressMap.set(c, "0x00F73B9CD30157859b1b947bd2Bc2987265781D9");
        }
    }
    Contracts.prototype.setChainID = function (chainId) {
        this.chainId = chainId;
    };
    Object.defineProperty(Contracts.prototype, "ERC721SingleCollectionUpgradeableImp", {
        get: function () {
            return this.ERC721SingleCollectionUpgradeableImpMap.get(this.chainId);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contracts.prototype, "ERC721MultiCollectionUpgradeableImp", {
        get: function () {
            return this.ERC721MultiCollectionUpgradeableImpMap.get(this.chainId);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contracts.prototype, "ERC1155SingleCollectionUpgradeableImp", {
        get: function () {
            return this.ERC1155SingleCollectionUpgradeableImpMap.get(this.chainId);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contracts.prototype, "ERC721SingleCollectionFactoryAddress", {
        get: function () {
            return this.ERC721SingleCollectionFactoryAddressMap.get(this.chainId);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contracts.prototype, "ERC721MultipleCollectionFactoryAddress", {
        get: function () {
            return this.ERC721MultipleCollectionFactoryAddressMap.get(this.chainId);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contracts.prototype, "ERC1155SingleCollectionFactoryAddress", {
        get: function () {
            return this.ERC1155SingleCollectionFactoryAddressMap.get(this.chainId);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contracts.prototype, "provider", {
        get: function () {
            if (!window.ethereum) {
                throw "no ethereum plugin";
            }
            return new ethers_1.providers.Web3Provider(window.ethereum);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contracts.prototype, "signer", {
        get: function () {
            return this.provider.getSigner();
        },
        enumerable: false,
        configurable: true
    });
    Contracts.prototype.ERC20 = function (addr) {
        return ERC20__factory_1.ERC20__factory.connect(addr, this.provider);
    };
    Contracts.prototype.ERC721SingleCollectionUpgradeable = function (addr) {
        return types_1.ERC721SingleCollectionUpgradeable__factory.connect(addr, this.provider);
    };
    Contracts.prototype.ERC721MultiCollectionUpgradeable = function (addr) {
        return types_1.ERC721MultiCollectionUpgradeable__factory.connect(addr, this.provider);
    };
    Contracts.prototype.ERC1155SingleCollectionUpgradeable = function (addr) {
        return types_1.ERC1155SingleCollectionUpgradeable__factory.connect(addr, this.provider);
    };
    Object.defineProperty(Contracts.prototype, "ERC721SingleCollectionFactory", {
        get: function () {
            return types_1.ERC721SingleCollectionFactory__factory.connect(this.ERC721SingleCollectionFactoryAddress, this.provider);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contracts.prototype, "ERC721MultipleCollectionFactory", {
        get: function () {
            return types_1.ERC721MultipleCollectionFactory__factory.connect(this.ERC721MultipleCollectionFactoryAddress, this.provider);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contracts.prototype, "ERC1155SingleCollectionFactory", {
        get: function () {
            return types_1.ERC1155SingleCollectionFactory__factory.connect(this.ERC1155SingleCollectionFactoryAddress, this.provider);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contracts.prototype, "mintBoxPool", {
        get: function () {
            return this.MintBoxPoolMap.get(this.chainId);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contracts.prototype, "delegatePay", {
        get: function () {
            return this.DelegatePayMap.get(this.chainId);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contracts.prototype, "MintBoxPool", {
        get: function () {
            return types_1.MintBoxPool__factory.connect(this.mintBoxPool, this.provider);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contracts.prototype, "DelegatePay", {
        get: function () {
            return types_1.DelegatePay__factory.connect(this.delegatePay, this.provider);
        },
        enumerable: false,
        configurable: true
    });
    return Contracts;
}());
var contracts = new Contracts();
exports["default"] = contracts;

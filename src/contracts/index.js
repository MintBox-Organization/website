"use strict";
exports.__esModule = true;
var ethers_1 = require("ethers");
var ERC20__factory_1 = require("./ERC20__factory");
var types_1 = require("./types");
var Contracts = /** @class */ (function () {
    function Contracts() {
        this.delegatePay = "0x4C7de9e14eeF1aCDfaE61978b4E6Abe14396fe27";
        this.mintBoxPool = "0x6A3AE0BdC0c1C73dD51059448371570a1A553C8f";
        this.ERC721SingleCollectionUpgradeableImpMap = new Map();
        this.ERC721MultiCollectionUpgradeableImpMap = new Map();
        this.ERC1155SingleCollectionUpgradeableImpMap = new Map();
        this.ERC721SingleCollectionFactoryAddressMap = new Map();
        this.ERC721MultipleCollectionFactoryAddressMap = new Map();
        this.ERC1155SingleCollectionFactoryAddressMap = new Map();
        // DAI
        this.dai = "0x2d2C8ab3A4006823260F862FF042b8cFDBcCE0C7";
        this.ERC721SingleCollectionUpgradeableImpMap.set(4, "0xf9342B89eCDdeB18E9c9F1bdC81Bf21Fb9A5b050");
        this.ERC721MultiCollectionUpgradeableImpMap.set(4, "0xff09034b22087ecDe43Fa1E51d9673743346b5f9");
        this.ERC1155SingleCollectionUpgradeableImpMap.set(4, "0xa8C877b32fcB8b9fa4Eb42e8A1C807AE299e375F");
        this.ERC721SingleCollectionFactoryAddressMap.set(4, "0xb5e5E44FeB12a516D2DBDBAaE014c0AC91064504");
        this.ERC721MultipleCollectionFactoryAddressMap.set(4, "0xC3E536F66c6B34476D0ECeb9321B0838A5CC10C7");
        this.ERC1155SingleCollectionFactoryAddressMap.set(4, "xd267F5bDFA15A1Cb900CCDE140d5690C98121899");
        this.ERC721SingleCollectionUpgradeableImpMap.set(97, "0xf9342B89eCDdeB18E9c9F1bdC81Bf21Fb9A5b050");
        this.ERC721MultiCollectionUpgradeableImpMap.set(97, "0xff09034b22087ecDe43Fa1E51d9673743346b5f9");
        this.ERC1155SingleCollectionUpgradeableImpMap.set(97, "0xa8C877b32fcB8b9fa4Eb42e8A1C807AE299e375F");
        this.ERC721SingleCollectionFactoryAddressMap.set(97, "0xb5e5E44FeB12a516D2DBDBAaE014c0AC91064504");
        this.ERC721MultipleCollectionFactoryAddressMap.set(97, "0xC3E536F66c6B34476D0ECeb9321B0838A5CC10C7");
        this.ERC1155SingleCollectionFactoryAddressMap.set(97, "xd267F5bDFA15A1Cb900CCDE140d5690C98121899");
        this.ERC721SingleCollectionUpgradeableImpMap.set(80001, "0xf9342B89eCDdeB18E9c9F1bdC81Bf21Fb9A5b050");
        this.ERC721MultiCollectionUpgradeableImpMap.set(80001, "0xff09034b22087ecDe43Fa1E51d9673743346b5f9");
        this.ERC1155SingleCollectionUpgradeableImpMap.set(80001, "0xa8C877b32fcB8b9fa4Eb42e8A1C807AE299e375F");
        this.ERC721SingleCollectionFactoryAddressMap.set(80001, "0xb5e5E44FeB12a516D2DBDBAaE014c0AC91064504");
        this.ERC721MultipleCollectionFactoryAddressMap.set(80001, "0xC3E536F66c6B34476D0ECeb9321B0838A5CC10C7");
        this.ERC1155SingleCollectionFactoryAddressMap.set(80001, "0xd267F5bDFA15A1Cb900CCDE140d5690C98121899");
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

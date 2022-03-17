"use strict";
exports.__esModule = true;
var ethers_1 = require("ethers");
var ERC20__factory_1 = require("./ERC20__factory");
var types_1 = require("./types");
var Contracts = /** @class */ (function () {
    function Contracts() {
        this.delegatePay = "0x4C7de9e14eeF1aCDfaE61978b4E6Abe14396fe27";
        this.ERC721SingleCollectionUpgradeableImpMap = new Map();
        this.ERC721MultiCollectionUpgradeableImpMap = new Map();
        this.ERC1155SingleCollectionUpgradeableImpMap = new Map();
        this.ERC721SingleCollectionFactoryAddressMap = new Map();
        this.ERC721MultipleCollectionFactoryAddressMap = new Map();
        this.ERC1155SingleCollectionFactoryAddressMap = new Map();
        // DAI
        this.dai = "0x2d2C8ab3A4006823260F862FF042b8cFDBcCE0C7";
        this.ERC721SingleCollectionUpgradeableImpMap.set(4, "0x4E6a3979B12D7E8FF43Ae7adC2aF217479B1e077");
        this.ERC721MultiCollectionUpgradeableImpMap.set(4, "0x2De36D45D4A69b7ee09865947b69b9D2AA02e8BE");
        this.ERC1155SingleCollectionUpgradeableImpMap.set(4, "0xf68578aa22E5Db08F5DeC3fa7038fBb8Bcb44c19");
        this.ERC721SingleCollectionFactoryAddressMap.set(4, "0x9Df6C87a81EA56CFA0A68cc2153698F3dFE35Ecf");
        this.ERC721MultipleCollectionFactoryAddressMap.set(4, "0xb92781bE4Dbd68EA58AE6b81f32b3C2F8a990002");
        this.ERC1155SingleCollectionFactoryAddressMap.set(4, "0xF1FF9abB0eCD2D93e21f92aAa99e40169eA9F88c");
        this.ERC721SingleCollectionUpgradeableImpMap.set(97, "0x4E6a3979B12D7E8FF43Ae7adC2aF217479B1e077");
        this.ERC721MultiCollectionUpgradeableImpMap.set(97, "0x2De36D45D4A69b7ee09865947b69b9D2AA02e8BE");
        this.ERC1155SingleCollectionUpgradeableImpMap.set(97, "0xf68578aa22E5Db08F5DeC3fa7038fBb8Bcb44c19");
        this.ERC721SingleCollectionFactoryAddressMap.set(97, "0x181c2B459715caB9C55fd0949De3C6153a317BF3");
        this.ERC721MultipleCollectionFactoryAddressMap.set(97, "0xD863ff58f2f45d2CE85F538439a109250436DE1D");
        this.ERC1155SingleCollectionFactoryAddressMap.set(97, "0xAa30E9D3708c9B95736DA3Ecb6997EbA051Ff619");
        this.ERC721SingleCollectionUpgradeableImpMap.set(80001, "0x4E6a3979B12D7E8FF43Ae7adC2aF217479B1e077");
        this.ERC721MultiCollectionUpgradeableImpMap.set(80001, "0x2De36D45D4A69b7ee09865947b69b9D2AA02e8BE");
        this.ERC1155SingleCollectionUpgradeableImpMap.set(80001, "0xf68578aa22E5Db08F5DeC3fa7038fBb8Bcb44c19");
        this.ERC721SingleCollectionFactoryAddressMap.set(80001, "0x181c2B459715caB9C55fd0949De3C6153a317BF3");
        this.ERC721MultipleCollectionFactoryAddressMap.set(80001, "0xD863ff58f2f45d2CE85F538439a109250436DE1D");
        this.ERC1155SingleCollectionFactoryAddressMap.set(80001, "0xAa30E9D3708c9B95736DA3Ecb6997EbA051Ff619");
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

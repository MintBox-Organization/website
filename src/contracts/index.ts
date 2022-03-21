import { providers } from "ethers";
import { ERC20__factory } from "./ERC20__factory";
import {
  ERC721SingleCollectionUpgradeable__factory,
  ERC721MultiCollectionUpgradeable__factory,
  ERC1155SingleCollectionUpgradeable__factory,
  ERC721SingleCollectionFactory__factory,
  ERC721MultipleCollectionFactory__factory,
  ERC1155SingleCollectionFactory__factory,
  DelegatePay__factory,
  MintBoxPool__factory,
} from "./types";

class Contracts {
  public readonly DelegatePayMap = new Map();
  public readonly MintBoxPoolMap = new Map();
  public readonly ERC721SingleCollectionUpgradeableImpMap = new Map();
  public readonly ERC721MultiCollectionUpgradeableImpMap = new Map();
  public readonly ERC1155SingleCollectionUpgradeableImpMap = new Map();

  public readonly ERC721SingleCollectionFactoryAddressMap = new Map();
  public readonly ERC721MultipleCollectionFactoryAddressMap = new Map();
  public readonly ERC1155SingleCollectionFactoryAddressMap = new Map();

  // DAI
  public readonly dai = "0x2d2C8ab3A4006823260F862FF042b8cFDBcCE0C7";

  private chainId!: number;

  constructor() {
    const testchains = [4, 97, 80001];
    for (const chain of testchains) {
      this.DelegatePayMap.set(
        chain,
        "0x4C7de9e14eeF1aCDfaE61978b4E6Abe14396fe27"
      );
      this.MintBoxPoolMap.set(
        chain,
        "0xc41E90AcA4dA792Dc25af7Ff0A46433D4Ef93F66"
      );
      this.ERC721SingleCollectionUpgradeableImpMap.set(
        chain,
        "0xA474F16c47164593E14156Cc3bE651B7417daAc2"
      );
      this.ERC721MultiCollectionUpgradeableImpMap.set(
        chain,
        "0xdDBe0dDfcedB794a9C90F65256eb871Fb8f9B733"
      );
      this.ERC1155SingleCollectionUpgradeableImpMap.set(
        chain,
        "0xd1f0C3C9D3648392348C38983B4b75b10aC8C0aF"
      );
      this.ERC721SingleCollectionFactoryAddressMap.set(
        chain,
        "0x00AcAd4233B81AaAd48ca3d738d5F1E9A37ac659"
      );
      this.ERC721MultipleCollectionFactoryAddressMap.set(
        chain,
        "0x6e942DD36Ca312Faf82Cf39D82bf6F079e4d15D4"
      );
      this.ERC1155SingleCollectionFactoryAddressMap.set(
        chain,
        "0x758B0bDb994cEd9b5caB4256b8Dedf0B0A715E4f"
      );
    }

    const mainChains = [1, 56, 137];
    for (const chain of mainChains) {
      this.DelegatePayMap.set(
        chain,
        "0x4C7de9e14eeF1aCDfaE61978b4E6Abe14396fe27"
      );
      this.MintBoxPoolMap.set(
        chain,
        "0x2bB6a92E46f1e626BeCb361D3efF3E6f10107718"
      );
      this.ERC721SingleCollectionUpgradeableImpMap.set(
        chain,
        "0x98416DE52409855C1071A419e4C826e454b52a8B"
      );
      this.ERC721MultiCollectionUpgradeableImpMap.set(
        chain,
        "0x5632723Aa7B235cEbdcE96fC9229cbd83bbC6bf9"
      );
      this.ERC1155SingleCollectionUpgradeableImpMap.set(
        chain,
        "0xBD7F9Ee5B47C302FF371e9F8b44e411a589f1d51"
      );
      this.ERC721SingleCollectionFactoryAddressMap.set(
        chain,
        "0xeeF35D19f60bb79807f27DD06d6A3fa2925FBeE2"
      );
      this.ERC721MultipleCollectionFactoryAddressMap.set(
        chain,
        "0xe0Fb944135B4c08B34516eC71b0752A6986f2924"
      );
      this.ERC1155SingleCollectionFactoryAddressMap.set(
        chain,
        "0x758B0bDb994cEd9b5caB4256b8Dedf0B0A715E4f"
      );
    }
  }

  public setChainID(chainId: number) {
    this.chainId = chainId;
  }

  public get ERC721SingleCollectionUpgradeableImp() {
    return this.ERC721SingleCollectionUpgradeableImpMap.get(this.chainId);
  }

  public get ERC721MultiCollectionUpgradeableImp() {
    return this.ERC721MultiCollectionUpgradeableImpMap.get(this.chainId);
  }

  public get ERC1155SingleCollectionUpgradeableImp() {
    return this.ERC1155SingleCollectionUpgradeableImpMap.get(this.chainId);
  }

  public get ERC721SingleCollectionFactoryAddress() {
    return this.ERC721SingleCollectionFactoryAddressMap.get(this.chainId);
  }

  public get ERC721MultipleCollectionFactoryAddress() {
    return this.ERC721MultipleCollectionFactoryAddressMap.get(this.chainId);
  }

  public get ERC1155SingleCollectionFactoryAddress() {
    return this.ERC1155SingleCollectionFactoryAddressMap.get(this.chainId);
  }

  public get provider(): providers.Web3Provider {
    if (!window.ethereum) {
      throw "no ethereum plugin";
    }
    return new providers.Web3Provider(window.ethereum as any);
  }

  public get signer() {
    return this.provider.getSigner();
  }

  public ERC20(addr: string) {
    return ERC20__factory.connect(addr, this.provider);
  }

  public ERC721SingleCollectionUpgradeable(addr: string) {
    return ERC721SingleCollectionUpgradeable__factory.connect(
      addr,
      this.provider
    );
  }

  public ERC721MultiCollectionUpgradeable(addr: string) {
    return ERC721MultiCollectionUpgradeable__factory.connect(
      addr,
      this.provider
    );
  }

  public ERC1155SingleCollectionUpgradeable(addr: string) {
    return ERC1155SingleCollectionUpgradeable__factory.connect(
      addr,
      this.provider
    );
  }

  public get ERC721SingleCollectionFactory() {
    return ERC721SingleCollectionFactory__factory.connect(
      this.ERC721SingleCollectionFactoryAddress,
      this.provider
    );
  }

  public get ERC721MultipleCollectionFactory() {
    return ERC721MultipleCollectionFactory__factory.connect(
      this.ERC721MultipleCollectionFactoryAddress,
      this.provider
    );
  }

  public get ERC1155SingleCollectionFactory() {
    return ERC1155SingleCollectionFactory__factory.connect(
      this.ERC1155SingleCollectionFactoryAddress,
      this.provider
    );
  }

  public get mintBoxPool() {
    return this.MintBoxPoolMap.get(this.chainId);
  }

  public get delegatePay() {
    return this.DelegatePayMap.get(this.chainId);
  }

  public get MintBoxPool() {
    return MintBoxPool__factory.connect(this.mintBoxPool, this.provider);
  }
  public get DelegatePay() {
    return DelegatePay__factory.connect(this.delegatePay, this.provider);
  }
}

const contracts = new Contracts();
export default contracts;

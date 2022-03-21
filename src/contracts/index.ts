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
  public readonly delegatePay = "0x4C7de9e14eeF1aCDfaE61978b4E6Abe14396fe27";
  public readonly mintBoxPool = "0xc41E90AcA4dA792Dc25af7Ff0A46433D4Ef93F66";
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
    this.ERC721SingleCollectionUpgradeableImpMap.set(
      4,
      "0xA474F16c47164593E14156Cc3bE651B7417daAc2"
    );
    this.ERC721MultiCollectionUpgradeableImpMap.set(
      4,
      "0xdDBe0dDfcedB794a9C90F65256eb871Fb8f9B733"
    );
    this.ERC1155SingleCollectionUpgradeableImpMap.set(
      4,
      "0xd1f0C3C9D3648392348C38983B4b75b10aC8C0aF"
    );
    this.ERC721SingleCollectionFactoryAddressMap.set(
      4,
      "0x00AcAd4233B81AaAd48ca3d738d5F1E9A37ac659"
    );
    this.ERC721MultipleCollectionFactoryAddressMap.set(
      4,
      "0x6e942DD36Ca312Faf82Cf39D82bf6F079e4d15D4"
    );
    this.ERC1155SingleCollectionFactoryAddressMap.set(
      4,
      "0x758B0bDb994cEd9b5caB4256b8Dedf0B0A715E4f"
    );
    this.ERC721SingleCollectionUpgradeableImpMap.set(
      97,
      "0xf9342B89eCDdeB18E9c9F1bdC81Bf21Fb9A5b050"
    );
    this.ERC721MultiCollectionUpgradeableImpMap.set(
      97,
      "0xff09034b22087ecDe43Fa1E51d9673743346b5f9"
    );
    this.ERC1155SingleCollectionUpgradeableImpMap.set(
      97,
      "0xa8C877b32fcB8b9fa4Eb42e8A1C807AE299e375F"
    );
    this.ERC721SingleCollectionFactoryAddressMap.set(
      97,
      "0xb5e5E44FeB12a516D2DBDBAaE014c0AC91064504"
    );
    this.ERC721MultipleCollectionFactoryAddressMap.set(
      97,
      "0xC3E536F66c6B34476D0ECeb9321B0838A5CC10C7"
    );
    this.ERC1155SingleCollectionFactoryAddressMap.set(
      97,
      "xd267F5bDFA15A1Cb900CCDE140d5690C98121899"
    );
    this.ERC721SingleCollectionUpgradeableImpMap.set(
      80001,
      "0xf9342B89eCDdeB18E9c9F1bdC81Bf21Fb9A5b050"
    );
    this.ERC721MultiCollectionUpgradeableImpMap.set(
      80001,
      "0xff09034b22087ecDe43Fa1E51d9673743346b5f9"
    );
    this.ERC1155SingleCollectionUpgradeableImpMap.set(
      80001,
      "0xa8C877b32fcB8b9fa4Eb42e8A1C807AE299e375F"
    );
    this.ERC721SingleCollectionFactoryAddressMap.set(
      80001,
      "0xb5e5E44FeB12a516D2DBDBAaE014c0AC91064504"
    );
    this.ERC721MultipleCollectionFactoryAddressMap.set(
      80001,
      "0xC3E536F66c6B34476D0ECeb9321B0838A5CC10C7"
    );
    this.ERC1155SingleCollectionFactoryAddressMap.set(
      80001,
      "0xd267F5bDFA15A1Cb900CCDE140d5690C98121899"
    );
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

  public get MintBoxPool() {
    return MintBoxPool__factory.connect(this.mintBoxPool, this.provider);
  }
  public get DelegatePay() {
    return DelegatePay__factory.connect(this.delegatePay, this.provider);
  }
}

const contracts = new Contracts();
export default contracts;

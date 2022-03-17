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
} from "./types";

class Contracts {
  public readonly delegatePay = "0x4C7de9e14eeF1aCDfaE61978b4E6Abe14396fe27";

  public readonly ERC721SingleCollectionUpgradeableImpMap = new Map();
  public readonly ERC721MultiCollectionUpgradeableImpMap = new Map();
  public readonly ERC1155SingleCollectionUpgradeableImpMap = new Map();

  public readonly ERC721SingleCollectionFactoryAddressMap = new Map();
  public readonly ERC721MultipleCollectionFactoryAddressMap = new Map();
  public readonly ERC1155SingleCollectionFactoryAddressMap = new Map();

  // DAI
  public readonly dai = "0x2d2C8ab3A4006823260F862FF042b8cFDBcCE0C7";

  //   public readonly ERC721SingleCollectionUpgradeableImp =
  //     "0x0983E291FA08533a64Dd1DA684855A47A6F8c798";
  //   public readonly ERC721MultiCollectionUpgradeableImp =
  //     "0x56D79876ce91b75e6124538e4787D12BC896a076";
  //   public readonly ERC1155SingleCollectionUpgradeableImp =
  //     "0xC8965f3F140BcD234Bdd57d2b2017AA4C49C9195";

  //   public readonly ERC721SingleCollectionFactoryAddress =
  //     "0xD456604cC5D3b7994bFDbE8879371C1a7aEF4072";
  //   public readonly ERC721MultipleCollectionFactoryAddress =
  //     "0xd21BAA82784D83Ac35b1e8315Ec52e228CCD3f88";
  //   public readonly ERC1155SingleCollectionFactoryAddress =
  //     "0x5078446e9F5D4d76184fe68dCE4F57C586802e22";

  private chainId!: number;

  constructor() {
    this.ERC721SingleCollectionUpgradeableImpMap.set(
      4,
      "0x4E6a3979B12D7E8FF43Ae7adC2aF217479B1e077"
    );
    this.ERC721MultiCollectionUpgradeableImpMap.set(
      4,
      "0x2De36D45D4A69b7ee09865947b69b9D2AA02e8BE"
    );
    this.ERC1155SingleCollectionUpgradeableImpMap.set(
      4,
      "0xf68578aa22E5Db08F5DeC3fa7038fBb8Bcb44c19"
    );
    this.ERC721SingleCollectionFactoryAddressMap.set(
      4,
      "0x9Df6C87a81EA56CFA0A68cc2153698F3dFE35Ecf"
    );
    this.ERC721MultipleCollectionFactoryAddressMap.set(
      4,
      "0xb92781bE4Dbd68EA58AE6b81f32b3C2F8a990002"
    );
    this.ERC1155SingleCollectionFactoryAddressMap.set(
      4,
      "0xF1FF9abB0eCD2D93e21f92aAa99e40169eA9F88c"
    );
    this.ERC721SingleCollectionUpgradeableImpMap.set(
      97,
      "0x4E6a3979B12D7E8FF43Ae7adC2aF217479B1e077"
    );
    this.ERC721MultiCollectionUpgradeableImpMap.set(
      97,
      "0x2De36D45D4A69b7ee09865947b69b9D2AA02e8BE"
    );
    this.ERC1155SingleCollectionUpgradeableImpMap.set(
      97,
      "0xf68578aa22E5Db08F5DeC3fa7038fBb8Bcb44c19"
    );
    this.ERC721SingleCollectionFactoryAddressMap.set(
      97,
      "0x181c2B459715caB9C55fd0949De3C6153a317BF3"
    );
    this.ERC721MultipleCollectionFactoryAddressMap.set(
      97,
      "0xD863ff58f2f45d2CE85F538439a109250436DE1D"
    );
    this.ERC1155SingleCollectionFactoryAddressMap.set(
      97,
      "0xAa30E9D3708c9B95736DA3Ecb6997EbA051Ff619"
    );
    this.ERC721SingleCollectionUpgradeableImpMap.set(
      80001,
      "0x4E6a3979B12D7E8FF43Ae7adC2aF217479B1e077"
    );
    this.ERC721MultiCollectionUpgradeableImpMap.set(
      80001,
      "0x2De36D45D4A69b7ee09865947b69b9D2AA02e8BE"
    );
    this.ERC1155SingleCollectionUpgradeableImpMap.set(
      80001,
      "0xf68578aa22E5Db08F5DeC3fa7038fBb8Bcb44c19"
    );
    this.ERC721SingleCollectionFactoryAddressMap.set(
      80001,
      "0x181c2B459715caB9C55fd0949De3C6153a317BF3"
    );
    this.ERC721MultipleCollectionFactoryAddressMap.set(
      80001,
      "0xD863ff58f2f45d2CE85F538439a109250436DE1D"
    );
    this.ERC1155SingleCollectionFactoryAddressMap.set(
      80001,
      "0xAa30E9D3708c9B95736DA3Ecb6997EbA051Ff619"
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

  public get DelegatePay() {
    return DelegatePay__factory.connect(this.delegatePay, this.provider);
  }
}

const contracts = new Contracts();
export default contracts;

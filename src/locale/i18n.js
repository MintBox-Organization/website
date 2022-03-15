import Vue from "vue";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: "ko",
  messages: {
    en: {
      nav: {
        mint: "MINT",
        explore: "Explore",
        myNfts: "My NFTS",
        connectWallet: "Connect Wallet",
      },
      home: {
        title: `NFTS
          FOR EVERYONE`,
        description:
          "Mint, Explorer, and storage NFTs for a fraction of Ethereum  mainnet  costs. MINTBOX makes mint fast, cheap, and secure.",
        createBtn: "CREATE",
        anywhere: "Create your NFTs anytime anywhere",
        anywhereDescription:
          "Your NFT metadata is automatically uploaded to IPFS behind the scenes.",
        chooseType: "Choose type",
        createNfts: "Create NFTs",
        myNfts: "My NFTs",
        explorer: "Explorer",
        createFree: "Create your NFTs for free",
        useMintBox: "Use MINTBOX description",
        welcome: "Welcome Use MINTBOX",
        doIt: "Create, Storage and more details",
        createBtnAgain: "CREATE",
      },
      create: {
        chooseType: "Choose your type",
        singleNft: "Single NFT(ERC 721)",
        supportSingleNFT: "Support for issuing 1 NFT",
        multipleNfts: "Multiple NFTs(ERC 721)",
        supportMultipleNfts: "Support for issuing multiple types of NFTs",
        SingleNftUp: "Single NFT(ERC 1155)",
        supportMultipleNumberNft:
          "Support for issuing multiple numbers of NFTs",
      },
    },
    ko: {
      nav: {
        mint: "민팅하기",
        explore: "탐색하기",
        myNfts: "내 NFT",
        connectWallet: "지갑 연결하기",
      },
      home: {
        title: "모두를 위한 간편한 NFT 서비스",
        description:
          "저렴한 수수료로 다양한 네트워크에 NFT를 민팅, 저장하세요. MINTBOX는 빠르고 안전하며, 저렴하게 NFT를 민팅할 수 있습니다.",
        createBtn: "나만의 NFT 생성하기",
        anywhere: "언제 어디서나 NFT를 만드세요",
        anywhereDescription:
          "여러분의 NFT 데이터는 IPFS에 자동으로 업로드되어 안전하게 보관됩니다.",
        chooseType: "타입 선택",
        createNfts: "NFT 생성",
        myNfts: "나만의 NFT",
        explorer: "탐색하기",
        createFree: "NFT를 무료로 만들어보세요",
        useMintBox: "MINTBOX설명서를 확인하여 손쉽게 NFT를 민팅해보세요.",
        welcome: "MINTBOX에 오신 것을 환영합니다",
        doIt: "더 쉽게 만들고 저장하고 민팅해보세요",
        createBtnAgain: "지금 바로 생성하기",
      },
      create: {
        chooseType: "타입 선택하기",
        singleNft: "단일 NFT (ERC721)",
        supportSingleNFT: "1개의 단일 NFT 발행에 사용",
        multipleNfts: "복수 NFT (ERC721)",
        supportMultipleNfts: "여러 타입의 NFT 발행에 사용",
        SingleNftUp: "단일 NFT (ERC1155)",
        supportMultipleNumberNft: "여러 개의 NFT 발행에 사용",
      },
    },
  },
});

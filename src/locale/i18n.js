import Vue from "vue";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);
let locale = localStorage.getItem("mint-box-lang");
if (!locale) {
  locale = "ko";
}
export const i18n = new VueI18n({
  locale,
  silentFallbackWarn: true,
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
        freeItems: ["Explore", "MINT", "Storage"],
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
      upload: {
        createSingleNft: "Create single NFT",
        createMultipleNfts: "Create multiple NFTs",
        upload: "Upload",
        fileSupported:
          "File types supported: JPG, JPEG, PNG, GIF, SVG, GLB, GLTF, MP4, WEBM. Max size: 100MB",
        drag: `Drag the file here, or <em>click</em>  upload`,
        uploadMoreTips: `You can enter the (IPFS hash) CID address directly or upload and share via <a href="https://bucket.4everland.org/">4EVERLAND BUCKET</a> if the image is larger than 100MB.`,
        ipfsHash: "IPFS hash",
        nameLabel: "Name",
        nftNameTips: "The name of your NFT.",
        nftNamePlaceholder: "NFT Name",
        descriptionLabel: "Description",
        descriptionTips:
          "The description will display beneath the image on the NFT's detail page.",
        descriptionPlaceholder: "Provide a detailed description of your NFT.",
        priceSale: "Price sale",
        free: "Free",
        fixedPrice: "Fixed Price",
        fixedPriceTips:
          "The description will display beneath the image on the NFT's detail page.",
        mintTime: "Mint Time",
        mintTimeTips: "Set the start and end times for your NFT release.",
        startTimePlaceholder: "Start time",
        endTimePlaceholder: "End time",
        blockchainLable: "Blockchain",
        createCollectionLable: "Create Collection",
        createCollectionName: "Create",
        generateTemplateTips:
          "As the default state is on, please close the button in case you don't want to generate a site template for Mint.",
        logoUploadTips:
          "We recommend an image of at least 300x300. Gifs work too.",
        collectionNamePlaceholder: "Enter Collection name",
        symbolLabel: "Symbol",
        symbolPlaceholder: "Enter token symbol",
        collectionDescription: "Spread some words about your token collection",
        editCollectionBtn: "Create collection",
        numberOfEditions: "Number of editions",
        filePreview: "File Preview",
        submit: "Submit",
        create: "Create",
        setNumNfts: "Set the number of your NFTs.",
        contentPlaceholder: "Please enter the content",
        ruleAmount: "Please enter the amount",
        ruleNftName: "Please enter NFT name",
        ruleMintTime: "Please choose the mint time",
        numberOfEditionsRules: [
          "Please enter a unit selling price",
          "Quantity cannot be 0",
          "Quantity must be a positive integer",
        ],
        checkSpaceRule: "Cannot start with a space",
        loading: "Loading...",
        transactionText:
          "The transaction is in progress, please wait patiently",
        contractText: "The contract is in progress, please wait patiently",
        charactersRule: "Please enter 1 to 50 characters",
        salesTypeRule: "Please choose the price sale type",
        salesPriceRule: "Please enter a unit selling price",
        blockchainRule: "Please choose the blockchain",
        collectionRule: "Please create collection",
        collectionFormRules: {
          name: [
            "Please enter the Smart Contract address",
            "Please enter 1 to 20 characters",
          ],
          symbol: ["Please enter a symbol", "Please enter 1 to 20 characters"],
        },
        correctCidRule: "Please enter the correct CID",
        searchAndPinBtn: "Search and Pin",
        timeoutTips: "Timeout",
        timeduration: "Start and end time cannot be less than 1 day",
        pleaseSelect: "Please select",
        checkSalesPriceRules: [
          "Please enter a number",
          "Please enter the amount within 8 decimal places",
          "Price cannot be 0",
        ],
        checkNetwork: "Please select the {network} network.",
      },
      explore: {
        exploreCollections: "Explore Collections",
        upcoming: "Upcoming",
        price: "Price",
        total: "Total",
        date: "Date",
        going: "Going",
        ended: "Ended",
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds",
      },
      myNfts: {
        noNfts: "No NFTs to display!",
        createNft: `Let create one.`,
        items: "items",
        edit: "Edit",
        copyLink: "Copy link",
        deploy: "Deploy",
        download: "Download",
        delete: "Delete",
      },
      terms: {
        title: "Terms & Condition",
        titleDescription: `This Privacy Policy describes how your personal information is
        collected, used, and shared when you visit or make a purchase from
        <a href="www.mintbox.vip" target="_blank">www.mintbox.vip</a>
        (the “Site”).`,
        personalCollectTitle: "PERSONAL INFORMATION WE COLLECT",
        // personalCollectParagraphOne: '사용자가 사이트 방문 시 당사는 사용자의 웹 브라우저, IP 주소, 시간대 및 장치에 설치된 일부 쿠키에 대한 정보를 포함하여 장치에 대한 특정 정보를 자동으로 수집합니다. 또한 저희는 사용자가 사이트를 이용할 때 사용자가 보는 개별 웹 페이지 또는 제품, 사용자를 사이트로 유도한 웹 사이트 또는 검색어, 그리고 사용자가 어떻게 사이트와 상호 작용하는지에 대한 정보를 수집합니다. 이렇게 자동으로 수집된 정보를 당사는 "장치 정보"라고 부릅니다.',
        // personalCollectParagraphTwo: '당사는 다음 기술들을 사용하여 장치 정보를 수집합니다.',
        // personalCollectParagraphThree: '- "쿠키"는 장치나 컴퓨터에 저장되는 데이터 파일이며 종종 익명의 고유 식별자를 포함합니다. 쿠키 및 쿠키 비활성화 방법에 대한 자세한 내용은 http://www.allaboutcookies.org를 참조하십시오.',
        // personalCollectParagraphFour: '- "로그 파일"은 사이트에서 발생하는 행동을 추적하고 IP 주소, 브라우저 유형, 인터넷 서비스 공급자, 참조/종료 페이지 및 날짜/시간 스탬프를 포함한 데이터를 수집합니다.',
        // personalCollectParagraphFive: '- "웹 비콘", "태그" 및 "픽셀"은 사용자가 사이트를 어떻게 이용하는지 기록하는 데 사용되는 전자 파일입니다.',
        // personalCollectParagraphSix: '또한 사용자가 사이트를 통해 구입하거나 구입을 시도할 때 당사는 사용자의 이름, 청구 주소, 배송 주소, 결제 정보(신용 카드 번호, 전자 메일 주소 및 전화 번호)를 포함한 특정 정보를 수집합니다. 당사는 이 정보를 "주문 정보"라고 부릅니다.',
        // personalCollectParagraphSeven:'본 개인정보 보호정책에서 말하는 "개인정보"는 장치 정보와 주문 정보를 말합니다.',
        personalCollectParagraph: [
          "When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information.”",
          "We collect Device Information using the following technologies:",
          "- “Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.",
          "- “Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.",
          "- “Web beacons,” “tags,” and “pixels” are electronic files used to record information about how you browse the Site.",
          "Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers, email address, and phone number. We refer to this information as “Order Information.”",
          "When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information.",
        ],
        usePersonalInformationTitle: "HOW DO WE USE YOUR PERSONAL INFORMATION?",
        usePersonalInformationParagraph: [
          `We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:Communicate with you; Screen our orders for potential risk or fraud;
          andWhen in line with the preferences you have shared with us, provide
          you with information or advertising relating to our products or
          services.`,
          "We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).",
        ],
        sharePersonalInformationTitle: "SHARING YOUR PERSONAL INFORMATION",
        sharePersonalInformationParagraph: [
          `We share your Personal Information with third parties to help us use
          your Personal Information, as described above. For example, we use
          Shopify to power our online store--you can read more about how Shopify
          uses your Personal Information here:
          <a href=" https://www.shopify.com/legal/privacy" target="_blank">
            https://www.shopify.com/legal/privacy.</a
          >
          We also use Google Analytics to help us understand how our customers
          use the Site--you can read more about how Google uses your Personal
          Information here:
          <a
            href="https://www.google.com/intl/en/policies/privacy/"
            target="_blank"
          >
            https://www.google.com/intl/en/policies/privacy/.</a
          >

          You can also opt-out of Google Analytics here:
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank"
            >https://tools.google.com/dlpage/gaoptout.</a
          >`,
          `Finally, we may also share your Personal Information to comply with
          applicable laws and regulations, to respond to a subpoena, search
          warrant or other lawful request for information we receive, or to
          otherwise protect our rights.`,
        ],
        behaviouralTitle: "BEHAVIOURAL ADVERTISING",
        behaviouralContent: `As described above, we use your Personal Information to provide you
        with targeted advertisements or marketing communications we believe
        may be of interest to you. For more information about how targeted
        advertising works, you can visit the Network Advertising Initiative's
        (“NAI”) educational page at
        <a
          href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work"
          target="_blank"
          >http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.</a
        >

        Additionally, you can opt out of some of these services by visiting
        the Digital Advertising Alliance's opt-out portal at:
        <a href="http://optout.aboutads.info/" target="_blank"
          >http://optout.aboutads.info/.</a
        >`,
        dntTitle: "DO NOT TRACK",
        dntContent:
          "Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser. ",
        rightsTitle: "YOUR RIGHTS",
        rightsContent: `If you are a European resident, you have the right to access personal
        information we hold about you and to ask that your personal
        information be corrected, updated, or deleted. If you would like to
        exercise this right, please contact us through the contact information
        below.Additionally, if you are a European resident we note that we are
        processing your information in order to fulfill contracts we might
        have with you (for example if you make an order through the Site), or
        otherwise to pursue our legitimate business interests listed above.
        Additionally, please note that your information will be transferred
        outside of Europe, including to Canada and the United States.`,
        dataRetentonTitle: "DATA RETENTION",
        dataRetentonContent: `When you place an order through the Site, we will maintain your Order
        Information for our records unless and until you ask us to delete this
        information.`,
        changesTitle: "CHANGES",
        changesContent: `e may update this privacy policy from time to time in order to
        reflect, for example, changes to our practices or for other
        operational, legal or regulatory reasons.`,
        contactTitle: "CONTACT US",
        contactContent: `For more information about our privacy practices, if you have
        questions, or if you would like to make a complaint, please contact us
        by e-mail at
        <a href="mailto:contact@mintbox.vip">contact@mintbox.vip</a>`,
      },
      item: {
        items: "Items",
        owners: "Owners",
        owner: "owner",
        price: "Price",
        free: "Free",
        buy: "Buy",
        paymentFail: "Payment failed due to insufficient wallet balance.",
      },
      nftDetail: {
        detail: "Detail",
        contractAddress: "Contract address",
        tokenID: "Token ID	",
        tokenStandard: "Token Standard	",
        blockchain: "Blockchain	",
        hash: " Hash",
        copySuccess: "Copy success",
      },
      success: {
        title: "Congratulations! You have successfully created NFT!",
        description:
          "A Mint site was created automatically for you based on the 4EVERLAND HOSTING site, which you can deploy it with a single click or save the code locally for custom site deployment, domain name changes, etc. The template site can also be used to allow users to claim NFT directly.",
        contractAddress: "Contract address",
        website: "Website",
        download: "Download",
        deploy: "Deploy",
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
        freeItems: ["탐색하기", "민팅하기", "보관부"],
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
      upload: {
        createSingleNft: "단일 NFT 생성",
        createMultipleNfts: "복수 NFT 생성",
        upload: "업로드",
        fileSupported:
          "지원되는 파일 형식: JPG, JPEG, PNG, GIF, SVG, GLB, GLTF최대 크기: 100MB",
        drag: `파일을 여기로 드래그하거나 이곳을 <em>클릭하세요</em>.`,
        uploadMoreTips:
          '이미지가 100MB보다 큰 경우, IPFS의 해시(hash)인 CID 주소를 직접 입력하거나 <a href="https://bucket.4everland.org/">4EVERLAND BUCKET</a>을 통해 업로드 및 공유할 수 있습니다.',
        ipfsHash: "IPFS 해시",
        nameLabel: "이름",
        nftNameTips: "NFT 이름을 입력하세요",
        nftNamePlaceholder: "NFT 이름",
        descriptionLabel: "설명",
        descriptionTips:
          "다음 설명은 NFT의 세부 정보 페이지에서 이미지 아래에 표시됩니다.",
        descriptionPlaceholder: "NFT에 대한 자세한 설명을 입력하세요.",
        priceSale: "판매 가격",
        free: "무료",
        fixedPrice: "고정 가격",
        fixedPriceTips:
          "다음 설명은 NFT의 세부 정보 페이지에서 이미지 아래에 표시됩니다.",
        mintTime: "민팅 시간",
        mintTimeTips: "민팅 시간을 선택하세요",
        startTimePlaceholder: "시작시간",
        endTimePlaceholder: "종료시간",
        blockchainLable: "블록체인 ",
        createCollectionLable: "컬렉션 생성",
        createCollectionName: "생성",
        generateTemplateTips: "민팅 사이트를 자동으로 생성합니까?",
        logoUploadTips: "최소 300x300의 이미지를 권장합니다. (GIF 가능)",
        collectionNamePlaceholder: "컬렉션 이름을 입력하세요",
        symbolLabel: "토큰 기호",
        symbolPlaceholder: "토큰 기호를 입력하세요",
        collectionDescription: "토큰 컬렉션에 대해 간단히 설명해주세요",
        editCollectionBtn: "Create collection",
        numberOfEditions: "Edition 개수",
        filePreview: "파일 미리 보기",
        submit: "제출하기",
        create: "생성하기",
        setNumNfts: "NFT 갯수를 설정하세요.",
        contentPlaceholder: "내용을 입력하세요",
        ruleAmount: "금액을 입력하세요",
        ruleNftName: "NFT 이름을 입력하세요",
        ruleMintTime: "민팅 시간을 선택하세요",
        numberOfEditionsRules: [
          "판매 단가를 입력하세요",
          "수량은 0일 수 없습니다.",
          "수량은 1부터 가능합니다.",
        ],
        checkSpaceRule: "공백으로 시작할 수 없습니다.",
        loading: "로딩중…",
        transactionText: "트랜잭션 진행중입니다, 잠시만 기다려 주세요.",
        contractText: "컨트랙트가 진행중입니다, 잠시만 기다려 주세요.",
        charactersRule: "1~50자를 입력하세요",
        salesTypeRule: "가격 판매 유형을 선택하세요",
        salesPriceRule: "판매 단가를 입력하세요",
        blockchainRule: "블록체인을 선택하세요",
        collectionRule: "컬렉션을 생성하세요",
        collectionFormRules: {
          name: ["스마트 컨트랙트 주소를 입력하세요", "1~20자를 입력하세요"],
          symbol: [
            "지갑 잔액 부족으로 결제 실패했습니다.",
            "1~20자를 입력하세요",
          ],
        },
        correctCidRule: "올바른 CID를 입력하세요",
        searchAndPinBtn: "검색 및 핀(pin)",
        timeoutTips: "시간 초과",
        timeduration: "시작 및 종료 시간은 1일보다 작을 수 없습니다.",
        pleaseSelect: "선택하세요",
        checkSalesPriceRules: [
          "숫자를 입력하세요",
          "소수점 8자리 이내로 금액을 입력하세요.",
          "가격은 0일 수 없습니다.",
        ],
        checkNetwork: "{network} 네트워크를 선택하십시오.",
      },
      explore: {
        exploreCollections: "컬렉션 탐색하기",
        upcoming: "진행중",
        price: "가격",
        total: "개수",
        date: "날짜",
        going: "진행중",
        ended: "종료",
        days: "날짜",
        hours: "시간",
        minutes: "분",
        seconds: "초",
      },
      myNfts: {
        noNfts: "표시할 NFT가 없습니다!",
        createNft: `나만의 새로운 NFT를 만들어보세요.`,
        items: "아이템",
        edit: "수정하기",
        copyLink: "복사하기",
        deploy: "배포하기",
        download: "다운로드",
        delete: "삭제",
      },
      terms: {
        title: "이용약관",
        titleDescription:
          '본 개인 정보 보호 정책은 사용자가 <a href="www.mintbox.vip" target="_blank">www.mintbox.vip</a>(이하 "사이트")를 방문하거나 사이트에서 구매를 진행할 때 사용자의 개인 정보가 어떻게 수집, 사용 및 공유되는지 설명합니다.',
        personalCollectTitle: "개인 정보 수집",
        // personalCollectParagraphOne: '사용자가 사이트 방문 시 당사는 사용자의 웹 브라우저, IP 주소, 시간대 및 장치에 설치된 일부 쿠키에 대한 정보를 포함하여 장치에 대한 특정 정보를 자동으로 수집합니다. 또한 저희는 사용자가 사이트를 이용할 때 사용자가 보는 개별 웹 페이지 또는 제품, 사용자를 사이트로 유도한 웹 사이트 또는 검색어, 그리고 사용자가 어떻게 사이트와 상호 작용하는지에 대한 정보를 수집합니다. 이렇게 자동으로 수집된 정보를 당사는 "장치 정보"라고 부릅니다.',
        // personalCollectParagraphTwo: '당사는 다음 기술들을 사용하여 장치 정보를 수집합니다.',
        // personalCollectParagraphThree: '- "쿠키"는 장치나 컴퓨터에 저장되는 데이터 파일이며 종종 익명의 고유 식별자를 포함합니다. 쿠키 및 쿠키 비활성화 방법에 대한 자세한 내용은 http://www.allaboutcookies.org를 참조하십시오.',
        // personalCollectParagraphFour: '- "로그 파일"은 사이트에서 발생하는 행동을 추적하고 IP 주소, 브라우저 유형, 인터넷 서비스 공급자, 참조/종료 페이지 및 날짜/시간 스탬프를 포함한 데이터를 수집합니다.',
        // personalCollectParagraphFive: '- "웹 비콘", "태그" 및 "픽셀"은 사용자가 사이트를 어떻게 이용하는지 기록하는 데 사용되는 전자 파일입니다.',
        // personalCollectParagraphSix: '또한 사용자가 사이트를 통해 구입하거나 구입을 시도할 때 당사는 사용자의 이름, 청구 주소, 배송 주소, 결제 정보(신용 카드 번호, 전자 메일 주소 및 전화 번호)를 포함한 특정 정보를 수집합니다. 당사는 이 정보를 "주문 정보"라고 부릅니다.',
        // personalCollectParagraphSeven:'본 개인정보 보호정책에서 말하는 "개인정보"는 장치 정보와 주문 정보를 말합니다.',
        personalCollectParagraph: [
          '사용자가 사이트 방문 시 당사는 사용자의 웹 브라우저, IP 주소, 시간대 및 장치에 설치된 일부 쿠키에 대한 정보를 포함하여 장치에 대한 특정 정보를 자동으로 수집합니다. 또한 저희는 사용자가 사이트를 이용할 때 사용자가 보는 개별 웹 페이지 또는 제품, 사용자를 사이트로 유도한 웹 사이트 또는 검색어, 그리고 사용자가 어떻게 사이트와 상호 작용하는지에 대한 정보를 수집합니다. 이렇게 자동으로 수집된 정보를 당사는 "장치 정보"라고 부릅니다.',
          "당사는 다음 기술들을 사용하여 장치 정보를 수집합니다.",
          '- "쿠키"는 장치나 컴퓨터에 저장되는 데이터 파일이며 종종 익명의 고유 식별자를 포함합니다. 쿠키 및 쿠키 비활성화 방법에 대한 자세한 내용은 http://www.allaboutcookies.org를 참조하십시오.',
          '- "로그 파일"은 사이트에서 발생하는 행동을 추적하고 IP 주소, 브라우저 유형, 인터넷 서비스 공급자, 참조/종료 페이지 및 날짜/시간 스탬프를 포함한 데이터를 수집합니다.',
          '- "웹 비콘", "태그" 및 "픽셀"은 사용자가 사이트를 어떻게 이용하는지 기록하는 데 사용되는 전자 파일입니다.',
          '또한 사용자가 사이트를 통해 구입하거나 구입을 시도할 때 당사는 사용자의 이름, 청구 주소, 배송 주소, 결제 정보(신용 카드 번호, 전자 메일 주소 및 전화 번호)를 포함한 특정 정보를 수집합니다. 당사는 이 정보를 "주문 정보"라고 부릅니다.',
          '본 개인정보 보호정책에서 말하는 "개인정보"는 장치 정보와 주문 정보를 말합니다.',
        ],
        usePersonalInformationTitle:
          "당사에서 사용자의 개인 정보를 어떻게 사용합니까?",
        usePersonalInformationParagraph: [
          "당사에서 수집한 주문 정보는 사이트를 통해 접수된 모든 주문(결제 정보 처리, 배송 준비 및 송장 및/또는 주문 확인 제공 포함)을 이행하기 위해 사용됩니다. 또한, 주문 정보는 귀하와 소통하고, 주문에 잠재적 위험 또는 위조 여부를 검사하고, 귀하가 제공한 선호도에 따라 당사의 제품 또는 서비스와 관련된 정보 또는 광고를 제공하는데 사용됩니다.",
          `당사는 수집한 장치 정보를 사용해 잠재적 위험 및 위조(특히 귀하의 IP 주소)를 분석하고, 보다 일반적으로는 당사의 사이트를 개선 (사용자가 사이트를 검색하고 상호 작용하는 방식에 대한 분석을 생성하고 마케팅 및 광고 캠페인의 성공을 평가)합니다.`,
        ],
        sharePersonalInformationTitle: "개인 정보 공유",
        sharePersonalInformationParagraph: [
          `당사는 위에서 설명한 대로 사용자의 개인 정보를 제3자와 공유하여 귀하의 개인 정보를 보다 잘 사용할 수 있게 도움을 받습니다. 예를 들어, 당사는 Shopify를 사용하여 온라인 상점을 운영합니다. Shopify의 개인 정보 취급에 대한 자세한 내용은 <a href=" https://www.shopify.com/legal/privacy" target="_blank">
          https://www.shopify.com/legal/privacy.</a>에서 확인할 수 있습니다. 또한 당사는 Google Analytics를 사용하여 고객이 사이트를 어떻게 사용하는지 파악합니다. Google의 개인 정보 취급 정책에 대한 자세한 내용은 <a
          href="https://www.google.com/intl/en/policies/privacy/"
          target="_blank">
          https://www.google.com/intl/en/policies/privacy/.</a>에서 확인할 수 있습니다. 단, 사용자는 <a href="https://tools.google.com/dlpage/gaoptout" target="_blank">https://tools.google.com/dlpage/gaoptout.</a>에서 Google Analytics사용을 거부할 수 있습니다.`,
          "마지막으로, 당사는 관련 법률 및 규정을 준수하기 위해, 혹은 당사가 받은 정보에 대한 소환장, 수색 영장 또는 기타 합법적인 요청에 응답하기 위해, 혹은 기타 당사의 권리를 보호하기 위해 귀하의 개인 정보를 공유할 수도 있습니다.",
        ],
        behaviouralTitle: "맞춤형 광고",
        behaviouralContent: `위에서 설명한 바와 같이 당사는 귀하의 개인 정보를 사용하여 귀하가 관심을 가질 수 있는 맞춤형 광고 또는 마케팅 커뮤니케이션을 제공합니다. 맞춤형 광고의 작동 방식에 대한 자세한 내용은 Network Advertising Initiative’s ("NAI") 의 교육 페이지  <a
        href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work"
        target="_blank"
        >http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.</a
      >를 참조하십시오.
        또한 Digital Advertising Alliance의 Opt-out 포털(<a href="http://optout.aboutads.info/" target="_blank"
        >http://optout.aboutads.info/</a
      >)을 방문하여 맞춤형 광고의 일부 서비스를 거부할 수 있습니다.`,
        dntTitle: "추적 금지 (DNT)",
        dntContent:
          "귀하의 브라우저에서 추적 금지 신호가 표시될 때 당사는 사이트의 데이터 수집 및 사용 관행을 변경하지 않는다는 점에 유의하십시오.",
        rightsTitle: "사용자 권리",
        rightsContent:
          "유럽 거주자의 경우 당사가 보유하고 있는 개인 정보에 액세스하고 개인 정보를 수정, 업데이트 또는 삭제하도록 요청할 권리가 있습니다. 이 권리를 행사하고 싶으시면 아래 연락처로 연락해주세요. 또한 사용자가 유럽 거주자인 경우 당사는 귀하와 체결한 계약을 이행하기 위해(예: 귀하가 사이트를 통해 주문하는 경우) 또는 위에 나열된 당사의 합법적인 비즈니스 이익을 추구하기 위해 귀하의 정보를 처리함을 알려드립니다. 또한 귀하의 정보는 캐나다와 미국을 포함한 유럽 이외의 지역으로 이전됩니다.",
        dataRetentonTitle: "데이터 보존",
        dataRetentonContent:
          "귀하가 사이트를 통해 주문을 할 때 당사는 귀하가 이 정보를 삭제하도록 요청하지 않는 한 그리고 삭제하기 전까지 귀하의 주문 정보를 보관합니다.",
        changesTitle: "수정 및 업데이트",
        changesContent:
          "당사는 당사의 관행 또는 기타 운영, 법률 또는 규정 상의 이유로 본 개인정보 보호정책을 수시로 업데이트할 수 있습니다.",
        contactTitle: "CONTACT US",
        contactContent: `당사의 개인 정보 보호 관행에 대한 자세한 내용을 알고 싶으시거나, 문의 사항이 있으시다면 <a href="mailto:contact@mintbox.vip">contact@mintbox.vip</a>로 이메일을 보내주시기 바랍니다.`,
      },
      item: {
        items: "아이템",
        owners: "소유자",
        owner: "소유자",
        price: "가격",
        free: "무료",
        buy: "구매",
        paymentFail: "심볼을 입력해주세요.",
      },
      nftDetail: {
        detail: "디테일",
        contractAddress: "컨트랙트 주소",
        tokenID: "토큰 ID",
        tokenStandard: "토큰 스탠다드",
        blockchain: "블록체인",
        hash: "해시",
        copySuccess: "복사 성공",
      },
      success: {
        title: "축하합니다! NFT를 성공적으로 생성했습니다!",
        description:
          " 사이트를 기반으로 민팅 사이트가 자동으로 생성되었으며, 클릭 한 번으로  배포하거나, 사용자 지정 사이트의 배포와 도메인 이름 변경 등을 위해 코드를 로컬환경에 저장할 수 있습니다. 템플릿 사이트는 사용자가 NFT를 직접 청구할 수 있도록 하는 데 사용할 수도 있습니다.",
        contractAddress: "컨트랙트 주소",
        website: "웹사이트",
        download: "다운로드",
        deploy: "배포",
      },
    },
  },
});

<template>
  <div
    id="Upload"
    class="container"
    v-loading.fullscreen.lock="fullscreenLoading"
    :element-loading-text="loadingText"
  >
    <p class="title">
      {{
        ruleForm.type == "m721"
          ? $t("upload.createMultipleNfts")
          : $t("upload.createSingleNft")
      }}
      (ERC{{ ruleForm.type == "1155" ? "1155" : "721" }})
    </p>
    <el-form
      :model="ruleForm"
      :rules="rules"
      label-position="top"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="" prop="cid">
        <mint-upload
          ref="mintUpload"
          :type="ruleForm.type"
          :previewImg="previewImg"
          :previewName="previewName"
          @fileUpload="nftImgUpload"
          @setFileName="setFileName"
          @getFileName="getFileName"
          @deleteFile="deleteFile"
        />
        <div style="margin-top: 50px" v-html="$t('upload.uploadMoreTips')">
          <!-- You can enter the (IPFS hash) CID address directly or upload and share
          via
          <a href="https://bucket.4everland.org/">4EVERLAND BUCKET</a>
          if the image is larger than 100MB. -->
        </div>
        <el-input v-model="uploadcId" :placeholder="$t('upload.ipfsHash')">
          <el-button
            class="btn-color btn-search"
            slot="append"
            @click="sendUploadCidTime"
            >{{ $t("upload.searchAndPinBtn") }}</el-button
          >
        </el-input>
      </el-form-item>
      <el-form-item :label="$t('upload.nameLabel')" prop="name">
        <div class="tips">{{ $t("upload.nftNameTips") }}</div>
        <el-input
          v-model="ruleForm.name"
          :placeholder="$t('upload.nftNamePlaceholder')"
        ></el-input>
      </el-form-item>
      <el-form-item :label="$t('upload.descriptionLabel')" prop="description">
        <div class="tips">
          {{ $t("upload.descriptionTips") }}
        </div>
        <el-input
          type="textarea"
          :rows="5"
          maxlength="10000"
          show-word-limit
          v-model="ruleForm.description"
          :placeholder="$t('upload.descriptionPlaceholder')"
        ></el-input>
      </el-form-item>
      <el-form-item :label="$t('upload.priceSale')" prop="salesType">
        <div class="d-flex">
          <div
            class="price-item"
            :class="item.type === ruleForm.salesType ? 'price-active' : ''"
            v-for="(item, index) in priceType"
            :key="index"
            @click="chooseSalesType(item.type)"
          >
            <img :src="item.img" alt="" />
            <div>{{ item.name }}</div>
          </div>
        </div>
        <el-form-item v-if="ruleForm.salesType == 'FIXED'" prop="salesPrice">
          <div class="tips">
            {{ $t("upload.fixedPriceTips") }}
          </div>
          <div class="d-flex">
            <el-input
              placeholder='$t("upload.salesPriceRule")'
              v-model="ruleForm.salesPrice"
              class="input-with-select"
            >
            </el-input>
            <el-select
              v-model="ruleForm.salesUnit"
              :placeholder="$t('upload.pleaseSelect')"
            >
              <el-option
                v-for="item in salesUnitOptions"
                :key="item.name"
                :label="item.name"
                :value="item.name"
              ></el-option>
            </el-select>
          </div>
        </el-form-item>
      </el-form-item>
      <el-form-item
        v-if="ruleForm.type == '1155'"
        :label="$t('upload.numberOfEditions')"
        prop="sub"
      >
        <div class="tips">{{ $t("upload.setNumNfts") }}</div>
        <el-input
          :placeholder="$t('upload.contentPlaceholder')"
          v-model="ruleForm.sub"
          class="input-with-select"
        >
        </el-input>
      </el-form-item>
      <el-form-item :label="$t('upload.mintTime')" prop="mintStartAt">
        <div class="tips">
          {{ $t("upload.mintTimeTips") }}
        </div>
        <el-date-picker
          class="width-100 justify-sb"
          v-model="datetimerange"
          type="datetimerange"
          range-separator="-"
          :start-placeholder="$t('upload.startTimePlaceholder')"
          :end-placeholder="$t('upload.endTimePlaceholder')"
          @change="datetimerangeChange"
          :picker-options="startPickerOptions"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item :label="$t('upload.blockchainLable')" prop="blockChain">
        <el-select
          class="d-block"
          v-model="ruleForm.blockChain"
          :placeholder="$t('upload.pleaseSelect')"
          :disabled="lock"
          @change="blockChainChange"
        >
          <el-option
            v-for="item in blockChainOptions"
            :key="item.chainId"
            :label="item.lable"
            :value="item.chainId"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item
        :label="$t('upload.createCollectionLable')"
        prop="collection"
      >
        <div class="create-btn" @click="showCreateCollection">
          <img src="@/assets/images/add.png" alt="" />
          <div class="text">{{ $t("upload.createCollectionName") }}</div>
          <div class="type">
            ERC-{{ ruleForm.type == "1155" ? "1155" : "721" }}
          </div>
        </div>
      </el-form-item>
      <el-form-item>
        <div class="template-box">
          <span>
            {{ $t("upload.generateTemplateTips") }}
          </span>
          <el-switch v-model="ruleForm.template"></el-switch>
        </div>
      </el-form-item>
      <el-form-item class="text-center">
        <el-button
          class="btn-color"
          @click="submitForm('ruleForm')"
          :loading="createBtnDisabled"
          >{{ $t("upload.create") }}</el-button
        >
      </el-form-item>
    </el-form>
    <el-dialog title="Collection" :visible.sync="collectionShow" width="35%">
      <el-form
        :model="collectionForm"
        :rules="collectionRules"
        label-position="top"
        ref="collectionForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="Logo" prop="logo">
          <el-upload
            class="avatar-uploader"
            action="#"
            :auto-upload="false"
            :show-file-list="false"
            :on-change="logoUpload"
          >
            <img v-if="logoPreviewImg" :src="logoPreviewImg" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <div style="color: #999999; font-size: 14px">
            {{ $t("upload.logoUploadTips") }}
          </div>
        </el-form-item>

        <el-form-item :label="$t('upload.nameLabel')" prop="name">
          <el-input
            v-model="collectionForm.name"
            :placeholder="$t('upload.collectionNamePlaceholder')"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('upload.symbolLabel')" prop="symbol">
          <el-input
            v-model="collectionForm.symbol"
            :placeholder="$t('upload.symbolPlaceholder')"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('upload.descriptionLabel')" prop="description">
          <el-input
            type="textarea"
            :rows="5"
            maxlength="10000"
            show-word-limit
            v-model="collectionForm.description"
            :placeholder="$t('upload.collectionDescription')"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button
          class="btn"
          @click="createCollection('collectionForm')"
          :loading="createBtnDisabled"
          >{{ $t("upload.editCollectionBtn") }}</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
import MintUpload from "@/components/MintUpload.vue";
import {
  bucket,
  getFormToken,
  bucketHeadObject,
  cidCheck,
  createNft,
  readNft,
  getContractSuccess,
  setContractResult,
} from "@/api";
import { BigNumber } from "ethers";
import { parseTokenMap } from "@/utils/parse-token-map";
import contracts from "@/contracts";
import { formatNetwork } from "@/utils";
const CID = require("cids");
const { S3 } = require("@aws-sdk/client-s3");
const Block_ChainOptions = [
  {
    lable: "Ethereum",
    chainId: 1,
  },
  {
    lable: "BSC",
    chainId: 56,
  },
  {
    lable: "polygon",
    chainId: 137,
  },
];
const Test_BlockChainOptions = [
  {
    lable: "Rinkeby",
    chainId: 4,
  },
  {
    lable: "BSC-Test",
    chainId: 97,
  },
  {
    lable: "Mumbai(Polygon testnet)",
    chainId: 80001,
  },
];
const Test_symbolList = {
  USDT: {
    address: "0x2b10a378fa4C6B3cb8df4EAb64Fb269CBA08E188",
    decimal: 1e6,
  },
  USDC: {
    address: "0x3858561E92C4F44fa2e4fBC3Ef57ac02Bc2754eF",
    decimal: 1e6,
  },
  DAI: {
    address: "0x2d2C8ab3A4006823260F862FF042b8cFDBcCE0C7",
    decimal: 1e18,
  },
};
const symbolListObj = {
  1: {
    USDT: {
      address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      decimal: 1e6,
    },
    USDC: {
      address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      decimal: 1e6,
    },
    DAI: {
      address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      decimal: 1e18,
    },
  },
  56: {
    USDT: {
      address: "0x55d398326f99059fF775485246999027B3197955",
      decimal: 1e18,
    },
    USDC: {
      address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
      decimal: 1e18,
    },
    DAI: {
      address: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
      decimal: 1e18,
    },
  },
  137: {
    USDT: {
      address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
      decimal: 1e6,
    },
    USDC: {
      address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
      decimal: 1e6,
    },
    DAI: {
      address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
      decimal: 1e18,
    },
  },
};
let s3Client;
export default {
  name: "Upload",
  components: { MintUpload },
  data() {
    let checkSalesPrice = (rule, value, callback) => {
      if (!value) {
        return callback(new Error(this.$t("upload.salesPriceRule")));
      }
      var reg = /^\d+(\.\d+)?$/;
      let accLength;
      if (value.indexOf(".") == -1) {
        accLength = 0;
      } else {
        accLength = value.split(".")[1].length;
      }
      if (!reg.test(value)) {
        callback(new Error(this.$t("upload.checkSalesPriceRules[0]")));
      } else if (accLength > 8) {
        callback(new Error(this.$t("upload.checkSalesPriceRules[1]")));
      } else if (value <= 0) {
        callback(new Error(this.$t("upload.checkSalesPriceRules[2]")));
      } else {
        callback();
      }
    };
    let checkSub = (rule, value, callback) => {
      if (!value) {
        return callback(new Error(this.$t("upload.numberOfEditionsRules[0]")));
      }
      let reg = /(^[1-9]\d*$)/;
      if (value <= 0) {
        return callback(new Error(this.$t("upload.numberOfEditionsRules[1]")));
      } else if (!reg.test(value)) {
        return callback(new Error(this.$t("upload.numberOfEditionsRules[2]")));
      } else {
        callback();
      }
    };
    let checkSpace = (rule, value, callback) => {
      var fdStart = value.indexOf(" ");
      if (fdStart == 0) {
        return callback(new Error(this.$t("upload.checkSpaceRule")));
      } else {
        callback();
      }
    };
    let checkChainId = (rule, value, callback) => {
      const chainId = this.$store.state.chainId;
      if (value != chainId) {
        const network = formatNetwork(value);
        return callback(new Error(this.$t("upload.checkNetwork", { network })));
      } else {
        callback();
      }
    };
    return {
      lock: false,
      fullscreenLoading: false,
      loadingText: this.$t("upload.loading"),
      transactionText: this.$t("upload.transactionText"),
      contractText: this.$t("upload.contractText"),
      bucketData: null,
      collectionShow: false,
      uploadcId: "",
      formToken: "",
      salesUnitOptions: [
        {
          name: "USDT",
        },
        {
          name: "USDC",
        },
        {
          name: "DAI",
        },
      ],
      blockChainOptions:
        process.env.NODE_ENV === "production"
          ? Block_ChainOptions
          : Test_BlockChainOptions,
      symbolList:
        process.env.NODE_ENV === "production"
          ? symbolListObj[1]
          : Test_symbolList,
      datetimerange: [],
      startPickerOptions: {
        disabledDate: (time) => {
          return time.getTime() < new Date().getTime() - 24 * 3600000;
        },
      },
      previewName: { name: "", description: "" },
      previewImg: "",
      logoPreviewImg: "",
      singleNftUrl: "",
      singleNftCid: "",
      mutipleTokens: [],
      ruleForm: {
        item: [],
        rootHash: "",
        type: "",
        name: "",
        description: "",
        salesType: "",
        salesPrice: null,
        salesUnit: "USDT",
        mintStartAt: "",
        mintEndAt: "",
        blockChain: process.env.NODE_ENV === "production" ? 1 : 4,
        collection: null,
        template: true,
        sub: null,
        formToken: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: this.$t("upload.ruleNftName"),
            trigger: "blur",
          },
          {
            min: 1,
            max: 50,
            message: this.$t("upload.charactersRule"),
            trigger: "blur",
          },
          { validator: checkSpace, trigger: "blur" },
        ],
        description: [{ validator: checkSpace, trigger: "blur" }],
        salesType: [
          {
            required: true,
            message: this.$t("upload.salesTypeRule"),
            trigger: "blur",
          },
        ],
        salesPrice: [
          {
            required: true,
            message: this.$t("upload.salesPriceRule"),
            trigger: "blur",
          },
          { validator: checkSalesPrice, trigger: "blur" },
        ],
        sub: [
          {
            required: true,
            message: this.$t("upload.ruleAmount"),
            trigger: "blur",
          },
          { validator: checkSub, trigger: "blur" },
        ],
        mintStartAt: [
          {
            required: true,
            message: this.$t("upload.ruleMintTime"),
            trigger: "blur",
          },
        ],
        blockChain: [
          {
            required: true,
            message: this.$t("upload.blockchainRule"),
            trigger: "blur",
          },
          { validator: checkChainId, trigger: "blur" },
        ],
        collection: [
          {
            required: true,
            message: this.$t("upload.collectionRule"),
            trigger: "blur",
          },
        ],
      },
      collectionForm: {
        logo: "",
        name: "",
        symbol: "",
        description: "",
        contractAddress: "",
      },
      collectionRules: {
        name: [
          {
            required: true,
            message: this.$t("upload.collectionFormRules.name[0]"),
            trigger: "blur",
          },
          {
            min: 1,
            max: 20,
            message: this.$t("upload.collectionFormRules.name[1]"),
            trigger: "blur",
          },
          { validator: checkSpace, trigger: "blur" },
        ],
        symbol: [
          {
            required: true,
            message: this.$t("upload.collectionFormRules.symbol[0]"),
            trigger: "blur",
          },
          {
            min: 1,
            max: 20,
            message: this.$t("upload.collectionFormRules.symbol[1]"),
            trigger: "blur",
          },
          { validator: checkSpace, trigger: "blur" },
        ],
      },
      // priceType: [
      //   {
      //     img: require("@/assets/images/free.png"),
      //     name: "Free",
      //     type: "FREE",
      //   },
      //   {
      //     img: require("@/assets/images/fixed.png"),
      //     name: "Fixed price",
      //     type: "FIXED",
      //   },
      // ],
      contractURI: "",
      successInfo: {},
      deployArray: [],
      createBtnDisabled: false,
      countTime: 0,
    };
  },
  computed: {
    priceType() {
      return [
        {
          img: require("@/assets/images/free.png"),
          name: this.$t("upload.free"),
          type: "FREE",
        },
        {
          img: require("@/assets/images/fixed.png"),
          name: this.$t("upload.fixedPrice"),
          type: "FIXED",
        },
      ];
    },
  },
  methods: {
    init(contractAddress) {
      readNft(contractAddress).then((res) => {
        this.ruleForm = res.data;
      });
    },
    bucketLogin() {
      bucket().then((res) => {
        this.bucketData = res.data;
        this.initS3();
      });
    },
    setFormToken() {
      getFormToken().then((res) => {
        this.formToken = res.data.token;
      });
    },
    sendUploadCidTime() {
      this.countTime = 0;
      let cid;
      try {
        cid = new CID(this.uploadcId);
      } catch (e) {
        console.log(e);
      }
      if (!CID.isCID(cid)) {
        this.$message.error(this.$t("upload.correctCidRule"));
        return;
      }
      this.sendUploadCid();
    },
    sendUploadCid() {
      this.fullscreenLoading = true;
      cidCheck(this.uploadcId).then((res) => {
        if (res.data.list.length > 0) {
          if (this.ruleForm.type != "m721") {
            const imgUrl = "https://ipfs.io/ipfs/" + res.data.list[0].cid;
            this.previewImg = imgUrl;
            this.singleNftUrl = imgUrl;
            this.singleNftCid = res.data.list[0].cid;
            // this.singleNftCid = this.uploadcId;
          } else {
            const owner = this.$store.state.account;
            const imgUrl = "https://ipfs.io/ipfs/" + res.data.list[0].cid;
            let obj = {
              creator: owner,
              imgUrl: imgUrl,
              cid: res.data.list[0].cid,
            };
            this.mutipleTokens.push(obj);
          }
          this.fullscreenLoading = false;
        } else {
          if (this.countTime < 10) {
            setTimeout(() => {
              this.sendUploadCid();
              this.countTime = this.countTime + 1;
            }, 1000);
          } else {
            this.fullscreenLoading = false;
            this.$message.error(this.$t("upload.timeoutTips"));
          }
        }
      });
    },
    async initS3() {
      const { endpoint, accessKey, accessSecret, token } = this.bucketData;
      const s3 = new S3({
        endpoint,
        signatureVersion: "v2",
        s3ForcePathStyle: true,
        credentials: {
          accessKeyId: accessKey,
          secretAccessKey: accessSecret,
          sessionToken: token,
        },
        region: "eu-west-2",
      });
      s3Client = s3;
    },
    async putObject(Key, fileBuffer) {
      const Bucket = this.bucketData.bucketName;
      Key = this.bucketData.path + "/" + Key;
      return new Promise((resolve, reject) => {
        s3Client.putObject(
          {
            Bucket,
            Key,
            Body: fileBuffer.data,
            ContentType: fileBuffer.type,
          },
          (err, data) => {
            if (err) reject(err);
            else resolve(data);
          }
        );
      });
    },

    async setNftMetaData() {
      const name = this.ruleForm.name;
      const description = this.ruleForm.description;
      const imgUrl = `ipfs://${this.singleNftCid}`;
      let Obj = {
        name,
        description,
        image: imgUrl,
      };
      this.upLoadeJsonString(Obj).then(async (res) => {
        let ruleFormItem = {
          tokenId: "",
          cid: "",
          proofs: [],
          url: "",
          metadata: "",
          name: "",
          description: "",
        };
        ruleFormItem.cid = this.singleNftCid;
        ruleFormItem.metadata = "ipfs://" + res.data.headObject[0].cid;
        ruleFormItem.url = this.singleNftUrl;
        ruleFormItem.name = this.ruleForm.name;
        ruleFormItem.description = this.ruleForm.description;
        this.ruleForm.item = [ruleFormItem];
        await this.createContractAddress();
        createNft(this.ruleForm).then((res) => {
          if (res.code == 200) {
            this.successInfo = res.data;
            this.deployContract();
            // if (this.lock) {
            //   this.addContract();
            // } else {
            // }
          } else {
            this.createBtnDisabled = false;
          }
        });
      });
    },
    async setMutipleNftMetaData() {
      let _this = this;
      const newTokens = await Promise.all(
        _this.mutipleTokens.map(async (ele) => {
          const name = ele.name ? ele.name : _this.ruleForm.name;
          const description = ele.description
            ? ele.description
            : _this.ruleForm.description;
          return new Promise(function (resolve, reject) {
            let Obj = {
              name,
              description,
              image: "ipfs://" + ele.cid,
            };
            _this.upLoadeJsonString(Obj).then((res) => {
              ele.uri = `ipfs://${res.data.headObject[0].cid}`;
              let ruleFormItem = {
                tokenId: "",
                cid: "",
                proofs: [],
                url: "",
                metadata: "",
                name: name,
                description: description,
              };
              ruleFormItem.cid = ele.cid;
              ruleFormItem.url = ele.imgUrl;
              ruleFormItem.metadata = "ipfs://" + res.data.headObject[0].cid;
              _this.ruleForm.item.push(ruleFormItem);
              resolve(ele);
            });
          });
        })
      );
      const res = parseTokenMap(newTokens);
      _this.ruleForm.rootHash = res.merkleRoot;
      const arrs = _this.ruleForm.item.map((item) => {
        const data = res.tokens.find((i) => item.metadata == i.uri);
        return {
          ...item,
          proofs: data.proofs,
        };
      });
      _this.ruleForm.item = arrs;
      await this.createContractAddress();
      createNft(_this.ruleForm).then((res) => {
        if (res.code == 200) {
          _this.successInfo = res.data;
          _this.deployContract();
          // if (this.lock) {
          //   _this.addContract();
          // } else {
          // }
        } else {
          this.createBtnDisabled = false;
        }
      });
    },
    async setCollectionMetaData() {
      const name = this.collectionForm.name;
      const description = this.collectionForm.description;
      const imgUrl = this.collectionForm.logo;
      let Obj = {
        name,
        description,
        image: imgUrl,
      };
      this.createBtnDisabled = true;
      this.upLoadeJsonString(Obj).then((res) => {
        this.createBtnDisabled = false;
        this.contractURI = res.data.headObject[0].url;
      });
    },
    async fileUpload(file, type) {
      let _this = this;
      var reader = new FileReader();
      this.createBtnDisabled = true;
      return new Promise((resolve, reject) => {
        if (file) {
          console.log(file);
          const uid = file.uid;
          reader.readAsDataURL(file.raw);
          reader.onload = function (e) {
            let fileName = Date.parse(new Date()) + file.name;
            if (type == 1) {
              _this.logoPreviewImg = reader.result;
            } else {
              _this.previewImg = reader.result;
            }
            const imageBuffer = _this.decodeBase64Image(reader.result);
            _this.putObject(fileName, imageBuffer).then(() => {
              const data = {
                bucket: _this.bucketData.bucketName,
                pathList: [_this.bucketData.path + "/" + fileName],
              };
              bucketHeadObject(data).then((res) => {
                _this.createBtnDisabled = false;
                if (res.code == 200) {
                  res.data.imgUid = uid;
                  resolve(res);
                } else {
                  reject(res);
                }
              });
            });
          };
        }
      });
    },
    async setFileName(obj) {
      const arrs = this.mutipleTokens.map((item) => {
        if (item.uid == obj.uid) {
          item.name = obj.name;
          item.description = obj.description;
        }
        return item;
      });
      this.mutipleTokens = arrs;
    },
    async getFileName(uid) {
      this.mutipleTokens.forEach((item) => {
        if (item.uid == uid) {
          this.previewName = {
            name: item.name,
            description: item.description,
          };
          return;
        }
      });
    },
    async deleteFile(file) {
      this.mutipleTokens.forEach((item, index) => {
        if (item.uid == file.uid) {
          this.mutipleTokens.splice(index, 1);
        }
      });
    },
    async upLoadeJsonString(object) {
      const bucketData = this.bucketData;
      let jsonStr = JSON.stringify(object);
      const buf = Buffer.from(jsonStr);
      let fileName =
        Date.parse(new Date()) +
        "jsonString" +
        Math.round(Math.random() * 10000);
      let fileBufferData = {};
      fileBufferData.data = buf;
      fileBufferData.type = "json/*";
      return new Promise((resolve, reject) => {
        this.putObject(fileName, fileBufferData).then(() => {
          const data = {
            bucket: bucketData.bucketName,
            pathList: [bucketData.path + "/" + fileName],
          };
          bucketHeadObject(data).then((res) => {
            if (res.code == 200) {
              resolve(res);
            } else {
              reject(res);
            }
          });
        });
      });
    },
    decodeBase64Image(dataString) {
      var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
        response = {};
      if (!matches) {
        return new Error("no match");
      }
      if (matches.length !== 3) {
        return new Error("Invalid input string");
      }
      response.type = matches[1];
      response.data = new Buffer(matches[2], "base64");
      return response;
    },
    chooseSalesType(type) {
      this.ruleForm.salesType = type;
      this.$refs["ruleForm"].validateField("salesType");
    },
    datetimerangeChange() {
      const startTime = this.datetimerange[0].getTime();
      const endTime = this.datetimerange[1].getTime();
      if (endTime - startTime < 24 * 60 * 60 * 1000) {
        this.$message.error(this.$t("upload.timeduration"));
        this.datetimerange = [];
        return;
      }
      this.ruleForm.mintStartAt = startTime;
      this.ruleForm.mintEndAt = endTime;
    },
    blockChainChange(val) {
      if (process.env.NODE_ENV === "production") {
        this.symbolList = symbolListObj[val];
      }
      const chainId = this.$store.state.chainId;
      if (val != chainId) {
        const network = formatNetwork(val);
        this.$message.error(this.$t("upload.checkNetwork", { network }));
      }
      this.$refs["ruleForm"].validateField("blockChain");
    },
    showCreateCollection() {
      this.collectionShow = true;
    },
    async nftImgUpload(file) {
      this.fileUpload(file).then((res) => {
        if (this.ruleForm.type != "m721") {
          this.singleNftUrl = res.data.headObject[0].url;
          this.singleNftCid = res.data.headObject[0].cid;
        } else {
          const owner = this.$store.state.account;
          let obj = {
            uid: res.data.imgUid,
            creator: owner,
            imgUrl: res.data.headObject[0].url,
            cid: res.data.headObject[0].cid,
            name: "",
            description: "",
          };
          this.mutipleTokens.push(obj);
        }
      });
    },
    logoUpload(file) {
      this.fileUpload(file, 1).then((res) => {
        this.collectionForm.logo = res.data.headObject[0].url;
      });
    },
    createCollection(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.setCollectionMetaData();
          this.ruleForm.collection = this.collectionForm;
          this.$refs["ruleForm"].validateField("collection");
          this.collectionShow = false;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    createContractSuccess() {
      const contractAddress = this.collectionForm.contractAddress;
      const formToken = this.formToken;
      let timeInt = setInterval(() => {
        this.loadingText = this.contractText;
        this.fullscreenLoading = true;
        getContractSuccess(contractAddress).then((res) => {
          if (res.code == 200) {
            clearInterval(timeInt);
            this.fullscreenLoading = false;
            this.createBtnDisabled = false;
            setContractResult(formToken).then((res) => {
              if (res.code == 200) {
                this.$router.push(
                  `/success?addr=${this.successInfo.contractAddress}&url=${this.successInfo.site}`
                );
              }
            });
          }
        });
      }, 2000);
    },
    async deploySingle() {
      try {
        console.log(
          "contracts.ERC721SingleCollectionFactoryAddress",
          contracts.ERC721SingleCollectionFactoryAddress
        );
        this.loadingText = this.transactionText;
        this.fullscreenLoading = true;
        const owner = await contracts.signer.getAddress();
        const data =
          contracts.ERC721SingleCollectionFactory.interface.encodeFunctionData(
            "deploy",
            this.deployArray
          );

        const tx = await contracts.signer.sendTransaction({
          from: owner,
          to: contracts.ERC721SingleCollectionFactoryAddress,
          data,
        });
        const receipt = await tx.wait();
        if (receipt) {
          this.createContractSuccess();
        }
      } catch (e) {
        this.setFormToken();
        console.log(e);
        this.fullscreenLoading = false;
        this.createBtnDisabled = false;
      }
    },
    async addSingle() {
      const deployment = this.ruleForm.collection.contractAddress;
      try {
        this.loadingText = this.transactionText;
        this.fullscreenLoading = true;
        const owner = await contracts.signer.getAddress();
        const data = contracts
          .ERC721SingleCollection(deployment)
          .interface.encodeFunctionData("addToken", [
            {
              creator: owner,
              uri: this.ruleForm.item[0].metadata,
            },
          ]);
        const tx = await contracts.signer.sendTransaction({
          from: owner,
          to: deployment,
          data,
        });
        const receipt = await tx.wait();
        if (receipt) {
          this.createContractSuccess();
        }
      } catch (e) {
        console.log(e);
        this.fullscreenLoading = false;
        this.createBtnDisabled = false;
      }
    },
    async addContractsAddressSingle() {
      const owner = await contracts.signer.getAddress();
      const name = this.collectionForm.name;
      const symbol = this.collectionForm.symbol;
      const uri = this.ruleForm.item[0].metadata;
      const creator = owner;
      const imp = contracts.ERC721SingleCollectionUpgradeableImp;
      console.log("imp", imp, contracts.chainId);
      const admin = owner;
      const salt = Buffer.alloc(32, 0);
      const salesPrice = this.ruleForm.salesPrice;
      console.log(this.symbolList);
      const decimal =
        this.symbolList[this.ruleForm.salesUnit].decimal.toString();
      const price = this.setPrice(salesPrice, decimal);
      const param = {
        uri: this.contractURI,
        payToken: this.symbolList[this.ruleForm.salesUnit].address, //DAI
        price: price,
        open: this.ruleForm.mintStartAt / 1000,
        close: this.ruleForm.mintEndAt / 1000,
      };
      this.deployArray = [
        owner,
        name,
        symbol,
        uri,
        creator,
        imp,
        admin,
        salt,
        param,
      ];
      const deployment =
        await contracts.ERC721SingleCollectionFactory.getAddress(
          owner,
          name,
          symbol,
          uri,
          creator,
          imp,
          admin,
          salt,
          param
        );
      this.collectionForm.contractAddress = deployment;
    },
    async deployMultiple() {
      try {
        this.loadingText = this.transactionText;
        this.fullscreenLoading = true;
        const owner = await contracts.signer.getAddress();
        const data =
          contracts.ERC721MultipleCollectionFactory.interface.encodeFunctionData(
            "deploy",
            this.deployArray
          );
        const tx = await contracts.signer.sendTransaction({
          from: owner,
          to: contracts.ERC721MultipleCollectionFactoryAddress,
          data,
        });
        const receipt = await tx.wait();
        if (receipt) {
          this.createContractSuccess();
        }
      } catch (e) {
        this.setFormToken();
        console.log(e);
        this.fullscreenLoading = false;
        this.createBtnDisabled = false;
      }
    },
    async addMultiple() {
      const deployment = this.ruleForm.collection.contractAddress;
      try {
        this.loadingText = this.transactionText;
        this.fullscreenLoading = true;
        const owner = await contracts.signer.getAddress();
        const res = parseTokenMap([
          {
            creator: owner,
            uri: "ipfs://QmeRJYtfTkqzCVLUbvnhK3xf9mJoUyFezMFtvLzTMqdGCm/2.png",
          },
        ]);
        const data = contracts
          .ERC721MultiCollection(deployment)
          .interface.encodeFunctionData("addRoot", [res.merkleRoot]);
        const tx = await contracts.signer.sendTransaction({
          from: owner,
          to: deployment,
          data,
        });
        console.log(tx);
        const receipt = await tx.wait();
        if (receipt) {
          this.createContractSuccess();
        }
      } catch (e) {
        console.log(e);
        this.fullscreenLoading = false;
        this.createBtnDisabled = false;
      }
    },
    async addContractsAddressMultiple() {
      const owner = await contracts.signer.getAddress();
      const name = this.collectionForm.name;
      const symbol = this.collectionForm.symbol;
      const root = this.ruleForm.rootHash;
      const imp = contracts.ERC721MultiCollectionUpgradeableImp;
      const admin = owner;
      const salt = Buffer.alloc(32, 0);
      const salesPrice = this.ruleForm.salesPrice;
      const decimal =
        this.symbolList[this.ruleForm.salesUnit].decimal.toString();
      const price = this.setPrice(salesPrice, decimal);
      const param = {
        uri: this.contractURI,
        payToken: this.symbolList[this.ruleForm.salesUnit].address, //DAI
        price: price,
        open: this.ruleForm.mintStartAt / 1000,
        close: this.ruleForm.mintEndAt / 1000,
      };
      this.deployArray = [owner, name, symbol, root, imp, admin, salt, param];
      const deployment =
        await contracts.ERC721MultipleCollectionFactory.getAddress(
          owner,
          name,
          symbol,
          root,
          imp,
          admin,
          salt,
          param
        );
      this.collectionForm.contractAddress = deployment;
    },
    async deploySingle1155() {
      try {
        this.loadingText = this.transactionText;
        this.fullscreenLoading = true;
        const owner = await contracts.signer.getAddress();
        const data =
          contracts.ERC1155SingleCollectionFactory.interface.encodeFunctionData(
            "deploy",
            this.deployArray
          );
        const tx = await contracts.signer.sendTransaction({
          from: owner,
          to: contracts.ERC1155SingleCollectionFactoryAddress,
          data,
        });
        const receipt = await tx.wait();
        if (receipt) {
          this.createContractSuccess();
        }
      } catch (e) {
        this.setFormToken();
        console.log(e);
        this.fullscreenLoading = false;
        this.createBtnDisabled = false;
      }
    },

    async addSingle1155() {
      const deployment = this.ruleForm.collection.contractAddress;
      try {
        this.loadingText = this.transactionText;
        this.fullscreenLoading = true;
        const owner = await contracts.signer.getAddress();
        const data = contracts
          .ERC1155SingleCollection(deployment)
          .interface.encodeFunctionData("addToken", [
            {
              creator: owner,
              uri: this.ruleForm.item[0].metadata,
              supply: this.ruleForm.sub,
            },
          ]);
        const tx = await contracts.signer.sendTransaction({
          from: owner,
          to: deployment,
          data,
        });
        console.log(tx);
        const receipt = await tx.wait();
        if (receipt) {
          this.createContractSuccess();
        }
      } catch (e) {
        console.log(e);
        this.fullscreenLoading = false;
        this.createBtnDisabled = false;
      }
    },
    async addContractsAddressSingle1155() {
      const owner = await contracts.signer.getAddress();
      const name = this.collectionForm.name;
      const symbol = this.collectionForm.symbol;
      const uri = this.ruleForm.item[0].metadata;
      const creator = owner;
      const supply = this.ruleForm.sub;
      const imp = contracts.ERC1155SingleCollectionUpgradeableImp;
      const admin = owner;
      const salt = Buffer.alloc(32, 0);
      const salesPrice = this.ruleForm.salesPrice;
      const decimal =
        this.symbolList[this.ruleForm.salesUnit].decimal.toString();
      const price = this.setPrice(salesPrice, decimal);
      const param = {
        uri: this.contractURI,
        payToken: this.symbolList[this.ruleForm.salesUnit].address, //DAI
        price: price,
        open: this.ruleForm.mintStartAt / 1000,
        close: this.ruleForm.mintEndAt / 1000,
      };
      this.deployArray = [
        owner,
        name,
        symbol,
        uri,
        creator,
        supply,
        imp,
        admin,
        salt,
        param,
      ];
      const deployment =
        await contracts.ERC1155SingleCollectionFactory.getAddress(
          owner,
          name,
          symbol,
          uri,
          creator,
          supply,
          imp,
          admin,
          salt,
          param
        );
      this.collectionForm.contractAddress = deployment;
    },
    async createContractAddress() {
      const type = this.ruleForm.type;
      switch (type) {
        case "721":
          await this.addContractsAddressSingle();
          break;
        case "m721":
          await this.addContractsAddressMultiple();
          break;
        case "1155":
          await this.addContractsAddressSingle1155();
          break;
      }
    },
    deployContract() {
      const type = this.ruleForm.type;
      switch (type) {
        case "721":
          this.deploySingle();
          break;
        case "m721":
          this.deployMultiple();
          break;
        case "1155":
          this.deploySingle1155();
          break;
      }
    },
    addContract() {
      const type = this.ruleForm.type;
      switch (type) {
        case "721":
          this.addSingle();
          break;
        case "m721":
          this.addMultiple();
          break;
        case "1155":
          this.addSingle1155();
          break;
      }
    },
    setPrice(price, decimal) {
      let y = String(price).indexOf(".") + 1;
      let count = String(price).length - y;
      if (y > 0) {
        let numArr = price.split(".");
        let integerPart = numArr[0];
        let fractionalPart = numArr[1];
        let pow = BigNumber.from(10).pow(count);
        let bigIntegerPart = BigNumber.from(integerPart).mul(decimal);
        let bigFractionalPart = BigNumber.from(fractionalPart)
          .mul(decimal)
          .div(pow);
        let bigPrice = bigIntegerPart.add(bigFractionalPart);
        return bigPrice;
      } else {
        return BigNumber.from(this.ruleForm.salesPrice).mul(decimal);
      }
    },
    submitForm(formName) {
      if (!(this.singleNftCid || this.mutipleTokens.length > 0)) {
        this.$message.error("Please upload NFTs");
        return;
      }
      this.createBtnDisabled = true;
      const type = this.ruleForm.type;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.ruleForm.formToken = this.formToken;
          if (!this.ruleForm.salesPrice) {
            this.ruleForm.salesPrice = "0";
          }
          switch (type) {
            case "721":
              this.setNftMetaData();
              break;
            case "m721":
              this.setMutipleNftMetaData();
              break;
            case "1155":
              this.setNftMetaData();
              break;
          }
        } else {
          console.log("error submit!!");
          this.createBtnDisabled = false;
          return false;
        }
      });
    },
    listen() {
      window.ethereum.on("chainChanged", (chainId) => {
        this.$refs["ruleForm"].validateField("blockChain");
      });
    },
  },
  created() {
    this.ruleForm.type = this.$route.query.type;
    this.addr = this.$route.query.addr;
    if (this.addr) {
      this.init(this.addr);
      this.lock = true;
    }
    this.bucketLogin();
    this.setFormToken();
    this.listen();
  },
};
</script>
<style lang="less" scoped>
#Upload {
  .hidden {
    visibility: hidden;
  }
  .title {
    font-size: 24px;
    color: #000;
    font-weight: bold;
  }
  /deep/ .el-form-item__label {
    color: #000;
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 5px;
    &::before {
      color: #000;
    }
  }
  .el-form-item__content {
    .tips {
      color: #999;
      font-size: 12px;
    }
  }

  .btn-color {
    width: 120px;
    background-color: #a27ec6;
    color: #fff;
    border-color: #a27ec6;
  }
  .btn-search {
    width: 140px;
  }
  .el-button.is-disabled,
  .el-button.is-disabled:focus,
  .el-button.is-disabled:hover {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #ebeef5;
    border-color: #ebeef5;
  }
  .price-item {
    border: 2px solid #dee0e2;
    border-radius: 10px;
    text-align: center;
    width: 120px;
    height: 140px;
    padding: 24px 0;
    box-sizing: border-box;
    cursor: pointer;
    img {
      width: 60px;
      display: block;
      margin: 0 auto;
    }
    div {
      font-size: 14px;
      font-weight: bold;
    }
    &:first-child {
      margin-right: 30px;
    }
    &.price-active {
      border: 2px solid #a27ec6;
    }
  }
  .create-btn {
    width: 132px;
    height: 160px;
    background: #ffffff;
    border: 1px solid #dee0e2;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    img {
      width: 40px;
      height: 40px;
      display: block;
      margin: 0 auto;
      margin-bottom: 20px;
    }
    .text {
      font-weight: bold;
      font-size: 16px;
      line-height: 16px;
      margin-bottom: 10px;
    }
    .type {
      color: #999;
      font-size: 12px;
      line-height: 12px;
    }
  }
  .template-box {
    border: 1px solid #dee0e2;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    margin-top: 30px;
  }
}
/deep/ .avatar-uploader {
  display: inline-block;
  .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
  }
  .avatar {
    width: 80px;
    height: 80px;
    display: block;
  }
}
/deep/ .el-dialog__footer {
  text-align: center;
  .btn {
    background-color: #a27ec6;
    color: #fff;
    border-color: #a27ec6;
  }
}
</style>

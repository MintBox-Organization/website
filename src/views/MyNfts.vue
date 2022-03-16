<template>
  <div id="MyNfts" class="container">
    <div v-if="nftList.length == 0" class="empty">
      <img src="@/assets/images/empty.png" alt="" />
      <p>{{ $t("myNfts.noNfts") }}</p>
      <router-link
        to="/create"
        class="bold"
        v-html="$t('myNfts.createNft')"
      ></router-link>
    </div>
    <el-row v-else>
      <el-col :lg="8" :md="8" v-for="(item, index) in nftList" :key="index">
        <el-card class="item" :body-style="{ padding: '0px' }" shadow="hover">
          <div class="nft-body" @click.stop="detail(item.contractAddress)">
            <div class="d-flex nft-tit">
              <el-image :src="item.logo" class="image">
                <div slot="error">
                  <img src="@/assets/images/default.png" alt="" class="image" />
                </div>
              </el-image>
              <span>{{ item.name }}</span>
            </div>
            <div>
              <div class="nft-tips">{{ item.description }}</div>
            </div>
          </div>
          <div class="nft-footer">
            <span>{{ item.count }} {{ $t("myNfts.items") }}</span>
            <el-dropdown
              placement="bottom"
              trigger="click"
              @command="
                (command) => {
                  handleCommand(command, item);
                }
              "
            >
              <el-button
                class="more"
                type="text"
                icon="el-icon-more"
              ></el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="edit">
                  <i class="el-icon-edit-outline"></i>
                  {{ $t("myNfts.edit") }}
                </el-dropdown-item>
                <!-- <el-dropdown-item divided command="edit">
                  <i class="el-icon-user"></i>
                  Add item
                </el-dropdown-item> -->
                <el-dropdown-item divided command="copy">
                  <i class="el-icon-document-copy"></i>
                  {{ $t("myNfts.copyLink") }}</el-dropdown-item
                >
                <el-dropdown-item divided command="deploy">
                  <i class="el-icon-lightning"></i>
                  {{ $t("myNfts.deploy") }}</el-dropdown-item
                >
                <el-dropdown-item divided command="download">
                  <i class="el-icon-download"></i>
                  {{ $t("myNfts.download") }}</el-dropdown-item
                >
                <el-dropdown-item
                  divided
                  command="delete"
                  style="color: #f56c6c"
                >
                  <i class="el-icon-delete"></i>
                  {{ $t("myNfts.delete") }}</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <edit-collection
      ref="editCollection"
      :editData="editData"
      @editFinsh="getList"
    />
  </div>
</template>
<script>
import { getMyNftList, deleteMyCollection } from "@/api";
import EditCollection from "@/components/EditCollection.vue";

export default {
  name: "MyNfts",
  components: {
    EditCollection,
  },
  data() {
    return {
      nftList: [],
      collectionShow: false,
      editData: null,
    };
  },
  methods: {
    getList() {
      getMyNftList().then((res) => {
        this.nftList = res.data.list;
      });
    },
    edit(item) {
      this.editData = item;
      this.$refs.editCollection.collectionForm = {
        logo: item.logo,
        name: item.name,
        symbol: item.symbol,
        description: item.description,
      };
      this.$refs.editCollection.logoPreviewImg = item.logo;
      this.$refs.editCollection.collectionShow = true;
    },
    delete(contractAddress) {
      this.$confirm(
        "When the project is deleted, all project information on this site will be deleted. Are you sure you want to delete it?",
        {
          confirmButtonText: "Confirm",
          cancelButtonText: "Cancel",
        }
      ).then(() => {
        deleteMyCollection(contractAddress).then((res) => {
          this.getList();
        });
      });
    },
    detail(contractAddress) {
      this.$router.push(`/explore/${contractAddress}`);
    },
    handleCommand(command, item) {
      switch (command) {
        case "edit":
          this.edit(item);
          break;
        case "copy":
          this.copy(item.site);
          break;
        case "deploy": {
          let url = `https://hosting.4everland.org/#/new/clone-flow?s=https%3A%2F%2Fgithub.com%2FMint-Box%2Fmint-box-template&e=VUE_APP_CONTRACT_ADDR%3A${item.contractAddress}`;
          window.open(url);
          break;
        }
        case "download":
          window.open("https://github.com/Mint-Box/mint-box-template");
          break;
        case "delete":
          this.delete(item.contractAddress);
          break;
        default:
          break;
      }
    },
    copy(data) {
      let url = data;
      let oInput = document.createElement("input");
      oInput.value = url;
      document.body.appendChild(oInput);
      oInput.select();
      console.log(oInput.value);
      document.execCommand("Copy");
      this.$message({
        message: this.$t("nftDetail.copySuccess"),
        type: "success",
      });
      oInput.remove();
    },
  },
  created() {
    this.getList();
  },
};
</script>
<style lang="less" scoped>
#MyNfts {
  .empty {
    text-align: center;
    width: 100%;
    padding-top: 160px;
    img {
      max-width: 310px;
    }
    p {
      font-size: 14px;
    }
    .bold {
      font-size: 18px;
      font-weight: bold;
    }
  }
  .item {
    max-width: 308px;
    margin: 20px auto;
    cursor: pointer;

    .nft-name {
      color: #000;
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .nft-body {
      padding: 20px 25px;
      border-bottom: 1px solid #e3e5e6;
    }
    .nft-tit {
      align-items: center;
      margin-bottom: 14px;
      .image {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 20px;
      }
    }
    .nft-tips {
      color: #000;
      font-size: 12px;
      height: 150px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 9;
      overflow: hidden;
      word-break: break-all;
    }
    .nft-footer {
      padding: 5px 25px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 12px;
      .more {
        color: #999;
        font-size: 22px;
      }
    }
  }
}
</style>

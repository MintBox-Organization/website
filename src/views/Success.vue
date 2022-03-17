<template>
  <div id="Success" class="container">
    <el-row>
      <el-col :md="12" class="text-center">
        <img class="success-img" src="@/assets/images/success.png" alt="" />
      </el-col>
      <el-col :md="12" class="text-center">
        <div class="texi-box">
          <div class="tit-1">
            {{ $t("success.title") }}
          </div>
          <div class="text-1">
            {{ $t("success.description") }}
          </div>
          <div class="text-2">
            <span class="tips"> {{ $t("success.contractAddress") }}: </span>
            <span class="addr">{{ addr }}</span>
            <i class="el-icon-document-copy copy-icon" @click="copy(addr)"></i>
          </div>
          <div class="text-2">
            <span class="tips"> {{ $t("success.website") }}: </span>
            <span class="url">
              <a :href="url" target="_blank">{{ url }}</a>
            </span>
          </div>
          <div class="btn-box">
            <el-button @click="download"
              >{{ $t("success.download")
              }}<i class="el-icon-download el-icon--right"></i
            ></el-button>
            <el-button class="btn-color" @click="deploy"
              >{{ $t("success.deploy")
              }}<i class="el-icon-view el-icon--right"></i
            ></el-button>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "Success",
  data() {
    return {
      addr: "",
      url: "",
    };
  },
  methods: {
    download() {
      window.open("https://github.com/Mint-Box/mint-box-template");
    },
    deploy() {
      this.$router.push(`/mynfts/${this.addr}`);
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
    console.log(this.$route);
    this.addr = this.$route.query.addr;
    this.url = this.$route.query.url;
  },
};
</script>
<style lang="less" scoped>
#Success {
  padding: 100px 0;
  .success-img {
    width: 100%;
    max-width: 366px;
  }
  .tit-1 {
    font-size: 16px;
    font-weight: bold;
    color: #000;
    margin-bottom: 11px;
  }
  .text-1 {
    font-size: 14px;
    color: #000;
    margin-bottom: 20px;
  }
  .text-2 {
    margin-bottom: 10px;
  }
  .btn-box {
    margin-top: 20px;
  }
  .tips {
    font-size: 14px;
    color: #999;
  }
  .addr {
    font-size: 14px;
    color: #000;
    font-weight: bold;
  }
  .url {
    a {
      color: #2a7eed;
      font-size: 14px;
    }
  }
  .btn-color {
    background-color: #a27ec6;
    color: #fff;
    border-color: #a27ec6;
  }
  .copy-icon {
    cursor: pointer;
    color: #2a7eed;
    margin-left: 5px;
  }
}
</style>

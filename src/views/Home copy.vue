<template>
  <div id="Home">
    <div class="banner">
      <div class="container">
        <el-row>
          <el-col :md="12" class="left">
            <div class="title-1">
              NFTS
              <br />
              FOR EVERYONE
            </div>
            <div class="banner-bottom">
              <div class="btn-box">
                <span class="title-2">Your NFTs</span>
                <span class="create-outline">
                  <el-button plain class="create" @click="create">
                    CREATE
                  </el-button>
                </span>
              </div>
              <div>
                <img src="@/assets/images/home/mint.png" alt="" />
              </div>
            </div>
          </el-col>
          <el-col :md="12" class="right">
            <img src="@/assets/images/home/hand.png" alt="" />
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="create-nft container">
      <el-row>
        <el-col :md="14" class="left">
          <img src="@/assets/images/home/create.png" alt="" />
        </el-col>
        <el-col :md="10" class="right">
          <div class="banner-bottom">
            <div class="title-2">Create your NFTs anytime anywhere</div>
            <div>
              <img src="@/assets/images/home/metadata.png" alt="" />
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="choose-type container">
      <el-row>
        <el-col>
          <img class="banner-bg" :src="bannerBg" alt="" />
        </el-col>
      </el-row>
      <el-row class="choose-type-box">
        <el-col
          :span="12"
          :md="6"
          v-for="(item, index) in chooseType"
          :key="index"
        >
          <div
            class="choose-type-item"
            :class="chooseTypeIndex == index ? 'active' : ''"
          >
            <img :src="item.img" alt="" />
            <div class="text" @click="onChooseType(item, index)">
              {{ item.text }}
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="main container">
      <el-row>
        <div>
          <img class="main-bg" :src="mainBg" alt="" />
          <div class="main-mask">
            <p>Create your NFTs anytime anywhere</p>
            <p style="font-size: 28px">Create NFTs</p>
            <div class="main-btn-box">
              <div
                class="main-btn-item"
                v-for="(item, index) in mainItem"
                :key="index"
                :class="mainItemIndex == index ? 'active' : ''"
                @click="onChooseMain(item, index)"
              >
                <img :src="item.img" alt="" />
                <span>{{ item.text }}</span>
              </div>
            </div>
          </div>
        </div>
      </el-row>
    </div>
    <div class="free container">
      <div class="title">
        <img src="@/assets/images/home/free.png" alt="" />
      </div>
      <!-- <el-row>
        <el-col class="ma" :md="8">
          <div class="mask-box">
            <img src="@/assets/images/home/free1.png" alt="" />
            <div class="mask"></div>
          </div>
        </el-col>
        <el-col class="ma" :md="8">
          <div class="mask-box">
            <img src="@/assets/images/home/free2.png" alt="" />
            <div class="mask"></div>
          </div>
        </el-col>
        <el-col class="ma" :md="8">
          <div class="mask-box">
            <img src="@/assets/images/home/free3.png" alt="" />
            <div class="mask"></div>
          </div>
        </el-col>
      </el-row> -->
      <el-carousel
        :interval="4000"
        type="card"
        height="330px"
        arrow="never"
        indicator-position="none"
      >
        <el-carousel-item
          class="ma"
          v-for="(item, index) in freeItem"
          :key="index"
        >
          <div class="mask-box">
            <img :src="item" alt="" />
            <div class="mask"></div>
          </div>
        </el-carousel-item>
      </el-carousel>
      <el-row>
        <div class="title-2 text-center mt-50">Use MINTBOX description</div>
        <img class="mt-50" src="@/assets/images/home/process.gif" alt="" />
      </el-row>
      <el-row>
        <div class="title-2 text-center mt-50">Welcome Use MINTBOX</div>
        <div class="title-3 text-center" style="margin-top: 30px">
          Create, Storage and more details
        </div>
        <div class="text-center">
          <el-button class="create mt-50" @click="create"> CREATE </el-button>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      chooseTypeIndex: 0,
      mainItemIndex: 0,
      bannerBg: require("@/assets/images/home/1.png"),
      mainBg: require("@/assets/images/home/main_1.png"),
      chooseType: [
        {
          bannerImg: require("@/assets/images/home/1.png"),
          img: require("@/assets/images/home/type_icon1.png"),
          text: "Choose type",
        },
        {
          bannerImg: require("@/assets/images/home/2.png"),
          img: require("@/assets/images/home/type_icon2.png"),
          text: "Create NFTs",
        },
        {
          bannerImg: require("@/assets/images/home/3.png"),
          img: require("@/assets/images/home/type_icon3.png"),
          text: "My NFTs",
        },
        {
          bannerImg: require("@/assets/images/home/4.png"),
          img: require("@/assets/images/home/type_icon4.png"),
          text: "Explorer",
        },
      ],
      mainItem: [
        {
          bannerImg: require("@/assets/images/home/main_1.png"),
          img: require("@/assets/images/home/icon_create.png"),
          text: "Create",
        },
        {
          bannerImg: require("@/assets/images/home/main_2.png"),
          img: require("@/assets/images/home/icon_upload.png"),
          text: "Upload",
        },
        {
          bannerImg: require("@/assets/images/home/main_3.png"),
          img: require("@/assets/images/home/icon_explorer.png"),
          text: "Explorer",
        },
        {
          bannerImg: require("@/assets/images/home/main_4.png"),
          img: require("@/assets/images/home/icon_mint.png"),
          text: "Mint",
        },
      ],
      freeItem: [
        require("@/assets/images/home/free2.png"),
        require("@/assets/images/home/free3.png"),
        require("@/assets/images/home/free1.png"),
      ],
    };
  },
  methods: {
    create() {
      this.$router.push(`/create`);
    },
    onChooseType(item, index) {
      this.chooseTypeIndex = index;
      this.bannerBg = item.bannerImg;
    },
    onChooseMain(item, index) {
      this.mainItemIndex = index;
      this.mainBg = item.bannerImg;
    },
  },
};
</script>
<style lang="less">
#Home {
  font-family: Arial Black, "Helvetica Neue", Helvetica, sans-serif;
  padding-bottom: 100px;

  background: linear-gradient(180deg, #f1f6ff 0%, #fff1f2 100%);
  .title-2 {
    font-size: 36px;
    color: #564e65;
    font-weight: bold;
  }
  .title-3 {
    font-size: 18px;
    color: #909397;
    letter-spacing: 14px;
    font-weight: bold;
    font-family: Arial;
  }
  .create {
    width: 150px;
    height: 40px;
    background-color: #a27ec6;
    border: 1px solid #a27ec6;
    color: #fff;
  }
  .mt-50 {
    margin-top: 50px;
  }
  .banner {
    width: 100%;
    background-image: url("../assets/images/banner.png");
    background-repeat: no-repeat;
    background-size: cover;
    max-height: 500px;
    .title-1 {
      font-size: 56px;
      color: #564e65;
      font-weight: bold;
      margin-top: 80px;
      margin-bottom: 45px;
    }

    .create-outline {
      display: inline-block;
      border: 1px solid #a27ec6;
      padding: 5px;
    }

    .banner-bottom {
      background-color: #fff;
      width: 100%;
      max-width: 480px;
      min-height: 220px;
      padding: 0 20px;
      padding-top: 20px;
      box-sizing: border-box;
      margin: 0 auto;
      .btn-box {
        display: flex;
        align-items: flex-end;
        justify-content: space-around;
        margin-bottom: 20px;
      }
      img {
        width: 100%;
        max-width: 440px;
      }
    }
    .right {
      height: 100%;
      img {
        width: 100%;
        height: 500px;
      }
    }
  }
  .create-nft {
    margin-top: 115px;
    .left {
      img {
        width: 100%;
      }
    }
    .right {
      padding-left: 50px;
      padding-top: 50px;
      img {
        width: 100%;
        margin-top: 20px;
      }
    }
  }
  .choose-type {
    margin-top: 70px;
    .banner-bg {
      width: 100%;
    }
    .choose-type-box {
      transform: translateY(-105px);
    }
    .choose-type-item {
      width: 180px;
      height: 180px;

      border-radius: 5px;
      text-align: center;
      margin: 0 auto;
      &.active {
        background: linear-gradient(0deg, #ecf2ff, #fff1f2);
        box-shadow: 0px 5px 15px 0px #ced9eb;
        img {
          visibility: unset;
        }
      }
      img {
        height: 50px;
        margin-top: 40px;
        visibility: hidden;
      }
      .text {
        font-size: 24px;
        font-weight: bold;
        color: #564e65;
        margin-top: 35px;
        cursor: pointer;
      }
    }
  }
  .main {
    margin-top: 50px;
    position: relative;
    overflow: hidden;
    .main-bg {
      width: 100%;
      display: block;
    }
    .main-mask {
      width: 38%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background-image: url("../assets/images/home/main_mask.png");
      background-size: cover;
      p {
        font-size: 34px;
        color: #fff;
        font-weight: bold;
        padding-left: 30px;
      }
      .main-btn-box {
        margin-top: 80px;
        .main-btn-item {
          display: flex;
          align-items: center;
          padding-left: 30%;
          height: 96px;
          cursor: pointer;
          &.active {
            background-color: #000;
          }
          img {
            width: 60px;
            height: 60px;
          }
          span {
            font-size: 18px;
            color: #fff;
            font-family: AaSpot;
            margin-left: 25px;
          }
        }
      }
    }
  }
  .free {
    margin-top: 50px;
    .ma {
      padding: 5px;
      img {
        width: 330px;
      }
      .mask-box {
        position: relative;
        text-align: center;
        &:hover {
          .mask {
            display: none;
          }
        }
      }
    }
    img {
      width: 100%;
    }
    .title {
      text-align: center;
      margin-bottom: 35px;
      img {
        max-width: 400px;
      }
    }
  }
}
</style>

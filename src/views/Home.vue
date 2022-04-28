<template>
  <div id="Home">
    <div class="container home-container">
      <el-row class="home-introduction">
        <el-col
          :xs="12"
          :sm="12"
          :md="12"
          :lg="12"
          class="home-introduction-left"
          ><div class="introduction-left">
            <h2 class="home-title">{{ $t("home.title") }}</h2>
            <div class="home-discription">
              <p class="no-class">{{ $t("home.description") }}</p>
              <p class="no-class">{{ $t("home.descriptions") }}</p>
            </div>
            <div class="create-btn" @click="handleToCreate">
              {{ $t("home.createBtn") }}
            </div>
          </div></el-col
        >
        <el-col
          :xs="12"
          :sm="12"
          :md="12"
          :lg="12"
          class="home-introduction-right"
          ><img
            class="introduction-img"
            src="@/assets/images/home/hand.png"
            alt=""
        /></el-col>
      </el-row>
      <div class="home-content">
        <el-row class="plate1">
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
            ><div class="plate1-content">
              <img src="@/assets/images/home/little-logo.png" alt="" />
              <h2>{{ $t("home.anywhere") }}</h2>
              <p>
                {{ $t("home.anywhereDescription") }}
              </p>
            </div></el-col
          >
          <el-col
            :xs="24"
            :sm="24"
            :md="12"
            :lg="12"
            :xl="12"
            style="display: flex; align-items: center"
            ><img
              class="plate1-img"
              src="@/assets/images/home/item-banner.png"
              alt=""
          /></el-col>
        </el-row>
        <div class="plate2">
          <div class="plate2-content">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              text-color="#8E8798"
              active-text-color="#A27EC6"
              mode="horizontal"
              @select="handleChooseItem"
            >
              <el-menu-item class="el-menu-item" index="1">{{
                $t("home.chooseType")
              }}</el-menu-item>
              <el-menu-item index="2">{{ $t("home.createNfts") }}</el-menu-item>
              <el-menu-item index="3">{{ $t("home.myNfts") }}</el-menu-item>
              <el-menu-item index="4">{{ $t("home.explorer") }}</el-menu-item>
            </el-menu>
            <img class="switch-img" :src="currentBgImg" alt="" />
          </div>
        </div>
        <el-row class="plate4">
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"
            ><h2 class="plate4-title">
              <p>{{ $t("home.useMintBoxTitle") }}</p>
              <p>{{ $t("home.useMintBox") }}</p>
            </h2></el-col
          >
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"
            ><img
              class="plate4-img"
              src="@/assets/images/home/process.gif"
              alt=""
          /></el-col>
        </el-row>
        <div class="plate5">
          <h2 class="plate5-title">{{ $t("home.welcome") }}</h2>
          <p class="plate5-text">{{ $t("home.doIt") }}</p>
          <div class="plate5-btn" @click="handleToCreate">
            {{ $t("home.createBtnAgain") }}
          </div>
        </div>
      </div>
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
      activeIndex: "1",
      currentBgImg: require("@/assets/images/home/main_1.png"),
      mainItem: [
        require("@/assets/images/home/main_1.png"),
        require("@/assets/images/home/main_2.png"),
        require("@/assets/images/home/main_3.png"),
        require("@/assets/images/home/main_4.png"),
      ],
      timer: null,
    };
  },
  computed: {
    freeItems() {
      return [
        {
          img: require("@/assets/images/home/free1.png"),
          text: this.$t("home.freeItems[0]"),
        },
        {
          img: require("@/assets/images/home/free2.png"),
          text: this.$t("home.freeItems[1]"),
        },
        {
          img: require("@/assets/images/home/free3.png"),
          text: this.$t("home.freeItems[2]"),
        },
      ];
    },
  },
  mounted() {
    let i = 0;
    this.timer = setInterval(() => {
      i++;
      if (i > 4) return (i = 0);
      this.activeIndex = i + "";
      this.autoChooseItem(i);
    }, 3000);
  },
  methods: {
    handleToCreate() {
      this.$router.push(`/create`);
    },
    handleChooseItem(item, index) {
      this.currentBgImg = this.mainItem[item - 1];
    },
    autoChooseItem(item) {
      this.currentBgImg = this.mainItem[item - 1];
    },
  },
};
</script>
<style lang="less">
@media (max-width: 765px) {
  .home-content {
    margin-top: 30px !important;
    padding: 0 20px 20px !important;
  }
  .plate1-img {
    margin-top: 20px !important;
  }

  .home-title {
    margin: 0;
  }
  .el-menu-demo {
    overflow: scroll;
    flex-wrap: wrap;
  }
  .el-menu-item {
    width: 50%;
    text-align: center;
    padding: 0 !important;
  }
}
#Home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Arial Black, "Helvetica Neue", Helvetica, sans-serif;
  padding-bottom: 100px;
  background: linear-gradient(
    180deg,
    #f1f6ff 0%,
    #fff1f2 25%,
    #f1f6ff 50%,
    #fff1f2 90%,
    #f1f6ff 100%
  );
  .home-container {
    width: 100%;
  }
  .home-introduction {
    display: flex;
    align-items: center;
    max-width: 1120px;
    padding: 0 20px;
    color: #564e65;
    .home-introduction-left {
      z-index: 2;
      position: relative;
    }
    .home-introduction-right {
      z-index: 1;
      position: relative;
    }
    .home-title {
      max-width: 313px;
      font-size: 40px;
      font-weight: 900;
      line-height: 58px;
    }
    .home-discription {
      padding: 20px 0;
      max-width: 410px;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      .no-class {
        margin: 0;
      }
    }
    .create-btn {
      display: inline-block;
      padding: 12px 17px;
      font-size: 16px;
      line-height: 17px;
      background: #ffffff;
      box-shadow: 0px 2px 0px 0px #e7e5e8;
      border-radius: 4px;
      border: 1px solid #e7e5e8;
      cursor: pointer;
    }
    .introduction-img {
      width: 100%;
      vertical-align: middle;
    }
  }

  .home-content {
    width: 100%;
    padding: 80px;
    box-sizing: border-box;
    background: #fff;
    border-radius: 20px;
    .plate1 {
      padding-bottom: 60px;
      color: #564e65;
      .plate1-content {
        > h2 {
          font-weight: 900;
          font-size: 32px;
          line-height: 46px;
          margin: 0;
          padding: 40px 0 10px;
        }
        > p {
          margin: 0;
          font-size: 14px;
        }
      }
      .plate1-img {
        width: 100%;
      }
    }
    .plate2 {
      border-radius: 15px;
      overflow: hidden;
      .plate2-content {
        width: 100%;
        padding: 0 40px 40px;
        box-sizing: border-box;
        border: 20px solid;
        border-image: linear-gradient(
            180deg,
            rgba(241, 246, 255, 1),
            rgba(255, 241, 242, 1)
          )
          20 20;
        .el-menu {
          // width: 100%;
          display: flex;
          justify-content: space-around;
        }
        .el-menu-item {
          font-size: 16px;
        }
        .el-menu.el-menu--horizontal {
          border-bottom: none;
        }
        .switch-img {
          margin-top: 10px;
          width: 100%;
        }
      }
    }
    .plate4 {
      padding: 60px 0;
      .plate4-title {
        height: 105px;
        margin: 0 auto 20px;
        text-align: center;
        font-size: 24px;
        font-weight: 900;
        color: #564e65;
        line-height: 35px;
        word-break: keep-all;
        > p {
          margin: 0;
        }
      }
      .plate4-img {
        width: 100%;
      }
    }
    .plate5 {
      padding-top: 20px;
      text-align: center;
      .plate5-title {
        font-size: 32px;
        color: #564e65;
        font-weight: 900;
        color: #564e65;
        line-height: 46px;
      }
      .plate5-text {
        margin: 19px 0 40px;
        font-size: 14px;
        font-weight: 500;
        color: #8e8798;
        line-height: 20px;
      }
      .plate5-btn {
        display: inline-block;
        padding: 12px 17px;
        color: #564e65;
        line-height: 17px;
        border: 1px solid #e7e5e8;
        border-radius: 4px;
        box-shadow: 0px 2px 0px 0px #e7e5e8;
        cursor: pointer;
      }
    }
  }
}
</style>

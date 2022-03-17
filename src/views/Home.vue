<template>
  <div id="Home">
    <div class="home-introduction">
      <div class="introduction-left">
        <h2 class="home-title">{{ $t("home.title") }}</h2>
        <div class="home-discription">
          <p class="no-class">{{ $t("home.description") }}</p>
          <p class="no-class">{{ $t("home.descriptions") }}</p>
        </div>
        <div class="create-btn" @click="handleToCreate">
          {{ $t("home.createBtn") }}
        </div>
      </div>
      <img
        class="introduction-img"
        src="@/assets/images/home/hand.png"
        alt=""
      />
    </div>
    <div class="home-content">
      <div class="plate1">
        <div class="plate1-content">
          <img src="@/assets/images/home/little-logo.png" alt="" />
          <h2>{{ $t("home.anywhere") }}</h2>
          <p>
            {{ $t("home.anywhereDescription") }}
          </p>
        </div>
        <img
          class="plate1-img"
          src="@/assets/images/home/item-banner.png"
          alt=""
        />
      </div>
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
            <el-menu-item index="1">{{ $t("home.chooseType") }}</el-menu-item>
            <el-menu-item index="2">{{ $t("home.createNfts") }}</el-menu-item>
            <el-menu-item index="3">{{ $t("home.myNfts") }}</el-menu-item>
            <el-menu-item index="4">{{ $t("home.explorer") }}</el-menu-item>
          </el-menu>
          <img class="switch-img" :src="currentBgImg" alt="" />
        </div>
      </div>
      <!-- <div class="plate3">
        <h2 class="plate3-title">{{ $t("home.createFree") }}</h2>
        <ul class="plate3-list">
          <template v-for="item in freeItems">
            <li class="plate3-item" :key="item.text">
              <img :src="item.img" alt="" />
              <span class="img-text">{{ item.text }}</span>
            </li>
          </template>
        </ul>
      </div> -->

      <div class="plate4">
        <h2 class="plate4-title">
          {{ $t("home.useMintBox") }}
        </h2>
        <img src="@/assets/images/home/process.gif" alt="" />
      </div>
      <div class="plate5">
        <h2 class="plate5-title">{{ $t("home.welcome") }}</h2>
        <p class="plate5-text">{{ $t("home.doIt") }}</p>
        <div class="plate5-btn" @click="handleToCreate">
          {{ $t("home.createBtnAgain") }}
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
  methods: {
    handleToCreate() {
      this.$router.push(`/create`);
    },
    handleChooseItem(item, index) {
      this.currentBgImg = this.mainItem[item - 1];
    },
  },
};
</script>
<style lang="less">
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
  .home-introduction {
    width: 1120px;
    height: 560px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #564e65;
    .home-title {
      width: 313px;
      height: 116px;
      font-size: 40px;
      font-weight: 900;
      line-height: 58px;
    }
    .home-discription {
      padding: 20px 0;
      width: 410px;
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
      height: 100%;
    }
  }

  .home-content {
    width: 1120px;
    padding: 80px;
    box-sizing: border-box;
    background: #fff;
    border-radius: 20px;
    .plate1 {
      display: flex;
      justify-content: space-between;
      // align-items: center;
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
        height: 200px;
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
    // .plate3 {
    //   display: flex;
    //   justify-content: space-between;
    //   padding: 60px 0;
    //   .plate3-title {
    //     width: 200px;
    //     height: 92px;
    //     color: #564e65;
    //     font-size: 32px;
    //     font-weight: 900;
    //     line-height: 46px;
    //   }
    //   .plate3-list {
    //     list-style: none;
    //     .plate3-item {
    //       position: relative;
    //       float: left;
    //       width: 200px;
    //       height: 200px;
    //       border-radius: 10px;
    //       // box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25),
    //       //   0px 3px 10px 3px #e7e5e8;
    //       img {
    //         width: 100%;
    //       }
    //       .img-text {
    //         position: absolute;
    //         left: 50%;
    //         bottom: 25px;
    //         transform: translateX(-50%);
    //         font-size: 18px;
    //         font-weight: normal;
    //         color: #564e65;
    //         line-height: 26px;
    //       }
    //     }
    //     .plate3-item + .plate3-item {
    //       margin-left: 20px;
    //     }
    //   }
    //   .plate3-list::after {
    //     content: "";
    //     display: block;
    //     clear: both;
    //   }
    // }
    .plate4 {
      padding: 60px 0;
      display: flex;
      justify-content: space-between;
      .plate4-title {
        width: 209px;
        height: 105px;
        font-size: 24px;
        font-weight: 900;
        color: #564e65;
        line-height: 35px;
        word-break: keep-all;
      }
      > img {
        width: 640px;
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

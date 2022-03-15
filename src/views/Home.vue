<template>
  <div id="Home">
    <div class="home-introduction">
      <div class="introduction-left">
        <h2 class="home-title">모두를 위한 간편한 NFT 서비스</h2>
        <div class="home-discription">
          저렴한 수수료로 다양한 네트워크에 NFT를 민팅, 저장하세요. MINTBOX는
          빠르고 안전하며, 저렴하게 NFT를 민팅할 수 있습니다.
        </div>
        <div class="create-btn" @click="handleToCreate">
          나만의 NFT 생성하기
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
          <h2>언제 어디서나 NFT를 만드세요</h2>
          <p>
            여러분의 NFT 데이터는 IPFS에 자동으로 업로드되어 안전하게
            보관됩니다.
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
            <el-menu-item index="1">타입 선택</el-menu-item>
            <el-menu-item index="2">타입 선택</el-menu-item>
            <el-menu-item index="3">나만의 NFT</el-menu-item>
            <el-menu-item index="4">탐색하기</el-menu-item>
          </el-menu>
          <img class="switch-img" :src="currentBgImg" alt="" />
        </div>
      </div>
      <div class="plate3">
        <h2 class="plate3-title">NFT를 무료로 만들어보세요</h2>
        <ul class="plate3-list">
          <li class="plate3-item">
            <img src="@/assets/images/home/free1.png" alt="" />
          </li>
          <li class="plate3-item">
            <img src="@/assets/images/home/free2.png" alt="" />
          </li>
          <li class="plate3-item">
            <img src="@/assets/images/home/free3.png" alt="" />
          </li>
        </ul>
      </div>

      <div class="plate4">
        <h2 class="plate4-title">
          MINTBOX 설명서를 확인하여 손쉽게 NFT를 민팅해보세요
        </h2>
        <img src="@/assets/images/home/process.gif" alt="" />
      </div>
      <div class="plate5">
        <h2 class="plate5-title">MINTBOX에 오신 것을 환영합니다</h2>
        <p class="plate5-text">더 쉽게 만들고 저장하고 민팅해보세요</p>
        <div class="plate5-btn" @click="handleToCreate">지금 바로 생성하기</div>
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
  background: linear-gradient(180deg, #f1f6ff 0%, #fff1f2 100%);
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
      height: 40px;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
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
      align-items: center;
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
    .plate3 {
      display: flex;
      justify-content: space-between;
      padding: 60px 0;
      .plate3-title {
        width: 200px;
        height: 92px;
        color: #564e65;
        font-size: 32px;
        font-weight: 900;
        line-height: 46px;
      }
      .plate3-list {
        list-style: none;
        .plate3-item {
          float: left;
          width: 200px;
          height: 200px;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25),
            0px 3px 10px 3px #e7e5e8;
          img {
            width: 100%;
          }
        }
        .plate3-item + .plate3-item {
          margin-left: 20px;
        }
      }
      .plate3-list::after {
        content: "";
        display: block;
        clear: both;
      }
    }
    .plate4 {
      padding-bottom: 60px;
      display: flex;
      justify-content: space-between;
      .plate4-title {
        width: 209px;
        height: 105px;
        font-size: 24px;
        font-weight: 900;
        color: #564e65;
        line-height: 35px;
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

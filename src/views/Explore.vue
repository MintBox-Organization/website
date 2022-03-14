<template>
  <div id="Explore" class="container">
    <el-row type="flex">
      <el-col><div class="choose">Explore Collections</div></el-col>
    </el-row>
    <div v-if="nftList.length == 0" class="empty">
      <img src="@/assets/images/empty.png" alt="" />
      <p>No NFTs to display!</p>
    </div>
    <el-row v-else style="overflow: auto">
      <el-col v-for="(item, index) in nftList" :key="index" :lg="12" :md="12">
        <el-card
          class="item"
          :body-style="{ padding: '0px', display: 'flex' }"
          shadow="hover"
          @click.native="exploreDetail(item.site)"
        >
          <div class="img-box">
            <el-image :src="item.logo" fit="cover" class="image" lazy>
              <div slot="error">
                <img src="@/assets/images/default.png" alt="" class="image" />
              </div>
            </el-image>
            <div
              v-if="
                item.explorerStatus == 0 &&
                item.countDown <= 7 * 24 * 60 * 60 * 1000
              "
              class="countDown"
            >
              <div class="countDown-item">
                <span class="num">{{ item.days || "00" }}</span>
                <span class="unit">Days</span>
              </div>
              <div class="countDown-item">
                <span class="num">{{ item.hours || "00" }}</span>
                <span class="unit">Hours</span>
              </div>
              <div class="countDown-item">
                <span class="num">{{ item.minutes || "00" }}</span>
                <span class="unit">Minutes</span>
              </div>
              <div class="countDown-item">
                <span class="num">{{ item.seconds || "00" }}</span>
                <span class="unit">Seconds</span>
              </div>
            </div>
            <span
              v-else-if="item.explorerStatus == 0"
              class="explorer-status upcoming"
              >Upcoming</span
            >
            <span v-if="item.explorerStatus == 1" class="explorer-status going"
              >Going</span
            >
            <span v-if="item.explorerStatus == 2" class="explorer-status ended"
              >Ended</span
            >
          </div>
          <div class="right-box">
            <div class="nft-name">{{ item.name }}</div>
            <div class="nft-tips">{{ item.description }}</div>
            <el-divider></el-divider>
            <div class="collection-info">
              <div class="info-item">
                <span>
                  <i class="el-icon-price-tag"></i>
                  <span class="info-tit">Price</span>
                </span>
                <span class="bold" v-if="item.price == '0'">Free</span>
                <span class="bold" v-else>{{
                  item.price + " " + item.unit
                }}</span>
              </div>
              <div class="info-item">
                <span>
                  <i class="el-icon-bangzhu"></i>
                  <span class="info-tit">Total</span>
                </span>
                <span class="bold">{{ item.total }}</span>
              </div>
              <div class="info-item">
                <span>
                  <i class="el-icon-time"></i>
                  <span class="info-tit">Date</span>
                </span>
                <span class="bold">
                  {{ new Date(item.mintStartAt).format() }}
                </span>
              </div>
            </div>
            <!-- <el-button class="view" @click="exploreDetail(item.contractAddress)"
              >View</el-button
            > -->
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { getExplorerList } from "@/api";

export default {
  name: "Explore",
  data() {
    return {
      nftList: [],
      page: 1,
      pageSize: 15,
    };
  },
  methods: {
    getList() {
      getExplorerList(this.page, this.pageSize).then((res) => {
        this.nftList = res.data.list;
        this.setCountDown();
      });
    },
    exploreDetail(site) {
      window.open(site);
    },
    setCountDown() {
      this.nftList.map((item, index) => {
        if (item.countDown > 0) {
          let timer = setInterval(() => {
            this.countDownTimer(item.countDown, index);
            item.countDown -= 1000;
            if (item.countDown <= 0) {
              item.countDown = 0;
              clearInterval(timer);
              item.explorerStatus = 1;
            }
          }, 1000);
        }
      });
    },
    countDownTimer(countDown, i) {
      let leftTime = countDown;
      let days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10);
      let hours = parseInt((leftTime / 1000 / 60 / 60) % 24, 10);
      let minutes = parseInt((leftTime / 1000 / 60) % 60, 10);
      let seconds = parseInt((leftTime / 1000) % 60, 10);
      this.nftList[i].days = this.checkTime(days);
      this.nftList[i].hours = this.checkTime(hours);
      this.nftList[i].minutes = this.checkTime(minutes);
      this.nftList[i].seconds = this.checkTime(seconds);
    },
    checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    },
  },
  created() {
    this.getList();
  },
};
</script>
<style lang="less" scoped>
#Explore {
  .choose {
    color: #000;
    font-size: 40px;
    font-weight: bold;
    margin: 80px 0;
    text-align: center;
  }
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
  }
  .item {
    margin: 10px;
    // height: 220px;
    cursor: pointer;
    .img-box {
      position: relative;
      .image {
        width: 200px;
        height: 200px;
        display: block;
      }
      .explorer-status {
        position: absolute;
        width: 68px;
        height: 28px;
        line-height: 28px;
        border-radius: 6px;
        top: 9px;
        right: 13px;
        color: #fff;
        font-size: 12px;
        text-align: center;
      }
      .upcoming {
        background: linear-gradient(
          180deg,
          #b2dbf0 0%,
          #81add5 81%,
          #7598c5 100%
        );
        box-shadow: 0px 2px 4px 0px #9a98ce;
        border: 1px solid;
      }
      .going {
        background: linear-gradient(
          180deg,
          #deb2f0 0%,
          #c991e3 80%,
          #d4ade6 100%
        );
        box-shadow: 0px 2px 4px 0px #bd98ce;
        border: 1px solid;
      }
      .ended {
        background: #cbcdd6;
      }
      .countDown {
        width: 180px;
        height: 45px;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 5px;
        position: absolute;
        top: 10px;
        left: 0;
        right: 0;
        margin: auto;
        display: flex;
        justify-content: space-around;
        .countDown-item {
          text-align: center;
          color: #fff;
          width: 45px;
          .num {
            display: block;
            font-size: 18px;
            font-weight: bold;
          }
          .unit {
            display: block;
            font-size: 12px;
            font-weight: normal;
            transform: scale(0.7);
          }
        }
      }
    }

    .right-box {
      width: 100%;
      padding: 20px 30px 0 30px;
      background-color: #fff;
      text-align: left;
      flex: 1;
    }
    .nft-name {
      max-width: 230px;
      color: #000;
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 6px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .nft-tips {
      color: #999;
      font-size: 12px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      word-break: break-all;
    }
    .el-divider--horizontal {
      margin: 10px 0;
    }
    .collection-info {
      .info-item {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: #999999;
        margin-bottom: 15px;
        .info-tit {
          margin-left: 10px;
        }
        .bold {
          font-weight: bold;
          color: #000;
        }
      }
    }
  }
}
</style>

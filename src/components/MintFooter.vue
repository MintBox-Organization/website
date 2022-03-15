<template>
  <div id="mintFooter" class="container">
    <img class="logo" src="@/assets/images/logo.png" alt="" />
    <div class="contact-box">
      <span class="copy-right"> @ 2021 MINTBOX </span>
      <span>
        <el-button type="text" @click="terms">Terms & Condition</el-button>
      </span>
      <span>
        <el-button type="text" @click="contact"> Contact</el-button>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    terms() {
      this.$router.push("/terms");
    },
    contact() {
      window.location = "mailto:contact@mintbox.vip";
    },
  },
};
</script>
<style lang="less" scoped>
#mintFooter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 120px;
  .logo {
    width: 120px;
  }
  .contact-box {
    span {
      font-size: 10px;
      margin-left: 16px;
      font-weight: 500;
      line-height: 15px;
      cursor: pointer;
      .el-button--text {
        color: #8e8798;
        font-size: 10px;
        line-height: 15px;
      }
      .el-button--text:hover {
        color: #66b1ff;
      }
    }
    .copy-right {
      display: block;
      text-align: right;
      color: #8e8798;
    }
  }
}
</style>

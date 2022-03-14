<template>
  <div id="mintFooter" class="container">
    <img class="logo" src="@/assets/images/logo.png" alt="" />
    <div class="contact-box">
      <span> @ 2021 MINTBOX </span>
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
    height: 50px;
  }
  .contact-box {
    span {
      font-size: 15px;
      margin: 0 15px;
      .el-button--text {
        color: #000;
        font-size: 15px;
      }
      .el-button--text:hover {
        color: #66b1ff;
      }
    }
  }
}
</style>

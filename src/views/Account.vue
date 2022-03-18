<template>
  <div class="account-container">
    <div class="account-dialog">
      <div class="account-dialog-content">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="My Account">
            <el-select
              v-model="currentCurrency"
              placeholder=""
              class="account-input"
              :popper-append-to-body="false"
            >
              <div slot="prefix">UDSP</div>
              <el-option
                v-for="item in currencyList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
                <span>{{ item.value }}</span>
                <span>{{ item.label }}</span>
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Claim" prop="withDraw">
            <el-input v-model="ruleForm.withDraw">
              <div slot="suffix" class="max">Max</div>
            </el-input>
          </el-form-item>
          <div class="submit-btn">Claim New</div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import contracts from "@/contracts";
export default {
  data() {
    return {
      ruleForm: {
        withDraw: "",
      },
      rules: {
        withDraw: [
          { required: true, message: "please enter Claim", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
      },
      currentCurrency: "",
      currencyList: [
        {
          value: 1,
          label: "UDSP",
        },
        {
          value: 2,
          label: "SKX",
        },
        {
          value: 3,
          label: "WED",
        },
      ],
    };
  },
  methods: {
    withdraw() {
      // const balance = await contracts.ERC20(USDTAddress).balanceOf(walletAddress)
      // contracts.MintBoxPool.interface.encodeFunctionData('withdraw',[USDTAddress, walletAddress, ])
    },
  },
};
</script>

<style lang="less" scoped>
/deep/ .el-input__inner {
  width: 360px;
}

/deep/ .el-select-dropdown__item {
  display: flex;
  justify-content: space-between;
}
.account-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.account-dialog {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 170px;
  width: 560px;
  height: 360px;
  border: 1px solid #e0e2e4;
  border-radius: 20px;

  .demo-ruleForm {
    display: flex;
    flex-direction: column;

    /deep/ .el-form-item__label {
      font-weight: bold;
    }
  }
  .account-input /deep/ .el-input__prefix {
    left: 80%;
  }
  .el-input--prefix .el-input__inner {
    padding-left: 0;
  }
  /deep/ .el-input__suffix {
    right: 10px;
  }
  .max {
    color: #3a88ee;
    cursor: pointer;
  }
  .submit-btn {
    display: inline-block;
    margin: 43px auto 0;
    padding: 8px 25px;
    text-align: center;
    background: #a27ec6;
    color: #fff;
    font-size: 14px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
}
</style>

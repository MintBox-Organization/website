<template>
  <div class="account-container" v-loading="loading">
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
            <el-input
              class="account-value"
              v-model="currentCurrencyAccount"
              disabled
            ></el-input>
            <el-select
              v-model="currentCurrency"
              class="account-input"
              :popper-append-to-body="false"
            >
              <el-option
                v-for="item in currencyList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
                <!-- <span>{{ item.value }}</span> -->
                <span>{{ item.label }}</span>
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :label="$t('account.claim')" prop="withdraw">
            <el-input v-model="ruleForm.withdraw">
              <div slot="suffix" class="max" @click="handleWithdrawMax">
                Max
              </div>
            </el-input>
          </el-form-item>
          <el-button
            class="submit-btn"
            @click="handleWithdraw"
            :disabled="btnDisabled"
            :loading="loading"
            >{{ $t("account.claimNew") }}</el-button
          >
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import contracts from "@/contracts";
import { BigNumber } from "@ethersproject/bignumber";
import { Wallet } from "@ethersproject/wallet";
export default {
  data() {
    const withdrawRule = (rule, value, callback) => {
      if (value == "" || value == 0) {
        return callback(new Error(this.$t("account.accountTips")));
      } else {
        if (/^\d+$|^\d+\.\d{0,6}$/.test(value)) {
          callback();
        } else {
          callback(new Error(this.$t("account.accountTips")));
        }
      }
    };
    return {
      loading: false,
      btnDisabled: true,
      account: "",
      ruleForm: {
        withdraw: "",
      },
      rules: {
        withdraw: [
          { required: true, validator: withdrawRule, trigger: "blur" },
        ],
      },
      currentCurrencyAccount: 0,
      currentCurrency: "USDT",
      currentCurrencyAddress: "0x2b10a378fa4C6B3cb8df4EAb64Fb269CBA08E188",
      currentCurrencyDecimal: 1e6,
      currencyList: [
        {
          value: "USDT",
          label: "USDT",
        },
        {
          value: "USDC",
          label: "USDC",
        },
        {
          value: "DAI",
          label: "DAI",
        },
      ],
      Test_symbolList: {
        USDT: {
          address: "0x2b10a378fa4C6B3cb8df4EAb64Fb269CBA08E188",
          decimal: 1e6,
        },
        USDC: {
          address: "0x3858561E92C4F44fa2e4fBC3Ef57ac02Bc2754eF",
          decimal: 1e6,
        },
        DAI: {
          address: "0x2d2C8ab3A4006823260F862FF042b8cFDBcCE0C7",
          decimal: 1e18,
        },
      },
    };
  },
  created() {
    this.withdraw();
    window.ethereum.on("chainChanged", (chainId) => {
      window.location.reload();
    });
  },
  methods: {
    async withdraw() {
      this.account = this.$store.state.account
        ? this.$store.state.account
        : await contracts.signer.getAddress();

      const max = await contracts.MintBoxPool.pools(
        this.currentCurrencyAddress,
        this.account
      );
      const resultMax = max.toString() / this.currentCurrencyDecimal;
      console.log(resultMax);
      this.currentCurrencyAccount = resultMax;
    },
    handleWithdrawMax() {
      // if (this.currentCurrencyAccount == 0) {
      //   return this.$message.error("your account empty!");
      // }
      this.$refs.ruleForm.clearValidate();
      this.ruleForm.withdraw = this.currentCurrencyAccount;
    },
    handleWithdraw() {
      this.$refs.ruleForm.validate((valida) => {
        if (this.ruleForm.withdraw > this.currentCurrencyAccount) {
          return this.$message.error(this.$t("account.accountTip"));
        }
        if (valida) {
          this.handleSendTransaction();
        }
      });
    },
    async handleSendTransaction() {
      const data = contracts.MintBoxPool.interface.encodeFunctionData(
        "withdraw",
        [
          this.currentCurrencyAddress,
          this.account,
          BigNumber.from(
            (this.ruleForm.withdraw * this.currentCurrencyDecimal).toString()
          ),
        ]
      );
      this.loading = true;
      try {
        const tx = await contracts.signer.sendTransaction({
          from: this.account,
          to: contracts.mintBoxPool,
          data,
        });
        const receipt = await tx.wait();
        this.ruleForm.withdraw = null;
        this.withdraw();
        this.$message.success("trade successfully");
      } catch (e) {
        console.log("e", e);
      } finally {
        this.loading = false;
      }
    },
  },
  watch: {
    currentCurrency(newValue) {
      this.currentCurrencyAddress = this.Test_symbolList[newValue].address;
      this.currentCurrencyDecimal = this.Test_symbolList[newValue].decimal;
      this.ruleForm.withdraw = null;
      this.withdraw();
    },
    "ruleForm.withdraw"(newValue) {
      if (newValue == "") {
        this.btnDisabled = true;
      } else {
        this.btnDisabled = false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
/deep/ .el-input__inner {
  width: 360px;
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
    .account-value.el-input {
      width: 260px;
    }
    .account-value/deep/.el-input__inner {
      width: 260px;
    }
  }
  .el-select /deep/ .el-input {
    display: inline-block;
    width: 100px;
  }
  .el-select /deep/ .el-input .el-input__inner {
    display: inline-block;
    width: 100px;
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
  .submit-btn.is-disabled {
    // color: #ccc;
    background: #ccc;
  }
}
</style>

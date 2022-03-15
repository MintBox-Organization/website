<template>
  <div id="mintNav" class="hidden-sm-and-down">
    <router-link :to="`/`">
      <img class="logo" src="@/assets/images/logo.png" alt="" />
    </router-link>
    <div class="container">
      <el-menu
        class="el-menu-mint"
        :default-active="activePath"
        router
        mode="horizontal"
        text-color="#564e65"
        active-text-color="#A27EC6"
      >
        <el-menu-item
          index="/create"
          :class="activePath == '/create' ? 'active' : ''"
          >MINT</el-menu-item
        >
        <el-menu-item
          index="/explore"
          :class="activePath == '/explore' ? 'active' : ''"
          >EXPLORE</el-menu-item
        >
        <el-menu-item
          index="/mynfts"
          :class="activePath == '/mynfts' ? 'active' : ''"
        >
          MY NFTS</el-menu-item
        >
      </el-menu>
      <div v-if="!isLogin" class="connect-wallet" @click="getConnect">
        Connect Wallet
      </div>
      <div v-else class="connect-wallet">
        <el-dropdown
          trigger="click"
          @command="
            (command) => {
              handleCommand(command);
            }
          "
        >
          <div>
            {{ formatAccount }}
          </div>
          <el-dropdown-menu slot="dropdown">
            <!-- <el-dropdown-item divided command="account">
            <i class="el-icon-user"></i> Account</el-dropdown-item
          > -->
            <el-dropdown-item command="logout">
              <i class="el-icon-download rotate-right"></i>
              Logout</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
import { formatNetwork, isNetworkSupported } from "@/utils";
import { UPDATE_ACCOUNT, UPDATE_CHAINID } from "@/store";
import contracts from "@/contracts";
import { connect, getToken, removeToken } from "@/utils/auth";

export default {
  computed: {
    isNetworkSupported() {
      return isNetworkSupported(this.$store.state.chainId);
    },
    isConnected() {
      if (!window.ethereum) {
        return false;
      }
      return !!this.$store.state.account;
    },
    network() {
      return formatNetwork(this.$store.state.chainId);
    },
    formatAccount() {
      const account = this.$store.state.account;
      if (account.length > 0) {
        return (
          account.substr(0, 10) + "...." + account.substr(account.length - 8, 8)
        );
      }
      return account;
    },
  },
  data() {
    return {
      activePath: "",
      loading: false,
      signer: "",
      msg: "",
      msgHash: "",
      sig: "",
      recoveredAddress: "",
      isLogin: false,
    };
  },
  methods: {
    handleCommand(command) {
      switch (command) {
        case "account":
          console.log(command);
          break;
        case "logout":
          removeToken();
          this.isLogin = false;
          this.$router.push("/");

          break;
        default:
          break;
      }
    },
    async checkState() {
      if (window.ethereum) {
        try {
          const account = await contracts.signer.getAddress();
          const chainId = await contracts.signer.getChainId();
          this.$store.commit(UPDATE_ACCOUNT, account);
          this.$store.commit(UPDATE_CHAINID, chainId);
        } catch (e) {
          console.log(e);
        }
      }
    },
    async getConnect() {
      connect();
    },
    getIsLogin() {
      this.isLogin = getToken();
      this.activePath = this.$route.path;
    },
    listen() {
      window.ethereum.on("accountsChanged", (accounts) => {
        this.$store.commit(UPDATE_ACCOUNT, accounts[0]);
        removeToken();
        this.$router.push("/").catch((err) => {
          window.location.reload();
        });
      });
      window.ethereum.on("chainChanged", (chainId) => {
        this.$store.commit(UPDATE_CHAINID, chainId);
      });
    },
  },

  watch: {
    $route: "getIsLogin",
  },
  created() {
    this.checkState();
    this.getIsLogin();
    this.listen();
  },
};
</script>
<style lang="less" scoped>
#mintNav {
  display: flex;
  align-items: center;
  .logo {
    z-index: 10;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 120px;
  }
  .container {
    flex: 1;
    display: flex;
    justify-content: space-between;
    height: 80px;
    align-items: center;
    // padding: 0 333px 0;
    .el-menu-mint {
      display: flex;
      justify-content: flex-start;
      border: none;
      .el-menu-item {
        position: relative;
        height: 50px;
        line-height: 50px;
        border: none;
        padding: 0 15px;
        font-size: 16px;
        text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
        // border-bottom: 2px solid transparent !important;
      }
      /deep/.el-menu-item.active::after {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        content: "";
        display: block;
        width: 20px;
        height: 2px;
        background-color: #a27ec6;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
        border-radius: 5px;
      }
    }
    .connect-wallet {
      padding: 12px 16px;
      font-size: 16px;
      border-radius: 4px;
      border: 1px solid #e7e5e8;
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5), 0px 2px 0px 0px #e7e5e8;
      text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);

      color: #564e65;
      cursor: pointer;
    }
  }
}
.rotate-right {
  transform: rotate(-90deg);
}
</style>

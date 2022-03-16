<template>
  <div class="upload-components">
    <div class="d-flex justify-sb" v-if="type != 'm721'">
      <div class="upload-box">
        <div class="title">* {{ $t("upload.upload") }}</div>
        <div class="tips">
          {{ $t("upload.fileSupported") }}
        </div>
        <el-upload
          class="upload-single"
          drag
          action="#"
          :auto-upload="false"
          :on-change="singlePreview"
          :file-list="fileList"
          :show-file-list="false"
          accept="image/*"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text" v-html="$t('upload.drag')">
            <!-- {{ $t("upload.drag") }} -->
          </div>
        </el-upload>
      </div>
      <div class="preview-box">
        <div class="title">{{ $t("upload.filePreview") }}</div>
        <div class="preview-image">
          <img :src="previewImg" alt="" />
        </div>
      </div>
    </div>
    <div class="d-flex justify-sb upload-multiple" v-else>
      <div class="upload-box">
        <div class="title">* {{ $t("upload.upload") }}</div>
        <div class="tips">
          {{ $t("upload.fileSupported") }}
        </div>
        <div class="multiple-box">
          <el-upload
            action="#"
            list-type="picture-card"
            :auto-upload="false"
            multiple
            :on-change="multiplePreview"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            accept="image/*"
          >
            <i slot="default" class="el-icon-plus"></i>
          </el-upload>
          <el-dialog
            :visible.sync="dialogVisible"
            class="preview-dialog"
            width="100%"
            :close-on-click-modal="false"
          >
            <img width="400px" :src="dialogImageUrl" alt="" />
            <el-form
              :model="imgForm"
              :rules="rules"
              label-position="top"
              ref="imgForm"
              label-width="100px"
              class="demo-imgForm"
            >
              <el-form-item :label="$t('upload.nameLabel')" prop="name">
                <div class="tips">{{ $t("upload.nftNameTips") }}</div>
                <el-input
                  v-model="imgForm.name"
                  placeholder="NFT Name"
                ></el-input>
              </el-form-item>
              <el-form-item
                :label="$t('upload.descriptionLabel')"
                prop="description"
              >
                <div class="tips">
                  {{ $t("upload.descriptionTips") }}
                </div>
                <el-input
                  type="textarea"
                  :rows="5"
                  maxlength="10000"
                  show-word-limit
                  v-model="imgForm.description"
                  :placeholder="$t('upload.descriptionPlaceholder')"
                ></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button class="btn" @click="setNftName('imgForm')">
                {{ $t("upload.submit") }}</el-button
              >
            </span>
          </el-dialog>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["type", "previewImg", "previewName"],
  data() {
    let checkSpace = (rule, value, callback) => {
      let fdStart = value.indexOf(" ");
      if (fdStart == 0) {
        return callback(new Error("Cannot start with a space"));
      } else {
        callback();
      }
    };
    return {
      fileList: [],
      dialogImageUrl: "",
      dialogVisible: false,
      imgForm: {
        uid: null,
        name: "",
        description: "",
      },
      rules: {
        name: [
          { required: true, message: "Please enter NFT name", trigger: "blur" },
          {
            min: 1,
            max: 50,
            message: "Please enter 1 to 50 characters",
            trigger: "blur",
          },
          { validator: checkSpace, trigger: "blur" },
        ],
        description: [{ validator: checkSpace, trigger: "blur" }],
      },
    };
  },
  methods: {
    singlePreview(file) {
      if (file.size > 1024 * 1024 * 100) {
        this.$message.error("The maximum size of an individual file is 100MB");
        return;
      }
      this.$emit("fileUpload", file);
    },
    multiplePreview(file) {
      this.$emit("fileUpload", file);
    },
    handleRemove(file) {
      this.$emit("deleteFile", file);
    },
    async handlePictureCardPreview(file) {
      await this.$emit("getFileName", file.uid);
      this.dialogImageUrl = file.url;
      this.imgForm.uid = file.uid;
      if (this.previewName) {
        this.imgForm.name = this.previewName.name;
        this.imgForm.description = this.previewName.description;
      }
      this.dialogVisible = true;
    },
    setNftName(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.dialogVisible = false;
          const data = this.imgForm;
          this.$emit("setFileName", data);
          this.imgForm = {
            uid: null,
            name: "",
            description: "",
          };
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
  created() {},
};
</script>
<style lang="less" scoped>
.upload-components {
  .tips {
    color: #999;
    font-size: 12px;
  }
  /deep/.upload-single {
    .el-upload-dragger {
      width: 440px;
      height: 342px;
      .el-icon-upload {
        margin-top: 100px;
      }
    }
  }
  .upload-multiple {
    width: 100%;
    .upload-box {
      width: 100%;
      .multiple-box {
        width: 100%;
        min-height: 350px;
        border: 1px dashed #999999;
        padding: 20px;
        /deep/ .el-upload-list--picture-card .el-upload-list__item {
          width: 80px;
          height: 80px;
        }
      }
      /deep/ .el-upload {
        // width: 100%;
        // height: 350px;
        &.el-upload--picture-card {
          width: 80px;
          height: 80px;
          line-height: 90px;
        }
        .el-upload-dragger {
          // width: 100%;
          border: none;
          background-color: #fbfdff;
        }
      }
    }
  }
  .preview-box,
  .upload-box {
    .title {
      font-size: 16px;
      font-weight: bold;
      color: #000;
    }
    .preview-image {
      width: 380px;
      height: 380px;
      border: 1px dashed #999999;
      overflow: hidden;
      display: flex;
      align-items: center;
      img {
        width: 100%;
      }
    }
  }
  .preview-dialog {
    max-width: 650px;
    margin: auto;
  }
  /deep/ .el-dialog__footer {
    text-align: center;
    .btn {
      background-color: #a27ec6;
      color: #fff;
      border-color: #a27ec6;
    }
  }
}
</style>

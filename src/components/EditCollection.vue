<template>
  <div>
    <el-dialog title="Collection" :visible.sync="collectionShow" width="35%">
      <el-form
        :model="collectionForm"
        :rules="collectionRules"
        label-position="top"
        ref="collectionForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="Logo" prop="logo">
          <el-upload
            class="avatar-uploader"
            action="#"
            :auto-upload="false"
            :show-file-list="false"
            :on-change="logoUpload"
          >
            <img v-if="logoPreviewImg" :src="logoPreviewImg" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <div style="color: #999999; font-size: 14px">
            We recommend an image of at least 300x300. Gifs work too.
          </div>
        </el-form-item>

        <el-form-item label="Name" prop="name">
          <el-input
            v-model="collectionForm.name"
            placeholder="Enter Collection name"
          ></el-input>
        </el-form-item>
        <el-form-item label="Symbol" prop="symbol">
          <el-input
            v-model="collectionForm.symbol"
            placeholder="Enter token symbol"
          ></el-input>
        </el-form-item>
        <el-form-item label="Description" prop="description">
          <el-input
            type="textarea"
            :rows="5"
            maxlength="10000"
            show-word-limit
            v-model="collectionForm.description"
            placeholder="Spread some words about your token collection"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button
          class="btn"
          @click="createCollection('collectionForm')"
          :loading="createBtnDisabled"
          >Edit collection</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { bucket, bucketHeadObject, editCollection } from "@/api";
const CID = require("cids");
const { S3 } = require("@aws-sdk/client-s3");

let s3Client;
export default {
  props: ["editData"],
  data() {
    let checkSpace = (rule, value, callback) => {
      var fdStart = value.indexOf(" ");
      if (fdStart == 0) {
        return callback(new Error("Cannot start with a space"));
      } else {
        callback();
      }
    };
    return {
      collectionShow: false,
      createBtnDisabled: false,
      logoPreviewImg: "",
      collectionForm: {
        logo: "",
        name: "",
        symbol: "",
        description: "",
      },
      collectionRules: {
        name: [
          {
            required: true,
            message: "Please enter the Smart Contract address",
            trigger: "blur",
          },
          {
            min: 1,
            max: 20,
            message: "Please enter 1 to 20 characters",
            trigger: "blur",
          },
          { validator: checkSpace, trigger: "blur" },
        ],
        symbol: [
          { required: true, message: "Please enter a symbol", trigger: "blur" },
          {
            min: 1,
            max: 20,
            message: "Please enter 1 to 20 characters",
            trigger: "blur",
          },
          { validator: checkSpace, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    bucketLogin() {
      bucket().then((res) => {
        this.bucketData = res.data;
        this.initS3();
      });
    },
    logoUpload(file) {
      this.fileUpload(file, 1).then((res) => {
        this.collectionForm.logo = res.data.headObject[0].url;
      });
    },
    async initS3() {
      const { endpoint, accessKey, accessSecret, token } = this.bucketData;
      const s3 = new S3({
        endpoint,
        signatureVersion: "v2",
        s3ForcePathStyle: true,
        credentials: {
          accessKeyId: accessKey,
          secretAccessKey: accessSecret,
          sessionToken: token,
        },
        region: "eu-west-2",
      });
      s3Client = s3;
    },
    async putObject(Key, fileBuffer) {
      const Bucket = this.bucketData.bucketName;
      Key = this.bucketData.path + "/" + Key;
      return new Promise((resolve, reject) => {
        s3Client.putObject(
          {
            Bucket,
            Key,
            Body: fileBuffer.data,
            ContentType: fileBuffer.type,
          },
          (err, data) => {
            if (err) reject(err);
            else resolve(data);
          }
        );
      });
    },
    decodeBase64Image(dataString) {
      var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
        response = {};
      if (!matches) {
        return new Error("no match");
      }
      if (matches.length !== 3) {
        return new Error("Invalid input string");
      }
      response.type = matches[1];
      response.data = new Buffer(matches[2], "base64");
      return response;
    },
    async fileUpload(file, type) {
      let _this = this;
      var reader = new FileReader();
      this.createBtnDisabled = true;
      return new Promise((resolve, reject) => {
        if (file) {
          console.log(file);
          const uid = file.uid;
          reader.readAsDataURL(file.raw);
          reader.onload = function (e) {
            let fileName = Date.parse(new Date()) + file.name;
            if (type == 1) {
              _this.logoPreviewImg = reader.result;
            } else {
              _this.previewImg = reader.result;
            }
            const imageBuffer = _this.decodeBase64Image(reader.result);
            _this.putObject(fileName, imageBuffer).then(() => {
              const data = {
                bucket: _this.bucketData.bucketName,
                pathList: [_this.bucketData.path + "/" + fileName],
              };
              bucketHeadObject(data).then((res) => {
                _this.createBtnDisabled = false;
                if (res.code == 200) {
                  res.data.imgUid = uid;
                  resolve(res);
                } else {
                  reject(res);
                }
              });
            });
          };
        }
      });
    },
    createCollection(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.setCollectionMetaData();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    setCollectionMetaData() {
      editCollection(this.editData.contractAddress, this.collectionForm).then(
        (res) => {
          this.collectionShow = false;
          this.$emit("editFinsh");
        }
      );
    },
  },
  created() {
    this.bucketLogin();
  },
};
</script>
<style lang="less" scoped>
/deep/ .avatar-uploader {
  display: inline-block;
  .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
  }
  .avatar {
    width: 80px;
    height: 80px;
    display: block;
  }
}
/deep/ .el-dialog__footer {
  text-align: center;
  .btn {
    background-color: #a27ec6;
    color: #fff;
    border-color: #a27ec6;
  }
}
</style>

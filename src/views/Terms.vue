<template>
  <div id="Terms">
    <div class="container">
      <div class="title text-center">{{ $t("terms.title") }}</div>
      <div>
        <p>
          <span class="link" v-html="$t('terms.titleDescription')"></span>
        </p>
        <p>
          <span>{{ $t("terms.personalCollectTitle") }}</span>
          {{ $t("terms.personalCollectParagraph[0]") }}
        </p>
        <p>
          {{ $t("terms.personalCollectParagraph[1]") }} <br />
          {{ $t("terms.personalCollectParagraph[2]") }}<br />
          {{ $t("terms.personalCollectParagraph[3]") }}<br />
          {{ $t("terms.personalCollectParagraph[4]") }}
        </p>
        <p>
          {{ $t("terms.personalCollectParagraph[5]") }}
        </p>
        <p>
          {{ $t("terms.personalCollectParagraph[6]") }}
        </p>
        <p>
          <span> {{ $t("terms.usePersonalInformationTitle") }}</span>
          {{ $t("terms.usePersonalInformationParagraph[0]") }}
        </p>
        <p>
          {{ $t("terms.usePersonalInformationParagraph[1]") }}
        </p>
        <!-- <p>
          We use the Device Information that we collect to help us screen for
          potential risk and fraud (in particular, your IP address), and more
          generally to improve and optimize our Site (for example, by generating
          analytics about how our customers browse and interact with the Site,
          and to assess the success of our marketing and advertising campaigns).
        </p> -->
        <p>
          <span> {{ $t("terms.sharePersonalInformationTitle") }} </span>
          <span
            class="link"
            v-html="$t('terms.sharePersonalInformationParagraph[0]')"
          ></span>
        </p>
        <p>
          {{ $t("terms.sharePersonalInformationParagraph[1]") }}
        </p>
        <p>
          <span> {{ $t("terms.behaviouralTitle") }} </span>
          <span class="link" v-html="$t('terms.behaviouralContent')"></span>
        </p>
        <p>
          <span> {{ $t("terms.dntTitle") }} </span>
          {{ $t("terms.dntContent") }}
        </p>
        <p>
          <span> {{ $t("terms.rightsTitle") }} </span>
          {{ $t("terms.rightsContent") }}
        </p>
        <p>
          <span> {{ $t("terms.dataRetentonTitle") }} </span>
          {{ $t("terms.dataRetentonContent") }}
        </p>
        <p>
          <span> {{ $t("terms.changesTitle") }} </span>
          {{ $t("terms.changesContent") }}
        </p>
        <p>
          <span>{{ $t("terms.contactTitle") }}</span>
          <span class="link" v-html="$t('terms.contactContent')"></span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
#Terms {
  background-color: #f1f6ff;
  min-height: 100vh;
  padding: 50px 0;
  .title {
    font-size: 36px;
    font-family: Arial Black;
    font-weight: 400;
    color: #564e65;
    margin-bottom: 20px;
  }
  p {
    font-size: 18px;
    color: #909397;
    margin-bottom: 30px;
    word-break: break-all;
    span {
      display: block;
      color: #564e65;
      font-size: 24px;
      font-weight: bold;
    }

    a {
      color: #2a7eed;
    }
  }
  /deep/ .link {
    font-size: 18px;
    color: #909397;
    margin-bottom: 30px;
    word-break: break-all;
    font-weight: normal;
  }
  .link /deep/ a {
    color: #2a7eed !important;
  }
}
</style>

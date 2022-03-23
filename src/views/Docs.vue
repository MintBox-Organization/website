<template>
  <div>
    <pdf
      v-for="i in numPages"
      :key="i"
      :src="src"
      :page="i"
      style="margin-bottom: 20px"
    ></pdf>
  </div>
</template>

<script>
import pdf from "vue-pdf";
// var loadingTask = pdf.createLoadingTask("/static/pdf/Mintbox.pdf");
export default {
  name: "Docs",
  data() {
    return {
      src: pdf.createLoadingTask("/static/pdf/Mintbox.pdf"),
      numPages: null,
    };
  },
  mounted() {
    this.src.promise.then((pdf) => {
      this.numPages = pdf.numPages;
    });
  },
  methods: {},

  components: {
    pdf,
  },
};
</script>

<style lang="scss" scoped></style>

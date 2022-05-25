<template>
  <div class="container-fluid vue-main">
    <div class="text-center" style="margin-top: 5%">
      <img :src="image" class="logo" />
      <h1 class="fw-bold">
        <span style="color: #fb503b">Laravel</span> + Vue.js
      </h1>
      <p>Ready to develop Laravel and Vue Source</p>
    </div>
  </div>
</template>

<script>
import image from "../assets/VueLur.png";
export default {
  name: "index",
  data: function () {
    return {
      image: image,
    };
  },
  metaInfo: {
    title: "VueLur",
    titleTemplate: "%s | Ready to develop Laravel and Vue ",
  },
};
</script>

<style>
</style>
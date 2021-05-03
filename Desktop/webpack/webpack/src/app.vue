<template>
  <div>
    {{ msg }}<br /><button @click="test">点击测试方法</button> <cpn1></cpn1>
  </div>
</template>

<script>
import cpn1 from "./cpn1";
export default {
  data() {
    return {
      msg: "这是测试变量",
    };
  },
  components: {
    cpn1,
  },
  methods: {
    test() {
      console.log("🚀 ~ file: main.js ~ line 12 ~ test ~ 这是测试方法");
    },
  },
};
</script>

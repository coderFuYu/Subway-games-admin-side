<template>
  <div class="mall">
    <GoodItem v-for="item in totalData" :detail="item.detail" :src_path="item.src" :name="item.name"
              :on-shelf="item.onShelf" :price="item.price" :propId="item.id" :key="item.name" @refresh="init()"/>
  </div>
</template>

<script>
  import {propList, mallList} from "../../network/mall"
  import GoodItem from "./GoodItem";

  export default {
    name: "Mall",
    data() {
      return {
        propData: [],
        mallData: [],
        totalData: []
      }
    },
    created() {
      this.init();
    },
    components: {
      GoodItem
    },
    methods: {
      init() {
        this.propData = [];
        this.mallData = [];
        this.totalData = [];
        propList(this.$store.state.token).then(
            res => {
              console.log(res)
              this.propData = res.body;
              mallList(this.$store.state.token).then(res => {
                this.mallData = res.body;
                for (let i of this.propData) {
                  let j = {
                    'id': i.propId,
                    'detail': i.message,
                    'src': i.propPicture,
                    'name': i.propName,
                    'onShelf': false,
                    'price': null
                  };
                  this.totalData.push(j);
                }
                for (let i of this.mallData) {
                  for (let j of this.totalData) {
                    if (j.id === i.propId) {
                      j.price = i.propValue;
                      j.onShelf = true
                    }
                  }
                }
              });
            }
        );
      }
    }
  }
</script>

<style scoped>
  .mall {
    padding-top: 1.5rem;
    box-sizing: border-box;
  }
</style>

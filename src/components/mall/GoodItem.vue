<template>
  <div class="goodItem">
    <img :src="src_path" alt="" class="img">
    <p class="name">{{name}}</p>
    <div v-if="onShelf" class="onShelf">
      <div class="price">{{price}}
        <div class="workpiece"></div>
      </div>
      <p class="dismount" @click="dismount()">下架</p>
      <p class="changePrice" @click="changePrice()">调整价格</p>
    </div>
    <div class="notOnShelf" v-else>
      <p class="ground" @click="ground()">上架</p>
    </div>
    <div class="detail_img" @mouseover.prevent="show_detail=1" @mouseleave.prevent="show_detail=0"></div>
    <div class="detail" v-show="show_detail">{{detail}}</div>
  </div>
</template>

<script>
  import {addGoods, delGoods, updateGood} from "../../network/mall"

  export default {
    name: "GoodItem",
    data() {
      return {
        show_detail: 0
      }
    },
    props: {
      src_path: String,
      name: String,
      detail: String,
      onShelf: Boolean,
      price: Number,
      propId: String,
    },
    methods: {
      ground() {
        let price = prompt('请输入价格：');
        if (price != null) {
          addGoods(this.propId, price, this.$store.state.token).then(
              res => {
                if (res.result === 'success') {
                  alert('上架成功！');
                  this.$emit('refresh');
                } else
                  alert('上架失败请稍后尝试。')
              })
        }
        console.log(price);
      },
      dismount() {
        delGoods(this.propId, this.$store.state.token).then(res => {
          if (res.result === 'success') {
            alert('下架成功！')
            this.$emit('refresh');
          } else
            alert('下架失败请稍后尝试。')
        })
      },
      changePrice(){
        let price = prompt('请输入价格：');
        if (price != null) {
          updateGood(this.propId, price, this.$store.state.token).then(
              res => {
                if (res.result === 'success') {
                  alert('修改价格成功！')
                  this.$emit('refresh');
                } else
                  alert('修改价格失败请稍后尝试。')
              })
        }
      }
    }
  }
</script>

<style scoped>
  .goodItem {
    display: inline-block;
    box-sizing: border-box;
    position: relative;
    width: 4.45rem;
    height: 5.8rem;
    margin-top: 5px;
    margin-left: 0.5rem;
    background-color: #dddddd;
    float: left;
  }

  .img {
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 0.5rem;
    left: 50%;
    margin-left: -1rem;
  }


  .name, .price {
    display: inline-block;
    left: 50%;
    width: 2rem;
    margin-left: -1rem;
    height: 0.7rem;
    text-align: center;
    font-size: 0.5rem;
    line-height: 0.7rem;
    position: absolute;
  }

  .name {
    top: 2.7rem;
  }

  .price {
    top: 3.7rem;
  }

  .workpiece {
    width: 0.7rem;
    height: 0.7rem;
    display: inline-block;
    margin: 0;
    background-image: url(../../assets/img/workpiece1.png);
    background-size: cover;
  }


  .detail {
    width: 3rem;
    height: 1.5rem;
    background-color: rgba(5, 5, 5, 0.5);
    position: absolute;
    top: 0;
    left: 1rem;
    color: white;
    font-size: 0.3rem;
    padding: 0.2rem;
  }

  .detail_img {
    width: 0.7rem;
    height: 0.7rem;
    position: absolute;
    left: 0.3rem;
    top: 0.3rem;
    background-image: url("../../assets/img/detail.png");
    background-size: cover;
  }

  .onShelf p {
    position: absolute;
    bottom: 0.3rem;
    width: 1.8rem;
    height: 0.9rem;
    background-color: #ff7d3c;
    color: white;
    line-height: 0.9rem;
    font-size: 0.35rem;
    text-align: center;
  }

  .dismount {
    left: 0.25rem;
  }

  .changePrice {
    right: 0.25rem;
  }

  .ground {
    position: absolute;
    bottom: 0.3rem;
    width: 2rem;
    height: 0.9rem;
    background-color: #ff7d3c;
    color: white;
    line-height: 0.9rem;
    font-size: 0.35rem;
    text-align: center;
    left: 50%;
    margin-left: -1rem;
  }
</style>

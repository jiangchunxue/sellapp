<template>
    <div>
<div class="main-top" :style="{backgroundImage: 'url('+data.avatar+')'}">
   <div class="left">
       <img :src='data.avatar' alt="" >
   </div>
   <div class="right">
 <div class="right-name">
     <img src="../assets/images/brand@2x.png" alt="">
  <p>{{data.name}}</p>
 </div>
 <p>{{data.description}} <span>/{{data.deliveryTime}}分钟送达</span></p>
 <p class="main-botton">
     <img src="../assets/images/decrease_1@2x.png" alt="">
    <span>{{ this.data.supports ? this.data.supports[0].description:''}}</span>
 </p>
   </div>
  

   </div>
    <div class="button">&ensp; <img src="../assets/images/bulletin@2x.png" alt="">
        <span>{{data.bulletin}}</span>
</div>

<div class="router-link-div"> 
<router-link to='/goods'>商品</router-link>
<router-link to='/evaluate'>评价</router-link>
<router-link to='/merchant'>商家</router-link>
</div>
<router-view></router-view>

<transition  name="slide-fade" >
      <div v-show="shopcarShow" class="shopcar-board">
          <shop-car></shop-car>
      </div>
    </transition>

<div class="shopcar"  @click="shopcarShow = !shopcarShow"> 
    <div class="car">
        <img style="width:50px;height:50px" src="../assets/images/shopcar.png" alt="">
        
    </div>
    <span class="totle">￥{{getTotal}}</span>
        <span>|另需配送费￥{{data.deliveryPrice}}元</span>
      <div class="box">￥{{data.minPrice}}起送</div>
</div> 
    </div>
</template>

<script>
import { getSeller } from '../api/apis'
export default {
  data() {
    return {
       shopcarShow: false,  
      data: {
      } //商家信息
    };
  },
  created() {
    getSeller().then(res => {
      console.log(res.data.data);
      this.data = res.data.data;
    });
  },
  computed: {
      goodslist(){
      return this.$store.state.goodslist;
    },
    
  },
  methods: {
  },
};
</script>

<style lang="less" scoped>
.shopcar-board{
  position: fixed;  
//   height: 200px;
  width: 100%;
  bottom: 60px;
  background-color: rgba(172, 165, 165,0.8);
}
.main-top{
    width: 100%;
    height: 150px;
background-repeat: repeat;
    // background-color: rgb(167, 160, 160);
    display: flex;
    .left{
        width: 30%;
        height: 100%;
        // background-color: rgb(146, 77, 77);
        img{
            width: 80px;
            height: 120px;
            padding-top: 30px;
            margin-left: 25%;
        }
    }
    .right{
        width: 69.9%;
        height: 100%;

        .main-botton{
            display: flex;
            justify-content: flex-start; 
            span{
                // margin-top: -5px;
                margin-left: 5px;
                }
        }
        .right-name{
            display: flex;
            padding-top: 20px;
            justify-content: flex-start;
            margin-top: 3%;
            img{
                width: 30px;
                height: 20px;
                // padding-top: 20px;
            }
           
            p{
                color: #fff;
                font-size: 16px/2em;
                font-weight: bold;
                margin-left: 10px;
                margin-top:2%;
            }
        }
      p{
          color: #fff;
          margin-top: 10px;
      }
    }
}
.router-link-div {
  display: flex;
  justify-content: space-around;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid rgb(161, 159, 159);
}
.shopcar {
  position: fixed; //脱离文档流-相对于浏览器绝对定位
  height: 60px;
  width: 100%;
  bottom: 0; //永远挨着浏览器底边
  background-color: #141c27;
  display: flex;
  .box{
       width: 100px;
       height: 60px;
       background-color: rgb(183, 183, 187);
       position: fixed;
       right: 0px;
      bottom: 0;
       line-height: 60px;
       text-align: center;
   }
  span{
      line-height: 60px;
  }
  .totle{
      margin-left:80px;
    //   line-height: 60px;
      font-size: 20px/2em;
      font-weight: bold;
  }
  .car{
      width: 60px;
      height: 60px;
     border-radius: 50%;
   background-color: #141c27;
   position: absolute;
   top: -17px;
   left: 15px;
   img{
       margin-left: 5px;
       margin-top: 5px;
   }
   
  }
}
.button{
background-color: rgba(0,0,0,0.5);
    width: 100%;
    line-height: 50px;
    height: 50px;
    border: 1px solid rgb(88, 87, 87);
    color: #fff;
    display: flex;
   
    img{
        width: 40px;
        height: 30px;
        padding-left: 10px;
        padding-top:15px;
    }
    span{
    margin-left: 10px; white-space: nowrap; word-break: keep-all; text-overflow: ellipsis;
    overflow: hidden;}

}
</style>
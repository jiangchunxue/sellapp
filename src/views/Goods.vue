<template>
  <div class="goods-div">
  
    <div class="left-div">
    
      <ul class="content">
       
        <div
          @click="clickLeftTitle(index)"
          :class="{leftGoods: true, selected: index == curSelected }"
          v-for="(item,index) in list"
          :key="item.name">
        <img style="width:12px;margin-top:-5px;" v-show="item.type==1" src="../assets/images/discount_1@2x.png" alt="">
        <img style="width:12px" v-show="item.type==2" src="../assets/images/decrease_1@2x.png" alt="">
          <span>{{ item.name }}</span>
        </div>
      </ul>
    </div>

   
    <div class="right-div">
      <ul class="content">
        <div :id="index" v-for="(item,index) in list" :key="item.id">
          <h5>{{ item.name }}</h5>
          <div v-for="child in item.foods" :key="child.id"  class="foods-child">
            <img :src="child.icon" />
            <div class="sty">
              <span class="one">{{child.name}}</span>
          <span class="type">{{child.description}}</span>
          <span class="good">月售{{child.sellCount}}份，好评率100%</span>
          <span class="four">￥{{child.price}} <span>￥{{child.oldPrice}}</span></span>
          <span class="five">
               <div class="reduce">-</div>
                    <span>1</span>
                <div class="add">+</div>
          </span>
         </div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { getGoods } from "../api/apis";
import BScroll from "better-scroll";

export default {
  data() {
    return {
      list: [], 
      curSelected: 0 
    };
  },
  created() {
    getGoods().then(res => {
  
      this.list = res.data.data;
      console.log(res.data);
    });
  },
  mounted() {
   
    new BScroll(document.querySelector(".left-div"), {
      click: true 
    });

    this.rightDiv = new BScroll(document.querySelector(".right-div"));

  },
  methods: {

    clickLeftTitle(index) {
      this.curSelected = index;
      this.rightDiv.scrollToElement(document.getElementById(index), 400);
    }
  }
};
</script>

<style lang="less" scoped>
.selected {
  background-color: #fff;
}

.goods-div {
  display: flex;
  height:400px;

  .left-div {
    width: 80px;
    background-color: #f4f5f7;
    height: 100%;
    overflow: scroll;

    .leftGoods {
      height: 60px;
      display: flex;
      align-items: center; 
      border-bottom: 1px solid #e0e1e3;
       height: 50px;
      margin: 0 4px;
    }
  }

  .right-div {
    flex: 1; 
    // background-color: tomato;
    overflow: scroll;
    h5 {
      line-height: 20px;
      padding: 5px 0;
    } 
    
     
  .foods-child {
      //    width: 100%;
      display: flex;
      justify-content: flex-start;
      position: relative;
       img {
        width: 80px;
        height: 80px;
        padding: 5px 5px;
      }
       .sty {
        //   width: 100%;
        display: flex;
        flex-wrap: wrap;
        //   position: relative;
        //   border: 1px solid #000;
        .one {
          position: absolute;
          margin-left: 2%;
          // width: 100%;
        }
        .type {
          margin-top: 6%;
          margin-left: 2%;
        }
        .good {
          margin-top: 10%;
          margin-left: 1%;
        }
        .four {
          color: red;
          margin-top: 4%;

          margin-left: 1%;
          margin-right: 60%;
          font-size: 14px;
          font-weight: normal;
          span {
            color: rgb(196, 189, 189);
            text-decoration: line-through;
          }
        }
        .five {
          display: flex;
          display: inline-block;
          height: 20px;
          margin-top: -5%;
          margin-left: 60%;
          .reduce {
            position: relative;
            top: 0px;
            left: 0px;
            width: 20px;
            height: 20px;
            color: #fff;
            line-height: 20px;
            background-color: rgb(82, 92, 221);
            text-align: center;
            border-radius: 50%;
            float: left;
          }
          span {
            line-height: 20px;
            position: relative;
            top: 0px;
            left: 0px;
            margin-left: 5px;
            margin-right: 5px;
            float: left;
          }
          .add {
            position: relative;
            top: 0px;
            left: 0px;
            width: 20px;
            height: 20px;
            color: #fff;
            line-height: 20px;
            background-color: rgb(82, 92, 221);
            text-align: center;
            border-radius: 50%;
            float: left;
          }
        }
      }
      }
  }
}
</style>

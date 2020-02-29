<template>
    <div class="merchant">
        <div class="title">
        <div class="left">
            <h3>{{data.name}}</h3>
            <div class="Grade">
                 <img src="../assets/images/star24_on@2x.png" alt="">
                 <img src="../assets/images/star24_on@2x.png" alt="">
                 <img src="../assets/images/star24_on@2x.png" alt="">
                 <img src="../assets/images/star24_on@2x.png" alt="">
                 <img src="../assets/images/star24_half@2x.png" alt="">
                 <span>({{data.ratingCount}})</span>
                 <span>月售{{data.sellCount}}单</span>
            </div>
        </div>
        <div class="right">
           <div class="hart">❤</div>
           <p>以收藏</p>
        </div>
        </div>
        <div class="time">
        <div class="left">
            <div class="top">起送价</div>
            <div class="botton">{{data.minPrice}}<span>元</span> </div>
        </div>
        <div class="left">
             <div class="top">商家配送</div>
            <div class="botton">{{data.deliveryPrice}}<span>元</span> </div>
        </div>
        <div class="left">
             <div class="top">平均配送时间</div>
            <div class="botton">{{data.deliveryTime}}<span>分钟</span> </div>
        </div>
        </div>
        <div class="Notice">
<h2>公告与活动</h2>
<p>{{data.bulletin}}</p>
        </div>
        <div class="Discount">
<img src="../assets/images/decrease_3@2x.png" alt="">
<span>{{ this.data.supports ? this.data.supports[0].description:''}}</span>
        </div>
         <div class="Discount">
<img src="../assets/images/discount_1@2x.png" alt="">
<span>{{ this.data.supports ? this.data.supports[1].description:''}}</span>
        </div>
         <div class="Discount">
<img src="../assets/images/discount_1@2x.png" alt="">
<span>{{ this.data.supports ? this.data.supports[2].description:''}}</span>
        </div>
         <div class="Discount">
<img src="../assets/images/special_3@2x.png" alt="">
<span>{{ this.data.supports ? this.data.supports[0].description:''}}</span>
        </div>
         <div class="Discount">
<img src="../assets/images/special_3@2x.png" alt="">
<span>{{ this.data.supports ? this.data.supports[0].description:''}}</span>
        </div>
         <div class="Discount">
<img src="../assets/images/invoice_1@2x.png" alt="">
<span>{{ this.data.supports ? this.data.supports[0].description:''}}</span>
        </div>
         <div class="Discount">
<img src="../assets/images/guarantee_1@2x.png" alt="">
<span>{{ this.data.supports ? this.data.supports[0].description:''}}</span>
        </div>
        <div class="image">
<h2>商家实景</h2>
<div class="img" >
     <img :src="this.data.pics ? this.data.pics[0]:''" alt="">
    <img :src="this.data.pics ? this.data.pics[1]:''" alt="">
    <img :src="this.data.pics ? this.data.pics[2]:''" alt="">
</div>
        </div>
        <div class="info">
            <h2>商家信息</h2>
            <div class="Discount">
<span>{{ this.data.infos ? this.data.infos[0]:''}}</span>
        </div>
         <div class="Discount">
<span>{{ this.data.infos ? this.data.infos[1]:''}}</span>
        </div>
         <div class="Discount">
<span>{{ this.data.infos ? this.data.infos[2]:''}}</span>
        </div>
         <div class="Discount">
<span>{{ this.data.infos ? this.data.infos[3]:''}}</span>
        </div>
        </div>
    </div>
</template>

<script>
   import { getSeller } from '../api/apis';

export default {
  data() {
    return {
      data: {
          name:'',
      } //商家信息
    };
  },
  created() {
    getSeller().then(res => {
      console.log(res.data.data);
      this.data = res.data.data;
    });
  }
};
</script>

<style lang="less" scoped>
.merchant{
     overflow: scroll;
     height: 400px;
    background-color: rgb(235, 230, 230);
.title{
height: 100px;
width: 100%;
background-color: #fff;
border-bottom: 1px solid rgb(116, 115, 115);
display: flex;
justify-content: space-around;
.left{
    width: 70%;
    margin-left: 20px;
    margin-top: 20px;
    .Grade{
        display: flex;
        margin-top: 10px;
        span{
            margin-left: 10px;
        }

    }
}
.right{width: 30%;
.hart{
    width: 20px;
    color: red;
    margin-top: 20%;
    margin-left: 20%;
}
p{
    margin-left: 5px;
}
}
}
.time{
 height: 100px;
width: 100%;
background-color: #fff;
border-bottom: 1px solid rgb(116, 115, 115);
display: flex;
justify-content: space-around;   

.top{
    font-size: 16px;
    color: rgb(138, 135, 135);
    margin-top: 20px;
}
.botton{
    font-size: 22px;
    color: #000;
    margin-left: 10px;
    span{
        font-size: 14px;
    }
}
}
.Notice{
    width: 100%;
    height: 180px;
    margin-top: 50px;
    border-bottom: 1px solid rgb(116, 115, 115);
    background-color: #fff;
  
   h2{
        margin-left: 20px;
       padding-top: 20px;
   }
   p{
       margin-left: 30px;
       color: red
   }
}
.Discount{
    width: 100%;
    height: 50px;
     border-bottom: 1px solid rgb(116, 115, 115);
    background-color: #fff;
    display: flex;
    img{
        margin-top: 5px;
        width: 40px;
        height: 40px;
        margin-left: 30px;
    }
    span{
        line-height: 50px;
        margin-left: 20px;
    }
}
.image{
   width: 100%;
    height: 180px;
    margin-top: 50px;
    border-bottom: 1px solid rgb(116, 115, 115);
    background-color: #fff;
     h2{
        margin-left: 20px;
       padding-top: 20px;
   }
   .img{
       width: 100%;
       height: 150px;
       display: flex;
       justify-content: space-around;
       img{
           width: 30%;
           height: 120px;
       }
   }
}
.info{
     width: 100%;
    // height: 180px;
    margin-top: 50px;
    border-bottom: 1px solid rgb(116, 115, 115);
    background-color: #fff;
     h2{
        margin-left: 20px;
       padding-top: 20px;
       border-bottom: 1px solid rgb(116, 115, 115);
       padding-bottom: 10px;
   }
}
}
</style>
<template>
    <div class="evaluate-div">
<div class="score">
<div class="scoreLeft">
<h1>3.9</h1>
<h2>综合评分</h2>
<p>高于周边商家69.2%</p>
</div>
<div class="scoreright">
   <div>
        <h5>服务态度：</h5>
    <Row>
         <Col-cl span="12">
            <Rate show-text allow-half v-model="valueCustomText">
                <span style="color: #f5a623">{{ valueCustomText }}</span>
            </Rate>
        </Col-cl>
    </Row>
   </div>
   <div>
        <h5>服务态度：</h5>
     <Row>
         <Col-cl span="12">
            <Rate show-text allow-half v-model="valueCustomText">
                <span style="color: #f5a623">{{ valueCustomText }}</span>
            </Rate>
        </Col-cl>
    </Row>
   </div>
   <div>
      <h5>送达时间<span>44分钟</span> </h5>
   </div>
</div>

</div>
<div class="button">
<Button type="primary">全部 <span>57</span></Button>
 <Button type="info">满意<span>47</span></Button>
 <Button>不满意<span>10</span></Button>

</div>
<div class="content">
 <Icon type="ios-checkmark-circle" />
 <p>只看有内容的评价</p>
</div>
<div v-for="item in  evaluate" :key="item.id" class="box">
   <img :src="item.avatar" alt="">
   <label >{{item.username}} </label>
   <Row>
         <Col-cl span="12">
            <Rate show-text allow-half v-model="valueCustomText">
            </Rate>
        </Col-cl>
    </Row><span>{{item.deliveryTime}}分钟送达</span>
    <p>{{item.text}}</p>
    <p>{{item.rateType}}</p>
    <div v-for="item in  evaluate" :key="item.id" class="item-box">
        <div v-for="child in item.recommend" :key="child.id" class="box2">
            {{child}}
    </div>
</div>
 </div>
    </div>
</template>

<script>
import { getRating } from "../api/apis";
    export default {
        data() {
    return {
         valueText: 3,
        valueCustomText: 3.8,
      evaluate: {
         
      } 
    };
    
  }, 
  created() {
    getRating().then(res => {
      console.log(res.data.data);
      this.evaluate = res.data.data;
      console.log( this.evaluate);
    });
  }
    }
</script>

<style lang="less" scoped>
.evaluate-div{
    height: 400px;
     overflow: scroll;
     background-color: #f4f5f7;
.score{
    display: flex; 
    background-color: #fff;
justify-content: flex-start;
.scoreLeft{
    width: 40%;
    border-right: 1px solid #ccc;
    padding-bottom: 20px;
    h1{
        color: yellowgreen;
        padding-top: 20px;
        text-align: center;
    }
    h2{
        text-align: center;
    }
    p{
       text-align: center;  
    }
}
.scoreright{
    flex: 1;
    padding-bottom: 20px;
    // display: flex;
    padding-top: 20px;
   
   padding-bottom: 20px;  
   h5{
      
      padding-left: 20px;
      float: left; position: relative;
       
   }
.ivu-row{
    display: inline;
    margin-left: 20px;
}


   span{
       color: yellowgreen;
       margin-left: 10px;
   }
}
}
.button{
 background-color: #fff;
 margin-top: 20px; padding-top: 20px;
     padding-bottom: 20px;
     border-bottom: 1px solid #ccc;
 button{
     margin-left: 20px;
     span{
         font-size: 10px;
         
     }
    
 }
}
.content{
    background-color: #fff;
    padding-top: 20px;
    padding-bottom: 20px;padding-left: 20px;
     border-bottom: 1px solid #ccc;
     display: flex;

}
.box{
    height: 200px;  padding-left: 20px;padding-top: 20px;
    background-color: #fff;
     border-bottom: 1px solid #ccc;
     img{
         width: 50px;
         height: 50px;
         float: left;
       
     }
     span{
         position: relative;
         right: -260px;
         bottom: 23px;
     }
     p{
         margin-top: 20px;
         float: left;
     }
     
         .box2{
         display:block;
         float: left;
         width: 60px;
         height: 20px;
         border: 1px solid #ccc;
         margin-right: 5px;
    
     }
}
}
</style>
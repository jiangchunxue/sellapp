<template>
    <div>
购物车
<div class="goodslist" v-for="list  in  getTotal" :key="list.id">
    <div>
        <span class="single">{{list.name}}</span>
        <span class="single">{{list.count*list.price}}</span>
        <p class="btn single">
 <button class="reduce"  @click="clickDec(list.name,-1)">-</button>
                    <span>{{list.num}}</span>
                    <button class="add" @click="clickAdd(list.name,+1)">+</button>

        </p>
    </div>
     </div>
    </div>
</template>

<script>
import { getGoods } from "../api/apis";
export default {
    data(){
        return{};
    },
    computed: {
      getTotal(){
          return this.$store.getters.total
      },
       goodslist(){
      return this.$store.state.goodslist;
    },
    },
    created() {
    getGoods().then(res => {
  
      // this.list = res.data.data;
      this.$store.commit('initGoodsList', res.data.data)
      // console.log(res.data);
    });
  },
};
</script>

<style lang="less" scoped>
.goodslist{
    // line-height: 40px;
    padding: 20px 0;
    border-bottom: 1px solid rgb(163, 162, 162);
display: flex;
position: relative;
.btn {
    display: inline;
    margin-right: 0;
}
    button{
         background-color: #fff;
              border: 1px solid rgb(97, 111, 243);
              width: 20px;
              height: 20px;
              border-radius: 20px;background-color: #049fdb;
              color: #fff;
              text-align: center;
             
    }
     span {
              padding: 0 20px;
            }
           
}
</style>
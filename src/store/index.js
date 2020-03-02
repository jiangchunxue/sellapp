import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
 //存放所有交互数据
    state:{

goodslist:[]
    },
    mutations:{
        initGoodsList(state, newArr) {
            state.goodslist = newArr
        },
        clickDec(state,item){
            for(let i of state.goodslist){
                for(let j of i.foods){
                    if(j.name==item){
                        j.num-=1
                        
                    }
                }
            }
          },
         clickAdd(state,item){
           for(let i of state.goodslist){
               for(let j of i.foods){
                   if(j.name==item){
                       j.num+=1
                       
                   }
               }
           }
          }
          
    },
    getters:{
        total(state){
            var arr=[]
            var resultArr=[];
            // arr.filter(item=>item.name==store.goodslist.foods.name)
            for(let obj of state.goodslist){
                obj.foods.map((v) =>{
                    if(v.num>0&&v.num!=0){
                       arr.push({name:v.name,count:v.num,price:v.price})
                    }
                })
            }
           var flag;
           for(var i=0;i<arr.length;i++){
             flag=true;
             for(let j=0;j<resultArr.length;j++){
                 if(resultArr[j].name==arr[i].name){
                     flag=false;
                     break;
                 }
             }
             if(flag){
                 resultArr[resultArr.length]=arr[i];
             }
           } 
           console.log(resultArr);
           return resultArr
     }
    }
});



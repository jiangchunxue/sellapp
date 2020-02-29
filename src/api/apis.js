import axios from 'axios'
let req = axios.create({
    baseURL: 'http://192.168.124.3:3000', 
    timeout:  10000  
})

//请求商家信息 
export function getSeller(){
    return req.get('/api/seller')
}
export function getGoods(){
    return req.get('/api/goods')
}
//请求评论信息
export function getRating(){
    return req.get('/api/ratings')
}
import axios from 'axios';
import Vue from 'vue';

if (process.browser) {
  var cart = localStorage.getItem('cart');
  var cartCount = localStorage.getItem('cartCount');
}
export const state = () => ({
    products: [],
    single: [],
    users: [],
    cart: cart ? JSON.parse(cart) : [],
    cartCount: cartCount ? parseInt(cartCount) : 0,
    totalPrice:0
   
  })


export const mutations = {
  setProducts: (state, products) => (state.products = products),
  setUsers: (state, users) => (state.users = users),
  setSinglePage: (state, single) => (state.single = single),
  addToCart(state, single) {
    //if this product already in my cart this.quantity +1
    let found = state.cart.find(product => product.id == single.id);
    if(found){
      found.quantity ++;
      found.totalPrice = found.quantity * found.price;


        let mystringCart = JSON.stringify(state.cart);
        window.localStorage.setItem('cart', mystringCart);
      // if this a new in cart add to to quantity 1, add to totalPrice the price , push it to my cart and add 1 to cartCount
    }else{
      Vue.set(single, 'quantity', 1);
      Vue.set(single, 'totalPrice', single.price);
      state.cart.push(single);

      let mystringCart = JSON.stringify(state.cart);
      window.localStorage.setItem('cart', mystringCart);
    }
    state.cartCount++;
    
},
totalPrice(state){
    console.log(state)
    console.log(state.cartCount)
    let total = 0
    for (let item of state.cart) {
      total += item.totalPrice;
    }
    window.localStorage.setItem('mytotalPrice', total);
    // window.localStorage.setItem('cartCount', state.cartCount);
      state.totalPrice = total
    return total;
},
deletItemfromcart(state, index){
  state.cart.splice(index, 1);
  let mystringCart = JSON.stringify(state.cart);
  window.localStorage.setItem('cart', mystringCart);
  

},
addToqty(state, index){
state.cart[index].quantity +=1;
state.cart[index].totalPrice = state.cart[index].quantity * state.cart[index].price;
state.cartCount +=1;

console.log(index);
},
remvQty(state, index){
state.cart[index].quantity -= 1;
state.cart[index].totalPrice = state.cart[index].quantity * state.cart[index].price;
state.cartCount -=1;
}
};
export const actions = {
  async fetchProducts({commit}){
    const response = await axios.get('https://vue-e-commerce-databse.herokuapp.com/products')

    commit('setProducts',response.data)
},
async fetchUsers({commit}){
  const response = await axios.get('https://vue-e-commerce-databse.herokuapp.com/users')

  commit('setUsers',response.data)
},
async fetchSinglePage({commit}, id){
  const response = await axios.get(`https://vue-e-commerce-databse.herokuapp.com/products/${id}`)
  commit('setSinglePage',response.data,id)
},
};
export default {
  state,
  actions,
  mutations
}
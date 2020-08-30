import axios from 'axios';
import Vue from 'Vue';

export const state = () => ({
    users: [],
    products: [],
    single: [],
    mylocalStorageCard: JSON.parse(localStorage.getItem("cart")),
    mylocalStorageTolalPrice: localStorage.getItem("totalprice"),
    mylocalStorageQty:localStorage.getItem("qty"),
  })



export const mutations = {
  
  setUsers: (state, users) => (state.users = users),
  setSinglePage: (state, single) => (state.single = single),
  setProducts: (state, products) => (state.products = products),
//cart functions

    sitAddFromQuantty(state, index) {
     const myclickdObject =state.mylocalStorageCard[index]
      myclickdObject.quantity++;
      state.mylocalStorageQty++;

      state.mylocalStorageTolalPrice =
      +state.mylocalStorageTolalPrice + +myclickdObject.price;
    },
    sitRemoveFromQuantty(state,index){
      const myclickdObject =state.mylocalStorageCard[index]
        // console.log(myclickdObject)
      myclickdObject.quantity--;
      state.mylocalStorageQty--;

      state.mylocalStorageTolalPrice =
        +state.mylocalStorageTolalPrice + -myclickdObject.price;
      if (myclickdObject.quantity === 0) {
        state.mylocalStorageCard.splice(index, 1);
      }
      // console.log(state.mylocalStorageCard,myclickdObject,state.mylocalStorageQty,state.mylocalStorageTolalPrice);
    },
        sitmydelete(state,index) {
      const myclickdObject =state.mylocalStorageCard[index]
      state.mylocalStorageCard.splice(index, 1);
      state.mylocalStorageTolalPrice =
        +state.mylocalStorageTolalPrice +
        -myclickdObject.price * myclickdObject.quantity;
      state.mylocalStorageQty =
        +state.mylocalStorageQty + -myclickdObject.quantity;
      
      
    },
    
    savelocalstorage(state) {
      // localStorage
      localStorage.setItem("totalprice", state.mylocalStorageTolalPrice);
      localStorage.setItem("qty", state.mylocalStorageQty);
      let mystringCart = JSON.stringify(state.mylocalStorageCard); //convert  my array of opject to string to save it on localStorage
      localStorage.setItem("cart", mystringCart); //set cart string
      // // localStorage
    },
    // old
 addToCart(state, single) {
      if (
        state.mylocalStorageCard === null||
         state.mylocalStorageCard.length === 0 
      ){
      state.mylocalStorageCard = [];
      state.single.quantity = 1
      state.mylocalStorageCard.push(state.single)
      state.mylocalStorageTolalPrice =
      +state.mylocalStorageTolalPrice + +state.single.price;
      state.mylocalStorageQty++;
      // savelocalStorage
      localStorage.setItem("totalprice", state.mylocalStorageTolalPrice);
      localStorage.setItem("qty", state.mylocalStorageQty);
      let mystringCart = JSON.stringify(state.mylocalStorageCard); //convert  my array of opject to string to save it on localStorage
      localStorage.setItem("cart", mystringCart); //set cart string
     // savelocalStorage
      } else if (
        state.mylocalStorageCard != null &&
        state.mylocalStorageCard.length > 0
      ) {
       //if this the new item but not the first in cart
        let mystringCartFromLocalStorage = localStorage.getItem("cart"); //get my string cart from localStorage
        let myObject = JSON.parse(mystringCartFromLocalStorage); // return my sting to array of objects
        console.log(state.mylocalStorageCard);
        const findInMylocalStorageCard = state.mylocalStorageCard.find(
          //search in mylocalStorageCard array of my cliked item
          item => item.id === single
        );  
        if (findInMylocalStorageCard != undefined) {
          //if this item in my cart. do not add it again  add to qty ++
          findInMylocalStorageCard.quantity++;
          state.mylocalStorageQty++;

          state.mylocalStorageTolalPrice =
            +state.mylocalStorageTolalPrice + +findInMylocalStorageCard.price;
          // savelocalStorage
          localStorage.setItem("totalprice", state.mylocalStorageTolalPrice);
          localStorage.setItem("qty", state.mylocalStorageQty);
          let mystringCart = JSON.stringify(state.mylocalStorageCard); //convert  my array of opject to string to save it on localStorage
          localStorage.setItem("cart", mystringCart); //set cart string
        // savelocalStorage
        }else{
          //if i have items in my cart but state selected item not found
          state.single.quantity = 1; //add new key quantity = 1
          myObject.push(state.single); //push this item to my local storedg cart
          state.mylocalStorageCard = myObject; //add my local storedg cart to my cart opject
          state.mylocalStorageTolalPrice =
            +state.mylocalStorageTolalPrice + +state.single.price;
          state.mylocalStorageQty++;
          // savelocalStorage
          localStorage.setItem("totalprice", state.mylocalStorageTolalPrice);
          localStorage.setItem("qty", state.mylocalStorageQty);
          let mystringCart = JSON.stringify(state.mylocalStorageCard); //convert  my array of opject to string to save it on localStorage
          localStorage.setItem("cart", mystringCart); //set cart string
        // savelocalStorage
        }
      }
    console.log(state)
    
}
};
 
//fetchdata
export const actions = {
  async fetchProducts({commit}){
    const myres = await axios.get('https://vue-e-commerce-databse.herokuapp.com/products')

    commit('setProducts',myres.data)
},
async fetchSinglePage({commit}, id){
  const response = await axios.get(`https://vue-e-commerce-databse.herokuapp.com/products/${id}`)
  commit('setSinglePage',response.data,id)
},
async fetchUsers({commit}){
  const response = await axios.get('https://vue-e-commerce-databse.herokuapp.com/users')

  commit('setUsers',response.data)
},

nuxtClientInit ({commit}) {
      // I want get here state auth saved by persistedstate package
    },
    addNumber(context, number) {
    context.commit("ADD_NUMBER", number);
    }

};

const getters = {
  getQty(state){
    return state.mylocalStorageQty
  },
  getTotalPric(state){
    return state.mylocalStorageTolalPrice
  },
  getmylocalStorageCard(state){
    return state.mylocalStorageCard
  }

};

//fetchdata
export default {
  state,
  actions,
  mutations,
  getters
}

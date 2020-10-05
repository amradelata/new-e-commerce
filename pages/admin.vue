<template>
  <div class="top" id="admin">
    <adminNav />
    <v-card-text class="form" style="padding-top: 100px">
      <v-form class="px-3" ref="form">
        <v-text-field v-model="addProductValue" label="NAME" :rules="inputRules"></v-text-field>
        <v-text-field v-model="addProductImg" label="IMAGE" :rules="inputRules"></v-text-field>
        <v-text-field v-model="addProductPric" label="PRICE" :rules="inputRules"></v-text-field>
        <v-text-field v-model="addProductCategory" label="CATEGORY" :rules="inputRules"></v-text-field>
        <label>
          <h3>first cabetal in category is capetal</h3>
        </label>
        <button @click="addProduct" class="link">Add product</button>
      </v-form>
    </v-card-text>

    <div class="admisCards">
      <div v-for="(product,index) in products" :key="product.id" class="adminCard">
        <div class>
          {{product.id}}
          <div class="img" :style="{ backgroundImage: 'url(' + product.img_url + ')' }"></div>
        </div>
        <div :id="product.id" ref="span">
          {{product.price}}
          <br />
          {{product.name}}
        </div>
        <div class>
          <button
            @click="edit(index)"
            :style="{'display': change}"
            class="link"
            ref="edit"
            id="edit"
          >edit</button>
          <input
            class="input is-success"
            type="text"
            :style="{'display': input}"
            :value="product.name"
            ref="input1"
            id="input"
          />
          <input
            class="input is-success"
            type="text"
            :style="{'display': input}"
            :value="product.img_url"
            ref="input2"
            id="input"
          />
          <input
            class="input is-success"
            type="text"
            :style="{'display': input}"
            :value="product.price"
            ref="input3"
            id="input"
          />
          <input
            class="input is-success"
            type="text"
            :style="{'display': input}"
            :value="product.category"
            ref="input4"
            id="input"
          />
          <button
            @click="remove(index = product.id)"
            :style="{'display': delet}"
            class="danger"
            ref="delete"
            id="delete"
          >delete</button>
          <br />
          <button
            @click="save(index)"
            :style="{'display': saveChang}"
            class="success"
            ref="save"
            id="save"
          >save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import adminNav from "../components/adminNav";
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
const API = "https://vue-e-commerce-databse.herokuapp.com/products";
export default {
  components: {
    adminNav
  },
  data() {
    return {
      products: [],
      inputRules: [v => v.length >= 3 || "Minimum length is 3 characters"],
      addProductValue: "",
      addProductImg: "",
      addProductPric: "",
      addProductCategory: "",
      saveChang: "none",
      input: "none",
      change: "inline-block",
      delet: "inline-block",
      app: this.$store.state.products.products,
      scrollToTop: true
    };
  },
  methods: {
    async addProduct() {
      if (this.$refs.form.validate()) {
        const res = await axios.post(API, {
          img_url: this.addProductImg,
          name: this.addProductValue,
          price: Number(this.addProductPric),
          in_my_cart: false,
          discount: 0,
          category: this.addProductCategory,
          description:
            "Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
        });
        this.products.push(res.data);
        this.addProductValue = "";
        this.addProductImg = "";
        this.addProductPric = "";
        this.addProductCategory = "";
      }
    },
    async remove(index) {
      const res = await axios.delete(API + "/" + index);
      const dele = await axios.get(API);
      this.products = dele.data;
      console.log(index);
    },
    edit(index) {
      const input1 = this.$refs["input1"][index];
      const input2 = this.$refs["input2"][index];
      const input3 = this.$refs["input3"][index];
      const input4 = this.$refs["input4"][index];
      const edit = this.$refs["edit"][index];
      const delet = this.$refs["delete"][index];
      const save = this.$refs["save"][index];
      // style
      edit.style.display = "none";
      delet.style.display = "none";
      save.style.display = "inline-block";
      input1.style.display = "inline-block";
      input2.style.display = "inline-block";
      input3.style.display = "inline-block";
      input4.style.display = "inline-block";
      // style
      // console.log(input1, input2, input3, input4);
    },
    async save(index) {
      const input1 = this.$refs["input1"][index];
      const input2 = this.$refs["input2"][index];
      const input3 = this.$refs["input3"][index];
      const input4 = this.$refs["input4"][index];
      const span = this.$refs["span"][index].id;
      // inputVale
      const input1Value = this.$refs["input1"][index].value;
      const input2Value = this.$refs["input2"][index].value;
      const input3Value = this.$refs["input3"][index].value;
      const input4Value = this.$refs["input4"][index].value;
      // console.log(input1Value, input2Value, input3Value, input4Value);
      // inputVale
      const edit = this.$refs["edit"][index];
      const delet = this.$refs["delete"][index];
      const save = this.$refs["save"][index];
      // style
      edit.style.display = "inline-block";
      delet.style.display = "inline-block";
      save.style.display = "none";
      input1.style.display = "none";
      input2.style.display = "none";
      input3.style.display = "none";
      input4.style.display = "none";
      // style
      // console.log(input1, input2, input3, input4);

      const res = await axios.patch(API + "/" + span, {
        name: input1Value,
        img_url: input2Value,
        price: Number(input3Value),
        category: input4Value
      });
      const edi = await axios.get(API);
      this.API = edi.data;
    }
  },
  async created() {
    const res = await axios.get(API);
    this.products = res.data;
  }
};
</script>


<style scoped>
h3 {
  margin-bottom: 20px;
}
.link,
.danger,
.success {
  color: #fff;
  padding: 10px;
  border-radius: 5px;
}
.link {
  background: #008bff;
}
.danger {
  background: #ff6b81;
}
.success {
  background: #7bed9f;
}

.admisCards {
  display: flex;
  flex-wrap: wrap;
}
.adminCard {
  flex-basis: calc(33.333% - 20px);
  display: inline-block;
  margin: 10px;
  overflow: hidden;
  /* background: #ccc; */
  text-align: center;
  padding: 20px;
}
.img {
  width: 100%;
  height: 100px;
  background-size: contain;
  background-position: center center;
}
#input {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 5px 0;
  display: block;
}
@media screen and (max-width: 768px) {
  .adminCard {
    flex-basis: calc(100% - 20px);
  }
  #admin {
    text-align: center;
  }
}
</style>
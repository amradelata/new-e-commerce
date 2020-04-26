<template>
  <div class="container top" id="admin">
    <adminNav />
    <div class="container relatev">
      <div class="sections">
        <v-card-text class="form">
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
        <!--  -->
        <table v-for="(product,index) in products" :key="product.id">
          <tr>
            <td>
              {{product.id}}
              <div class="img" :style="{ backgroundImage: 'url(' + product.img_url + ')' }"></div>
            </td>
            <td>
              <!-- <h3 class="inline">{{product.name}}</h3> -->
              <span :id="product.id" ref="span">{{product.name}}</span>
              <br />
              <h5 style="color:#006fcc" class="inline">{{product.price + " $"}}</h5>
            </td>
            <td class="right">
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
              <button
                @click="save(index)"
                :style="{'display': saveChang}"
                class="success"
                ref="save"
                id="save"
              >save</button>
            </td>
          </tr>
        </table>
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
.relatev {
  position: relative;
}
.sections {
  width: 70vw;
  position: absolute;
  right: 0;
}
.content {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%);
}
.content span {
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-50%);
  font-family: fantasy;
  font-size: 39px;
}
h1,
p {
  color: #000;
}
.img {
  height: 50px;
  width: 50%;
  display: inline-block;
  background-size: contain;
  background-position: center center;
}
.card {
  padding: 20px;
  text-align: center;
  /* margin-bottom: 35px; */
}
.next-step {
  background: #91ce3f;
  width: 100%;
  left: 0;
  margin-top: 40px;
  position: absolute;
  color: #fff;
  padding: 10px;
  border-radius: 3px;
}
.next-step:focus {
  background: #008bff;
}

/*  */
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 20px;
  text-align: center;
}

.right {
  text-align: left;
  width: 25%;
}
.inline {
  display: inline;
}
#admin input {
  border: 1px solid #ccc;
  margin: 5px 0;
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
.form {
  height: 400px;
  margin-bottom: 50px;
}
</style>
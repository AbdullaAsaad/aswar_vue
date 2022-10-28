<template>
  <div>
    <div class="mb-3">
      <label class="form-label">Name </label>
      <input type="text" class="form-control" v-model="name" />
    </div>
    <div class="mb-3">
      <label class="form-label"> Description</label>
      <textarea class="form-control" rows="3" v-model="description"></textarea>
    </div>
    <div class="mb-3">
      <label class="form-label">Image </label>
      <input type="text" class="form-control" v-model="image" />
    </div>

    <div class="mb-3">
      <button type="button" class="btn btn-primary" @click="updateProduct">
        Update
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "EditProduct",
  data() {
    return {
      name: "",
      description: "",
      image: "",
      expired: "",
    };
  },
  created() {
    this.getProductById();
  },
  methods: {
    async getProductById() {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/products/${this.$route.params.id}`
        );
        this.name = response.data.product.name;
        this.description = response.data.product.description;
        this.image = response.data.product.image;
        this.expired = response.data.product.expired;
        console.log(response.data.product);
      } catch (error) {
        console.log(error);
      }
    },
    async updateProduct() {
      try {
        await axios.put(
          `http://127.0.0.1:8000/api/products/${this.$route.params.id}`,
          {
            name: this.name,
            description: this.description,
            image: this.image,
            expired: this.expired,
          }
        );
        this.name = "";
        this.description = "";
        this.image = "";
        this.expired= ""
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

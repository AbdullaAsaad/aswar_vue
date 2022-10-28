<template>
  <div>
    <h2 class="my-3 text-danger">This is all expired Products</h2>

    <table class="table">
      <thead>
        <tr>
          <th scope="col" class="">#</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Image</th>
          <th scope="col">Expired</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.image }}</td>
          <td>{{ product.expired }}</td>
          <td>
            <button
              type="button"
              class="btn btn-danger"
              @click="deleteProduct(product.id)"
            >
              Delete
            </button>
            <router-link
              :to="{ name: 'Edit', params: { id: product.id } }"
              class="btn btn-warning"
              >Edit</router-link
            >
            <router-link to="{name: /create , params:{id:product.id}}"
              >Create</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "expired",
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.expiredProducts();
  },
  methods: {
    async expiredProducts() {
      try {
        const response = await axios
          .get("http://127.0.0.1:8000/api/products")
          .then((this.products = response.data));
      } catch (err) {
        console.log(err);
      }
    },

    async deleteProduct(id) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/products/${id}`);
        this.expiredProducts();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

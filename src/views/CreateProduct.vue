<template>
  <div>
    <div class="mb-3">
      <label class="form-label">Name</label>
      <input type="text" class="form-control" v-model="name" />
    </div>
    <div class="mb-3">
      <label class="form-label">Description</label>
      <textarea class="form-control" rows="3" v-model="description"></textarea>
    </div>
    <div class="mb-3">
      <label class="form-label">Image</label>
      <input type="text" class="form-control" v-model="image" />
    </div>
    <div class="mb-3">
      <label class="form-label">expired</label>
      <input type="text" class="form-control" v-model="expired" />
    </div>

    <div class="mb-3">
      <button type="button" class="btn btn-primary" @click="saveProduct">
        Save
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CreateProduct",
  data() {
    return {
      name: "",
      description: "",
      image: "",
      expired: "",
    };
  },
  methods: {
    async saveProduct() {
      try {
        await axios.post("http://127.0.0.1:8000/api/products/", {
          name: this.name,
          description: this.description,
          image: this.image,
          expired: this.expired,
        });

        this.name = "";
        this.description = "";
        this.image = "";
        this.expired = "";
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

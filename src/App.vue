<template>
  <div class="bg-gray-200 h-screen w-screen">
    <div>
      <div id="app" class="p-0 m-0">
        <nav class="navbar navbar-expand navbar-dark bg-primary">
          <span class="navbar-brand mx-5"><h3>Aswar</h3></span>
          <div class="navbar-nav">
            <li class="nav-item px-2">
              <router-link to="/" class="navbar-brand">Home</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link to="/expired" class="navbar-brand"
                >Expired</router-link
              >
            </li>
          </div>
          <div class="ms-auto px-5">
            <router-link
              to="/login"
              class="btn btn-light px-4 text-primary fs-6 fw-bold d-flex flex-row-reverse"
              >Login</router-link
            >
          </div>
        </nav>
      </div>
    </div>

    <div class="mt-24 md:container md:mx-auto">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <header class="header" v-if="!showSearchBar || $route.name === 'Login'">
    <button title="Menu" @click="sidebarOpen = true">
      <i class="mdi mdi-menu"></i>
    </button>
    <h1 class="header-title" @click="home">
      <img class="header-title-logo" src="@/assets/imgs/logo.svg" alt="LOGO" />
      Notatnik
    </h1>
    <transition name="sidebar">
      <nav class="header-nav" v-show="sidebarOpen">
        <ul>
          <li>
            <button @click="sidebarOpen = false" title="Zamknij">
              <i class="mdi mdi-close"></i>
            </button>
          </li>
          <li>
            <router-link :to="{ name: 'Start' }">Start</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Notes' }">Notes</router-link>
          </li>
          <li v-if="!$store.state.user">
            <router-link :to="{ name: 'Login' }">Zaloguj się</router-link>
          </li>
        </ul>
      </nav>
    </transition>
    <button
      title="Szukaj"
      @click="showSearchBar = true"
      v-if="$route.name !== 'Login'"
    >
      <i class="mdi mdi-magnify"></i>
    </button>
    <div class="fill" v-else></div>
  </header>
  <header class="header header--search" v-else>
    <label class="primary-input">
      <i class="mdi mdi-magnify"></i>
      <input type="text" placeholder="Szukaj..." v-model.trim="searchStr" />
      <button @click="hideSearchbar" title="Zamknij wyszukiwanie">
        <i class="mdi mdi-close-circle-outline"></i>
      </button>
    </label>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      sidebarOpen: false,
      showSearchBar: false,
    }
  },
  methods: {
    hideSearchbar() {
      this.showSearchBar = false
      this.searchStr = ''
    },
    home() {
      if (this.$route.name != 'Start') this.$router.push({ name: 'Start' })
    },
  },
  computed: {
    searchStr: {
      get() {
        return this.$store.state.searchStr
      },
      set(val) {
        this.$store.commit('setSearch', val)
      },
    },
    routeName() {
      return this.$route.name
    },
  },
  watch: {
    routeName() {
      this.sidebarOpen = false
    },
  },
}
</script>

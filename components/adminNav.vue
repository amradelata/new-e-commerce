<template>
  <v-card
    class="mx-auto fixed"
    height="400"
    width="256"
  >
    <v-navigation-drawer
      class="deep-purple accent-4"
      dark
      permanent
    >
    <!--  -->
    <nuxt-link to="admin">
      <v-list>
        <v-list-item
            link
        >
          <v-list-item-icon>
            
            <v-icon>fas fa-search</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Control panel</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </nuxt-link>
<!--  -->
<nuxt-link to="orders">
      <v-list>
        <v-list-item
            link
        >
          <v-list-item-icon>
            
            <v-icon>mdi-cart</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Orders</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
</nuxt-link>
<!--  -->
<nuxt-link to="users">
      <v-list>
        <v-list-item
            link
        >
          <v-list-item-icon>
            
            <v-icon>fas fa-edit</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>user</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
</nuxt-link>
      <!--  -->
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>-</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
  }
</script>

<style scoped>
.fixed{
  position: fixed;
  top: 150px;
}
</style>

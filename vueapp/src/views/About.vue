<template>
  <v-list>
    <v-list-item v-for="item in items" v-bind:key="item">
      <v-list-item-avatar>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'App',

  components: {
    //
  },

  data: () => ({
    items: [
      {
        icon: 'mdi-alert',
        title: '1'
      },
      {
        icon: 'mdi-alert-box',
        title: '2'
      },
      {
        icon: 'mdi-alert-circle',
        title: '3'
      }
    ]
  })
}
</script>

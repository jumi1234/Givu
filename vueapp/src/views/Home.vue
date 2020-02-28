<template>
  <v-app>
    <v-carousel
      cycle
      height="450"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      >
        <v-row
            class="fill-height"
            align="center"
            justify="center"
        >
        </v-row>
      </v-carousel-item>
      <card></card>
    </v-carousel>
    <v-content>
      <card></card>
    </v-content>
  </v-app>
</template>
<script>
import Card from './Card'
export default {
  components: {
    card: Card
  },
  data () {
    return {
      items: [
        {
          src: require('../assets/clothes.jpg')
        },
        {
          src: require('../assets/dogcat.jpg')
        },
        {
          src: require('../assets/dogcat.jpg')
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ]
    }
  }
}
</script>

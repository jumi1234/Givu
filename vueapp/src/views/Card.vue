<template>
  <v-container>
    <v-row>
      <v-col
      v-for="(item, i) in items"
      :key="i"
      lg="3"
      >
        <v-card class="mx-auto fill-height" outlined>
          <v-img height="150" :src="item.src"></v-img>
          <div style="height:100px">
            <v-card-title class="title1">
              {{ item.title }}
            </v-card-title>
            <v-card-subtitle>
              {{ item.company }}
            </v-card-subtitle>
          </div>
          <v-flex>
            <v-card-text>
              <v-slider
              v-model="item.val"
              track-color="grey lighten-2"
              readonly
              >
              </v-slider>
              <v-row>
                <v-col>
                  <v-icon>mdi-calendar</v-icon>
                  {{ item.expired }}일 남음
                </v-col>
                <v-col>
                  {{ item.amount }}원
                </v-col>
              </v-row>
            </v-card-text>
          </v-flex>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'https://cdn.pixabay.com/photo/2017/09/08/18/20/garbage-2729608_1280.jpg',
          title: '지구를 구해요',
          company: '세이브어스',
          expired: '8',
          amount: '12,000,000',
          val: 25,
          color: 'grey lighten-2'
        },
        {
          src: 'https://cdn.pixabay.com/photo/2015/09/01/21/00/coffee-917613_1280.jpg',
          title: '누가 수확한 원두를 먹고 계신가요?',
          company: '아카페',
          expired: '15',
          amount: '4,000,000'
        },
        {
          src: 'https://cdn.pixabay.com/photo/2017/06/09/16/06/year-greetings-2387250_1280.jpg',
          title: '우리 문화재, 우리가 구해요',
          company: '문화사랑연합',
          expired: '1',
          amount: '30,000,000'
        },
        {
          src: 'https://cdn.pixabay.com/photo/2016/03/28/10/05/kitten-1285341_1280.jpg',
          title: '길고양이들에게 따뜻한 집을 만들어 주세요',
          company: '우리동네 고양이',
          expired: '22',
          amount: '900,000'
        }
      ]
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Nanum+Gothic|Marvel&display=swap');
  template {
    font-family: 'Marvel' !important;
  }

  .title1 {
    text-decoration: none;
    font-weight: bold !important;
    font-size: medium !important;
    color: black !important;
  }

  .company {
    font-weight: normal !important;
    font-size: smaller;
    margin: auto;
  }
</style>

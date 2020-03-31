<template>
<v-app>
  <!-- <v-navigation-drawer v-model="drawer" fixed app>
    <v-toolbar flat color="transparent">
      <v-toolbar-title>Account</v-toolbar-title>
    </v-toolbar>
    <v-list>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.icon"
        no-action
      >
        <template v-slot:activator>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
        <v-list
          v-for="subItem in item.subItems"
          :key="subItem.title"
          @click="subItem.to"
        >
          <v-list-item-content>
            <v-list-item-title>{{ subItem.title }}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>{{ subItem.icon }}</v-icon>
          </v-list-item-action>
        </v-list>
      </v-list-group>
     <v-list-item v-for="item in items" :key="item.title" v-bind:to="item.to">
        <v-list-item-avatar>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer> -->
  <v-card color="grey lighten-4" height="10%" flat>
    <v-toolbar>
      <v-row align="center" justify="space-around">
        <!-- drawer -->
        <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->
        <div>
          <v-toolbar-items>기부하기</v-toolbar-items>
          <v-toolbar-items style="padding-left:15px"><router-link :to="{name: 'apply'}">프로젝트 올리기</router-link></v-toolbar-items>
        </div>

        <v-toolbar-title class="givu" style="padding-right:55px"><router-link :to="{name: 'home'}">GIV-U</router-link></v-toolbar-title>
        <!-- <v-toolbar-content @click="!$store.state.user ? signinWithGoogle() : signOut()">{{ $store.state.user ? $store.state.user.displayName + '님' : '로그인' }}</v-toolbar-content> -->
        <div v-if="!$store.state.user">
          <v-toolbar-content @click="signinWithGoogle()">로그인</v-toolbar-content>
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </div>
        <div v-else>
          <v-menu
          nudge-bottom="55"
          transition="slide-y-transition"
          bottom
          >
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on">
                <v-avatar>
                  <img
                  :src="$store.state.user.photoURL"
                  class="avatar"
                  >
                </v-avatar>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
              >
                <v-list-item-title @click="item.title == '로그아웃' ? signOut() : $router.push('Mypage')">{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </div>
      </v-row>
    </v-toolbar>
  </v-card>

  <v-content>
    <router-view></router-view>
  </v-content>
</v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    drawer: false,
    items: [
      {
        icon: 'mdi-alert',
        title: '마이페이지',
        active: true,
        subItems: [
          {
            title: 'dashboard',
            to: '/'
          },
          {
            title: 'about',
            to: '/about'
          }
        ]
      },
      {
        title: '로그아웃'
      }
    ]
  }),

  methods: {
    test () {
      this.drawer = !this.drawer
    },
    signinWithGoogle () {
      const provider = new this.$firebase.auth.GoogleAuthProvider()
      this.$firebase.auth().languageCode = 'ko'
      this.$firebase.auth().signInWithRedirect(provider)
    },
    signOut () {
      this.$firebase.auth().signOut()
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nanum+Gothic|Marvel&display=swap');
  v-toolbar-items {
    font-family: 'Nanum Gothic' !important;
    cursor: pointer;
  }

  v-spacer {
    margin: 10% !important;
  }

  .signin {
    margin-right: 5%;
  }

  a {
    text-decoration: none !important;
    color: black !important;
  }

  .givu a {
    font-family: 'Marvel';
    font-weight: 300;
    font-size: x-large;
  }
  v-toolbar-content a {
    font-size: small;
  }
  .avatar {
    width: 35px !important;
    height: 35px !important;
  }
</style>

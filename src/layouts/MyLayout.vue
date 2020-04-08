<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <!-- <q-bar>
        <div class="text-weight-thin">
            Email us at : support@agrolog.com
        </div>
      <q-space />
        <div class="text-weight-thin">
          Call us for any questions : (234) 987 555 123
        </div>
      </q-bar>-->
      <q-bar class="bg-white text-grey-9 q-px-xl gt-xs" style="height: 80px">
        <q-img src="statics/icons/logo.png" style="height: 60px; max-width: 55px" srcset />
        <q-space />
        <div class="row">
          <q-btn color="primary" size="md" label="Purchase from BG" />
        </div>

        <div class="row">
          <q-btn color="primary" size="md" label="MembersFinance BG Members" />
        </div>
      </q-bar>
      <q-toolbar>
        <!-- <q-toolbar-title>
          <q-btn flat no-caps dense :to="{name: 'home'}">
            <q-img src="statics/icons/logo-white.png" style="width: 50px" />
            <div class="text-h5">Agrolog</div>
          </q-btn>
        </q-toolbar-title>-->

        <div class="gt-xs">
          <!-- <q-btn flat no-caps="" label="HOME" /> -->
          <q-btn flat no-caps label="About" :to="{name: 'about'}" />
          <q-btn flat no-caps label="Our Activities" :to="{name: 'activities'}" />
          <q-btn flat no-caps label="Our Business Partners" :to="{name: 'partners'}" />
          <q-btn flat no-caps label="Contact" :to="{name: 'contact'}" />
        </div>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          class="lt-sm"
        >
          <q-icon name="menu" />
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered content-class="bg-primary">
      <q-list dark class="text-h6 text-weight-light">
        <q-item-label header>Menu</q-item-label>
        <q-item clickable tag="a" :to="{name: 'about'}">
          <q-item-section>
            <q-item-label>About</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" :to="{name: 'activities'}">
          <q-item-section>
            <q-item-label>Our Activities</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" :to="{name: 'partners'}">
          <q-item-section>
            <q-item-label>Our Business Partners</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" :to="{name: 'contact'}">
          <q-item-section>
            <q-item-label>Contact</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <div class="bg-grey-10 text-center q-pa-sm">
      <!-- <div class="text-h5 text-white text-weight-light">Agrolog Limited 2019</div> -->
      <div class="text-weight-thin text-grey-1">Copyright (C) 2019</div>
      <div>
        <a href="https://agrolog.farm:2096" target="_blank">Email</a>
      </div>
    </div>
  </q-layout>
</template>

<script>
import { openURL } from "quasar";

export default {
  name: "MyLayout",
  data() {
    return {
      leftDrawerOpen: false
    };
  },
  methods: {
    openURL
  }
};
</script>

<style>
.q-item.q-router-link--active,
.q-item--active {
  color: #c4c4c4;
  /* color: var(--q-color-); */
}
</style>

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

      <!-- <q-bar class="bg-white text-grey-9 q-px-xl gt-xs" style="height: 80px">
        <q-img src="statics/icons/logo.png" class="link" style="height: 60px; max-width: 55px" srcset @click="()=>{$router.push({name: 'home'})}" />
        <q-space />
        <div class="row">
          <q-btn no-caps color="primary" size="md" label="Join Agrolog" />
        </div>

        <div class="row">
          <q-btn no-caps color="primary" size="md" label="Agrolog Members" />
        </div>
      </q-bar>-->
      <q-toolbar class="gt-xs">
        <!-- <q-toolbar-title>
          <q-btn flat no-caps dense :to="{name: 'home'}">
            <q-img src="statics/icons/logo-white.png" style="width: 50px" />
            <div class="text-h5">Agrolog</div>
          </q-btn>
        </q-toolbar-title>-->

        <!-- <div class="gt-xs row flex-center"> -->
        <!-- <q-btn flat no-caps="" label="HOME" /> -->

        <!-- </div> -->
        <div class>
          <img
            src="statics/icons/agrolog2.png"
            style="height: 30px; max-width: 55px"
            class="link"
            @click="()=>{$router.push({name: 'home'})}"
          />
        </div>
        <q-space />
        <div class="row">
          <q-btn flat no-caps label="About" :to="{name: 'about'}" />
          <q-btn flat no-caps label="Our Activities" :to="{name: 'activities'}" />
          <q-btn flat no-caps label="Our Business Partners" :to="{name: 'partners'}" />
          <q-btn flat no-caps label="Contact" :to="{name: 'contact'}" />
          <q-btn flat no-caps label="Social Safety Naets" :to="{name: 'socialSafety'}" />
        </div>
        <q-space />
        <div class="row q-gutter-xs">
          <q-btn no-caps color="white" text-color="primary" size="sm" label="Join Agrolog" />
          <q-btn no-caps color="white" text-color="primary" size="sm" label="Agrolog Members" />
        </div>
      </q-toolbar>

      <q-toolbar class="lt-sm">
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
        <q-space />
        <q-avatar>
          <img
            src="statics/icons/agrolog2.png"
            style="height: 30px; max-width: 55px"
            class="link lt-sm"
            @click="()=>{$router.push({name: 'home'})}"
          />
        </q-avatar>
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
        <q-item clickable tag="a" :to="{name: 'socialSafety'}">
          <q-item-section>
            <q-item-label>Social Safety Nets</q-item-label>
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
      <div class="text-weight-thin text-grey-1">Copyright (C) 2020</div>
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

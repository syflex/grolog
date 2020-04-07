<template>
  <q-page>
    <!-- content -->
    <!-- <div class="fixed-top">
      <q-parallax src="statics/img/contact.jpg" :height="150">
          <q-breadcrumbs>
            <q-breadcrumbs-el label="Home" />
            <q-breadcrumbs-el class="text-white" label="Contact Us" />
          </q-breadcrumbs>
      </q-parallax>
    </div> -->

    <div class="q-pa-lg q-gutter-lg"> 
      <div class="text-h3">Contact Us</div>
      <div class="q-my-sm" style="width:250px">
        <q-separator color="primary"/>
        <q-separator color="primary"/>
      </div>
    
    
      <div class="row flex-center">
        <div><q-icon color="primary" name="email" size="50px" /></div>
        <div class="text-h5">info@agrolog.farm <br> contact@agrolog.farm</div>
      </div>
      
      <div class="row flex-center">
        <div><q-icon color="primary" name="local_phone" size="50px" /> </div> 
        <div class="text-h5">+234 (0) 901 4816 589 <br> +234 (0) 813 9488 659</div>
      </div>

    </div>
    <!-- <div>
      <q-input square outlined v-model="text" label="Full Name" />
      <q-input square outlined v-model="text" label="Email" />
      <q-input  type="textarea" square outlined v-model="text" label="Message" />
    </div> -->
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>

<style>
</style>

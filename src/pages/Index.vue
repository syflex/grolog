<template>
  <q-page>
    <div class="col-12 full-width">
      <q-carousel v-model="slide">
        <q-carousel-slide
          :name="1"
          img-src="statics/slides/slide.jpg"
          class="row items-center"
        >
          <div class="text-white">
            <div class="text-h2 text-bold">Agrolog Limited</div>
            <div class="q-mt-md">
              <p class="">
                Promoting and supporting sustainable
                <br />agriculture and food
                production in Africa
              </p>
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>

    <div class="col-12 q-pa-xl">
      <div class="text-h2">WHO WE ARE</div>
      <div class="q-my-sm" style="width:200px">
        <q-separator color="primary" />
        <q-separator color="primary" />
      </div>

      <p>
        AGROLOG is a company registered in Nigeria with a vision to createsocial innovations that will lift the rural poor out of poverty and transform them into the engine of economic growth .
        <q-btn flat no-caps dense color="secondary" label="Read More" :to="{name: 'about'}" />
      </p>
    </div>

    <div class="col-12 row">
      
      <q-card square>
        <q-card-section>
            Production Hub
        </q-card-section>
      </q-card>
      <q-card square>
        <q-card-section>
            Production Hub
        </q-card-section>
      </q-card>
      <q-card square>
        <q-card-section>
            Production Hub
        </q-card-section>
      </q-card>

    </div>

     <div class="col-12 q-gutter-xs">
      <q-card square>
        <q-parallax src="statics/img/parallax-1.jpg" :height="300">
          <div
            class="text-h5 text-white text-center"
          >Our innovative platforms bring farmers and investors together</div>
          <div>
            <q-btn
              color="primary"
              label="Contact Us"
              :to="{name: 'contact'}"
              class="q-py-md q-px-xl q-mt-md"
            />
          </div>
        </q-parallax>
      </q-card>
    </div>


    <!-- <div class="col-12">
      <q-card flat square class="q-pa-md">
        <q-card-section class="row flex-center">
          <div class="col-12 text-center text-h4">Our Business Partners</div>
          <div class="col-12">
            AgroLog works with both private and public stakeholders in agriculture to increase
            food security, quality, brand development and promote Nigerian agro export.
            We cater for customers all over the globe, supplying agricultural commodities. We are the heartbeat of
            the agricultural industry not only in Nigeria but in the entire African continent.
            Agrolog is in the business of promoting and supporting Sustainable agriculture and food
            production in our continent. Our Company works with various farmers in our network in Nigeria.
            The farmers comprise the following associations:
          </div>

          <div class="col-12 full-width">
            <q-list bordered separator>
              <q-expansion-item expand-separator label="Commodity Cooperatives Consortium">
                <q-card>
                  <q-card-section>
                    <q-img src="statics/img/p-1.png" style="width: 200px" />CCC- Is a subsidiary of Agrolog Group. It is an entity concerned with backward integration.
                    Equity holders include Kaduna state cooperatives federation, Maize Association
                    We provides services such as marketing, administration and management for its members.
                  </q-card-section>
                </q-card>
              </q-expansion-item>
              <q-expansion-item expand-separator label="Soya bean Farmers Association">
                <q-card>
                  <q-card-section></q-card-section>
                </q-card>
              </q-expansion-item>
              <q-expansion-item expand-separator label="Gurara Ginger Association">
                <q-card>
                  <q-card-section></q-card-section>
                </q-card>
              </q-expansion-item>
              <q-expansion-item expand-separator label="Kaduna State Cooperatives Federation">
                <q-card>
                  <q-card-section></q-card-section>
                </q-card>
              </q-expansion-item>
              <q-expansion-item expand-separator label="Rice Farmers Association">
                <q-card>
                  <q-card-section></q-card-section>
                </q-card>
              </q-expansion-item>
              <q-expansion-item expand-separator label="Groundnut Farmers Association">
                <q-card>
                  <q-card-section></q-card-section>
                </q-card>
              </q-expansion-item>
              <q-expansion-item expand-separator label="Sorghum Farmers Association">
                <q-card>
                  <q-card-section></q-card-section>
                </q-card>
              </q-expansion-item>
              <q-expansion-item expand-separator label="Turmeric farmers Association">
                <q-card>
                  <q-card-section></q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
          </div>
        </q-card-section>
      </q-card>
    </div> -->

    <!-- <div class="col-12">
      <q-card dark square flat>
        <q-parallax src="statics/img/parallax-2.jpg" :height="600">
          <q-card-section>
            <div class="text-h5 text-center q-mb-xl">Helping small businesses grow and expand</div>
            <div class="row flex-center q-gutter-lg">
              <div class="text-center col-md-2 col-sm-3 col-xs-4">
                <q-icon name="event" size="70px" />
                <br />
                <span class="text-h3 text-weight-bold">03+</span>
                <br />
                <span class="text-p text-weight-medium">Years of business operation</span>
              </div>
              <div class="text-center col-md-2 col-sm-3 col-xs-4">
                <q-icon name="work_outline" size="70px" />
                <br />
                <span class="text-h3 text-weight-bold">30+</span>
                <br />
                <span class="text-p text-weight-medium">Our staff worldwide</span>
              </div>
              <div class="text-center col-md-2 col-sm-3 col-xs-4">
                <q-icon name="verified_user" size="70px" />
                <br />
                <span class="text-h3 text-weight-bold">20+</span>
                <br />
                <span class="text-p text-weight-medium">Agro Award Winnings</span>
              </div>
              <div class="text-center col-md-2 col-sm-3 col-xs-4">
                <q-icon name="people" size="70px" />
                <br />
                <span class="text-h3 text-weight-bold">80+</span>
                <br />
                <span class="text-p text-weight-medium">Our Satisfied Customers</span>
              </div>
            </div>
          </q-card-section>
        </q-parallax>
      </q-card>
    </div> -->
  </q-page>
</template>


<script>
export default {
  name: "PageIndex",
  data() {
    return {
      slide: 1
    };
  }
};
</script>


<style>
</style>

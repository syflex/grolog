<template>
  <q-page>
    <div class="col-12 full-width">
      <q-carousel v-model="slide">
        <q-carousel-slide :name="1" img-src="statics/slides/slide.jpg" class="row items-center">
          <div class="text-white">
            <div class="text-h2 text-bold">Agrolog</div>
            <div
              class="text-h4 text-weight-light q-mt-md"
            >creating innovations to lift the poor and transform them into the engine of economic growth</div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>

    <div class="col-12 q-px-xl q-py-lg">
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

    <div class="col-12 row flex-center">
      <div style="max-width: 750px" class="row flex-center">
        <q-card flat class="col-md-4 col-sm-12">
          <q-card-section class="row flex-center column">
            <div>
              <q-img src="statics/hub.png" style="width: 65px;" />
            </div>
            <div class="text-center" style="max-width: 200px">
              We operate a hub at Kachia in Kaduna state where produce
              is evaluated, graded, branded for the market as well as for value addition.
            </div>
          </q-card-section>
        </q-card>
        <q-card flat class="col-md-4 col-sm-12">
          <q-card-section class="row flex-center column">
            <div>
              <q-img src="statics/groups.png" style="width: 65px;" />
            </div>
            <div class="text-center" style="max-width: 200px">
              serviced by cooperative clusters from 12 Local Government
              Areas that grow ginger.
            </div>
          </q-card-section>
        </q-card>
        <q-card flat class="col-md-4 col-sm-12">
          <q-card-section class="row flex-center column">
            <div>
              <q-img src="statics/service.png" style="width: 65px;" />
            </div>
            <div class="text-center" style="max-width: 200px">
              AgroLog is working to establish 10 service centers that will
              provide farmers with mechanization
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="col-12">
      <q-card dark flat square>
        <q-card-section class="row q-py-xl">
          <div class="text-h4">HOW YOU CAN JOIN US</div>
          <div>
            AgroLogis open to partnership with institutional as well as individual investors
            and Donor organisationsto structure financing packages for its smallholder farmer
            members for returns and social impac. for details
            <q-btn color="primary" flat dense no-caps label="click" />
          </div>
        </q-card-section>
      </q-card>
    </div>

    <div class="col-12 q-px-xl q-py-lg">
      <div class="text-h2">WHAT WE DO</div>
      <div class="q-my-sm" style="width:200px">
        <q-separator color="primary" />
        <q-separator color="primary" />
      </div>

      <p>
        We are growing a community of smallholder farmers to produce quality Ginger/Tumeric
        and soy beans sustainably. Allproduce that meet the AgroLog seal of
        quality arenurtured with a consciousness of a tradition of
        responsibility at every stage from land preparation to harvest.
        The core of that tradition being aflatoxin free, quality produce that meets
        global best practices and standards. The overarching goal is create an enterprise
        in farming for these smallholder farmers with social safety nets that assure them
        and their families of a future that would otherwise remain elusive.
        <q-btn flat no-caps dense color="secondary" label="Read More" :to="{name: 'about'}" />
      </p>
    </div>

    <div class="col-12">
      <q-card dark flat square>
        <q-card-section class="row column q-py-xl">
          <div class="text-h4">OUR SERVICES</div>
          <div>
            Agrologprovides its community of farmers servces inboth backward and
            forward integrationcomponents of the value chains. To access service
            <q-btn color="primary" flat dense no-caps label="click" />
          </div>
        </q-card-section>
      </q-card>
    </div>

    <!-- <div class="col-12 q-gutter-xs">
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
    </div>-->

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
    </div>-->

    <div class="col-12">
      <q-card dark square flat>
        <q-parallax src="statics/img/parallax-2.jpg" :height="600">
          <q-card-section>
            <div class="text-h2 q-mb-xl">Our Reach</div>

            <div class="row flex-center">
              <div class="col-md-4 col-sm-6 col-xs-12">
                <span class="text-h3 text-weight-bold">28000</span>
                <br />
                <span class="text-p text-weight-medium">Rural Access to Healthy Food</span>
              </div>
              <div class="col-md-4 col-sm-6 col-xs-12">
                <span class="text-h3 text-weight-bold">55000</span>
                <br />
                <span class="text-p text-weight-medium">Profitable Loans Disbursed</span>
              </div>
              <div class="col-md-4 col-sm-6 col-xs-12">
                <span class="text-h3 text-weight-bold">100000</span>
                <br />
                <span class="text-p text-weight-medium">Farmers Targeted by 2025</span>
              </div>
            </div>
          </q-card-section>
        </q-parallax>
      </q-card>
    </div>
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

<template>
  <q-page padding class="flex justify-center">
    <!-- content -->
    <div>
      <div class="text-h5 text-bold text-center text-capitalize">
      Social safety nets
      </div>
      <q-card flat bordered class="q-py-lg q-my-md" style="max-width: 1000px">
        <q-card-section class="flex flex-center">
          <p style="max-width: 800px">
            AgroLog has developed initiatives that allow our farmers to invest a fraction of
          their harvest annually for guaranteed basic healthcare services, basic education
          and pension. This can also serve as guarantees for loans etc. For details
          <!-- <q-btn dense no-caps color="green" flat label="click" /> -->
          </p>
          <div class="col-12 row flex-center">
            <div style="max-width: 800px" class="row flex-center q-pb-md">
              <div class="q-pa-xs" v-for="(item, index) in list" :key="index">
                <q-card bordered flat class="flex flex-center col-md-4 col-sm-12" style="height: 250px; max-width: 250px">
                  <q-card-section class="text-center flex flex-center">
                    <div class="text-h6 text-weight-light text-capitalize text-secondary">{{item.title}}</div>
                    <div class="text-center text-caption" style="max-width: 200px">
                      {{item.details}}
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>
         <p style="max-width: 800px">
            Estimated average value of family social package: 193k
            farmers ginger: average 18 tons  (300 bags of 60kg wet ginger)
            minus 24bags for the fertilizer
            minus 43 bags for social investment
            average No. of bags per farmer for sale: 300 -67 =233.
          </p>





        </q-card-section>
      </q-card>

    </div>



  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
      list:[
        {
          title: 'scholarship per child',
          details: '3 bags of wet ginger'
        },
        {
          title: 'health care (primary and basic surgeries) ',
          details: '4 bags per family member average total No. of bags to be paid to the social foundation: 43 bags (for a family of 7)'
        },
        {
          title: 'social investment  program qualifies',
          details: 'Three years in the social investment  program qualifies for admission into a pension scheme when the farmers attains the statutory pensionable age.'
        }
      ]
    }
  },
}
</script>

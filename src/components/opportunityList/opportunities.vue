<template>
  <div class="container m-auto">
    <b-row
      v-if="
        opportunities"
    >
      <div v-for="opp in opportunities" :key="opp.id">
        <router-link
          :to="'/profile/' + opp.id"
          style="text-decoration: none; color: black;"
        >
          <b-card
            :title="opp.title"
            :img-src="opp.cover_photo"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 30rem;"
            class="mb-4 mr-4"
          >
            <b-card-text>
              <p>
                <strong>Start Date:</strong>
                {{ changeDateFormat(opp.earliest_start_date) }}
              </p>
              <p><strong>Duration:</strong> {{ opp.duration }} weeks</p>
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </router-link>
      </div>
    </b-row>
  </div>
</template>
<script>
import queries from "../../graphQL/queries";
import * as moment from "moment";
export default {
  data() {
    return {
      opportunities: []
    };
  },
  apollo: {
    opportunities: {
      query: queries.GET_OPPORTUNITIES,
      update(data) {
        return data.allOpportunity.data;
      },
      error(error) {
        this.error = JSON.stringify(error.message);
      }
    }
  },
  methods: {
    changeDateFormat(val){
      return moment(val).format("DD MMM YYYY")
    }
  }
};
</script>
<style>

</style>

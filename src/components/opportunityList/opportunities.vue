<template>
  <div class="container">
    <b-row
      v-if="
        opportunities &&
          opportunities.allOpportunity &&
          opportunities.allOpportunity.data
      "
    >
      <div v-for="opp in opportunities.allOpportunity.data">
        <router-link
              :to="'/opportunity/'+opp.id"
              style="text-decoration: none; color: black;"
            >
        <b-card
          :title="opp.title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 30rem;"
          class="mb-4 mr-4"
        >
          <b-card-text>
            {{ opp }}
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
        return data;
      },
      error(error) {
        this.error = JSON.stringify(error.message);
      }
    }
  }
};
</script>
<style>
.container {
  margin: 100px auto;
}
</style>

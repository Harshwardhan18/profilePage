<template>
  <div class="container new-top">
    <div class="filterDiv">
      <div class="skills filter">
        <multiselect
          v-model="skills"
          :options="skillOptions"
          :searchable="false"
          :close-on-select="false"
          :show-labels="false"
          @select="getSkill"
          @remove="remSkill"
          label="name"
          :multiple="true"
          trackBy="name"
          placeholder="Skills"
        ></multiselect>
      </div>
      <div class="backgrounds filter">
        <multiselect
          v-model="backgrounds"
          :options="backOptions"
          :searchable="false"
          :close-on-select="false"
          :show-labels="false"
          @select="getBack"
          @remove="remBack"
          label="name"
          trackBy="name"
          :multiple="true"
          placeholder="Backgrounds"
        ></multiselect>
      </div>
      <div class="languages filter">
        <multiselect
          v-model="languages"
          :options="langOptions"
          :searchable="false"
          :close-on-select="false"
          :multiple="true"
          @select="getLang"
          @remove="remLang"
          :show-labels="false"
          label="name"
          placeholder="Languages"
          trackBy="name"
        ></multiselect>
      </div>
    </div>

    <b-row v-if="opportunities">
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
            style="max-width: 30rem; padding: 5px;"
            class="m-4 mt-5"
          >
            <b-card-text>
              <p>
                <strong>Start Date:</strong>
                {{ changeDateFormat(opp.earliest_start_date) }}
              </p>
              <p><strong>Duration:</strong> {{ opp.duration }} weeks</p>
            </b-card-text>
          </b-card>
        </router-link>
      </div>
    </b-row>
  </div>
</template>
<script>
import queryList from "../../graphQL/queries";
import * as moment from "moment";
import Multiselect from "vue-multiselect";

export default {
  data() {
    return {
      opportunities: [],
      backgrounds: [],
      backOptions: [],
      location: [],
      locOptions: [],
      skills: [],
      skillOptions: [],
      languages: [],
      lang: [],
      loca: [],
      skill: [],
      background: [],
      langOptions: [],
      filterData: {
        backgroundId: null,
        locationId: null,
        skillsId: null,
        langId: null
      }
    };
  },
  components: { Multiselect },
  apollo: {
    opportunities: {
      query: queryList.GET_OPPORTUNITIES,
      update(data) {
        return data.allOpportunity.data;
      },
      error(error) {
        this.error = JSON.stringify(error.message);
      }
    },
    backOptions: {
      query: queryList.GET_BACKGROUNDS,
      update(data) {
        return data.backgrounds;
      },
      error(er) {
        this.error = JSON.stringify(er.message);
      }
    },
    langOptions: {
      query: queryList.GET_LANGUAGES,
      update(data) {
        return data.languages;
      },
      error(er) {
        this.error = JSON.stringify(er.message);
      }
    },
    locOptions: {
      query: queryList.GET_COUNTRIES,
      update(data) {
        return data.countries;
      },
      error(er) {
        this.error = JSON.stringify(er.message);
      }
    },
    skillOptions: {
      query: queryList.GET_SKILLS,
      update(data) {
        return data.skills;
      },
      error(er) {
        this.error = JSON.stringify(er.message);
      }
    }
  },
  methods: {
    changeDateFormat(val) {
      return moment(val).format("DD MMM YYYY");
    },
    getLang(val) {
      this.lang.push(+val.id);
      this.filterData.langId = this.lang;
      this.refetchQuery();
    },
    getBack(val) {
      this.background.push(+val.id);
      this.filterData.backgroundId = this.background;
      this.refetchQuery();
    },
    getSkill(val) {
      this.skill.push(+val.id);
      this.filterData.skillsId = this.skill;
      this.refetchQuery();
    },
    remLang(val) {
      let i = this.lang.indexOf(Number(val.id));
      console.log(i, "askfdba");
      if (i > -1) {
        this.lang.splice(i, 1);
      }
      if (this.lang.length > 0) {
        this.filterData.langId = this.lang;
      } else {
        this.filterData.langId = null;
      }
      this.refetchQuery();
    },
    remBack(val) {
      let i = this.background.indexOf(Number(val.id));
      if (i > -1) {
        this.background.splice(i, 1);
      }
      if (this.background.length > 0) {
        this.filterData.backgroundId = this.background;
      } else {
        this.filterData.backgroundId = null;
      }
      this.refetchQuery();
    },
    remSkill(val) {
      let i = this.skill.indexOf(Number(val.id));
      if (i > -1) {
        this.skill.splice(i, 1);
      }
      if (this.skill.length > 0) {
        this.filterData.skillsId = this.skill;
      } else {
        this.filterData.skillsId = null;
      }
      this.refetchQuery();
    },
    refetchQuery() {
      this.$apollo.queries.opportunities.refetch({
        filter: {
          background_ids: this.filterData.backgroundId,
          language_ids: this.filterData.langId,
          skill_ids: this.filterData.skillsId
        }
      });
    }
  }
};
</script>
<style>
@import "../../../node_modules/vue-multiselect/dist/vue-multiselect.min.css";
.new-top {
  margin-top: 65px;
}
.filterDiv {
  display: flex;
  position: fixed;
  top: 65px;
  left: 0px;
  min-width: 1520px;
  z-index: 2;
  background: white;
  justify-content: flex-start;
  box-shadow: 1px 1px 10px rgb(193, 182, 182);
}
.filter {
  width: 120px;
  margin: 5px 50px;
}
</style>

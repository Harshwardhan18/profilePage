<template>
  <div>
    <div class="container-root">
      <div class="content">
        <div class="cover-page">
          <img :src="opportunity.cover_photo" alt="" />
          <div v-if="opportunity" class="cover-title">
            <h2>{{ opportunity.title }}</h2>
            <i class="fas fa-map-marker-alt"></i>
            <span v-if="opportunity.city && opportunity.city.city_details">{{
              opportunity.city.city_details
            }}</span>
            <span v-else>Not Available</span>
          </div>
        </div>
        <div class="detail-page mb-4">
          <div class="details">
            <div class="details-header">
              <div class="content-links">
                <a href="#overview" v-smooth-scroll="{ duration: 1500 }"
                  >Overview</a
                >
              </div>
              <div class="content-links">
                <a
                  href="#prerequisites"
                  v-smooth-scroll="{ duration: 1500, offset: -40 }"
                  >Prerequisites</a
                >
              </div>
            </div>
            <div id="overview" class="overview">
              <div class="container">
                <div class="row">
                  <h4>Overview</h4>
                </div>
                <div class="row spacing">
                  <h5>Organization</h5>
                </div>
                <div
                  class="row spacing"
                  v-if="
                    opportunity.organisation && opportunity.organisation.name
                  "
                >
                  <p>{{ opportunity.organisation.name }}</p>
                </div>
                <div class="row spacing">
                  <h5>Role description</h5>
                </div>
                <div class="row spacing">
                  <p>{{ opportunity.description }}</p>
                </div>
                <div class="row spacing">
                  <h5>Main activities</h5>
                </div>
                <div
                  v-if="
                    opportunity.role_info &&
                      opportunity.role_info.learning_points_list
                  "
                >
                  <ul>
                    <li
                      v-for="activity in opportunity.role_info
                        .learning_points_list"
                    >
                      {{ activity }}
                    </li>
                  </ul>
                </div>
              </div>
              <hr />
            </div>
            <div id="prerequisites" class="prerequisites">
              <div class="container">
                <div class="row"><h4>Prerequisites</h4></div>
                <div class="row lists">
                  <div><strong>Backgrounds</strong></div>
                  <div>
                    <ul>
                      <li v-for="background in opportunity.backgrounds">
                        {{ background.constant_name }}
                      </li>
                    </ul>
                    <hr />
                  </div>
                </div>
                <div class="row lists">
                  <div><strong>Skills</strong></div>
                  <div>
                    <ul>
                      <li v-for="skill in opportunity.skills" :key="skill.id">
                        {{ skill.constant_name }}
                      </li>
                    </ul>
                    <hr />
                  </div>
                </div>
                <div class="row lists">
                  <div><strong>Languages</strong></div>
                  <div>
                    <ul>
                      <li v-for="language in opportunity.languages">
                        {{ language.constant_name }}
                      </li>
                    </ul>
                    <hr />
                  </div>
                </div>
                <div class="row lists">
                  <div><strong>Study Levels</strong></div>
                  <div
                    v-if="
                      opportunity.study_levels && opportunity.study_levels.name
                    "
                  >
                    <ul>
                      <li v-for="study in opportunity.study_levels">
                        {{ study.name }}
                      </li>
                    </ul>
                    <hr />
                  </div>
                  <div v-else>
                    No Preferences
                    <hr />
                  </div>
                </div>
                <div class="row"></div>
              </div>
            </div>
            <div class="details-display">
              <div class="display-logo">
                <img src="../../assets/global-logo.png" alt="" />
              </div>
              <div class="container mt-3">
                <div class="row inside-spacing">
                  <div>
                    <div>LANGUAGES</div>
                    <div class="data-field">
                      <span v-for="language in opportunity.languages">
                        {{ language.constant_name }}
                      </span>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="row display-space inside-spacing">
                  <div>
                    <div>EARLIEST START DATE</div>
                    <div class="data-field">
                      {{ changeDateFormat(opportunity.earliest_start_date) }}
                    </div>
                  </div>
                  <div>
                    <div>LATEST END DATE</div>
                    <div class="data-field">
                      {{ changeDateFormat(opportunity.latest_end_date) }}
                    </div>
                  </div>
                  <div>
                    <div>DURATION</div>
                    <div class="data-field">
                      {{ opportunity.duration }} weeks
                    </div>
                  </div>
                </div>
                <div class="row"></div>
                <hr />
                <div class="row display-space inside-spacing">
                  <div>
                    <div>SALARY</div>
                    <div
                      class="data-field"
                      v-if="
                        opportunity.specifics_info &&
                          opportunity.specifics_info.salary
                      "
                    >
                      {{ opportunity.specifics_info.salary }}
                      {{
                        opportunity.specifics_info.salary_currency
                          .alphabetic_code
                      }}
                    </div>
                    <div v-else class="data-field">Unpaid</div>
                  </div>
                  <div>
                    <div>POSITIONS</div>
                    <div class="data-field">
                      {{ opportunity.available_openings }}
                    </div>
                  </div>
                </div>
                <hr />
              </div>
              <div class="footer">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin-in"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import queries from "../../graphQL/queries";
import * as moment from "moment";
export default {
  data() {
    return {
      opportunity: {},
      id: this.$route.params.id,
      count: 0
    };
  },
  watch: {
    $route(to, from) {
      this.id = to.params.id;
    }
  },
  apollo: {
    opportunity: {
      query: queries.GET_OPPORTUNITY,
      variables() {
        return {
          id: this.id
        };
      },
      update(data) {
        return data.getOpportunity;
      },
      error(error) {
        this.error = JSON.stringify(error.message);
      }
    }
  },
  methods: {
    changeDateFormat(val) {
      return moment(val).format("DD MMM YYYY");
    }
  }
};
</script>
<style scoped>
@import url("../../assets/styles/profile.css");
</style>

<template>
  <div class="contact-logs-notification">
    <div class="title">
      <h3 class="title-cln">
        <strong>{{ getTotalItemCount }}件</strong>
        の案件があります。
      </h3>
      <button
        class="mdc-button"
        @click="checkAllContactStatuses('wellcome to Vietnam - Japan')"
      >
        全て確認
      </button>
    </div>
    <div class="mdc-layout-grid content-card">
      <div class="inner">
        <contactLogInfoCard
          v-for="(value, key) in getContactLogs"
          :key="key"
          :log-info-card-key="key"
          :log-info-card-value="value"
        ></contactLogInfoCard>
      </div>
    </div>
  </div>
</template>

<script>
import { get, dispatch } from 'vuex-pathify'
import contactLogInfoCard from '~/components/home_page/contact-log-info-card.vue'

export default {
  components: {
    contactLogInfoCard
  },
  computed: {
    getContactLogs: get('staffs/getContactLogs'),
    getTotalItemCount: get('staffs/getTotalItemCount')
  },
  mounted() {
    dispatch('staffs/getContactLogSummary')
  },
  methods: {
    checkAllContactStatuses(e) {
      alert(e)
    }
  }
}
</script>

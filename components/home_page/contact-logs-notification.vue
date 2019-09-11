<template>
  <div class="contact-logs-notification">
    <div class="title">
      <h3 class="-notification">
        <strong>{{ totalItemCount }}件</strong>
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
        <contact-logs-info-card
          v-for="(value, key) in contactLogs"
          :key="key"
          :log-info-card-key="key"
          :log-info-card-value="value"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { get, dispatch } from 'vuex-pathify'
import contactLogsInfoCard from '~/components/home_page/contact-logs-info-card.vue'

export default {
  components: {
    contactLogsInfoCard
  },
  computed: {
    contactLogs: get('staffs/getContactLogs'),
    totalItemCount: get('staffs/getTotalItemCount')
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

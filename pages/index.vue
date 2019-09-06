<template>
  <div class="container">
    <div>
      <contentCard>
        <h4 slot="title">2週間以上ステータスを変更していない案件</h4>
        <contactLogsNotification slot="content"></contactLogsNotification>
      </contentCard>
    </div>
  </div>
</template>

<script>
import contentCard from '~/components/home_page/content_card.vue'
import contactLogsNotification from '~/components/home_page/contact-logs-notification.vue'

export default {
  components: {
    contentCard,
    contactLogsNotification
  }
}
</script>

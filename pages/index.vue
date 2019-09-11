<template>
  <div class="container">
    <content-card>
      <div slot="title" class="title-card">
        <img class="icon" src="@/assets/svg/warnning.svg" />
        <h4 class="title-content-card">
          2週間以上ステータスを変更していない案件
        </h4>
      </div>
      <contact-logs-notification slot="content"></contact-logs-notification>
    </content-card>
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

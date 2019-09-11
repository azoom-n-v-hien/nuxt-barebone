<template>
  <div class="cell -span3desktop -span4tablet -span4mobile">
    <div class="mdc-card contact-logs-info-card">
      <div class="media -square info" @click="checkAllContactStatuses(value)">
        <div class="-content -text">
          {{ langs.contactStatus[logInfoCardKey] }}
        </div>
        <div class="-content number -text">
          <strong>{{ logInfoCardValue }}</strong> 件
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['logInfoCardKey', 'logInfoCardValue'],
  data() {
    return {
      langs: {
        contactStatus: {
          receptionist: '受付',
          heard: 'ヒアリング済',
          sendAvailableMail: '空室有メール送信',
          sendAvailableMailDirectMng: '空室有メール送信（直営）',
          sendAvailableMailLeopalace: '空室有メール送信（レオパ）',
          sendFollowUpMail: '追客メール送信',
          toContact: '連絡つかず受付',
          prospects: '見込み',
          contractAdjustment: '契約調整',
          reversing: '逆引き中',
          sendFollowMail: 'フォローメール送信'
        }
      }
    }
  }
}
</script>

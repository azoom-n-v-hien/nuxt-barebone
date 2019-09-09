<template>
  <div class="contact-log">
    <div class="title">
      <h3>
        <strong>{{ sum }}件</strong>
        の案件があります。
      </h3>
      <button
        class="mdc-button"
        @click="actions('wellcome to Vietnam - Japan')"
      >
        全て確認
      </button>
    </div>
    <div class="mdc-layout-grid">
      <div class="inner">
        <div
          v-for="item in object"
          :key="item.number"
          class="cell -span3-desktop -span6-table -span4mobile"
        >
          <div class="mdc-card my-card">
            <div
              class="mdc-card__media mdc-card__media--square card-1"
              @click="actions(item.name)"
            >
              <div class="mdc-card__media-content name">{{ item.name }}</div>
              <div class="mdc-card__media-content number">
                <strong>{{ item.number }}</strong> 件
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sum: 30,
      object: [
        { name: '受付', number: 1 },
        { name: 'ヒアリング済', number: 2 },
        { name: '空室有メール送信', number: 4 },
        { name: '空室有メール送信（直営', number: 7 },
        { name: '空室有メール送信（直営', number: 8 },
        { name: '受付', number: 5 },
        { name: '受付', number: 1 },
        { name: 'ヒアリング済', number: 2 }
      ]
    }
  },
  methods: {
    actions(e) {
      alert(e)
    }
  }
}
</script>

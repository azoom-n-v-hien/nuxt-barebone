<template>
  <div>
    <div class="title">
      <h3>
        <strong>{{ sum }}</strong>
        件 の案件があります。
      </h3>
      <button
        class="mdc-button"
        @click="actions('wellcome to Vietnam - Japan')"
      >
        全て確認
      </button>
    </div>
    <div id="all-card">
      <div v-for="item in object" :key="item.number" class="mdc-card my-card">
        <div
          class="mdc-card__media mdc-card__media--square card-1"
          @click="actions(item.name)"
        >
          <div class="mdc-card__media-content name">{{ item.name }}</div>
          <div class="mdc-card__media-content number">{{ item.number }}</div>
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
        { name: '受付', number: '1 件' },
        { name: 'ヒアリング済', number: '2 件' },
        { name: '空室有メール送信', number: '3 件' },
        { name: '空室有メール送信（直営', number: '4 件' },
        { name: '空室有メール送信（直営', number: '4 件' }
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

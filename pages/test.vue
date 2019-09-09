<template>
  <div>
    <div class="mdc-layout-grid">
      <div class="inner">
        <div class="cell--span-2 cell--order-2">Nguyễn van hien</div>
        <div class="cell cell--order-3">Nguyen van A</div>
        <div class="cell cell--order-1">Nguyên van B</div>
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
        { name: '空室有メール送信（直営', number: '4 件' },
        { name: '受付', number: '1 件' },
        { name: 'ヒアリング済', number: '2 件' },
        { name: '空室有メール送信', number: '3 件' },
        { name: '空室有メール送信（直営', number: '4 件' },
        { name: '空室有メール送信（直営', number: '4 件' },
        { name: '空室有メール送信', number: '3 件' }
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

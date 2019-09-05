<template>
  <div>
    <h4>2週間以上ステータスを変更していない案件</h4>
    <div class="title">
      <h3><strong>30件</strong>の案件があります。</h3>
      <button class="mdc-button">
        全て確認
      </button>
    </div>
    <div id="all-card">
      <div class="mdc-card my-card"> <!-- loop -->
        <div class="mdc-card__media mdc-card__media--square card-1">
          <div class="mdc-card__media-content name">契約調整</div>
          <div class="mdc-card__media-content number">3 契</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  var objects = new Vue({
    el: '#all-card',
    data: {
      sum: 30,
      items: [
        { name: '受付', number: '1 件 '},
        { name: '空室有メール送信（レオパ', number: '4 件' },
        { name: '契約調整' , number: '2 件'},
        { name: 'ヒアリング済', number: '2 件'},
      ],
    }
  });
</script>
<style>
.container {
  max-width: 1246px;
  margin-left: 100px;
}
h4 {
  text-align: left;
  font: Medium 14px/19px Roboto;
  letter-spacing: 0;
  color: #fff;
  opacity: 0.87;
  background: #607d8b;
  padding: 21px 30px;
}
#all-card {
  display: flex;
}
.my-card {
  width: 25%;
  margin-right: 20px;
}
.card-1 {
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
}
.title {
  display: flex;
}
.title h3 {
  padding: 22px 15px;
  font-size: 16px;
}
.title strong {
  color: red;
}
.name{
  color:#42A5F5;
}
</style>

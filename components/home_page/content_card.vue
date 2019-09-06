<template>
  <div>
    <slot name="title"></slot>
    <slot name="content"></slot>
  </div>
</template>

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
  flex-wrap: wrap;
}
.my-card {
  width: 23%;
  margin-right: 24px;
  margin-bottom: 30px;
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
button {
  margin-top: 11px;
}
.name {
  color: #42a5f5;
}
.number {
  color: #42a5f5;
}
</style>

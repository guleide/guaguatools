<template>
  <view class="container">
    <view class="card">
      <text class="title">金额大小写转换</text>

      <view class="input-container">
        <input
          class="amount-input"
          type="digit"
          placeholder="请输入金额"
          v-model="amount"
          @input="convertAmount"
        />
      </view>

      <view class="result-container" v-if="result">
        <text class="result-label">转换结果</text>
        <text class="result-text">{{ result }}</text>
      </view>
    </view>
  </view>
</template>

<script>
import { numberToChineseCurrency } from '@/common/utils';

export default {
  data() {
    return {
      amount: '',
      result: ''
    };
  },
  methods: {
    convertAmount() {
      const num = parseFloat(this.amount);
      if (!isNaN(num)) {
        this.result = numberToChineseCurrency(num);
      } else {
        this.result = '请输入有效的数字';
      }
    }
  }
};
</script>

<style>
/* 主容器样式 */
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f7fa;
  padding-left: 40rpx;
  padding-right: 40rpx;
}

/* 卡片容器 */
.card {
  width: 100%;
  max-width: 600rpx;
  padding: 50rpx;
  border-radius: 30rpx;
  background: linear-gradient(145deg, #ffffff, #e6ecf1);
  box-shadow: 0 8rpx 24rpx rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  top: -200rpx;
}

/* 标题 */
.title {
  font-size: 48rpx;
  font-weight: bold;
  color: #1296db;
  margin-bottom: 20rpx;
  background: linear-gradient(90deg, #1296db, #66ccff);
  -webkit-background-clip: text;
  color: transparent;
}

/* 输入框容器 */
.input-container {
  display: flex;
  justify-content: center;
  margin-top: 40rpx;
  margin-bottom: 40rpx;
}

/* 输入框样式 */
.amount-input {
  width: 100%;
  padding: 24rpx;
  font-size: 36rpx;
  border-radius: 16rpx;
  border: 1rpx solid #d1d9e6;
  background-color: #ffffff;
  transition: border-color 0.3s, box-shadow 0.3s;
  box-shadow: inset 0 4rpx 8rpx rgba(0, 0, 0, 0.05);
}

.amount-input:focus {
  border-color: #1296db;
  box-shadow: 0 0 16rpx rgba(18, 150, 219, 0.2);
}

/* 结果展示容器 */
.result-container {
  margin-top: 50rpx;
  padding: 30rpx;
  border-radius: 20rpx;
  background-color: #f3f9fc;
  box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.05);
}

/* 结果标签 */
.result-label {
  font-size: 32rpx;
  color: #555;
  margin-bottom: 10rpx;
}

/* 结果文字 */
.result-text {
  font-size: 36rpx;
  font-weight: bold;
  color: #1296db;
}
</style>

<template>
	<view class="common-title">
		<view class="name">
			<slot name="name"></slot>
		</view>
		<view class="custom">
			<slot name="custom"></slot>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
.common-title {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 30rpx;
	.name {
		font-size: 50rpx;
		font-weight: bold;
		color: $text-font-color-1;
	}
}
</style>
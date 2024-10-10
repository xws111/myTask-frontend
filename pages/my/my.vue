<template>
	<view class="myLayout">
		<view class="userInfo">
			<view class="avatar">
				<image src="../../static/logo.png" mode="aspectFill"></image>
			</view>
			<view class="profile">只要卷不死，就往死里卷</view>
			view
		</view>
		<view class="section">
			<view class="list">
				<view class="row" v-for="item in 3">
					<view class="left">
						<uni-icons type="download-filled" size="30"></uni-icons>
						<view class="text">我的任务</view>
					</view>
					<view class="right">
						<view class="text">33</view>
						<uni-icons type="right" size="30"></uni-icons>
					</view>
				</view>
			</view>
		</view>
		<view class="section">
			<view class="list">
				<view class="row" v-for="item in 3">
					<view class="left">
						<uni-icons type="download-filled" size="30"></uni-icons>
						<view class="text">我的任务</view>
					</view>
					<view class="right">
						<view class="text">33</view>
						<uni-icons type="right" size="30"></uni-icons>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.myLayout {
	.userInfo {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 50rpx 0;
		.avatar {
			width: 160rpx;
			height: 160rpx;
			border-radius: 50%;
			overflow: hidden;
			image {
				width: 100%;
				height: 100%;
			}
		}
		.profile {
			color: #333;
			padding: 20rpx 0 5rpx;
		}
	}
	.section {
		width: 690rpx;
		margin: 50rpx auto;
		border: 1px solid #eee;
		border-radius: 10rpx;
		box-shadow: 0 0 30rpx rgba(0, 0, 0, 0.05);
		.list {
			.row {
				display: flex;
				justify-content: space-between;
				padding: 0 30rpx;
				height: 100rpx;
				border-bottom: 1px solid #eee;
				&:last-child{border-bottom: 0;}
				.left {
					display: flex;
					align-items: center;
				}
				.right {
					display: flex;
					align-items: center;
				}
			}
		}
	}
}

</style>

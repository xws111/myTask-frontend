<template>
	<view class="today-task">
		<view>
			<uni-card class="card" :title="props.title" extra="提交" @click="handleClick" shadow>
				<text>任务目标：{{props.detail}}</text>
			</uni-card>
		</view>
	</view>
</template>

<script setup>
const props = defineProps({
	title:String,
	detail:String,
});

const handleClick = (type) => {
	if (type == "extra") {
		console.log("提交");
	}
}
</script>

<style lang="scss" scoped>
.card {
	// background-color: $background-color-in-progress;
	background: linear-gradient(to right bottom, #b5b54f, #008744);
	:deep() {
		.uni-card {
			&__header {
				border-bottom: 4rpx solid rgba(0, 0, 0, 0.5);
			}
			.uni-card__header-extra {
				font-size: 50rpx;
			}
		    &__header-content-title {
		        font-size: 40rpx !important;
				font-weight: bold;
		    }
		    &__content {
		        font-size: 34rpx !important;
				color: #000000;
		    }
		}
	}
}

</style>
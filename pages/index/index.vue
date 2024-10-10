<template>
	<view class="homeLayout">
		<view class="today">
			<common-title>
				<template #name>今日任务</template>
				<template #custom>
					<view class="date">
						<uni-icons type=calendar size="18" color="#28b389"></uni-icons>
						<uni-dateformat :date="Date.now()" format="MM月d日" style="margin-left: 5rpx;"></uni-dateformat>
					</view>
				</template>
			</common-title>
			<view class="content">
				<scroll-view scroll-y>
					<view v-for="item in taskList">
						<todayTask class="today-task" :title="item.title" :detail="item.detail"></todayTask>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="progress">
			<common-title>
				<template #name>总进度</template>
				<template #custom>
					<view class="detail">
						详情
						<uni-icons type=right size="18" color="#a7a7a7"></uni-icons>
					</view>
				</template>
			</common-title>
		</view>
	</view>
</template>

<script setup>
import todayTask from '../../components/today-task/today-task/today-task.vue';
import { ref } from 'vue';

const taskList = ref([
	{
		title: "英语",
		detail: "背一百个单词",
	}, 	{
		title: "英语",
		detail: "背一百个单词",
	}, 	{
		title: "英语",
		detail: "背一百个单词",
	},	{
		title: "英语",
		detail: "背一百个单词",
	},
])
</script>

<style lang="scss" scoped>
	.homeLayout {
		.today {
			padding-top: 50rpx;

			.content {
				width: 100%;
			}
			.date {
				display: flex;
				justify-content: center;
				align-items: center;
				color: $text-font-color-2;
			}
		}
		.progress {
			.detail {
				display: flex;
				justify-content: center;
				align-items: center;
				color: $text-font-color-2;
			}
		}
	}
</style>
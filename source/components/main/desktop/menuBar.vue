<template lang="pug">
q-bar.menuBar.shadow-6
	q-btn(dense, flat)
		q-img.orrmurrIcon(src="https://image.flaticon.com/icons/svg/502/502724.svg")
	.text-weight-bolder.non-selectable ORRMURR
	q-space
	q-btn(dense, flat, icon="airplay")
	q-btn(dense, flat, icon="battery_charging_full")
	q-btn(dense, flat, icon="wifi")
	q-btn(dense, flat, @click="switchLocale")
		q-img.nationalFlag(
			v-if="$i18n.locale === 'en'",
			src="https://image.flaticon.com/icons/svg/3013/3013911.svg"
		)
		q-img.nationalFlag(v-else, src="https://image.flaticon.com/icons/svg/3013/3013991.svg")
	.text-weight-bold.non-selectable 18:44
	q-btn(dense, flat, icon="search")
	q-btn(dense, flat, icon="list")
</template>

<script>
import { toggle as toggleLocale } from "@/assets/scripts/locale"

export default {
	methods: {
		switchLocale() {
			toggleLocale("en", "ko")
		},
	},
}
</script>

<style lang="sass" scoped>
.menuBar
	background-image: linear-gradient(to right, #ddd, #eee)
	backdrop-filter: blur(2px)

.orrmurrIcon
	width: 2rem

.nationalFlag
	width: 2.5rem
</style>

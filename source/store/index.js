import store from "@/assets/scripts/initialize/store"
import programListJson from "@/assets/jsons/programList"

// export const strict = false

export const state = () => ({
	programList: programListJson,
	mobile: {
		disabled: true,
		swipe: true,
	},
})

export const mutations = store.mutations
export const actions = store.actions

// mutations.toggleIsOpened = (state, index) => {
// 	state.programList[index].isOpened = !state.programList[index].isOpened
// }

// mutations.pushDesktopOpenedProgramList = (state, value) => {
// 	// console.log(context.state.desktop.openedProgramList)
// 	state.desktop.openedProgramList.push(value)
// }

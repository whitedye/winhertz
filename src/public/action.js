

export const setSelectedTab = (selectedTab) => ({
	type: 'SET_TABAR_STATE',
	selectedTab,
});

export const hiddenTabbar = (hidden=false) => ({
	type: 'HIDDEN_TABBAR',
	hidden,
}) 
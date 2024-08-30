export type Theme = (typeof GuiThemes)["Dark Blue - Red Blush"];

export const GuiThemes = {
	["Dark Blue - Red Blush"]: {
		primary: {
			1: Color3.fromHex("#2C3A4F"),
			2: Color3.fromHex("#56647b"),
			3: Color3.fromHex("#b4c2dc"),
		},
		accent: {
			1: Color3.fromHex("#FF4D4D"),
			2: Color3.fromHex("#ffecda"),
		},

		background: {
			1: Color3.fromHex("#1A1F2B"),
			2: Color3.fromHex("#292e3b"),
			3: Color3.fromHex("#414654"),
		},
		text: {
			1: Color3.fromHex("#FFFFFF"),
			2: Color3.fromHex("#e0e0e0"),
		},
	},
};

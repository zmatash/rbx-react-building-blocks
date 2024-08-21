import React, { forwardRef, type PropsWithChildren } from "@rbxts/react";
import { Frame } from "./frame";

export interface SizeWrapperProps extends PropsWithChildren {
	position?: UDim2;
	size?: UDim2;
	automaticSize?: "X" | "Y" | "XY";
}

export const SizeWrapper = forwardRef<Frame, SizeWrapperProps>((props, ref) => {
	const { children, automaticSize } = props;

	let size: UDim2;
	if (automaticSize === "X") {
		size = new UDim2(0, 0, 1, 0);
	} else if (automaticSize === "Y") {
		size = new UDim2(1, 0, 0, 0);
	} else {
		size = new UDim2(1, 0, 1, 0);
	}

	return (
		<Frame key={"size-wrapper"} ref={ref} automaticSize={automaticSize} size={size} backgroundTransparency={1}>
			{children}
		</Frame>
	);
});

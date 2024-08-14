import React from "@rbxts/react";

interface LayerProps extends React.PropsWithChildren {
	displayOrder?: number;
	zIndexBehavior?: "Sibling" | "Global";
	ignoreGuiInset?: boolean;
	resetOnSpawn?: boolean;
}

export function Layer(props: LayerProps) {
	return (
		<screengui
			ResetOnSpawn={props.resetOnSpawn ?? true}
			DisplayOrder={props.displayOrder}
			IgnoreGuiInset={props.ignoreGuiInset ?? true}
			ZIndexBehavior={props.zIndexBehavior ?? "Sibling"}
		>
			{props.children}
		</screengui>
	);
}

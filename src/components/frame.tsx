import React, { forwardRef, Ref } from "@rbxts/react";

export interface FrameProps<T extends Instance = Frame> extends React.PropsWithChildren {
	ref?: React.Ref<T>;
	event?: React.InstanceEvent<T>;
	change?: React.InstanceChangeEvent<T>;
	size?: UDim2 | React.Binding<UDim2>;
	position?: UDim2 | React.Binding<UDim2>;
	anchorPoint?: Vector2 | React.Binding<Vector2>;
	rotation?: number | React.Binding<number>;
	backgroundColor?: Color3 | React.Binding<Color3>;
	backgroundTransparency?: number | React.Binding<number>;
	clipsDescendants?: boolean | React.Binding<boolean>;
	visible?: boolean | React.Binding<boolean>;
	zIndex?: number | React.Binding<number>;
	layoutOrder?: number | React.Binding<number>;
	cornerRadius?: UDim | React.Binding<UDim>;
	automaticSize?: Enum.AutomaticSize | React.Binding<Enum.AutomaticSize> | "X" | "Y" | "XY";
	padding?: UDim | React.Binding<UDim>;
	borderMode?: Enum.BorderMode | React.Binding<Enum.BorderMode>;
	borderColor?: Color3 | React.Binding<Color3>;
	borderSizePixel?: number | React.Binding<number>;
}

export const Frame = forwardRef((props: FrameProps, ref: Ref<Frame>) => {
	return (
		<frame
			ref={ref}
			Size={props.size}
			Position={props.position}
			AnchorPoint={props.anchorPoint}
			Rotation={props.rotation}
			BackgroundColor3={props.backgroundColor}
			BackgroundTransparency={props.backgroundTransparency}
			ClipsDescendants={props.clipsDescendants}
			Visible={props.visible}
			ZIndex={props.zIndex}
			LayoutOrder={props.layoutOrder}
			BorderSizePixel={0}
			BorderMode={props.borderMode}
			BorderColor3={props.borderColor}
			Event={props.event}
			Change={props.change}
			AutomaticSize={props.automaticSize ?? "None"}
		>
			{props.children}
			{props.cornerRadius && <uicorner CornerRadius={props.cornerRadius} />}
		</frame>
	);
});

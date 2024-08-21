import React, { forwardRef } from "@rbxts/react";
import { FrameProps } from "./frame";

export interface ImageButtonProps extends FrameProps<ImageButton> {
	active?: boolean | React.Binding<boolean>;
	image?: string | React.Binding<string>;
	hoverImage?: string | React.Binding<string>;
	pressedImage?: string | React.Binding<string>;
	imageTransparency?: number | React.Binding<number>;
	imageColor?: Color3 | React.Binding<Color3>;
	scaleType?: React.InferEnumNames<Enum.ScaleType> | "Stretch" | "Slice" | "Tile" | "Fit" | "Crop";
	onClick?: () => void;
	onMouse1Down?: () => void;
	onMouse1Up?: () => void;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
}

export const ImageButton = forwardRef((props: ImageButtonProps, ref: React.Ref<ImageButton>) => {
	const { onClick, onMouse1Down: onMouseDown, onMouseEnter, onMouseLeave, onMouse1Up: onMouseUp } = props;

	const event = {
		Activated: onClick && (() => onClick()),
		MouseButton1Down: onMouseDown && (() => onMouseDown()),
		MouseButton1Up: onMouseUp && (() => onMouseUp()),
		MouseEnter: onMouseEnter && (() => onMouseEnter()),
		MouseLeave: onMouseLeave && (() => onMouseLeave()),
		...props.event,
	};
	const corners = props.cornerRadius ? <uicorner CornerRadius={new UDim(0, props.cornerRadius)} /> : undefined;

	return (
		<imagebutton
			ref={ref}
			Image={props.image}
			HoverImage={props.hoverImage}
			ImageTransparency={props.imageTransparency}
			ImageColor3={props.imageColor}
			PressedImage={props.pressedImage}
			Active={props.active}
			ScaleType={props.scaleType}
			AutoButtonColor={false}
			Size={props.size}
			Position={props.position}
			AnchorPoint={props.anchorPoint}
			BackgroundColor3={props.backgroundColor}
			BackgroundTransparency={props.backgroundTransparency}
			ClipsDescendants={props.clipsDescendants}
			Visible={props.visible}
			ZIndex={props.zIndex}
			LayoutOrder={props.layoutOrder}
			BorderSizePixel={0}
			Event={event}
			Change={props.change}
		>
			{props.children}
			{corners}
		</imagebutton>
	);
});

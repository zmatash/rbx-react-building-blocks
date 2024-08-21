import React, { forwardRef } from "@rbxts/react";
import { FrameProps } from "./frame";

export interface TextButtonProps extends FrameProps<TextButton> {
	active?: boolean | React.Binding<boolean>;
	textSize?: number | React.Binding<number>;
	text?: string | React.Binding<string>;
	textColor?: Color3 | React.Binding<Color3>;
	onClick?: () => void;
	onMouse1Down?: () => void;
	onMouse1Up?: () => void;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
}

export const TextButton = forwardRef((props: TextButtonProps, ref: React.Ref<TextButton>) => {
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
		<textbutton
			ref={ref}
			Active={props.active}
			TextSize={props.textSize}
			Text={props.text}
			TextScaled={true}
			TextColor3={props.textColor}
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
		</textbutton>
	);
});

import React, { forwardRef, Ref } from "@rbxts/react";
import { FrameProps } from "./frame";
import { Image } from "./Image";
import { TextButton } from "./text-button";

export interface AdjustableImageButtonProps extends FrameProps<TextButton> {
	active?: boolean | React.Binding<boolean>;
	image?: string;
	imageColor?: Color3 | React.Binding<Color3>;
	imageTransparency?: number | React.Binding<number>;
	imageSize?: UDim2 | React.Binding<UDim2>;
	backgroundColor?: Color3 | React.Binding<Color3>;
	backgroundTransparency?: number | React.Binding<number>;
	onClick?: () => void;
	onMouse1Down?: () => void;
	onMouse1Up?: () => void;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
}

export const AdjustableImageButton = forwardRef((props: AdjustableImageButtonProps, ref: Ref<TextButton>) => {
	return (
		<TextButton
			ref={ref}
			backgroundColor={props.backgroundColor}
			backgroundTransparency={props.backgroundTransparency}
			active={props.active}
			onClick={props.onClick}
			onMouse1Down={props.onMouse1Down}
			onMouse1Up={props.onMouse1Up}
			onMouseEnter={props.onMouseEnter}
			onMouseLeave={props.onMouseLeave}
			text=""
		>
			<Image
				backgroundTransparency={1}
				imageColor={props.imageColor}
				imageTransparency={props.imageTransparency}
				image={props.image}
				size={props.imageSize}
				anchorPoint={new Vector2(0.5, 0.5)}
				position={new UDim2(0.5, 0, 0.5, 0)}
			/>
		</TextButton>
	);
});

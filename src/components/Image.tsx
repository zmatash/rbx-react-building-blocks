import React, { forwardRef } from "@rbxts/react";
import { FrameProps } from "./frame";

export interface ImageProps extends FrameProps<ImageLabel> {
	image?: string;
	imageColor?: Color3 | React.Binding<Color3>;
	imageTransparency?: number | React.Binding<number>;
	imageRectOffset?: Vector2 | React.Binding<Vector2>;
	imageRectSize?: Vector2 | React.Binding<Vector2>;
	scaleType?: React.InferEnumNames<Enum.ScaleType>;
	sliceScale?: number | React.Binding<number>;
	sliceCenter?: Rect | React.Binding<Rect>;
	tileSize?: UDim2 | React.Binding<UDim2>;
}

export const Image = forwardRef<ImageLabel, ImageProps>((props, ref) => {
	const corners = props.cornerRadius ? <uicorner CornerRadius={new UDim(0, props.cornerRadius)} /> : undefined;
	return (
		<imagelabel
			ref={ref}
			Image={props.image ?? "rbxasset://textures/ui/GuiImagePlaceholder.png"}
			ImageColor3={props.imageColor}
			ImageTransparency={props.imageTransparency}
			ImageRectOffset={props.imageRectOffset}
			ImageRectSize={props.imageRectSize}
			ScaleType={props.scaleType}
			SliceScale={props.sliceScale}
			SliceCenter={props.sliceCenter}
			TileSize={props.tileSize}
			Size={props.size}
			Position={props.position}
			AnchorPoint={props.anchorPoint}
			Rotation={props.rotation}
			BackgroundColor3={props.backgroundColor}
			BackgroundTransparency={props.backgroundTransparency ?? 1}
			ClipsDescendants={props.clipsDescendants}
			Visible={props.visible}
			ZIndex={props.zIndex}
			LayoutOrder={props.layoutOrder}
			BorderSizePixel={0}
			Event={props.event}
			Change={props.change}
		>
			{props.children}
			{corners}
		</imagelabel>
	);
});

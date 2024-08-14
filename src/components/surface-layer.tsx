import React from "@rbxts/react";

type FaceLiteral = "Front" | "Back" | "Top" | "Bottom" | "Left" | "Right";
type SizingLiteral = "FixedSize" | "PixelsPerStud";

export interface SurfaceLayerProps<T extends Instance = SurfaceGui> extends React.PropsWithChildren {
	AlwaysOnTop?: boolean | React.Binding<boolean>;
	Enabled?: boolean | React.Binding<boolean>;
	Face?: FaceLiteral | Enum.NormalId | React.Binding<Enum.NormalId>;
	LightInfluence?: number | React.Binding<number>;
	MaxDistance?: number | React.Binding<number>;
	ClipsDescendants?: boolean | React.Binding<boolean>;
	CanvasSize?: Vector2 | React.Binding<Vector2>;
	SizingMode?: SizingLiteral | Enum.SurfaceGuiSizingMode | React.Binding<Enum.SurfaceGuiSizingMode>;
	PixelsPerStud?: number | React.Binding<number>;
}

export function SurfaceLayer(props: SurfaceLayerProps) {
	return (
		<surfacegui
			AlwaysOnTop={props.AlwaysOnTop}
			Enabled={props.Enabled}
			Face={props.Face}
			LightInfluence={props.LightInfluence}
			MaxDistance={props.MaxDistance}
			ClipsDescendants={props.ClipsDescendants}
			CanvasSize={props.CanvasSize}
			SizingMode={props.SizingMode}
			PixelsPerStud={props.PixelsPerStud}
		>
			{props.children}
		</surfacegui>
	);
}

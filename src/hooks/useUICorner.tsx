export interface CornerRadius {
	radius: number;
	corners?: [boolean, boolean, boolean, boolean];
}

export interface CornerTransform {
	AnchorPoint: Vector2;
	Position: UDim2;
	Size: UDim2;
}

const cornerTransforms = [
	{ AnchorPoint: new Vector2(0, 0), Position: UDim2.fromScale(0, 0) },
	{
		AnchorPoint: new Vector2(1, 0),
		Position: UDim2.fromScale(1, 0),
	},
	{
		AnchorPoint: new Vector2(0, 1),
		Position: UDim2.fromScale(0, 1),
	},
	{
		AnchorPoint: new Vector2(1, 1),
		Position: UDim2.fromScale(1, 1),
	},
];

export function useUICorner(cornerProps: CornerRadius) {
	const { radius, corners } = cornerProps;

	const blockers: CornerTransform[] = [];
	for (let i = 0; i < 4; i++) {
		const corner = corners![i];
		if (corner) {
			blockers.push({ ...cornerTransforms[i], Size: UDim2.fromOffset(radius, radius) });
		}
	}

	return blockers;
}

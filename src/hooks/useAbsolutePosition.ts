import { useEffect, useState } from "@rbxts/react";

export function useAbsolutePosition(ref: React.RefObject<GuiObject>) {
	const [position, setPosition] = useState(Vector2.one);

	useEffect(() => {
		const node = ref.current;
		if (!node) {
			return;
		}
		setPosition(node.AbsolutePosition);
		const c = node.GetPropertyChangedSignal("AbsolutePosition").Connect(() => setPosition(node.AbsolutePosition));
		return () => c.Disconnect();
	}, [ref]);

	return position;
}

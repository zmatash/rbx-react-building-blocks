import { useEffect, useState } from "@rbxts/react";

export function useAbsoluteSize(ref: React.RefObject<GuiObject>) {
	const [size, setSize] = useState(Vector2.one);

	useEffect(() => {
		const node = ref.current;
		if (!node) {
			return;
		}
		setSize(node.AbsoluteSize);
		const c = node.GetPropertyChangedSignal("AbsoluteSize").Connect(() => setSize(node.AbsoluteSize));
		return () => c.Disconnect();
	}, [ref]);

	return size;
}

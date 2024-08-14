import { useEffect } from "@rbxts/react";

export function useMouse1Down(ref: React.RefObject<GuiObject>, onClick: () => void) {
	useEffect(() => {
		const node = ref.current;
		if (node) {
			const connection = node.InputBegan.Connect((input) => {
				if (input.UserInputType === Enum.UserInputType.MouseButton1) {
					onClick();
				}
			});
			return () => connection.Disconnect();
		}
	}, [ref, onClick]);
}

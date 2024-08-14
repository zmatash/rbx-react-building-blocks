import { useEffect } from "@rbxts/react";

export function useMouse2Up(ref: React.RefObject<GuiObject>, onClick: () => void) {
	useEffect(() => {
		const node = ref.current;
		if (node) {
			const connection = node.InputEnded.Connect((input) => {
				if (input.UserInputType === Enum.UserInputType.MouseButton2) {
					onClick();
				}
			});
			return () => connection.Disconnect();
		}
	}, [ref, onClick]);
}

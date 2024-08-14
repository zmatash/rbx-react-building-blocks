import { RefObject, useEffect, useState } from "@rbxts/react";
import { UserInputService } from "@rbxts/services";
import useHover from "./useHover";

export function useHold(ref: RefObject<GuiObject>) {
	const [isHolding, setIsHolding] = useState(false);
	const isHovered = useHover(ref);

	const listenForInputStart = (node: GuiObject) => {
		return node.InputBegan.Connect((input) => {
			if (input.UserInputType === Enum.UserInputType.MouseButton1) {
				setIsHolding(true);
				listenForInputEnded();
			}
		});
	};

	const listenForInputEnded = () => {
		UserInputService.InputEnded.Once((input) => {
			if (input.UserInputType === Enum.UserInputType.MouseButton1) {
				setIsHolding(false);
			}
		});
	};

	useEffect(() => {
		const node = ref.current;
		if (node && isHovered) {
			const inputStart = listenForInputStart(node);

			return () => {
				inputStart.Disconnect();
			};
		}
	}, [ref, isHovered]);

	return isHolding;
}

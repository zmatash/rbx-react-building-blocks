import { useEffect, useState } from "@rbxts/react";

export function useHover(ref: React.RefObject<GuiObject>) {
	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => {
		const node = ref.current;
		if (node) {
			const handleMouseOver = () => setIsHovered(true);
			const handleMouseOut = () => setIsHovered(false);

			const mouseIn = node.MouseEnter.Connect(handleMouseOver);
			const mouseOut = node.MouseLeave.Connect(handleMouseOut);

			return () => {
				mouseIn.Disconnect();
				mouseOut.Disconnect();
			};
		}
	}, [ref]);

	return isHovered;
}

export default useHover;

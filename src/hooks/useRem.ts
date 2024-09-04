import { useContext } from "@rbxts/react";
import { RemContext } from "./providers/rem-provider";

export function useRem() {
	const remSize = useContext(RemContext);

	function toRem(px: number) {
		return px * remSize;
	}

	return $tuple(toRem, remSize);
}

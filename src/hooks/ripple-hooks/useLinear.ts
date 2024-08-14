import { Dispatch, SetStateAction } from "@rbxts/react";
import { LinearOptions, MotionGoal } from "@rbxts/ripple";
import { useMotion } from "./useMotion";

export function useLinear<T extends MotionGoal>(
	setValue: Dispatch<SetStateAction<T>>,
	linearConfig: LinearOptions = {},
	cancelFlag: boolean = false,
) {
	return useMotion(setValue, linearConfig, cancelFlag, "linear");
}

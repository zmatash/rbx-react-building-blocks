import { Dispatch, SetStateAction } from "@rbxts/react";
import { MotionGoal, SpringOptions } from "@rbxts/ripple";
import { useMotion } from "./useMotion";

export function useSpring<T extends MotionGoal>(
	setValue: Dispatch<SetStateAction<T>>,
	springConfig: SpringOptions = {},
	cancelFlag: boolean = false,
) {
	return useMotion(setValue, springConfig, cancelFlag, "spring");
}

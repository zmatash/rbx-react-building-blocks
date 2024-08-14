import { Dispatch, SetStateAction } from "@rbxts/react";
import { MotionGoal, TweenOptions } from "@rbxts/ripple";
import { useMotion } from "./useMotion";

export function useTween<T extends MotionGoal>(
	setValue: Dispatch<SetStateAction<T>>,
	tweenConfig: TweenOptions = {},
	cancelFlag: boolean = false,
) {
	return useMotion(setValue, tweenConfig, cancelFlag, "tween");
}

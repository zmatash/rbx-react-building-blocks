import { Dispatch, SetStateAction } from "@rbxts/react";
import { MotionGoal } from "@rbxts/ripple";
import { useAutoMotion } from "./useAutoMotion";

export function useAutoTween<T extends MotionGoal, TweenOptions>(
	setValue: Dispatch<SetStateAction<T>>,
	cancelFlag: boolean = false,
) {
	return useAutoMotion<T, TweenOptions>(setValue, "spring");
}

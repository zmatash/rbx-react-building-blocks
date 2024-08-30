import { Dispatch, SetStateAction } from "@rbxts/react";
import { MotionGoal } from "@rbxts/ripple";
import { useAutoMotion } from "./useAutoMotion";

export function useAutoSpring<T extends MotionGoal, SpringOptions>(
	setValue: Dispatch<SetStateAction<T>>,
	cancelFlag: boolean = false,
) {
	return useAutoMotion<T, SpringOptions>(setValue, "spring");
}

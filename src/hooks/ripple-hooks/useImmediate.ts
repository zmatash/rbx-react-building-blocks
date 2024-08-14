import { Dispatch, SetStateAction } from "@rbxts/react";
import { MotionGoal } from "@rbxts/ripple";
import { useMotion } from "./useMotion";

export function useImmediate<T extends MotionGoal>(setValue: Dispatch<SetStateAction<T>>, cancelFlag: boolean = false) {
	return useMotion(setValue, {}, cancelFlag, "immediate");
}

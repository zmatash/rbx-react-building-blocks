import { Dispatch, SetStateAction, useRef } from "@rbxts/react";
import {
	LinearOptions,
	Motion,
	MotionGoal,
	PartialMotionGoal,
	SpringOptions,
	TweenOptions,
	createMotion,
} from "@rbxts/ripple";

type MotionType = "tween" | "spring" | "linear" | "immediate";

export function useAutoMotion<T extends MotionGoal, K = TweenOptions | SpringOptions | LinearOptions>(
	setValue: Dispatch<SetStateAction<T>>,
	motionType: MotionType,
) {
	const motionRef = useRef<Motion<T>>();

	const cancelMotion = () => {
		if (motionRef.current) {
			motionRef.current.stop();
			motionRef.current = undefined;
		}
	};

	const doMotion = <U extends PartialMotionGoal<T>>(start: T, goal: U, config?: K): Promise<void> => {
		return new Promise((resolve) => {
			if (motionRef.current) {
				cancelMotion();
			}

			const motion = createMotion(start);
			motionRef.current = motion;

			switch (motionType) {
				case "linear":
					motion.linear(goal, config as LinearOptions);
					break;
				case "spring":
					motion.spring(goal, config as SpringOptions);
					break;
				case "tween":
					motion.tween(goal, config as TweenOptions);
					break;
				case "immediate":
					motion.immediate(goal);
					break;
			}

			motion.start();

			motion.onStep((value) => {
				setValue(value);
			});

			motion.onComplete(() => {
				motionRef.current = undefined;
				resolve();
			});
		});
	};

	return $tuple(doMotion, cancelMotion);
}

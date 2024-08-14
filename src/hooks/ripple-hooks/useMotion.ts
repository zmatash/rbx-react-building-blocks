import { Dispatch, SetStateAction, useEffect, useMemo, useRef } from "@rbxts/react";
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

export function useMotion<T extends MotionGoal>(
	setValue: Dispatch<SetStateAction<T>>,
	config: TweenOptions | SpringOptions | LinearOptions = {},
	cancelFlag: boolean = false,
	motionType: MotionType,
) {
	const motionRef = useRef<Motion<T>>();

	useEffect(() => {
		if (cancelFlag && motionRef.current) {
			motionRef.current.stop();
			motionRef.current = undefined;
		}

		return () => {
			if (motionRef.current) {
				motionRef.current.stop();
			}
		};
	}, [cancelFlag]);

	const doMotion = <U extends PartialMotionGoal<T>>(start: T, goal: U): Promise<void> => {
		return new Promise((resolve) => {
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

			switch (motionType) {
				case "immediate":
					motion.immediate(goal);
					break;
				case "linear":
					motion.linear(goal, config as LinearOptions);
					break;
				case "spring":
					motion.spring(goal, config as SpringOptions);
					break;
				case "tween":
					motion.tween(goal, config as TweenOptions);
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

	return useMemo(() => doMotion, []);
}

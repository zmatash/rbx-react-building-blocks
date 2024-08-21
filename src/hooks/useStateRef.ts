import { useEffect, useRef } from "@rbxts/react";

export function useStateRef<T>(state: T) {
	const ref = useRef<T>(state);
	useEffect(() => {
		ref.current = state;
	}, [state]);

	return ref;
}

import { useEffect, useRef } from "@rbxts/react";

export function useHasMounted() {
	const hasMounted = useRef(false);
	useEffect(() => {
		hasMounted.current = true;
	}, []);
	return hasMounted.current;
}

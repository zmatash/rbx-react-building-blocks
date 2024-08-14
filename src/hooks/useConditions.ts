import { useEffect, useState } from "@rbxts/react";

export function useConditions(...conditionals: boolean[]) {
	const [conditionsMet, setConditionsMet] = useState(false);

	useEffect(() => {
		setConditionsMet(conditionals.every((condition) => condition));
	}, [conditionals]);

	return conditionsMet;
}

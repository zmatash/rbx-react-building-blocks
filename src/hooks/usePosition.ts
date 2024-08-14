import { useEffect, useState } from "@rbxts/react";
import { RunService } from "@rbxts/services";

export function usePosition(isEnabled: boolean, model: Model) {
	const [position, setPosition] = useState<Vector3>(model.GetPivot().Position);

	useEffect(() => {
		if (!isEnabled) return;
		const connection = RunService.PostSimulation.Connect(() => {
			setPosition(model.GetPivot().Position);
		});
		return () => connection.Disconnect();
	}, [model, isEnabled]);

	return position;
}

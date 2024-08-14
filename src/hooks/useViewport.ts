import { useEffect, useState } from "@rbxts/react";
import { Workspace } from "@rbxts/services";

export function useViewport() {
	const [camera, setCamera] = useState(Workspace.CurrentCamera);
	const [viewportSize, setViewportSize] = useState<Vector2>();

	useEffect(() => {
		if (camera) {
			setViewportSize(camera.ViewportSize);
			const viewportUpdate = camera.GetPropertyChangedSignal("ViewportSize").Connect(() => {
				setViewportSize(camera.ViewportSize);
			});

			return () => {
				viewportUpdate.Disconnect();
			};
		}
	}, [camera]);

	return viewportSize;
}

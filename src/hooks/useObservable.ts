import { EventObject } from "@mattrbx/observer-framework";
import { useEffect, useState } from "@rbxts/react";

export function useObservable<T>(event: EventObject<T>) {
	const [data, setData] = useState<T>();

	useEffect(() => {
		const observer = event.Subscribe((newData: T) => setData(newData));

		return () => {
			observer.Disconnect();
		};
	}, [event]);

	return data;
}

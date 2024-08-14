import React, { ReactNode, createContext, useState } from "react";

export const RemContext = createContext<number>(16);

function RemProvider({ children, baseFontSize }: { children: ReactNode; baseFontSize: number }) {
	const [remSize, setRemSize] = useState(baseFontSize);

	return <RemContext.Provider value={remSize}>{children}</RemContext.Provider>;
}

export { RemProvider };

import React from "react";
const MomentaryTaskContext = React.createContext({
	name: "",
	start: "",
	duration: 0,
	endTime: "",
	date: "",
	icon: "",
	state: "",
	setMomentaryTask: () => {},
});
export default MomentaryTaskContext;

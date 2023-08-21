import React from "react";
const MomentaryTaskContext = React.createContext({
	name: "",
	start: "",
	duration: 2,
	endTime: "",
	date: "",
	icon: "",
	state: "",
});
export default MomentaryTaskContext;

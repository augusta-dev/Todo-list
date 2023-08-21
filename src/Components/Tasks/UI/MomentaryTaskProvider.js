import { useReducer } from "react";
import MomentaryTaskContext from "./MomentaryTaskContext";
const defaultTask = {
	name: "",
	start: "",
	duration: 2,
	endTime: "",
	date: "",
	icon: "",
	state: "",
};
const setTaskDetails = (state, action) => {
	if (action.type === "SET_TASK_DETAILS") {
		const currentTaskName = action.item.name;
		return {
			name: currentTaskName,
			start: action.item.start,
			endTime: action.item.endTime,
			date: action.item.date,
			icon: action.item.icon,
			state: action.item.state,
		};
	}
	return defaultTask;
};
const MomentaryTaskProvider = (props) => {
	const [task, dispatchTaskDetails] = useReducer(setTaskDetails, defaultTask);

	const setMomentaryTaskHandler = (item) => {
		dispatchTaskDetails({ type: "SET_TASK_DETAILS", item: item });
	};

	const taskContext = {
		name: task.name,
		start: task.start,
		duration: task.duration,
		endTime: task.endTime,
		date: task.date,
		icon: task.icon,
		state: task.state,
		setMomentaryTask: setMomentaryTaskHandler,
	};
	
	return (
		<MomentaryTaskContext.Provider value={taskContext}>
			{props.children}
		</MomentaryTaskContext.Provider>
	);
};
export default MomentaryTaskProvider;

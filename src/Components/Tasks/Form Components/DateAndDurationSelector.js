import { useState } from "react";
import { Input } from "@material-tailwind/react";

const DateAndDurationSelector = (props) => {
	const [taskDate, setTaskDate] = useState("");
	const dateEventHandler = (event) => {
		setTaskDate(event.target.value);
        props.taskDateSetter(event.target.value);
	};

	const [taskDuration, setTaskDuration] = useState("");
	const durationEventHandler = (event) => {
		setTaskDuration(event.target.value);
        props.taskDurationSetter(event.target.value);
	};

	return (
		<>
			<Input
				type="date"
				label="Due Date"
				id="name"
				value={taskDate}
				onChange={dateEventHandler}
			/>
			<Input
				type="number"
				label="Duration"
				id="name"
				value={taskDuration}
				onChange={durationEventHandler}
			/>
		</>
	);
};
export default DateAndDurationSelector;
import { useState } from "react";
import { Input } from "@material-tailwind/react";
const TimeSelector = (props) => {
	const [taskStartTime, setTaskStartTime] = useState("");
	const [displayedStartTime, setDisplayedStartTime] = useState("");
	const [displayedEndTime, setDisplayedEndTime] = useState("");
	const [taskEndTime, setTaskEndTime] = useState("");

	const startTimeEventHandler = (event) => {
		setDisplayedStartTime(event.target.value);
		const taskStart = event.target.value;
		const newDate = new Date(`${props.taskDateValue}, ${taskStart}`);
		setTaskStartTime(newDate.toLocaleTimeString("en-US"));
		endTimeEventHandler(newDate);
		// console.log(urgencyTitle)
	};
	const endTimeEventHandler = (date) => {
		const endTimeDate = new Date(
			date.getTime() + parseInt(props.taskDurationValue, 10) * 60 * 60 * 1000,
		);
		const endTimeString = `${endTimeDate
			.getHours()
			.toString()
			.padStart(2, "0")}:${endTimeDate
			.getMinutes()
			.toString()
			.padStart(2, "0")}`;

		// Set the calculated end time to be displayed
		setDisplayedEndTime(endTimeString);
		// setDisplayedEndTime(displayedStartTime+taskDuration);
		const endHours = date.getHours() + parseInt(props.taskDurationValue, 10);
		const endDate = new Date(date);
		endDate.setHours(endHours);
		setTaskEndTime(endDate.toLocaleTimeString("en-US"));
	};
	return (
		<>
			<Input
				type="time"
				label="Start Time"
				id="name"
				value={displayedStartTime}
				onChange={startTimeEventHandler}
			/>
			<Input
				type="time"
				label="End Time"
				id="name"
				value={displayedEndTime}
			/>
		</>
	);
};
export default TimeSelector;
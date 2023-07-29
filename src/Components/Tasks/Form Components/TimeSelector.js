import { Input } from "@material-tailwind/react";
import { useEffect } from "react";
const TimeSelector = (props) => {
	const startTimeEventHandler = (event) => {
		props.displayedStartTimeSetter(event.target.value);	
	};
	
	const endTimeEventHandler = (date, durationValue) => {
		const endTimeDate = new Date(
			date.getTime() +
				parseInt(props.taskDurationValue, 10) * 60 * 60 * 1000,
		);
		const endTimeString = `${endTimeDate
			.getHours()
			.toString()
			.padStart(2, "0")}:${endTimeDate
			.getMinutes()
			.toString()
			.padStart(2, "0")}`;

		// Set the calculated end time to be displayed
		props.displayedEndTimeSetter(endTimeString);
		const endHours =
			date.getHours() + parseInt(durationValue, 10);
		const endDate = new Date(date);
		endDate.setHours(endHours);
		props.taskEndTimeSetter(endDate.toLocaleTimeString("en-US"));
	};
	let taskStart = '';
	useEffect(() => {
		taskStart = props.setDisplayedStartTime;
		const newDate = new Date(`${props.taskDateValue}, ${taskStart}`);
		props.taskStartTimeSetter(newDate.toLocaleTimeString("en-US"));
		endTimeEventHandler(newDate, props.taskDurationValue);
	}
	, [props.setDisplayedStartTime, props.taskDurationValue])
	return (
		<>
			<Input
				type="time"
				label="Start Time"
				id="name"
				value={props.setDisplayedStartTime}
				onChange={startTimeEventHandler}
			/>
			<Input
				type="time"
				label="End Time"
				id="name"
				value={props.setDisplayedEndTime}
			/>
		</>
	);
};
export default TimeSelector;

import { Input } from "@material-tailwind/react";
const TimeSelector = (props) => {
	const startTimeEventHandler = (event) => {
		props.displayedStartTimeSetter(event.target.value);
		const taskStart = event.target.value;
		const newDate = new Date(`${props.taskDateValue}, ${taskStart}`);
		props.taskStartTimeSetter(newDate.toLocaleTimeString("en-US"));
		endTimeEventHandler(newDate);
	};
	const endTimeEventHandler = (date) => {
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
			date.getHours() + parseInt(props.taskDurationValue, 10);
		const endDate = new Date(date);
		endDate.setHours(endHours);
		props.taskEndTimeSetter(endDate.toLocaleTimeString("en-US"));
	};
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

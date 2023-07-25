import { Input } from "@material-tailwind/react";

const DateAndDurationSelector = (props) => {
	const dateEventHandler = (event) => {
		props.taskDateSetter(event.target.value);
	};

	const durationEventHandler = (event) => {
		props.taskDurationSetter(event.target.value);
	};

	return (
		<>
			<Input
				type="date"
				label="Due Date"
				id="name"
				value={props.setTaskDate}
				onChange={dateEventHandler}
			/>
			<Input
				type="number"
				label="Duration"
				id="name"
				value={props.setTaskDuration}
				onChange={durationEventHandler}
			/>
		</>
	);
};
export default DateAndDurationSelector;

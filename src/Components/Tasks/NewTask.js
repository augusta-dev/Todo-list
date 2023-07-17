import { Input, Typography, Select, Option } from "@material-tailwind/react";
import { useState } from "react";
const NewTask = (props) => {
	const [taskName, setTaskName] = useState("");
	const nameEventHandler = (event) => {
		setTaskName(event.target.value);
	};

	const [taskIcon, setTaskIcon] = useState("");
	const iconEventHandler = (event) => {
		setTaskIcon(event.target.value);
	};

	const [taskDate, setTaskDate] = useState("");
	const dateEventHandler = (event) => {
		setTaskDate(event.target.value);
	};

	const [taskDuration, setTaskDuration] = useState("");
	const durationEventHandler = (event) => {
		setTaskDuration(event.target.value);
		// startTimeEventHandler();
	};

	const [taskStartTime, setTaskStartTime] = useState("");
	const [taskEndTime, setTaskEndTime] = useState("");

	const startTimeEventHandler = (event) => {
		setTaskStartTime(event.target.value);
		setTaskEndTime(parseInt(taskStartTime) + parseInt(taskDuration));
	};
	const taskData = {
		name: taskName,
		icon: taskIcon,
		duration: taskDuration,
		start: taskStartTime,
		endTime: taskEndTime,
	};
	const submitEventHandler = (event) => {
		event.preventDefault();
		props.onAddTask(taskData);
		setTaskDate("");
		setTaskStartTime("");
		setTaskEndTime("");
		setTaskDuration("");
		setTaskName("");
		setTaskIcon("");
	};

	return (
		<form
			action=""
			onSubmit={submitEventHandler}
		>
			<div>
				<div className="grid grid-cols-2 gap-2 pb-3">
					<Input
						type="text"
						label="Name of task"
						id="name"
						value={taskName}
						onChange={nameEventHandler}
					/>
					<Select
						label="Select Icon"
						animate={{
							mount: { y: 0 },
							unmount: { y: 25 },
						}}
						value={taskIcon}
						onSelect={iconEventHandler}
					>
						<Option>Material Tailwind HTML</Option>
						<Option>Material Tailwind React</Option>
						<Option>Material Tailwind Vue</Option>
						<Option>Material Tailwind Angular</Option>
						<Option>Material Tailwind Svelte</Option>
					</Select>
				</div>

				<div className="grid grid-cols-2 gap-2 pb-3">
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
				</div>

				<div className="grid grid-cols-2 gap-2 pb-3">
					<Input
						type="time"
						label="Start Time"
						id="name"
						value={taskStartTime}
						onChange={startTimeEventHandler}
					/>
					<Input
						type="time"
						label="End Time"
						id="name"
						value={taskEndTime}
					/>
				</div>
				<button type="submit">Yes</button>
			</div>
		</form>
	);
};
export default NewTask;

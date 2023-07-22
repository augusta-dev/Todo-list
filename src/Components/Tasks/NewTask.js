import { Input, Typography, Select, Option } from "@material-tailwind/react";
import { useState } from "react";
const NewTask = (props) => {
	const urgencyModes = [
		{
			title: "For Today",
			color: "fill-navy-900",
		},
		{
			title: "Priorities",
			color: "fill-red-900",
		},
	];
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
	var taskDur = 0;
	const durationEventHandler = (event) => {
		setTaskDuration(event.target.value);
		taskDur = parseInt(event.target.value, 10);
		// startTimeEventHandler();
	};

	const [taskStartTime, setTaskStartTime] = useState("");
	const [displayedStartTime, setDisplayedStartTime] = useState("");
	const [displayedEndTime, setDisplayedEndTime] = useState("");
	const [taskEndTime, setTaskEndTime] = useState("");

	const startTimeEventHandler = (event) => {
		setDisplayedStartTime(event.target.value);
		const taskStart = event.target.value;
		const newDate = new Date(`${taskDate}, ${taskStart}`);
		setTaskStartTime(newDate.toLocaleTimeString("en-US"));
		endTimeEventHandler(newDate);
		console.log(newDate);
		//
		// console.log(taskDuration);
	};
	const endTimeEventHandler = (date) => {
		const endTimeDate = new Date(
			date.getTime() + parseInt(taskDuration, 10) * 60 * 60 * 1000,
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
		const endHours = date.getHours() + parseInt(taskDuration, 10);
		const endDate = new Date(date);
		endDate.setHours(endHours);
		setTaskEndTime(endDate.toLocaleTimeString("en-US"));
		console.log(endDate);
		console.log(endHours);
		// console.log(taskDur);
	};
	const taskData = {
		name: taskName,
		icon: taskIcon,
		date: taskDate,
		duration: taskDuration,
		start: taskStartTime,
		endTime: taskEndTime,
	};
	const submitEventHandler = (event) => {
		event.preventDefault();
		if (taskData.name && taskData.date) {
			props.onAddTask(taskData);
			props.onSubmit();
			setTaskDate("");
			setTaskStartTime("");
			setTaskEndTime("");
			setTaskDuration("");
			setTaskName("");
			setTaskIcon("");
			setDisplayedEndTime("");
			setDisplayedStartTime("");
		} else {
			setTaskName("Please fill the form completely");
		}
	};

	return (
		<form
			action=""
			onSubmit={submitEventHandler}
			className={props.className}
		>
			<div>
				<div className="grid grid-cols-1 gap-2 pb-3">
					<Input
						type="text"
						label="Name of task"
						id="name"
						value={taskName}
						onChange={nameEventHandler}
					/>
				</div>
				<div className="grid grid-cols-2 gap-2 pb-3">
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
					<Select
						label="Select Urgency"
						animate={{
							mount: { y: 0 },
							unmount: { y: 25 },
						}}
						value={taskIcon}
						onSelect={iconEventHandler}
					>
						{urgencyModes.map((item) => (
							<Option className=" h-">
								<svg className={`${item.color} h-5 w-5 inline`}>
									<circle
										cx="10"
										cy="10"
										r="8"
									/>
								</svg>
								<span className="pl-2">{item.title}</span>
							</Option>
						))}
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
						value={displayedStartTime}
						onChange={startTimeEventHandler}
					/>
					<Input
						type="time"
						label="End Time"
						id="name"
						value={displayedEndTime}
					/>
				</div>
				<button type="submit">Yes</button>
			</div>
		</form>
	);
};
export default NewTask;

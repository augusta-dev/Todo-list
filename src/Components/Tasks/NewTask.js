import {
	Input,
	Typography,
	Select,
	Option,
	Button,
} from "@material-tailwind/react";
import { useState } from "react";
import submitIcon from "../../Assets/upload.png";
import Form from "./Form Components/Form";
const NewTask = (props) => {
	const urgencyModes = [
		{
			title: "Not A Priority",
			color: "fill-navy-900",
		},
		{
			title: "Priority",
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
	const durationEventHandler = (event) => {
		setTaskDuration(event.target.value);
	};

	const [taskStartTime, setTaskStartTime] = useState("");
	const [displayedStartTime, setDisplayedStartTime] = useState("");
	const [displayedEndTime, setDisplayedEndTime] = useState("");
	const [taskEndTime, setTaskEndTime] = useState("");

	const [taskUrgency, setTaskUrgency] = useState("");
	// const [urgencyTitle, setUrgencyTitle] = useState("");

	// const urgencyEventHandler = (event) => {
	// 	const selectedUrgency = event.target.value;
	// 	setUrgencyTitle(selectedUrgency);
	// };

	const startTimeEventHandler = (event) => {
		setDisplayedStartTime(event.target.value);
		const taskStart = event.target.value;
		const newDate = new Date(`${taskDate}, ${taskStart}`);
		setTaskStartTime(newDate.toLocaleTimeString("en-US"));
		endTimeEventHandler(newDate);
		// console.log(urgencyTitle)
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
	};
	const taskData = {
		name: taskName,
		icon: taskIcon,
		date: taskDate,
		duration: taskDuration,
		start: taskStartTime.slice(0, 5) + taskStartTime.slice(8, 11),
		endTime: taskEndTime.slice(0, 5) + taskEndTime.slice(8, 11),
		state: "incomplete",
		urgency: taskUrgency,
	};
	const submitEventHandler = (event) => {
		event.preventDefault();
		console.log(taskData);
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
		<Form></Form>
	);
};
export default NewTask;

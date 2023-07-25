import { useState } from "react";
import IconSelector from "./IconSelector";
import UrgencyModeSelector from "./UrgencyModeSelector";
import NameSelector from "./NameSelector";
import DateAndDurationSelector from "./DateAndDurationSelector";
import TimeSelector from "./TimeSelector";
import { Button } from "@material-tailwind/react";
import submitIcon from "../../../Assets/upload.png";

const Form =  (props) => {
	const [taskDuration, setTaskDuration] = useState("");
	const [taskDate, setTaskDate] = useState("");
	const [taskName, setTaskName] = useState("");
	const [taskIcon, setTaskIcon] = useState("");
	const [taskStartTime, setTaskStartTime] = useState("");
	const [taskEndTime, setTaskEndTime] = useState("");
	const [displayedStartTime, setDisplayedStartTime] = useState("");
	const [displayedEndTime, setDisplayedEndTime] = useState("");
	const [taskUrgency, setTaskUrgency] = useState("");



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
        <form
			action=""
			onSubmit={submitEventHandler}
			className={`${props.className} pb-5`}
		>
			<div>
				<div className="grid grid-cols-1 gap-2 pb-3">
					<NameSelector taskNameSetter={setTaskName}></NameSelector>
				</div>
				<div className="grid grid-cols-2 gap-2 pb-3">
					<IconSelector taskIconSetter={setTaskIcon}></IconSelector>
					<UrgencyModeSelector ></UrgencyModeSelector>
				</div>

				<div className="grid grid-cols-2 gap-2 pb-3">
					<DateAndDurationSelector taskDurationSetter={setTaskDuration} taskDateSetter={setTaskDate}></DateAndDurationSelector>
				</div>

				<div className="grid grid-cols-2 gap-2 pb-3">
					<TimeSelector taskDurationValue={taskDuration} taskDateValue={taskDate}></TimeSelector>
				</div>
				<div className="flex flex-wrap items-center w-full justify-center">
					<Button
						type="submit"
						variant="outlined"
						color="blue-gray"
						className="flex items-center gap-3 pt-2 pb-2 w-1/2 justify-center"
					>
						Add Task
						<img
							src={submitIcon}
							alt="metamask"
							className="h-6 w-6"
						/>
					</Button>
				</div>
			</div>
		</form>
    )
}
export default Form;
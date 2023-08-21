import { useState } from "react";
import IconSelector from "./IconSelector";
import UrgencyModeSelector from "./UrgencyModeSelector";
import NameSelector from "./NameSelector";
import DateAndDurationSelector from "./DateAndDurationSelector";
import TimeSelector from "./TimeSelector";
import { Button } from "@material-tailwind/react";
import submitIcon from "../../../Assets/upload.png";
import { ErrorModal } from "../UI/ErrorModal";

const Form = (props) => {
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
	const [errorModalVisibility, setErrorModalVisibility] = useState(false);
	const displayErrorModal = () => {
		setErrorModalVisibility(!errorModalVisibility);
		console.log(errorModalVisibility);
	}
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
			setTaskUrgency("")
			setDisplayedEndTime("");
			setDisplayedStartTime("");
		} else {
			displayErrorModal();
		}
	};
	
	
	return (
		<form
			action=""
			onSubmit={submitEventHandler}
			className={`${props.className} pb-5`}
		>
			<ErrorModal onClick={displayErrorModal} className={`${errorModalVisibility ? "block" : "hidden"}`} visibility={errorModalVisibility}></ErrorModal>
			<div>
				<div className="grid grid-cols-1 gap-2 pb-3">
					<NameSelector
						taskNameSetter={setTaskName}
						setTaskName={taskName}
					></NameSelector>
				</div>
				<div className="grid grid-cols-2 gap-2 pb-3">
					<IconSelector
						taskIconSetter={setTaskIcon}
						setTaskIcon={taskIcon}
					></IconSelector>
					<UrgencyModeSelector
						taskUrgencySetter={setTaskUrgency}
						setTaskUrgency={taskUrgency}
					></UrgencyModeSelector>
				</div>

				<div className="grid grid-cols-2 gap-2 pb-3">
					<DateAndDurationSelector
						taskDurationSetter={setTaskDuration}
						taskDateSetter={setTaskDate}
						setTaskDate={taskDate}
						setTaskDuration={taskDuration}
					></DateAndDurationSelector>
				</div>

				<div className="grid grid-cols-2 gap-2 pb-3">
					<TimeSelector
						taskDurationValue={taskDuration}
						taskDateValue={taskDate}
						taskStartTimeSetter={setTaskStartTime}
						taskEndTimeSetter={setTaskEndTime}
						displayedStartTimeSetter={setDisplayedStartTime}
						displayedEndTimeSetter={setDisplayedEndTime}
						setDisplayedStartTime={displayedStartTime}
						setDisplayedEndTime={displayedEndTime}
					></TimeSelector>
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
	);
};
export default Form;
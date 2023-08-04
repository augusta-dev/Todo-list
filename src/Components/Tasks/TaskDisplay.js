import { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import TaskItem from "./TaskItem";
import NewTask from "./NewTask";
import broom from "../../Assets/Icons/broom (1).png";
import icon from "../../Assets/plus.png";
import Form from "./Form Components/Form";

const TaskDisplay = (props) => {
	const classes = "" + props.className;
	const currentDate = new Date().toISOString().slice(0, 10);
	const [taskState, setTaskState] = useState("incomplete");
	const [TaskItems, setTaskItem] = useState([
		{
			name: "Clean the gutters completed",
			start: "12:00 PM",
			duration: 2,
			id: 1,
			endTime: "14:00 PM",
			icon: broom,
			state: "Completed",
		},
		{
			name: "Clean the gutters today",
			start: "12:00 PM",
			duration: 2,
			id: 2,
			endTime: "14:00 PM",
			date: "2023-07-23",
			icon: broom,
			state: taskState,
		},
		{
			name: "Clean the gutters",
			start: "12:00 PM",
			duration: 2,
			id: 3,
			endTime: "14:00 PM",
			icon: broom,
			state: taskState,
		},
		{
			name: "Clean the gutters today too",
			start: "12:00 PM",
			duration: 2,
			id: 4,
			endTime: "14:00 PM",
			date: "2023-07-23",
			icon: broom,
			state: taskState,
			urgency: "Priority",
		},
		{
			name: "Clean the gutters",
			start: "12:00 PM",
			duration: 2,
			id: 5,
			endTime: "14:00 PM",
			icon: broom,
			state: "Completed",
		},
	])
// 	const [TaskItems, setTaskItem] = useState(taskItems);
//   useEffect(() => {
//     const taskList = JSON.parse(localStorage.getItem("taskList"));
//     if (taskList) {
//       setTaskItem(taskList);
//     }
//   }, []);

//   const setLocalStorage = (TaskItems) => {
//     localStorage.setItem("taskList", JSON.stringify(TaskItems));
//   };

//   useEffect(() => {
//     setLocalStorage(TaskItems);
//   }, [TaskItems]);
	// const [TaskItems, setTaskItem] = useState(taskItems);

	// const setLocalStorage = (TaskItems) => {
	// 	localStorage.setItem("taskList", JSON.stringify(TaskItems));
	// } 
	// let taskList = JSON.parse(localStorage.getItem("taskList"));
	// setTaskItem(taskList);
	// useEffect(() => {
	// 	setLocalStorage(TaskItems);
	// }, [TaskItems]);
	// setTaskItem(localStorage.getItem("taskList"));

	const [isVisible, setVisibility] = useState(false);
	const changeVisibility = () => {
		setVisibility((prevState) => !prevState);
	};
	const addTaskHandler = (enteredTask) => {
		setTaskItem((prevTasks) => {
			const tasks = [...prevTasks, { ...enteredTask, id: Math.random() }];
			return tasks;
		});
	};
	const deleteItemHandler = (task) => {
		setTaskItem((prevTasks) => {
			const taskIndex = task.id;
			const tasks = prevTasks.filter((task) => task.id !== taskIndex);
			return tasks;
		});
	};
	const displayedTasks = (() => {
		if (props.onDisplay === "All Tasks" || props.onDisplay === "") {
		  return TaskItems;
		} else if (props.onDisplay === "For Today") {
		  return TaskItems.filter((task) => task.date === currentDate);
		} else if (props.onDisplay === "Priorities") {
		  return TaskItems.filter((task) => task.urgency === "Priority");
		} else {
		  return TaskItems.filter((task) => task.state === props.onDisplay);
		}
	})();
	// useEffect(() => {
	// 	adjustDisplay(props.onDisplay);
	// }, [props.onDisplay]);

	return (
		<div className={classes}>
			<Typography
				variant="h4"
				className="font-arimo"
			>
				For Today
			</Typography>
			<div
				className={`flex flex-wrap pt-2 pb-3 pl-5`}
				onClick={changeVisibility}
			>
				<img
					src={icon}
					alt=""
					className="h-4 w-4"
				/>
				<p className="text-gray-900 pl-3 -mt-1">Add New</p>
			</div>
			<Form
				onAddTask={addTaskHandler}
				className={`${isVisible ? "block" : "hidden"}`}
				onSubmit={changeVisibility}
				taskStateSetter={setTaskState}
			></Form>

			{displayedTasks.map((taskItem) => {
				return (
					<TaskItem
						key={taskItem.id}
						start={taskItem.start}
						name={taskItem.name}
						duration={taskItem.duration}
						endTime={taskItem.endTime}
						icon={taskItem.icon}
						state={taskItem.state}
						taskStateSetter={setTaskState}
						onDelete={() => deleteItemHandler(taskItem)}
					/>
				);
			})}
		</div>
	);
};
export default TaskDisplay;
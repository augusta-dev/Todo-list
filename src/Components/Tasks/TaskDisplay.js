import icon from "../../Assets/plus.png";
import TaskItem from "./TaskItem";
import NewTask from "./NewTask";
import { useState, useEffect } from "react";
import broom from "../../Assets/broom.png";

import { Typography } from "@material-tailwind/react";
const TaskDisplay = (props) => {
	const classes = "" + props.className;
	const [TaskItems, setTaskItem] = useState([
		{
			name: "Clean the gutters completed",
			start: 12,
			duration: 2,
			id: 1,
			endTime: 14,
			icon: broom,
			state: "Completed",
		},
		{
			name: "Clean the gutters",
			start: 12,
			duration: 2,
			id: 2,
			endTime: 14,
			icon: broom,
			state: "incomplete",
		},
		{
			name: "Clean the gutters",
			start: 12,
			duration: 2,
			id: 3,
			endTime: 14,
			icon: broom,
			state: "incomplete",
		},
		{
			name: "Clean the gutters",
			start: 12,
			duration: 2,
			id: 4,
			endTime: 14,
			icon: broom,
			state: "incomplete",
		},
		{
			name: "Clean the gutters",
			start: 12,
			duration: 2,
			id: 5,
			endTime: 14,
			icon: broom,
			state: "Completed",
		},
	]);

	const [isVisible, setVisibility] = useState(false);
	const [isVisibleToo, setVisibilityToo] = useState(false);
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
			// // console.log();
			const taskIndex = task.id;
			// prevTasks.splice(itemIndex, 1);
			// const updatedTasks = [
			// 	...prevTasks.slice(0, taskIndex),
			// 	...prevTasks.slice(taskIndex + 1),
			// ];
			// return updatedTasks;
			const tasks = prevTasks.filter((task) => task.id !== taskIndex);
			return tasks;
		});
	};
	const [displayedTasks, setDisplayedTasks] = useState([TaskItems]);
	const adjustDisplay = (title) => {
		console.log(title);
		if (title === "All Tasks"){
			setTaskItem((prevTasks) => {
				const tasks = prevTasks;
				console.log(prevTasks);
				setVisibilityToo(true);
				setDisplayedTasks((prevDisplayedTasks) => {
					return tasks;
				});
				return prevTasks;
			});
		} else{
			setTaskItem((prevTasks) => {
				const tasks = prevTasks.filter((task) => task.state === title);
				console.log(prevTasks);
				setVisibilityToo(true);
				setDisplayedTasks((prevDisplayedTasks) => {
					return tasks;
				});
				return prevTasks;
			});
		}
		

	};
	useEffect(() => {
		adjustDisplay(props.onDisplay);
	}, [props.onDisplay]);

	// adjustDisplay("incomplete");
	// props.adjustDisplayedTasks = ()

	// adjustDisplay(props.onDisplay);
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
			<NewTask
				onAddTask={addTaskHandler}
				className={`${isVisible ? "block" : "hidden"}`}
				onSubmit={changeVisibility}
			></NewTask>
			{/* {TaskItems.map((taskItem) => {
				// var taskId = Math.random().toString();
				return (
					<TaskItem
						key={taskItem.id}
						start={taskItem.start}
						name={taskItem.name}
						duration={taskItem.duration}
						endTime={taskItem.endTime}
						icon={broom}
						state={props.state}
						onDelete={() => deleteItemHandler(taskItem)}
						className={`${isVisibleToo ? "hidden" : "flex"}`}
					/>
				);
			})} */}
			{displayedTasks.map((taskItem) => {
				// var taskId = Math.random().toString();
				return (
					<TaskItem
						key={taskItem.id}
						start={taskItem.start}
						name={taskItem.name}
						duration={taskItem.duration}
						endTime={taskItem.endTime}
						icon={broom}
						state={props.state}
						onDelete={() => deleteItemHandler(taskItem)}
						className={`${isVisibleToo ? "flex" : "hidden"}`}
					/>
				);
			})}
		</div>
	);
};
export default TaskDisplay;

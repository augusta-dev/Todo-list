import icon from "../../Assets/plus.png";
import TaskItem from "./TaskItem";
import NewTask from "./NewTask";
import { useState } from "react";

import { Typography } from "@material-tailwind/react";
const TaskDisplay = (props) => {
	const classes = "" + props.className;
	const [TaskItems, setTaskItem] = useState([
		{ name: "Clean the gutters", start: 12, duration: 2, id: 1, endTime: 14 },
		{ name: "Clean the gutters", start: 12, duration: 2, id: 2, endTime: 14 },
		{ name: "Clean the gutters", start: 12, duration: 2, id: 3, endTime: 14 },
		{ name: "Clean the gutters", start: 12, duration: 2, id: 4, endTime: 14 },
		{ name: "Clean the gutters", start: 12, duration: 2, id: 5, endTime: 14 },
	]);
	// const TaskItems = [
	// 	];
	// const updatedItems = prevTasks.filter(task => task.id !== item.id);
	const addTaskHandler = (enteredTask) => {
		setTaskItem(prevTasks => {
			const tasks = [...prevTasks.slice(), {...enteredTask, id: Math.random()}];
			console.log(enteredTask);
			return tasks;
		})
	}
	const deleteItemHandler = (task) => {
		setTaskItem((prevTasks) => {
			
			// // console.log();
			const taskIndex = prevTasks.indexOf(task);
			// prevTasks.splice(itemIndex, 1);
			const updatedTasks = [...prevTasks.slice(0, taskIndex), ...prevTasks.slice(taskIndex + 1)];
			return updatedTasks;
		});
	};
	return (
		<div className={classes}>
			<Typography
				variant="h4"
				className="font-arimo"
			>
				For Today
			</Typography>
			<div className="flex flex-wrap pt-2 pb-3 pl-5">
				<img
					src={icon}
					alt=""
					className="h-4 w-4"
				/>
				<a className="text-gray-900 pl-3 `-mt-1">Add New</a>
			</div>
			<NewTask onAddTask={addTaskHandler}></NewTask>
			{TaskItems.map((taskItem) => {
				// var taskId = Math.random().toString();
				return (
					<TaskItem
						key={taskItem.id}
						start={taskItem.start}
						name={taskItem.name}
						duration={taskItem.duration}
						endTime = {taskItem.endTime}
						onDelete={() => deleteItemHandler(taskItem)}
					/>
				);
			})}
		</div>
	);
};
export default TaskDisplay;

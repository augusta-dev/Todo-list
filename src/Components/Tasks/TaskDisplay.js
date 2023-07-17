import icon from "../../Assets/plus.png";
import TaskItem from "./TaskItem";
import NewTask from "./NewTask";
import { useState } from "react";

import { Typography } from "@material-tailwind/react";
const TaskDisplay = (props) => {
	const classes = "" + props.className;
	const [TaskItems, setTaskItem] = useState([
		{ name: "Clean the gutters", start: 12, duration: 2 },
		{ name: "Clean the gutters", start: 12, duration: 2 },
		{ name: "Clean the gutters", start: 12, duration: 2 },
		{ name: "Clean the gutters", start: 12, duration: 2 },
		{ name: "Clean the gutters", start: 12, duration: 2 },
		{ name: "Clean the gutters", start: 12, duration: 2 },
		{ name: "Clean the gutters", start: 12, duration: 2 },
		{ name: "Clean the gutters", start: 12, duration: 2 },
		{ name: "Clean the gutters", start: 12, duration: 2 },
		{ name: "Clean the gutters", start: 12, duration: 2 },
		{ name: "Clean the gutters", start: 12, duration: 2 },
	]);
	// const TaskItems = [
	// 	];
	const deleteItemHandler = (item) => {
		TaskItems.unshift(item);
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
			<NewTask></NewTask>
			{TaskItems.map((taskItem) => {
				const taskId = Math.random().toString(); 
				return (
					<TaskItem
						key={taskId}
						start={taskItem.start}
						name={taskItem.name}
						duration={taskItem.duration}
						onDelete={() => deleteItemHandler(taskItem)}
					/>
				);
			})}
		</div>
	);
};
export default TaskDisplay;

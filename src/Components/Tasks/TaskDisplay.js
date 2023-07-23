import { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import TaskItem from "./TaskItem";
import NewTask from "./NewTask";
import broom from "../../Assets/broom.png";
import icon from "../../Assets/plus.png";

const TaskDisplay = (props) => {
	const classes = "" + props.className;
	const currentDate = new Date().toISOString().slice(0, 10);

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
			name: "Clean the gutters today",
			start: 12,
			duration: 2,
			id: 2,
			endTime: 14,
			date: "2023-07-23",
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
			name: "Clean the gutters today too",
			start: 12,
			duration: 2,
			id: 4,
			endTime: 14,
			date: "2023-07-23",
			icon: broom,
			state: "incomplete",
			urgency: "priority",
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
	const [displayedTasks, setDisplayedTasks] = useState([TaskItems]);
	const adjustDisplay = (title) => {
		if (title === "All Tasks" || title === "") {
			setTaskItem((prevTasks) => {
				const tasks = prevTasks;
				setDisplayedTasks((prevDisplayedTasks) => {
					return tasks;
				});
				return prevTasks;
			});
		} else if (title === "For Today") {
			setTaskItem((prevTasks) => {
				const tasks = prevTasks.filter(
					(task) => task.date === currentDate,
				);
				setDisplayedTasks((prevDisplayedTasks) => {
					return tasks;
				});
				return prevTasks;
			});
		} else if (title === "Priorities") {
			setTaskItem((prevTasks) => {
				const tasks = prevTasks.filter(
					(task) => task.urgency === "priority",
				);
				setDisplayedTasks((prevDisplayedTasks) => {
					return tasks;
				});
				return prevTasks;
			});
		} else {
			setTaskItem((prevTasks) => {
				const tasks = prevTasks.filter((task) => task.state === title);
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

			{displayedTasks.map((taskItem) => {
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
					/>
				);
			})}
		</div>
	);
};
export default TaskDisplay;

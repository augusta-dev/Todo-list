import { useState, useEffect, useContext } from "react";
import { Typography } from "@material-tailwind/react";
import TaskItem from "./TaskItem";
import broom from "../../Assets/Icons/broom (1).png";
import icon from "../../Assets/plus.png";
import Form from "./Form Components/Form";
import MomentaryTaskContext from "./UI/MomentaryTaskContext";

const TaskDisplay = (props) => {
	const classes = "" + props.className;
	const curentDate = new Date().toISOString().slice(0, 10);
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
			state: "incomplete",
		},
		{
			name: "Clean the gutters",
			start: "12:00 PM",
			duration: 2,
			id: 3,
			endTime: "14:00 PM",
			icon: broom,
			state: "incomplete",
		},
		{
			name: "Clean the gutters today too",
			start: "12:00 PM",
			duration: 2,
			id: 4,
			endTime: "14:00 PM",
			date: "2023-07-23",
			icon: broom,
			state: "incomplete",
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

	let displayedTasks = (() => {
		if (props.onDisplay === "All Tasks" || props.onDisplay === "") {
			return TaskItems;
		} else if (props.onDisplay === "For Today") {
			return TaskItems.filter((task) => task.date === curentDate);
		} else if (props.onDisplay === "Priorities") {
			return TaskItems.filter((task) => task.urgency === "Priority");
		} else {
			return TaskItems.filter((task) => task.state === props.onDisplay);
		}
	})();
	// const [isChecked, setIsChecked] = useState(false);
	const updateStateHandler = (taskItem) => {
		setTaskItem((prevTasks) =>
			prevTasks.map((task) =>
				task.id === taskItem.id
					? { ...task, state: "Completed" }
					: task,
			),
		);
		console.log(TaskItems);
	};
	const reupdateStateHandler = (taskItem) => {
		setTaskItem((prevTasks) =>
			prevTasks.map((task) =>
				task.id === taskItem.id
					? { ...task, state: "incomplete" }
					: task,
			),
		);
		console.log(TaskItems);
	};
	const taskCtx = useContext(MomentaryTaskContext);

	useEffect(() => {
		const currentDate = new Date();
		const currentDateString = `${currentDate.getFullYear()}-${(
			currentDate.getMonth() + 1
		)
			.toString()
			.padStart(2, "0")}-${currentDate
			.getDate()
			.toString()
			.padStart(2, "0")}`;
		// const currentYear = currentDate.getFullYear();
		// let currentMonth = currentDate.getMonth() + 1;
		// if (currentMonth < 10) {
		// 	currentMonth = `0${currentMonth}`;
		// }
		// const currentDay = currentDate.getDate();
		// const currentDateString = `${currentYear}-${currentMonth}-${currentDay}`;
		let currentHour = currentDate.getHours();
		if (currentHour > 12) {
			currentHour -= 12;
		}

		const momentaryTask = TaskItems.find(
			(taskItem) =>
				taskItem.date === currentDateString &&
				parseInt(taskItem.start.split(":")[0]) <= currentHour &&
				parseInt(taskItem.endTime.split(":")[0]) >= currentHour,
		);
		// const dateIndex = momentaryTask["start"];
		// console.log(dateIndex);
		console.log(momentaryTask);
		if (momentaryTask) {
			taskCtx.setMomentaryTask({
				name: momentaryTask.name,
				start: momentaryTask.start,
				endTime: momentaryTask.endTime,
				id: momentaryTask.id,
				icon: momentaryTask.icon,
				state: momentaryTask.state,
			});
			console.log(taskCtx);
		}
	}, [TaskItems]);
	console.log(taskCtx);

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
						checkHandler={() => updateStateHandler(taskItem)}
						unCheckHandler={() => reupdateStateHandler(taskItem)}
						onDelete={() => deleteItemHandler(taskItem)}
					/>
				);
			})}
		</div>
	);
};
export default TaskDisplay;

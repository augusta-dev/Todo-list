import { useState } from "react";
import "./App.css";
import ComplexNavbar from "./Components/ComplexNavbar";
import Sidebar from "./Components/Sidebar";
import TaskDisplay from "./Components/Tasks/TaskDisplay";


function App(props) {
	// const class = class
	// const [taskToBeDisplayed, setTaskToBeDisplayed] = useState("")
	// const displayTasks = (tasks) => {
	// 	displayTask(tasks);
	// }
	// const displayTask = (tasks) => {
	// 	setTaskToBeDisplayed(tasks);
	// 	// console.log(tasks)
	// 	return tasks;
	// }
	const [selectedTasks, setSelectedTasks] = useState([]);
	
	return (
		<div className="main h-screen w-screen">
			<img
				src="./Assets/Background.jpg"
				alt=""
			/>
			<div className="w-full absolute z-10">
				<ComplexNavbar />
			</div>
			
			<div className="flex w-screen flex-wrap content-center justify-center h-auto">
						
				<Sidebar onSelection={setSelectedTasks} />
				<TaskDisplay className='w-3/4 lg:w-5/6  pl-5 pr-6 pt-28' onDisplay={selectedTasks}></TaskDisplay>
			</div>
		</div>
	);
}

export default App;

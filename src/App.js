import "./App.css";
import ComplexNavbar from "./Components/ComplexNavbar";
import Sidebar from "./Components/Sidebar";
import TaskDisplay from "./Components/Tasks/TaskDisplay";

function App(props) {
	// const class = class
	return (
		<div className="main h-screen w-screen">
			<img
				src="./Assets/Background.jpg"
				alt=""
			/>
			<ComplexNavbar />
			<div className="flex w-screen flex-wrap content-center justify-center">
				<Sidebar />
				<TaskDisplay className='w-3/4 lg:w-5/6'></TaskDisplay>
			</div>
		</div>
	);
}

export default App;

import "./App.css";
import ComplexNavbar from "./Components/ComplexNavbar";
import Sidebar from "./Components/Sidebar";

function App() {
	const sidebarItems = [
		{
			title: "",
		},
	];
	return (
		<div className="main h-screen w-screen">
			<img
				src="./Assets/Background.jpg"
				alt=""
			/>
			<ComplexNavbar />
			<div className="flex w-screen flex-wrap content-center justify-center">
				<Sidebar />
				<div className="w-3/4 lg:w-5/6"></div>
			</div>
		</div>
	);
}

export default App;

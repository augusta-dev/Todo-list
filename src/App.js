import "./App.css";
import ComplexNavbar from "./Components/ComplexNavbar";
import Sidebar from "./Components/Sidebar";

function App() {
	return (
		<div className="main h-screen w-screen">
			<img
				src="./Assets/Background.jpg"
				alt=""
			/>
			<ComplexNavbar />
			<div className="flex w-screen flex-wrap content-center justify-center">
				<div className="container">
					<Sidebar />
					<div className="w-3/4"></div>
				</div>
			</div>
		</div>
	);
}

export default App;

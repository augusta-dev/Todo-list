import { Typography } from "@material-tailwind/react";
import "./Sidebar.css";
import TaskClasses from "./TaskClasses";
import MomentaryTask from "./MomentaryTask";
const Sidebar = () => {
	const sideBarItems = [
		{
			title: "All Tasks",
			color: "fill-yellow-900",
		},
		{
			title: "For Today",
			color: "fill-navy-900",
		},
		{
			title: "Priorities",
			color: "fill-red-900",
		},
		{
			title: "Completed",
			color: "fill-green-900",
		},
	];

	return (
		<div className="w-1/4 lg:w-1/6 bg-cyan-100 h-screen relative pl-6 pt-14">
			{sideBarItems.map((sideBarItem) => (
				<TaskClasses
					title={sideBarItem.title}
					color={sideBarItem.color}
				/>
			))}
			<MomentaryTask />
		</div>
	);
};
export default Sidebar;

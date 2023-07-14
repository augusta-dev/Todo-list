import { Typography } from "@material-tailwind/react";
import "./Sidebar.css";
const Sidebar = () => {
	return (
		<div className="w-1/4 lg:w-1/6 bg-cyan-100 h-screen relative ">
			<div className="w-100">
				<div className="w-3">
					<svg className="fill-">
						<circle
							cx="10"
							cy="10"
							r="10"
						/>
					</svg>
				</div>

				<Typography
					variant="h6"
					className="font-arimo w-auto"
				>
					Material Tailwind
				</Typography>
			</div>
		</div>
	);
};
export default Sidebar;

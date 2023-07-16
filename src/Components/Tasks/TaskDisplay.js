import { Typography } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";
import icon from "../../Assets/plus.png";

const TaskDisplay = (props) => {
	const classes = " p-2 " + props.className;
	return (
		<div className={classes}>
			<Typography
				variant="h4"
				className="font-arimo"
			>
				For Today
			</Typography>
			<div className="flex flex-wrap pt-1 pb-2 pl-5">
				<img
					src={icon}
					alt=""
					className="h-4 w-4"
				/>
				<a className="text-gray-900 pl-3 -mt-1">Add New</a>
			</div>
			<div className="w-full bg-red-900 h-16">
				<Checkbox className="w-6 h-6 bg-transparent border-2 border-black relative p-0" />
			</div>
		</div>
	);
};
export default TaskDisplay;

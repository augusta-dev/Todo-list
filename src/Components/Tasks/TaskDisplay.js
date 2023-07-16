import { Typography } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";
import icon from "../../Assets/plus.png";
import broom from "../../Assets/broom.png";


const TaskDisplay = (props) => {
	const classes = "" + props.className;
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
				<a className="text-gray-900 pl-3 -mt-1">Add New</a>
			</div>
			<div className="w-full bg-red-900 h-16 rounded-xl flex flex-wrap">
				<Checkbox className="w-6 h-6 bg-transparent border-2 border-black relative p-0" />
                <div className="ml-1 flex flex-wrap">
				<img
					src={broom}
					alt=""
					srcset=""
					className="h-5 w-5"
				/>
				<div className="pl-2 -mt-1 leading-5">
					<p>Clean the gutters</p>
					<p>
						<span className="text-yellow-900">12:00</span> -{" "}
						<span className="text-green-900">17:00</span>
					</p>
				</div>
			</div>
			</div>
		</div>
	);
};
export default TaskDisplay;

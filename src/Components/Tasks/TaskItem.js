

import { useState } from "react";
import "./TaskItem.css";
import { Checkbox } from "@material-tailwind/react";
import bin from "../../Assets/trash.png";

const TaskItem = (props) => {
	const deleteHandler = () => {
		props.onDelete();
	};
	const [isChecked, setIsChecked] = useState(false);
	const checkEventHandler = () => {
		setIsChecked(!isChecked);
		if(!isChecked){
			props.checkHandler();
		} else{
			props.unCheckHandler();
		}
	};


	return (
		<div
			className={`${props.className} w-full h-16 rounded-xl flex flex-wrap align-center justify-start self-center shadow-md task-item mb-3`}
		>
			<div className="w-10">
				<Checkbox
					className="w-6 h-6 bg-transparent border-2 border-black relative "
					onChange={checkEventHandler}
				/>
			</div>
			<div className="flex flex-wrap" style={{ width: 'calc(100% - 2.5rem)' }}>
				<div className="ml-1 self-center font-arimo w-8/12 lg:w-10/12">
					<div className="flex flex-wrap">
						<img
							src={props.icon}
							alt=""
							srcset=""
							className="h-5 w-5"
						/>
						<p className={`${props.state === "Completed" ? "text-green-900" : "text-black"} pl-1 text-lg -mt-1 sm:text-base`}>{props.name}</p>
					</div>

					<div>
						<p className="font-roboto text-base -mt-1 sm:text-sm">
							<span className=" text-yellow-900">
								{props.start}
							</span>{" "}
							-{" "}
							<span className="text-green-900">
								{props.endTime}
							</span>
						</p>
					</div>
				</div>
				<div className="float-right self-center w-4/12 lg:w-2/12 bg flex flex-wrap align-middle justify-end">
					<img
						src={bin}
						alt=""
						className="h-5 w-5 float-right mr-6 self-center"
						onClick={deleteHandler}
					/>
				</div>
			</div>
		</div>
	);
};
export default TaskItem;

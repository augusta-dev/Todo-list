import "./TaskItem.css";
import { Checkbox } from "@material-tailwind/react";
import broom from "../../Assets/broom.png";

const TaskItem = (props) => {
    return(
        <div className="w-full h-16 rounded-xl flex flex-wrap align-center justify-start self-center shadow-md task-item mb-3">
				<Checkbox className="w-6 h-6 bg-transparent border-2 border-black relative " />
				<div className="ml-1 self-center font-arimo">
					<div className="flex flex-wrap">
						<img
							src={broom}
							alt=""
							srcset=""
							className="h-5 w-5"
						/>
						<p className="pl-1 text-lg -mt-1">{props.name}</p>
					</div>

					{/* <div className=> */}
					<div>
						<p className="font-roboto text-base -mt-1">
							<span className=" text-yellow-900">{props.start}:00</span> -{" "}
							<span className="text-green-900">{props.start+props.duration}:00</span>
						</p>
					</div>

					{/* </div> */}
				</div>
			</div>
    )
}
export default TaskItem;
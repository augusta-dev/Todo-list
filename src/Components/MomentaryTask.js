import { Checkbox } from "@material-tailwind/react";
import broom from "../Assets/broom.png";

const MomentaryTask = () => {
	return (
		<div>
			<div className="flex flex-wrap -ml-2">
				<Checkbox className="w-6 h-6 bg-transparent border-2 border-black relative p-0" />
				{/* <input type="checkbox" name="" id="" className="" /> */}
				<h2 className="font-cormorant text-2xl font-semibold -ml-2 pt-2">
					Right Now
				</h2>
			</div>
			<div className="ml-1 flex flex-wrap">
				<img
					src={broom}
					alt=""
					srcset=""
					className="h-5 w-5"
				/>
				<div className="pl-2 -mt-1 leading-5">
					<p>Clean the gutters</p>
					<p className="font-roboto">
						<span className="text-yellow-900">12:00</span> -{" "}
						<span className="text-green-900">17:00</span>
					</p>
				</div>
			</div>
		</div>
	);
};
export default MomentaryTask;

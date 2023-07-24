import { useState } from "react";
import { Select, Option } from "@material-tailwind/react";

const UrgencyModeSelector = () => {
	const [taskUrgency, setTaskUrgency] = useState("");
	const urgencyModes = [
		{
			title: "Not A Priority",
			color: "fill-navy-900",
		},
		{
			title: "Priority",
			color: "fill-red-900",
		},
	];
	return (
		<>
			<Select
				label="Select Urgency"
				animate={{
					mount: { y: 0 },
					unmount: { y: 25 },
				}}
				value={taskUrgency}
				onChange={setTaskUrgency}
			>
				{urgencyModes.map((item, index) => (
					<Option
						key={index}
						value={item.title}
						className="flex flex-wrap h-full"
					>
						<div className="">
							<svg className={`${item.color} h-5 w-5 inline`}>
								<circle
									cx="10"
									cy="10"
									r="8"
								/>
							</svg>
							<p className=" inline pl-2">{item.title}</p>
						</div>
					</Option>
				))}
			</Select>
		</>
	);
};

export default UrgencyModeSelector;
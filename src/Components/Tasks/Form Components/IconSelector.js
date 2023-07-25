import { useState } from "react";
import { Select, Option } from "@material-tailwind/react";

const IconSelector = (props) => {
	const [taskIcon, setTaskIcon] = useState("");
	const iconEventHandler = (event) => {
		setTaskIcon(event.target.value);
        props.taskIconSetter(event.target.value);
	};
	return (
		<>
			<Select
				label="Select Icon"
				animate={{
					mount: { y: 0 },
					unmount: { y: 25 },
				}}
				value={taskIcon}
				onChange={setTaskIcon}
			>
				<Option value={"Material Tailwind HTML"}>
					Material Tailwind HTML
				</Option>
				<Option value={"Material Tailwind HTM"}>
					Material Tailwind React
				</Option>
				<Option>Material Tailwind Vue</Option>
				<Option>Material Tailwind Angular</Option>
				<Option>Material Tailwind Svelte</Option>
			</Select>
		</>
	);
};
export default IconSelector;
import { useState } from "react";
import { Input } from "@material-tailwind/react";
const NameSelector = (props) => {
	const [taskName, setTaskName] = useState("");
	const nameEventHandler = (event) => {
		setTaskName(event.target.value);
        props.taskNameSetter(event.target.value);
	};
	return (
		<>
			<Input
				type="text"
				label="Name of task"
				id="name"
				value={taskName}
				onChange={nameEventHandler}
			/>
		</>
	);
};
export default NameSelector;

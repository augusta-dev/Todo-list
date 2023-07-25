import { Input } from "@material-tailwind/react";
const NameSelector = (props) => {
	const nameEventHandler = (event) => {
		props.taskNameSetter(event.target.value);
	};
	return (
		<>
			<Input
				type="text"
				label="Name of task"
				id="name"
				value={props.setTaskName}
				onChange={nameEventHandler}
			/>
		</>
	);
};
export default NameSelector;

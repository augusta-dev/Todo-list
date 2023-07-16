import { Input, Typography, Select, Option } from "@material-tailwind/react";

const NewTask = () => {
	return (
		<form action="">
			<div>
				<div className="grid grid-cols-2 gap-2 pb-3">
					<Input
						type="text"
						label="Name of task"
						id="name"
					/>
					<Select
						label="Select Icon"
						animate={{
							mount: { y: 0 },
							unmount: { y: 25 },
						}}
					>
						<Option>Material Tailwind HTML</Option>
						<Option>Material Tailwind React</Option>
						<Option>Material Tailwind Vue</Option>
						<Option>Material Tailwind Angular</Option>
						<Option>Material Tailwind Svelte</Option>
					</Select>
				</div>

				<div className="grid grid-cols-2 gap-2 pb-3">
					<Input
						type="date"
						label="Due Date"
						id="name"
					/>
					<Input
						type="number"
						label="Duration"
						id="name"
					/>
				</div>

				<div className="grid grid-cols-2 gap-2 pb-3">
					<Input
						type="time"
						label="Start Time"
						id="name"
					/>
					<Input
						type="time"
						label="End Time"
						id="name"
					/>
				</div>
			</div>
		</form>
	);
};
export default NewTask;

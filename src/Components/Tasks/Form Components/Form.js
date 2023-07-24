import IconSelector from "./IconSelector";
import UrgencyModeSelector from "./UrgencyModeSelector";
const Form =  () => {
    return (
        <form
			action=""
			onSubmit={submitEventHandler}
			className={`${props.className} pb-5`}
		>
			<div>
				<div className="grid grid-cols-1 gap-2 pb-3">
					<Input
						type="text"
						label="Name of task"
						id="name"
						value={taskName}
						onChange={nameEventHandler}
					/>
				</div>
				<div className="grid grid-cols-2 gap-2 pb-3">
					<IconSelector></IconSelector>
					<UrgencyModeSelector></UrgencyModeSelector>
				</div>

				<div className="grid grid-cols-2 gap-2 pb-3">
					<Input
						type="date"
						label="Due Date"
						id="name"
						value={taskDate}
						onChange={dateEventHandler}
					/>
					<Input
						type="number"
						label="Duration"
						id="name"
						value={taskDuration}
						onChange={durationEventHandler}
					/>
				</div>

				<div className="grid grid-cols-2 gap-2 pb-3">
					<Input
						type="time"
						label="Start Time"
						id="name"
						value={displayedStartTime}
						onChange={startTimeEventHandler}
					/>
					<Input
						type="time"
						label="End Time"
						id="name"
						value={displayedEndTime}
					/>
				</div>
				<div className="flex flex-wrap items-center w-full justify-center">
					<Button
						type="submit"
						variant="outlined"
						color="blue-gray"
						className="flex items-center gap-3 pt-2 pb-2 w-1/2 justify-center"
					>
						Add Task
						<img
							src={submitIcon}
							alt="metamask"
							className="h-6 w-6"
						/>
					</Button>
				</div>
			</div>
		</form>
    )
}
export default Form;
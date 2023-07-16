
const TaskClasses = (props) => {
	return (
		<div className="w-100 flex flex-wrap h-3 pb-14">
			<div className="w-8">
				<svg className={`${props.color} h-5`}>
					<circle
						cx="10"
						cy="10"
						r="8"
					/>
				</svg>
			</div>

			<div className="w-auto">
				<a className="font-arimo text-lg leading-5">
					{props.title}
				</a>
			</div>
		</div>
	);
};
export default TaskClasses;
import { Select, Option } from "@material-tailwind/react";
import BeachChair from "../../../Assets/Icons/beach-chair.png";
import book from "../../../Assets/Icons/book.png";
import calendar from "../../../Assets/Icons/calendar.png";
import broom from "../../../Assets/Icons/broom (1).png";
import clock from "../../../Assets/Icons/clock.png";
import dumbbell from "../../../Assets/Icons/dumbbell.png";
import envelope from "../../../Assets/Icons/envelope.png";
import family from "../../../Assets/Icons/family.png";
import folder from "../../../Assets/Icons/folder.png";
import graduationHat from "../../../Assets/Icons/graduation-hat.png";
import hammer from '../../../Assets/Icons/hammer.png';
import lightBulb from "../../../Assets/Icons/light-bulb.png";
import lotus from "../../../Assets/Icons/lotus.png";
import mail from "../../../Assets/Icons/mail.png";
import money from "../../../Assets/Icons/money.png";
import note from "../../../Assets/Icons/note.png";
import people from "../../../Assets/Icons/people.png";
import pets from "../../../Assets/Icons/pets.png";
import phoneCall from "../../../Assets/Icons/phone-call.png";
import pieChart from "../../../Assets/Icons/pie-chart.png";
import pill from "../../../Assets/Icons/pill.png";
import presentation from "../../../Assets/Icons/presentation.png";
import search from "../../../Assets/Icons/search.png";
import shoppingCart from "../../../Assets/Icons/shopping-cart.png";
import socialMedia from "../../../Assets/Icons/social-media.png";
import stethoscope from "../../../Assets/Icons/stethoscope.png";
import storytelling from "../../../Assets/Icons/storytelling.png";
import trash from "../../../Assets/Icons/trash.png";
import travelBag from "../../../Assets/Icons/travel-bag.png";
import videoconference from "../../../Assets/Icons/videoconference.png";
import washingMachine from "../../../Assets/Icons/washing-machine.png";
import wateringCan from "../../../Assets/Icons/watering-can.png";

const IconSelector = (props) => {
	const iconEventHandler = (event) => {
		props.taskIconSetter(event.target.value);
	};
	const iconsList = [BeachChair, book, calendar, broom, clock, dumbbell, envelope, family, folder, graduationHat, hammer, lightBulb, lotus, mail, money, note, people, pets, phoneCall, pieChart, pill, presentation, search, shoppingCart, socialMedia, stethoscope, storytelling, trash, travelBag, videoconference, washingMachine, wateringCan]
	return (
		<>
			<Select
				label="Select Icon"
				animate={{
					mount: { y: 0 },
					unmount: { y: 25 },
				}}
				value={props.setTaskIcon}
				onChange={props.taskIconSetter}
				className="grid gap-1 grid-flow-row row-auto col-auto grid-cols-4 "
			>
				{iconsList.map((icon, index) =>(
					<Option value={icon} className="w-auto inline-grid" key={index}>
					<img src={icon} alt="" className="w-6 h-6"/>
				</Option>
				))}
				{/* <Option value={"Material Tailwind HTML"} className="w-auto inline-grid">
					Material Tailwind HTML
				</Option>
				<Option value={"Material Tailwind HTML"} className="w-auto inline-grid">
					Material Tailwind HTML
				</Option>
				<Option value={"Material Tailwind HTML"} className="w-auto inline-grid">
					Material Tailwind HTML
				</Option>
				<Option value={"Material Tailwind HTML"} className="w-auto inline-grid">
					Material Tailwind HTML
				</Option>
				<Option value={"Material Tailwind HTML"} className="w-auto inline-grid">
					Material Tailwind HTML
				</Option> */}
				
			</Select>
		</>
	);
};
export default IconSelector;

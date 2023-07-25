import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Button,
} from "@material-tailwind/react";
import ReactDOM from "react-dom";
const Backdrop = (props) => {
	return (
		<div
			className={`${props.className} ${props.visibility? "block": "hidden"} fixed backdrop-xl h-screen w-screen bg-white/70 backdrop-blur-md backdrop-opacity-100 z-10`}
			onClick={props.onClick}
		></div>
	);
};
const ModalOverlay = (props) => {
	return (
		<Card className={`${props.className} ${props.visibility? "block": "hidden"} fixed w-96 z-10 top-0 left-0 right-0 bottom-0 mx-auto h-64 self-center align-middle my-auto`}>

			<CardHeader
				shadow={false}
				floated={false}
				className="h-auto"
			>
				<Typography variant="h1">Form Error!</Typography>
			</CardHeader>
			<CardBody>
				<div className="mb-2 flex items-center justify-between">
					<Typography
						color="blue-gray" variant="h5"
						className="font-medium"
					>
						Error Source: Unfilled Sections
					</Typography>
				</div>
				<Typography
					variant="small"
					color="gray"
					className="font-normal opacity-75"
				>
					You forgot to fill the form before submitting. Ensure to do
					that next time :)
				</Typography>
			</CardBody>
			<CardFooter className="pt-0">
				<Button
					ripple={false}
					fullWidth={true}
					className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    onClick={props.onClick}
				>
					Refill Form
				</Button>
			</CardFooter>
		</Card>
	);
};
export function ErrorModal(props) {
	return (
		<>
      {ReactDOM.createPortal(
        <Backdrop
          onClick={props.onClick}
          className={props.visibility ? "block" : "hidden"} visibility={props.visibility}  // Pass visibility prop to Backdrop
        ></Backdrop>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onClick={props.onClick}
          visibility={props.visibility} // Pass visibility prop to ModalOverlay
        ></ModalOverlay>,
        document.getElementById("modal-root")
      )}
    </>
	);
}

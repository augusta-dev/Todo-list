import { Checkbox } from "@material-tailwind/react";

const MomentaryTask = () => {
    return (
        <div>
            <div className="flex flex-wrap">
            <Checkbox className="w-6 h-6 bg-transparent border-2 border-black relative -left-1/2 -top-1/2 p-0"/>
            {/* <input type="checkbox" name="" id="" className="" /> */}
            <h2 className="font-cormorant text-2xl font-semibold">Right Now</h2>
            
            </div>
            <div>
            <img src="../Assets/broom.png" alt="" srcset="" />
            <div>
                <p>Clean the gutters</p>
                <p>12:00 - 17:00</p>
            </div>
            </div>
        </div>
    )
}
export default MomentaryTask;
import { Checkbox } from "@material-tailwind/react";
import broom from '../Assets/broom.png';

const MomentaryTask = () => {
    return (
        <div>
            <div className="flex flex-wrap">
            <Checkbox className="w-6 h-6 bg-transparent border-2 border-black relative p-0"/>
            {/* <input type="checkbox" name="" id="" className="" /> */}
            <h2 className="font-cormorant text-2xl font-semibold -ml-2 pt-2">Right Now</h2>
            
            </div>
            <div>
            <img src={broom} alt="" srcset="" className="h-10 w-10"/>
            <div>
                <p>Clean the gutters</p>
                <p>12:00 - 17:00</p>
            </div>
            </div>
        </div>
    )
}
export default MomentaryTask;
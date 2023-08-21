import { Checkbox } from "@material-tailwind/react";
import broom from "../../../Assets/broom.png";
import { useContext } from "react";
import MomentaryTaskContext from "./MomentaryTaskContext";

const MomentaryTask = () => {
  const taskCtx = useContext(MomentaryTaskContext);

  return (
    <div className={`${taskCtx.name !== "" ? "block" : "hidden"}`}>
      <div className="flex flex-wrap -ml-2">
        <Checkbox className="w-6 h-6 bg-transparent border-2 border-black relative p-0" />
        <h2 className="font-cormorant text-2xl font-semibold -ml-2 pt-2">
          Right Now
        </h2>
      </div>
      <div className="ml-1 flex flex-wrap">
        <img src={taskCtx.icon} alt="" className="h-5 w-5" />
        <div className="pl-2 -mt-1 leading-5">
          <p>{taskCtx.name}</p>
          <p className="font-roboto">
            <span className="text-yellow-900">{taskCtx.start}</span> -{" "}
            <span className="text-green-900">{taskCtx.endTime}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MomentaryTask;

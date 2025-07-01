/* eslint-disable @typescript-eslint/no-explicit-any */
import { TbShoppingCart } from "react-icons/tb";

export type countProps = {
  count: any;
};

export default function Cart(props: countProps) {
  return (
    <div >
      <div className="bg-red-500 rounded-2xl w-4 h-4 p-3 flex justify-center items-center absolute right-30 text-xs  ">{props.count}</div>
     <button className="">
         <TbShoppingCart size={35} />
     </button>
    </div>
  );
}

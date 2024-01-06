import {BiSolidWallet} from "react-icons/bi";

export default function Button({ text, icon }) {
   return (
	   <button type='submit' className='bg-lightGreen flex gap-3 items-center justify-center h-[35px] rounded-full p-6 font-semibold'>
		  {text}
		  {icon}
	   </button>
   )
}

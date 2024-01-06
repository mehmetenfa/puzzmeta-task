import {RiSearchLine} from "react-icons/ri";
import {MdWbSunny} from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import Button from "../../components/button";
import {BiSolidWallet} from "react-icons/bi";
import { useTheme } from "../../contexts/ThemeContext";

export default function Header() {
   const { isLightMode, toggleMode } = useTheme();
   
   return (
	   <header className={`w-full h-[70px] flex ${isLightMode ? 'bg-lightBlack' : 'bg-darkWhite'} items-center justify-between pl-8`}>
		  <div className='flex items-center gap-20'>
			 <div className={`flex items-center justify-between h-[35px] w-[400px] p-[20px] ${isLightMode ? 'bg-lightBlack border border-searchbarBorder' : 'bg-darkWhite border border-darkSearchbarBorder'} rounded-full`}>
				<input type='text' placeholder='Search...' className={`w-[300px] ${isLightMode ? 'bg-lightBlack' : 'bg-darkWhite placeholder:text-lightBlack'} placeholder:text-sidebarText focus:outline-none text-white`} />
				<button type='submit'>
				   <RiSearchLine color={`${isLightMode ? '#6C7175' : 'bg-darkBlack'}`} />
				</button>
			 </div>
		  </div>
		  <div className='flex items-center pr-10 gap-4'>
			 <button type='submit' onClick={toggleMode}>
				{isLightMode ?
					<MdWbSunny  color='#6C7175' size={28} />
					:
					<FaMoon color='#000' size={28} />
				}
			 </button>
			 <Button text='Connect Wallet' icon={<BiSolidWallet size={20} color='#000' />} />
		  </div>
	   </header>
   )
}

import { sidebar } from "../../utils/const";
import { useState } from "react";
import logo from "../../assets/logo.png";
import {useTheme} from "../../contexts/ThemeContext";

export default function Sidebar() {
   const [activeIndex, setActiveIndex] = useState(null);
   const { isLightMode, toggleMode } = useTheme();
   
   const handleItemClick = (index) => {
	  setActiveIndex(index);
   };
   
   return (
	   <main className={`w-[350px] ${isLightMode ? 'bg-lightBlack' : 'bg-darkWhite'} flex flex-col`}>
		  <div className='h-[70px] flex items-center justify-center bg-lightBlack'>
			 <img src={logo} alt='coinshelter logo' />
		  </div>
		  <div className='mt-12 flex flex-col gap-6 pl-8'>
			 {sidebar.map((item, index) => (
				 <button
					 key={index}
					 onClick={() => handleItemClick(index)}
					 className={`w-[230px] h-[40px] rounded-lg font-semibold flex gap-2 items-center pl-[12px] ${
						 activeIndex === index
							 ? 'bg-lightGreen text-black'
							 : isLightMode ? 'bg-lightBlack text-sidebarText' : 'bg-darkWhite text-black'
					 }`}
				 >
					{activeIndex === index ? item.icon.active : item.icon.passive}
					<span>{item.title}</span>
				 </button>
			 ))}
		  </div>
	   </main>
   );
}

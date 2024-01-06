import React, { useState } from "react";

export default function Graphic() {
   const [focus, setFocus] = useState(null);
   
   const text = [
	  { id: 1, title: 'All' },
	  { id: 2, title: '1 Y' },
	  { id: 3, title: '6 M' },
	  { id: 4, title: '3 M' },
	  { id: 5, title: '1 M' },
	  { id: 6, title: '24h' },
   ];
   
   const handleItemClick = (itemId) => {
	  setFocus(itemId);
   };
   
   const getBorderStyle = (itemId) => {
	  if (itemId === 1) {
		 return { borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px' };
	  } else if (itemId === 6) {
		 return { borderTopRightRadius: '8px', borderBottomRightRadius: '8px' };
	  } else {
		 return {};
	  }
   };
   
   return (
	   <div className='w-[1183px] h-[325px] bg-marketBoxColor rounded-xl py-6 px-6'>
		  <div className='flex items-center justify-between'>
			 <h1 className='text-marketInfoText text-xl font-semibold'>Price</h1>
			 <ul className='flex flex-row rounded-lg text-marketInfoText bg-[#2D3943]'>
				{text.map((item) => (
					<button
						key={item.id}
						type='button'
						id={item.id}
						onClick={() => handleItemClick(item.id)}
						className={focus === item.id ? 'bg-lightGreen text-black py-2 px-3' : 'py-2 px-3'}
						style={getBorderStyle(item.id)}
					>
					   {item.title}
					</button>
				))}
			 </ul>
		  </div>
	   </div>
   );
}

import React from "react";

export default function PriceChange() {
   const priceChange = [
	  { id: 1, title: 'All', price: '505.78%' },
	  { id: 2, title: '365 days', price: '-43.9%' },
	  { id: 3, title: '90 days', price: '-16.08%' },
	  { id: 4, title: '90 days', price: '-16.08%' },
	  { id: 5, title: '30 days', price: '7.37%' },
	  { id: 6, title: '7 days', price: '8.42%' },
	  { id: 7, title: '24 H', price: '-9.99%' },
   ];
   
   const getPriceColorClass = (price) => {
	  if (price.startsWith('-')) {
		 return 'text-red';
	  } else {
		 return 'text-green';
	  }
   };
   
   return (
	   <div className='w-[380px] h-[325px] bg-marketBoxColor rounded-xl p-4'>
		  <div>
			 <h1 className='text-marketInfoText text-lg font-semibold'>BTC Price Change</h1>
		  </div>
		  <div className='w-[full] h-[2px] rounded-full bg-marketInfoBorder mt-[10px]' />
		  <ul>
			 {priceChange.map((item) => (
				 <div className='flex items-center justify-between mx-4' key={item.id}>
					<li className='mt-3 text-marketInfoText'>
					   {item.title}
					</li>
					<li className={getPriceColorClass(item.price)}>{item.price}</li>
				 </div>
			 ))}
		  </ul>
	   </div>
   );
}

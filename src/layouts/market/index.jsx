import React, { useEffect, useState } from 'react';
import fetchCoinData from '../../api';
import { RiSearchLine } from 'react-icons/ri';

export default function Market() {
   const [data, setData] = useState([]);
   const [searchText, setSearchText] = useState('');
   
   const fetchData = async () => {
	  const fetchedData = await fetchCoinData();
	  if (fetchedData) {
		 const modifiedData = fetchedData.map((item) => {
			if (item) {
			   return {
				  ...item,
				  priceUsd: item.priceUsd ? item.priceUsd.slice(0, 8) : null,
				  changePercent24Hr: item.changePercent24Hr ? item.changePercent24Hr.slice(0, 5) : null,
				  vwap24Hr: item.vwap24Hr ? item.vwap24Hr.slice(0, 8) : null,
				  maxSupply: item.maxSupply ? item.maxSupply.slice(0, 11) : null,
				  volumeUsd24Hr: item.volumeUsd24Hr ? item.volumeUsd24Hr.slice(0, 15) : null,
				  marketCapUsd: item.marketCapUsd ? item.marketCapUsd.slice(0, 15) : null,
			   };
			} else {
			   return null;
			}
		 });
		 
		 setData(modifiedData);
	  }
   };
   
   const filterData = () => {
	  return data.filter((item) => item.id.includes(searchText));
   };
   
   useEffect(() => {
	  fetchData();
	  
	  const intervalId = setInterval(() => {
		 fetchData();
	  }, 2000);
	  
	  return () => clearInterval(intervalId);
   }, []);
   
   return (
	   <div className='w-full h-[308px] overflow-y-auto bg-marketBoxColor rounded-xl p-4 text-white'>
		  <div className='flex items-center justify-between'>
			 <h1 className='text-marketInfoText text-lg font-semibold'>Market</h1>
			 <div className='flex items-center justify-between h-[35px] w-[300px] p-[15px] bg-marketBoxColor border border-marketInfoBorder rounded-full'>
				<input
					type='text'
					placeholder='Search...'
					className='w-[200px] bg-marketBoxColor placeholder:text-sidebarText focus:outline-none text-white'
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
				/>
				<button type='submit'>
				   <RiSearchLine color='#6C7175' />
				</button>
			 </div>
		  </div>
		  <div className='w-[full] h-[2px] rounded-full bg-marketInfoBorder mt-[10px]' />
		  <table className='w-full mt-2'>
			 <thead>
			 <tr className='text-left text-marketInfoText'>
				<th className='py-2 font-normal'>Symbol</th>
				<th className='py-2 font-normal'>Market</th>
				<th className='py-2 font-normal'>Price</th>
				<th className='py-2 font-normal'>24H Change</th>
				<th className='py-2 font-normal'>24H Lowest</th>
				<th className='py-2 font-normal'>24H Highest</th>
				<th className='py-2 font-normal'>24H Volume</th>
				<th className='py-2 font-normal'>24H Value</th>
			 </tr>
			 </thead>
			 <tbody>
			 {filterData().map((item) => (
				 <tr key={item.id} className='text-left border-b border-t border-marketInfoBorder'>
					<td className='py-2 font-bold'>{item.symbol}</td>
					<td className='py-2'>{item.name}</td>
					<td className='py-2'>{item.priceUsd}</td>
					<td className={`py-2 ${parseFloat(item.changePercent24Hr) < 0 ? 'text-red' : 'text-green'}`}>
					   {item.changePercent24Hr}%
					</td>
					<td className='py-2'>{item.vwap24Hr}</td>
					<td className='py-2'>{item.maxSupply}</td>
					<td className='py-2'>{item.volumeUsd24Hr}</td>
					<td className='py-2'>{item.marketCapUsd}</td>
					<td className='py-2'>graphic</td>
				 </tr>
			 ))}
			 </tbody>
		  </table>
	   </div>
   );
}

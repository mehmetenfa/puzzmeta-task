export default function MarketInfo() {
   return (
	   <main className='flex flex-row gap-[20px]'>
		  <div className='w-1/4 h-[150px] bg-marketBoxColor rounded-xl p-4'>
			 <div>
				<h1 className='text-marketInfoText text-lg'>Coins</h1>
			 </div>
			 <div className='w-[full] h-[2px] rounded-full bg-marketInfoBorder mt-[10px]' />
			 <div className='flex flex-row gap-8'>
				<div className='mt-[15px] flex flex-col gap-[10px]'>
				   <p className='text-2xl text-white'>9.43M</p>
				   <p className='text-marketInfoDetail'>24H Value(USD)</p>
				</div>
				<div>graphic</div>
			 </div>
		  </div><div className='w-1/4 h-[150px] bg-marketBoxColor rounded-xl p-4'>
			 <div>
				<h1 className='text-marketInfoText text-lg'>24H Price Change</h1>
			 </div>
			 <div className='w-[full] h-[2px] rounded-full bg-marketInfoBorder mt-[10px]' />
			 <div className='flex flex-row gap-8'>
				<div className='mt-[15px] flex flex-col gap-[10px]'>
				   <p className='text-2xl text-white'>682</p>
				   <p className='text-green'>+1.12%</p>
				</div>
				<div>graphic</div>
			 </div>
		  </div><div className='w-1/4 h-[150px] bg-marketBoxColor rounded-xl p-4'>
			 <div>
				<h1 className='text-marketInfoText text-lg'>Total Market Cap(USD)</h1>
			 </div>
			 <div className='w-[full] h-[2px] rounded-full bg-marketInfoBorder mt-[10px]' />
			 <div className='flex flex-row gap-8'>
				<div className='mt-[15px] flex flex-col gap-[10px]'>
				   <p className='text-2xl text-white'>1211.54B</p>
				   <p className='text-red'>-1.12%</p>
				</div>
				<div>graphic</div>
			 </div>
		  </div><div className='w-1/4 h-[150px] bg-marketBoxColor rounded-xl p-4'>
			 <div>
				<h1 className='text-marketInfoText text-lg'>24H Value(USD)</h1>
			 </div>
			 <div className='w-[full] h-[2px] rounded-full bg-marketInfoBorder mt-[10px]' />
			 <div className='flex flex-row gap-8'>
				<div className='mt-[15px] flex flex-col gap-[10px]'>
				   <p className='text-2xl text-white'>28.57M</p>
				   <p className='text-marketInfoDetail'>Listed Cryptos</p>
				</div>
				<div>graphic</div>
			 </div>
		  </div>
	   </main>
   )
}

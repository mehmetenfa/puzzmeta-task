import StoreIcon from '@mui/icons-material/Store';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import SwapHorizOutlinedIcon from '@mui/icons-material/SwapHorizOutlined';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import CandlestickChartOutlinedIcon from '@mui/icons-material/CandlestickChartOutlined';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpIcon from '@mui/icons-material/Help';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

export const sidebar = [
   {
	  title: "Market",
	  icon: {
		 active: (
			 <StoreIcon />
		 ),
		 passive: (
			 <StoreOutlinedIcon />
		 ),
	  },
   },
   {
	  title: "Buy Crypto",
	  icon: {
		 active: (
			 <ShoppingCartIcon />
		 ),
		 passive: (
			 <ShoppingCartOutlinedIcon />
		 ),
	  },
   },
   {
	  title: "Swap",
	  icon: {
		 active: (
			 <SwapHorizIcon />
		 ),
		 passive: (
			 <SwapHorizOutlinedIcon />
		 ),
	  },
   },
   {
	  title: "Exchange",
	  icon: {
		 active: (
			 <CandlestickChartIcon />
		 ),
		 passive: (
			 <CandlestickChartOutlinedIcon />
		 ),
	  },
   },
   {
	  title: "Earn",
	  icon: {
		 active: (
			 <MonetizationOnIcon />
		 ),
		 passive: (
			 <MonetizationOnOutlinedIcon />
		 ),
	  },
   },
   {
	  title: "Settings",
	  icon: {
		 active: (
			 <SettingsIcon />
		 ),
		 passive: (
			 <SettingsOutlinedIcon />
		 ),
	  },
   },
   {
	  title: "Help",
	  icon: {
		 active: (
			 <HelpIcon />
		 ),
		 passive: (
			 <HelpOutlineOutlinedIcon />
		 ),
	  },
   },
	
]

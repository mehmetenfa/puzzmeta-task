import Sidebar from "./layouts/sidebar";
import Header from "./layouts/header";
import MarketInfo from "./layouts/market info";
import Graphic from "./layouts/graphic";
import PriceChange from "./layouts/price chage";
import Market from "./layouts/market";
import {useTheme} from "./contexts/ThemeContext";

function App() {
   const { isLightMode, toggleMode } = useTheme();
   
  return (
    <div className='w-screen h-screen bg-black flex'>
       <Sidebar />
       <div className='w-screen'>
          <Header />
          <div className={`p-[20px] flex flex-col gap-6 ${isLightMode ? 'bg-marketColor' : 'bg-white'}`}>
             <MarketInfo />
             <div className='flex gap-[20px]'>
                <Graphic />
                <PriceChange />
             </div>
             <Market />
          </div>
       </div>
    </div>
  );
}

export default App;

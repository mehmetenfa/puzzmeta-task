const apiUrl = 'https://api.coincap.io/v2/assets';

const fetchCoinData = async () => {
   try {
	  const response = await fetch(apiUrl);
	  const data = await response.json();
	  return data.data;
   } catch (error) {
	  console.error('API error:', error);
	  return null;
   }
};

export default fetchCoinData;

const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
// Lấy thông tin về các thành phố có dân số trên 10,000 người {API được lưu trữ trên RapidAPI}

const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';
// API này dùng để lấy dữ liệu thời tiết như thời tiết hiện tại và dự báo {API được lưu trên OpenWeatherMap}

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const GEO_API_OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4f0dcce84bmshac9e329bd55fd14p17ec6fjsnff18c2e61917',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
  },
};

export async function fetchWeatherData(lat, lon) {
  try {
    let [weatherPromise, forcastPromise] = await Promise.all([
      fetch(
        `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      ),
      fetch(
        `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      ),
    ]);

    const weatherResponse = await weatherPromise.json();
    const forcastResponse = await forcastPromise.json();
    return [weatherResponse, forcastResponse];
  } catch (error) {
    console.log(error);
  }
}

export async function fetchCities(input) {
  try {
    const response = await fetch(
      `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${input}&countryIds=VN`, // QUỐC GIA VIỆT NAM
      GEO_API_OPTIONS
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
}
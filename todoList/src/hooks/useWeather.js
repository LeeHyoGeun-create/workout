import React, { useEffect, useState } from 'react';
import { getWeather } from '../module/api';

const useWeather = () => {
  const [weather, setWeather] = useState('');

  const success = async position => {
    try {
      const weather = await getWeather(
        position.coords.latitude,
        position.coords.longitude,
      );
      setWeather(weather);
    } catch (e) {
      console.log(e);
    }
  };

  const faile = async () => {
    try {
      const weather = await getWeather(37.5326, 127.024612);
      setWeather(weather);
    } catch (e) {
      console.log(e);
    }
  };

  const setGeoLoaction = (success, faile) => {
    if ('geolocation' in navigator) {
      /* 위치정보 사용 가능 */
      navigator.geolocation.getCurrentPosition(success);
    } else {
      faile();
    }
  };

  useEffect(() => {
    setGeoLoaction(success, faile);
  }, []);

  return weather;
};

export default useWeather;

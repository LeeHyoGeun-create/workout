import { createClient } from 'pexels';
// import { createApi } from 'unsplash-js';

/*https://www.pexels.com/api/documentation/?language=javascript */
export const getPhoto = async weather => {
  console.log(weather);
  try {
    const client = await createClient(import.meta.env.VITE_PEXELS_ACCESS_KEY);

    const query = weather;

    const photos = await client.photos.search({
      query,
      page: Math.floor(Math.random() * 1000),
      per_page: 1,
      size: 'small',
      orientation: 'landscape',
    });

    return photos.photos[0].src.original;
  } catch (e) {
    throw new Error(e);
  }
};

export const getWeather = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
        import.meta.env.VITE_OPENWEATHER_ACCESS_KEY
      }`,
    );
    if (!response.ok) {
      throw new Error('서버에 이상이 있습니다. status: ' + response.status);
    }
    const weather = await response.json();

    return weather.weather[0].main;
  } catch (e) {
    throw new Error(e);
  }
};

export const getData = async () => {
  try {
    const responce = await fetch('http://localhost:3001/todos');
    if (!responce.ok) {
      throw new Error('서버에 이상이 있습니다. status: ' + response.status);
    }
    const todos = await responce.json();
    return todos;
  } catch (e) {
    throw new Error(e);
  }
};

// export const getPhoto = async weather => {
//   try {
//     const unsplash = createApi({
//       apiUrl: '/api/unsplash-proxy',
//       accessKey: import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
//     });

//     unsplash.photos.getRandom({ query: weather }).then(result => {
//       switch (result.type) {
//         case 'error':
//           console.log('error occurred: ', result.errors[0]);
//         case 'success':
//           const photo = result.response;
//           return photo;
//       }
//     });
//   } catch (e) {
//     console.log(e);
//   }
// };

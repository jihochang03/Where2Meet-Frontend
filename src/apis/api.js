import { backendInstance, kakaoInstance, odsayInstance } from "./axios";

export const findBestStations = async (points, factors) => {
  try {
    const locations = [];
    points.forEach(point => {
      locations.push({
        lon: point.lon,
        lat: point.lat,
      })
    });

    const response = await backendInstance.post('/api/FindBestStation/find_optimal_station/', {
      locations: locations,
      factors: factors,
    });
    if (response.status === 200) {
      return response.data.best_stations;
    } else {
      throw new Error(`Error: ${response.status}`);
    }
  } catch (error) {
    console.error(error);
    return null;
  }

};

export const getComments = async (station_name, factors) => {
  try {
    const response = await backendInstance.get('/api/CGPT/query/', {
      params: {
        station_name: station_name,
        factors: factors,
      }
    });
    if (response.status === 200) {
      return response.data.response;
    } else {
      throw new Error(`Error: ${response.status}`);
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const searchAddress = async (searchTerm) => {
  try {
    const response = await kakaoInstance.get('/search/keyword.json', {
      params: {
        query: searchTerm,
        analyze_type: 'similar',
        page: 1,
        size: 15,
      }
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Error: ${response.status}`);
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const searchPath = async (startX, startY, endX, endY) => {
  try {
    const api = process.env.REACT_APP_ODSAY_API_KEY_2;
    const response = await odsayInstance.get('/searchPubTransPathT', {
      params: {
        SX: startX,
        SY: startY,
        EX: endX,
        EY: endY,
        apiKey: api,
      }
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Error: ${response.status}`);
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}
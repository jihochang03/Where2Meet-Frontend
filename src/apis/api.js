import { backendInstance, kakaoInstance, odsayInstance } from "./axios";

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
    throw error;
  }
}

export const searchPath = async (startX, startY, endX, endY) => {
  try {
    const api = process.env.REACT_APP_ODSAY_API_KEY;
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
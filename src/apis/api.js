import { backendInstance, kakaoInstance } from "./axios";

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
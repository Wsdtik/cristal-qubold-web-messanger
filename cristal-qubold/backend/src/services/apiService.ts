import axios from 'axios';

export class APIService {
  async getData(endpoint: string): Promise<any> {
    try {
      const response = await axios.get(endpoint);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export const apiService = new APIService();
import axios from 'axios'

class HttpClient {
  constructor(baseURL){
    if(this.instance) return;
    this.instance = axios.create({ baseURL });
  }

  async get(url){
    const { data } = await this.instance.get(url);

    return data;
  }
}

export default HttpClient;
import axios from 'axios'

class HttpClient {
  constructor(baseURL){
    if(this.instance) return;
    this.instance = axios.create({ baseURL });
    this.count = 0;
  }

  async get(url){
    const { data } = await this.instance.get(url);

    /* eslint-disable */
    this.count++;
    console.log("api 호출 횟수", this.count);

    return data;
  }
}

export default HttpClient;
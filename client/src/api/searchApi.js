import HttpClient from "../service/HttpClient";

const baseUrl = process.env.REACT_APP_LOCAL_BASE_URL;
const httpClient = new HttpClient(baseUrl);

export const getSearchResult = (param) => httpClient.get(`/sick?q=${param}`);
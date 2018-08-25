import { request } from './HttpRequests';
const BASE_URL = ``;

const API = {
    getDetails: () => request.get(BASE_URL),
}

export { API };
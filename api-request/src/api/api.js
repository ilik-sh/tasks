import axios from "axios";
import {API_URL} from '../utils/const'

const $host = axios.create({
    baseURL: API_URL
})

export {$host}
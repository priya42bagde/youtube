import axios from "axios"
const KEY="AIzaSyANCHSUJsKXP-UEqsUYUMPb0aThpzR-dnQ";

export default axios.create(
    {
        baseURL:'https://www.googleapis.com/youtube/v3/',
        params: {
            part: "snippet",
            maxResult: 10,
            key: KEY
        }
    }
)
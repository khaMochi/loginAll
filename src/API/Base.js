import axios from 'axios'

const urlParams = new URLSearchParams(window.location.search);

/**
 * create axios
 * @type {AxiosInstance}
 */
const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        PrivateKey: 'M0ch1M0ch1_En_$ecret_k3y',
        DeviceType: urlParams?.get('devicetype'),
        AppVersion: urlParams?.get('appversion')
    },
    timeout: 5000,
});
//timeout đặt giới hạn thời gian chờ hản hồi 5s

/**
 * method post
 * @param url
 * @param data
 * @returns {Promise<AxiosResponse<any>>}
 */
export const post = async (url, data) => {
    return await instance.post(url, data);
}

//url mà function post nhận sẽ là cái endpoint để kết hợp với baseUrl của instance
//data là body data cần gửi lên server để làm việc

//note
// method post
// tham số url và data
//method này sẽ trả về một promise, resolve về dữ liệu được trả từ server (mọi đinh dạng)

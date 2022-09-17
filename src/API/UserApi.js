import {post} from './Base';
import ENDPOINT from './Endpoint'

/**
 * api login with email & password
 * @param data
 * @reutrn {Promise<void>}
 * @constructor
 */
export const ApiLogin = async (data) => {
    try {
        const response = await post(ENDPOINT.URL_LOGIN_BY_EMAIL, data);
        //logic
        return response;
    } catch (err) {
        // logic
    }


}
/**
 * note
 * dạng hàm mẫu xử lí logic , tái sử dụng
 * mặc định return promise nhưng vì là xử lí logic nên promise không resolve giá gị nào
 * tham số nhận là data (body data mà người dùng nhập)
 */


/**
 * api register with email|password
 * @param data
 * @returns {Promise<AxiosResponse<any>>}
 * @constructor
 */
export const ApiRegister = async (data) => {
    try {
        const response = await post(ENDPOINT.URL_REGISTER, data);
        return response;
    } catch (err) {
        console.log(err);
        //logic
    }
}

/**
 * note
 * dạng hàm mẫu xử lí logic , tái sử dụng
 * tham số nhận là data (body data mà người dùng nhập)
 */

/**
 * api login with socials
 * @param provider
 * @param user
 * @returns {Promise<void>}
 * @constructor
 */

export const ApiLoginSocial = async (provider, user) => {

    const response = await post(ENDPOINT.URL_LOGIN_BY_FB_GOOGLE, {
        email: user.email,
        name: user.displayName,
        provider: provider,
        provider_id: user.providerData[0].uid,
        lang: "vn",
        trial_course: 1
    });

    return response;
}

/**
 * note
 * dạng hàm mẫu xử lí logic , tái sử dụng
 * mặc định return promise nhưng vì là xử lí logic nên promise không resolve giá trị nào
 * tham số nhận là provider (provider) & user (user) cả hai đều lấy từ response mà firebase trả về
 */

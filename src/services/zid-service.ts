import axios from 'axios';

export class ZidApiService {
    public static async getTokensByCode(code: string) {
        const url = `${process.env.ZID_AUTH_URL}/oauth/token`;
        const requestBody = {
            grant_type: 'authorization_code',
            client_id: process.env.ZID_CLIENT_ID,
            client_secret: process.env.ZID_CLIENT_SECRET,
            redirect_uri: `${process.env.MY_BACKEND_URL}/zid/auth/callback`,
            code: code,
        };
        try {
            const response = await axios.post(url, requestBody);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    public static async getMerchantProfile(managerToken: string, authToken: string) {
        const url = `${process.env.ZID_BASE_API_URL}/managers/account/profile`;
        const requestHeaders = {
            Authorization: `Bearer ${authToken}`,
            'X-Manager-Token': managerToken,
            Accept: 'application/json',
        };

        try {
            const response = await axios.get(url, { headers: requestHeaders });
            return response.data;
        } catch (e) {
            console.error(e);
        }
    }
}

// @ts-nocheck
import {ZidApiService} from "../../../services/zid-service";
export const zidAuthCallback = async (req, res) => {
    const zidCode = req.query.code;

    const merchantTokens = await ZidApiService.getTokensByCode(zidCode);

    const managerToken = merchantTokens.access_token;
    const authToken = merchantTokens.authorization;
    const refreshToken = merchantTokens.refresh_token;

    // let user = await UsersService.getUserByZidToken( managerToken);
    if (!user) {
        const zidMerchantDetails = await ZidApiService.getMerchantProfile(managerToken, authToken);
        // create user from zid merchant details response
    }

    return res.redirect(' Your Dashboard URL ');
};

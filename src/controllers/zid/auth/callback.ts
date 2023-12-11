// @ts-nocheck
import {ZidApiService} from "../../../services/zid-service";
export const zidAuthCallback = async (req, res) => {
    // zid will redirect the user to your application again and send you `code` in the query parameters
    const zidCode = req.query.code;

    // from this code you must retrieve the merchant tokens to use them in your further requests
    const merchantTokens = await ZidApiService.getTokensByCode(zidCode);

    const managerToken = merchantTokens.access_token;
    const authToken = merchantTokens.authorization;
    const refreshToken = merchantTokens.refresh_token;

    // Check if the user already exists in the database
    // let user = await UsersService.getUserByZidToken( managerToken);
    if (!user) {
        const zidMerchantDetails = await ZidApiService.getMerchantProfile(managerToken, authToken);
        // create user from zid merchant details response
    }

    // by reaching here, the OAuth flow has been finished, and zid merchant now should be able to access your application.
    // continue with your own logic from now on please.
    //
    //
    // redirect the user to your application dashboard.
    return res.redirect(' Your Dashboard URL ');
};

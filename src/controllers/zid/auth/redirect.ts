export const zidAuthRedirect = (req, res, next) => {
    const queries = new URLSearchParams({
        client_id: process.env.ZID_CLIENT_ID,
        redirect_uri: `${process.env.MY_BACKEND_URL}/zid/auth/callback`,
        response_type: 'code',
    });

    return res.redirect(`${process.env.ZID_AUTH_URL}/oauth/authorize?${queries}`);
};

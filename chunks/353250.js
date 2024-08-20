var a, c;
function i(r) {
    var e;
    return {
        captchaService: r.captcha_service,
        sitekey: r.captcha_sitekey,
        options: {
            rqdata: r.captcha_rqdata,
            rqtoken: r.captcha_rqtoken,
            serveInvisible: null !== (e = r.should_serve_invisible) && void 0 !== e && e
        }
    };
}
t.r(e),
    t.d(e, {
        CaptchaError: function () {
            return a;
        },
        extractCaptchaPropsFromResponseBody: function () {
            return i;
        }
    }),
    ((c = a || (a = {})).CANCEL = 'cancel'),
    (c.ERROR = 'error'),
    (c.EXPIRED = 'expired');

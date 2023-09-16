"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [71690], {
        571690: (a, c, r) => {
            r.r(c);
            r.d(c, {
                CaptchaError: () => t,
                extractCaptchaPropsFromResponseBody: () => e
            });
            var t;
            ! function(a) {
                a.CANCEL = "cancel";
                a.ERROR = "error";
                a.EXPIRED = "expired"
            }(t || (t = {}));

            function e(a) {
                return {
                    captchaService: a.captcha_service,
                    sitekey: a.captcha_sitekey,
                    options: {
                        rqdata: a.captcha_rqdata,
                        rqtoken: a.captcha_rqtoken
                    }
                }
            }
        }
    }
]);
//# sourceMappingURL=dbcfe0ea97cc524fb333.js.map
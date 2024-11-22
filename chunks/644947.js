c.d(t, {
    Zq: function () {
        return p;
    },
    _8: function () {
        return i;
    },
    s$: function () {
        return s;
    }
}),
    c(47120);
var r = c(15729),
    n = c(286379),
    a = c(731965),
    o = c(797614);
let u = (0, r.U)((e) => ({ captchaServeVolume: {} }));
function i() {
    return 0 === Object.keys(u.getState().captchaServeVolume).length;
}
function s(e) {
    (0, a.j)(() => {
        u.setState((t) =>
            null == e
                ? t
                : e in t.captchaServeVolume
                  ? {
                        captchaServeVolume: {
                            ...t.captchaServeVolume,
                            [e]: t.captchaServeVolume[e] + 1
                        }
                    }
                  : {
                        captchaServeVolume: {
                            ...t.captchaServeVolume,
                            [e]: 1
                        }
                    }
        );
    });
}
function p() {
    for (let [e, t] of Object.entries(u.getState().captchaServeVolume))
        o.Z.distribution(
            {
                name: n.V.CAPTCHA_SERVE_VOLUME_DISTRIBUTION,
                tags: ['user_flow:'.concat(e)]
            },
            t,
            !0
        );
    (0, a.j)(() => u.setState({ captchaServeVolume: {} }));
}

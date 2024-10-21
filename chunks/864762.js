n.d(t, {
    k: function () {
        return c;
    }
}),
    n(47120);
var a = n(192379),
    r = n(110924),
    s = n(626135),
    o = n(798930),
    l = n(981631);
function c(e, t) {
    let [n, c] = a.useState(o.O.LANDING),
        i = (0, r.Z)(n),
        [d, u] = a.useState(null),
        [x, N] = a.useState(null),
        [h, C] = a.useState(void 0),
        m = a.useCallback(() => {
            switch (n) {
                case o.O.LANDING:
                    c(o.O.PRE_CONNECT);
                    break;
                case o.O.DISCORD_CONSENT:
                    c(o.O.SUCCESS);
                    break;
                case o.O.ERROR:
                    c(o.O.PRE_CONNECT);
            }
        }, [n]),
        j = a.useCallback((e) => {
            u(null), C(e), c(o.O.ERROR);
        }, []),
        E = a.useCallback((e) => {
            u(e), c(o.O.PRE_CONNECT_WAITING);
        }, []),
        f = a.useCallback((e) => {
            u(null), N(e), c(o.O.DISCORD_CONSENT);
        }, []);
    return (
        a.useEffect(() => {
            if (n !== i)
                s.default.track(l.rMx.ACCOUNT_LINK_STEP, {
                    location_stack: e,
                    previous_step: i,
                    current_step: n,
                    platform_type: t
                });
        }, [n, i, e, t]),
        {
            slide: n,
            gotoNext: m,
            gotoError: j,
            handleWaitingForConnection: E,
            handleAuthToken: f,
            expectedCallbackState: d,
            callbackData: x,
            errorCode: h
        }
    );
}

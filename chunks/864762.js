n.d(t, {
    k: function () {
        return i;
    }
}),
    n(47120);
var a = n(192379),
    r = n(110924),
    l = n(626135),
    o = n(798930),
    s = n(981631);
function i(e, t) {
    let [n, i] = a.useState(o.O.LANDING),
        c = (0, r.Z)(n),
        [d, u] = a.useState(null),
        [x, h] = a.useState(null),
        [m, N] = a.useState(void 0),
        C = a.useCallback(() => {
            switch (n) {
                case o.O.LANDING:
                    i(o.O.PRE_CONNECT);
                    break;
                case o.O.DISCORD_CONSENT:
                    i(o.O.SUCCESS);
                    break;
                case o.O.ERROR:
                    i(o.O.PRE_CONNECT);
            }
        }, [n]),
        j = a.useCallback((e) => {
            u(null), N(e), i(o.O.ERROR);
        }, []),
        f = a.useCallback((e) => {
            u(e), i(o.O.PRE_CONNECT_WAITING);
        }, []),
        v = a.useCallback((e) => {
            u(null), h(e), i(o.O.DISCORD_CONSENT);
        }, []);
    return (
        a.useEffect(() => {
            if (n !== c)
                l.default.track(s.rMx.ACCOUNT_LINK_STEP, {
                    location_stack: e,
                    previous_step: c,
                    current_step: n,
                    platform_type: t
                });
        }, [n, c, e, t]),
        {
            slide: n,
            gotoNext: C,
            gotoError: j,
            handleWaitingForConnection: f,
            handleAuthToken: v,
            expectedCallbackState: d,
            callbackData: x,
            errorCode: m
        }
    );
}

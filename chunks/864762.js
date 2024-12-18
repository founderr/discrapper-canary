n.d(t, {
    k: function () {
        return c;
    }
}),
    n(47120);
var a = n(192379),
    r = n(110924),
    l = n(626135),
    o = n(798930),
    s = n(981631);
function c(e, t) {
    let [n, c] = a.useState(o.O.LANDING),
        i = (0, r.Z)(n),
        [d, u] = a.useState(null),
        [x, h] = a.useState(null),
        [N, m] = a.useState(void 0),
        C = a.useCallback(() => {
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
            u(null), m(e), c(o.O.ERROR);
        }, []),
        f = a.useCallback((e) => {
            u(e), c(o.O.PRE_CONNECT_WAITING);
        }, []),
        v = a.useCallback((e) => {
            u(null), h(e), c(o.O.DISCORD_CONSENT);
        }, []);
    return (
        a.useEffect(() => {
            if (n !== i)
                l.default.track(s.rMx.ACCOUNT_LINK_STEP, {
                    location_stack: e,
                    previous_step: i,
                    current_step: n,
                    platform_type: t
                });
        }, [n, i, e, t]),
        {
            slide: n,
            gotoNext: C,
            gotoError: j,
            handleWaitingForConnection: f,
            handleAuthToken: v,
            expectedCallbackState: d,
            callbackData: x,
            errorCode: N
        }
    );
}

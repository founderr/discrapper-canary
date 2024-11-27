n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120),
    n(773603);
var i = n(200651),
    r = n(192379),
    s = n(593473),
    l = n(512969),
    a = n(442837),
    o = n(893776),
    c = n(899742),
    u = n(743142),
    d = n(893607),
    h = n(703656),
    g = n(314897),
    m = n(781428),
    f = n(981631),
    p = n(176505);
function x(e) {
    let t = r.useCallback(
            (t) => {
                if (
                    (function (e) {
                        var t;
                        let n = (0, l.LX)(e, { path: f.Z5c.CHANNEL(d.Hw.guildId(), d.Hw.channelId()) });
                        return (null == n ? void 0 : null === (t = n.params) || void 0 === t ? void 0 : t.channelId) === p.oC.ROLE_SUBSCRIPTIONS || !1;
                    })(t)
                )
                    h.dL(t);
                else {
                    var n;
                    (null !== (n = e.transitionTo) && void 0 !== n ? n : h.uL)(t);
                }
            },
            [e.transitionTo]
        ),
        { isAuthenticated: n, loginStatus: x } = (0, a.cj)([g.default], () => ({
            isAuthenticated: g.default.isAuthenticated(),
            loginStatus: g.default.getLoginStatus()
        })),
        { location: _, redirectTo: E } = e,
        [I, v] = r.useState(n);
    function N(e) {
        let { handoffKey: t, handoffToken: n, handoffSource: i } = e;
        (0, c.Yz)({
            handoffKey: t,
            handoffToken: n,
            handoffSource: i
        }),
            v(!1);
    }
    return (r.useEffect(() => {
        if (null != _) {
            let { handoff_key: e, handoff_token: t } = (0, s.parse)(_.search);
            if (null != e && null != t) {
                let n = null != E ? (0, u.L)(E) : void 0;
                I
                    ? o.Z.logout(null).finally(() => {
                          N({
                              handoffKey: e,
                              handoffToken: t,
                              handoffSource: n
                          });
                      })
                    : N({
                          handoffKey: e,
                          handoffToken: t,
                          handoffSource: n
                      });
            }
        }
    }, []),
    I || x === f.u34.LOGGING_IN)
        ? (0, i.jsx)(m.q, {})
        : (0, i.jsx)(m.Z, {
              ...e,
              transitionTo: t
          });
}

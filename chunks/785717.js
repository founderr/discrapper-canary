n.d(t, {
    KZ: function () {
        return d;
    },
    Mt: function () {
        return u;
    },
    ZB: function () {
        return c;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(772848),
    o = n(906732),
    s = n(221292);
let l = i.createContext(null),
    u = (e) => {
        let { value: t, children: n, shouldTrackViewOnMount: a = !0 } = e,
            { analyticsLocations: u } = (0, o.ZP)();
        return (
            i.useEffect(() => {
                if (!!a)
                    (0, s.pQ)({
                        action: 'VIEW',
                        analyticsLocations: u,
                        ...t
                    });
            }, [a]),
            (0, r.jsx)(l.Provider, {
                value: t,
                children: n
            })
        );
    },
    c = (e) => {
        var t;
        let { layout: n, userId: r, guildId: o, channelId: s, messageId: u, roleId: c, sourceSessionId: d, showGuildProfile: _ = !0 } = e,
            E = null === (t = i.useContext(l)) || void 0 === t ? void 0 : t.sessionId;
        return i.useMemo(
            () => ({
                sessionId: (0, a.Z)(),
                sourceSessionId: null != d ? d : E,
                layout: n,
                userId: r,
                guildId: o,
                channelId: s,
                messageId: u,
                roleId: c,
                showGuildProfile: _
            }),
            [E, n, r, o, s, u, c, d, _]
        );
    },
    d = () => {
        let e = i.useContext(l),
            { analyticsLocations: t } = (0, o.ZP)();
        return {
            context: e,
            trackUserProfileAction: i.useCallback(
                (n) => {
                    if (null != e)
                        (0, s.pQ)({
                            analyticsLocations: t,
                            ...e,
                            ...n
                        });
                },
                [e, t]
            )
        };
    };

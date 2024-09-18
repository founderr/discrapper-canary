n.d(t, {
    V: function () {
        return T;
    }
}),
    n(773603);
var i = n(735250),
    a = n(470079),
    s = n(442837),
    r = n(728345),
    l = n(812206),
    o = n(252618),
    c = n(207796),
    d = n(106075),
    u = n(121711),
    _ = n(823379),
    E = n(571457),
    h = n(836768),
    m = n(766219),
    I = n(917039),
    g = n(49898),
    p = n(909482);
function T(e) {
    let { gameId: t } = e;
    h.d.setState({ selectedTab: g.F$.SERVERS }), c.GN.setState({ mode: c.v0.DISCOVERY });
    let n = (0, s.e7)([l.Z], () => (null != t ? l.Z.getApplication(t) : null));
    return (
        a.useEffect(() => {
            null != t &&
                null == n &&
                (c.GN.setState({ loadingGameApplication: !0 }),
                r.Z.fetchApplication(t)
                    .then((e) => {
                        c.GN.getState().setSelectedGames(null != e ? [t] : []);
                    })
                    .catch(() => {
                        c.GN.getState().setSelectedGames([]);
                    })
                    .finally(() => {
                        c.GN.setState({ loadingGameApplication: !1 });
                    }));
        }, [n, t]),
        (0, i.jsx)(S, {})
    );
}
function S() {
    let e = (0, I.Z)(),
        t = (function (e) {
            switch (e) {
                case g.F$.SERVERS:
                    return (0, i.jsx)(d.Z, {});
                case g.F$.QUESTS:
                    return (0, i.jsx)(u.Z, {});
                default:
                    (0, _.vE)(e);
            }
        })(e);
    return (
        a.useEffect(() => {
            (0, E.RI)({ selectedTab: e });
        }, [e]),
        (0, i.jsxs)('section', {
            className: p.container,
            children: [(0, i.jsx)(o.yY, { location: (0, m.s)(e) }), (0, i.jsx)('div', { className: p.dragRegion }), t]
        })
    );
}
t.Z = S;

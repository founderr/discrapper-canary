n.d(t, {
    V: function () {
        return S;
    }
}),
    n(773603);
var i = n(735250),
    a = n(470079),
    s = n(731965),
    r = n(442837),
    l = n(728345),
    o = n(812206),
    c = n(252618),
    d = n(207796),
    u = n(106075),
    _ = n(121711),
    E = n(823379),
    h = n(571457),
    m = n(836768),
    I = n(766219),
    g = n(917039),
    p = n(49898),
    T = n(909482);
function S(e) {
    let { gameId: t } = e,
        n = (0, r.e7)([o.Z], () => (null != t ? o.Z.getApplication(t) : null));
    return (
        a.useEffect(() => {
            (0, s.j)(() => {
                m.d.setState({ selectedTab: p.F$.SERVERS }), d.GN.setState({ mode: d.v0.DISCOVERY });
            }),
                null != t &&
                    null == n &&
                    ((0, s.j)(() => {
                        d.GN.setState({ loadingGameApplication: !0 });
                    }),
                    l.Z.fetchApplication(t).finally(() => {
                        (0, s.j)(() => {
                            d.GN.setState({ loadingGameApplication: !1 });
                        });
                    })),
                null != t && null != n && d.GN.getState().setSelectedGames([t]);
        }, [n, t]),
        (0, i.jsx)(f, {})
    );
}
function f() {
    let e = (0, g.Z)(),
        t = (function (e) {
            switch (e) {
                case p.F$.SERVERS:
                    return (0, i.jsx)(u.Z, {});
                case p.F$.QUESTS:
                    return (0, i.jsx)(_.Z, {});
                default:
                    (0, E.vE)(e);
            }
        })(e);
    return (
        a.useEffect(() => {
            (0, h.RI)({ selectedTab: e });
        }, [e]),
        (0, i.jsxs)('section', {
            className: T.container,
            children: [(0, i.jsx)(c.yY, { location: (0, I.s)(e) }), (0, i.jsx)('div', { className: T.dragRegion }), t]
        })
    );
}
t.Z = f;

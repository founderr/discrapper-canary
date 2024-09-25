n.d(t, {
    V: function () {
        return C;
    }
}),
    n(773603);
var i = n(735250),
    a = n(470079),
    s = n(664751),
    r = n(731965),
    l = n(442837),
    o = n(728345),
    c = n(812206),
    d = n(252618),
    u = n(207796),
    _ = n(319443),
    E = n(106075),
    h = n(121711),
    m = n(823379),
    I = n(571457),
    g = n(836768),
    p = n(766219),
    T = n(917039),
    S = n(49898),
    f = n(909482);
function C(e) {
    let { searchRoute: t } = e,
        { game: n } = s.parse(t),
        d = (0, l.e7)([c.Z], () => (null != n ? c.Z.getApplication(n) : null));
    return (
        a.useEffect(() => {
            (0, r.j)(() => {
                g.d.setState({ selectedTab: S.F$.SERVERS }), u.GN.setState({ mode: u.v0.DISCOVERY });
            }),
                null != n &&
                    null == d &&
                    ((0, r.j)(() => {
                        u.GN.setState({ loadingGameApplication: !0 });
                    }),
                    o.Z.fetchApplication(n).finally(() => {
                        (0, r.j)(() => {
                            u.GN.setState({ loadingGameApplication: !1 });
                        });
                    })),
                null != n && null != d && u.GN.getState().setSelectedGames([n]);
        }, [d, n]),
        (0, i.jsx)(N, {})
    );
}
function N() {
    let e = (0, T.Z)(),
        t = (function (e) {
            switch (e) {
                case S.F$.SERVERS:
                    return (0, i.jsx)(E.Z, {});
                case S.F$.APPS:
                    return (0, i.jsx)(_.Z, {});
                case S.F$.QUESTS:
                    return (0, i.jsx)(h.Z, {});
                default:
                    (0, m.vE)(e);
            }
        })(e);
    return (
        a.useEffect(() => {
            (0, I.RI)({ selectedTab: e });
        }, [e]),
        (0, i.jsxs)('section', {
            className: f.container,
            children: [(0, i.jsx)(d.yY, { location: (0, p.s)(e) }), (0, i.jsx)('div', { className: f.dragRegion }), t]
        })
    );
}
t.Z = N;

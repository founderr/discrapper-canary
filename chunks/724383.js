n.d(t, {
    V: function () {
        return A;
    }
}),
    n(773603);
var i = n(735250),
    a = n(470079),
    s = n(664751),
    r = n(266067),
    l = n(143927),
    o = n(731965),
    c = n(442837),
    d = n(728345),
    u = n(812206),
    _ = n(252618),
    E = n(207796),
    h = n(352057),
    m = n(319443),
    I = n(106075),
    g = n(121711),
    p = n(823379),
    T = n(571457),
    S = n(836768),
    f = n(766219),
    C = n(49898),
    N = n(909482);
function A(e) {
    let { searchRoute: t } = e,
        { game: n } = s.parse(t),
        r = (0, c.e7)([u.Z], () => (null != n ? u.Z.getApplication(n) : null));
    return (
        a.useEffect(() => {
            (0, o.j)(() => {
                S.d.setState({ selectedTab: C.F$.SERVERS }), E.GN.setState({ mode: E.v0.DISCOVERY });
            }),
                null != n &&
                    null == r &&
                    ((0, o.j)(() => {
                        E.GN.setState({ loadingGameApplication: !0 });
                    }),
                    d.Z.fetchApplication(n).finally(() => {
                        (0, o.j)(() => {
                            E.GN.setState({ loadingGameApplication: !1 });
                        });
                    })),
                null != n && null != r && E.GN.getState().setSelectedGames([n]);
        }, [r, n]),
        (0, i.jsx)(v, {})
    );
}
function v() {
    let e = (0, h.h)({ location: 'DiscoveryUISelectedTab' }),
        t = (0, S.d)((e) => e.selectedTab, l.Z),
        n = (function (e) {
            switch (e) {
                case C.F$.SERVERS:
                    return (0, i.jsx)(I.Z, {});
                case C.F$.APPS:
                    return (0, i.jsx)(m.Z, {});
                case C.F$.QUESTS:
                    return (0, i.jsx)(g.Z, {});
                default:
                    (0, p.vE)(e);
            }
        })(t),
        s = (0, r.TH)();
    return (
        a.useEffect(() => {
            let t = s.pathname,
                n = (0, f.IE)(t, e);
            n !== S.d.getState().selectedTab && (0, o.j)(() => S.d.setState({ selectedTab: n }));
        }, [e, s.pathname]),
        a.useEffect(() => {
            (0, T.RI)({ selectedTab: t });
        }, [t]),
        (0, i.jsxs)('section', {
            className: N.container,
            children: [(0, i.jsx)(_.yY, { location: (0, f.sm)(t) }), (0, i.jsx)('div', { className: N.dragRegion }), n]
        })
    );
}
t.Z = v;

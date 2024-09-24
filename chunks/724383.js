n.d(t, {
    V: function () {
        return S;
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
    _ = n(106075),
    E = n(121711),
    h = n(823379),
    m = n(571457),
    I = n(836768),
    g = n(766219),
    p = n(917039),
    T = n(49898),
    f = n(909482);
function S(e) {
    let { searchRoute: t } = e,
        { game: n } = s.parse(t),
        d = (0, l.e7)([c.Z], () => (null != n ? c.Z.getApplication(n) : null));
    return (
        a.useEffect(() => {
            (0, r.j)(() => {
                I.d.setState({ selectedTab: T.F$.SERVERS }), u.GN.setState({ mode: u.v0.DISCOVERY });
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
        (0, i.jsx)(C, {})
    );
}
function C() {
    let e = (0, p.Z)(),
        t = (function (e) {
            switch (e) {
                case T.F$.SERVERS:
                    return (0, i.jsx)(_.Z, {});
                case T.F$.QUESTS:
                    return (0, i.jsx)(E.Z, {});
                default:
                    (0, h.vE)(e);
            }
        })(e);
    return (
        a.useEffect(() => {
            (0, m.RI)({ selectedTab: e });
        }, [e]),
        (0, i.jsxs)('section', {
            className: f.container,
            children: [(0, i.jsx)(d.yY, { location: (0, g.s)(e) }), (0, i.jsx)('div', { className: f.dragRegion }), t]
        })
    );
}
t.Z = C;

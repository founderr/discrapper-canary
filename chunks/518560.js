n.d(e, {
    Z: function () {
        return T;
    }
});
var i = n(200651),
    a = n(192379),
    l = n(286379),
    s = n(481060),
    r = n(797614),
    o = n(626135),
    c = n(103879),
    u = n(451284),
    d = n(802429),
    _ = n(846488),
    E = n(181211),
    S = n(811085),
    g = n(967254),
    f = n(981631),
    p = n(388032),
    m = n(394686);
function T() {
    let t = (0, E.Z)(),
        e = (0, _.e)(),
        n = (0, u.P)(),
        T = (0, d.i)();
    return (a.useEffect(() => {
        c.yq();
    }, []),
    a.useEffect(() => {
        e && (o.default.track(f.rMx.SAFETY_HUB_VIEWED, { account_standing: n.state }), r.Z.increment({ name: l.V.SAFETY_HUB_VIEW }));
    }, [e]),
    t)
        ? (0, i.jsx)('div', { children: (0, i.jsx)(s.Spinner, {}) })
        : null != T
          ? (0, i.jsxs)(s.Notice, {
                color: s.NoticeColors.DANGER,
                className: m.nagbar,
                children: [
                    p.intl.string(p.t.TDRvqq),
                    (0, i.jsx)(s.NoticeButton, {
                        onClick: () => c.yq(),
                        children: p.intl.string(p.t.R1AN4O)
                    })
                ]
            })
          : (0, i.jsxs)('div', {
                className: m.container,
                children: [(0, i.jsx)(S.Z, {}), (0, i.jsx)(g.N, {})]
            });
}

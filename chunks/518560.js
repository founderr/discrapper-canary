n.d(e, {
    Z: function () {
        return f;
    }
});
var i = n(200651),
    a = n(192379),
    s = n(286379),
    l = n(481060),
    r = n(797614),
    c = n(626135),
    o = n(103879),
    d = n(451284),
    u = n(802429),
    m = n(846488),
    x = n(181211),
    h = n(811085),
    g = n(967254),
    v = n(981631),
    j = n(388032),
    N = n(262714);
function f() {
    let t = (0, x.Z)(),
        e = (0, m.e)(),
        n = (0, d.P)(),
        f = (0, u.i)();
    return (a.useEffect(() => {
        o.yq();
    }, []),
    a.useEffect(() => {
        e && (c.default.track(v.rMx.SAFETY_HUB_VIEWED, { account_standing: n.state }), r.Z.increment({ name: s.V.SAFETY_HUB_VIEW }));
    }, [e]),
    t)
        ? (0, i.jsx)('div', { children: (0, i.jsx)(l.Spinner, {}) })
        : null != f
          ? (0, i.jsxs)(l.Notice, {
                color: l.NoticeColors.DANGER,
                className: N.nagbar,
                children: [
                    j.intl.string(j.t.TDRvqq),
                    (0, i.jsx)(l.NoticeButton, {
                        onClick: () => o.yq(),
                        children: j.intl.string(j.t.R1AN4O)
                    })
                ]
            })
          : (0, i.jsxs)('div', {
                className: N.container,
                children: [(0, i.jsx)(h.Z, {}), (0, i.jsx)(g.N, {})]
            });
}

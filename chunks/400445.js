n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(735250),
    i = n(524437),
    a = n(664559),
    o = n(453473),
    s = n(791914),
    l = n(802840);
function u(e) {
    let { throttledNow: t, setTab: n, closePopout: u } = e,
        c = (0, a.Z)();
    return (0, r.jsxs)('div', {
        className: l.container,
        children: [
            (0, r.jsx)(s.Z, {
                tab: i.X.BOOKMARKS,
                setTab: n,
                closePopout: u
            }),
            (0, r.jsx)(o.K, {
                savedMessageKeys: c,
                closePopout: u,
                throttledNow: t
            })
        ]
    });
}

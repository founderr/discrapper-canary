n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(735250),
    s = n(442837),
    a = n(524437),
    r = n(768943),
    l = n(453473),
    o = n(791914),
    c = n(802840);
function u(e) {
    let { throttledNow: t, setTab: n, closePopout: u } = e,
        d = (0, s.e7)([r.Z], () => r.Z.getSavedMessages());
    return (0, i.jsxs)('div', {
        className: c.container,
        children: [
            (0, i.jsx)(o.Z, {
                tab: a.X.BOOKMARKS,
                setTab: n,
                closePopout: u
            }),
            (0, i.jsx)(l.K, {
                savedMessages: d,
                closePopout: u,
                throttledNow: t
            })
        ]
    });
}

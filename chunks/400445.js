n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(735250),
    s = n(442837),
    a = n(524437),
    r = n(768943),
    l = n(818260),
    o = n(453473),
    c = n(791914),
    u = n(802840);
function d(e) {
    let { throttledNow: t, setTab: n, closePopout: d } = e,
        _ = (0, s.e7)([r.Z], () => r.Z.getSavedMessages());
    return (
        (0, l.Z)(),
        (0, i.jsxs)('div', {
            className: u.container,
            children: [
                (0, i.jsx)(c.Z, {
                    tab: a.X.BOOKMARKS,
                    setTab: n,
                    closePopout: d
                }),
                (0, i.jsx)(o.K, {
                    savedMessages: _,
                    closePopout: d,
                    throttledNow: t
                })
            ]
        })
    );
}

n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(735250),
    i = n(442837),
    a = n(524437),
    o = n(768943),
    s = n(818260),
    l = n(453473),
    u = n(791914),
    c = n(802840);
function d(e) {
    let { throttledNow: t, setTab: n, closePopout: d } = e,
        _ = (0, i.e7)([o.Z], () => o.Z.getSavedMessages());
    return (
        (0, s.Z)(),
        (0, r.jsxs)('div', {
            className: c.container,
            children: [
                (0, r.jsx)(u.Z, {
                    tab: a.X.BOOKMARKS,
                    setTab: n,
                    closePopout: d
                }),
                (0, r.jsx)(l.K, {
                    savedMessages: _,
                    closePopout: d,
                    throttledNow: t
                })
            ]
        })
    );
}

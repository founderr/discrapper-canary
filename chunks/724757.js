e.d(n, {
    Z: function () {
        return u;
    }
});
var i = e(192379),
    r = e(924826),
    l = e(442837),
    o = e(607070);
function u(t, n, e) {
    let u = (0, l.e7)([o.Z], () => o.Z.keyboardModeEnabled),
        a = i.useCallback(
            (t) => {
                let e = document.querySelector(t),
                    i = n.current;
                null != e &&
                    null != i &&
                    (e.focus(),
                    i.scrollIntoViewNode({
                        node: e,
                        padding: 80
                    }));
            },
            [n]
        ),
        s = i.useCallback(
            () =>
                new Promise((t) => {
                    let e = n.current;
                    if (null == e) return t();
                    e.scrollTo({
                        to: 0,
                        callback: () => requestAnimationFrame(() => t())
                    });
                }),
            [n]
        ),
        c = i.useCallback(
            () =>
                new Promise((t) => {
                    let e = n.current;
                    if (null == e) return t();
                    e.scrollTo({
                        to: Number.MAX_SAFE_INTEGER,
                        callback: () => requestAnimationFrame(() => t())
                    });
                }),
            [n]
        );
    return (0, r.ZP)({
        id: t,
        isEnabled: u,
        setFocus: a,
        scrollToStart: s,
        scrollToEnd: c,
        orientation: null == e ? void 0 : e.orientation
    });
}

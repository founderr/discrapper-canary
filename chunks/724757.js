n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(192379),
    r = n(924826),
    o = n(442837),
    l = n(607070);
function u(e, t, n) {
    let u = (0, o.e7)([l.Z], () => l.Z.keyboardModeEnabled),
        a = i.useCallback(
            (e) => {
                let n = document.querySelector(e),
                    i = t.current;
                null != n &&
                    null != i &&
                    (n.focus(),
                    i.scrollIntoViewNode({
                        node: n,
                        padding: 80
                    }));
            },
            [t]
        ),
        s = i.useCallback(
            () =>
                new Promise((e) => {
                    let n = t.current;
                    if (null == n) return e();
                    n.scrollTo({
                        to: 0,
                        callback: () => requestAnimationFrame(() => e())
                    });
                }),
            [t]
        ),
        c = i.useCallback(
            () =>
                new Promise((e) => {
                    let n = t.current;
                    if (null == n) return e();
                    n.scrollTo({
                        to: Number.MAX_SAFE_INTEGER,
                        callback: () => requestAnimationFrame(() => e())
                    });
                }),
            [t]
        );
    return (0, r.ZP)({
        id: e,
        isEnabled: u,
        setFocus: a,
        scrollToStart: s,
        scrollToEnd: c,
        orientation: null == n ? void 0 : n.orientation
    });
}

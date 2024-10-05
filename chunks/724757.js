n.d(t, {
    Z: function () {
        return r;
    }
});
var l = n(470079),
    a = n(924826),
    s = n(442837),
    i = n(607070);
function r(e, t, n) {
    let r = (0, s.e7)([i.Z], () => i.Z.keyboardModeEnabled),
        o = l.useCallback(
            (e) => {
                let n = document.querySelector(e),
                    l = t.current;
                null != n &&
                    null != l &&
                    (n.focus(),
                    l.scrollIntoViewNode({
                        node: n,
                        padding: 80
                    }));
            },
            [t]
        ),
        c = l.useCallback(
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
        u = l.useCallback(
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
    return (0, a.ZP)({
        id: e,
        isEnabled: r,
        setFocus: o,
        scrollToStart: c,
        scrollToEnd: u,
        orientation: null == n ? void 0 : n.orientation
    });
}

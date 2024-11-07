t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(192379),
    r = t(924826),
    l = t(442837),
    o = t(607070);
function u(e, n, t) {
    let u = (0, l.e7)([o.Z], () => o.Z.keyboardModeEnabled),
        a = i.useCallback(
            (e) => {
                let t = document.querySelector(e),
                    i = n.current;
                null != t &&
                    null != i &&
                    (t.focus(),
                    i.scrollIntoViewNode({
                        node: t,
                        padding: 80
                    }));
            },
            [n]
        ),
        s = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = n.current;
                    if (null == t) return e();
                    t.scrollTo({
                        to: 0,
                        callback: () => requestAnimationFrame(() => e())
                    });
                }),
            [n]
        ),
        c = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = n.current;
                    if (null == t) return e();
                    t.scrollTo({
                        to: Number.MAX_SAFE_INTEGER,
                        callback: () => requestAnimationFrame(() => e())
                    });
                }),
            [n]
        );
    return (0, r.ZP)({
        id: e,
        isEnabled: u,
        setFocus: a,
        scrollToStart: s,
        scrollToEnd: c,
        orientation: null == t ? void 0 : t.orientation
    });
}

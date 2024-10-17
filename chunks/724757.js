t.d(n, {
    Z: function () {
        return u;
    }
});
var r = t(470079),
    i = t(924826),
    l = t(442837),
    o = t(607070);
function u(e, n, t) {
    let u = (0, l.e7)([o.Z], () => o.Z.keyboardModeEnabled),
        s = r.useCallback(
            (e) => {
                let t = document.querySelector(e),
                    r = n.current;
                null != t &&
                    null != r &&
                    (t.focus(),
                    r.scrollIntoViewNode({
                        node: t,
                        padding: 80
                    }));
            },
            [n]
        ),
        a = r.useCallback(
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
        c = r.useCallback(
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
    return (0, i.ZP)({
        id: e,
        isEnabled: u,
        setFocus: s,
        scrollToStart: a,
        scrollToEnd: c,
        orientation: null == t ? void 0 : t.orientation
    });
}

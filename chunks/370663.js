n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(192379),
    l = n(772848),
    r = n(125268);
let s = () => {};
function a(e, t, n) {
    let a = i.useRef((0, l.Z)()),
        o = i.useRef(Date.now()),
        c = i.useCallback(
            (i, l) => {
                let s = {
                    x: i,
                    y: l,
                    deltaTime: Date.now() - o.current
                };
                (0, r.oW)(t, a.current, e, n, s), (0, r.cV)(a.current, e, n, [s]);
            },
            [t, n, e]
        ),
        u = i.useCallback(
            (e, t, n) => {
                (a.current = (0, l.Z)()), (o.current = Date.now()), c(t, n);
            },
            [c]
        ),
        d = i.useCallback((e, t, n) => c(t, n), [c]),
        h = i.useCallback((e, t, n) => u(e, t, n), [u]);
    return i.useMemo(
        () => ({
            handleMouseDown: u,
            handleMouseMove: d,
            handleMouseUp: s,
            handleMouseEnter: h
        }),
        [u, h, d]
    );
}

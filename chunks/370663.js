n.d(t, {
    Z: function () {
        return r;
    }
});
var i = n(192379),
    s = n(772848),
    a = n(125268);
let l = () => {};
function r(e, t, n) {
    let r = i.useRef((0, s.Z)()),
        o = i.useRef(Date.now()),
        c = i.useCallback(
            (i, s) => {
                let l = {
                    x: i,
                    y: s,
                    deltaTime: Date.now() - o.current
                };
                (0, a.oW)(t, r.current, e, n, l), (0, a.cV)(r.current, e, n, [l]);
            },
            [t, n, e]
        ),
        u = i.useCallback(
            (e, t, n) => {
                (r.current = (0, s.Z)()), (o.current = Date.now()), c(t, n);
            },
            [c]
        ),
        d = i.useCallback((e, t, n) => c(t, n), [c]),
        h = i.useCallback((e, t, n) => u(e, t, n), [u]);
    return i.useMemo(
        () => ({
            handleMouseDown: u,
            handleMouseMove: d,
            handleMouseUp: l,
            handleMouseEnter: h
        }),
        [u, h, d]
    );
}

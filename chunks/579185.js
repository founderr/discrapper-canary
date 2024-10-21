n.d(t, {
    Z: function () {
        return a;
    }
}),
    n(47120);
var i = n(192379),
    s = n(846519);
function a(e, t) {
    let [n, a] = i.useState(!1),
        l = i.useRef(new s.sW(t, () => a(!1))),
        r = i.useRef(new s.sW(e, () => a(!0))),
        o = i.useCallback(() => {
            l.current.cancel(), r.current.cancel();
        }, []);
    i.useEffect(() => o, [o]);
    let c = i.useCallback(() => {
        o(), l.current.delay();
    }, [o]);
    return {
        isHovered: n,
        setIsHovered: a,
        onMouseEnter: i.useCallback(() => {
            o(), r.current.delay();
        }, [o]),
        onMouseLeave: c,
        cancelTimers: o
    };
}

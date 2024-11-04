n.d(t, {
    Z: function () {
        return r;
    }
}),
    n(47120);
var i = n(192379),
    l = n(846519);
function r(e, t) {
    let [n, r] = i.useState(!1),
        s = i.useRef(new l.sW(t, () => r(!1))),
        a = i.useRef(new l.sW(e, () => r(!0))),
        o = i.useCallback(() => {
            s.current.cancel(), a.current.cancel();
        }, []);
    i.useEffect(() => o, [o]);
    let c = i.useCallback(() => {
        o(), s.current.delay();
    }, [o]);
    return {
        isHovered: n,
        setIsHovered: r,
        onMouseEnter: i.useCallback(() => {
            o(), a.current.delay();
        }, [o]),
        onMouseLeave: c,
        cancelTimers: o
    };
}

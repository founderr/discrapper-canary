t.d(n, {
    Z: function () {
        return a;
    }
}), t(47120);
var i = t(470079), l = t(442837), r = t(607070);
function a(e) {
    let {
            isExpanded: n,
            durationMs: t = 100
        } = e, a = (0, l.e7)([r.Z], () => r.Z.useReducedMotion), [s, o] = i.useState(null), c = i.useCallback(() => {
        }, []), u = i.useRef(), d = i.useRef(), [m, p] = i.useState(!1), _ = i.useCallback(() => p(!1), []);
    return i.useLayoutEffect(() => {
        if (null == s)
            return;
        let {height: e} = s.getBoundingClientRect();
        !n && (null == u.current || e < u.current) && (u.current = e), n && (null == d.current || e > d.current) && (d.current = e);
        let i = n ? u.current : d.current, l = n ? d.current : u.current;
        if (null == i || null == l)
            return;
        p(!0), s.style.height = ''.concat(i, 'px'), s.style.transition = '';
        let r = null;
        return r = requestAnimationFrame(() => {
            r = null, s.style.height = ''.concat(l, 'px'), s.style.transition = 'height '.concat(t, 'ms ease-in-out');
        }), () => null != r ? cancelAnimationFrame(r) : void 0;
    }, [
        s,
        n,
        t
    ]), i.useEffect(() => {
        if (null != s && !m)
            s.style.height = '', s.style.transition = '';
    }, [
        s,
        m
    ]), {
        ref: a ? c : o,
        isTransitioning: m,
        onTransitionEnd: _
    };
}

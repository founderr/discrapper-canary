t.d(n, {
    Z: function () {
        return a;
    }
}), t(47120);
var i = t(470079), l = t(442837), r = t(607070);
function a(e) {
    let {
            key: n,
            isExpanded: t,
            durationMs: a = 100,
            maxAnimationHeight: s
        } = e, o = (0, l.e7)([r.Z], () => r.Z.useReducedMotion), [c, u] = i.useState(null), d = i.useCallback(() => {
        }, []), m = i.useRef(), p = i.useRef(), _ = i.useRef(n), E = i.useRef(a);
    E.current = a;
    let h = i.useRef(s);
    h.current = s;
    let [A, f] = i.useState(!1), N = i.useCallback(() => f(!1), []);
    return i.useLayoutEffect(() => {
        void 0 !== n && (m.current = void 0, p.current = void 0, f(!1));
    }, [n]), i.useLayoutEffect(() => {
        var e;
        if (null == c)
            return;
        let {height: i} = c.getBoundingClientRect();
        !t && (null == m.current || i < m.current) && (m.current = i), t && (null == p.current || i > p.current) && (p.current = i);
        let l = m.current, r = p.current, a = _.current !== n;
        if (_.current = n, null == l || null == r || a)
            return;
        let s = Math.min(null !== (e = h.current) && void 0 !== e ? e : r, r), o = t ? l : s, u = t ? s : l;
        if (!(o !== u))
            return;
        f(!0), c.style.height = ''.concat(o, 'px'), c.style.transition = '';
        let d = null;
        return d = requestAnimationFrame(() => {
            d = null, c.style.height = ''.concat(u, 'px'), c.style.transition = 'height '.concat(E.current, 'ms ease-in-out');
        }), () => null != d ? cancelAnimationFrame(d) : void 0;
    }, [
        n,
        c,
        t
    ]), i.useLayoutEffect(() => {
        if (null != c && !A)
            c.style.height = '', c.style.transition = '';
    }, [
        n,
        c,
        A
    ]), {
        ref: o ? d : u,
        isTransitioning: A,
        onTransitionEnd: N
    };
}

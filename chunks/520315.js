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
            minHeightOverride: s,
            maxHeightOverride: o,
            maxAnimationHeight: c
        } = e, u = (0, l.e7)([r.Z], () => r.Z.useReducedMotion), [d, m] = i.useState(null), p = i.useCallback(() => {
        }, []), _ = i.useRef(), E = i.useRef(), h = i.useRef(n), A = i.useRef(a);
    A.current = a;
    let f = i.useRef(s);
    f.current = s;
    let N = i.useRef(o);
    N.current = o;
    let C = i.useRef(c);
    C.current = c;
    let [v, I] = i.useState(!1), x = i.useCallback(() => I(!1), []);
    return i.useLayoutEffect(() => {
        void 0 !== n && (_.current = void 0, E.current = void 0, I(!1));
    }, [n]), i.useLayoutEffect(() => {
        var e, i, l;
        if (null == d)
            return;
        let {height: r} = d.getBoundingClientRect();
        !t && (null == _.current || r < _.current) && (_.current = r), t && (null == E.current || r > E.current) && (E.current = r);
        let a = null !== (e = f.current) && void 0 !== e ? e : _.current, s = null !== (i = N.current) && void 0 !== i ? i : E.current, o = h.current !== n;
        if (h.current = n, null == a || null == s || o)
            return;
        let c = Math.min(null !== (l = C.current) && void 0 !== l ? l : s, s), u = t ? a : c, m = t ? c : a;
        if (!(u !== m))
            return;
        I(!0), d.style.height = ''.concat(u, 'px'), d.style.transition = '';
        let p = null;
        return p = requestAnimationFrame(() => {
            p = null, d.style.height = ''.concat(m, 'px'), d.style.transition = 'height '.concat(A.current, 'ms ease-in-out');
        }), () => null != p ? cancelAnimationFrame(p) : void 0;
    }, [
        n,
        d,
        t
    ]), i.useLayoutEffect(() => {
        if (null != d && !v)
            d.style.height = '', d.style.transition = '';
    }, [
        n,
        d,
        v
    ]), {
        ref: u ? p : m,
        isTransitioning: v,
        onTransitionEnd: x
    };
}

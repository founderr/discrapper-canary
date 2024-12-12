r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(442837),
    o = r(607070);
function l(e) {
    let { key: n, isExpanded: r, durationMs: i = 100, minHeightOverride: l, maxHeightOverride: u, maxAnimationHeight: c } = e,
        d = (0, s.e7)([o.Z], () => o.Z.useReducedMotion),
        [f, _] = a.useState(null),
        h = a.useCallback(() => {}, []),
        p = d ? h : _,
        m = a.useRef(),
        g = a.useRef(),
        E = a.useRef(n),
        v = a.useRef(i);
    v.current = i;
    let I = a.useRef(l);
    I.current = l;
    let T = a.useRef(u);
    T.current = u;
    let b = a.useRef(c);
    b.current = c;
    let [y, S] = a.useState(!1),
        A = a.useCallback(() => S(!1), []);
    return (
        a.useLayoutEffect(() => {
            void 0 !== n && ((m.current = void 0), (g.current = void 0), S(!1));
        }, [n]),
        a.useLayoutEffect(() => {
            var e, i, a;
            if (null == f) return;
            let { height: s } = f.getBoundingClientRect();
            !r && (null == m.current || s < m.current) && (m.current = s), r && (null == g.current || s > g.current) && (g.current = s);
            let o = null !== (e = I.current) && void 0 !== e ? e : m.current,
                l = null !== (i = T.current) && void 0 !== i ? i : g.current,
                u = E.current !== n;
            if (((E.current = n), null == o || null == l || u)) return;
            let c = Math.min(null !== (a = b.current) && void 0 !== a ? a : l, l),
                d = r ? o : c,
                _ = r ? c : o;
            if (!(d !== _)) return;
            S(!0), (f.style.height = ''.concat(d, 'px')), (f.style.transition = '');
            let h = null;
            return (
                (h = requestAnimationFrame(() => {
                    (h = null), (f.style.height = ''.concat(_, 'px')), (f.style.transition = 'height '.concat(v.current, 'ms ease-in-out'));
                })),
                () => (null != h ? cancelAnimationFrame(h) : void 0)
            );
        }, [n, f, r]),
        a.useLayoutEffect(() => {
            if (null != f && !y) (f.style.height = ''), (f.style.transition = '');
        }, [n, f, y]),
        {
            ref: p,
            isTransitioning: y,
            onTransitionEnd: A
        }
    );
}

t.d(n, {
    Z: function () {
        return o;
    }
}),
    t(47120);
var i = t(470079),
    a = t(442837),
    l = t(607070);
function o(e) {
    let { key: n, isExpanded: t, durationMs: o = 100, minHeightOverride: r, maxHeightOverride: s, maxAnimationHeight: c } = e,
        u = (0, a.e7)([l.Z], () => l.Z.useReducedMotion),
        [d, m] = i.useState(null),
        p = i.useCallback(() => {}, []),
        _ = i.useRef(),
        C = i.useRef(),
        f = i.useRef(n),
        h = i.useRef(o);
    h.current = o;
    let E = i.useRef(r);
    E.current = r;
    let A = i.useRef(s);
    A.current = s;
    let N = i.useRef(c);
    N.current = c;
    let [x, v] = i.useState(!1),
        I = i.useCallback(() => v(!1), []);
    return (
        i.useLayoutEffect(() => {
            void 0 !== n && ((_.current = void 0), (C.current = void 0), v(!1));
        }, [n]),
        i.useLayoutEffect(() => {
            var e, i, a;
            if (null == d) return;
            let { height: l } = d.getBoundingClientRect();
            !t && (null == _.current || l < _.current) && (_.current = l), t && (null == C.current || l > C.current) && (C.current = l);
            let o = null !== (e = E.current) && void 0 !== e ? e : _.current,
                r = null !== (i = A.current) && void 0 !== i ? i : C.current,
                s = f.current !== n;
            if (((f.current = n), null == o || null == r || s)) return;
            let c = Math.min(null !== (a = N.current) && void 0 !== a ? a : r, r),
                u = t ? o : c,
                m = t ? c : o;
            if (!(u !== m)) return;
            v(!0), (d.style.height = ''.concat(u, 'px')), (d.style.transition = '');
            let p = null;
            return (
                (p = requestAnimationFrame(() => {
                    (p = null), (d.style.height = ''.concat(m, 'px')), (d.style.transition = 'height '.concat(h.current, 'ms ease-in-out'));
                })),
                () => (null != p ? cancelAnimationFrame(p) : void 0)
            );
        }, [n, d, t]),
        i.useLayoutEffect(() => {
            if (null != d && !x) (d.style.height = ''), (d.style.transition = '');
        }, [n, d, x]),
        {
            ref: u ? p : m,
            isTransitioning: x,
            onTransitionEnd: I
        }
    );
}

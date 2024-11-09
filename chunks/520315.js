n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(47120);
var r = n(192379),
    i = n(442837),
    a = n(607070);
function s(e) {
    let { key: t, isExpanded: n, durationMs: s = 100, minHeightOverride: o, maxHeightOverride: l, maxAnimationHeight: u } = e,
        c = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
        [d, f] = r.useState(null),
        _ = r.useCallback(() => {}, []),
        h = r.useRef(),
        p = r.useRef(),
        m = r.useRef(t),
        g = r.useRef(s);
    g.current = s;
    let E = r.useRef(o);
    E.current = o;
    let v = r.useRef(l);
    v.current = l;
    let I = r.useRef(u);
    I.current = u;
    let [S, T] = r.useState(!1),
        b = r.useCallback(() => T(!1), []);
    return (
        r.useLayoutEffect(() => {
            void 0 !== t && ((h.current = void 0), (p.current = void 0), T(!1));
        }, [t]),
        r.useLayoutEffect(() => {
            var e, r, i;
            if (null == d) return;
            let { height: a } = d.getBoundingClientRect();
            !n && (null == h.current || a < h.current) && (h.current = a), n && (null == p.current || a > p.current) && (p.current = a);
            let s = null !== (e = E.current) && void 0 !== e ? e : h.current,
                o = null !== (r = v.current) && void 0 !== r ? r : p.current,
                l = m.current !== t;
            if (((m.current = t), null == s || null == o || l)) return;
            let u = Math.min(null !== (i = I.current) && void 0 !== i ? i : o, o),
                c = n ? s : u,
                f = n ? u : s;
            if (!(c !== f)) return;
            T(!0), (d.style.height = ''.concat(c, 'px')), (d.style.transition = '');
            let _ = null;
            return (
                (_ = requestAnimationFrame(() => {
                    (_ = null), (d.style.height = ''.concat(f, 'px')), (d.style.transition = 'height '.concat(g.current, 'ms ease-in-out'));
                })),
                () => (null != _ ? cancelAnimationFrame(_) : void 0)
            );
        }, [t, d, n]),
        r.useLayoutEffect(() => {
            if (null != d && !S) (d.style.height = ''), (d.style.transition = '');
        }, [t, d, S]),
        {
            ref: c ? _ : f,
            isTransitioning: S,
            onTransitionEnd: b
        }
    );
}

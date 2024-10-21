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
        [d, _] = r.useState(null),
        E = r.useCallback(() => {}, []),
        f = r.useRef(),
        h = r.useRef(),
        p = r.useRef(t),
        I = r.useRef(s);
    I.current = s;
    let m = r.useRef(o);
    m.current = o;
    let T = r.useRef(l);
    T.current = l;
    let S = r.useRef(u);
    S.current = u;
    let [g, A] = r.useState(!1),
        N = r.useCallback(() => A(!1), []);
    return (
        r.useLayoutEffect(() => {
            void 0 !== t && ((f.current = void 0), (h.current = void 0), A(!1));
        }, [t]),
        r.useLayoutEffect(() => {
            var e, r, i;
            if (null == d) return;
            let { height: a } = d.getBoundingClientRect();
            !n && (null == f.current || a < f.current) && (f.current = a), n && (null == h.current || a > h.current) && (h.current = a);
            let s = null !== (e = m.current) && void 0 !== e ? e : f.current,
                o = null !== (r = T.current) && void 0 !== r ? r : h.current,
                l = p.current !== t;
            if (((p.current = t), null == s || null == o || l)) return;
            let u = Math.min(null !== (i = S.current) && void 0 !== i ? i : o, o),
                c = n ? s : u,
                _ = n ? u : s;
            if (!(c !== _)) return;
            A(!0), (d.style.height = ''.concat(c, 'px')), (d.style.transition = '');
            let E = null;
            return (
                (E = requestAnimationFrame(() => {
                    (E = null), (d.style.height = ''.concat(_, 'px')), (d.style.transition = 'height '.concat(I.current, 'ms ease-in-out'));
                })),
                () => (null != E ? cancelAnimationFrame(E) : void 0)
            );
        }, [t, d, n]),
        r.useLayoutEffect(() => {
            if (null != d && !g) (d.style.height = ''), (d.style.transition = '');
        }, [t, d, g]),
        {
            ref: c ? E : _,
            isTransitioning: g,
            onTransitionEnd: N
        }
    );
}

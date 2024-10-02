n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(442837),
    o = n(607070);
function s(e) {
    let { key: t, isExpanded: n, durationMs: r = 100, minHeightOverride: s, maxHeightOverride: l, maxAnimationHeight: u } = e,
        c = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
        [d, _] = i.useState(null),
        E = i.useCallback(() => {}, []),
        f = c ? E : _,
        h = i.useRef(),
        p = i.useRef(),
        m = i.useRef(t),
        I = i.useRef(r);
    I.current = r;
    let T = i.useRef(s);
    T.current = s;
    let g = i.useRef(l);
    g.current = l;
    let S = i.useRef(u);
    S.current = u;
    let [A, v] = i.useState(!1),
        N = i.useCallback(() => v(!1), []);
    return (
        i.useLayoutEffect(() => {
            void 0 !== t && ((h.current = void 0), (p.current = void 0), v(!1));
        }, [t]),
        i.useLayoutEffect(() => {
            var e, r, i;
            if (null == d) return;
            let { height: a } = d.getBoundingClientRect();
            !n && (null == h.current || a < h.current) && (h.current = a), n && (null == p.current || a > p.current) && (p.current = a);
            let o = null !== (e = T.current) && void 0 !== e ? e : h.current,
                s = null !== (r = g.current) && void 0 !== r ? r : p.current,
                l = m.current !== t;
            if (((m.current = t), null == o || null == s || l)) return;
            let u = Math.min(null !== (i = S.current) && void 0 !== i ? i : s, s),
                c = n ? o : u,
                _ = n ? u : o;
            if (!(c !== _)) return;
            v(!0), (d.style.height = ''.concat(c, 'px')), (d.style.transition = '');
            let E = null;
            return (
                (E = requestAnimationFrame(() => {
                    (E = null), (d.style.height = ''.concat(_, 'px')), (d.style.transition = 'height '.concat(I.current, 'ms ease-in-out'));
                })),
                () => (null != E ? cancelAnimationFrame(E) : void 0)
            );
        }, [t, d, n]),
        i.useLayoutEffect(() => {
            if (null != d && !A) (d.style.height = ''), (d.style.transition = '');
        }, [t, d, A]),
        {
            ref: f,
            isTransitioning: A,
            onTransitionEnd: N
        }
    );
}

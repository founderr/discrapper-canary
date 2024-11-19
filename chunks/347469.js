n.d(t, {
    y: function () {
        return r;
    }
}),
    n(47120);
var r,
    i,
    a,
    s,
    o = n(192379),
    l = n(392711);
function u(e) {
    return 2 === e || 3 === e ? 1 : 0;
}
((a = r || (r = {}))[(a.VERTICAL_TOP = 0)] = 'VERTICAL_TOP'), (a[(a.VERTICAL_BOTTOM = 1)] = 'VERTICAL_BOTTOM'), (a[(a.HORIZONTAL_LEFT = 2)] = 'HORIZONTAL_LEFT'), (a[(a.HORIZONTAL_RIGHT = 3)] = 'HORIZONTAL_RIGHT'), ((s = i || (i = {}))[(s.VERTICAL = 0)] = 'VERTICAL'), (s[(s.HORIZONTAL = 1)] = 'HORIZONTAL');
t.Z = (e) => {
    let { initialElementDimension: t, resizableDomNodeRef: n, maxDimension: r, minDimension: i, onElementResize: a, onElementResizeStart: s, onElementResizeEnd: c, throttleDuration: d = 300, orientation: f, usePointerEvents: _ = !1, getClampedValue: p = l.clamp } = e,
        [h, m] = o.useState(!1),
        g = o.useRef(0),
        E = o.useRef(!1),
        v = o.useRef(null == t ? 0 : t);
    return (
        o.useLayoutEffect(() => {
            if (!h || null == n.current) return;
            function e(e) {
                let t = 1 === u(f) ? e.screenX : e.screenY,
                    n = 0 === f || 2 === f,
                    r = (t - g.current) * (n ? -1 : 1);
                return v.current + r;
            }
            function t(e) {
                return p(e, null != i ? i : 0, null != r ? r : e);
            }
            let o = (0, l.throttle)(a, d),
                b = (r) => {
                    if (null == n.current) return null;
                    let i = e(r),
                        a = t(i),
                        l = 1 === u(f) ? 'width' : 'height';
                    (n.current.style[l] = ''.concat(a, 'px')), !E.current && ((E.current = !0), null == s || s(a)), o(a, i);
                },
                I = (n) => {
                    m(!1);
                    let r = e(n),
                        i = t(r);
                    a(i, r), null == c || c(i), (E.current = !1);
                },
                T = _ ? 'pointerup' : 'mouseup',
                S = _ ? 'pointermove' : 'mousemove',
                y = n.current.ownerDocument;
            return (
                y.addEventListener(T, I),
                y.addEventListener(S, b),
                () => {
                    y.removeEventListener(T, I), y.removeEventListener(S, b), o.cancel();
                }
            );
        }, [h, a, i, r, f, n, d, c, _, p, s]),
        o.useCallback(
            (e) => {
                let t = 1 === u(f);
                null != n.current && (v.current = t ? n.current.offsetWidth : n.current.offsetHeight), (g.current = t ? e.screenX : e.screenY), m(!0);
            },
            [f, n]
        )
    );
};

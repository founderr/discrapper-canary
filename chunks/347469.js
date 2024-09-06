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
    o = n(470079),
    l = n(392711);
function u(e) {
    return 2 === e || 3 === e ? 1 : 0;
}
((a = r || (r = {}))[(a.VERTICAL_TOP = 0)] = 'VERTICAL_TOP'), (a[(a.VERTICAL_BOTTOM = 1)] = 'VERTICAL_BOTTOM'), (a[(a.HORIZONTAL_LEFT = 2)] = 'HORIZONTAL_LEFT'), (a[(a.HORIZONTAL_RIGHT = 3)] = 'HORIZONTAL_RIGHT'), ((s = i || (i = {}))[(s.VERTICAL = 0)] = 'VERTICAL'), (s[(s.HORIZONTAL = 1)] = 'HORIZONTAL');
t.Z = (e) => {
    let { initialElementDimension: t, resizableDomNodeRef: n, maxDimension: r, minDimension: i, onElementResize: a, onElementResizeStart: s, onElementResizeEnd: c, throttleDuration: d = 300, orientation: _, usePointerEvents: E = !1 } = e,
        [f, h] = o.useState(!1),
        p = o.useRef(0),
        I = o.useRef(null == t ? 0 : t);
    return (
        o.useLayoutEffect(() => {
            if (!f || null == n.current) return;
            function e(e) {
                let t = 1 === u(_) ? e.screenX : e.screenY,
                    n = 0 === _ || 2 === _,
                    a = (t - p.current) * (n ? -1 : 1),
                    s = I.current + a;
                return (0, l.clamp)(s, null != i ? i : 0, null != r ? r : s);
            }
            let t = (0, l.throttle)(a, d),
                s = (r) => {
                    if (null == n.current) return null;
                    let i = e(r),
                        a = 1 === u(_) ? 'width' : 'height';
                    (n.current.style[a] = ''.concat(i, 'px')), t(i);
                },
                o = (t) => {
                    h(!1);
                    let n = e(t);
                    a(n), null == c || c(n);
                },
                m = E ? 'pointerup' : 'mouseup',
                T = E ? 'pointermove' : 'mousemove',
                S = n.current.ownerDocument;
            return (
                S.addEventListener(m, o),
                S.addEventListener(T, s),
                () => {
                    S.removeEventListener(m, o), S.removeEventListener(T, s), t.cancel();
                }
            );
        }, [f, a, i, r, _, n, d, c, E]),
        o.useCallback(
            (e) => {
                let t = 1 === u(_);
                null != n.current && (I.current = t ? n.current.offsetWidth : n.current.offsetHeight), (p.current = t ? e.screenX : e.screenY), null == s || s(I.current), h(!0);
            },
            [s, _, n]
        )
    );
};

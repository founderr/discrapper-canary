n.d(t, {
    y: function () {
        return r;
    }
});
var r,
    i,
    a = n(47120);
var o = n(470079),
    s = n(392711);
let l = 300;
function u(e) {
    return 2 === e || 3 === e ? 1 : 0;
}
!(function (e) {
    (e[(e.VERTICAL_TOP = 0)] = 'VERTICAL_TOP'), (e[(e.VERTICAL_BOTTOM = 1)] = 'VERTICAL_BOTTOM'), (e[(e.HORIZONTAL_LEFT = 2)] = 'HORIZONTAL_LEFT'), (e[(e.HORIZONTAL_RIGHT = 3)] = 'HORIZONTAL_RIGHT');
})(r || (r = {})),
    !(function (e) {
        (e[(e.VERTICAL = 0)] = 'VERTICAL'), (e[(e.HORIZONTAL = 1)] = 'HORIZONTAL');
    })(i || (i = {}));
let c = (e) => {
    let { initialElementDimension: t, resizableDomNodeRef: n, maxDimension: r, minDimension: i, onElementResize: a, onElementResizeStart: c, onElementResizeEnd: d, throttleDuration: _ = l, orientation: E, usePointerEvents: f = !1, getClampedValue: h = s.clamp } = e,
        [p, m] = o.useState(!1),
        I = o.useRef(0),
        T = o.useRef(!1),
        g = o.useRef(null == t ? 0 : t);
    return (
        o.useLayoutEffect(() => {
            if (!p || null == n.current) return;
            function e(e) {
                let t = 1 === u(E) ? e.screenX : e.screenY,
                    n = 0 === E || 2 === E,
                    r = (t - I.current) * (n ? -1 : 1);
                return g.current + r;
            }
            function t(e) {
                return h(e, null != i ? i : 0, null != r ? r : e);
            }
            let o = (0, s.throttle)(a, _),
                l = (r) => {
                    if (null == n.current) return null;
                    let i = e(r),
                        a = t(i),
                        s = 1 === u(E) ? 'width' : 'height';
                    (n.current.style[s] = ''.concat(a, 'px')), !T.current && ((T.current = !0), null == c || c(a)), o(a, i);
                },
                S = (n) => {
                    m(!1);
                    let r = e(n),
                        i = t(r);
                    a(i, r), null == d || d(i), (T.current = !1);
                },
                A = f ? 'pointerup' : 'mouseup',
                v = f ? 'pointermove' : 'mousemove',
                N = n.current.ownerDocument;
            return (
                N.addEventListener(A, S),
                N.addEventListener(v, l),
                () => {
                    N.removeEventListener(A, S), N.removeEventListener(v, l), o.cancel();
                }
            );
        }, [p, a, i, r, E, n, _, d, f, h, c]),
        o.useCallback(
            (e) => {
                let t = 1 === u(E);
                null != n.current && (g.current = t ? n.current.offsetWidth : n.current.offsetHeight), (I.current = t ? e.screenX : e.screenY), m(!0);
            },
            [E, n]
        )
    );
};
t.Z = c;

r.d(n, {
    y: function () {
        return i;
    }
});
var i,
    a,
    s = r(47120);
var o = r(192379),
    l = r(392711);
let u = 300;
function c(e) {
    return 2 === e || 3 === e ? 1 : 0;
}
!(function (e) {
    (e[(e.VERTICAL_TOP = 0)] = 'VERTICAL_TOP'), (e[(e.VERTICAL_BOTTOM = 1)] = 'VERTICAL_BOTTOM'), (e[(e.HORIZONTAL_LEFT = 2)] = 'HORIZONTAL_LEFT'), (e[(e.HORIZONTAL_RIGHT = 3)] = 'HORIZONTAL_RIGHT');
})(i || (i = {})),
    !(function (e) {
        (e[(e.VERTICAL = 0)] = 'VERTICAL'), (e[(e.HORIZONTAL = 1)] = 'HORIZONTAL');
    })(a || (a = {}));
let d = (e) => {
    let { initialElementDimension: n, resizableDomNodeRef: r, maxDimension: i, minDimension: a, onElementResize: s, onElementResizeStart: d, onElementResizeEnd: f, throttleDuration: _ = u, orientation: h, usePointerEvents: p = !1, getClampedValue: m = l.clamp } = e,
        [g, E] = o.useState(!1),
        v = o.useRef(0),
        I = o.useRef(!1),
        T = o.useRef(null == n ? 0 : n);
    return (
        o.useLayoutEffect(() => {
            if (!g || null == r.current) return;
            function e(e) {
                let n = 1 === c(h) ? e.screenX : e.screenY,
                    r = 0 === h || 2 === h,
                    i = (n - v.current) * (r ? -1 : 1);
                return T.current + i;
            }
            function n(e) {
                return m(e, null != a ? a : 0, null != i ? i : e);
            }
            let o = (0, l.throttle)(s, _),
                u = (i) => {
                    if (null == r.current) return null;
                    let a = e(i),
                        s = n(a),
                        l = 1 === c(h) ? 'width' : 'height';
                    (r.current.style[l] = ''.concat(s, 'px')), !I.current && ((I.current = !0), null == d || d(s)), o(s, a);
                },
                b = (r) => {
                    E(!1);
                    let i = e(r),
                        a = n(i);
                    s(a, i), null == f || f(a), (I.current = !1);
                },
                y = p ? 'pointerup' : 'mouseup',
                S = p ? 'pointermove' : 'mousemove',
                A = r.current.ownerDocument;
            return (
                A.addEventListener(y, b),
                A.addEventListener(S, u),
                () => {
                    A.removeEventListener(y, b), A.removeEventListener(S, u), o.cancel();
                }
            );
        }, [g, s, a, i, h, r, _, f, p, m, d]),
        o.useCallback(
            (e) => {
                let n = 1 === c(h);
                null != r.current && (T.current = n ? r.current.offsetWidth : r.current.offsetHeight), (v.current = n ? e.screenX : e.screenY), E(!0);
            },
            [h, r]
        )
    );
};
n.Z = d;

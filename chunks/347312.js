n.d(t, {
    Z: function () {
        return y;
    }
}),
    n(642549),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(692547),
    l = n(481060),
    u = n(393238),
    c = n(206678),
    d = n(302221),
    f = n(328187),
    _ = n(607889),
    p = n(94432),
    h = n(724069);
let m = p.e3 / 1000,
    g = 6,
    E = 2,
    v = [0, 0, 0, 0, 0];
function I(e) {
    let { showAll: t, currentTime: n, duration: r, numSegments: i } = e;
    return t ? i : Math.max(0, Math.round((n / r) * i));
}
function b(e) {
    var t, n, r, i, a;
    let { context: s, devicePixelRatio: o, canvasHeight: l, segmentValue: u, segmentIndex: c, constrainMin: d } = e,
        f = d ? (24 - E) * u + E : 24 * u;
    if (0 !== f) (t = s), (n = 6 * c * o), (r = (l / 2 - f / 2) * o), (i = f * o), (a = 1 * o), t.moveTo(n, r + a), t.lineTo(n, r + i - a), t.arc(n + a, r + i - a, a, Math.PI, 0, !0), t.lineTo(n + 2 * a, r + a), t.arc(n + a, r + a, a, 0, Math.PI, !0), t.closePath();
}
function T(e, t, n) {
    let [r, a] = i.useState(e),
        [s, o] = i.useState(e);
    return (
        i.useLayoutEffect(() => {
            a(s), o(e);
        }, [e, t, n]),
        [r, s]
    );
}
function S(e, t, n, r) {
    if (null == r) return [t, !1];
    let i = Math.min((n - r) / 200, 1);
    return 1 === i ? [t, !1] : [(0, d.BM)(e, t, i), !0];
}
function y(e) {
    let { className: t, waveform: n, currentTime: a, duration: d, played: E, playing: y, onDrag: A, onDragStart: N, onDragEnd: C } = e,
        { ref: R, width: O } = (0, u.Z)(),
        D = i.useMemo(() => {
            var e;
            let t;
            return Math.floor(((t = (e = d) <= m ? 40 : e >= 45 ? 294 : ((Math.min(e, 45) - m) / (45 - m)) * 254 + 40) + 4) / g) * g - 4;
        }, [d]),
        L = i.useRef(),
        x = (function (e, t) {
            let n = i.useMemo(
                    () =>
                        (function (e) {
                            let t;
                            if (null == e) return;
                            try {
                                t = window.atob(e);
                            } catch (e) {
                                return;
                            }
                            let n = [];
                            for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e) / p.Xi;
                            return n;
                        })(e),
                    [e]
                ),
                r = i.useMemo(
                    () =>
                        (function (e) {
                            if (null != e) return Math.floor((e + 4) / 6);
                        })(t),
                    [t]
                );
            return i.useMemo(() => {
                var e;
                return null !==
                    (e = (function (e, t) {
                        if (null != e && null != t) {
                            if (e.length < t) {
                                let n = t - e.length;
                                return e.concat(Array(n).fill(0));
                            }
                            return (0, f.Z)(e, t);
                        }
                    })(null != n ? n : [], r)) && void 0 !== e
                    ? e
                    : v;
            }, [n, r]);
        })(n, O),
        w = i.useRef(E),
        M = i.useRef(y),
        P = i.useRef(null),
        k = window.devicePixelRatio,
        {
            lastBackgroundFillColor: U,
            backgroundFillColor: B,
            lastActiveFillColor: G,
            activeFillColor: Z,
            lastInactiveFillColor: F,
            inactiveFillColor: V
        } = (function (e, t) {
            let n = (0, l.useToken)(o.Z.colors.INTERACTIVE_MUTED).hex(),
                r = (0, l.useToken)(o.Z.colors.INTERACTIVE_NORMAL).hex(),
                i = (0, l.useToken)(o.Z.colors.INTERACTIVE_ACTIVE).hex(),
                a = (0, l.useToken)(o.Z.unsafe_rawColors.BRAND_430).hex(),
                s = (0, l.useToken)(o.Z.unsafe_rawColors.WHITE_500).hex(),
                u = t ? a : n,
                [c, d] = T(u, t, e),
                [f, _] = T(t ? s : e ? i : r, t, e),
                [p, h] = T(e ? u : r, t, e);
            return {
                lastBackgroundFillColor: c,
                backgroundFillColor: d,
                lastActiveFillColor: f,
                activeFillColor: _,
                lastInactiveFillColor: p,
                inactiveFillColor: h
            };
        })(E, y);
    i.useEffect(() => {
        let e = I({
            showAll: !E,
            currentTime: a,
            duration: d,
            numSegments: x.length
        });
        L.current = x.map((t, n) => new _.Z(n < e ? t : 0));
    }, [x]),
        i.useEffect(() => {
            let e = L.current;
            if (null == e) return;
            let t = I({
                showAll: !E,
                currentTime: a,
                duration: d,
                numSegments: x.length
            });
            for (let n = 0; n < e.length; n++) {
                let r = e[n];
                if (n < t) {
                    r.animateTo(x[n]);
                    continue;
                }
                r.reset();
            }
        }, [x, a, d, E]),
        i.useEffect(() => {
            let e = null;
            return (
                (e = requestAnimationFrame(function t(n) {
                    let r = R.current,
                        i = null == r ? void 0 : r.getContext('2d'),
                        a = L.current;
                    if (null == r || null == i || null == a) return;
                    let s = !1;
                    (w.current !== E || M.current !== y) && ((w.current = E), (M.current = y), (P.current = n)), null != P.current && n > P.current + 200 && (P.current = null);
                    let o = r.height / k;
                    i.clearRect(0, 0, r.width, r.height), i.beginPath();
                    let [l, u] = S(U, B, n, P.current);
                    (s = s || u), (i.fillStyle = l);
                    for (let e = 0; e < x.length; e++)
                        b({
                            context: i,
                            devicePixelRatio: k,
                            canvasHeight: o,
                            segmentValue: x[e],
                            segmentIndex: e,
                            constrainMin: !0
                        });
                    i.fill();
                    let [c, d] = S(F, V, n, P.current);
                    s = s || d;
                    let [f, _] = S(G, Z, n, P.current);
                    s = s || _;
                    for (let e = 0; e < a.length; e++) {
                        let t = a[e],
                            n = Math.max(t.getCurrentValue(), x[e] - 0.1);
                        i.beginPath(),
                            (i.fillStyle = t.isReset ? c : f),
                            b({
                                context: i,
                                devicePixelRatio: k,
                                canvasHeight: o,
                                segmentValue: n,
                                segmentIndex: e,
                                constrainMin: !t.isReset
                            }),
                            (s = s || t.isAnimating()),
                            i.fill();
                    }
                    s && (e = requestAnimationFrame(t));
                })),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [R, k, x, O, a, d, E, y, U, B, G, Z, F, V]);
    let [, j] = (0, c.Z)({
        ref: R,
        onDrag: A,
        onDragStart: N,
        onDragEnd: C
    });
    return (0, r.jsx)('canvas', {
        onMouseDown: j,
        className: s()(h.canvas, t),
        style: { width: D },
        ref: R,
        height: 32 * window.devicePixelRatio,
        width: (null != O ? O : 0) * window.devicePixelRatio
    });
}

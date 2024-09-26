n.d(t, {
    Z: function () {
        return Z;
    }
});
var r = n(642549);
var i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(692547),
    c = n(481060),
    d = n(393238),
    _ = n(206678),
    E = n(302221),
    f = n(328187),
    h = n(607889),
    p = n(94432),
    m = n(724069);
let I = 40,
    T = p.e3 / 1000,
    g = 294,
    S = 45,
    A = 1,
    v = 4,
    N = 6,
    O = 24,
    R = 2,
    C = 4,
    y = [0, 0, 0, 0, 0],
    L = 200;
function b(e) {
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
}
function D(e, t) {
    if (null != e && null != t) {
        if (e.length < t) {
            let n = t - e.length;
            return e.concat(Array(n).fill(0));
        }
        return (0, f.Z)(e, t);
    }
}
function M(e) {
    let t;
    return Math.floor(((t = e <= T ? I : e >= S ? g : ((Math.min(e, S) - T) / (S - T)) * (g - I) + I) + v) / N) * N - v;
}
function P(e) {
    if (null == e) return;
    let t = 2 * A + v;
    return Math.floor((e + v) / t);
}
function U(e, t, n, r, i) {
    e.moveTo(t, n + i), e.lineTo(t, n + r - i), e.arc(t + i, n + r - i, i, Math.PI, 0, !0), e.lineTo(t + 2 * i, n + i), e.arc(t + i, n + i, i, 0, Math.PI, !0), e.closePath();
}
function w(e) {
    let { showAll: t, currentTime: n, duration: r, numSegments: i } = e;
    return t ? i : Math.max(0, Math.round((n / r) * i));
}
function x(e) {
    let { context: t, devicePixelRatio: n, canvasHeight: r, segmentValue: i, segmentIndex: a, constrainMin: o } = e,
        s = o ? (O - R) * i + R : O * i;
    if (0 !== s) U(t, a * (2 * A + v) * n, (r / 2 - s / 2) * n, s * n, A * n);
}
function G(e, t) {
    let n = o.useMemo(() => b(e), [e]),
        r = o.useMemo(() => P(t), [t]);
    return o.useMemo(() => {
        var e;
        return null !== (e = D(null != n ? n : [], r)) && void 0 !== e ? e : y;
    }, [n, r]);
}
function k(e, t, n) {
    let [r, i] = o.useState(e),
        [a, s] = o.useState(e);
    return (
        o.useLayoutEffect(() => {
            i(a), s(e);
        }, [e, t, n]),
        [r, a]
    );
}
function B(e, t) {
    let n = (0, c.useToken)(u.Z.colors.INTERACTIVE_MUTED).hex(),
        r = (0, c.useToken)(u.Z.colors.INTERACTIVE_NORMAL).hex(),
        i = (0, c.useToken)(u.Z.colors.INTERACTIVE_ACTIVE).hex(),
        a = (0, c.useToken)(u.Z.unsafe_rawColors.BRAND_430).hex(),
        o = (0, c.useToken)(u.Z.unsafe_rawColors.WHITE_500).hex(),
        s = t ? a : n,
        [l, d] = k(s, t, e),
        [_, E] = k(t ? o : e ? i : r, t, e),
        [f, h] = k(e ? s : r, t, e);
    return {
        lastBackgroundFillColor: l,
        backgroundFillColor: d,
        lastActiveFillColor: _,
        activeFillColor: E,
        lastInactiveFillColor: f,
        inactiveFillColor: h
    };
}
function F(e, t, n, r) {
    if (null == r) return [t, !1];
    let i = Math.min((n - r) / L, 1);
    return 1 === i ? [t, !1] : [(0, E.BM)(e, t, i), !0];
}
function Z(e) {
    let { className: t, waveform: n, currentTime: r, duration: i, played: s, playing: u, onDrag: c, onDragStart: E, onDragEnd: f } = e,
        { ref: p, width: I } = (0, d.Z)(),
        T = o.useMemo(() => M(i), [i]),
        g = o.useRef(),
        S = G(n, I),
        A = o.useRef(s),
        v = o.useRef(u),
        N = o.useRef(null),
        R = window.devicePixelRatio,
        { lastBackgroundFillColor: y, backgroundFillColor: b, lastActiveFillColor: D, activeFillColor: P, lastInactiveFillColor: U, inactiveFillColor: k } = B(s, u);
    o.useEffect(() => {
        let e = w({
            showAll: !s,
            currentTime: r,
            duration: i,
            numSegments: S.length
        });
        g.current = S.map((t, n) => new h.Z(n < e ? t : 0));
    }, [S]),
        o.useEffect(() => {
            let e = g.current;
            if (null == e) return;
            let t = w({
                showAll: !s,
                currentTime: r,
                duration: i,
                numSegments: S.length
            });
            for (let n = 0; n < e.length; n++) {
                let r = e[n];
                if (n < t) {
                    r.animateTo(S[n]);
                    continue;
                }
                r.reset();
            }
        }, [S, r, i, s]),
        o.useEffect(() => {
            let e = null;
            function t(n) {
                let r = p.current,
                    i = null == r ? void 0 : r.getContext('2d'),
                    a = g.current;
                if (null == r || null == i || null == a) return;
                let o = !1;
                (A.current !== s || v.current !== u) && ((A.current = s), (v.current = u), (N.current = n)), null != N.current && n > N.current + L && (N.current = null);
                let l = r.height / R;
                i.clearRect(0, 0, r.width, r.height), i.beginPath();
                let [c, d] = F(y, b, n, N.current);
                (o = o || d), (i.fillStyle = c);
                for (let e = 0; e < S.length; e++)
                    x({
                        context: i,
                        devicePixelRatio: R,
                        canvasHeight: l,
                        segmentValue: S[e],
                        segmentIndex: e,
                        constrainMin: !0
                    });
                i.fill();
                let [_, E] = F(U, k, n, N.current);
                o = o || E;
                let [f, h] = F(D, P, n, N.current);
                o = o || h;
                for (let e = 0; e < a.length; e++) {
                    let t = a[e],
                        n = Math.max(t.getCurrentValue(), S[e] - 0.1);
                    i.beginPath(),
                        (i.fillStyle = t.isReset ? _ : f),
                        x({
                            context: i,
                            devicePixelRatio: R,
                            canvasHeight: l,
                            segmentValue: n,
                            segmentIndex: e,
                            constrainMin: !t.isReset
                        }),
                        (o = o || t.isAnimating()),
                        i.fill();
                }
                o && (e = requestAnimationFrame(t));
            }
            return (
                (e = requestAnimationFrame(t)),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [p, R, S, I, r, i, s, u, y, b, D, P, U, k]);
    let [, Z] = (0, _.Z)({
        ref: p,
        onDrag: c,
        onDragStart: E,
        onDragEnd: f
    });
    return (0, a.jsx)('canvas', {
        onMouseDown: Z,
        className: l()(m.canvas, t),
        style: { width: T },
        ref: p,
        height: (O + 2 * C) * window.devicePixelRatio,
        width: (null != I ? I : 0) * window.devicePixelRatio
    });
}

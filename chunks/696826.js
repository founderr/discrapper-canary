n.d(t, {
    Dk: function () {
        return I;
    },
    P5: function () {
        return T;
    },
    QF: function () {
        return E;
    },
    Sk: function () {
        return f.Skl;
    },
    W5: function () {
        return A;
    },
    lm: function () {
        return g;
    },
    qb: function () {
        return N;
    },
    rs: function () {
        return y;
    },
    vP: function () {
        return S;
    },
    vj: function () {
        return m;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(100621),
    l = n(780384),
    u = n(481060),
    c = n(44315),
    d = n(686546),
    f = n(981631),
    _ = n(182294),
    p = n(26255);
let h = {
    tension: 600,
    friction: 70
};
function m(e, t) {
    let n = (0, c.Sl)(
            (function (e) {
                switch (e) {
                    case f.Skl.ONLINE:
                        return f.Ilk.GREEN_360;
                    case f.Skl.IDLE:
                        return f.Ilk.YELLOW_300;
                    case f.Skl.DND:
                        return f.Ilk.RED_400;
                    case f.Skl.STREAMING:
                        return f.Ilk.TWITCH;
                    case f.Skl.INVISIBLE:
                    case f.Skl.UNKNOWN:
                    case f.Skl.OFFLINE:
                    default:
                        return f.Ilk.PRIMARY_400;
                }
            })(e)
        ).hex,
        r = (0, c.K3)(null != t ? t : n);
    return null != r ? r : void 0;
}
function g(e, t) {
    return t === _.VZ.WHITE && e === f.Skl.IDLE ? _.d_.HIGH : _.d_.LOW;
}
function E(e) {
    return (0, l.wj)(e) ? _.VZ.BLACK : _.VZ.WHITE;
}
function v(e, t, n, r) {
    return 'scale('
        .concat(t, ') translate(')
        .concat(0.5625 * e + r, ' ')
        .concat(0.75 * e + n, ')');
}
function b(e, t, n) {
    return ''.concat(0.5625 * e + n, 'px ').concat(0.75 * e + t, 'px');
}
function I(e) {
    let { size: t, status: n, isMobile: r, isTyping: i, topOffset: a = 0, leftOffset: s = 0 } = e,
        o = (a / 8) * t,
        l = (s / 8) * t;
    if (i)
        return {
            bgRadius: 0.5 * t,
            bgY: 0.25 * t + o,
            bgX: 0,
            bgHeight: t,
            bgWidth: t * _.D6,
            cutoutX: 0.5 * t + l,
            cutoutY: 0.75 * t + o,
            cutoutWidth: 0,
            cutoutHeight: 0,
            cutoutRadius: 0,
            polygonScale: v(t, 0, o, l),
            polygonOrigin: b(t, o, l),
            dotY: 0.75 * t + o,
            dotX: 0.5 * t + l,
            dotRadius: 0
        };
    switch (n) {
        case f.Skl.ONLINE:
            if (r)
                return {
                    bgRadius: t * _.EW * _.e7,
                    bgY: 0,
                    bgX: l,
                    bgHeight: t * _.EW,
                    bgWidth: t,
                    cutoutX: 0.125 * t + l,
                    cutoutY: 0.25 * t,
                    cutoutWidth: 0.75 * t,
                    cutoutHeight: 0.75 * t,
                    cutoutRadius: 0,
                    polygonScale: v(t, 0, o, l),
                    polygonOrigin: b(t, o, l),
                    dotY: 1.25 * t,
                    dotX: 0.5 * t + l,
                    dotRadius: 0.125 * t
                };
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + o,
                bgX: l,
                bgHeight: t,
                bgWidth: t,
                cutoutX: 0.5 * t + l,
                cutoutY: 0.75 * t + o,
                cutoutWidth: 0,
                cutoutHeight: 0,
                cutoutRadius: 0,
                polygonScale: v(t, 0, o, l),
                polygonOrigin: b(t, o, l),
                dotY: 0.75 * t + o,
                dotX: 0.5 * t + l,
                dotRadius: 0
            };
        case f.Skl.IDLE:
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + o,
                bgX: l,
                bgHeight: t,
                bgWidth: t,
                cutoutX: -(0.125 * t) + l,
                cutoutY: 0.125 * t + o,
                cutoutWidth: 0.75 * t,
                cutoutHeight: 0.75 * t,
                cutoutRadius: 0.375 * t,
                polygonScale: v(t, 0, o, l),
                polygonOrigin: b(t, o, l),
                dotY: 0.75 * t + o,
                dotX: 0.5 * t + l,
                dotRadius: 0
            };
        case f.Skl.DND:
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + o,
                bgX: l,
                bgHeight: t,
                bgWidth: t,
                cutoutX: 0.125 * t + l,
                cutoutY: 0.625 * t + o,
                cutoutWidth: 0.75 * t,
                cutoutHeight: 0.25 * t,
                cutoutRadius: 0.125 * t,
                polygonScale: v(t, 0, o, l),
                polygonOrigin: b(t, o, l),
                dotY: 0.75 * t + o,
                dotX: 0.5 * t + l,
                dotRadius: 0
            };
        case f.Skl.STREAMING:
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + o,
                bgX: l,
                bgHeight: t,
                bgWidth: t,
                cutoutX: 0.5 * t + l,
                cutoutY: 0.75 * t + o,
                cutoutWidth: 0,
                cutoutHeight: 0,
                cutoutRadius: 0.25 * t,
                polygonScale: v(t, 1, o, l),
                polygonOrigin: b(t, o, l),
                dotY: 0.75 * t + o,
                dotX: 0.5 * t + l,
                dotRadius: 0
            };
        case f.Skl.INVISIBLE:
        case f.Skl.UNKNOWN:
        case f.Skl.OFFLINE:
        default:
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + o,
                bgX: l,
                bgHeight: t,
                bgWidth: t,
                cutoutX: 0.25 * t + l,
                cutoutY: 0.5 * t + o,
                cutoutWidth: 0.5 * t,
                cutoutHeight: 0.5 * t,
                cutoutRadius: 0.25 * t,
                polygonScale: v(t, 0, o, l),
                polygonOrigin: b(t, o, l),
                dotY: 0.75 * t + o,
                dotX: 0.5 * t + l,
                dotRadius: 0
            };
    }
}
function S(e, t, n) {
    var i;
    let { bgRadius: a, bgY: s, bgX: l, bgHeight: u, bgWidth: c, cutoutX: d, cutoutY: f, cutoutWidth: _, cutoutHeight: p, cutoutRadius: h, polygonScale: m, polygonOrigin: g, dotY: E, dotX: v, dotRadius: b } = e;
    return (0, r.jsxs)('mask', {
        id: n,
        children: [
            (0, r.jsx)(o.animated.rect, {
                x: l,
                y: s,
                width: c,
                height: u,
                rx: a,
                ry: a,
                fill: 'white'
            }),
            (0, r.jsx)(o.animated.rect, {
                x: d,
                y: f,
                width: _,
                height: p,
                rx: h,
                ry: h,
                fill: 'black'
            }),
            (0, r.jsx)(o.animated.polygon, {
                points:
                    ((i = t),
                    '-'
                        .concat(0.216506 * i, ',-')
                        .concat(0.25 * i, ' ')
                        .concat(0.216506 * i, ',0 -')
                        .concat(0.216506 * i, ',')
                        .concat(0.25 * i)),
                fill: 'black',
                transform: m,
                style: { transformOrigin: g }
            }),
            (0, r.jsx)(o.animated.circle, {
                fill: 'black',
                cx: v,
                cy: E,
                r: b
            })
        ]
    });
}
function T(e) {
    let { status: t, isMobile: n = !1, size: a = 8, color: l, className: c, style: d } = e,
        g = i.useId(),
        E = t === f.Skl.ONLINE && n,
        v = i.useMemo(
            () =>
                I({
                    size: a,
                    status: t,
                    isMobile: E
                }),
            [a, t, E]
        ),
        b = (0, u.useSpring)(
            {
                config: h,
                to: v
            },
            'animate-always'
        ),
        T = m(t, l),
        [{ fill: y }] = (0, u.useSpring)(
            {
                config: h,
                fill: T
            },
            'animate-always',
            [T]
        ),
        A = Math.ceil(a * _.EW);
    return (0, r.jsxs)('svg', {
        width: a,
        height: A,
        viewBox: '0 0 '.concat(a, ' ').concat(A),
        className: s()(p.mask, c),
        style: d,
        children: [
            S(b, a, g),
            (0, r.jsx)(o.animated.rect, {
                x: 0,
                y: 0,
                width: a,
                height: A,
                fill: y,
                mask: 'url(#'.concat(g, ')')
            })
        ]
    });
}
function y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (n) return d.ZP.Masks.STATUS_TYPING;
    switch (e) {
        case f.Skl.IDLE:
            return d.ZP.Masks.STATUS_IDLE;
        case f.Skl.DND:
            return d.ZP.Masks.STATUS_DND;
        case f.Skl.STREAMING:
            return d.ZP.Masks.STATUS_STREAMING;
        case f.Skl.INVISIBLE:
        case f.Skl.UNKNOWN:
        case f.Skl.OFFLINE:
            return d.ZP.Masks.STATUS_OFFLINE;
        case f.Skl.ONLINE:
        default:
            if (t) return d.ZP.Masks.STATUS_ONLINE_MOBILE;
            return d.ZP.Masks.STATUS_ONLINE;
    }
}
function A(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return t === f.Skl.ONLINE && n && !r
        ? {
              width: e,
              height: e * _.EW
          }
        : {
              width: r ? e * _.D6 : e,
              height: e
          };
}
function N(e) {
    let { status: t, isMobile: n = !1, size: i = 8, className: a, style: o, color: l } = e,
        u = t === f.Skl.ONLINE && n,
        c = m(t, l);
    return (0, r.jsx)(d.ZP, {
        mask: y(t, u),
        className: s()(p.mask, a),
        style: o,
        ...A(i, t, u),
        children: (0, r.jsx)('div', {
            style: { backgroundColor: c },
            className: p.status
        })
    });
}

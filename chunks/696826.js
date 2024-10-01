n.d(t, {
    Dk: function () {
        return N;
    },
    P5: function () {
        return C;
    },
    QF: function () {
        return S;
    },
    Sk: function () {
        return E.Skl;
    },
    W5: function () {
        return L;
    },
    lm: function () {
        return g;
    },
    qb: function () {
        return b;
    },
    rs: function () {
        return y;
    },
    vP: function () {
        return R;
    },
    vj: function () {
        return T;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(212433),
    u = n(780384),
    c = n(481060),
    d = n(44315),
    _ = n(686546),
    E = n(981631),
    f = n(182294),
    h = n(454857);
let p = 8,
    m = {
        tension: 600,
        friction: 70
    };
function I(e) {
    switch (e) {
        case E.Skl.ONLINE:
            return E.Ilk.GREEN_360;
        case E.Skl.IDLE:
            return E.Ilk.YELLOW_300;
        case E.Skl.DND:
            return E.Ilk.RED_400;
        case E.Skl.STREAMING:
            return E.Ilk.TWITCH;
        case E.Skl.INVISIBLE:
        case E.Skl.UNKNOWN:
        case E.Skl.OFFLINE:
        default:
            return E.Ilk.PRIMARY_400;
    }
}
function T(e, t) {
    let n = (0, d.Sl)(I(e)).hex,
        r = null != t ? t : n,
        i = (0, d.K3)(r);
    return null != i ? i : void 0;
}
function g(e, t) {
    return t === f.VZ.WHITE && e === E.Skl.IDLE ? f.d_.HIGH : f.d_.LOW;
}
function S(e) {
    return (0, u.wj)(e) ? f.VZ.BLACK : f.VZ.WHITE;
}
function A(e, t, n, r) {
    return 'scale('
        .concat(t, ') translate(')
        .concat(0.5625 * e + r, ' ')
        .concat(0.75 * e + n, ')');
}
function v(e, t, n) {
    return ''.concat(0.5625 * e + n, 'px ').concat(0.75 * e + t, 'px');
}
function N(e) {
    let { size: t, status: n, isMobile: r, isTyping: i, topOffset: a = 0, leftOffset: o = 0 } = e,
        s = (a / p) * t,
        l = (o / p) * t;
    if (i)
        return {
            bgRadius: 0.5 * t,
            bgY: 0.25 * t + s,
            bgX: 0,
            bgHeight: t,
            bgWidth: t * f.D6,
            cutoutX: 0.5 * t + l,
            cutoutY: 0.75 * t + s,
            cutoutWidth: 0,
            cutoutHeight: 0,
            cutoutRadius: 0,
            polygonScale: A(t, 0, s, l),
            polygonOrigin: v(t, s, l),
            dotY: 0.75 * t + s,
            dotX: 0.5 * t + l,
            dotRadius: 0
        };
    switch (n) {
        case E.Skl.ONLINE:
            if (r)
                return {
                    bgRadius: t * f.EW * f.e7,
                    bgY: 0,
                    bgX: l,
                    bgHeight: t * f.EW,
                    bgWidth: t,
                    cutoutX: 0.125 * t + l,
                    cutoutY: 0.25 * t,
                    cutoutWidth: 0.75 * t,
                    cutoutHeight: 0.75 * t,
                    cutoutRadius: 0,
                    polygonScale: A(t, 0, s, l),
                    polygonOrigin: v(t, s, l),
                    dotY: 1.25 * t,
                    dotX: 0.5 * t + l,
                    dotRadius: 0.125 * t
                };
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + s,
                bgX: l,
                bgHeight: t,
                bgWidth: t,
                cutoutX: 0.5 * t + l,
                cutoutY: 0.75 * t + s,
                cutoutWidth: 0,
                cutoutHeight: 0,
                cutoutRadius: 0,
                polygonScale: A(t, 0, s, l),
                polygonOrigin: v(t, s, l),
                dotY: 0.75 * t + s,
                dotX: 0.5 * t + l,
                dotRadius: 0
            };
        case E.Skl.IDLE:
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + s,
                bgX: l,
                bgHeight: t,
                bgWidth: t,
                cutoutX: -(0.125 * t) + l,
                cutoutY: 0.125 * t + s,
                cutoutWidth: 0.75 * t,
                cutoutHeight: 0.75 * t,
                cutoutRadius: 0.375 * t,
                polygonScale: A(t, 0, s, l),
                polygonOrigin: v(t, s, l),
                dotY: 0.75 * t + s,
                dotX: 0.5 * t + l,
                dotRadius: 0
            };
        case E.Skl.DND:
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + s,
                bgX: l,
                bgHeight: t,
                bgWidth: t,
                cutoutX: 0.125 * t + l,
                cutoutY: 0.625 * t + s,
                cutoutWidth: 0.75 * t,
                cutoutHeight: 0.25 * t,
                cutoutRadius: 0.125 * t,
                polygonScale: A(t, 0, s, l),
                polygonOrigin: v(t, s, l),
                dotY: 0.75 * t + s,
                dotX: 0.5 * t + l,
                dotRadius: 0
            };
        case E.Skl.STREAMING:
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + s,
                bgX: l,
                bgHeight: t,
                bgWidth: t,
                cutoutX: 0.5 * t + l,
                cutoutY: 0.75 * t + s,
                cutoutWidth: 0,
                cutoutHeight: 0,
                cutoutRadius: 0.25 * t,
                polygonScale: A(t, 1, s, l),
                polygonOrigin: v(t, s, l),
                dotY: 0.75 * t + s,
                dotX: 0.5 * t + l,
                dotRadius: 0
            };
        case E.Skl.INVISIBLE:
        case E.Skl.UNKNOWN:
        case E.Skl.OFFLINE:
        default:
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + s,
                bgX: l,
                bgHeight: t,
                bgWidth: t,
                cutoutX: 0.25 * t + l,
                cutoutY: 0.5 * t + s,
                cutoutWidth: 0.5 * t,
                cutoutHeight: 0.5 * t,
                cutoutRadius: 0.25 * t,
                polygonScale: A(t, 0, s, l),
                polygonOrigin: v(t, s, l),
                dotY: 0.75 * t + s,
                dotX: 0.5 * t + l,
                dotRadius: 0
            };
    }
}
function O(e) {
    return '-'
        .concat(0.216506 * e, ',-')
        .concat(0.25 * e, ' ')
        .concat(0.216506 * e, ',0 -')
        .concat(0.216506 * e, ',')
        .concat(0.25 * e);
}
function R(e, t, n) {
    let { bgRadius: r, bgY: a, bgX: o, bgHeight: s, bgWidth: u, cutoutX: c, cutoutY: d, cutoutWidth: _, cutoutHeight: E, cutoutRadius: f, polygonScale: h, polygonOrigin: p, dotY: m, dotX: I, dotRadius: T } = e;
    return (0, i.jsxs)('mask', {
        id: n,
        children: [
            (0, i.jsx)(l.animated.rect, {
                x: o,
                y: a,
                width: u,
                height: s,
                rx: r,
                ry: r,
                fill: 'white'
            }),
            (0, i.jsx)(l.animated.rect, {
                x: c,
                y: d,
                width: _,
                height: E,
                rx: f,
                ry: f,
                fill: 'black'
            }),
            (0, i.jsx)(l.animated.polygon, {
                points: O(t),
                fill: 'black',
                transform: h,
                style: { transformOrigin: p }
            }),
            (0, i.jsx)(l.animated.circle, {
                fill: 'black',
                cx: I,
                cy: m,
                r: T
            })
        ]
    });
}
function C(e) {
    let { status: t, isMobile: n = !1, size: r = p, color: o, className: u, style: d } = e,
        _ = a.useId(),
        I = t === E.Skl.ONLINE && n,
        g = a.useMemo(
            () =>
                N({
                    size: r,
                    status: t,
                    isMobile: I
                }),
            [r, t, I]
        ),
        S = (0, c.useSpring)(
            {
                config: m,
                to: g
            },
            'animate-always'
        ),
        A = T(t, o),
        [{ fill: v }] = (0, c.useSpring)(
            {
                config: m,
                fill: A
            },
            'animate-always',
            [A]
        ),
        O = r,
        C = Math.ceil(r * f.EW);
    return (0, i.jsxs)('svg', {
        width: O,
        height: C,
        viewBox: '0 0 '.concat(O, ' ').concat(C),
        className: s()(h.mask, u),
        style: d,
        children: [
            R(S, r, _),
            (0, i.jsx)(l.animated.rect, {
                x: 0,
                y: 0,
                width: O,
                height: C,
                fill: v,
                mask: 'url(#'.concat(_, ')')
            })
        ]
    });
}
function y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (n) return _.ZP.Masks.STATUS_TYPING;
    switch (e) {
        case E.Skl.IDLE:
            return _.ZP.Masks.STATUS_IDLE;
        case E.Skl.DND:
            return _.ZP.Masks.STATUS_DND;
        case E.Skl.STREAMING:
            return _.ZP.Masks.STATUS_STREAMING;
        case E.Skl.INVISIBLE:
        case E.Skl.UNKNOWN:
        case E.Skl.OFFLINE:
            return _.ZP.Masks.STATUS_OFFLINE;
        case E.Skl.ONLINE:
        default:
            if (t) return _.ZP.Masks.STATUS_ONLINE_MOBILE;
            return _.ZP.Masks.STATUS_ONLINE;
    }
}
function L(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return t === E.Skl.ONLINE && n && !r
        ? {
              width: e,
              height: e * f.EW
          }
        : {
              width: r ? e * f.D6 : e,
              height: e
          };
}
function b(e) {
    let { status: t, isMobile: n = !1, size: r = p, className: a, style: o, color: l } = e,
        u = t === E.Skl.ONLINE && n,
        c = T(t, l);
    return (0, i.jsx)(_.ZP, {
        mask: y(t, u),
        className: s()(h.mask, a),
        style: o,
        ...L(r, t, u),
        children: (0, i.jsx)('div', {
            style: { backgroundColor: c },
            className: h.status
        })
    });
}

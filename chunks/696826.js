n.d(t, {
    Dk: function () {
        return b;
    },
    P5: function () {
        return y;
    },
    QF: function () {
        return v;
    },
    Sk: function () {
        return _.Skl;
    },
    W5: function () {
        return N;
    },
    lm: function () {
        return E;
    },
    qb: function () {
        return C;
    },
    rs: function () {
        return A;
    },
    vP: function () {
        return S;
    },
    vj: function () {
        return g;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(752877),
    l = n(780384),
    u = n(481060),
    c = n(44315),
    d = n(686546),
    f = n(540059),
    _ = n(981631),
    p = n(182294),
    h = n(131004);
let m = {
    tension: 600,
    friction: 70
};
function g(e, t) {
    let n = (0, f.Q)('useStatusFillColor'),
        r = (0, c.Sl)(
            n
                ? (function (e) {
                      switch (e) {
                          case _.Skl.ONLINE:
                              return _.Ilk.GREEN_NEW_38;
                          case _.Skl.IDLE:
                              return _.Ilk.YELLOW_NEW_38;
                          case _.Skl.DND:
                              return _.Ilk.RED_NEW_46;
                          case _.Skl.STREAMING:
                              return _.Ilk.TWITCH;
                          case _.Skl.INVISIBLE:
                          case _.Skl.UNKNOWN:
                          case _.Skl.OFFLINE:
                          default:
                              return _.Ilk.NEUTRAL_34;
                      }
                  })(e)
                : (function (e) {
                      switch (e) {
                          case _.Skl.ONLINE:
                              return _.Ilk.GREEN_360;
                          case _.Skl.IDLE:
                              return _.Ilk.YELLOW_300;
                          case _.Skl.DND:
                              return _.Ilk.RED_400;
                          case _.Skl.STREAMING:
                              return _.Ilk.TWITCH;
                          case _.Skl.INVISIBLE:
                          case _.Skl.UNKNOWN:
                          case _.Skl.OFFLINE:
                          default:
                              return _.Ilk.PRIMARY_400;
                      }
                  })(e)
        ).hex,
        i = (0, c.K3)(null != t ? t : r);
    return null != i ? i : void 0;
}
function E(e, t) {
    return t === p.VZ.WHITE && e === _.Skl.IDLE ? p.d_.HIGH : p.d_.LOW;
}
function v(e) {
    return (0, l.wj)(e) ? p.VZ.BLACK : p.VZ.WHITE;
}
function I(e, t, n, r) {
    return 'scale('
        .concat(t, ') translate(')
        .concat(0.5625 * e + r, ' ')
        .concat(0.75 * e + n, ')');
}
function T(e, t, n) {
    return ''.concat(0.5625 * e + n, 'px ').concat(0.75 * e + t, 'px');
}
function b(e) {
    let { size: t, status: n, isMobile: r, isTyping: i, topOffset: a = 0, leftOffset: s = 0 } = e,
        o = (a / 8) * t,
        l = (s / 8) * t;
    if (i)
        return {
            bgRadius: 0.5 * t,
            bgY: 0.25 * t + o,
            bgX: 0,
            bgHeight: t,
            bgWidth: t * p.D6,
            cutoutX: 0.5 * t + l,
            cutoutY: 0.75 * t + o,
            cutoutWidth: 0,
            cutoutHeight: 0,
            cutoutRadius: 0,
            polygonScale: I(t, 0, o, l),
            polygonOrigin: T(t, o, l),
            dotY: 0.75 * t + o,
            dotX: 0.5 * t + l,
            dotRadius: 0
        };
    switch (n) {
        case _.Skl.ONLINE:
            if (r)
                return {
                    bgRadius: t * p.EW * p.e7,
                    bgY: 0,
                    bgX: l,
                    bgHeight: t * p.EW,
                    bgWidth: t,
                    cutoutX: 0.125 * t + l,
                    cutoutY: 0.25 * t,
                    cutoutWidth: 0.75 * t,
                    cutoutHeight: 0.75 * t,
                    cutoutRadius: 0,
                    polygonScale: I(t, 0, o, l),
                    polygonOrigin: T(t, o, l),
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
                polygonScale: I(t, 0, o, l),
                polygonOrigin: T(t, o, l),
                dotY: 0.75 * t + o,
                dotX: 0.5 * t + l,
                dotRadius: 0
            };
        case _.Skl.IDLE:
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
                polygonScale: I(t, 0, o, l),
                polygonOrigin: T(t, o, l),
                dotY: 0.75 * t + o,
                dotX: 0.5 * t + l,
                dotRadius: 0
            };
        case _.Skl.DND:
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
                polygonScale: I(t, 0, o, l),
                polygonOrigin: T(t, o, l),
                dotY: 0.75 * t + o,
                dotX: 0.5 * t + l,
                dotRadius: 0
            };
        case _.Skl.STREAMING:
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
                polygonScale: I(t, 1, o, l),
                polygonOrigin: T(t, o, l),
                dotY: 0.75 * t + o,
                dotX: 0.5 * t + l,
                dotRadius: 0
            };
        case _.Skl.INVISIBLE:
        case _.Skl.UNKNOWN:
        case _.Skl.OFFLINE:
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
                polygonScale: I(t, 0, o, l),
                polygonOrigin: T(t, o, l),
                dotY: 0.75 * t + o,
                dotX: 0.5 * t + l,
                dotRadius: 0
            };
    }
}
function S(e, t, n) {
    var i;
    let { bgRadius: a, bgY: s, bgX: l, bgHeight: u, bgWidth: c, cutoutX: d, cutoutY: f, cutoutWidth: _, cutoutHeight: p, cutoutRadius: h, polygonScale: m, polygonOrigin: g, dotY: E, dotX: v, dotRadius: I } = e;
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
                r: I
            })
        ]
    });
}
function y(e) {
    let { status: t, isMobile: n = !1, size: a = 8, color: l, className: c, style: d } = e,
        f = i.useId(),
        E = t === _.Skl.ONLINE && n,
        v = i.useMemo(
            () =>
                b({
                    size: a,
                    status: t,
                    isMobile: E
                }),
            [a, t, E]
        ),
        I = (0, u.useSpring)(
            {
                config: m,
                to: v
            },
            'animate-always'
        ),
        T = g(t, l),
        [{ fill: y }] = (0, u.useSpring)(
            {
                config: m,
                fill: T
            },
            'animate-always',
            [T]
        ),
        A = Math.ceil(a * p.EW);
    return (0, r.jsxs)('svg', {
        width: a,
        height: A,
        viewBox: '0 0 '.concat(a, ' ').concat(A),
        className: s()(h.mask, c),
        style: d,
        children: [
            S(I, a, f),
            (0, r.jsx)(o.animated.rect, {
                x: 0,
                y: 0,
                width: a,
                height: A,
                fill: y,
                mask: 'url(#'.concat(f, ')')
            })
        ]
    });
}
function A(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (n) return d.ZP.Masks.STATUS_TYPING;
    switch (e) {
        case _.Skl.IDLE:
            return d.ZP.Masks.STATUS_IDLE;
        case _.Skl.DND:
            return d.ZP.Masks.STATUS_DND;
        case _.Skl.STREAMING:
            return d.ZP.Masks.STATUS_STREAMING;
        case _.Skl.INVISIBLE:
        case _.Skl.UNKNOWN:
        case _.Skl.OFFLINE:
            return d.ZP.Masks.STATUS_OFFLINE;
        case _.Skl.ONLINE:
        default:
            if (t) return d.ZP.Masks.STATUS_ONLINE_MOBILE;
            return d.ZP.Masks.STATUS_ONLINE;
    }
}
function N(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return t === _.Skl.ONLINE && n && !r
        ? {
              width: e,
              height: e * p.EW
          }
        : {
              width: r ? e * p.D6 : e,
              height: e
          };
}
function C(e) {
    let { status: t, isMobile: n = !1, size: i = 8, className: a, style: o, color: l } = e,
        u = t === _.Skl.ONLINE && n,
        c = g(t, l);
    return (0, r.jsx)(d.ZP, {
        mask: A(t, u),
        className: s()(h.mask, a),
        style: o,
        ...N(i, t, u),
        children: (0, r.jsx)('div', {
            style: { backgroundColor: c },
            className: h.status
        })
    });
}

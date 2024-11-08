n.d(t, {
    Vq: function () {
        return b;
    },
    Xo: function () {
        return O;
    },
    qE: function () {
        return C;
    }
}),
    n(411104),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(100621),
    l = n(1561),
    u = n(438784),
    c = n(696826),
    d = n(981729),
    f = n(481060),
    _ = n(686546),
    h = n(51144),
    p = n(182294),
    m = n(981631),
    g = n(419061),
    E = n(388032),
    v = n(300419);
let I = {
    tension: 1200,
    friction: 70
};
function S(e) {
    let { size: t, isMobile: n, isTyping: i, ...a } = e,
        s = (0, p.UC)(t),
        o = s.status * (n && !i ? p.EW : 1),
        l = s.status * (i ? p.D6 : 1),
        u = i ? (s.status * p.D6 - s.status) / 2 : 0,
        c = s.size - s.status - u - s.offset,
        d = s.size - o - s.offset;
    return (0, r.jsx)('rect', {
        x: c,
        y: d,
        width: l,
        height: o,
        fill: 'transparent',
        'aria-hidden': !0,
        ...a
    });
}
function b(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = (0, c.W5)(e.status, t, n, r),
        a = (r ? e.size - (i.width / 2 + e.status / 2) : e.size - i.width) - e.offset;
    return {
        ...i,
        x: a,
        y: e.size - i.height - e.offset
    };
}
function T(e, t, n, i) {
    let a = b(n, i, t, !1),
        s = (0, c.lm)(i, e);
    if (!t) {
        let t = a.height / 2 + n.stroke,
            i = a.x + n.status / 2;
        return (0, r.jsx)('circle', {
            style: { opacity: s },
            fill: e,
            r: t,
            cx: i,
            cy: i
        });
    }
    let o = a.height + 2 * n.stroke,
        l = a.width + 2 * n.stroke,
        u = a.x - n.stroke,
        d = a.y - n.stroke;
    return (0, r.jsx)('rect', {
        fill: e,
        height: o,
        width: l,
        style: { opacity: s },
        x: u,
        y: d,
        rx: n.stroke
    });
}
function y(e) {
    let { status: t, isMobile: n, isTyping: r, size: i } = e,
        a = n && !r && t === m.Skl.ONLINE,
        s = (0, p.UC)(i);
    return {
        ...(function (e, t, n) {
            let { size: r, status: i, stroke: a, offset: s } = e,
                o = n ? i * p.D6 : i,
                l = t ? i * p.EW : i;
            return {
                avatarCutoutX: r - o + (o - i) / 2 - a - s,
                avatarCutoutY: r - l - a - s,
                avatarCutoutWidth: o + 2 * a,
                avatarCutoutHeight: l + 2 * a,
                avatarCutoutRadius: t ? (l + 2 * a) * p.ZC : (i + 2 * a) / 2
            };
        })(s, a, r),
        ...(0, c.Dk)({
            status: t,
            size: s.status,
            isMobile: a,
            isTyping: r,
            topOffset: 2,
            leftOffset: 6
        })
    };
}
function A(e) {
    let { children: t, size: n, onClick: i, onMouseDown: a, onKeyDown: o, onContextMenu: u, onMouseEnter: c, onMouseLeave: d, className: f, tabIndex: m, ariaLabel: I, ariaHidden: S, status: b, isMobile: T = !1, isTyping: y = !1, avatarDecoration: A, typingOffset: N, specs: C } = e,
        R = {
            width: (0, p.px)(n),
            height: (0, p.px)(n)
        },
        O =
            null == I || S
                ? void 0
                : (function (e, t) {
                      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                      return null != t
                          ? E.intl.formatToPlainString(E.t['/6mw19'], {
                                label: e,
                                status: (0, h.u5)(t, n)
                            })
                          : e;
                  })(I, b, T),
        D = C.size * g.hs,
        L = (function (e, t, n, r) {
            if (null == e) return null;
            if (r)
                switch (t) {
                    case p.EF.SIZE_16:
                        return _.QS.AVATAR_DECORATION_STATUS_TYPING_16;
                    case p.EF.SIZE_20:
                        return _.QS.AVATAR_DECORATION_STATUS_TYPING_20;
                    case p.EF.SIZE_24:
                        return _.QS.AVATAR_DECORATION_STATUS_TYPING_24;
                    case p.EF.SIZE_32:
                        return _.QS.AVATAR_DECORATION_STATUS_TYPING_32;
                    case p.EF.SIZE_40:
                        return _.QS.AVATAR_DECORATION_STATUS_TYPING_40;
                    case p.EF.SIZE_56:
                        return _.QS.AVATAR_DECORATION_STATUS_TYPING_56;
                    case p.EF.SIZE_80:
                        return _.QS.AVATAR_DECORATION_STATUS_TYPING_80;
                    case p.EF.SIZE_120:
                        return _.QS.AVATAR_DECORATION_STATUS_TYPING_120;
                }
            if (n)
                switch (t) {
                    case p.EF.SIZE_16:
                        return _.QS.AVATAR_DECORATION_STATUS_MOBILE_16;
                    case p.EF.SIZE_20:
                        return _.QS.AVATAR_DECORATION_STATUS_MOBILE_20;
                    case p.EF.SIZE_24:
                        return _.QS.AVATAR_DECORATION_STATUS_MOBILE_24;
                    case p.EF.SIZE_32:
                        return _.QS.AVATAR_DECORATION_STATUS_MOBILE_32;
                    case p.EF.SIZE_40:
                        return _.QS.AVATAR_DECORATION_STATUS_MOBILE_40;
                    case p.EF.SIZE_56:
                        return _.QS.AVATAR_DECORATION_STATUS_MOBILE_56;
                    case p.EF.SIZE_80:
                        return _.QS.AVATAR_DECORATION_STATUS_MOBILE_80;
                    case p.EF.SIZE_120:
                        return _.QS.AVATAR_DECORATION_STATUS_MOBILE_120;
                }
            switch (t) {
                case p.EF.SIZE_16:
                    return _.QS.AVATAR_DECORATION_STATUS_ROUND_16;
                case p.EF.SIZE_20:
                    return _.QS.AVATAR_DECORATION_STATUS_ROUND_20;
                case p.EF.SIZE_24:
                    return _.QS.AVATAR_DECORATION_STATUS_ROUND_24;
                case p.EF.SIZE_32:
                    return _.QS.AVATAR_DECORATION_STATUS_ROUND_32;
                case p.EF.SIZE_40:
                    return _.QS.AVATAR_DECORATION_STATUS_ROUND_40;
                case p.EF.SIZE_56:
                    return _.QS.AVATAR_DECORATION_STATUS_ROUND_56;
                case p.EF.SIZE_80:
                    return _.QS.AVATAR_DECORATION_STATUS_ROUND_80;
                case p.EF.SIZE_120:
                    return _.QS.AVATAR_DECORATION_STATUS_ROUND_120;
            }
            return null;
        })(b, n, T, y),
        x =
            null != A &&
            (0, r.jsx)('svg', {
                width: D + N,
                height: D,
                viewBox: '0 0 '.concat(D + N, ' ').concat(D),
                className: v.avatarDecoration,
                'aria-hidden': !0,
                children: (0, r.jsx)('foreignObject', {
                    x: 0,
                    y: 0,
                    width: D,
                    height: D,
                    mask: null != L ? 'url(#'.concat(L, ')') : void 0,
                    children: (0, r.jsx)('div', {
                        className: v.avatarStack,
                        children: (0, r.jsx)('img', {
                            className: v.avatar,
                            src: A,
                            alt: ' ',
                            'aria-hidden': !0
                        })
                    })
                })
            });
    return null != i || null != a
        ? (0, r.jsxs)(l.P, {
              className: s()(v.wrapper, v.pointer, f),
              style: R,
              onClick: i,
              tabIndex: m,
              onContextMenu: u,
              onMouseDown: a,
              onKeyDown: o,
              onMouseEnter: null != c ? c : void 0,
              onMouseLeave: null != d ? d : void 0,
              'aria-label': O,
              'aria-hidden': S,
              children: [t, x]
          })
        : (0, r.jsxs)('div', {
              className: s()(v.wrapper, f),
              style: R,
              onContextMenu: null != u ? u : void 0,
              onMouseEnter: null != c ? c : void 0,
              onMouseLeave: null != d ? d : void 0,
              role: 'img',
              'aria-label': O,
              'aria-hidden': S,
              children: [t, x]
          });
}
function N(e) {
    let { src: t, isSpeaking: n, className: i } = e;
    return (0, r.jsxs)(
        'div',
        {
            className: s()(v.avatarStack, i),
            children: [
                (0, r.jsx)('img', {
                    src: null != t ? t : void 0,
                    alt: ' ',
                    className: v.avatar,
                    'aria-hidden': !0
                }),
                n && (0, r.jsx)('div', { className: v.avatarSpeaking })
            ]
        },
        t
    );
}
function C(e) {
    let { src: t, status: n, size: i, statusColor: a, isMobile: o = !1, isTyping: l = !1, typingIndicatorRef: f, isSpeaking: g = !1, statusTooltip: E = !1, statusTooltipDelay: I, statusBackdropColor: S, 'aria-hidden': y = !1, 'aria-label': C, imageClassName: R } = e,
        O = n !== m.Skl.UNKNOWN ? n : null,
        D = (0, p.UC)(i),
        L = null != O ? Math.ceil((D.status * p.D6 - D.status) / 2) : 0,
        x = D.size + L,
        w = (0, c.vj)(O, a);
    return (0, r.jsx)(A, {
        ...e,
        ariaLabel: C,
        ariaHidden: y,
        status: O,
        specs: D,
        typingOffset: L,
        children: (0, r.jsxs)('svg', {
            width: x,
            height: x,
            viewBox: '0 0 '.concat(x, ' ').concat(x),
            className: s()(v.mask, v.svg),
            'aria-hidden': !0,
            children: [
                (0, r.jsx)('foreignObject', {
                    x: 0,
                    y: 0,
                    width: D.size,
                    height: D.size,
                    mask: 'url(#'.concat(
                        (function (e, t, n, r) {
                            if (null == e) return _.QS.AVATAR_DEFAULT;
                            if (r)
                                switch (t) {
                                    case p.EF.SIZE_16:
                                        return _.QS.AVATAR_STATUS_TYPING_16;
                                    case p.EF.SIZE_20:
                                        return _.QS.AVATAR_STATUS_TYPING_20;
                                    case p.EF.SIZE_24:
                                        return _.QS.AVATAR_STATUS_TYPING_24;
                                    case p.EF.SIZE_32:
                                        return _.QS.AVATAR_STATUS_TYPING_32;
                                    case p.EF.SIZE_40:
                                        return _.QS.AVATAR_STATUS_TYPING_40;
                                    case p.EF.SIZE_48:
                                        return _.QS.AVATAR_STATUS_TYPING_48;
                                    case p.EF.SIZE_56:
                                        return _.QS.AVATAR_STATUS_TYPING_56;
                                    case p.EF.SIZE_80:
                                        return _.QS.AVATAR_STATUS_TYPING_80;
                                    case p.EF.SIZE_120:
                                        return _.QS.AVATAR_STATUS_TYPING_120;
                                }
                            if (e === m.Skl.ONLINE && n)
                                switch (t) {
                                    case p.EF.SIZE_16:
                                        return _.QS.AVATAR_STATUS_MOBILE_16;
                                    case p.EF.SIZE_20:
                                        return _.QS.AVATAR_STATUS_MOBILE_20;
                                    case p.EF.SIZE_24:
                                        return _.QS.AVATAR_STATUS_MOBILE_24;
                                    case p.EF.SIZE_32:
                                        return _.QS.AVATAR_STATUS_MOBILE_32;
                                    case p.EF.SIZE_40:
                                        return _.QS.AVATAR_STATUS_MOBILE_40;
                                    case p.EF.SIZE_48:
                                        return _.QS.AVATAR_STATUS_MOBILE_48;
                                    case p.EF.SIZE_56:
                                        return _.QS.AVATAR_STATUS_MOBILE_56;
                                    case p.EF.SIZE_80:
                                        return _.QS.AVATAR_STATUS_MOBILE_80;
                                    case p.EF.SIZE_120:
                                        return _.QS.AVATAR_STATUS_MOBILE_120;
                                }
                            switch (t) {
                                case p.EF.SIZE_16:
                                    return _.QS.AVATAR_STATUS_ROUND_16;
                                case p.EF.SIZE_20:
                                    return _.QS.AVATAR_STATUS_ROUND_20;
                                case p.EF.SIZE_24:
                                    return _.QS.AVATAR_STATUS_ROUND_24;
                                case p.EF.SIZE_32:
                                    return _.QS.AVATAR_STATUS_ROUND_32;
                                case p.EF.SIZE_40:
                                    return _.QS.AVATAR_STATUS_ROUND_40;
                                case p.EF.SIZE_48:
                                    return _.QS.AVATAR_STATUS_ROUND_48;
                                case p.EF.SIZE_56:
                                    return _.QS.AVATAR_STATUS_ROUND_56;
                                case p.EF.SIZE_80:
                                    return _.QS.AVATAR_STATUS_ROUND_80;
                                case p.EF.SIZE_120:
                                    return _.QS.AVATAR_STATUS_ROUND_120;
                            }
                            throw Error(
                                'getMaskId(): Unsupported type, size: '
                                    .concat(t, ', status: ')
                                    .concat(e, ', isMobile: ')
                                    .concat(n ? 'true' : 'false')
                            );
                        })(O, i, o, l),
                        ')'
                    ),
                    children: (0, r.jsx)(N, {
                        src: t,
                        isSpeaking: g,
                        className: R
                    })
                }),
                null != O && null != S ? T(S, o, D, O) : null,
                null != O
                    ? (0, r.jsx)(d.u, {
                          text: E ? (0, h.u5)(O) : null,
                          'aria-label': !1,
                          position: 'top',
                          spacing: 5 + 1.5 * D.stroke,
                          delay: I,
                          children: (e) =>
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)('rect', {
                                          ...e,
                                          ...b(D, O, o, l),
                                          fill: w,
                                          mask: 'url(#'.concat((0, c.rs)(O, o, l), ')'),
                                          className: v.pointerEvents
                                      }),
                                      l
                                          ? (0, r.jsx)(u.b, {
                                                ref: f,
                                                dotRadius: D.status / 4,
                                                x: D.size - 1.375 * D.status - D.offset,
                                                y: D.size - D.status / 1.333 - D.offset
                                            })
                                          : null
                                  ]
                              })
                      })
                    : null
            ]
        })
    });
}
function R(e) {
    let { fromIsMobile: t = !0, fromStatus: n, fromColor: a, isMobile: l = !1, isTyping: _ = !1, typingIndicatorRef: m, isSpeaking: g = !1, size: E, src: b, status: C, statusColor: R, statusTooltip: O = !1, statusTooltipDelay: D, statusBackdropColor: L, 'aria-hidden': x = !1, 'aria-label': w, imageClassName: M } = e,
        P = (0, c.vj)(C, R),
        k = i.useId(),
        U = i.useId(),
        [G] = i.useState(() => ({
            fill: a,
            ...y({
                size: E,
                status: n,
                isMobile: t,
                isTyping: !1
            })
        })),
        B = i.useMemo(
            () => ({
                fill: P,
                ...y({
                    size: E,
                    status: C,
                    isMobile: l,
                    isTyping: _
                })
            }),
            [P, E, C, l, _]
        ),
        {
            avatarCutoutX: Z,
            avatarCutoutY: F,
            avatarCutoutWidth: V,
            avatarCutoutHeight: H,
            avatarCutoutRadius: j,
            fill: Y,
            ...W
        } = (0, f.useSpring)(
            {
                config: I,
                from: G,
                to: B
            },
            document.hasFocus() ? 'animate-always' : 'animate-never'
        ),
        K = (0, p.px)(E),
        z = (0, p.UC)(E),
        q = z.status * p.D6,
        Q = z.status * p.EW,
        X = null != C ? (z.status * p.D6 - z.status) / 2 : 0,
        J = z.size - z.status - X - z.offset,
        $ = z.size - Q - z.offset,
        ee = z.size + Math.ceil(X);
    return (0, r.jsx)(A, {
        ...e,
        ariaLabel: w,
        ariaHidden: x,
        typingOffset: X,
        specs: z,
        children: (0, r.jsxs)('svg', {
            width: ee,
            height: ee,
            viewBox: '0 0 '.concat(ee, ' ').concat(ee),
            className: s()(v.mask, v.svg),
            'aria-hidden': !0,
            children: [
                (0, r.jsxs)('mask', {
                    id: k,
                    width: K,
                    height: K,
                    children: [
                        (0, r.jsx)('circle', {
                            cx: K / 2,
                            cy: K / 2,
                            r: K / 2,
                            fill: 'white'
                        }),
                        (0, r.jsx)(o.animated.rect, {
                            color: 'black',
                            x: Z,
                            y: F,
                            width: V,
                            height: H,
                            rx: j,
                            ry: j
                        })
                    ]
                }),
                (0, r.jsx)('foreignObject', {
                    className: v.__invalid_foreignObject,
                    x: 0,
                    y: 0,
                    width: K,
                    height: K,
                    mask: 'url(#'.concat(k, ')'),
                    children: (0, r.jsx)(N, {
                        src: b,
                        isSpeaking: g,
                        className: M
                    })
                }),
                null != L && T(L, l, z, C),
                (0, r.jsx)(d.u, {
                    text: O ? (0, h.u5)(C) : null,
                    'aria-label': !1,
                    position: 'top',
                    spacing: (function (e, t, n) {
                        let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        return 5 - (n && !r ? 0 : 0.5 * e) + 1.5 * t;
                    })(z.status, z.stroke, l, _),
                    delay: D,
                    children: (e) =>
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)('svg', {
                                    x: J,
                                    y: $,
                                    width: q,
                                    height: Q,
                                    viewBox: '0 0 '.concat(q, ' ').concat(Q),
                                    className: O ? v.cursorDefault : void 0,
                                    children: [
                                        (0, c.vP)(W, z.status, U),
                                        (0, r.jsx)(o.animated.rect, {
                                            fill: Y,
                                            width: q,
                                            height: Q,
                                            mask: 'url(#'.concat(U, ')')
                                        }),
                                        (0, r.jsx)(u.b, {
                                            ref: m,
                                            dotRadius: z.status / 4,
                                            x: 0.15 * q,
                                            y: 0.5 * Q,
                                            hide: !_
                                        })
                                    ]
                                }),
                                (0, r.jsx)(S, {
                                    size: E,
                                    isMobile: l,
                                    isTyping: _,
                                    className: v.pointerEvents,
                                    ...e
                                })
                            ]
                        })
                })
            ]
        })
    });
}
let O = i.memo(function (e) {
    var t, n, a, s, o;
    let { statusColor: l, status: u, ...d } = e,
        { isMobile: f = !1, isTyping: _ = !1 } = d,
        h = i.useRef(u),
        p = i.useRef(f),
        g = (0, c.vj)(u, l),
        E = i.useRef(g),
        v = i.useRef(!1);
    let I = v.current || ((t = _), (n = u), (a = h.current), (s = f), (o = p.current), null != a && null != n && (!!t || n !== a || (n === m.Skl.ONLINE && s !== o) || !1));
    return (
        i.useLayoutEffect(() => {
            (v.current = I), (h.current = u), (p.current = f), (E.current = g);
        }, [u, f, g, I]),
        null != u && null != h.current && I
            ? (0, r.jsx)(R, {
                  ...d,
                  status: u,
                  statusColor: g,
                  fromStatus: h.current,
                  fromIsMobile: p.current,
                  fromColor: E.current
              })
            : (0, r.jsx)(C, {
                  ...d,
                  status: u,
                  statusColor: g
              })
    );
});

n.d(t, {
    Vq: function () {
        return y;
    },
    Xo: function () {
        return k;
    },
    qE: function () {
        return U;
    }
});
var r = n(411104);
var i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(212433),
    c = n(1561),
    d = n(438784),
    _ = n(696826),
    E = n(981729),
    f = n(481060),
    h = n(686546),
    p = n(51144),
    m = n(182294),
    I = n(981631),
    T = n(419061),
    g = n(689938),
    S = n(859234);
let A = {
    tension: 1200,
    friction: 70
};
function v() {
    return document.hasFocus();
}
function N(e) {
    let { size: t, isMobile: n, isTyping: r, ...i } = e,
        o = (0, m.UC)(t),
        s = o.status * (n && !r ? m.EW : 1),
        l = o.status * (r ? m.D6 : 1),
        u = r ? (o.status * m.D6 - o.status) / 2 : 0,
        c = o.size - o.status - u - o.offset,
        d = o.size - s - o.offset;
    return (0, a.jsx)('rect', {
        x: c,
        y: d,
        width: l,
        height: s,
        fill: 'transparent',
        'aria-hidden': !0,
        ...i
    });
}
function O(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return null != t
        ? g.Z.Messages.LABEL_WITH_ONLINE_STATUS.format({
              label: e,
              status: (0, p.u5)(t, n)
          })
        : e;
}
function R(e, t, n, r) {
    if (null == e) return null;
    if (r)
        switch (t) {
            case m.EF.SIZE_16:
                return h.QS.AVATAR_DECORATION_STATUS_TYPING_16;
            case m.EF.SIZE_20:
                return h.QS.AVATAR_DECORATION_STATUS_TYPING_20;
            case m.EF.SIZE_24:
                return h.QS.AVATAR_DECORATION_STATUS_TYPING_24;
            case m.EF.SIZE_32:
                return h.QS.AVATAR_DECORATION_STATUS_TYPING_32;
            case m.EF.SIZE_40:
                return h.QS.AVATAR_DECORATION_STATUS_TYPING_40;
            case m.EF.SIZE_56:
                return h.QS.AVATAR_DECORATION_STATUS_TYPING_56;
            case m.EF.SIZE_80:
                return h.QS.AVATAR_DECORATION_STATUS_TYPING_80;
            case m.EF.SIZE_120:
                return h.QS.AVATAR_DECORATION_STATUS_TYPING_120;
        }
    if (n)
        switch (t) {
            case m.EF.SIZE_16:
                return h.QS.AVATAR_DECORATION_STATUS_MOBILE_16;
            case m.EF.SIZE_20:
                return h.QS.AVATAR_DECORATION_STATUS_MOBILE_20;
            case m.EF.SIZE_24:
                return h.QS.AVATAR_DECORATION_STATUS_MOBILE_24;
            case m.EF.SIZE_32:
                return h.QS.AVATAR_DECORATION_STATUS_MOBILE_32;
            case m.EF.SIZE_40:
                return h.QS.AVATAR_DECORATION_STATUS_MOBILE_40;
            case m.EF.SIZE_56:
                return h.QS.AVATAR_DECORATION_STATUS_MOBILE_56;
            case m.EF.SIZE_80:
                return h.QS.AVATAR_DECORATION_STATUS_MOBILE_80;
            case m.EF.SIZE_120:
                return h.QS.AVATAR_DECORATION_STATUS_MOBILE_120;
        }
    switch (t) {
        case m.EF.SIZE_16:
            return h.QS.AVATAR_DECORATION_STATUS_ROUND_16;
        case m.EF.SIZE_20:
            return h.QS.AVATAR_DECORATION_STATUS_ROUND_20;
        case m.EF.SIZE_24:
            return h.QS.AVATAR_DECORATION_STATUS_ROUND_24;
        case m.EF.SIZE_32:
            return h.QS.AVATAR_DECORATION_STATUS_ROUND_32;
        case m.EF.SIZE_40:
            return h.QS.AVATAR_DECORATION_STATUS_ROUND_40;
        case m.EF.SIZE_56:
            return h.QS.AVATAR_DECORATION_STATUS_ROUND_56;
        case m.EF.SIZE_80:
            return h.QS.AVATAR_DECORATION_STATUS_ROUND_80;
        case m.EF.SIZE_120:
            return h.QS.AVATAR_DECORATION_STATUS_ROUND_120;
    }
    return null;
}
function C(e, t, n, r) {
    if (null == e) return h.QS.AVATAR_DEFAULT;
    if (r)
        switch (t) {
            case m.EF.SIZE_16:
                return h.QS.AVATAR_STATUS_TYPING_16;
            case m.EF.SIZE_20:
                return h.QS.AVATAR_STATUS_TYPING_20;
            case m.EF.SIZE_24:
                return h.QS.AVATAR_STATUS_TYPING_24;
            case m.EF.SIZE_32:
                return h.QS.AVATAR_STATUS_TYPING_32;
            case m.EF.SIZE_40:
                return h.QS.AVATAR_STATUS_TYPING_40;
            case m.EF.SIZE_48:
                return h.QS.AVATAR_STATUS_TYPING_48;
            case m.EF.SIZE_56:
                return h.QS.AVATAR_STATUS_TYPING_56;
            case m.EF.SIZE_80:
                return h.QS.AVATAR_STATUS_TYPING_80;
            case m.EF.SIZE_120:
                return h.QS.AVATAR_STATUS_TYPING_120;
        }
    if (e === I.Skl.ONLINE && n)
        switch (t) {
            case m.EF.SIZE_16:
                return h.QS.AVATAR_STATUS_MOBILE_16;
            case m.EF.SIZE_20:
                return h.QS.AVATAR_STATUS_MOBILE_20;
            case m.EF.SIZE_24:
                return h.QS.AVATAR_STATUS_MOBILE_24;
            case m.EF.SIZE_32:
                return h.QS.AVATAR_STATUS_MOBILE_32;
            case m.EF.SIZE_40:
                return h.QS.AVATAR_STATUS_MOBILE_40;
            case m.EF.SIZE_48:
                return h.QS.AVATAR_STATUS_MOBILE_48;
            case m.EF.SIZE_56:
                return h.QS.AVATAR_STATUS_MOBILE_56;
            case m.EF.SIZE_80:
                return h.QS.AVATAR_STATUS_MOBILE_80;
            case m.EF.SIZE_120:
                return h.QS.AVATAR_STATUS_MOBILE_120;
        }
    switch (t) {
        case m.EF.SIZE_16:
            return h.QS.AVATAR_STATUS_ROUND_16;
        case m.EF.SIZE_20:
            return h.QS.AVATAR_STATUS_ROUND_20;
        case m.EF.SIZE_24:
            return h.QS.AVATAR_STATUS_ROUND_24;
        case m.EF.SIZE_32:
            return h.QS.AVATAR_STATUS_ROUND_32;
        case m.EF.SIZE_40:
            return h.QS.AVATAR_STATUS_ROUND_40;
        case m.EF.SIZE_48:
            return h.QS.AVATAR_STATUS_ROUND_48;
        case m.EF.SIZE_56:
            return h.QS.AVATAR_STATUS_ROUND_56;
        case m.EF.SIZE_80:
            return h.QS.AVATAR_STATUS_ROUND_80;
        case m.EF.SIZE_120:
            return h.QS.AVATAR_STATUS_ROUND_120;
    }
    throw Error(
        'getMaskId(): Unsupported type, size: '
            .concat(t, ', status: ')
            .concat(e, ', isMobile: ')
            .concat(n ? 'true' : 'false')
    );
}
function y(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = (0, _.W5)(e.status, t, n, r),
        a = (r ? e.size - (i.width / 2 + e.status / 2) : e.size - i.width) - e.offset;
    return {
        ...i,
        x: a,
        y: e.size - i.height - e.offset
    };
}
function L(e, t, n) {
    let { size: r, status: i, stroke: a, offset: o } = e,
        s = n ? i * m.D6 : i,
        l = (s - i) / 2,
        u = t ? i * m.EW : i;
    return {
        avatarCutoutX: r - s + l - a - o,
        avatarCutoutY: r - u - a - o,
        avatarCutoutWidth: s + 2 * a,
        avatarCutoutHeight: u + 2 * a,
        avatarCutoutRadius: t ? (u + 2 * a) * m.ZC : (i + 2 * a) / 2
    };
}
function b(e, t, n, r) {
    let i = y(n, r, t, !1),
        o = (0, _.lm)(r, e);
    if (!t) {
        let t = i.height / 2 + n.stroke,
            r = i.x + n.status / 2;
        return (0, a.jsx)('circle', {
            style: { opacity: o },
            fill: e,
            r: t,
            cx: r,
            cy: r
        });
    }
    let s = i.height + 2 * n.stroke,
        l = i.width + 2 * n.stroke,
        u = i.x - n.stroke,
        c = i.y - n.stroke;
    return (0, a.jsx)('rect', {
        fill: e,
        height: s,
        width: l,
        style: { opacity: o },
        x: u,
        y: c,
        rx: n.stroke
    });
}
function D(e) {
    let { status: t, isMobile: n, isTyping: r, size: i } = e,
        a = n && !r && t === I.Skl.ONLINE,
        o = (0, m.UC)(i);
    return {
        ...L(o, a, r),
        ...(0, _.Dk)({
            status: t,
            size: o.status,
            isMobile: a,
            isTyping: r,
            topOffset: 2,
            leftOffset: 6
        })
    };
}
function M(e) {
    let { children: t, size: n, onClick: r, onMouseDown: i, onKeyDown: o, onContextMenu: s, onMouseEnter: u, onMouseLeave: d, className: _, tabIndex: E, ariaLabel: f, ariaHidden: h, status: p, isMobile: I = !1, isTyping: g = !1, avatarDecoration: A, typingOffset: v, specs: N } = e,
        C = {
            width: (0, m.px)(n),
            height: (0, m.px)(n)
        },
        y = null == f || h ? void 0 : O(f, p, I),
        L = N.size * T.hs,
        b = R(p, n, I, g),
        D =
            null != A &&
            (0, a.jsx)('svg', {
                width: L + v,
                height: L,
                viewBox: '0 0 '.concat(L + v, ' ').concat(L),
                className: S.avatarDecoration,
                'aria-hidden': !0,
                children: (0, a.jsx)('foreignObject', {
                    x: 0,
                    y: 0,
                    width: L,
                    height: L,
                    mask: null != b ? 'url(#'.concat(b, ')') : void 0,
                    children: (0, a.jsx)('div', {
                        className: S.avatarStack,
                        children: (0, a.jsx)('img', {
                            className: S.avatar,
                            src: A,
                            alt: ' ',
                            'aria-hidden': !0
                        })
                    })
                })
            });
    return null != r || null != i
        ? (0, a.jsxs)(c.P, {
              className: l()(S.wrapper, S.pointer, _),
              style: C,
              onClick: r,
              tabIndex: E,
              onContextMenu: s,
              onMouseDown: i,
              onKeyDown: o,
              onMouseEnter: null != u ? u : void 0,
              onMouseLeave: null != d ? d : void 0,
              'aria-label': y,
              'aria-hidden': h,
              children: [t, D]
          })
        : (0, a.jsxs)('div', {
              className: l()(S.wrapper, _),
              style: C,
              onContextMenu: null != s ? s : void 0,
              onMouseEnter: null != u ? u : void 0,
              onMouseLeave: null != d ? d : void 0,
              role: 'img',
              'aria-label': y,
              'aria-hidden': h,
              children: [t, D]
          });
}
function P(e) {
    let { src: t, isSpeaking: n, className: r } = e;
    return (0, a.jsxs)(
        'div',
        {
            className: l()(S.avatarStack, r),
            children: [
                (0, a.jsx)('img', {
                    src: null != t ? t : void 0,
                    alt: ' ',
                    className: S.avatar,
                    'aria-hidden': !0
                }),
                n && (0, a.jsx)('div', { className: S.avatarSpeaking })
            ]
        },
        t
    );
}
function U(e) {
    let { src: t, status: n, size: r, statusColor: i, isMobile: o = !1, isTyping: s = !1, typingIndicatorRef: u, isSpeaking: c = !1, statusTooltip: f = !1, statusTooltipDelay: h, statusBackdropColor: T, 'aria-hidden': g = !1, 'aria-label': A, imageClassName: v } = e,
        N = n !== I.Skl.UNKNOWN ? n : null,
        O = (0, m.UC)(r),
        R = null != N ? Math.ceil((O.status * m.D6 - O.status) / 2) : 0,
        L = O.size + R,
        D = (0, _.vj)(N, i);
    return (0, a.jsx)(M, {
        ...e,
        ariaLabel: A,
        ariaHidden: g,
        status: N,
        specs: O,
        typingOffset: R,
        children: (0, a.jsxs)('svg', {
            width: L,
            height: L,
            viewBox: '0 0 '.concat(L, ' ').concat(L),
            className: l()(S.mask, S.svg),
            'aria-hidden': !0,
            children: [
                (0, a.jsx)('foreignObject', {
                    x: 0,
                    y: 0,
                    width: O.size,
                    height: O.size,
                    mask: 'url(#'.concat(C(N, r, o, s), ')'),
                    children: (0, a.jsx)(P, {
                        src: t,
                        isSpeaking: c,
                        className: v
                    })
                }),
                null != N && null != T ? b(T, o, O, N) : null,
                null != N
                    ? (0, a.jsx)(E.u, {
                          text: f ? (0, p.u5)(N) : null,
                          'aria-label': !1,
                          position: 'top',
                          spacing: 5 + 1.5 * O.stroke,
                          delay: h,
                          children: (e) =>
                              (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      (0, a.jsx)('rect', {
                                          ...e,
                                          ...y(O, N, o, s),
                                          fill: D,
                                          mask: 'url(#'.concat((0, _.rs)(N, o, s), ')'),
                                          className: S.pointerEvents
                                      }),
                                      s
                                          ? (0, a.jsx)(d.b, {
                                                ref: u,
                                                dotRadius: O.status / 4,
                                                x: O.size - 1.375 * O.status - O.offset,
                                                y: O.size - O.status / 1.333 - O.offset
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
function w(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return 5 - (n && !r ? 0 : 0.5 * e) + 1.5 * t;
}
function x(e) {
    let { fromIsMobile: t = !0, fromStatus: n, fromColor: r, isMobile: i = !1, isTyping: s = !1, typingIndicatorRef: c, isSpeaking: h = !1, size: I, src: T, status: g, statusColor: O, statusTooltip: R = !1, statusTooltipDelay: C, statusBackdropColor: y, 'aria-hidden': L = !1, 'aria-label': U, imageClassName: x } = e,
        G = (0, _.vj)(g, O),
        k = o.useId(),
        B = o.useId(),
        [F] = o.useState(() => ({
            fill: r,
            ...D({
                size: I,
                status: n,
                isMobile: t,
                isTyping: !1
            })
        })),
        Z = o.useMemo(
            () => ({
                fill: G,
                ...D({
                    size: I,
                    status: g,
                    isMobile: i,
                    isTyping: s
                })
            }),
            [G, I, g, i, s]
        ),
        {
            avatarCutoutX: V,
            avatarCutoutY: H,
            avatarCutoutWidth: Y,
            avatarCutoutHeight: j,
            avatarCutoutRadius: W,
            fill: K,
            ...z
        } = (0, f.useSpring)(
            {
                config: A,
                from: F,
                to: Z
            },
            v() ? 'animate-always' : 'animate-never'
        ),
        q = (0, m.px)(I),
        Q = (0, m.UC)(I),
        X = Q.status * m.D6,
        $ = Q.status * m.EW,
        J = null != g ? (Q.status * m.D6 - Q.status) / 2 : 0,
        ee = Q.size - Q.status - J - Q.offset,
        et = Q.size - $ - Q.offset,
        en = Q.size + Math.ceil(J);
    return (0, a.jsx)(M, {
        ...e,
        ariaLabel: U,
        ariaHidden: L,
        typingOffset: J,
        specs: Q,
        children: (0, a.jsxs)('svg', {
            width: en,
            height: en,
            viewBox: '0 0 '.concat(en, ' ').concat(en),
            className: l()(S.mask, S.svg),
            'aria-hidden': !0,
            children: [
                (0, a.jsxs)('mask', {
                    id: k,
                    width: q,
                    height: q,
                    children: [
                        (0, a.jsx)('circle', {
                            cx: q / 2,
                            cy: q / 2,
                            r: q / 2,
                            fill: 'white'
                        }),
                        (0, a.jsx)(u.animated.rect, {
                            color: 'black',
                            x: V,
                            y: H,
                            width: Y,
                            height: j,
                            rx: W,
                            ry: W
                        })
                    ]
                }),
                (0, a.jsx)('foreignObject', {
                    className: S.__invalid_foreignObject,
                    x: 0,
                    y: 0,
                    width: q,
                    height: q,
                    mask: 'url(#'.concat(k, ')'),
                    children: (0, a.jsx)(P, {
                        src: T,
                        isSpeaking: h,
                        className: x
                    })
                }),
                null != y && b(y, i, Q, g),
                (0, a.jsx)(E.u, {
                    text: R ? (0, p.u5)(g) : null,
                    'aria-label': !1,
                    position: 'top',
                    spacing: w(Q.status, Q.stroke, i, s),
                    delay: C,
                    children: (e) =>
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsxs)('svg', {
                                    x: ee,
                                    y: et,
                                    width: X,
                                    height: $,
                                    viewBox: '0 0 '.concat(X, ' ').concat($),
                                    className: R ? S.cursorDefault : void 0,
                                    children: [
                                        (0, _.vP)(z, Q.status, B),
                                        (0, a.jsx)(u.animated.rect, {
                                            fill: K,
                                            width: X,
                                            height: $,
                                            mask: 'url(#'.concat(B, ')')
                                        }),
                                        (0, a.jsx)(d.b, {
                                            ref: c,
                                            dotRadius: Q.status / 4,
                                            x: 0.15 * X,
                                            y: 0.5 * $,
                                            hide: !s
                                        })
                                    ]
                                }),
                                (0, a.jsx)(N, {
                                    size: I,
                                    isMobile: i,
                                    isTyping: s,
                                    className: S.pointerEvents,
                                    ...e
                                })
                            ]
                        })
                })
            ]
        })
    });
}
function G(e, t, n, r, i) {
    return null != n && null != t && (!!e || t !== n || (t === I.Skl.ONLINE && r !== i) || !1);
}
let k = o.memo(function (e) {
    let { statusColor: t, status: n, ...r } = e,
        { isMobile: i = !1, isTyping: s = !1 } = r,
        l = o.useRef(n),
        u = o.useRef(i),
        c = (0, _.vj)(n, t),
        d = o.useRef(c),
        E = o.useRef(!1),
        f = E.current || G(s, n, l.current, i, u.current);
    return (
        o.useLayoutEffect(() => {
            (E.current = f), (l.current = n), (u.current = i), (d.current = c);
        }, [n, i, c, f]),
        null != n && null != l.current && f
            ? (0, a.jsx)(x, {
                  ...r,
                  status: n,
                  statusColor: c,
                  fromStatus: l.current,
                  fromIsMobile: u.current,
                  fromColor: d.current
              })
            : (0, a.jsx)(U, {
                  ...r,
                  status: n,
                  statusColor: c
              })
    );
});

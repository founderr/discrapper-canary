n.d(t, {
    Q: function () {
        return g;
    },
    Z: function () {
        return S;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(100621),
    s = n(481060),
    u = n(13245),
    c = n(691891),
    d = n(44359),
    h = n(333031),
    f = n(693091),
    p = n(981631),
    m = n(388032),
    v = n(638266);
function g(e, t) {
    return (0, i.jsx)(i.Fragment, {
        children: m.intl.format(t, {
            keybind: e,
            keybindHook: (t) => (0, i.jsx)(d.Z, { keybind: e }, e.join('+'))
        })
    });
}
function E(e) {
    e.currentTarget.scrollTo(0, 0);
}
let _ = l.memo(function (e) {
    let { maxBodyLines: t, expand: n = !1, onNotificationShow: r, onDismissClick: u, onConfirmClick: d, onCancelClick: h, onNotificationClick: f, hint: g, cancelText: _, confirmText: C, icon: S, body: Z, title: I, renderFooter: x, contentOpacity: N, status: O, containerRef: T } = e,
        [y, b] = l.useState(!1),
        A = n || y || O === p._1z.FOCUSED;
    l.useEffect(() => {
        null == r || r();
    }, [r]);
    let L = l.useCallback(
            (e) => {
                e.stopPropagation(), null == u || u(e);
            },
            [u]
        ),
        R = l.useCallback(
            (e) => {
                e.stopPropagation(), null == d || d(e);
            },
            [d]
        ),
        k = l.useCallback(
            (e) => {
                e.stopPropagation(), null == h || h(e);
            },
            [h]
        ),
        M = l.useCallback(() => {
            b(!0);
        }, []),
        w = l.useCallback(() => {
            b(!1);
        }, []);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: v.overflowWrapper,
                onScroll: E,
                children: (0, i.jsx)(s.Clickable, {
                    innerRef: T,
                    ignoreKeyPress: !0,
                    onMouseOver: M,
                    onMouseLeave: w,
                    onClick: f,
                    className: o()(v.container, { [v.clickable]: null != f }),
                    children: (function () {
                        let e = null == x ? void 0 : x(A);
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(a.animated.div, {
                                    className: v.iconAndDetails,
                                    style: { opacity: N },
                                    children: [
                                        null == S
                                            ? null
                                            : 'string' == typeof S
                                              ? (0, i.jsx)(s.Avatar, {
                                                    src: S,
                                                    size: s.AvatarSizes.SIZE_40,
                                                    className: v.avatar,
                                                    'aria-hidden': !0
                                                })
                                              : (0, i.jsx)('div', {
                                                    className: v.avatar,
                                                    children: S
                                                }),
                                        (0, i.jsxs)('div', {
                                            className: v.details,
                                            children: [
                                                (0, i.jsx)(s.Text, {
                                                    color: 'interactive-normal',
                                                    variant: 'text-sm/semibold',
                                                    lineClamp: 2,
                                                    children: I
                                                }),
                                                null != Z
                                                    ? (0, i.jsx)(s.Text, {
                                                          color: 'interactive-normal',
                                                          variant: 'text-sm/normal',
                                                          lineClamp: null != t ? t * (A ? 2 : 1) : void 0,
                                                          children: Z
                                                      })
                                                    : null,
                                                (function () {
                                                    let e = 'function' == typeof g ? g(A) : g;
                                                    return null != g
                                                        ? (0, i.jsx)(s.Text, {
                                                              className: v.hint,
                                                              color: 'text-muted',
                                                              variant: 'text-xxs/medium',
                                                              children: e
                                                          })
                                                        : null;
                                                })(),
                                                null == d && null == h
                                                    ? null
                                                    : (0, i.jsxs)('div', {
                                                          className: v.buttonContainer,
                                                          children: [
                                                              null != d
                                                                  ? (0, i.jsx)(s.Button, {
                                                                        className: v.button,
                                                                        size: s.Button.Sizes.SMALL,
                                                                        color: s.Button.Colors.GREEN,
                                                                        onClick: R,
                                                                        children: null != C ? C : m.intl.string(m.t.BddRzc)
                                                                    })
                                                                  : null,
                                                              null != h
                                                                  ? (0, i.jsx)(s.Button, {
                                                                        className: v.button,
                                                                        size: s.Button.Sizes.SMALL,
                                                                        look: s.Button.Looks.OUTLINED,
                                                                        color: s.Button.Colors.PRIMARY,
                                                                        onClick: k,
                                                                        children: null != _ ? _ : m.intl.string(m.t['ETE/oK'])
                                                                    })
                                                                  : null
                                                          ]
                                                      })
                                            ]
                                        })
                                    ]
                                }),
                                null != e &&
                                    (0, i.jsx)(s.Clickable, {
                                        className: v.footer,
                                        ignoreKeyPress: !0,
                                        onClick: (e) => e.stopPropagation(),
                                        children: e
                                    })
                            ]
                        });
                    })()
                })
            }),
            (0, i.jsx)(c.Z, {
                className: v.dismissButton,
                onDismiss: L,
                'aria-label': m.intl.string(m.t.LnEgqa)
            })
        ]
    });
});
function C(e) {
    let {
        springs: { opacity: t, scale: n, transform: l, height: r },
        index: o,
        children: s,
        locked: u
    } = e;
    return (0, i.jsx)(a.animated.div, {
        className: v.animationWrapper,
        style: {
            pointerEvents: u && 0 !== o ? 'none' : 'auto',
            zIndex: Math.max(5 - o, 0),
            opacity: t,
            transform: l.to((e) => 'translate3d(0, '.concat(e, 'px, 0)')),
            scale: n.to([0, 1], [0.7, 1]),
            height: r
        },
        children: s
    });
}
function S(e) {
    let { notification: t, index: n, locked: r, transitionState: o, cleanUp: a } = e,
        {
            id: s,
            props: { onNotificationShow: c, onDismissClick: d, onNotificationClick: p, onConfirmClick: m, onCancelClick: g, renderFooter: E }
        } = t,
        S = l.useCallback(() => {
            c(s);
        }, [c, s]),
        Z = l.useCallback(
            (e) => {
                u.Z.updateNotificationStatus(s), null == d || d(e, s);
            },
            [s, d]
        ),
        I = l.useCallback(
            (e) => {
                null == p || p(e, s);
            },
            [p, s]
        ),
        x = l.useCallback(
            (e) => {
                null == m || m(e, s);
            },
            [m, s]
        ),
        N = l.useCallback(
            (e) => {
                null == g || g(e, s);
            },
            [g, s]
        ),
        O = l.useCallback((e) => (null == E ? void 0 : E(e, s)), [E, s]),
        {
            props: { onNotificationShow: T, onDismissClick: y, renderFooter: b, onNotificationClick: A, onConfirmClick: L, onCancelClick: R, ...k },
            status: M
        } = t,
        { ref: w, springs: P } = (0, f.X4)(t.id, o, a);
    return (0, i.jsx)(C, {
        transitionState: o,
        springs: P,
        index: n,
        locked: r,
        children: (0, i.jsx)(h.Z, {
            observe: 0 === n,
            className: v.clickZone,
            children: (0, i.jsx)(_, {
                ...k,
                containerRef: w,
                notificationId: t.id,
                onNotificationShow: 0 === n ? S : void 0,
                onDismissClick: Z,
                onNotificationClick: null != p ? I : void 0,
                onConfirmClick: null != m ? x : void 0,
                onCancelClick: null != g ? N : void 0,
                renderFooter: O,
                expand: !1,
                index: n,
                locked: r,
                status: M,
                contentOpacity: P.contentOpacity
            })
        })
    });
}

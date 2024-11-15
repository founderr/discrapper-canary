n.d(t, {
    Q: function () {
        return v;
    },
    Z: function () {
        return S;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(100621),
    s = n(481060),
    u = n(13245),
    c = n(691891),
    d = n(44359),
    h = n(333031),
    f = n(693091),
    p = n(981631),
    m = n(388032),
    E = n(638266);
function v(e, t) {
    return (0, i.jsx)(i.Fragment, {
        children: m.intl.format(t, {
            keybind: e,
            keybindHook: (t) => (0, i.jsx)(d.Z, { keybind: e }, e.join('+'))
        })
    });
}
function g(e) {
    e.currentTarget.scrollTo(0, 0);
}
let _ = r.memo(function (e) {
    let { maxBodyLines: t, expand: n = !1, onNotificationShow: l, onDismissClick: u, onConfirmClick: d, onCancelClick: h, onNotificationClick: f, hint: v, cancelText: _, confirmText: C, icon: S, body: I, title: Z, renderFooter: N, contentOpacity: x, status: O, containerRef: T } = e,
        [A, y] = r.useState(!1),
        b = n || A || O === p._1z.FOCUSED;
    r.useEffect(() => {
        null == l || l();
    }, [l]);
    let R = r.useCallback(
            (e) => {
                e.stopPropagation(), null == u || u(e);
            },
            [u]
        ),
        L = r.useCallback(
            (e) => {
                e.stopPropagation(), null == d || d(e);
            },
            [d]
        ),
        k = r.useCallback(
            (e) => {
                e.stopPropagation(), null == h || h(e);
            },
            [h]
        ),
        M = r.useCallback(() => {
            y(!0);
        }, []),
        P = r.useCallback(() => {
            y(!1);
        }, []);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: E.overflowWrapper,
                onScroll: g,
                children: (0, i.jsx)(s.Clickable, {
                    innerRef: T,
                    ignoreKeyPress: !0,
                    onMouseOver: M,
                    onMouseLeave: P,
                    onClick: f,
                    className: o()(E.container, { [E.clickable]: null != f }),
                    children: (function () {
                        let e = null == N ? void 0 : N(b);
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(a.animated.div, {
                                    className: E.iconAndDetails,
                                    style: { opacity: x },
                                    children: [
                                        null == S
                                            ? null
                                            : 'string' == typeof S
                                              ? (0, i.jsx)(s.Avatar, {
                                                    src: S,
                                                    size: s.AvatarSizes.SIZE_40,
                                                    className: E.avatar,
                                                    'aria-hidden': !0
                                                })
                                              : (0, i.jsx)('div', {
                                                    className: E.avatar,
                                                    children: S
                                                }),
                                        (0, i.jsxs)('div', {
                                            className: E.details,
                                            children: [
                                                (0, i.jsx)(s.Text, {
                                                    color: 'interactive-normal',
                                                    variant: 'text-sm/semibold',
                                                    lineClamp: 2,
                                                    children: Z
                                                }),
                                                null != I
                                                    ? (0, i.jsx)(s.Text, {
                                                          color: 'interactive-normal',
                                                          variant: 'text-sm/normal',
                                                          lineClamp: null != t ? t * (b ? 2 : 1) : void 0,
                                                          children: I
                                                      })
                                                    : null,
                                                (function () {
                                                    let e = 'function' == typeof v ? v(b) : v;
                                                    return null != v
                                                        ? (0, i.jsx)(s.Text, {
                                                              className: E.hint,
                                                              color: 'text-muted',
                                                              variant: 'text-xxs/medium',
                                                              children: e
                                                          })
                                                        : null;
                                                })(),
                                                null == d && null == h
                                                    ? null
                                                    : (0, i.jsxs)('div', {
                                                          className: E.buttonContainer,
                                                          children: [
                                                              null != d
                                                                  ? (0, i.jsx)(s.Button, {
                                                                        className: E.button,
                                                                        size: s.Button.Sizes.SMALL,
                                                                        color: s.Button.Colors.GREEN,
                                                                        onClick: L,
                                                                        children: null != C ? C : m.intl.string(m.t.BddRzc)
                                                                    })
                                                                  : null,
                                                              null != h
                                                                  ? (0, i.jsx)(s.Button, {
                                                                        className: E.button,
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
                                        className: E.footer,
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
                className: E.dismissButton,
                onDismiss: R,
                'aria-label': m.intl.string(m.t.LnEgqa)
            })
        ]
    });
});
function C(e) {
    let {
        springs: { opacity: t, scale: n, transform: r, height: l },
        index: o,
        children: s,
        locked: u
    } = e;
    return (0, i.jsx)(a.animated.div, {
        className: E.animationWrapper,
        style: {
            pointerEvents: u && 0 !== o ? 'none' : 'auto',
            zIndex: Math.max(5 - o, 0),
            opacity: t,
            transform: r.to((e) => 'translate3d(0, '.concat(e, 'px, 0)')),
            scale: n.to([0, 1], [0.7, 1]),
            height: l
        },
        children: s
    });
}
function S(e) {
    let { notification: t, index: n, locked: l, transitionState: o, cleanUp: a } = e,
        {
            id: s,
            props: { onNotificationShow: c, onDismissClick: d, onNotificationClick: p, onConfirmClick: m, onCancelClick: v, renderFooter: g }
        } = t,
        S = r.useCallback(() => {
            c(s);
        }, [c, s]),
        I = r.useCallback(
            (e) => {
                u.Z.updateNotificationStatus(s), null == d || d(e, s);
            },
            [s, d]
        ),
        Z = r.useCallback(
            (e) => {
                null == p || p(e, s);
            },
            [p, s]
        ),
        N = r.useCallback(
            (e) => {
                null == m || m(e, s);
            },
            [m, s]
        ),
        x = r.useCallback(
            (e) => {
                null == v || v(e, s);
            },
            [v, s]
        ),
        O = r.useCallback((e) => (null == g ? void 0 : g(e, s)), [g, s]),
        {
            props: { onNotificationShow: T, onDismissClick: A, renderFooter: y, onNotificationClick: b, onConfirmClick: R, onCancelClick: L, ...k },
            status: M
        } = t,
        { ref: P, springs: w } = (0, f.X4)(t.id, o, a);
    return (0, i.jsx)(C, {
        transitionState: o,
        springs: w,
        index: n,
        locked: l,
        children: (0, i.jsx)(h.Z, {
            observe: 0 === n,
            className: E.clickZone,
            children: (0, i.jsx)(_, {
                ...k,
                containerRef: P,
                notificationId: t.id,
                onNotificationShow: 0 === n ? S : void 0,
                onDismissClick: I,
                onNotificationClick: null != p ? Z : void 0,
                onConfirmClick: null != m ? N : void 0,
                onCancelClick: null != v ? x : void 0,
                renderFooter: O,
                expand: !1,
                index: n,
                locked: l,
                status: M,
                contentOpacity: w.contentOpacity
            })
        })
    });
}

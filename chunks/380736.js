n.d(t, {
    Q: function () {
        return E;
    },
    Z: function () {
        return S;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    o = n(120356),
    r = n.n(o),
    s = n(752877),
    a = n(481060),
    u = n(13245),
    c = n(809357),
    d = n(691891),
    h = n(44359),
    f = n(333031),
    p = n(693091),
    m = n(981631),
    v = n(388032),
    g = n(176463);
function E(e, t, n) {
    return (0, i.jsx)(x, {
        keybind: e,
        message: t,
        messageWithoutKeybind: n
    });
}
function x(e) {
    let { keybind: t, message: n, messageWithoutKeybind: l } = e,
        o = (0, c.o)();
    return (0, i.jsx)(i.Fragment, {
        children: o
            ? v.intl.format(n, {
                  keybind: t,
                  keybindHook: (e) => (0, i.jsx)(h.Z, { keybind: t }, t.join('+'))
              })
            : l
    });
}
function C(e) {
    e.currentTarget.scrollTo(0, 0);
}
let Z = l.memo(function (e) {
    let { maxBodyLines: t, expand: n = !1, onNotificationShow: o, onDismissClick: u, onConfirmClick: c, onCancelClick: h, onNotificationClick: f, hint: p, cancelText: E, confirmText: x, icon: Z, body: _, title: S, renderFooter: I, contentOpacity: N, status: b, containerRef: O } = e,
        [y, j] = l.useState(!1),
        T = n || y || b === m._1z.FOCUSED;
    l.useEffect(() => {
        null == o || o();
    }, [o]);
    let k = l.useCallback(
            (e) => {
                e.stopPropagation(), null == u || u(e);
            },
            [u]
        ),
        w = l.useCallback(
            (e) => {
                e.stopPropagation(), null == c || c(e);
            },
            [c]
        ),
        A = l.useCallback(
            (e) => {
                e.stopPropagation(), null == h || h(e);
            },
            [h]
        ),
        L = l.useCallback(() => {
            j(!0);
        }, []),
        R = l.useCallback(() => {
            j(!1);
        }, []);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: g.overflowWrapper,
                onScroll: C,
                children: (0, i.jsx)(a.Clickable, {
                    innerRef: O,
                    ignoreKeyPress: !0,
                    onMouseOver: L,
                    onMouseLeave: R,
                    onClick: f,
                    className: r()(g.container, { [g.clickable]: null != f }),
                    children: (function () {
                        let e = null == I ? void 0 : I(T);
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(s.animated.div, {
                                    className: g.iconAndDetails,
                                    style: { opacity: N },
                                    children: [
                                        null == Z
                                            ? null
                                            : 'string' == typeof Z
                                              ? (0, i.jsx)(a.Avatar, {
                                                    src: Z,
                                                    size: a.AvatarSizes.SIZE_40,
                                                    className: g.avatar,
                                                    'aria-hidden': !0
                                                })
                                              : (0, i.jsx)('div', {
                                                    className: g.avatar,
                                                    children: Z
                                                }),
                                        (0, i.jsxs)('div', {
                                            className: g.details,
                                            children: [
                                                (0, i.jsx)(a.Text, {
                                                    color: 'interactive-normal',
                                                    variant: 'text-sm/semibold',
                                                    lineClamp: 2,
                                                    children: S
                                                }),
                                                null != _
                                                    ? (0, i.jsx)(a.Text, {
                                                          color: 'interactive-normal',
                                                          variant: 'text-sm/normal',
                                                          lineClamp: null != t ? t * (T ? 2 : 1) : void 0,
                                                          children: _
                                                      })
                                                    : null,
                                                (function () {
                                                    let e = 'function' == typeof p ? p(T) : p;
                                                    return null != p
                                                        ? (0, i.jsx)(a.Text, {
                                                              className: g.hint,
                                                              color: 'text-muted',
                                                              variant: 'text-xxs/medium',
                                                              children: e
                                                          })
                                                        : null;
                                                })(),
                                                null == c && null == h
                                                    ? null
                                                    : (0, i.jsxs)('div', {
                                                          className: g.buttonContainer,
                                                          children: [
                                                              null != c
                                                                  ? (0, i.jsx)(a.Button, {
                                                                        className: g.button,
                                                                        size: a.Button.Sizes.SMALL,
                                                                        color: a.Button.Colors.GREEN,
                                                                        onClick: w,
                                                                        children: null != x ? x : v.intl.string(v.t.BddRzc)
                                                                    })
                                                                  : null,
                                                              null != h
                                                                  ? (0, i.jsx)(a.Button, {
                                                                        className: g.button,
                                                                        size: a.Button.Sizes.SMALL,
                                                                        look: a.Button.Looks.OUTLINED,
                                                                        color: a.Button.Colors.PRIMARY,
                                                                        onClick: A,
                                                                        children: null != E ? E : v.intl.string(v.t['ETE/oK'])
                                                                    })
                                                                  : null
                                                          ]
                                                      })
                                            ]
                                        })
                                    ]
                                }),
                                null != e &&
                                    (0, i.jsx)(a.Clickable, {
                                        className: g.footer,
                                        ignoreKeyPress: !0,
                                        onClick: (e) => e.stopPropagation(),
                                        children: e
                                    })
                            ]
                        });
                    })()
                })
            }),
            (0, i.jsx)(d.Z, {
                className: g.dismissButton,
                onDismiss: k,
                'aria-label': v.intl.string(v.t.LnEgqa)
            })
        ]
    });
});
function _(e) {
    let {
        springs: { opacity: t, scale: n, transform: l, height: o },
        index: r,
        children: a,
        locked: u
    } = e;
    return (0, i.jsx)(s.animated.div, {
        className: g.animationWrapper,
        style: {
            pointerEvents: u && 0 !== r ? 'none' : 'auto',
            zIndex: Math.max(5 - r, 0),
            opacity: t,
            transform: l.to((e) => 'translate3d(0, '.concat(e, 'px, 0)')),
            scale: n.to([0, 1], [0.7, 1]),
            height: o
        },
        children: a
    });
}
function S(e) {
    let { notification: t, index: n, locked: o, transitionState: r, cleanUp: s } = e,
        {
            id: a,
            props: { onNotificationShow: c, onDismissClick: d, onNotificationClick: h, onConfirmClick: m, onCancelClick: v, renderFooter: E }
        } = t,
        x = l.useCallback(() => {
            c(a);
        }, [c, a]),
        C = l.useCallback(
            (e) => {
                u.Z.updateNotificationStatus(a), null == d || d(e, a);
            },
            [a, d]
        ),
        S = l.useCallback(
            (e) => {
                null == h || h(e, a);
            },
            [h, a]
        ),
        I = l.useCallback(
            (e) => {
                null == m || m(e, a);
            },
            [m, a]
        ),
        N = l.useCallback(
            (e) => {
                null == v || v(e, a);
            },
            [v, a]
        ),
        b = l.useCallback((e) => (null == E ? void 0 : E(e, a)), [E, a]),
        {
            props: { onNotificationShow: O, onDismissClick: y, renderFooter: j, onNotificationClick: T, onConfirmClick: k, onCancelClick: w, ...A },
            status: L
        } = t,
        { ref: R, springs: M } = (0, p.X4)(t.id, r, s);
    return (0, i.jsx)(_, {
        transitionState: r,
        springs: M,
        index: n,
        locked: o,
        children: (0, i.jsx)(f.Z, {
            observe: 0 === n,
            className: g.clickZone,
            children: (0, i.jsx)(Z, {
                ...A,
                containerRef: R,
                notificationId: t.id,
                onNotificationShow: 0 === n ? x : void 0,
                onDismissClick: C,
                onNotificationClick: null != h ? S : void 0,
                onConfirmClick: null != m ? I : void 0,
                onCancelClick: null != v ? N : void 0,
                renderFooter: b,
                expand: !1,
                index: n,
                locked: o,
                status: L,
                contentOpacity: M.contentOpacity
            })
        })
    });
}

n.d(t, {
    Q: function () {
        return E;
    },
    Z: function () {
        return I;
    }
}),
    n(47120);
var i = n(200651),
    o = n(192379),
    l = n(120356),
    r = n.n(l),
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
    let { keybind: t, message: n, messageWithoutKeybind: o } = e,
        l = (0, c.o)();
    return (0, i.jsx)(i.Fragment, {
        children: l
            ? v.intl.format(n, {
                  keybind: t,
                  keybindHook: (e) => (0, i.jsx)(h.Z, { keybind: t }, t.join('+'))
              })
            : o
    });
}
function C(e) {
    e.currentTarget.scrollTo(0, 0);
}
let Z = o.memo(function (e) {
    let { maxBodyLines: t, expand: n = !1, onNotificationShow: l, onDismissClick: u, onConfirmClick: c, onCancelClick: h, onNotificationClick: f, hint: p, cancelText: E, confirmText: x, icon: Z, body: _, title: I, renderFooter: S, contentOpacity: b, status: N, containerRef: O } = e,
        [y, j] = o.useState(!1),
        T = n || y || N === m._1z.FOCUSED;
    o.useEffect(() => {
        null == l || l();
    }, [l]);
    let k = o.useCallback(
            (e) => {
                e.stopPropagation(), null == u || u(e);
            },
            [u]
        ),
        L = o.useCallback(
            (e) => {
                e.stopPropagation(), null == c || c(e);
            },
            [c]
        ),
        w = o.useCallback(
            (e) => {
                e.stopPropagation(), null == h || h(e);
            },
            [h]
        ),
        A = o.useCallback(() => {
            j(!0);
        }, []),
        R = o.useCallback(() => {
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
                    onMouseOver: A,
                    onMouseLeave: R,
                    onClick: f,
                    className: r()(g.container, { [g.clickable]: null != f }),
                    children: (function () {
                        let e = null == S ? void 0 : S(T);
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(s.animated.div, {
                                    className: g.iconAndDetails,
                                    style: { opacity: b },
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
                                                    children: I
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
                                                                        onClick: L,
                                                                        children: null != x ? x : v.intl.string(v.t.BddRzc)
                                                                    })
                                                                  : null,
                                                              null != h
                                                                  ? (0, i.jsx)(a.Button, {
                                                                        className: g.button,
                                                                        size: a.Button.Sizes.SMALL,
                                                                        look: a.Button.Looks.OUTLINED,
                                                                        color: a.Button.Colors.PRIMARY,
                                                                        onClick: w,
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
        springs: { opacity: t, scale: n, transform: o, height: l },
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
            transform: o.to((e) => 'translate3d(0, '.concat(e, 'px, 0)')),
            scale: n.to([0, 1], [0.7, 1]),
            height: l
        },
        children: a
    });
}
function I(e) {
    let { notification: t, index: n, locked: l, transitionState: r, cleanUp: s } = e,
        {
            id: a,
            props: { onNotificationShow: c, onDismissClick: d, onNotificationClick: h, onConfirmClick: m, onCancelClick: v, renderFooter: E }
        } = t,
        x = o.useCallback(() => {
            c(a);
        }, [c, a]),
        C = o.useCallback(
            (e) => {
                u.Z.updateNotificationStatus(a), null == d || d(e, a);
            },
            [a, d]
        ),
        I = o.useCallback(
            (e) => {
                null == h || h(e, a);
            },
            [h, a]
        ),
        S = o.useCallback(
            (e) => {
                null == m || m(e, a);
            },
            [m, a]
        ),
        b = o.useCallback(
            (e) => {
                null == v || v(e, a);
            },
            [v, a]
        ),
        N = o.useCallback((e) => (null == E ? void 0 : E(e, a)), [E, a]),
        {
            props: { onNotificationShow: O, onDismissClick: y, renderFooter: j, onNotificationClick: T, onConfirmClick: k, onCancelClick: L, ...w },
            status: A
        } = t,
        { ref: R, springs: M } = (0, p.X4)(t.id, r, s);
    return (0, i.jsx)(_, {
        transitionState: r,
        springs: M,
        index: n,
        locked: l,
        children: (0, i.jsx)(f.Z, {
            observe: 0 === n,
            className: g.clickZone,
            children: (0, i.jsx)(Z, {
                ...w,
                containerRef: R,
                notificationId: t.id,
                onNotificationShow: 0 === n ? x : void 0,
                onDismissClick: C,
                onNotificationClick: null != h ? I : void 0,
                onConfirmClick: null != m ? S : void 0,
                onCancelClick: null != v ? b : void 0,
                renderFooter: N,
                expand: !1,
                index: n,
                locked: l,
                status: A,
                contentOpacity: M.contentOpacity
            })
        })
    });
}

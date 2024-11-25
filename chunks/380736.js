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
    l = n(192379),
    o = n(120356),
    r = n.n(o),
    s = n(752877),
    a = n(481060),
    u = n(13245),
    d = n(809357),
    c = n(691891),
    h = n(44359),
    f = n(333031),
    p = n(693091),
    m = n(981631),
    g = n(388032),
    v = n(176463);
function E(e, t, n) {
    return (0, i.jsx)(Z, {
        keybind: e,
        message: t,
        messageWithoutKeybind: n
    });
}
function Z(e) {
    let { keybind: t, message: n, messageWithoutKeybind: l } = e,
        o = (0, d.o)();
    return (0, i.jsx)(i.Fragment, {
        children: o
            ? g.intl.format(n, {
                  keybind: t,
                  keybindHook: (e) => (0, i.jsx)(h.Z, { keybind: t }, t.join('+'))
              })
            : l
    });
}
function C(e) {
    e.currentTarget.scrollTo(0, 0);
}
let x = l.memo(function (e) {
    let { maxBodyLines: t, expand: n = !1, onNotificationShow: o, onDismissClick: u, onConfirmClick: d, onCancelClick: h, onNotificationClick: f, hint: p, cancelText: E, confirmText: Z, icon: x, body: S, title: I, renderFooter: _, contentOpacity: O, status: N, containerRef: y } = e,
        [T, j] = l.useState(!1),
        b = n || T || N === m._1z.FOCUSED;
    l.useEffect(() => {
        null == o || o();
    }, [o]);
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
        w = l.useCallback(
            (e) => {
                e.stopPropagation(), null == h || h(e);
            },
            [h]
        ),
        k = l.useCallback(() => {
            j(!0);
        }, []),
        A = l.useCallback(() => {
            j(!1);
        }, []);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: v.overflowWrapper,
                onScroll: C,
                children: (0, i.jsx)(a.Clickable, {
                    innerRef: y,
                    ignoreKeyPress: !0,
                    onMouseOver: k,
                    onMouseLeave: A,
                    onClick: f,
                    className: r()(v.container, { [v.clickable]: null != f }),
                    children: (function () {
                        let e = null == _ ? void 0 : _(b);
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(s.animated.div, {
                                    className: v.iconAndDetails,
                                    style: { opacity: O },
                                    children: [
                                        null == x
                                            ? null
                                            : 'string' == typeof x
                                              ? (0, i.jsx)(a.Avatar, {
                                                    src: x,
                                                    size: a.AvatarSizes.SIZE_40,
                                                    className: v.avatar,
                                                    'aria-hidden': !0
                                                })
                                              : (0, i.jsx)('div', {
                                                    className: v.avatar,
                                                    children: x
                                                }),
                                        (0, i.jsxs)('div', {
                                            className: v.details,
                                            children: [
                                                (0, i.jsx)(a.Text, {
                                                    color: 'interactive-normal',
                                                    variant: 'text-sm/semibold',
                                                    lineClamp: 2,
                                                    children: I
                                                }),
                                                null != S
                                                    ? (0, i.jsx)(a.Text, {
                                                          color: 'interactive-normal',
                                                          variant: 'text-sm/normal',
                                                          lineClamp: null != t ? t * (b ? 2 : 1) : void 0,
                                                          children: S
                                                      })
                                                    : null,
                                                (function () {
                                                    let e = 'function' == typeof p ? p(b) : p;
                                                    return null != p
                                                        ? (0, i.jsx)(a.Text, {
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
                                                                  ? (0, i.jsx)(a.Button, {
                                                                        className: v.button,
                                                                        size: a.Button.Sizes.SMALL,
                                                                        color: a.Button.Colors.GREEN,
                                                                        onClick: R,
                                                                        children: null != Z ? Z : g.intl.string(g.t.BddRzc)
                                                                    })
                                                                  : null,
                                                              null != h
                                                                  ? (0, i.jsx)(a.Button, {
                                                                        className: v.button,
                                                                        size: a.Button.Sizes.SMALL,
                                                                        look: a.Button.Looks.OUTLINED,
                                                                        color: a.Button.Colors.PRIMARY,
                                                                        onClick: w,
                                                                        children: null != E ? E : g.intl.string(g.t['ETE/oK'])
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
                'aria-label': g.intl.string(g.t.LnEgqa)
            })
        ]
    });
});
function S(e) {
    let {
        springs: { opacity: t, scale: n, transform: l, height: o },
        index: r,
        children: a,
        locked: u
    } = e;
    return (0, i.jsx)(s.animated.div, {
        className: v.animationWrapper,
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
function I(e) {
    let { notification: t, index: n, locked: o, transitionState: r, cleanUp: s } = e,
        {
            id: a,
            props: { onNotificationShow: d, onDismissClick: c, onNotificationClick: h, onConfirmClick: m, onCancelClick: g, renderFooter: E }
        } = t,
        Z = l.useCallback(() => {
            d(a);
        }, [d, a]),
        C = l.useCallback(
            (e) => {
                u.Z.updateNotificationStatus(a), null == c || c(e, a);
            },
            [a, c]
        ),
        I = l.useCallback(
            (e) => {
                null == h || h(e, a);
            },
            [h, a]
        ),
        _ = l.useCallback(
            (e) => {
                null == m || m(e, a);
            },
            [m, a]
        ),
        O = l.useCallback(
            (e) => {
                null == g || g(e, a);
            },
            [g, a]
        ),
        N = l.useCallback((e) => (null == E ? void 0 : E(e, a)), [E, a]),
        {
            props: { onNotificationShow: y, onDismissClick: T, renderFooter: j, onNotificationClick: b, onConfirmClick: L, onCancelClick: R, ...w },
            status: k
        } = t,
        { ref: A, springs: M } = (0, p.X4)(t.id, r, s);
    return (0, i.jsx)(S, {
        transitionState: r,
        springs: M,
        index: n,
        locked: o,
        children: (0, i.jsx)(f.Z, {
            observe: 0 === n,
            className: v.clickZone,
            children: (0, i.jsx)(x, {
                ...w,
                containerRef: A,
                notificationId: t.id,
                onNotificationShow: 0 === n ? Z : void 0,
                onDismissClick: C,
                onNotificationClick: null != h ? I : void 0,
                onConfirmClick: null != m ? _ : void 0,
                onCancelClick: null != g ? O : void 0,
                renderFooter: N,
                expand: !1,
                index: n,
                locked: o,
                status: k,
                contentOpacity: M.contentOpacity
            })
        })
    });
}

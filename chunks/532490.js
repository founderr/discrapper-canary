l.d(t, {
    p: function () {
        return n;
    }
}),
    l(47120);
var n,
    i,
    a = l(200651),
    s = l(192379),
    r = l(120356),
    o = l.n(r),
    c = l(100621),
    d = l(442837),
    u = l(481060),
    x = l(393238),
    m = l(434650),
    h = l(607070),
    g = l(594174),
    v = l(5192),
    f = l(603368),
    C = l(856682),
    j = l(284019),
    p = l(388032),
    N = l(399637);
((i = n || (n = {})).LEFT = 'left'), (i.RIGHT = 'right');
t.Z = s.memo(function (e) {
    let { guildId: t, primaryColor: l, children: n, canSignCharter: i = !0, signed: r, onSignCharter: Z, animationDelayMs: T = 1000, signHintButtonText: S, signHintHelperText: y, signHintPosition: w = 'left', className: H, fullHeight: b, showDisclaimer: M } = e,
        _ = s.useRef(null),
        A = s.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), null == Z || Z(!r);
            },
            [Z, r]
        ),
        [B, I] = s.useState(!1),
        [k, R] = s.useState(!1),
        E = s.useRef(null),
        D = s.useCallback(
            (e) => {
                e &&
                    (E.current = setTimeout(() => {
                        R(!0);
                    }, T));
            },
            [T]
        ),
        G = (0, m.O)(D),
        P = (0, d.e7)([h.Z], () => h.Z.useReducedMotion),
        Y = (0, d.e7)([g.default], () => g.default.getCurrentUser()),
        [V, L] = (0, u.useSpring)(() => {
            var e, t;
            return (
                (e = w),
                (t = P),
                'left' === e
                    ? {
                          right: t ? 68 : 0,
                          config: c.config.stiff
                      }
                    : {
                          left: t ? 68 : 0,
                          config: c.config.stiff
                      }
            );
        }),
        [F, z] = (0, u.useSpring)(() => ({
            opacity: 0,
            top: -24,
            onRest: () => {
                r && I(!0);
            }
        }));
    s.useEffect(() => {
        if (k)
            L({
                ...('left' === w
                    ? {
                          right: 68,
                          config: c.config.stiff
                      }
                    : {
                          left: 280,
                          config: c.config.stiff
                      })
            }),
                z({
                    opacity: 1,
                    top: -24
                });
        k &&
            r &&
            z({
                opacity: 0,
                top: 0
            });
    }, [k, r, w]),
        s.useEffect(
            () => () => {
                null != E.current && clearTimeout(E.current);
            },
            []
        );
    let U = o()(N.signHintAnimationContainer, B && N.noDisplay, 'left' === w ? N.signTextLeft : N.signTextRight),
        O = (0, u.useToken)(u.tokens.colors.BG_SURFACE_OVERLAY),
        W = (0, u.useToken)(u.tokens.colors.BG_BRAND),
        K = null != l ? l : W.hex(),
        q = (0, f.j1)(K, O.hex()),
        { height: J = 87, ref: Q } = (0, x.Z)(i),
        $ = (0, u.useTransition)(i, {
            from: {
                opacity: 0,
                translateY: J
            },
            enter: {
                opacity: 1,
                translateY: 0
            },
            config: c.config.stiff
        });
    return (0, a.jsx)('div', {
        className: o()(N.container, H),
        ref: G,
        children: (0, a.jsx)(C.Z, {
            fullHeight: b,
            children: (0, a.jsxs)('div', {
                className: o()(N.overviewSidebarWrapper, b && N.fullHeight),
                children: [
                    (0, a.jsx)(u.ScrollerNone, {
                        fade: !0,
                        className: N.overviewSidebarContent,
                        children: (0, a.jsx)('div', {
                            className: N.scrollContentContainer,
                            children: n
                        })
                    }),
                    $(
                        (e, l) =>
                            l &&
                            (0, a.jsx)(c.animated.div, {
                                className: N.signatureBlockContainer,
                                style: e,
                                children: (0, a.jsx)('div', {
                                    ref: Q,
                                    children: (0, a.jsxs)('div', {
                                        className: N.signatureBlock,
                                        children: [
                                            (0, a.jsx)('div', {
                                                ref: _,
                                                className: N.signHintContainer,
                                                children: (0, a.jsxs)(c.animated.div, {
                                                    className: U,
                                                    style: {
                                                        ...V,
                                                        ...F
                                                    },
                                                    children: [
                                                        (0, a.jsx)('div', {
                                                            className: N.signContainerButton,
                                                            children: (0, a.jsxs)(j.Z, {
                                                                themeColor: K,
                                                                className: N.signButton,
                                                                size: u.Button.Sizes.SMALL,
                                                                onClick: (e) => {
                                                                    var t;
                                                                    null === (t = _.current) || void 0 === t || t.scrollIntoView({ behavior: 'smooth' }), A(e);
                                                                },
                                                                children: [
                                                                    (0, a.jsx)('div', {
                                                                        className: o()(N.signCarot, { [N.signCarotCustomColors]: null != q }),
                                                                        style: null != q ? q : { borderColor: K }
                                                                    }),
                                                                    null != S ? S : p.intl.string(p.t.ySpZ9P)
                                                                ]
                                                            })
                                                        }),
                                                        (0, a.jsx)(u.Text, {
                                                            variant: 'text-xs/normal',
                                                            color: 'text-muted',
                                                            className: N.signHintHelperText,
                                                            children: null != y ? S : p.intl.string(p.t.Pwzyy8)
                                                        }),
                                                        M &&
                                                            (0, a.jsx)(u.Text, {
                                                                variant: 'text-xs/normal',
                                                                color: 'text-muted',
                                                                className: N.signHintHelperText,
                                                                children: p.intl.format(p.t.msDbmZ, {})
                                                            })
                                                    ]
                                                })
                                            }),
                                            (0, a.jsxs)(u.Clickable, {
                                                onClick: A,
                                                className: o()(N.signatureContainer, { [N.clickable]: null != Z }),
                                                children: [
                                                    (0, a.jsx)(u.Text, {
                                                        variant: 'text-md/normal',
                                                        color: 'none',
                                                        children: 'x'
                                                    }),
                                                    r
                                                        ? (0, a.jsx)(u.Text, {
                                                              variant: 'text-lg/normal',
                                                              color: 'header-primary',
                                                              className: N.signatureText,
                                                              children: v.ZP.getName(t, null, Y)
                                                          })
                                                        : (0, a.jsx)(u.Text, {
                                                              variant: 'text-lg/normal',
                                                              color: 'none',
                                                              className: N.signatureText,
                                                              children: p.intl.string(p.t.RC1D19)
                                                          })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                    )
                ]
            })
        })
    });
});

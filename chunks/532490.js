l.d(t, {
    p: function () {
        return n;
    }
}),
    l(47120);
var n,
    i,
    a = l(200651),
    r = l(192379),
    s = l(120356),
    o = l.n(s),
    d = l(100621),
    c = l(442837),
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
    N = l(906326);
((i = n || (n = {})).LEFT = 'left'), (i.RIGHT = 'right');
t.Z = r.memo(function (e) {
    let { guildId: t, primaryColor: l, children: n, canSignCharter: i = !0, signed: s, onSignCharter: Z, animationDelayMs: T = 1000, signHintButtonText: S, signHintHelperText: y, signHintPosition: w = 'left', className: H, fullHeight: M, showDisclaimer: b } = e,
        L = r.useRef(null),
        _ = r.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), null == Z || Z(!s);
            },
            [Z, s]
        ),
        [B, A] = r.useState(!1),
        [I, R] = r.useState(!1),
        k = r.useRef(null),
        E = r.useCallback(
            (e) => {
                e &&
                    (k.current = setTimeout(() => {
                        R(!0);
                    }, T));
            },
            [T]
        ),
        D = (0, m.O)(E),
        G = (0, c.e7)([h.Z], () => h.Z.useReducedMotion),
        P = (0, c.e7)([g.default], () => g.default.getCurrentUser()),
        [Y, V] = (0, u.useSpring)(() => {
            var e, t;
            return (
                (e = w),
                (t = G),
                'left' === e
                    ? {
                          right: t ? 68 : 0,
                          config: d.config.stiff
                      }
                    : {
                          left: t ? 68 : 0,
                          config: d.config.stiff
                      }
            );
        }),
        [F, z] = (0, u.useSpring)(() => ({
            opacity: 0,
            top: -24,
            onRest: () => {
                s && A(!0);
            }
        }));
    r.useEffect(() => {
        if (I)
            V({
                ...('left' === w
                    ? {
                          right: 68,
                          config: d.config.stiff
                      }
                    : {
                          left: 280,
                          config: d.config.stiff
                      })
            }),
                z({
                    opacity: 1,
                    top: -24
                });
        I &&
            s &&
            z({
                opacity: 0,
                top: 0
            });
    }, [I, s, w]),
        r.useEffect(
            () => () => {
                null != k.current && clearTimeout(k.current);
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
            config: d.config.stiff
        });
    return (0, a.jsx)('div', {
        className: o()(N.container, H),
        ref: D,
        children: (0, a.jsx)(C.Z, {
            fullHeight: M,
            children: (0, a.jsxs)('div', {
                className: o()(N.overviewSidebarWrapper, M && N.fullHeight),
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
                            (0, a.jsx)(d.animated.div, {
                                className: N.signatureBlockContainer,
                                style: e,
                                children: (0, a.jsx)('div', {
                                    ref: Q,
                                    children: (0, a.jsxs)('div', {
                                        className: N.signatureBlock,
                                        children: [
                                            (0, a.jsx)('div', {
                                                ref: L,
                                                className: N.signHintContainer,
                                                children: (0, a.jsxs)(d.animated.div, {
                                                    className: U,
                                                    style: {
                                                        ...Y,
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
                                                                    null === (t = L.current) || void 0 === t || t.scrollIntoView({ behavior: 'smooth' }), _(e);
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
                                                        b &&
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
                                                onClick: _,
                                                className: o()(N.signatureContainer, { [N.clickable]: null != Z }),
                                                children: [
                                                    (0, a.jsx)(u.Text, {
                                                        variant: 'text-md/normal',
                                                        color: 'none',
                                                        children: 'x'
                                                    }),
                                                    s
                                                        ? (0, a.jsx)(u.Text, {
                                                              variant: 'text-lg/normal',
                                                              color: 'header-primary',
                                                              className: N.signatureText,
                                                              children: v.ZP.getName(t, null, P)
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

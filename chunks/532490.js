t.d(l, {
    p: function () {
        return a;
    }
}),
    t(47120);
var a,
    s,
    n = t(735250),
    i = t(470079),
    r = t(120356),
    o = t.n(r),
    c = t(212433),
    d = t(442837),
    u = t(481060),
    x = t(393238),
    m = t(434650),
    h = t(607070),
    g = t(594174),
    C = t(5192),
    v = t(603368),
    f = t(856682),
    j = t(284019),
    N = t(689938),
    p = t(906326);
((s = a || (a = {})).LEFT = 'left'), (s.RIGHT = 'right');
l.Z = i.memo(function (e) {
    let { guildId: l, primaryColor: t, children: a, canSignCharter: s = !0, signed: r, onSignCharter: _, animationDelayMs: T = 1000, signHintButtonText: E, signHintHelperText: S, signHintPosition: Z = 'left', className: M, fullHeight: A, showDisclaimer: I } = e,
        L = i.useRef(null),
        y = i.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), null == _ || _(!r);
            },
            [_, r]
        ),
        [H, V] = i.useState(!1),
        [w, R] = i.useState(!1),
        b = i.useRef(null),
        P = i.useCallback(
            (e) => {
                e &&
                    (b.current = setTimeout(() => {
                        R(!0);
                    }, T));
            },
            [T]
        ),
        U = (0, m.O)(P),
        B = (0, d.e7)([h.Z], () => h.Z.useReducedMotion),
        G = (0, d.e7)([g.default], () => g.default.getCurrentUser()),
        [k, O] = (0, u.useSpring)(() => {
            var e, l;
            return (
                (e = Z),
                (l = B),
                'left' === e
                    ? {
                          right: l ? 68 : 0,
                          config: c.config.stiff
                      }
                    : {
                          left: l ? 68 : 0,
                          config: c.config.stiff
                      }
            );
        }),
        [W, D] = (0, u.useSpring)(() => ({
            opacity: 0,
            top: -24,
            onRest: () => {
                r && V(!0);
            }
        }));
    i.useEffect(() => {
        if (w)
            O({
                ...('left' === Z
                    ? {
                          right: 68,
                          config: c.config.stiff
                      }
                    : {
                          left: 280,
                          config: c.config.stiff
                      })
            }),
                D({
                    opacity: 1,
                    top: -24
                });
        w &&
            r &&
            D({
                opacity: 0,
                top: 0
            });
    }, [w, r, Z]),
        i.useEffect(
            () => () => {
                null != b.current && clearTimeout(b.current);
            },
            []
        );
    let Y = o()(p.signHintAnimationContainer, H && p.noDisplay, 'left' === Z ? p.signTextLeft : p.signTextRight),
        F = (0, u.useToken)(u.tokens.colors.BG_SURFACE_OVERLAY),
        z = (0, u.useToken)(u.tokens.colors.BG_BRAND),
        X = null != t ? t : z.hex(),
        J = (0, v.j1)(X, F.hex()),
        { height: $ = 87, ref: q } = (0, x.Z)(s),
        K = (0, u.useTransition)(s, {
            from: {
                opacity: 0,
                translateY: $
            },
            enter: {
                opacity: 1,
                translateY: 0
            },
            config: c.config.stiff
        });
    return (0, n.jsx)('div', {
        className: o()(p.container, M),
        ref: U,
        children: (0, n.jsx)(f.Z, {
            fullHeight: A,
            children: (0, n.jsxs)('div', {
                className: o()(p.overviewSidebarWrapper, A && p.fullHeight),
                children: [
                    (0, n.jsx)(u.ScrollerNone, {
                        fade: !0,
                        className: p.overviewSidebarContent,
                        children: (0, n.jsx)('div', {
                            className: p.scrollContentContainer,
                            children: a
                        })
                    }),
                    K(
                        (e, t) =>
                            t &&
                            (0, n.jsx)(c.animated.div, {
                                className: p.signatureBlockContainer,
                                style: e,
                                children: (0, n.jsx)('div', {
                                    ref: q,
                                    children: (0, n.jsxs)('div', {
                                        className: p.signatureBlock,
                                        children: [
                                            (0, n.jsx)('div', {
                                                ref: L,
                                                className: p.signHintContainer,
                                                children: (0, n.jsxs)(c.animated.div, {
                                                    className: Y,
                                                    style: {
                                                        ...k,
                                                        ...W
                                                    },
                                                    children: [
                                                        (0, n.jsx)('div', {
                                                            className: p.signContainerButton,
                                                            children: (0, n.jsxs)(j.Z, {
                                                                themeColor: X,
                                                                className: p.signButton,
                                                                size: u.Button.Sizes.SMALL,
                                                                onClick: (e) => {
                                                                    var l;
                                                                    null === (l = L.current) || void 0 === l || l.scrollIntoView({ behavior: 'smooth' }), y(e);
                                                                },
                                                                children: [
                                                                    (0, n.jsx)('div', {
                                                                        className: o()(p.signCarot, { [p.signCarotCustomColors]: null != J }),
                                                                        style: null != J ? J : { borderColor: X }
                                                                    }),
                                                                    null != E ? E : N.Z.Messages.CLAN_SETUP_OVERVIEW_SIGN_CTA
                                                                ]
                                                            })
                                                        }),
                                                        (0, n.jsx)(u.Text, {
                                                            variant: 'text-xs/normal',
                                                            color: 'text-muted',
                                                            className: p.signHintHelperText,
                                                            children: null != S ? E : N.Z.Messages.CLAN_SETUP_OVERVIEW_SIGN_HELP
                                                        }),
                                                        I &&
                                                            (0, n.jsx)(u.Text, {
                                                                variant: 'text-xs/normal',
                                                                color: 'text-muted',
                                                                className: p.signHintHelperText,
                                                                children: N.Z.Messages.CLAN_SETUP_OVERVIEW_SIGN_DISCLAIMER.format()
                                                            })
                                                    ]
                                                })
                                            }),
                                            (0, n.jsxs)(u.Clickable, {
                                                onClick: y,
                                                className: o()(p.signatureContainer, { [p.clickable]: null != _ }),
                                                children: [
                                                    (0, n.jsx)(u.Text, {
                                                        variant: 'text-md/normal',
                                                        color: 'none',
                                                        children: 'x'
                                                    }),
                                                    r
                                                        ? (0, n.jsx)(u.Text, {
                                                              variant: 'text-lg/normal',
                                                              color: 'header-primary',
                                                              className: p.signatureText,
                                                              children: C.ZP.getName(l, null, G)
                                                          })
                                                        : (0, n.jsx)(u.Text, {
                                                              variant: 'text-lg/normal',
                                                              color: 'none',
                                                              className: p.signatureText,
                                                              children: N.Z.Messages.CLAN_SETUP_OVERVIEW_SIGNATURE
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

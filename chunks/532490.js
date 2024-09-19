t.d(l, {
    p: function () {
        return a;
    }
}),
    t(47120);
var a,
    n,
    s = t(735250),
    i = t(470079),
    r = t(120356),
    o = t.n(r),
    c = t(526629),
    d = t(442837),
    u = t(481060),
    x = t(393238),
    h = t(434650),
    m = t(607070),
    g = t(594174),
    C = t(5192),
    v = t(603368),
    f = t(856682),
    j = t(284019),
    p = t(689938),
    N = t(906326);
((n = a || (a = {})).LEFT = 'left'), (n.RIGHT = 'right');
l.Z = i.memo(function (e) {
    let { guildId: l, primaryColor: t, children: a, canSignCharter: n = !0, signed: r, onSignCharter: _, animationDelayMs: T = 1000, signHintButtonText: E, signHintHelperText: S, signHintPosition: Z = 'left', className: L, fullHeight: M, showDisclaimer: A } = e,
        I = i.useRef(null),
        y = i.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), null == _ || _(!r);
            },
            [_, r]
        ),
        [w, H] = i.useState(!1),
        [R, V] = i.useState(!1),
        b = i.useRef(null),
        P = i.useCallback(
            (e) => {
                e &&
                    (b.current = setTimeout(() => {
                        V(!0);
                    }, T));
            },
            [T]
        ),
        U = (0, h.O)(P),
        B = (0, d.e7)([m.Z], () => m.Z.useReducedMotion),
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
                r && H(!0);
            }
        }));
    i.useEffect(() => {
        if (R)
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
        R &&
            r &&
            D({
                opacity: 0,
                top: 0
            });
    }, [R, r, Z]),
        i.useEffect(
            () => () => {
                null != b.current && clearTimeout(b.current);
            },
            []
        );
    let Y = o()(N.signHintAnimationContainer, w && N.noDisplay, 'left' === Z ? N.signTextLeft : N.signTextRight),
        F = (0, u.useToken)(u.tokens.colors.BG_SURFACE_OVERLAY),
        z = (0, u.useToken)(u.tokens.colors.BG_BRAND),
        X = null != t ? t : z.hex(),
        J = (0, v.j1)(X, F.hex()),
        { height: $ = 87, ref: q } = (0, x.Z)(n),
        K = (0, u.useTransition)(n, {
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
    return (0, s.jsx)('div', {
        className: o()(N.container, L),
        ref: U,
        children: (0, s.jsx)(f.Z, {
            fullHeight: M,
            children: (0, s.jsxs)('div', {
                className: o()(N.overviewSidebarWrapper, M && N.fullHeight),
                children: [
                    (0, s.jsx)(u.ScrollerNone, {
                        fade: !0,
                        className: N.overviewSidebarContent,
                        children: (0, s.jsx)('div', {
                            className: N.scrollContentContainer,
                            children: a
                        })
                    }),
                    K(
                        (e, t) =>
                            t &&
                            (0, s.jsx)(c.animated.div, {
                                className: N.signatureBlockContainer,
                                style: e,
                                children: (0, s.jsx)('div', {
                                    ref: q,
                                    children: (0, s.jsxs)('div', {
                                        className: N.signatureBlock,
                                        children: [
                                            (0, s.jsx)('div', {
                                                ref: I,
                                                className: N.signHintContainer,
                                                children: (0, s.jsxs)(c.animated.div, {
                                                    className: Y,
                                                    style: {
                                                        ...k,
                                                        ...W
                                                    },
                                                    children: [
                                                        (0, s.jsx)('div', {
                                                            className: N.signContainerButton,
                                                            children: (0, s.jsxs)(j.Z, {
                                                                themeColor: X,
                                                                className: N.signButton,
                                                                size: u.Button.Sizes.SMALL,
                                                                onClick: (e) => {
                                                                    var l;
                                                                    null === (l = I.current) || void 0 === l || l.scrollIntoView({ behavior: 'smooth' }), y(e);
                                                                },
                                                                children: [
                                                                    (0, s.jsx)('div', {
                                                                        className: o()(N.signCarot, { [N.signCarotCustomColors]: null != J }),
                                                                        style: null != J ? J : { borderColor: X }
                                                                    }),
                                                                    null != E ? E : p.Z.Messages.CLAN_SETUP_OVERVIEW_SIGN_CTA
                                                                ]
                                                            })
                                                        }),
                                                        (0, s.jsx)(u.Text, {
                                                            variant: 'text-xs/normal',
                                                            color: 'text-muted',
                                                            className: N.signHintHelperText,
                                                            children: null != S ? E : p.Z.Messages.CLAN_SETUP_OVERVIEW_SIGN_HELP
                                                        }),
                                                        A &&
                                                            (0, s.jsx)(u.Text, {
                                                                variant: 'text-xs/normal',
                                                                color: 'text-muted',
                                                                className: N.signHintHelperText,
                                                                children: p.Z.Messages.CLAN_SETUP_OVERVIEW_SIGN_DISCLAIMER.format()
                                                            })
                                                    ]
                                                })
                                            }),
                                            (0, s.jsxs)(u.Clickable, {
                                                onClick: y,
                                                className: o()(N.signatureContainer, { [N.clickable]: null != _ }),
                                                children: [
                                                    (0, s.jsx)(u.Text, {
                                                        variant: 'text-md/normal',
                                                        color: 'none',
                                                        children: 'x'
                                                    }),
                                                    r
                                                        ? (0, s.jsx)(u.Text, {
                                                              variant: 'text-lg/normal',
                                                              color: 'header-primary',
                                                              className: N.signatureText,
                                                              children: C.ZP.getName(l, null, G)
                                                          })
                                                        : (0, s.jsx)(u.Text, {
                                                              variant: 'text-lg/normal',
                                                              color: 'none',
                                                              className: N.signatureText,
                                                              children: p.Z.Messages.CLAN_SETUP_OVERVIEW_SIGNATURE
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

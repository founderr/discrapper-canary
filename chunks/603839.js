n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    o = n(100621),
    c = n(442837),
    d = n(481060),
    u = n(207796),
    h = n(889711),
    m = n(931240),
    p = n(970606),
    g = n(650461),
    f = n(35313),
    _ = n(284019),
    E = n(672775),
    I = n(601463),
    C = n(192565),
    v = n(641037),
    S = n(388032),
    N = n(837275);
let T = {
    mass: 1,
    tension: 600,
    friction: 60,
    clamp: !0
};
function x(e) {
    let { guildId: t, onClose: n } = e,
        l = (0, g.Wg)(),
        {
            progress: x,
            errors: b,
            submitting: A
        } = (0, c.cj)([g.ZP], () => {
            var e, n, i, r;
            return {
                progress: null !== (r = null === (e = g.ZP.getStateForGuild(t)) || void 0 === e ? void 0 : e.progress) && void 0 !== r ? r : l,
                errors: null === (n = g.ZP.getStateForGuild(t)) || void 0 === n ? void 0 : n.errors,
                submitting: null === (i = g.ZP.getStateForGuild(t)) || void 0 === i ? void 0 : i.submitting
            };
        }),
        Z = r.useMemo(() => (0, v.G)(b), [b]),
        [y, L] = r.useState(!1),
        [R, O] = r.useState(window.innerWidth),
        [P, j] = r.useState(1),
        [D, M] = r.useState(!0),
        w = (0, f.f)(),
        k = (0, d.useSpring)({
            opacity: P,
            config: T,
            onStart: () => M(!0),
            onRest: () => M(1 === P)
        }),
        U = (0, d.useSpring)(
            {
                transform: 'translateX('.concat(1 === P ? 0 : (-1 * (R - 380)) / 2 + 47.5, 'px)'),
                config: T
            },
            'respect-motion-settings'
        ),
        G = (0, d.useTransition)(0 === P, {
            from: { opacity: 0 },
            enter: {
                opacity: 1,
                delay: 500
            },
            config: T
        }),
        B = (0, d.useTransition)(0 === P, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: T
        }),
        H = r.useCallback(
            (e) => {
                if (e === Z.length) j(0), (0, p.Lp)(t, 'signature');
                else if (0 === P) j(1);
                else {
                    var n;
                    m._9(t, {
                        currentStep: e,
                        furthestStep: Math.max(null !== (n = x.furthestStep) && void 0 !== n ? n : 0, e)
                    });
                }
            },
            [P, t, x.furthestStep, Z.length]
        );
    r.useEffect(() => {
        (0, p.Lp)(t, (0, p.Qh)(x.currentStep));
    }, [t, x.currentStep]),
        r.useEffect(() => {
            let e = (0, h.pP)((0, s.debounce)(() => O(window.innerWidth), 250));
            return (0, h.YP)(e, document.body), () => (0, h.UC)(e, document.body);
        }, [P, D]);
    let V = r.useMemo(() => null != b && Object.values(b).some((e) => null != e), [b]),
        F = r.useMemo(() => (null != b && Object.values(b).length > 0 ? (0, v.G)(b).find((e) => e.hasError) : null), [b]),
        z = r.useCallback(() => {
            j(1), m._9(t, { currentStep: null == F ? void 0 : F.index });
        }, [null == F ? void 0 : F.index, t]),
        Y = r.useCallback(() => {
            (0, u.fH)(u.v0.ADMIN_UPSELL);
        }, []),
        W = r.useCallback(() => {
            (0, v.V)({
                guildId: t,
                onSuccess: () => {
                    Y(), n();
                },
                progress: x
            });
        }, [t, x, Y, n]),
        K = r.useRef(null),
        q =
            null != F
                ? (0, i.jsxs)('div', {
                      className: N.tooltipContents,
                      children: [
                          (0, i.jsx)(d.WarningIcon, {
                              size: 'xs',
                              color: 'currentColor',
                              className: N.errorIcon
                          }),
                          (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)(d.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'header-primary',
                                      children: S.intl.string(S.t.M6w76e)
                                  }),
                                  (0, i.jsx)(d.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'text-muted',
                                      children: S.intl.format(S.t.nftD29, {
                                          backHook: (e, t) =>
                                              (0, i.jsx)(
                                                  d.Anchor,
                                                  {
                                                      className: N.errorLink,
                                                      onClick: z,
                                                      children: e
                                                  },
                                                  t
                                              )
                                      })
                                  })
                              ]
                          })
                      ]
                  })
                : null;
    return (0, i.jsx)(o.animated.div, {
        ref: K,
        style: w,
        className: N.modal,
        children: (0, i.jsxs)(d.FocusRingScope, {
            containerRef: K,
            children: [
                (0, i.jsx)(d.Button, {
                    className: N.close,
                    look: d.Button.Looks.OUTLINED,
                    size: d.Button.Sizes.MEDIUM,
                    color: d.Button.Colors.PRIMARY,
                    onClick: n,
                    children: S.intl.string(S.t.TZftPD)
                }),
                (0, i.jsxs)('div', {
                    className: N.content,
                    children: [
                        (0, i.jsxs)('div', {
                            className: N.panel,
                            children: [
                                (0, i.jsx)(o.animated.div, {
                                    style: k,
                                    className: a()(N.stepsContainer, { [N.hidden]: !D }),
                                    children: (0, i.jsx)(C.Z, { guildId: t })
                                }),
                                (0, i.jsx)('div', {
                                    className: a()(N.navigationContainer, { [N.elevatedNavigationContainer]: !D }),
                                    children: (0, i.jsx)(E.Z, {
                                        steps: Z,
                                        progress: x,
                                        updateCurrentStep: H,
                                        animationStyle: k,
                                        animationClassName: a()({ [N.hidden]: !D })
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)(o.animated.div, {
                            style: k,
                            className: a()(N.divider, {
                                [N.hidden]: !D,
                                [N.dividerResponsive]: D
                            })
                        }),
                        (0, i.jsx)(o.animated.div, {
                            style: U,
                            className: a()(N.sidebar, { [N.sidebarResponsive]: D }),
                            children: (0, i.jsx)(I.Z, {
                                guildId: t,
                                signed: y,
                                setSigned: D ? void 0 : L,
                                sidebarWidth: 380,
                                windowWidth: R,
                                transition: G,
                                brandPrimaryColor: x.brandPrimaryColor
                            })
                        })
                    ]
                }),
                B(
                    (e, t) =>
                        t &&
                        (0, i.jsx)(o.animated.div, {
                            style: e,
                            className: N.submit,
                            children: (0, i.jsx)(d.Tooltip, {
                                color: d.Tooltip.Colors.GREY,
                                tooltipClassName: N.tooltip,
                                text: q,
                                'aria-label': null != F ? S.intl.string(S.t.M6w76e) : void 0,
                                shouldShow: null != F,
                                forceOpen: null != F,
                                children: (e) =>
                                    (0, i.jsx)(_.Z, {
                                        ...e,
                                        themeColor: x.brandPrimaryColor,
                                        disabled: !y || V,
                                        submitting: A,
                                        look: d.Button.Looks.FILLED,
                                        size: d.Button.Sizes.MEDIUM,
                                        color: d.Button.Colors.BRAND,
                                        onClick: W,
                                        children: S.intl.string(S.t['8SuVoK'])
                                    })
                            })
                        })
                )
            ]
        })
    });
}

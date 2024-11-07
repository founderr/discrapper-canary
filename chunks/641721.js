n.d(t, {
    Z: function () {
        return A;
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
    f = n(41152),
    _ = n(35313),
    E = n(284019),
    I = n(346524),
    C = n(158120),
    v = n(601463),
    S = n(308083),
    N = n(388032),
    T = n(348944);
let x = {
    mass: 1,
    tension: 600,
    friction: 60,
    clamp: !0
};
function A(e) {
    let { guildId: t, onClose: n } = e,
        l = (0, g.Wg)(),
        {
            progress: A,
            errors: b,
            submitting: Z
        } = (0, c.cj)([g.ZP], () => {
            var e, n, i, r;
            return {
                progress: null !== (r = null === (e = g.ZP.getStateForGuild(t)) || void 0 === e ? void 0 : e.progress) && void 0 !== r ? r : l,
                errors: null === (n = g.ZP.getStateForGuild(t)) || void 0 === n ? void 0 : n.errors,
                submitting: null === (i = g.ZP.getStateForGuild(t)) || void 0 === i ? void 0 : i.submitting
            };
        }),
        y = r.useMemo(() => (0, f.D)(b), [b]),
        [L, R] = r.useState(window.innerWidth),
        j = Number(A.currentStep) >= S.IS.THANK_YOU_END,
        [O, P] = r.useState(j ? 0 : 1),
        D = (0, _.f)(),
        M = (0, d.useSpring)(
            {
                opacity: O,
                config: x
            },
            'respect-motion-settings'
        ),
        w = (0, d.useTransition)(j, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: x
        }),
        k = r.useCallback(
            (e) => {
                var n;
                e === y.length - 1 ? (P(0), (0, p.Lp)(t, 'fake_door_end')) : 0 === O && P(1),
                    m._9(t, {
                        currentStep: e,
                        furthestStep: Math.max(null !== (n = A.furthestStep) && void 0 !== n ? n : 0, e)
                    });
            },
            [O, t, A.furthestStep, y]
        );
    r.useEffect(() => {
        (0, p.Gx)({
            guildId: t,
            signupPage: (0, f.F)(A.currentStep),
            actionType: p.eI.NAVIGATE_STEP
        });
    }, [t, A.currentStep]),
        r.useEffect(() => {
            let e = (0, h.pP)((0, s.debounce)(() => R(window.innerWidth), 250));
            return (0, h.YP)(e, document.body), () => (0, h.UC)(e, document.body);
        }, [O, j]);
    let U = r.useMemo(() => null != b && Object.values(b).some((e) => null != e), [b]),
        G = r.useMemo(() => (null != b && Object.values(b).length > 0 ? (0, f.D)(b).find((e) => e.hasError) : null), [b]),
        B = r.useCallback(() => {
            P(1), m._9(t, { currentStep: null == G ? void 0 : G.index });
        }, [null == G ? void 0 : G.index, t]),
        H = r.useCallback(() => {
            (0, u.fH)(u.v0.ADMIN_UPSELL), (0, u.kw)();
        }, []),
        V = r.useCallback(() => {
            H(), n();
        }, [H, n]),
        F = r.useCallback(() => {
            j && H(), n();
        }, [j, n, H]),
        z = r.useRef(null),
        Y =
            null != G
                ? (0, i.jsxs)('div', {
                      className: T.tooltipContents,
                      children: [
                          (0, i.jsx)(d.WarningIcon, {
                              size: 'xs',
                              color: 'currentColor',
                              className: T.errorIcon
                          }),
                          (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)(d.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'header-primary',
                                      children: N.intl.string(N.t.M6w76e)
                                  }),
                                  (0, i.jsx)(d.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'text-muted',
                                      children: N.intl.format(N.t.nftD29, {
                                          backHook: (e, t) =>
                                              (0, i.jsx)(
                                                  d.Anchor,
                                                  {
                                                      className: T.errorLink,
                                                      onClick: B,
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
        ref: z,
        style: D,
        className: T.modal,
        children: (0, i.jsxs)(d.FocusRingScope, {
            containerRef: z,
            children: [
                (0, i.jsx)(d.Button, {
                    className: T.close,
                    look: d.Button.Looks.OUTLINED,
                    size: d.Button.Sizes.MEDIUM,
                    color: d.Button.Colors.PRIMARY,
                    onClick: F,
                    children: N.intl.string(N.t.TZftPD)
                }),
                (0, i.jsxs)('div', {
                    className: T.content,
                    children: [
                        (0, i.jsxs)('div', {
                            className: T.panel,
                            children: [
                                (0, i.jsx)('div', {
                                    className: a()(T.stepsContainer),
                                    children: (0, i.jsx)(C.Z, { guildId: t })
                                }),
                                (0, i.jsx)('div', {
                                    className: a()(T.navigationContainer, T.elevatedNavigationContainer),
                                    children: (0, i.jsx)(I.Z, {
                                        guildId: t,
                                        progress: A,
                                        updateCurrentStep: k,
                                        animationClassName: a()({ [T.hidden]: j }),
                                        inSettings: !1
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)(o.animated.div, {
                            className: a()(T.divider, {
                                [T.hidden]: j,
                                [T.dividerResponsive]: !j
                            })
                        }),
                        (0, i.jsx)(o.animated.div, {
                            style: M,
                            className: a()(T.sidebar, {
                                [T.sidebarResponsive]: !j,
                                [T.sidebarHidden]: j
                            }),
                            children: (0, i.jsx)(v.Z, {
                                guildId: t,
                                signed: !1,
                                setSigned: void 0,
                                sidebarWidth: j ? 0 : 380,
                                windowWidth: L,
                                brandPrimaryColor: A.brandPrimaryColor
                            })
                        })
                    ]
                }),
                w(
                    (e, t) =>
                        t &&
                        (0, i.jsx)(o.animated.div, {
                            style: e,
                            className: T.submit,
                            children: (0, i.jsx)(d.Tooltip, {
                                color: d.Tooltip.Colors.GREY,
                                tooltipClassName: T.tooltip,
                                text: Y,
                                'aria-label': null != G ? N.intl.string(N.t.M6w76e) : void 0,
                                shouldShow: null != G,
                                forceOpen: null != G,
                                children: (e) =>
                                    (0, i.jsx)(E.Z, {
                                        ...e,
                                        themeColor: A.brandPrimaryColor,
                                        disabled: !j || U,
                                        submitting: Z,
                                        look: d.Button.Looks.FILLED,
                                        size: d.Button.Sizes.MEDIUM,
                                        color: d.Button.Colors.BRAND,
                                        onClick: V,
                                        children: N.intl.string(N.t['8SuVoK'])
                                    })
                            })
                        })
                )
            ]
        })
    });
}

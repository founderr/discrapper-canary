n.d(t, {
    Z: function () {
        return Z;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    s = n(120356),
    r = n.n(s),
    l = n(392711),
    o = n(100621),
    c = n(442837),
    d = n(481060),
    u = n(207796),
    _ = n(889711),
    E = n(931240),
    h = n(970606),
    m = n(650461),
    I = n(41152),
    p = n(35313),
    g = n(284019),
    T = n(346524),
    S = n(158120),
    C = n(601463),
    f = n(308083),
    N = n(689938),
    A = n(837275);
let v = {
    mass: 1,
    tension: 600,
    friction: 60,
    clamp: !0
};
function Z(e) {
    let { guildId: t, onClose: n } = e,
        s = (0, m.Wg)(),
        {
            progress: Z,
            errors: L,
            submitting: R
        } = (0, c.cj)([m.ZP], () => {
            var e, n, i, a;
            return {
                progress: null !== (a = null === (e = m.ZP.getStateForGuild(t)) || void 0 === e ? void 0 : e.progress) && void 0 !== a ? a : s,
                errors: null === (n = m.ZP.getStateForGuild(t)) || void 0 === n ? void 0 : n.errors,
                submitting: null === (i = m.ZP.getStateForGuild(t)) || void 0 === i ? void 0 : i.submitting
            };
        }),
        O = a.useMemo(() => (0, I.D)(L), [L]),
        [x, b] = a.useState(window.innerWidth),
        M = Number(Z.currentStep) >= f.IS.THANK_YOU_END,
        [P, D] = a.useState(M ? 0 : 1),
        y = (0, p.f)(),
        j = (0, d.useSpring)(
            {
                opacity: P,
                config: v
            },
            'respect-motion-settings'
        ),
        U = (0, d.useTransition)(M, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: v
        }),
        G = a.useCallback(
            (e) => {
                var n;
                e === O.length - 1 ? (D(0), (0, h.Lp)(t, 'fake_door_end')) : 0 === P && D(1),
                    E._9(t, {
                        currentStep: e,
                        furthestStep: Math.max(null !== (n = Z.furthestStep) && void 0 !== n ? n : 0, e)
                    });
            },
            [P, t, Z.furthestStep, O]
        );
    a.useEffect(() => {
        (0, h.Gx)({
            guildId: t,
            signupPage: (0, I.F)(Z.currentStep),
            actionType: h.eI.NAVIGATE_STEP
        });
    }, [t, Z.currentStep]),
        a.useEffect(() => {
            let e = (0, _.pP)((0, l.debounce)(() => b(window.innerWidth), 250));
            return (0, _.YP)(e, document.body), () => (0, _.UC)(e, document.body);
        }, [P, M]);
    let w = a.useMemo(() => null != L && Object.values(L).some((e) => null != e), [L]),
        k = a.useMemo(() => (null != L && Object.values(L).length > 0 ? (0, I.D)(L).find((e) => e.hasError) : null), [L]),
        B = a.useCallback(() => {
            D(1), E._9(t, { currentStep: null == k ? void 0 : k.index });
        }, [null == k ? void 0 : k.index, t]),
        H = a.useCallback(() => {
            (0, u.fH)(u.v0.ADMIN_UPSELL), (0, u.kw)();
        }, []),
        V = a.useCallback(() => {
            H(), n();
        }, [H, n]),
        F = a.useCallback(() => {
            M && H(), n();
        }, [M, n, H]),
        Y = a.useRef(null),
        z =
            null != k
                ? (0, i.jsxs)('div', {
                      className: A.tooltipContents,
                      children: [
                          (0, i.jsx)(d.WarningIcon, {
                              size: 'xs',
                              color: 'currentColor',
                              className: A.errorIcon
                          }),
                          (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)(d.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'header-primary',
                                      children: N.Z.Messages.CLAN_SUBMIT_ERROR_TITLE
                                  }),
                                  (0, i.jsx)(d.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'text-muted',
                                      children: N.Z.Messages.CLAN_SUBMIT_ERROR_TEXT.format({
                                          backHook: (e, t) =>
                                              (0, i.jsx)(
                                                  d.Anchor,
                                                  {
                                                      className: A.errorLink,
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
        ref: Y,
        style: y,
        className: A.modal,
        children: (0, i.jsxs)(d.FocusRingScope, {
            containerRef: Y,
            children: [
                (0, i.jsx)(d.Button, {
                    className: A.close,
                    look: d.Button.Looks.OUTLINED,
                    size: d.Button.Sizes.MEDIUM,
                    color: d.Button.Colors.PRIMARY,
                    onClick: F,
                    children: N.Z.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
                }),
                (0, i.jsxs)('div', {
                    className: A.content,
                    children: [
                        (0, i.jsxs)('div', {
                            className: A.panel,
                            children: [
                                (0, i.jsx)('div', {
                                    className: r()(A.stepsContainer),
                                    children: (0, i.jsx)(S.Z, { guildId: t })
                                }),
                                (0, i.jsx)('div', {
                                    className: r()(A.navigationContainer, A.elevatedNavigationContainer),
                                    children: (0, i.jsx)(T.Z, {
                                        guildId: t,
                                        progress: Z,
                                        updateCurrentStep: G,
                                        animationClassName: r()({ [A.hidden]: M }),
                                        inSettings: !1
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)(o.animated.div, {
                            className: r()(A.divider, {
                                [A.hidden]: M,
                                [A.dividerResponsive]: !M
                            })
                        }),
                        (0, i.jsx)(o.animated.div, {
                            style: j,
                            className: r()(A.sidebar, {
                                [A.sidebarResponsive]: !M,
                                [A.sidebarHidden]: M
                            }),
                            children: (0, i.jsx)(C.Z, {
                                guildId: t,
                                signed: !1,
                                setSigned: void 0,
                                sidebarWidth: M ? 0 : 380,
                                windowWidth: x,
                                brandPrimaryColor: Z.brandPrimaryColor
                            })
                        })
                    ]
                }),
                U(
                    (e, t) =>
                        t &&
                        (0, i.jsx)(o.animated.div, {
                            style: e,
                            className: A.submit,
                            children: (0, i.jsx)(d.Tooltip, {
                                color: d.Tooltip.Colors.GREY,
                                tooltipClassName: A.tooltip,
                                text: z,
                                'aria-label': null != k ? N.Z.Messages.CLAN_SUBMIT_ERROR_TITLE : void 0,
                                shouldShow: null != k,
                                forceOpen: null != k,
                                children: (e) =>
                                    (0, i.jsx)(g.Z, {
                                        ...e,
                                        themeColor: Z.brandPrimaryColor,
                                        disabled: !M || w,
                                        submitting: R,
                                        look: d.Button.Looks.FILLED,
                                        size: d.Button.Sizes.MEDIUM,
                                        color: d.Button.Colors.BRAND,
                                        onClick: V,
                                        children: N.Z.Messages.FINISH
                                    })
                            })
                        })
                )
            ]
        })
    });
}

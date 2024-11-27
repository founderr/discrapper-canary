n.r(t),
    n.d(t, {
        default: function () {
            return U;
        }
    }),
    n(47120);
var r,
    a,
    o = n(200651),
    s = n(192379),
    C = n(120356),
    i = n.n(C),
    d = n(703533),
    l = n(442837),
    c = n(481060),
    u = n(230711),
    m = n(607070),
    h = n(975298),
    x = n(530618),
    j = n(436774),
    g = n(688465),
    p = n(741245),
    H = n(931331),
    M = n(55935),
    f = n(70956),
    N = n(63063),
    v = n(74538),
    _ = n(272008),
    L = n(497505),
    Z = n(981631),
    R = n(675654),
    B = n(474936),
    k = n(388032),
    S = n(83266),
    V = n(499018),
    T = n(946790);
function I(e) {
    var t;
    let { transitionState: n, onClose: r, quest: a, location: C } = e,
        h = s.useRef(null),
        [j, g] = s.useState(null),
        p = s.useRef(new d.qA()),
        H = (0, l.e7)([m.Z], () => m.Z.useReducedMotion),
        M = (null === (t = a.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        [f, N] = s.useState({ state: 'loading' }),
        v = s.useCallback(() => {
            u.Z.open(Z.oAB.SUBSCRIPTIONS, null, {}), r();
        }, [r]),
        B = s.useCallback(() => {
            u.Z.open(Z.oAB.PREMIUM, null, {}), r();
        }, [r]);
    s.useEffect(() => {
        !M &&
            (0, _.QB)(a.id, L.y$.CROSS_PLATFORM, C)
                .then((e) => {
                    if ((null == e ? void 0 : e.claimedAt) != null) {
                        N({
                            state: 'claimed',
                            entitlements: e
                        });
                        return;
                    }
                    N({
                        state: 'error',
                        errorReason: 0
                    });
                })
                .catch(() => {
                    N({
                        state: 'error',
                        errorReason: 0
                    });
                });
    }, [a, C, M]);
    let k = 'loading' === f.state,
        V = !H && !M && 'claimed' === f.state,
        T = 'claimed' === f.state && null != f.entitlements && f.entitlements.items.some((e) => e.consumed);
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(d.O_, {
                ref: g,
                className: S.confettiCanvas,
                environment: p.current
            }),
            (0, o.jsx)('div', {
                ref: h,
                children: (0, o.jsx)(c.ModalRoot, {
                    transitionState: n,
                    size: c.ModalSize.DYNAMIC,
                    className: i()(S.rootContainer, { [S.rootContainerLoading]: k }),
                    hideShadow: !0,
                    children: k
                        ? (0, o.jsx)(c.Spinner, { type: c.Spinner.Type.SPINNING_CIRCLE })
                        : 'error' === f.state
                          ? (0, o.jsx)(F, {
                                errorReason: f.errorReason,
                                onClose: r
                            })
                          : T
                            ? (0, o.jsx)(b, {
                                  entitlements: f.entitlements,
                                  onClose: r,
                                  onLearnMore: B
                              })
                            : (0, o.jsx)(O, {
                                  entitlements: f.entitlements,
                                  onClose: r,
                                  onLearnMore: v
                              })
                })
            }),
            V &&
                (0, o.jsx)(x.Z, {
                    confettiTarget: h.current,
                    confettiCanvas: j,
                    sprites: R.CA,
                    colors: R.Br
                })
        ]
    });
}
function F(e) {
    let { onClose: t } = e,
        n = k.intl.string(k.t.PbaUtr);
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsxs)(c.ModalHeader, {
                separator: !1,
                className: S.errorHeader,
                children: [
                    (0, o.jsx)(c.Heading, {
                        className: S.errorTitle,
                        variant: 'heading-xl/medium',
                        children: k.intl.string(k.t['UleS9/'])
                    }),
                    (0, o.jsx)(c.ModalCloseButton, {
                        onClick: t,
                        className: S.errorModalCloseButton
                    })
                ]
            }),
            (0, o.jsx)(c.ModalContent, {
                className: S.errorContent,
                children: (0, o.jsx)(c.Text, {
                    variant: 'text-md/normal',
                    children: n
                })
            }),
            (0, o.jsx)(c.ModalFooter, {
                className: S.errorModalFooter,
                children: (0, o.jsx)(c.Button, {
                    color: c.Button.Colors.BRAND,
                    size: c.Button.Sizes.MEDIUM,
                    onClick: t,
                    children: k.intl.string(k.t.cpT0Cg)
                })
            })
        ]
    });
}
function A(e) {
    let t = (0, v.xG)(e.map((e) => e.skuId)),
        n = {
            days: k.t.fYmir6,
            hours: k.t['C3RO+v'],
            minutes: k.t.r77oHR
        },
        r = (0, M.TD)(0, t * f.Z.Millis.HOUR);
    return (0, M.QX)(r, n);
}
function b(e) {
    var t;
    let { entitlements: n, onClose: r, onLearnMore: a } = e,
        { theme: s } = (0, c.useThemeContext)(),
        C = A(null !== (t = null == n ? void 0 : n.items) && void 0 !== t ? t : []),
        i = (0, h.Z)({ forceFetch: !0 }),
        d = (0, M.vc)(i.endsAt, 'L');
    return i.fractionalState === B.a$.NONE
        ? (0, o.jsx)(c.Spinner, { type: c.Spinner.Type.SPINNING_CIRCLE })
        : (0, o.jsxs)(o.Fragment, {
              children: [
                  (0, o.jsxs)('div', {
                      className: S.nitroHeaderContainer,
                      children: [
                          (0, o.jsx)('div', { className: S.nitroHeaderClouds }),
                          (0, o.jsx)(H.Z, { className: S.nitroHeaderWordmark }),
                          (0, o.jsx)(c.Image, {
                              src: T,
                              width: 110,
                              height: 82,
                              zoomable: !1,
                              className: S.nitroHeaderWumpus
                          }),
                          (0, o.jsx)(c.ModalCloseButton, {
                              className: S.nitroHeaderClose,
                              onClick: r
                          })
                      ]
                  }),
                  (0, o.jsxs)(c.ModalFooter, {
                      className: S.footerContainer,
                      separator: !1,
                      children: [
                          (0, o.jsx)(g.Z, { className: S.beta }),
                          (0, o.jsx)(p.C, {
                              className: S.nitroHeading,
                              premiumType: B.p9.TIER_2,
                              type: p.C.Types.PREMIUM_ACTIVATED,
                              theme: s
                          }),
                          (0, o.jsx)(c.Text, {
                              variant: 'text-sm/normal',
                              className: S.text,
                              children: k.intl.format(k.t['jzW5/P'], {
                                  helpCenterLink: N.Z.getArticleURL(Z.BhN.NITRO),
                                  duration: C,
                                  date: d
                              })
                          }),
                          (0, o.jsx)(c.Button, {
                              className: S.cta,
                              onClick: a,
                              children: k.intl.string(k.t['eQX+go'])
                          })
                      ]
                  })
              ]
          });
}
function O(e) {
    var t;
    let { entitlements: n, onClose: r, onLearnMore: a } = e,
        s = A(null !== (t = null == n ? void 0 : n.items) && void 0 !== t ? t : []);
    return (0, o.jsx)(c.ThemeProvider, {
        theme: Z.BRd.DARK,
        children: (e) =>
            (0, o.jsxs)('div', {
                className: i()(S.claimedRootContainer, e),
                children: [
                    (0, o.jsxs)('div', {
                        className: S.headerContainer,
                        children: [
                            (0, o.jsx)('img', {
                                className: S.headerBackground,
                                src: V,
                                alt: k.intl.string(k.t['8SsCa2'])
                            }),
                            (0, o.jsx)(g.Z, { className: S.beta }),
                            (0, o.jsxs)('div', {
                                className: S.headerForeground,
                                children: [
                                    (0, o.jsx)('div', {
                                        className: S.iconBackgroundFractional,
                                        children: (0, o.jsx)(c.NitroWheelIcon, {
                                            size: 'lg',
                                            className: S.iconFractional,
                                            color: j.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND
                                        })
                                    }),
                                    (0, o.jsx)(c.ModalCloseButton, {
                                        className: S.close,
                                        withCircleBackground: !0,
                                        onClick: r
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, o.jsxs)(c.ModalFooter, {
                        className: i()(S.footerContainer, S.gradient),
                        separator: !1,
                        children: [
                            (0, o.jsx)(c.Heading, {
                                variant: 'heading-lg/bold',
                                className: S.heading,
                                children: k.intl.string(k.t.dOQ9RU)
                            }),
                            (0, o.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                className: S.text,
                                children: k.intl.format(k.t.KnH4jo, {
                                    helpCenterLink: N.Z.getArticleURL(Z.BhN.NITRO),
                                    duration: s
                                })
                            }),
                            (0, o.jsx)(c.Button, {
                                className: S.cta2,
                                onClick: a,
                                children: k.intl.string(k.t.LnsQGR)
                            })
                        ]
                    })
                ]
            })
    });
}
function U(e) {
    let { quest: t, location: n, onClose: r, transitionState: a } = e,
        C = s.useMemo(() => {
            var e;
            return (null === (e = t.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null;
        }, []);
    return (s.useEffect(() => {
        C && r();
    }, [r, C]),
    C)
        ? null
        : (0, o.jsx)(I, {
              onClose: r,
              transitionState: a,
              quest: t,
              location: n
          });
}
(a = r || (r = {}))[(a.Other = 0)] = 'Other';

n.r(t),
    n.d(t, {
        default: function () {
            return y;
        }
    }),
    n(47120);
var r,
    a,
    o = n(200651),
    s = n(192379),
    C = n(120356),
    i = n.n(C),
    d = n(760578),
    l = n(442837),
    c = n(481060),
    u = n(230711),
    m = n(607070),
    h = n(975298),
    x = n(530618),
    j = n(436774),
    g = n(688465),
    p = n(98278),
    H = n(741245),
    f = n(931331),
    M = n(55935),
    N = n(70956),
    v = n(63063),
    _ = n(74538),
    L = n(272008),
    Z = n(497505),
    R = n(981631),
    B = n(675654),
    k = n(474936),
    S = n(388032),
    V = n(83266),
    T = n(499018),
    F = n(946790);
function I(e) {
    var t;
    let { transitionState: n, onClose: r, quest: a, location: C } = e,
        h = s.useRef(null),
        [j, g] = s.useState(null),
        H = s.useRef(new d.qA()),
        f = (0, l.e7)([m.Z], () => m.Z.useReducedMotion),
        M = (null === (t = a.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        [N, v] = s.useState({ state: 'loading' }),
        _ = s.useCallback(() => {
            u.Z.open(R.oAB.SUBSCRIPTIONS, null, {}), r();
        }, [r]),
        k = s.useCallback(() => {
            (0, p.$)(r);
        }, [r]);
    s.useEffect(() => {
        !M &&
            (0, L.QB)(a.id, Z.y$.CROSS_PLATFORM, C)
                .then((e) => {
                    if ((null == e ? void 0 : e.claimedAt) != null) {
                        v({
                            state: 'claimed',
                            entitlements: e
                        });
                        return;
                    }
                    v({
                        state: 'error',
                        errorReason: 0
                    });
                })
                .catch(() => {
                    v({
                        state: 'error',
                        errorReason: 0
                    });
                });
    }, [a, C, M]);
    let S = 'loading' === N.state,
        T = !f && !M && 'claimed' === N.state,
        F = 'claimed' === N.state && null != N.entitlements && N.entitlements.items.some((e) => e.consumed);
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(d.O_, {
                ref: g,
                className: V.confettiCanvas,
                environment: H.current
            }),
            (0, o.jsx)('div', {
                ref: h,
                children: (0, o.jsx)(c.ModalRoot, {
                    transitionState: n,
                    size: c.ModalSize.DYNAMIC,
                    className: i()(V.rootContainer, { [V.rootContainerLoading]: S }),
                    hideShadow: !0,
                    children: S
                        ? (0, o.jsx)(c.Spinner, { type: c.Spinner.Type.SPINNING_CIRCLE })
                        : 'error' === N.state
                          ? (0, o.jsx)(A, {
                                errorReason: N.errorReason,
                                onClose: r
                            })
                          : F
                            ? (0, o.jsx)(O, {
                                  entitlements: N.entitlements,
                                  onClose: r,
                                  onLearnMore: k
                              })
                            : (0, o.jsx)(U, {
                                  entitlements: N.entitlements,
                                  onClose: r,
                                  onLearnMore: _
                              })
                })
            }),
            T &&
                (0, o.jsx)(x.Z, {
                    confettiTarget: h.current,
                    confettiCanvas: j,
                    sprites: B.CA,
                    colors: B.Br
                })
        ]
    });
}
function A(e) {
    let { onClose: t } = e,
        n = S.intl.string(S.t.PbaUtr);
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsxs)(c.ModalHeader, {
                separator: !1,
                className: V.errorHeader,
                children: [
                    (0, o.jsx)(c.Heading, {
                        className: V.errorTitle,
                        variant: 'heading-xl/medium',
                        children: S.intl.string(S.t['UleS9/'])
                    }),
                    (0, o.jsx)(c.ModalCloseButton, {
                        onClick: t,
                        className: V.errorModalCloseButton
                    })
                ]
            }),
            (0, o.jsx)(c.ModalContent, {
                className: V.errorContent,
                children: (0, o.jsx)(c.Text, {
                    variant: 'text-md/normal',
                    children: n
                })
            }),
            (0, o.jsx)(c.ModalFooter, {
                className: V.errorModalFooter,
                children: (0, o.jsx)(c.Button, {
                    color: c.Button.Colors.BRAND,
                    size: c.Button.Sizes.MEDIUM,
                    onClick: t,
                    children: S.intl.string(S.t.cpT0Cg)
                })
            })
        ]
    });
}
function b(e) {
    let t = (0, _.xG)(e.map((e) => e.skuId)),
        n = {
            days: S.t.fYmir6,
            hours: S.t['C3RO+v'],
            minutes: S.t.r77oHR
        },
        r = (0, M.TD)(0, t * N.Z.Millis.HOUR);
    return (0, M.QX)(r, n);
}
function O(e) {
    var t;
    let { entitlements: n, onClose: r, onLearnMore: a } = e,
        { theme: s } = (0, c.useThemeContext)(),
        C = b(null !== (t = null == n ? void 0 : n.items) && void 0 !== t ? t : []),
        i = (0, h.Z)({ forceFetch: !0 }),
        d = (0, M.vc)(i.endsAt, 'L');
    return i.fractionalState === k.a$.NONE
        ? (0, o.jsx)(c.Spinner, { type: c.Spinner.Type.SPINNING_CIRCLE })
        : (0, o.jsxs)(o.Fragment, {
              children: [
                  (0, o.jsxs)('div', {
                      className: V.nitroHeaderContainer,
                      children: [
                          (0, o.jsx)('div', { className: V.nitroHeaderClouds }),
                          (0, o.jsx)(f.Z, { className: V.nitroHeaderWordmark }),
                          (0, o.jsx)(c.Image, {
                              src: F,
                              width: 110,
                              height: 82,
                              zoomable: !1,
                              className: V.nitroHeaderWumpus
                          }),
                          (0, o.jsx)(c.ModalCloseButton, {
                              className: V.nitroHeaderClose,
                              onClick: r
                          })
                      ]
                  }),
                  (0, o.jsxs)(c.ModalFooter, {
                      className: V.footerContainer,
                      separator: !1,
                      children: [
                          (0, o.jsx)(g.Z, { className: V.beta }),
                          (0, o.jsx)(H.C, {
                              className: V.nitroHeading,
                              premiumType: k.p9.TIER_2,
                              type: H.C.Types.PREMIUM_ACTIVATED,
                              theme: s
                          }),
                          (0, o.jsx)(c.Text, {
                              variant: 'text-sm/normal',
                              className: V.text,
                              children: S.intl.format(S.t['jzW5/P'], {
                                  helpCenterLink: v.Z.getArticleURL(R.BhN.NITRO),
                                  duration: C,
                                  date: d
                              })
                          }),
                          (0, o.jsx)(c.Button, {
                              className: V.cta,
                              onClick: a,
                              children: S.intl.string(S.t['eQX+go'])
                          })
                      ]
                  })
              ]
          });
}
function U(e) {
    var t;
    let { entitlements: n, onClose: r, onLearnMore: a } = e,
        s = b(null !== (t = null == n ? void 0 : n.items) && void 0 !== t ? t : []);
    return (0, o.jsx)(c.ThemeProvider, {
        theme: R.BRd.DARK,
        children: (e) =>
            (0, o.jsxs)('div', {
                className: i()(V.claimedRootContainer, e),
                children: [
                    (0, o.jsxs)('div', {
                        className: V.headerContainer,
                        children: [
                            (0, o.jsx)('img', {
                                className: V.headerBackground,
                                src: T,
                                alt: S.intl.string(S.t['8SsCa2'])
                            }),
                            (0, o.jsx)(g.Z, { className: V.beta }),
                            (0, o.jsxs)('div', {
                                className: V.headerForeground,
                                children: [
                                    (0, o.jsx)('div', {
                                        className: V.iconBackgroundFractional,
                                        children: (0, o.jsx)(c.NitroWheelIcon, {
                                            size: 'lg',
                                            className: V.iconFractional,
                                            color: j.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND
                                        })
                                    }),
                                    (0, o.jsx)(c.ModalCloseButton, {
                                        className: V.close,
                                        withCircleBackground: !0,
                                        onClick: r
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, o.jsxs)(c.ModalFooter, {
                        className: i()(V.footerContainer, V.gradient),
                        separator: !1,
                        children: [
                            (0, o.jsx)(c.Heading, {
                                variant: 'heading-lg/bold',
                                className: V.heading,
                                children: S.intl.string(S.t.dOQ9RU)
                            }),
                            (0, o.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                className: V.text,
                                children: S.intl.format(S.t.KnH4jo, {
                                    helpCenterLink: v.Z.getArticleURL(R.BhN.NITRO),
                                    duration: s
                                })
                            }),
                            (0, o.jsx)(c.Button, {
                                className: V.cta2,
                                onClick: a,
                                children: S.intl.string(S.t.LnsQGR)
                            })
                        ]
                    })
                ]
            })
    });
}
function y(e) {
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

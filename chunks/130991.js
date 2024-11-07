n.d(t, {
    Z: function () {
        return P;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(561537),
    l = n(269210),
    a = n(442837),
    o = n(481060),
    c = n(355467),
    d = n(100527),
    u = n(906732),
    m = n(601911),
    h = n(283836),
    g = n(887818),
    p = n(728345),
    x = n(565138),
    S = n(374649),
    T = n(908951),
    C = n(255078),
    _ = n(430824),
    E = n(509545),
    f = n(55563),
    I = n(551428),
    N = n(937615),
    b = n(171246),
    A = n(889989),
    v = n(547283),
    j = n(981631),
    O = n(388032),
    R = n(526831);
function P(e) {
    var t, n, l, c, h;
    let { subscription: g, navigateToSwitchPlan: C } = e,
        A = null === (t = g.metadata) || void 0 === t ? void 0 : t.application_subscription_guild_id,
        { renewalMutations: v, planId: P } = g,
        {
            appId: M,
            plan: k,
            storeListing: w,
            price: U,
            isGuildSubscription: V,
            subscriptionForGuild: G,
            sku: Y,
            isCancelled: H,
            renewalPlan: z
        } = (0, a.cj)(
            [E.Z, f.Z, I.Z, _.Z],
            () => {
                let e;
                let t = E.Z.get(P),
                    n = null != t ? f.Z.get(t.skuId) : void 0,
                    i = null == n ? void 0 : n.applicationId,
                    s = null != t ? I.Z.getForSKU(t.skuId) : null,
                    r = null != t ? (0, N.og)((0, N.T4)(t.price, t.currency), t.interval, t.intervalCount) : null,
                    l = null != s && (0, b.KK)(s.skuFlags),
                    a = l && null != A ? _.Z.getGuild(A) : void 0,
                    o = (0, b.Jf)(g, n);
                if (!1 === o && null != v && v.items.length > 0) {
                    var c;
                    let t = v.items[0];
                    e = null !== (c = E.Z.get(t.planId)) && void 0 !== c ? c : void 0;
                }
                return {
                    appId: i,
                    isGuildSubscription: l,
                    plan: t,
                    price: r,
                    sku: n,
                    storeListing: s,
                    subscriptionForGuild: a,
                    isCancelled: o,
                    renewalPlan: e
                };
            },
            [A, P, v, g]
        ),
        { data: W } = (0, p.IX)(M),
        K = s.useMemo(() => (null != W ? (0, m.y)(W, 100) : null), [W]),
        q = null !== (n = null == Y ? void 0 : Y.deleted) && void 0 !== n && n,
        Q = null != Y && (0, b.OL)(Y),
        X = g.status === j.O0b.PAST_DUE,
        { analyticsLocations: J } = (0, u.ZP)(),
        [$] = (0, S.ED)({
            subscriptionId: g.id,
            renewal: !0,
            analyticsLocations: J,
            analyticsLocation: d.Z.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
        }),
        ee = B(g.currentPeriodEnd);
    return (0, i.jsxs)(r.l, {
        header: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: R.headerContent,
                    children: [
                        null != K &&
                            (0, i.jsx)(o.Image, {
                                src: K.href,
                                imageClassName: R.appIcon,
                                width: 40,
                                height: 40
                            }),
                        (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(o.Heading, {
                                    variant: 'heading-md/semibold',
                                    children: null !== (l = null == W ? void 0 : W.name) && void 0 !== l ? l : O.intl.string(O.t['7kqy7e'])
                                }),
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-secondary',
                                    children: null !== (c = null == k ? void 0 : k.name) && void 0 !== c ? c : O.intl.string(O.t.sqkbMD)
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: R.headerButtons,
                    children:
                        null != W &&
                        null != w &&
                        null != Y &&
                        (0, i.jsx)(Z, {
                            subscription: g,
                            app: W,
                            sku: Y,
                            storeListing: w,
                            isCancelled: H,
                            navigateToSwitchPlan: C
                        })
                })
            ]
        }),
        children: [
            H &&
                (0, i.jsx)(L, {
                    type: 'warning',
                    title: Q ? O.intl.formatToPlainString(O.t.QOnM19, { subscriptionPeriodEnd: ee }) : O.intl.formatToPlainString(O.t.HOaZu7, { subscriptionPeriodEnd: ee })
                }),
            X &&
                (0, i.jsx)(L, {
                    type: 'danger',
                    title: O.intl.string(O.t.fvOqBg)
                }),
            (0, i.jsxs)('div', {
                className: R.details,
                children: [
                    (0, i.jsx)(y, {
                        title: O.intl.string(O.t['5D/KEB']),
                        content: V
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsxs)('span', {
                                          className: R.subscriptionTypeRow,
                                          children: [(0, i.jsx)(o.ServerIcon, { size: 'xs' }), O.intl.string(O.t.QjL3vr)]
                                      }),
                                      null != G &&
                                          (0, i.jsxs)('span', {
                                              className: R.guildSubscriptionContentRow,
                                              children: [
                                                  (0, i.jsx)(o.Text, {
                                                      variant: 'text-sm/normal',
                                                      color: 'text-muted',
                                                      children: O.intl.format(O.t['7ZD8p6'], { guildName: G.name })
                                                  }),
                                                  (0, i.jsx)(x.Z, {
                                                      guild: G,
                                                      size: x.Z.Sizes.MINI
                                                  })
                                              ]
                                          })
                                  ]
                              })
                            : (0, i.jsxs)('span', {
                                  className: R.subscriptionTypeRow,
                                  children: [(0, i.jsx)(o.UserIcon, { size: 'xs' }), O.intl.string(O.t['6anEVl'])]
                              })
                    }),
                    null != U &&
                        (0, i.jsx)(y, {
                            title: O.intl.string(O.t.KI7ER0),
                            content: U
                        }),
                    (0, i.jsx)(y, {
                        title: O.intl.string(O.t.dnUzb2),
                        content: B(null !== (h = g.createdAt) && void 0 !== h ? h : g.currentPeriodStart)
                    }),
                    (0, i.jsx)(D, {
                        isCancelled: H,
                        subscriptionPeriodEnd: ee,
                        renewalPlan: z
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: R.payment,
                children: [
                    (0, i.jsx)(o.FormTitle, { children: O.intl.string(O.t.azZaZW) }),
                    null != $ &&
                        (0, i.jsx)(T.Z, {
                            subscription: g,
                            currentInvoicePreview: $,
                            disabled: q || H
                        })
                ]
            }),
            null != W &&
                (null == w ? void 0 : w.benefits) != null &&
                w.benefits.length > 0 &&
                (0, i.jsx)(F, {
                    appId: W.id,
                    listingBenefits: w.benefits
                })
        ]
    });
}
function D(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: s } = e;
    if (null != s) {
        let e = (0, N.og)((0, N.T4)(s.price, s.currency), s.interval, s.intervalCount);
        return (0, i.jsx)(y, {
            title: O.intl.string(O.t.hIhAMz),
            content: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: 'text-sm/medium',
                        children: n
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        children: O.intl.format(O.t.MCLbvr, {
                            planName: s.name,
                            price: e
                        })
                    })
                ]
            })
        });
    }
    return (0, i.jsx)(y, {
        title: t ? O.intl.string(O.t.enxcAg) : O.intl.string(O.t['Ms+6Zm']),
        content: n
    });
}
function y(e) {
    let { title: t, content: n } = e;
    return (0, i.jsxs)('div', {
        className: R.row,
        children: [
            (0, i.jsx)(o.Text, {
                variant: 'text-sm/medium',
                children: t
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-sm/medium',
                className: R.rowContent,
                children: n
            })
        ]
    });
}
function B(e) {
    return e.toLocaleDateString(void 0, { dateStyle: 'long' });
}
function L(e) {
    let { type: t, title: n } = e;
    return (0, i.jsx)(o.HelpMessage, {
        messageType: 'warning' === t ? o.HelpMessageTypes.WARNING : o.HelpMessageTypes.ERROR,
        className: R.noticeBanner,
        children: (0, i.jsx)(o.Text, {
            variant: 'text-sm/normal',
            children: n
        })
    });
}
function Z(e) {
    let { app: t, storeListing: r, sku: l, subscription: d, isCancelled: m, guild: g, navigateToSwitchPlan: p } = e,
        x = (0, b.OL)(l),
        { analyticsLocations: S } = (0, u.ZP)(),
        [T, _] = s.useState(!1),
        E = (0, h.q)(t.id),
        I = (0, a.e7)([f.Z], () => f.Z.getParentSKU(r.skuId), [r.skuId]),
        N = s.useMemo(() => (null == I ? [] : (0, v.$)(r.id, I, E.subscriptions)), [r.id, E, I]),
        A = 0 !== N.length,
        j = async () => {
            try {
                _(!0);
                let { subscription: e } = await (0, c.pl)(d, S);
                if (null == e) return;
                (0, o.openModalLazy)(async () => {
                    let { default: t } = await n.e('18879').then(n.bind(n, 535278));
                    return (n) =>
                        (0, i.jsx)(t, {
                            ...n,
                            storeListing: r,
                            subscription: C.Z.createFromServer(e)
                        });
                });
            } finally {
                _(!1);
            }
        };
    return (0, i.jsxs)('div', {
        className: R.managementBtns,
        children: [
            x
                ? null
                : m
                  ? (0, i.jsx)(o.Button, {
                        color: o.Button.Colors.PRIMARY,
                        size: o.Button.Sizes.SMALL,
                        onClick: j,
                        submitting: T,
                        children: O.intl.string(O.t.QtMnkZ)
                    })
                  : (0, i.jsx)(o.Button, {
                        color: o.Button.Colors.CUSTOM,
                        size: o.Button.Sizes.SMALL,
                        className: R.secondaryBtn,
                        onClick: () => {
                            (0, o.openModalLazy)(async () => {
                                let { default: e } = await n.e('6284').then(n.bind(n, 257514));
                                return (n) =>
                                    (0, i.jsx)(e, {
                                        ...n,
                                        application: t,
                                        storeListing: r,
                                        subscription: d,
                                        guild: g
                                    });
                            });
                        },
                        children: O.intl.string(O.t['E8G/tr'])
                    }),
            A &&
                null != I &&
                !1 === m &&
                (0, i.jsx)(o.Button, {
                    color: o.Button.Colors.BRAND,
                    size: o.Button.Sizes.SMALL,
                    onClick: () => {
                        p({
                            currentSubscription: d,
                            alternativeListings: N,
                            app: t,
                            bundleSku: I,
                            currentListing: r
                        });
                    },
                    children: O.intl.string(O.t.R74ZBQ)
                })
        ]
    });
}
function F(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, i.jsx)(g.Z, {
        children: (e) =>
            (0, i.jsxs)('div', {
                className: R.benefits,
                children: [
                    (0, i.jsxs)('div', {
                        className: R.benefitsHeader,
                        children: [
                            e &&
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-sm/semibold',
                                    children: O.intl.string(O.t['mORL6+'])
                                }),
                            (0, i.jsx)(g.Z.Toggle, {
                                className: R.benefitsBtn,
                                text: e ? O.intl.string(O.t.gsbFAw) : O.intl.string(O.t.Iwjfxc)
                            })
                        ]
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: s, description: r, icon: a } = e;
                              return (0, i.jsx)(
                                  l.G,
                                  {
                                      name: s,
                                      icon: (0, A.n)(t, a),
                                      description: r
                                  },
                                  n
                              );
                          })
                        : null
                ]
            })
    });
}

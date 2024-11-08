n.d(t, {
    G: function () {
        return i;
    },
    Z: function () {
        return y;
    }
}),
    n(47120);
var i,
    s,
    r = n(200651),
    l = n(192379),
    a = n(561537),
    o = n(269210),
    c = n(442837),
    d = n(481060),
    u = n(355467),
    m = n(100527),
    h = n(906732),
    g = n(601911),
    p = n(283836),
    x = n(887818),
    S = n(728345),
    T = n(565138),
    C = n(374649),
    _ = n(908951),
    E = n(255078),
    f = n(430824),
    I = n(509545),
    N = n(55563),
    A = n(551428),
    b = n(937615),
    v = n(171246),
    j = n(889989),
    O = n(547283),
    R = n(981631),
    P = n(388032),
    D = n(526831);
function y(e) {
    var t, n, i, s, o;
    let { subscription: u, navigateToSwitchPlan: p, loadingState: x } = e,
        E = null === (t = u.metadata) || void 0 === t ? void 0 : t.application_subscription_guild_id,
        { renewalMutations: j, planId: O } = u,
        {
            appId: y,
            plan: w,
            storeListing: U,
            price: V,
            isGuildSubscription: G,
            subscriptionForGuild: Y,
            sku: H,
            isCancelled: z,
            renewalPlan: W
        } = (0, c.cj)(
            [I.Z, N.Z, A.Z, f.Z],
            () => {
                let e;
                let t = I.Z.get(O),
                    n = null != t ? N.Z.get(t.skuId) : void 0,
                    i = null == n ? void 0 : n.applicationId,
                    s = null != t ? A.Z.getForSKU(t.skuId) : null,
                    r = null != t ? (0, b.og)((0, b.T4)(t.price, t.currency), t.interval, t.intervalCount) : null,
                    l = null != s && (0, v.KK)(s.skuFlags),
                    a = l && null != E ? f.Z.getGuild(E) : void 0,
                    o = (0, v.Jf)(u, n);
                if (!1 === o && null != j && j.items.length > 0) {
                    var c;
                    let t = j.items[0];
                    e = null !== (c = I.Z.get(t.planId)) && void 0 !== c ? c : void 0;
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
            [E, O, j, u]
        ),
        { data: K } = (0, S.IX)(y),
        q = l.useMemo(() => (null != K ? (0, g.y)(K, 100) : null), [K]),
        Q = null !== (n = null == H ? void 0 : H.deleted) && void 0 !== n && n,
        X = null != H && (0, v.OL)(H),
        J = u.status === R.O0b.PAST_DUE,
        { analyticsLocations: $ } = (0, h.ZP)(),
        [ee] = (0, C.ED)({
            subscriptionId: u.id,
            renewal: !0,
            analyticsLocations: $,
            analyticsLocation: m.Z.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
        }),
        et = Z(u.currentPeriodEnd),
        en = 0 === x;
    return (0, r.jsxs)(a.l, {
        headerClassName: D.headerWrapper,
        header:
            !1 === en
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)('div', {
                              className: D.headerContent,
                              children: [
                                  null != q &&
                                      (0, r.jsx)(d.Image, {
                                          src: q.href,
                                          imageClassName: D.appIcon,
                                          width: 40,
                                          height: 40
                                      }),
                                  (0, r.jsxs)('div', {
                                      children: [
                                          (0, r.jsx)(d.Heading, {
                                              variant: 'heading-md/semibold',
                                              children: null !== (i = null == K ? void 0 : K.name) && void 0 !== i ? i : P.intl.string(P.t['7kqy7e'])
                                          }),
                                          (0, r.jsx)(d.Text, {
                                              variant: 'text-sm/medium',
                                              color: 'header-secondary',
                                              children: null !== (s = null == w ? void 0 : w.name) && void 0 !== s ? s : P.intl.string(P.t.sqkbMD)
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, r.jsx)('div', {
                              className: D.headerButtons,
                              children:
                                  null != K &&
                                  null != U &&
                                  null != H &&
                                  (0, r.jsx)(M, {
                                      subscription: u,
                                      app: K,
                                      sku: H,
                                      storeListing: U,
                                      isCancelled: z,
                                      navigateToSwitchPlan: p
                                  })
                          })
                      ]
                  })
                : (0, r.jsx)(d.Spinner, { type: d.SpinnerTypes.PULSING_ELLIPSIS }),
        children: [
            z &&
                (0, r.jsx)(F, {
                    type: 'warning',
                    title: X ? P.intl.formatToPlainString(P.t.QOnM19, { subscriptionPeriodEnd: et }) : P.intl.formatToPlainString(P.t.HOaZu7, { subscriptionPeriodEnd: et })
                }),
            J &&
                (0, r.jsx)(F, {
                    type: 'danger',
                    title: P.intl.string(P.t.fvOqBg)
                }),
            (0, r.jsxs)('div', {
                className: D.details,
                children: [
                    (0, r.jsx)(L, {
                        title: P.intl.string(P.t['5D/KEB']),
                        content: G
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsxs)('span', {
                                          className: D.subscriptionTypeRow,
                                          children: [(0, r.jsx)(d.ServerIcon, { size: 'xs' }), P.intl.string(P.t.QjL3vr)]
                                      }),
                                      null != Y &&
                                          (0, r.jsxs)('span', {
                                              className: D.guildSubscriptionContentRow,
                                              children: [
                                                  (0, r.jsx)(d.Text, {
                                                      variant: 'text-sm/normal',
                                                      color: 'text-muted',
                                                      children: P.intl.format(P.t['7ZD8p6'], { guildName: Y.name })
                                                  }),
                                                  (0, r.jsx)(T.Z, {
                                                      guild: Y,
                                                      size: T.Z.Sizes.MINI
                                                  })
                                              ]
                                          })
                                  ]
                              })
                            : (0, r.jsxs)('span', {
                                  className: D.subscriptionTypeRow,
                                  children: [(0, r.jsx)(d.UserIcon, { size: 'xs' }), P.intl.string(P.t['6anEVl'])]
                              })
                    }),
                    null != V &&
                        (0, r.jsx)(L, {
                            title: P.intl.string(P.t.KI7ER0),
                            content: V
                        }),
                    (0, r.jsx)(L, {
                        title: P.intl.string(P.t.dnUzb2),
                        content: Z(null !== (o = u.createdAt) && void 0 !== o ? o : u.currentPeriodStart)
                    }),
                    (0, r.jsx)(B, {
                        isCancelled: z,
                        subscriptionPeriodEnd: et,
                        renewalPlan: W
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: D.payment,
                children: [
                    (0, r.jsx)(d.FormTitle, { children: P.intl.string(P.t.azZaZW) }),
                    null != ee &&
                        !(en || 2 === x) &&
                        (0, r.jsx)(_.Z, {
                            subscription: u,
                            currentInvoicePreview: ee,
                            disabled: Q || z
                        })
                ]
            }),
            null != K &&
                (null == U ? void 0 : U.benefits) != null &&
                U.benefits.length > 0 &&
                (0, r.jsx)(k, {
                    appId: K.id,
                    listingBenefits: U.benefits
                })
        ]
    });
}
function B(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: i } = e;
    if (null != i) {
        let e = (0, b.og)((0, b.T4)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, r.jsx)(L, {
            title: P.intl.string(P.t.hIhAMz),
            content: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(d.Text, {
                        variant: 'text-sm/medium',
                        children: n
                    }),
                    (0, r.jsx)(d.Text, {
                        variant: 'text-sm/normal',
                        children: P.intl.format(P.t.MCLbvr, {
                            planName: i.name,
                            price: e
                        })
                    })
                ]
            })
        });
    }
    return (0, r.jsx)(L, {
        title: t ? P.intl.string(P.t.enxcAg) : P.intl.string(P.t['Ms+6Zm']),
        content: n
    });
}
function L(e) {
    let { title: t, content: n } = e;
    return (0, r.jsxs)('div', {
        className: D.row,
        children: [
            (0, r.jsx)(d.Text, {
                variant: 'text-sm/medium',
                children: t
            }),
            (0, r.jsx)(d.Text, {
                variant: 'text-sm/medium',
                className: D.rowContent,
                children: n
            })
        ]
    });
}
function Z(e) {
    return e.toLocaleDateString(void 0, { dateStyle: 'long' });
}
function F(e) {
    let { type: t, title: n } = e;
    return (0, r.jsx)(d.HelpMessage, {
        messageType: 'warning' === t ? d.HelpMessageTypes.WARNING : d.HelpMessageTypes.ERROR,
        className: D.noticeBanner,
        children: (0, r.jsx)(d.Text, {
            variant: 'text-sm/normal',
            children: n
        })
    });
}
function M(e) {
    let { app: t, storeListing: i, sku: s, subscription: a, isCancelled: o, guild: m, navigateToSwitchPlan: g } = e,
        x = (0, v.OL)(s),
        { analyticsLocations: S } = (0, h.ZP)(),
        [T, C] = l.useState(!1),
        _ = (0, p.q)(t.id),
        f = (0, c.e7)([N.Z], () => N.Z.getParentSKU(i.skuId), [i.skuId]),
        I = l.useMemo(() => (null == f ? [] : (0, O.$)(i.id, f, _.subscriptions)), [i.id, _, f]),
        A = 0 !== I.length,
        b = async () => {
            try {
                C(!0);
                let { subscription: e } = await (0, u.pl)(a, S);
                if (null == e) return;
                (0, d.openModalLazy)(async () => {
                    let { default: t } = await n.e('18879').then(n.bind(n, 535278));
                    return (n) =>
                        (0, r.jsx)(t, {
                            ...n,
                            storeListing: i,
                            subscription: E.Z.createFromServer(e)
                        });
                });
            } finally {
                C(!1);
            }
        };
    return (0, r.jsxs)('div', {
        className: D.managementBtns,
        children: [
            x
                ? null
                : o
                  ? (0, r.jsx)(d.Button, {
                        color: d.Button.Colors.PRIMARY,
                        size: d.Button.Sizes.SMALL,
                        onClick: b,
                        submitting: T,
                        children: P.intl.string(P.t.QtMnkZ)
                    })
                  : (0, r.jsx)(d.Button, {
                        color: d.Button.Colors.CUSTOM,
                        size: d.Button.Sizes.SMALL,
                        className: D.secondaryBtn,
                        onClick: () => {
                            (0, d.openModalLazy)(async () => {
                                let { default: e } = await n.e('6284').then(n.bind(n, 257514));
                                return (n) =>
                                    (0, r.jsx)(e, {
                                        ...n,
                                        application: t,
                                        storeListing: i,
                                        subscription: a,
                                        guild: m
                                    });
                            });
                        },
                        children: P.intl.string(P.t['E8G/tr'])
                    }),
            A &&
                null != f &&
                !1 === o &&
                (0, r.jsx)(d.Button, {
                    color: d.Button.Colors.BRAND,
                    size: d.Button.Sizes.SMALL,
                    onClick: () => {
                        g({
                            currentSubscription: a,
                            alternativeListings: I,
                            app: t,
                            bundleSku: f,
                            currentListing: i
                        });
                    },
                    children: P.intl.string(P.t.R74ZBQ)
                })
        ]
    });
}
function k(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, r.jsx)(x.Z, {
        children: (e) =>
            (0, r.jsxs)('div', {
                className: D.benefits,
                children: [
                    (0, r.jsxs)('div', {
                        className: D.benefitsHeader,
                        children: [
                            e &&
                                (0, r.jsx)(d.Text, {
                                    variant: 'text-sm/semibold',
                                    children: P.intl.string(P.t['mORL6+'])
                                }),
                            (0, r.jsx)(x.Z.Toggle, {
                                className: D.benefitsBtn,
                                text: e ? P.intl.string(P.t.gsbFAw) : P.intl.string(P.t.Iwjfxc)
                            })
                        ]
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: i, description: s, icon: l } = e;
                              return (0, r.jsx)(
                                  o.G,
                                  {
                                      name: i,
                                      icon: (0, j.n)(t, l),
                                      description: s
                                  },
                                  n
                              );
                          })
                        : null
                ]
            })
    });
}
((s = i || (i = {}))[(s.LOADING = 0)] = 'LOADING'), (s[(s.DONE = 1)] = 'DONE'), (s[(s.ERROR = 2)] = 'ERROR');

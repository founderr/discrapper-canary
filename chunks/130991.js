n.d(t, {
    Z: function () {
        return R;
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
    g = n(728345),
    p = n(565138),
    x = n(374649),
    S = n(908951),
    T = n(255078),
    C = n(430824),
    _ = n(509545),
    E = n(55563),
    f = n(551428),
    I = n(937615),
    N = n(171246),
    A = n(889989),
    b = n(547283),
    v = n(981631),
    j = n(388032),
    O = n(73282);
function R(e) {
    var t, n, l, c, h;
    let { subscription: T, navigateToSwitchPlan: A } = e,
        b = null === (t = T.metadata) || void 0 === t ? void 0 : t.application_subscription_guild_id,
        {
            appId: R,
            plan: Z,
            storeListing: F,
            price: M,
            isGuildSubscription: k,
            subscriptionForGuild: w,
            sku: U
        } = (0, a.cj)(
            [_.Z, E.Z, f.Z, C.Z],
            () => {
                let e = T.planId,
                    t = _.Z.get(e),
                    n = null != t ? E.Z.get(t.skuId) : null,
                    i = null == n ? void 0 : n.applicationId,
                    s = null != t ? f.Z.getForSKU(t.skuId) : null,
                    r = null != t ? (0, I.og)((0, I.T4)(t.price, t.currency), t.interval, t.intervalCount) : null,
                    l = null != s && (0, N.KK)(s.skuFlags),
                    a = l && null != b ? C.Z.getGuild(b) : void 0;
                return {
                    appId: i,
                    isGuildSubscription: l,
                    plan: t,
                    price: r,
                    sku: null != n ? n : void 0,
                    storeListing: s,
                    subscriptionForGuild: a
                };
            },
            [b, T.planId]
        ),
        { data: V } = (0, g.IX)(R),
        G = s.useMemo(() => (null != V ? (0, m.y)(V, 100) : null), [V]),
        Y = null !== (n = null == U ? void 0 : U.deleted) && void 0 !== n && n,
        H = null != U && (0, N.OL)(U),
        z = (0, N.Jf)(T, U),
        W = T.status === v.O0b.PAST_DUE,
        { analyticsLocations: K } = (0, u.ZP)(),
        [q] = (0, x.ED)({
            subscriptionId: T.id,
            renewal: !0,
            analyticsLocations: K,
            analyticsLocation: d.Z.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
        }),
        Q = D(T.currentPeriodEnd);
    return (0, i.jsxs)(r.l, {
        header: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: O.headerContent,
                    children: [
                        null != G &&
                            (0, i.jsx)(o.Image, {
                                src: G.href,
                                imageClassName: O.appIcon,
                                width: 40,
                                height: 40
                            }),
                        (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(o.Heading, {
                                    variant: 'heading-md/semibold',
                                    children: null !== (l = null == V ? void 0 : V.name) && void 0 !== l ? l : j.intl.string(j.t['7kqy7e'])
                                }),
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-secondary',
                                    children: null !== (c = null == Z ? void 0 : Z.name) && void 0 !== c ? c : j.intl.string(j.t.sqkbMD)
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: O.headerButtons,
                    children:
                        null != V &&
                        null != F &&
                        null != U &&
                        (0, i.jsx)(B, {
                            subscription: T,
                            app: V,
                            sku: U,
                            storeListing: F,
                            isCancelled: z,
                            navigateToSwitchPlan: A
                        })
                })
            ]
        }),
        children: [
            z &&
                (0, i.jsx)(y, {
                    type: 'warning',
                    title: H ? j.intl.formatToPlainString(j.t.QOnM19, { subscriptionPeriodEnd: Q }) : j.intl.formatToPlainString(j.t.HOaZu7, { subscriptionPeriodEnd: Q })
                }),
            W &&
                (0, i.jsx)(y, {
                    type: 'danger',
                    title: j.intl.string(j.t.fvOqBg)
                }),
            (0, i.jsxs)('div', {
                className: O.details,
                children: [
                    (0, i.jsx)(P, {
                        title: j.intl.string(j.t['5D/KEB']),
                        content: k
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsxs)('span', {
                                          className: O.subscriptionTypeRow,
                                          children: [(0, i.jsx)(o.ServerIcon, { size: 'xs' }), j.intl.string(j.t.QjL3vr)]
                                      }),
                                      null != w &&
                                          (0, i.jsxs)('span', {
                                              className: O.guildSubscriptionContentRow,
                                              children: [
                                                  (0, i.jsx)(o.Text, {
                                                      variant: 'text-sm/normal',
                                                      color: 'text-muted',
                                                      children: j.intl.format(j.t['7ZD8p6'], { guildName: w.name })
                                                  }),
                                                  (0, i.jsx)(p.Z, {
                                                      guild: w,
                                                      size: p.Z.Sizes.MINI
                                                  })
                                              ]
                                          })
                                  ]
                              })
                            : (0, i.jsxs)('span', {
                                  className: O.subscriptionTypeRow,
                                  children: [(0, i.jsx)(o.UserIcon, { size: 'xs' }), j.intl.string(j.t['6anEVl'])]
                              })
                    }),
                    null != M &&
                        (0, i.jsx)(P, {
                            title: j.intl.string(j.t.KI7ER0),
                            content: M
                        }),
                    (0, i.jsx)(P, {
                        title: j.intl.string(j.t.dnUzb2),
                        content: D(null !== (h = T.createdAt) && void 0 !== h ? h : T.currentPeriodStart)
                    }),
                    (0, i.jsx)(P, {
                        title: z ? j.intl.string(j.t.enxcAg) : j.intl.string(j.t['Ms+6Zm']),
                        content: Q
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: O.payment,
                children: [
                    (0, i.jsx)(o.FormTitle, { children: j.intl.string(j.t.azZaZW) }),
                    null != q &&
                        (0, i.jsx)(S.Z, {
                            subscription: T,
                            currentInvoicePreview: q,
                            disabled: Y || z
                        })
                ]
            }),
            null != V &&
                (null == F ? void 0 : F.benefits) != null &&
                F.benefits.length > 0 &&
                (0, i.jsx)(L, {
                    appId: V.id,
                    listingBenefits: F.benefits
                })
        ]
    });
}
function P(e) {
    let { title: t, content: n } = e;
    return (0, i.jsxs)('div', {
        className: O.row,
        children: [
            (0, i.jsx)(o.Text, {
                variant: 'text-sm/medium',
                children: t
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-sm/medium',
                className: O.rowContent,
                children: n
            })
        ]
    });
}
function D(e) {
    return e.toLocaleDateString(void 0, { dateStyle: 'long' });
}
function y(e) {
    let { type: t, title: n } = e;
    return (0, i.jsx)(o.HelpMessage, {
        messageType: 'warning' === t ? o.HelpMessageTypes.WARNING : o.HelpMessageTypes.ERROR,
        className: O.noticeBanner,
        children: (0, i.jsx)(o.Text, {
            variant: 'text-sm/normal',
            children: n
        })
    });
}
function B(e) {
    let { app: t, storeListing: r, sku: l, subscription: d, isCancelled: m, guild: g, navigateToSwitchPlan: p } = e,
        x = (0, N.OL)(l),
        { analyticsLocations: S } = (0, u.ZP)(),
        [C, _] = s.useState(!1),
        f = (0, h.q)(t.id),
        I = (0, a.e7)([E.Z], () => E.Z.getParentSKU(r.skuId), [r.skuId]),
        A = s.useMemo(() => (null == I ? [] : (0, b.$)(r.id, I, f.subscriptions)), [r.id, f, I]),
        v = 0 !== A.length,
        R = async () => {
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
                            subscription: T.Z.createFromServer(e)
                        });
                });
            } finally {
                _(!1);
            }
        };
    return (0, i.jsxs)('div', {
        className: O.managementBtns,
        children: [
            x
                ? null
                : m
                  ? (0, i.jsx)(o.Button, {
                        color: o.Button.Colors.PRIMARY,
                        size: o.Button.Sizes.SMALL,
                        onClick: R,
                        submitting: C,
                        children: j.intl.string(j.t.QtMnkZ)
                    })
                  : (0, i.jsx)(o.Button, {
                        color: o.Button.Colors.CUSTOM,
                        size: o.Button.Sizes.SMALL,
                        className: O.secondaryBtn,
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
                        children: j.intl.string(j.t['E8G/tr'])
                    }),
            v &&
                null != I &&
                (0, i.jsx)(o.Button, {
                    color: o.Button.Colors.BRAND,
                    size: o.Button.Sizes.SMALL,
                    onClick: () => {
                        p({
                            currentSubscription: d,
                            alternativeListings: A,
                            app: t,
                            bundleSku: I,
                            currentListing: r
                        });
                    },
                    children: j.intl.string(j.t.R74ZBQ)
                })
        ]
    });
}
function L(e) {
    let { appId: t, listingBenefits: n } = e,
        [r, a] = s.useReducer((e) => !e, !1),
        c = r ? o.ChevronSmallUpIcon : o.ChevronSmallDownIcon;
    return (0, i.jsxs)('div', {
        className: O.benefits,
        children: [
            (0, i.jsxs)('div', {
                className: O.benefitsHeader,
                children: [
                    r &&
                        (0, i.jsx)(o.Text, {
                            variant: 'text-sm/semibold',
                            children: j.intl.string(j.t['mORL6+'])
                        }),
                    (0, i.jsxs)(o.Clickable, {
                        className: O.benefitsBtn,
                        onClick: a,
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: 'heading-sm/semibold',
                                tag: 'div',
                                color: 'currentColor',
                                children: r ? j.intl.string(j.t.gsbFAw) : j.intl.string(j.t.Iwjfxc)
                            }),
                            (0, i.jsx)(c, {
                                size: 'sm',
                                color: 'currentColor'
                            })
                        ]
                    })
                ]
            }),
            r
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
    });
}

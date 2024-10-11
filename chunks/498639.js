t(47120);
var n = t(735250),
    a = t(470079),
    i = t(664751),
    r = t(442837),
    o = t(481060),
    l = t(355467),
    c = t(821849),
    d = t(72924),
    _ = t(100527),
    u = t(906732),
    E = t(883904),
    T = t(678558),
    S = t(730647),
    I = t(584825),
    N = t(305342),
    m = t(333867),
    C = t(963249),
    A = t(87484),
    g = t(197115),
    h = t(911367),
    O = t(430824),
    p = t(78839),
    R = t(981631),
    x = t(474936),
    M = t(793122);
function f(e) {
    let { selectedGuildForGuildSub: s } = e,
        t = (0, I.GG)(null == s ? void 0 : s.id)[0];
    return (0, n.jsx)(n.Fragment, {
        children:
            null != s && null != t
                ? (0, n.jsx)('div', {
                      className: M.formItem,
                      children: t.subscription_listings_ids.map((e) =>
                          (0, n.jsx)(
                              N.Z,
                              {
                                  guildId: s.id,
                                  groupListingId: e,
                                  listingId: e
                              },
                              e
                          )
                      )
                  })
                : null
    });
}
s.Z = function () {
    let [e, s] = a.useState(x.Si.TIER_2),
        [t, I] = a.useState(null),
        [N] = (0, r.Wu)([O.Z], () => [O.Z.getGuilds()]),
        [D] = (0, r.Wu)([p.ZP], () => [p.ZP.getPremiumSubscription()]);
    (0, h.t)();
    let L = Object.values(N).map((e) => ({
            value: e,
            label: e.name
        })),
        [P, b] = a.useState(L.length > 0 ? L[0].value : null),
        [Z, v] = a.useState(''),
        [j, B] = a.useState({
            plan_id: x.Xh.PREMIUM_MONTH_TIER_2,
            gift: 'true'
        }),
        U = 'true' !== j.gift && null != D,
        [G, F] = a.useState(L.length > 0 ? L[0].value : null),
        { analyticsLocations: y } = (0, u.ZP)(_.Z.PAYMENT_FLOW_TEST_PAGE),
        [V, Y] = a.useState(''),
        [k, w] = a.useState(R.lds),
        [H, W] = a.useState(''),
        [K, z] = a.useState(R.lds),
        [Q, X] = a.useState(R.lds);
    return (0, n.jsx)(u.Gt, {
        value: y,
        children: (0, n.jsxs)(o.FormSection, {
            title: 'Payment Flow Modals',
            tag: o.FormTitleTags.H1,
            children: [
                (0, n.jsx)(o.FormTitle, { children: 'Gift' }),
                (0, n.jsxs)(o.FormItem, {
                    className: M.formItem,
                    children: [
                        (0, n.jsx)(o.SingleSelect, {
                            value: e,
                            options: [
                                {
                                    value: x.Si.TIER_2,
                                    label: 'Nitro'
                                },
                                {
                                    value: x.Si.TIER_1,
                                    label: 'Nitro Classic'
                                },
                                {
                                    value: x.Si.TIER_0,
                                    label: 'Nitro Basic'
                                },
                                {
                                    value: null,
                                    label: 'None'
                                }
                            ],
                            onChange: (e) => s(e)
                        }),
                        (0, n.jsx)(g.Z, {
                            subscriptionTier: e,
                            isGift: !0,
                            premiumModalAnalyticsLocation: {}
                        })
                    ]
                }),
                (0, n.jsx)(o.FormDivider, { className: M.formDivider }),
                (0, n.jsx)(o.FormTitle, { children: 'Premium Select Plan' }),
                (0, n.jsxs)(o.FormItem, {
                    className: M.formItem,
                    children: [
                        (0, n.jsx)(o.SingleSelect, {
                            value: t,
                            options: [
                                {
                                    value: x.Si.TIER_2,
                                    label: 'Nitro'
                                },
                                {
                                    value: x.Si.TIER_1,
                                    label: 'Nitro Classic'
                                },
                                {
                                    value: x.Si.TIER_0,
                                    label: 'Nitro Basic'
                                },
                                {
                                    value: null,
                                    label: 'None'
                                }
                            ],
                            onChange: (e) => I(e)
                        }),
                        (0, n.jsx)(o.Button, {
                            onClick: () =>
                                (0, C.Z)({
                                    subscriptionTier: t,
                                    analyticsLocations: y
                                }),
                            children: 'Select Plan'
                        })
                    ]
                }),
                (0, n.jsx)(o.FormDivider, { className: M.formDivider }),
                (0, n.jsx)(o.FormTitle, { children: 'Boost' }),
                (0, n.jsxs)(o.FormItem, {
                    className: M.formItem,
                    children: [
                        (0, n.jsx)(o.SingleSelect, {
                            value: P,
                            options: L,
                            onChange: (e) => b(e)
                        }),
                        null != P
                            ? (0, n.jsx)(T.Z, {
                                  guild: P,
                                  analyticsLocation: {}
                              })
                            : (0, n.jsx)('div', { children: 'No Guild to boost' })
                    ]
                }),
                (0, n.jsx)(o.FormDivider, { className: M.formDivider }),
                (0, n.jsxs)(o.FormTitle, {
                    children: [
                        (0, n.jsx)('div', { children: 'Standalone: Trial Promotion Redemption' }),
                        (0, n.jsx)(o.Anchor, {
                            href: 'https://i.dis.gd/createPromo',
                            children: 'How to create promotion'
                        })
                    ]
                }),
                (0, n.jsxs)(o.FormItem, {
                    className: M.formItem,
                    children: [
                        (0, n.jsx)(o.TextInput, {
                            placeholder: 'Promotion Code',
                            value: Z,
                            onChange: (e) => v(e)
                        }),
                        (0, n.jsx)(o.Tooltip, {
                            text: 'Need Promotion Code',
                            shouldShow: Z.length < 1,
                            children: (e) => {
                                let { onMouseEnter: s, onMouseLeave: t } = e;
                                return (0, n.jsx)(o.Button, {
                                    disabled: Z.length < 1,
                                    onMouseEnter: s,
                                    onMouseLeave: t,
                                    onClick: () => {
                                        window.open(R.Z5c.BILLING_PROMOTION_REDEMPTION(Z));
                                    },
                                    children: 'Open Link'
                                });
                            }
                        })
                    ]
                }),
                (0, n.jsx)(o.FormDivider, { className: M.formDivider }),
                (0, n.jsx)(o.FormTitle, { children: 'Standalone: Gift/Subscription Purchase' }),
                (0, n.jsxs)(o.FormItem, {
                    className: M.formItem,
                    children: [
                        (0, n.jsx)(o.SingleSelect, {
                            value: j.plan_id,
                            options: [
                                {
                                    value: x.Xh.PREMIUM_MONTH_TIER_2,
                                    label: 'Nitro'
                                },
                                {
                                    value: x.Xh.PREMIUM_MONTH_TIER_1,
                                    label: 'Nitro Classic'
                                },
                                {
                                    value: x.Xh.PREMIUM_MONTH_TIER_0,
                                    label: 'Nitro Basic'
                                }
                            ],
                            onChange: (e) =>
                                B((s) => ({
                                    ...s,
                                    plan_id: e
                                }))
                        }),
                        (0, n.jsx)(o.SingleSelect, {
                            value: j.gift,
                            options: [
                                {
                                    value: 'true',
                                    label: 'Gift'
                                },
                                {
                                    value: 'false',
                                    label: 'Not Gift'
                                }
                            ],
                            onChange: (e) =>
                                B((s) => ({
                                    ...s,
                                    gift: e
                                }))
                        }),
                        (0, n.jsx)(o.Tooltip, {
                            text: 'Already subscribed',
                            shouldShow: U,
                            children: (e) => {
                                let { onMouseEnter: s, onMouseLeave: t } = e;
                                return (0, n.jsx)(o.Button, {
                                    onMouseLeave: t,
                                    onMouseEnter: s,
                                    disabled: U,
                                    onClick: () => {
                                        window.open(R.Z5c.BILLING_PREMIUM_SUBSCRIBE + '?' + i.stringify({ ...j }));
                                    },
                                    children: 'Open Link'
                                });
                            }
                        })
                    ]
                }),
                (0, n.jsx)(o.FormDivider, { className: M.formDivider }),
                (0, n.jsx)(o.FormTitle, { children: 'Creator Revenue' }),
                (0, n.jsxs)(o.FormItem, {
                    className: M.formItem,
                    children: [
                        (0, n.jsx)(o.Text, {
                            className: M.guildServerDescription,
                            variant: 'text-sm/normal',
                            children: 'Premium Server Subscription For'
                        }),
                        (0, n.jsx)(o.SingleSelect, {
                            value: G,
                            options: L,
                            onChange: (e) => F(e)
                        })
                    ]
                }),
                (0, n.jsx)(S.l, {
                    guildId: null == G ? void 0 : G.id,
                    children: (0, n.jsx)(f, { selectedGuildForGuildSub: G })
                }),
                (0, n.jsx)(o.FormDivider, { className: M.formDivider }),
                (0, n.jsx)(o.FormTitle, { children: 'Activities & Application Payment Modals' }),
                (0, n.jsxs)(o.FormItem, {
                    className: M.formItem,
                    children: [
                        (0, n.jsx)(o.TextInput, {
                            placeholder: 'Application Id',
                            value: V,
                            onChange: Y
                        }),
                        (0, n.jsx)(o.TextInput, {
                            placeholder: 'Sku Id',
                            value: k,
                            onChange: (e) => w(e)
                        }),
                        (0, n.jsx)(o.Button, {
                            onClick: () =>
                                (0, d.S)({
                                    applicationId: V,
                                    skuId: k,
                                    openPremiumPaymentModal: () => !0,
                                    analyticsLocations: [],
                                    analyticsLocationObject: { page: R.ZY5.IN_APP },
                                    context: R.IlC.APP
                                }),
                            children: 'Open App Subs Modal for Activity'
                        })
                    ]
                }),
                (0, n.jsx)(o.FormDivider, { className: M.formDivider }),
                (0, n.jsx)(o.FormTitle, { children: 'Standard Payment Modal Test' }),
                (0, n.jsxs)(o.FormItem, {
                    className: M.formItem,
                    children: [
                        (0, n.jsx)(o.TextInput, {
                            placeholder: 'Application Id',
                            value: H,
                            onChange: W
                        }),
                        (0, n.jsx)(o.TextInput, {
                            placeholder: 'SKU ID',
                            value: K,
                            onChange: (e) => z(e)
                        }),
                        (0, n.jsx)(o.Button, {
                            onClick: () =>
                                (0, A.Z)({
                                    applicationId: H,
                                    skuId: K,
                                    analyticsLocations: y
                                }),
                            children: 'Open Standard Payment Modal for SKU'
                        })
                    ]
                }),
                (0, n.jsx)(o.FormDivider, { className: M.formDivider }),
                (0, n.jsx)(o.FormTitle, { children: 'Collectibles Payment Modal Test' }),
                (0, n.jsxs)(o.FormItem, {
                    className: M.formItem,
                    children: [
                        (0, n.jsx)(o.TextInput, {
                            placeholder: 'SKU ID',
                            value: Q,
                            onChange: (e) => X(e)
                        }),
                        (0, n.jsx)(o.Button, {
                            onClick: () =>
                                (0, m.Z)({
                                    skuId: Q,
                                    analyticsLocations: y
                                }),
                            children: 'Open Collectibles Payment Modal for SKU'
                        })
                    ]
                }),
                (0, n.jsx)(o.FormDivider, { className: M.formDivider }),
                (0, n.jsx)(o.FormTitle, { children: 'Helpers' }),
                (0, n.jsxs)(o.FormItem, {
                    className: M.formItem,
                    children: [
                        (0, n.jsx)(o.Button, {
                            onClick: () => (0, c.mE)(),
                            children: 'Reset SubscriptionPlanStore'
                        }),
                        (0, n.jsx)(o.Button, {
                            onClick: () => (0, l.GM)(),
                            children: 'Reset SubscriptionStore'
                        })
                    ]
                }),
                (0, n.jsx)(o.FormDivider, { className: M.formDivider }),
                (0, n.jsx)(o.FormTitle, { children: 'Dismissible Content Framework' }),
                (0, n.jsx)(o.FormItem, {
                    className: M.formItem,
                    children: (0, n.jsx)(o.Button, {
                        onClick: () => (0, E.EG)(),
                        children: 'Reset DismissibleContentFrameworkStore'
                    })
                })
            ]
        })
    });
};

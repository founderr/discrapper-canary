n(47120);
var i = n(200651),
    s = n(192379),
    r = n(664751),
    l = n(442837),
    a = n(481060),
    o = n(355467),
    c = n(821849),
    d = n(72924),
    u = n(100527),
    m = n(906732),
    h = n(883904),
    g = n(678558),
    p = n(730647),
    x = n(584825),
    S = n(305342),
    T = n(333867),
    C = n(963249),
    _ = n(87484),
    E = n(197115),
    f = n(911367),
    I = n(430824),
    N = n(78839),
    A = n(981631),
    b = n(474936),
    v = n(793122);
function j(e) {
    let { selectedGuildForGuildSub: t } = e,
        n = (0, x.GG)(null == t ? void 0 : t.id)[0];
    return (0, i.jsx)(i.Fragment, {
        children:
            null != t && null != n
                ? (0, i.jsx)('div', {
                      className: v.formItem,
                      children: n.subscription_listings_ids.map((e) =>
                          (0, i.jsx)(
                              S.Z,
                              {
                                  guildId: t.id,
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
t.Z = function () {
    let [e, t] = s.useState(b.Si.TIER_2),
        [n, x] = s.useState(null),
        [S] = (0, l.Wu)([I.Z], () => [I.Z.getGuilds()]),
        [O] = (0, l.Wu)([N.ZP], () => [N.ZP.getPremiumSubscription()]);
    (0, f.t)();
    let R = Object.values(S).map((e) => ({
            value: e,
            label: e.name
        })),
        [P, D] = s.useState(R.length > 0 ? R[0].value : null),
        [y, B] = s.useState(''),
        [L, Z] = s.useState({
            plan_id: b.Xh.PREMIUM_MONTH_TIER_2,
            gift: 'true'
        }),
        F = 'true' !== L.gift && null != O,
        [M, k] = s.useState(R.length > 0 ? R[0].value : null),
        { analyticsLocations: w } = (0, m.ZP)(u.Z.PAYMENT_FLOW_TEST_PAGE),
        [U, V] = s.useState(''),
        [G, Y] = s.useState(A.lds),
        [H, z] = s.useState(''),
        [W, K] = s.useState(A.lds),
        [q, Q] = s.useState(A.lds);
    return (0, i.jsx)(m.Gt, {
        value: w,
        children: (0, i.jsxs)(a.FormSection, {
            title: 'Payment Flow Modals',
            tag: a.FormTitleTags.H1,
            children: [
                (0, i.jsx)(a.FormTitle, { children: 'Gift' }),
                (0, i.jsxs)(a.FormItem, {
                    className: v.formItem,
                    children: [
                        (0, i.jsx)(a.SingleSelect, {
                            value: e,
                            options: [
                                {
                                    value: b.Si.TIER_2,
                                    label: 'Nitro'
                                },
                                {
                                    value: b.Si.TIER_1,
                                    label: 'Nitro Classic'
                                },
                                {
                                    value: b.Si.TIER_0,
                                    label: 'Nitro Basic'
                                },
                                {
                                    value: null,
                                    label: 'None'
                                }
                            ],
                            onChange: (e) => t(e)
                        }),
                        (0, i.jsx)(E.Z, {
                            subscriptionTier: e,
                            isGift: !0,
                            premiumModalAnalyticsLocation: {}
                        })
                    ]
                }),
                (0, i.jsx)(a.FormDivider, { className: v.formDivider }),
                (0, i.jsx)(a.FormTitle, { children: 'Premium Select Plan' }),
                (0, i.jsxs)(a.FormItem, {
                    className: v.formItem,
                    children: [
                        (0, i.jsx)(a.SingleSelect, {
                            value: n,
                            options: [
                                {
                                    value: b.Si.TIER_2,
                                    label: 'Nitro'
                                },
                                {
                                    value: b.Si.TIER_1,
                                    label: 'Nitro Classic'
                                },
                                {
                                    value: b.Si.TIER_0,
                                    label: 'Nitro Basic'
                                },
                                {
                                    value: null,
                                    label: 'None'
                                }
                            ],
                            onChange: (e) => x(e)
                        }),
                        (0, i.jsx)(a.Button, {
                            onClick: () =>
                                (0, C.Z)({
                                    subscriptionTier: n,
                                    analyticsLocations: w
                                }),
                            children: 'Select Plan'
                        })
                    ]
                }),
                (0, i.jsx)(a.FormDivider, { className: v.formDivider }),
                (0, i.jsx)(a.FormTitle, { children: 'Boost' }),
                (0, i.jsxs)(a.FormItem, {
                    className: v.formItem,
                    children: [
                        (0, i.jsx)(a.SingleSelect, {
                            value: P,
                            options: R,
                            onChange: (e) => D(e)
                        }),
                        null != P
                            ? (0, i.jsx)(g.Z, {
                                  guild: P,
                                  analyticsLocation: {}
                              })
                            : (0, i.jsx)('div', { children: 'No Guild to boost' })
                    ]
                }),
                (0, i.jsx)(a.FormDivider, { className: v.formDivider }),
                (0, i.jsxs)(a.FormTitle, {
                    children: [
                        (0, i.jsx)('div', { children: 'Standalone: Trial Promotion Redemption' }),
                        (0, i.jsx)(a.Anchor, {
                            href: 'https://i.dis.gd/createPromo',
                            children: 'How to create promotion'
                        })
                    ]
                }),
                (0, i.jsxs)(a.FormItem, {
                    className: v.formItem,
                    children: [
                        (0, i.jsx)(a.TextInput, {
                            placeholder: 'Promotion Code',
                            value: y,
                            onChange: (e) => B(e)
                        }),
                        (0, i.jsx)(a.Tooltip, {
                            text: 'Need Promotion Code',
                            shouldShow: y.length < 1,
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(a.Button, {
                                    disabled: y.length < 1,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    onClick: () => {
                                        window.open(A.Z5c.BILLING_PROMOTION_REDEMPTION(y));
                                    },
                                    children: 'Open Link'
                                });
                            }
                        })
                    ]
                }),
                (0, i.jsx)(a.FormDivider, { className: v.formDivider }),
                (0, i.jsx)(a.FormTitle, { children: 'Standalone: Gift/Subscription Purchase' }),
                (0, i.jsxs)(a.FormItem, {
                    className: v.formItem,
                    children: [
                        (0, i.jsx)(a.SingleSelect, {
                            value: L.plan_id,
                            options: [
                                {
                                    value: b.Xh.PREMIUM_MONTH_TIER_2,
                                    label: 'Nitro'
                                },
                                {
                                    value: b.Xh.PREMIUM_MONTH_TIER_1,
                                    label: 'Nitro Classic'
                                },
                                {
                                    value: b.Xh.PREMIUM_MONTH_TIER_0,
                                    label: 'Nitro Basic'
                                }
                            ],
                            onChange: (e) =>
                                Z((t) => ({
                                    ...t,
                                    plan_id: e
                                }))
                        }),
                        (0, i.jsx)(a.SingleSelect, {
                            value: L.gift,
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
                                Z((t) => ({
                                    ...t,
                                    gift: e
                                }))
                        }),
                        (0, i.jsx)(a.Tooltip, {
                            text: 'Already subscribed',
                            shouldShow: F,
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(a.Button, {
                                    onMouseLeave: n,
                                    onMouseEnter: t,
                                    disabled: F,
                                    onClick: () => {
                                        window.open(A.Z5c.BILLING_PREMIUM_SUBSCRIBE + '?' + r.stringify({ ...L }));
                                    },
                                    children: 'Open Link'
                                });
                            }
                        })
                    ]
                }),
                (0, i.jsx)(a.FormDivider, { className: v.formDivider }),
                (0, i.jsx)(a.FormTitle, { children: 'Creator Revenue' }),
                (0, i.jsxs)(a.FormItem, {
                    className: v.formItem,
                    children: [
                        (0, i.jsx)(a.Text, {
                            className: v.guildServerDescription,
                            variant: 'text-sm/normal',
                            children: 'Premium Server Subscription For'
                        }),
                        (0, i.jsx)(a.SingleSelect, {
                            value: M,
                            options: R,
                            onChange: (e) => k(e)
                        })
                    ]
                }),
                (0, i.jsx)(p.l, {
                    guildId: null == M ? void 0 : M.id,
                    children: (0, i.jsx)(j, { selectedGuildForGuildSub: M })
                }),
                (0, i.jsx)(a.FormDivider, { className: v.formDivider }),
                (0, i.jsx)(a.FormTitle, { children: 'Activities & Application Payment Modals' }),
                (0, i.jsxs)(a.FormItem, {
                    className: v.formItem,
                    children: [
                        (0, i.jsx)(a.TextInput, {
                            placeholder: 'Application Id',
                            value: U,
                            onChange: V
                        }),
                        (0, i.jsx)(a.TextInput, {
                            placeholder: 'Sku Id',
                            value: G,
                            onChange: (e) => Y(e)
                        }),
                        (0, i.jsx)(a.Button, {
                            onClick: () =>
                                (0, d.S)({
                                    applicationId: U,
                                    skuId: G,
                                    openPremiumPaymentModal: () => !0,
                                    analyticsLocations: [],
                                    analyticsLocationObject: { page: A.ZY5.IN_APP },
                                    context: A.IlC.APP
                                }),
                            children: 'Open App Subs Modal for Activity'
                        })
                    ]
                }),
                (0, i.jsx)(a.FormDivider, { className: v.formDivider }),
                (0, i.jsx)(a.FormTitle, { children: 'Standard Payment Modal Test' }),
                (0, i.jsxs)(a.FormItem, {
                    className: v.formItem,
                    children: [
                        (0, i.jsx)(a.TextInput, {
                            placeholder: 'Application Id',
                            value: H,
                            onChange: z
                        }),
                        (0, i.jsx)(a.TextInput, {
                            placeholder: 'SKU ID',
                            value: W,
                            onChange: (e) => K(e)
                        }),
                        (0, i.jsx)(a.Button, {
                            onClick: () =>
                                (0, _.Z)({
                                    applicationId: H,
                                    skuId: W,
                                    analyticsLocations: w
                                }),
                            children: 'Open Standard Payment Modal for SKU'
                        })
                    ]
                }),
                (0, i.jsx)(a.FormDivider, { className: v.formDivider }),
                (0, i.jsx)(a.FormTitle, { children: 'Collectibles Payment Modal Test' }),
                (0, i.jsxs)(a.FormItem, {
                    className: v.formItem,
                    children: [
                        (0, i.jsx)(a.TextInput, {
                            placeholder: 'SKU ID',
                            value: q,
                            onChange: (e) => Q(e)
                        }),
                        (0, i.jsx)(a.Button, {
                            onClick: () =>
                                (0, T.Z)({
                                    skuId: q,
                                    analyticsLocations: w
                                }),
                            children: 'Open Collectibles Payment Modal for SKU'
                        })
                    ]
                }),
                (0, i.jsx)(a.FormDivider, { className: v.formDivider }),
                (0, i.jsx)(a.FormTitle, { children: 'Helpers' }),
                (0, i.jsxs)(a.FormItem, {
                    className: v.formItem,
                    children: [
                        (0, i.jsx)(a.Button, {
                            onClick: () => (0, c.mE)(),
                            children: 'Reset SubscriptionPlanStore'
                        }),
                        (0, i.jsx)(a.Button, {
                            onClick: () => (0, o.GM)(),
                            children: 'Reset SubscriptionStore'
                        })
                    ]
                }),
                (0, i.jsx)(a.FormDivider, { className: v.formDivider }),
                (0, i.jsx)(a.FormTitle, { children: 'Dismissible Content Framework' }),
                (0, i.jsx)(a.FormItem, {
                    className: v.formItem,
                    children: (0, i.jsx)(a.Button, {
                        onClick: () => (0, h.EG)(),
                        children: 'Reset DismissibleContentFrameworkStore'
                    })
                })
            ]
        })
    });
};

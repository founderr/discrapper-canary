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
    h = n(563262),
    g = n(883904),
    p = n(678558),
    x = n(730647),
    S = n(584825),
    T = n(305342),
    C = n(333867),
    _ = n(963249),
    E = n(87484),
    f = n(197115),
    I = n(911367),
    N = n(430824),
    A = n(78839),
    b = n(981631),
    v = n(474936),
    j = n(793122);
function O(e) {
    let { selectedGuildForGuildSub: t } = e,
        n = (0, S.GG)(null == t ? void 0 : t.id)[0];
    return (0, i.jsx)(i.Fragment, {
        children:
            null != t && null != n
                ? (0, i.jsx)('div', {
                      className: j.formItem,
                      children: n.subscription_listings_ids.map((e) =>
                          (0, i.jsx)(
                              T.Z,
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
    let [e, t] = s.useState(v.Si.TIER_2),
        [n, S] = s.useState(null),
        [T] = (0, l.Wu)([N.Z], () => [N.Z.getGuilds()]),
        [R] = (0, l.Wu)([A.ZP], () => [A.ZP.getPremiumSubscription()]);
    (0, I.t)();
    let P = Object.values(T).map((e) => ({
            value: e,
            label: e.name
        })),
        [D, y] = s.useState(P.length > 0 ? P[0].value : null),
        [B, L] = s.useState(''),
        [Z, F] = s.useState({
            plan_id: v.Xh.PREMIUM_MONTH_TIER_2,
            gift: 'true'
        }),
        M = 'true' !== Z.gift && null != R,
        [k, w] = s.useState(P.length > 0 ? P[0].value : null),
        { analyticsLocations: U } = (0, m.ZP)(u.Z.PAYMENT_FLOW_TEST_PAGE),
        [V, G] = s.useState(''),
        [Y, H] = s.useState(b.lds),
        { isSubmitting: z, responseMessage: W, redeemVirtualCurrency: K } = (0, h.f)(),
        [q, Q] = s.useState(b.lds),
        [X, J] = s.useState(''),
        [$, ee] = s.useState(b.lds),
        [et, en] = s.useState(b.lds);
    return (0, i.jsx)(m.Gt, {
        value: U,
        children: (0, i.jsxs)(a.FormSection, {
            title: 'Payment Flow Modals',
            tag: a.FormTitleTags.H1,
            children: [
                (0, i.jsx)(a.FormTitle, { children: 'Gift' }),
                (0, i.jsxs)(a.FormItem, {
                    className: j.formItem,
                    children: [
                        (0, i.jsx)(a.SingleSelect, {
                            value: e,
                            options: [
                                {
                                    value: v.Si.TIER_2,
                                    label: 'Nitro'
                                },
                                {
                                    value: v.Si.TIER_1,
                                    label: 'Nitro Classic'
                                },
                                {
                                    value: v.Si.TIER_0,
                                    label: 'Nitro Basic'
                                },
                                {
                                    value: null,
                                    label: 'None'
                                }
                            ],
                            onChange: (e) => t(e)
                        }),
                        (0, i.jsx)(f.Z, {
                            subscriptionTier: e,
                            isGift: !0,
                            premiumModalAnalyticsLocation: {}
                        })
                    ]
                }),
                (0, i.jsx)(a.FormDivider, { className: j.formDivider }),
                (0, i.jsx)(a.FormTitle, { children: 'Premium Select Plan' }),
                (0, i.jsxs)(a.FormItem, {
                    className: j.formItem,
                    children: [
                        (0, i.jsx)(a.SingleSelect, {
                            value: n,
                            options: [
                                {
                                    value: v.Si.TIER_2,
                                    label: 'Nitro'
                                },
                                {
                                    value: v.Si.TIER_1,
                                    label: 'Nitro Classic'
                                },
                                {
                                    value: v.Si.TIER_0,
                                    label: 'Nitro Basic'
                                },
                                {
                                    value: null,
                                    label: 'None'
                                }
                            ],
                            onChange: (e) => S(e)
                        }),
                        (0, i.jsx)(a.Button, {
                            onClick: () =>
                                (0, _.Z)({
                                    subscriptionTier: n,
                                    analyticsLocations: U
                                }),
                            children: 'Select Plan'
                        })
                    ]
                }),
                (0, i.jsx)(a.FormDivider, { className: j.formDivider }),
                (0, i.jsx)(a.FormTitle, { children: 'Boost' }),
                (0, i.jsxs)(a.FormItem, {
                    className: j.formItem,
                    children: [
                        (0, i.jsx)(a.SingleSelect, {
                            value: D,
                            options: P,
                            onChange: (e) => y(e)
                        }),
                        null != D
                            ? (0, i.jsx)(p.Z, {
                                  guild: D,
                                  analyticsLocation: {}
                              })
                            : (0, i.jsx)('div', { children: 'No Guild to boost' })
                    ]
                }),
                (0, i.jsx)(a.FormDivider, { className: j.formDivider }),
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
                    className: j.formItem,
                    children: [
                        (0, i.jsx)(a.TextInput, {
                            placeholder: 'Promotion Code',
                            value: B,
                            onChange: (e) => L(e)
                        }),
                        (0, i.jsx)(a.Tooltip, {
                            text: 'Need Promotion Code',
                            shouldShow: B.length < 1,
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(a.Button, {
                                    disabled: B.length < 1,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    onClick: () => {
                                        window.open(b.Z5c.BILLING_PROMOTION_REDEMPTION(B));
                                    },
                                    children: 'Open Link'
                                });
                            }
                        })
                    ]
                }),
                (0, i.jsx)(a.FormDivider, { className: j.formDivider }),
                (0, i.jsx)(a.FormTitle, { children: 'Standalone: Gift/Subscription Purchase' }),
                (0, i.jsxs)(a.FormItem, {
                    className: j.formItem,
                    children: [
                        (0, i.jsx)(a.SingleSelect, {
                            value: Z.plan_id,
                            options: [
                                {
                                    value: v.Xh.PREMIUM_MONTH_TIER_2,
                                    label: 'Nitro'
                                },
                                {
                                    value: v.Xh.PREMIUM_MONTH_TIER_1,
                                    label: 'Nitro Classic'
                                },
                                {
                                    value: v.Xh.PREMIUM_MONTH_TIER_0,
                                    label: 'Nitro Basic'
                                }
                            ],
                            onChange: (e) =>
                                F((t) => ({
                                    ...t,
                                    plan_id: e
                                }))
                        }),
                        (0, i.jsx)(a.SingleSelect, {
                            value: Z.gift,
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
                                F((t) => ({
                                    ...t,
                                    gift: e
                                }))
                        }),
                        (0, i.jsx)(a.Tooltip, {
                            text: 'Already subscribed',
                            shouldShow: M,
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(a.Button, {
                                    onMouseLeave: n,
                                    onMouseEnter: t,
                                    disabled: M,
                                    onClick: () => {
                                        window.open(b.Z5c.BILLING_PREMIUM_SUBSCRIBE + '?' + r.stringify({ ...Z }));
                                    },
                                    children: 'Open Link'
                                });
                            }
                        })
                    ]
                }),
                (0, i.jsx)(a.FormDivider, { className: j.formDivider }),
                (0, i.jsxs)('div', {
                    className: j.formBlock,
                    children: [
                        (0, i.jsx)(a.FormTitle, { children: 'Redeem Virtual Currency for SKU' }),
                        (0, i.jsx)(a.FormItem, {
                            className: j.formItem,
                            children: (0, i.jsx)(a.TextInput, {
                                placeholder: 'SKU ID',
                                value: q,
                                onChange: (e) => Q(e)
                            })
                        }),
                        (0, i.jsx)(a.FormItem, {
                            className: j.formItem,
                            children: (0, i.jsx)(a.Button, {
                                submitting: z,
                                onClick: () => K(q),
                                children: 'Redeem Virtual Currency for SKU'
                            })
                        }),
                        (0, i.jsx)(a.FormItem, {
                            className: j.formItem,
                            children: (0, i.jsx)(a.Text, {
                                variant: 'text-sm/normal',
                                children: W
                            })
                        })
                    ]
                }),
                (0, i.jsx)(a.FormDivider, { className: j.formDivider }),
                (0, i.jsx)(a.FormTitle, { children: 'Creator Revenue' }),
                (0, i.jsxs)(a.FormItem, {
                    className: j.formItem,
                    children: [
                        (0, i.jsx)(a.Text, {
                            className: j.guildServerDescription,
                            variant: 'text-sm/normal',
                            children: 'Premium Server Subscription For'
                        }),
                        (0, i.jsx)(a.SingleSelect, {
                            value: k,
                            options: P,
                            onChange: (e) => w(e)
                        })
                    ]
                }),
                (0, i.jsx)(x.l, {
                    guildId: null == k ? void 0 : k.id,
                    children: (0, i.jsx)(O, { selectedGuildForGuildSub: k })
                }),
                (0, i.jsx)(a.FormDivider, { className: j.formDivider }),
                (0, i.jsx)(a.FormTitle, { children: 'Activities & Application Payment Modals' }),
                (0, i.jsxs)(a.FormItem, {
                    className: j.formItem,
                    children: [
                        (0, i.jsx)(a.TextInput, {
                            placeholder: 'Application Id',
                            value: V,
                            onChange: G
                        }),
                        (0, i.jsx)(a.TextInput, {
                            placeholder: 'Sku Id',
                            value: Y,
                            onChange: (e) => H(e)
                        }),
                        (0, i.jsx)(a.Button, {
                            onClick: () =>
                                (0, d.S)({
                                    applicationId: V,
                                    skuId: Y,
                                    openPremiumPaymentModal: () => !0,
                                    analyticsLocations: [],
                                    analyticsLocationObject: { page: b.ZY5.IN_APP },
                                    context: b.IlC.APP
                                }),
                            children: 'Open App Subs Modal for Activity'
                        })
                    ]
                }),
                (0, i.jsx)(a.FormDivider, { className: j.formDivider }),
                (0, i.jsx)(a.FormTitle, { children: 'Standard Payment Modal Test' }),
                (0, i.jsxs)(a.FormItem, {
                    className: j.formItem,
                    children: [
                        (0, i.jsx)(a.TextInput, {
                            placeholder: 'Application Id',
                            value: X,
                            onChange: J
                        }),
                        (0, i.jsx)(a.TextInput, {
                            placeholder: 'SKU ID',
                            value: $,
                            onChange: (e) => ee(e)
                        }),
                        (0, i.jsx)(a.Button, {
                            onClick: () =>
                                (0, E.Z)({
                                    applicationId: X,
                                    skuId: $,
                                    analyticsLocations: U
                                }),
                            children: 'Open Standard Payment Modal for SKU'
                        })
                    ]
                }),
                (0, i.jsx)(a.FormDivider, { className: j.formDivider }),
                (0, i.jsx)(a.FormTitle, { children: 'Collectibles Payment Modal Test' }),
                (0, i.jsxs)(a.FormItem, {
                    className: j.formItem,
                    children: [
                        (0, i.jsx)(a.TextInput, {
                            placeholder: 'SKU ID',
                            value: et,
                            onChange: (e) => en(e)
                        }),
                        (0, i.jsx)(a.Button, {
                            onClick: () =>
                                (0, C.Z)({
                                    skuId: et,
                                    analyticsLocations: U
                                }),
                            children: 'Open Collectibles Payment Modal for SKU'
                        })
                    ]
                }),
                (0, i.jsx)(a.FormDivider, { className: j.formDivider }),
                (0, i.jsx)(a.FormTitle, { children: 'Helpers' }),
                (0, i.jsxs)(a.FormItem, {
                    className: j.formItem,
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
                (0, i.jsx)(a.FormDivider, { className: j.formDivider }),
                (0, i.jsx)(a.FormTitle, { children: 'Dismissible Content Framework' }),
                (0, i.jsx)(a.FormItem, {
                    className: j.formItem,
                    children: (0, i.jsx)(a.Button, {
                        onClick: () => (0, g.EG)(),
                        children: 'Reset DismissibleContentFrameworkStore'
                    })
                })
            ]
        })
    });
};

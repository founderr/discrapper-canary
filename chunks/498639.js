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
    g = n(228624),
    p = n(883904),
    x = n(678558),
    S = n(730647),
    T = n(584825),
    C = n(305342),
    _ = n(333867),
    E = n(963249),
    f = n(87484),
    I = n(197115),
    N = n(911367),
    A = n(430824),
    b = n(78839),
    v = n(981631),
    j = n(474936),
    O = n(793122);
function R(e) {
    let { selectedGuildForGuildSub: t } = e,
        n = (0, T.GG)(null == t ? void 0 : t.id)[0];
    return (0, i.jsx)(i.Fragment, {
        children:
            null != t && null != n
                ? (0, i.jsx)('div', {
                      className: O.formItem,
                      children: n.subscription_listings_ids.map((e) =>
                          (0, i.jsx)(
                              C.Z,
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
    let [e, t] = s.useState(j.Si.TIER_2),
        [n, T] = s.useState(null),
        [C] = (0, l.Wu)([A.Z], () => [A.Z.getGuilds()]),
        [P] = (0, l.Wu)([b.ZP], () => [b.ZP.getPremiumSubscription()]);
    (0, N.t)();
    let D = Object.values(C).map((e) => ({
            value: e,
            label: e.name
        })),
        [y, B] = s.useState(D.length > 0 ? D[0].value : null),
        [L, Z] = s.useState(''),
        [F, M] = s.useState({
            plan_id: j.Xh.PREMIUM_MONTH_TIER_2,
            gift: 'true'
        }),
        k = 'true' !== F.gift && null != P,
        [w, U] = s.useState(D.length > 0 ? D[0].value : null),
        { analyticsLocations: V } = (0, m.ZP)(u.Z.PAYMENT_FLOW_TEST_PAGE),
        [G, Y] = s.useState(''),
        [H, z] = s.useState(v.lds),
        { isSubmitting: W, responseMessage: K, redeemVirtualCurrency: q } = (0, h.f)(),
        [Q, X] = s.useState(v.lds),
        [J, $] = s.useState(''),
        [ee, et] = s.useState(v.lds),
        [en, ei] = s.useState(v.lds),
        es = (0, g.hv)('PaymentFlowModalTestPage');
    return (0, i.jsx)(m.Gt, {
        value: V,
        children: (0, i.jsxs)(a.FormSection, {
            title: 'Payment Flow Modals',
            tag: a.FormTitleTags.H1,
            children: [
                (0, i.jsx)(a.FormTitle, { children: 'Gift' }),
                (0, i.jsxs)(a.FormItem, {
                    className: O.formItem,
                    children: [
                        (0, i.jsx)(a.SingleSelect, {
                            value: e,
                            options: [
                                {
                                    value: j.Si.TIER_2,
                                    label: 'Nitro'
                                },
                                {
                                    value: j.Si.TIER_1,
                                    label: 'Nitro Classic'
                                },
                                {
                                    value: j.Si.TIER_0,
                                    label: 'Nitro Basic'
                                },
                                {
                                    value: null,
                                    label: 'None'
                                }
                            ],
                            onChange: (e) => t(e)
                        }),
                        (0, i.jsx)(I.Z, {
                            subscriptionTier: e,
                            isGift: !0,
                            premiumModalAnalyticsLocation: {}
                        })
                    ]
                }),
                (0, i.jsx)(a.FormDivider, { className: O.formDivider }),
                (0, i.jsx)(a.FormTitle, { children: 'Premium Select Plan' }),
                (0, i.jsxs)(a.FormItem, {
                    className: O.formItem,
                    children: [
                        (0, i.jsx)(a.SingleSelect, {
                            value: n,
                            options: [
                                {
                                    value: j.Si.TIER_2,
                                    label: 'Nitro'
                                },
                                {
                                    value: j.Si.TIER_1,
                                    label: 'Nitro Classic'
                                },
                                {
                                    value: j.Si.TIER_0,
                                    label: 'Nitro Basic'
                                },
                                {
                                    value: null,
                                    label: 'None'
                                }
                            ],
                            onChange: (e) => T(e)
                        }),
                        (0, i.jsx)(a.Button, {
                            onClick: () =>
                                (0, E.Z)({
                                    subscriptionTier: n,
                                    analyticsLocations: V
                                }),
                            children: 'Select Plan'
                        })
                    ]
                }),
                (0, i.jsx)(a.FormDivider, { className: O.formDivider }),
                (0, i.jsx)(a.FormTitle, { children: 'Boost' }),
                (0, i.jsxs)(a.FormItem, {
                    className: O.formItem,
                    children: [
                        (0, i.jsx)(a.SingleSelect, {
                            value: y,
                            options: D,
                            onChange: (e) => B(e)
                        }),
                        null != y
                            ? (0, i.jsx)(x.Z, {
                                  guild: y,
                                  analyticsLocation: {}
                              })
                            : (0, i.jsx)('div', { children: 'No Guild to boost' })
                    ]
                }),
                (0, i.jsx)(a.FormDivider, { className: O.formDivider }),
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
                    className: O.formItem,
                    children: [
                        (0, i.jsx)(a.TextInput, {
                            placeholder: 'Promotion Code',
                            value: L,
                            onChange: (e) => Z(e)
                        }),
                        (0, i.jsx)(a.Tooltip, {
                            text: 'Need Promotion Code',
                            shouldShow: L.length < 1,
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(a.Button, {
                                    disabled: L.length < 1,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    onClick: () => {
                                        window.open(v.Z5c.BILLING_PROMOTION_REDEMPTION(L));
                                    },
                                    children: 'Open Link'
                                });
                            }
                        })
                    ]
                }),
                (0, i.jsx)(a.FormDivider, { className: O.formDivider }),
                (0, i.jsx)(a.FormTitle, { children: 'Standalone: Gift/Subscription Purchase' }),
                (0, i.jsxs)(a.FormItem, {
                    className: O.formItem,
                    children: [
                        (0, i.jsx)(a.SingleSelect, {
                            value: F.plan_id,
                            options: [
                                {
                                    value: j.Xh.PREMIUM_MONTH_TIER_2,
                                    label: 'Nitro'
                                },
                                {
                                    value: j.Xh.PREMIUM_MONTH_TIER_1,
                                    label: 'Nitro Classic'
                                },
                                {
                                    value: j.Xh.PREMIUM_MONTH_TIER_0,
                                    label: 'Nitro Basic'
                                }
                            ],
                            onChange: (e) =>
                                M((t) => ({
                                    ...t,
                                    plan_id: e
                                }))
                        }),
                        (0, i.jsx)(a.SingleSelect, {
                            value: F.gift,
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
                                M((t) => ({
                                    ...t,
                                    gift: e
                                }))
                        }),
                        (0, i.jsx)(a.Tooltip, {
                            text: 'Already subscribed',
                            shouldShow: k,
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(a.Button, {
                                    onMouseLeave: n,
                                    onMouseEnter: t,
                                    disabled: k,
                                    onClick: () => {
                                        window.open(v.Z5c.BILLING_PREMIUM_SUBSCRIBE + '?' + r.stringify({ ...F }));
                                    },
                                    children: 'Open Link'
                                });
                            }
                        })
                    ]
                }),
                (0, i.jsx)(a.FormDivider, { className: O.formDivider }),
                (0, i.jsxs)('div', {
                    className: O.formBlock,
                    children: [
                        (0, i.jsx)(a.FormTitle, { children: 'Redeem Virtual Currency for SKU' }),
                        (0, i.jsx)(a.FormItem, {
                            className: O.formItem,
                            children: (0, i.jsx)(a.TextInput, {
                                placeholder: 'SKU ID',
                                value: Q,
                                onChange: (e) => X(e)
                            })
                        }),
                        (0, i.jsx)(a.FormItem, {
                            className: O.formItem,
                            children: (0, i.jsx)(a.Button, {
                                submitting: W,
                                onClick: () => q(Q),
                                children: 'Redeem Virtual Currency for SKU'
                            })
                        }),
                        (0, i.jsx)(a.FormItem, {
                            className: O.formItem,
                            children: (0, i.jsx)(a.Text, {
                                variant: 'text-sm/normal',
                                children: K
                            })
                        })
                    ]
                }),
                (0, i.jsx)(a.FormDivider, { className: O.formDivider }),
                (0, i.jsx)(a.FormTitle, { children: 'Creator Revenue' }),
                (0, i.jsxs)(a.FormItem, {
                    className: O.formItem,
                    children: [
                        (0, i.jsx)(a.Text, {
                            className: O.guildServerDescription,
                            variant: 'text-sm/normal',
                            children: 'Premium Server Subscription For'
                        }),
                        (0, i.jsx)(a.SingleSelect, {
                            value: w,
                            options: D,
                            onChange: (e) => U(e)
                        })
                    ]
                }),
                (0, i.jsx)(S.l, {
                    guildId: null == w ? void 0 : w.id,
                    children: (0, i.jsx)(R, { selectedGuildForGuildSub: w })
                }),
                (0, i.jsx)(a.FormDivider, { className: O.formDivider }),
                (0, i.jsx)(a.FormTitle, { children: 'Activities & Application Payment Modals' }),
                (0, i.jsxs)(a.FormItem, {
                    className: O.formItem,
                    children: [
                        (0, i.jsx)(a.TextInput, {
                            placeholder: 'Application Id',
                            value: G,
                            onChange: Y
                        }),
                        (0, i.jsx)(a.TextInput, {
                            placeholder: 'Sku Id',
                            value: H,
                            onChange: (e) => z(e)
                        }),
                        (0, i.jsx)(a.Button, {
                            onClick: () =>
                                (0, d.S)({
                                    applicationId: G,
                                    skuId: H,
                                    openPremiumPaymentModal: () => !0,
                                    analyticsLocations: [],
                                    analyticsLocationObject: { page: v.ZY5.IN_APP },
                                    context: v.IlC.APP
                                }),
                            children: 'Open App Subs Modal for Activity'
                        })
                    ]
                }),
                (0, i.jsx)(a.FormDivider, { className: O.formDivider }),
                (0, i.jsx)(a.FormTitle, { children: 'Standard Payment Modal Test' }),
                (0, i.jsxs)(a.FormItem, {
                    className: O.formItem,
                    children: [
                        (0, i.jsx)(a.TextInput, {
                            placeholder: 'Application Id',
                            value: J,
                            onChange: $
                        }),
                        (0, i.jsx)(a.TextInput, {
                            placeholder: 'SKU ID',
                            value: ee,
                            onChange: (e) => et(e)
                        }),
                        (0, i.jsx)(a.Button, {
                            onClick: () =>
                                (0, f.Z)({
                                    applicationId: J,
                                    skuId: ee,
                                    analyticsLocations: V
                                }),
                            children: 'Open Standard Payment Modal for SKU'
                        })
                    ]
                }),
                (0, i.jsx)(a.FormDivider, { className: O.formDivider }),
                (0, i.jsx)(a.FormTitle, { children: 'Collectibles Payment Modal Test' }),
                (0, i.jsxs)(a.FormItem, {
                    className: O.formItem,
                    children: [
                        (0, i.jsx)(a.TextInput, {
                            placeholder: 'SKU ID',
                            value: en,
                            onChange: (e) => ei(e)
                        }),
                        (0, i.jsx)(a.Button, {
                            onClick: () =>
                                (0, _.Z)({
                                    skuId: en,
                                    analyticsLocations: V,
                                    variantsReturnStyle: es
                                }),
                            children: 'Open Collectibles Payment Modal for SKU'
                        })
                    ]
                }),
                (0, i.jsx)(a.FormDivider, { className: O.formDivider }),
                (0, i.jsx)(a.FormTitle, { children: 'Helpers' }),
                (0, i.jsxs)(a.FormItem, {
                    className: O.formItem,
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
                (0, i.jsx)(a.FormDivider, { className: O.formDivider }),
                (0, i.jsx)(a.FormTitle, { children: 'Dismissible Content Framework' }),
                (0, i.jsx)(a.FormItem, {
                    className: O.formItem,
                    children: (0, i.jsx)(a.Button, {
                        onClick: () => (0, p.EG)(),
                        children: 'Reset DismissibleContentFrameworkStore'
                    })
                })
            ]
        })
    });
};

n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(399606),
    c = n(544891),
    s = n(481060),
    d = n(355467),
    u = n(78839),
    h = n(259580),
    m = n(709054),
    x = n(246992),
    f = n(981631),
    p = n(474936),
    g = n(219299),
    b = n(595058),
    v = n(423705);
let j = [
        {
            label: 'Nitro Monthly',
            value: p.Xh.PREMIUM_MONTH_TIER_2
        },
        {
            label: 'Nitro Yearly',
            value: p.Xh.PREMIUM_YEAR_TIER_2
        },
        {
            label: 'Nitro Classic Monthly',
            value: p.Xh.PREMIUM_MONTH_TIER_1
        },
        {
            label: 'Nitro Classic Yearly',
            value: p.Xh.PREMIUM_YEAR_TIER_1
        },
        {
            label: 'Basic Monthly',
            value: p.Xh.PREMIUM_MONTH_TIER_0
        },
        {
            label: 'Basic Yearly',
            value: p.Xh.PREMIUM_YEAR_TIER_0
        },
        {
            label: 'Reverse Trial 1-week',
            value: p.dO
        },
        {
            label: 'Reverse Trial 2-week',
            value: p.xT
        }
    ],
    _ = {
        [f.O0b.UNPAID]: 'Unpaid',
        [f.O0b.ACTIVE]: 'Active',
        [f.O0b.PAST_DUE]: 'Past Due',
        [f.O0b.CANCELED]: 'Canceled',
        [f.O0b.ENDED]: 'Ended',
        [f.O0b.ACCOUNT_HOLD]: 'Account Hold',
        [f.O0b.BILLING_RETRY]: 'Billing Retry',
        [f.O0b.PAUSED]: 'Paused',
        [f.O0b.PAUSE_PENDING]: 'Pause Pending'
    },
    C = [
        {
            label: 'Unpaid',
            value: f.O0b.UNPAID
        },
        {
            label: 'Active',
            value: f.O0b.ACTIVE
        },
        {
            label: 'Past Due',
            value: f.O0b.PAST_DUE
        },
        {
            label: 'Canceled',
            value: f.O0b.CANCELED
        },
        {
            label: 'Ended',
            value: f.O0b.ENDED
        },
        {
            label: 'Account Hold',
            value: f.O0b.ACCOUNT_HOLD
        },
        {
            label: 'Billing Retry',
            value: f.O0b.BILLING_RETRY
        },
        {
            label: 'Paused',
            value: f.O0b.PAUSED
        },
        {
            label: 'Pause Pending',
            value: f.O0b.PAUSE_PENDING
        }
    ];
function T() {
    let [e, t] = a.useState('511651880837840896'),
        n = (0, o.e7)([u.ZP], () => u.ZP.getPremiumSubscription()),
        l = async () => {
            await c.tn.post({
                url: '/debug/subscription',
                body: { plan_id: e }
            }),
                await (0, d.jg)();
        },
        h = async () => {
            await c.tn.del('/debug/subscription'), await (0, d.jg)();
        };
    return (0, r.jsx)(s.ScrollerThin, {
        className: i()(g.panel),
        children: (0, r.jsxs)('div', {
            className: v.panelInner,
            children: [
                (0, r.jsx)(s.Text, {
                    style: { marginBottom: '16px' },
                    variant: 'text-lg/bold',
                    children: 'Manage Subscription'
                }),
                (0, r.jsxs)('section', {
                    className: v.buttons,
                    children: [
                        null == n &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(s.Text, {
                                        variant: 'text-md/normal',
                                        children: ' Subscription Type'
                                    }),
                                    (0, r.jsx)(s.Select, {
                                        serialize: (e) => e,
                                        isSelected: (t) => t === e,
                                        options: j,
                                        select: t,
                                        popoutLayerContext: x.O$
                                    }),
                                    (0, r.jsx)(s.Button, {
                                        size: s.Button.Sizes.SMALL,
                                        onClick: l,
                                        children: 'Create Subscription'
                                    })
                                ]
                            }),
                        (0, r.jsx)(s.Button, {
                            size: s.Button.Sizes.SMALL,
                            onClick: h,
                            children: 'Delete Subscription'
                        })
                    ]
                }),
                null != n && (0, r.jsx)(S, { subscription: n })
            ]
        })
    });
}
function S(e) {
    var t;
    let { subscription: n } = e,
        [l, o] = a.useState(!1),
        [u, f] = a.useState(!1),
        g = (e) => ((null == e && (e = n.status), e in _) ? _[e] : 'Unknown status '.concat(e)),
        j = async (e) => {
            await c.tn.patch({
                url: '/debug/subscription',
                body: { subscription_status: e }
            }),
                await (0, d.jg)();
        },
        T = async (e) => {
            let t = new Date(e),
                r = m.default.fromTimestamp(t.getTime());
            await c.tn.patch({
                url: '/debug/subscription',
                body: {
                    subscription_status: n.status,
                    premium_streak_started_at: r
                }
            }),
                await (0, d.jg)();
        },
        S = p.GP[n.planIdFromItems].premiumType === p.p9.TIER_0;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.Text, {
                style: { marginTop: '15px' },
                variant: 'text-md/normal',
                children: 'Existing Subscription'
            }),
            (0, r.jsxs)('div', {
                className: i()(v.card, S ? v.gradientWrapperTier0 : v.gradientWrapperTier2),
                children: [
                    (0, r.jsxs)(s.Text, {
                        variant: 'text-md/normal',
                        children: [
                            'Type: ',
                            (() => {
                                let e = n.planIdFromItems;
                                return null == e ? 'No plan id' : e in p.GP ? p.GP[e].name : 'Unknown plan id '.concat(e);
                            })(),
                            ' '
                        ]
                    }),
                    (0, r.jsxs)(s.Text, {
                        variant: 'text-md/normal',
                        children: ['ID: ', n.id, ' ']
                    }),
                    (0, r.jsxs)(s.Text, {
                        style: { marginBottom: '15px' },
                        variant: 'text-md/normal',
                        children: ['Status: ', g()]
                    }),
                    null != n.metadata &&
                        (0, r.jsxs)('div', {
                            className: b.collapsablePane,
                            children: [
                                (0, r.jsxs)(s.Clickable, {
                                    onClick: () => {
                                        o(!l);
                                    },
                                    className: b.collapsablePaneHeader,
                                    children: [
                                        (0, r.jsx)('div', {
                                            children: (0, r.jsx)(s.Text, {
                                                variant: 'text-md/bold',
                                                children: 'Metadata'
                                            })
                                        }),
                                        (0, r.jsx)(h.Z, { direction: l ? h.Z.Directions.UP : h.Z.Directions.DOWN })
                                    ]
                                }),
                                l &&
                                    (0, r.jsx)('ul', {
                                        style: { marginBottom: '15px' },
                                        children: Object.entries(n.metadata).map((e) => {
                                            let [t, n] = e;
                                            return (0, r.jsxs)(
                                                'li',
                                                {
                                                    style: { margin: '8px 0' },
                                                    children: [
                                                        (0, r.jsx)(s.Text, {
                                                            variant: 'text-md/bold',
                                                            children: t
                                                        }),
                                                        (0, r.jsx)(s.Text, {
                                                            variant: 'text-sm/normal',
                                                            children: n
                                                        })
                                                    ]
                                                },
                                                t
                                            );
                                        })
                                    })
                            ]
                        }),
                    (0, r.jsxs)('div', {
                        className: b.collapsablePane,
                        children: [
                            (0, r.jsxs)(s.Clickable, {
                                onClick: () => {
                                    f(!u);
                                },
                                className: b.collapsablePaneHeader,
                                children: [
                                    (0, r.jsx)('div', {
                                        children: (0, r.jsx)(s.Text, {
                                            variant: 'text-md/bold',
                                            children: 'Modifications'
                                        })
                                    }),
                                    (0, r.jsx)(h.Z, { direction: u ? h.Z.Directions.UP : h.Z.Directions.DOWN })
                                ]
                            }),
                            u &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(s.FormSection, {
                                            title: 'Status',
                                            tag: s.FormTitleTags.H3,
                                            className: b.formSection,
                                            children: (0, r.jsx)(s.Select, {
                                                serialize: (e) => g(e),
                                                isSelected: (e) => e === n.status,
                                                options: C,
                                                select: j,
                                                popoutLayerContext: x.O$
                                            })
                                        }),
                                        (0, r.jsx)(s.FormSection, {
                                            title: 'Override Premium Streak Start Date',
                                            tag: s.FormTitleTags.H3,
                                            className: b.formSection,
                                            children: (0, r.jsx)('input', {
                                                type: 'date',
                                                value: null === (t = n.premiumSince) || void 0 === t ? void 0 : t.toISOString().substring(0, 10),
                                                onChange: (e) => T(e.target.value)
                                            })
                                        })
                                    ]
                                })
                        ]
                    })
                ]
            })
        ]
    });
}

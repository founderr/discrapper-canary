n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(47120);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(544891),
    s = n(481060),
    c = n(259580),
    d = n(55935),
    u = n(709054),
    h = n(246992),
    m = n(981631),
    x = n(474936),
    f = n(121978),
    p = n(423705);
let g = {
        [m.O0b.UNPAID]: 'Unpaid',
        [m.O0b.ACTIVE]: 'Active',
        [m.O0b.PAST_DUE]: 'Past Due',
        [m.O0b.CANCELED]: 'Canceled',
        [m.O0b.ENDED]: 'Ended',
        [m.O0b.ACCOUNT_HOLD]: 'Account Hold',
        [m.O0b.BILLING_RETRY]: 'Billing Retry',
        [m.O0b.PAUSED]: 'Paused',
        [m.O0b.PAUSE_PENDING]: 'Pause Pending'
    },
    b = [
        {
            label: 'Unpaid',
            value: m.O0b.UNPAID
        },
        {
            label: 'Active',
            value: m.O0b.ACTIVE
        },
        {
            label: 'Past Due',
            value: m.O0b.PAST_DUE
        },
        {
            label: 'Canceled',
            value: m.O0b.CANCELED
        },
        {
            label: 'Ended',
            value: m.O0b.ENDED
        },
        {
            label: 'Account Hold',
            value: m.O0b.ACCOUNT_HOLD
        },
        {
            label: 'Billing Retry',
            value: m.O0b.BILLING_RETRY
        },
        {
            label: 'Paused',
            value: m.O0b.PAUSED
        },
        {
            label: 'Pause Pending',
            value: m.O0b.PAUSE_PENDING
        }
    ];
function v(e) {
    var t;
    let { subscription: n, onUpdated: l } = e,
        [v, j] = a.useState(!1),
        [_, C] = a.useState(!1),
        T = (e) => ((null == e && (e = n.status), e in g) ? g[e] : 'Unknown status '.concat(e)),
        S = async (e) => {
            await o.tn.patch({
                url: '/debug/subscriptions/'.concat(n.id),
                body: { subscription_status: e }
            }),
                l();
        },
        N = async (e) => {
            let t = new Date(e),
                r = u.default.fromTimestamp(t.getTime());
            await o.tn.patch({
                url: '/debug/subscriptions/'.concat(n.id),
                body: {
                    subscription_status: n.status,
                    premium_streak_started_at: r
                }
            }),
                l();
        },
        y = x.GP[n.planIdFromItems].premiumType === x.p9.TIER_0;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsxs)('div', {
            className: i()(p.card, y ? p.gradientWrapperTier0 : p.gradientWrapperTier2),
            children: [
                (0, r.jsxs)(s.Text, {
                    variant: 'text-md/normal',
                    children: [
                        'Type: ',
                        (() => {
                            let e = n.planIdFromItems;
                            return null == e ? 'No plan id' : e in x.GP ? x.GP[e].name : 'Unknown plan id '.concat(e);
                        })(),
                        ' '
                    ]
                }),
                (0, r.jsxs)(s.Text, {
                    variant: 'text-md/normal',
                    children: ['ID: ', n.id, ' ']
                }),
                n.status !== m.O0b.ACTIVE &&
                    (0, r.jsxs)(s.Text, {
                        variant: 'text-md/normal',
                        children: ['Dates: ', (0, d.vc)(n.createdAt, 'LL'), ' - ', (0, d.vc)(n.currentPeriodEnd, 'LL')]
                    }),
                (0, r.jsxs)(s.Text, {
                    style: { marginBottom: '15px' },
                    variant: 'text-md/normal',
                    children: ['Status: ', T()]
                }),
                null != n.metadata &&
                    (0, r.jsxs)('div', {
                        className: f.collapsablePane,
                        children: [
                            (0, r.jsxs)(s.Clickable, {
                                onClick: () => {
                                    j(!v);
                                },
                                className: f.collapsablePaneHeader,
                                children: [
                                    (0, r.jsx)('div', {
                                        children: (0, r.jsx)(s.Text, {
                                            variant: 'text-md/bold',
                                            children: 'Metadata'
                                        })
                                    }),
                                    (0, r.jsx)(c.Z, { direction: v ? c.Z.Directions.UP : c.Z.Directions.DOWN })
                                ]
                            }),
                            v &&
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
                    className: f.collapsablePane,
                    children: [
                        (0, r.jsxs)(s.Clickable, {
                            onClick: () => {
                                C(!_);
                            },
                            className: f.collapsablePaneHeader,
                            children: [
                                (0, r.jsx)('div', {
                                    children: (0, r.jsx)(s.Text, {
                                        variant: 'text-md/bold',
                                        children: 'Modifications'
                                    })
                                }),
                                (0, r.jsx)(c.Z, { direction: _ ? c.Z.Directions.UP : c.Z.Directions.DOWN })
                            ]
                        }),
                        _ &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(s.FormSection, {
                                        title: 'Status',
                                        tag: s.FormTitleTags.H3,
                                        className: f.formSection,
                                        children: (0, r.jsx)(s.Select, {
                                            serialize: (e) => T(e),
                                            isSelected: (e) => e === n.status,
                                            options: b,
                                            select: S,
                                            popoutLayerContext: h.O$
                                        })
                                    }),
                                    (0, r.jsx)(s.FormSection, {
                                        title: 'Override Premium Streak Start Date',
                                        tag: s.FormTitleTags.H3,
                                        className: f.formSection,
                                        children: (0, r.jsx)('input', {
                                            type: 'date',
                                            value: null === (t = n.premiumSince) || void 0 === t ? void 0 : t.toISOString().substring(0, 10),
                                            onChange: (e) => N(e.target.value)
                                        })
                                    })
                                ]
                            })
                    ]
                })
            ]
        })
    });
}

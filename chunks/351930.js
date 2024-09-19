n.d(t, {
    Z: function () {
        return j;
    }
}),
    n(47120);
var r = n(735250),
    a = n(470079),
    l = n(120356),
    i = n.n(l),
    o = n(399606),
    c = n(544891),
    s = n(481060),
    d = n(355467),
    u = n(78839),
    h = n(709054),
    m = n(246992),
    f = n(981631),
    x = n(219299),
    p = n(423705);
let g = [
        {
            label: 'Nitro Monthly',
            value: '511651880837840896'
        },
        {
            label: 'Nitro Yearly',
            value: '511651885459963904'
        },
        {
            label: 'Nitro Classic Monthly',
            value: '511651871736201216'
        },
        {
            label: 'Nitro Classic Yearly',
            value: '511651876987469824'
        },
        {
            label: 'Basic Monthly',
            value: '978380692553465866'
        },
        {
            label: 'Basic Yearly',
            value: '1024422698568122368'
        },
        {
            label: 'Reverse Trial 1-week',
            value: '1267968635301789696'
        },
        {
            label: 'Reverse Trial 2-week',
            value: '1267969164312576000'
        }
    ],
    b = {
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
    v = [
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
    ],
    _ = {
        '511651880837840896': 'Nitro Monthly',
        '511651885459963904': 'Nitro Yearly',
        '511651871736201216': 'Nitro Classic Monthly',
        '511651876987469824': 'Nitro Classic Yearly',
        '978380692553465866': 'Basic Monthly',
        '1024422698568122368': 'Basic Yearly'
    };
function j() {
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
        className: i()(x.panel),
        children: (0, r.jsxs)('div', {
            className: p.panelInner,
            children: [
                (0, r.jsx)(s.Text, {
                    style: { marginBottom: '16px' },
                    variant: 'text-lg/bold',
                    children: 'Manage Subscription'
                }),
                (0, r.jsxs)('section', {
                    className: p.buttons,
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
                                        options: g,
                                        select: t,
                                        popoutLayerContext: m.O$
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
                null != n && (0, r.jsx)(C, { subscription: n })
            ]
        })
    });
}
function C(e) {
    var t;
    let { subscription: n } = e,
        a = (e) => ((null == e && (e = n.status), e in b) ? b[e] : 'Unknown status '.concat(e)),
        l = async (e) => {
            await c.tn.patch({
                url: '/debug/subscription',
                body: { subscription_status: e }
            }),
                await (0, d.jg)();
        },
        o = async (e) => {
            let t = new Date(e),
                r = h.default.fromTimestamp(t.getTime());
            await c.tn.patch({
                url: '/debug/subscription',
                body: {
                    subscription_status: n.status,
                    premium_streak_started_at: r
                }
            }),
                await (0, d.jg)();
        },
        u =
            n.planIdFromItems in
            {
                '978380692553465866': !0,
                '1024422698568122368': !0
            };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.Text, {
                style: { marginTop: '15px' },
                variant: 'text-md/normal',
                children: 'Existing Subscription'
            }),
            (0, r.jsxs)('div', {
                className: i()(p.card, u ? p.gradientWrapperTier0 : p.gradientWrapperTier2),
                children: [
                    (0, r.jsxs)(s.Text, {
                        variant: 'text-md/normal',
                        children: [
                            ' Subscription Type: ',
                            (() => {
                                let e = n.planIdFromItems;
                                return null == e ? 'No plan id' : e in _ ? _[e] : 'Unknown plan id '.concat(e);
                            })(),
                            ' '
                        ]
                    }),
                    (0, r.jsxs)(s.Text, {
                        variant: 'text-md/normal',
                        children: [' Subscription ID ', n.id, ' ']
                    }),
                    (0, r.jsxs)(s.Text, {
                        style: { marginBottom: '15px' },
                        variant: 'text-md/normal',
                        children: ['Subscription Status: ', a()]
                    }),
                    (0, r.jsx)(s.Select, {
                        serialize: (e) => a(e),
                        isSelected: (e) => e === n.status,
                        options: v,
                        select: l,
                        popoutLayerContext: m.O$
                    }),
                    (0, r.jsx)(s.FormSection, {
                        title: 'Override Premium Streak Start Date',
                        tag: s.FormTitleTags.H3,
                        className: x.premiumStreakOverride,
                        children: (0, r.jsx)('input', {
                            type: 'date',
                            value: null === (t = n.premiumSince) || void 0 === t ? void 0 : t.toISOString().substring(0, 10),
                            onChange: (e) => o(e.target.value)
                        })
                    })
                ]
            })
        ]
    });
}

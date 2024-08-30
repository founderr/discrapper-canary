n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(47120),
    n(411104);
var r = n(735250),
    a = n(470079),
    l = n(120356),
    i = n.n(l),
    o = n(399606),
    c = n(544891),
    s = n(481060),
    u = n(355467),
    d = n(78839),
    h = n(246992),
    m = n(981631),
    x = n(535271),
    f = n(384712);
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
    p = {
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
    ],
    v = {
        '511651880837840896': 'Nitro Monthly',
        '511651885459963904': 'Nitro Yearly',
        '511651871736201216': 'Nitro Classic Monthly',
        '511651876987469824': 'Nitro Classic Yearly',
        '978380692553465866': 'Basic Monthly',
        '1024422698568122368': 'Basic Yearly'
    };
function _() {
    let [e, t] = a.useState('511651880837840896'),
        n = (0, o.e7)([d.ZP], () => d.ZP.getPremiumSubscription()),
        l = async () => {
            await c.tn.post({
                url: '/debug/subscription',
                body: { plan_id: e }
            }),
                await (0, u.jg)();
        },
        m = async () => {
            await c.tn.del('/debug/subscription'), await (0, u.jg)();
        };
    return (0, r.jsx)(s.ScrollerThin, {
        className: i()(x.panel),
        children: (0, r.jsxs)('div', {
            className: f.panelInner,
            children: [
                (0, r.jsx)(s.Text, {
                    style: { marginBottom: '16px' },
                    variant: 'text-lg/bold',
                    children: 'Manage Subscription'
                }),
                (0, r.jsxs)('section', {
                    className: f.buttons,
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
                                        popoutLayerContext: h.O$
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
                            onClick: m,
                            children: 'Delete Subscription'
                        })
                    ]
                }),
                null != n && (0, r.jsx)(j, { subscription: n })
            ]
        })
    });
}
function j(e) {
    let { subscription: t } = e,
        n = (e) => {
            if ((null == e && (e = t.status), e in p)) return p[e];
            throw Error('Unknown status');
        },
        a = async (e) => {
            await c.tn.patch({
                url: '/debug/subscription',
                body: { subscription_status: e }
            });
        },
        l =
            t.planIdFromItems in
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
                className: i()(f.card, l ? f.gradientWrapperTier0 : f.gradientWrapperTier2),
                children: [
                    (0, r.jsxs)(s.Text, {
                        variant: 'text-md/normal',
                        children: [
                            ' Subscription Type: ',
                            (() => {
                                let e = t.planIdFromItems;
                                if (null == e) throw Error('No plan id');
                                if (e in v) return v[e];
                                throw Error('Unknown plan id');
                            })(),
                            ' '
                        ]
                    }),
                    (0, r.jsxs)(s.Text, {
                        variant: 'text-md/normal',
                        children: [' Subscription ID ', t.id, ' ']
                    }),
                    (0, r.jsxs)(s.Text, {
                        style: { marginBottom: '15px' },
                        variant: 'text-md/normal',
                        children: ['Subscription Status: ', n()]
                    }),
                    (0, r.jsx)(s.Select, {
                        serialize: (e) => n(e),
                        isSelected: (e) => e === t.status,
                        options: b,
                        select: a,
                        popoutLayerContext: h.O$
                    })
                ]
            })
        ]
    });
}

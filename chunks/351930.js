n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(544891),
    c = n(481060),
    s = n(255078),
    d = n(246992),
    u = n(41340),
    h = n(981631),
    m = n(474936),
    x = n(219299),
    f = n(423705);
let p = async () =>
        (
            await o.tn.get({
                url: h.ANM.BILLING_SUBSCRIPTIONS,
                query: {
                    include_inactive: !0,
                    limit: 5
                },
                rejectWithError: !1
            })
        ).body.map((e) => s.Z.createFromServer(e)),
    b = [
        {
            label: 'Nitro Monthly',
            value: m.Xh.PREMIUM_MONTH_TIER_2
        },
        {
            label: 'Nitro Yearly',
            value: m.Xh.PREMIUM_YEAR_TIER_2
        },
        {
            label: 'Nitro Classic Monthly',
            value: m.Xh.PREMIUM_MONTH_TIER_1
        },
        {
            label: 'Nitro Classic Yearly',
            value: m.Xh.PREMIUM_YEAR_TIER_1
        },
        {
            label: 'Basic Monthly',
            value: m.Xh.PREMIUM_MONTH_TIER_0
        },
        {
            label: 'Basic Yearly',
            value: m.Xh.PREMIUM_YEAR_TIER_0
        },
        {
            label: 'Reverse Trial 1-week',
            value: m.dO
        },
        {
            label: 'Reverse Trial 2-week',
            value: m.xT
        }
    ];
function g() {
    let [e, t] = a.useState('511651880837840896'),
        [n, l] = a.useState([]),
        s = async () => {
            l(await p());
        };
    a.useEffect(() => {
        s();
    }, []);
    let m = a.useMemo(() => n.find((e) => e.status === h.O0b.ACTIVE), [n]),
        g = a.useMemo(() => n.filter((e) => e.status !== h.O0b.ACTIVE).sort((e, t) => (e.id > t.id ? -1 : 1)), [n]),
        v = async () => {
            await o.tn.post({
                url: '/debug/subscription',
                body: { plan_id: e },
                rejectWithError: !1
            }),
                await s();
        },
        C = async () => {
            await o.tn.del({
                url: '/debug/subscription',
                rejectWithError: !1
            }),
                await s();
        };
    return (0, r.jsx)(c.ScrollerThin, {
        className: i()(x.panel),
        children: (0, r.jsxs)('div', {
            className: f.panelInner,
            children: [
                (0, r.jsx)(c.Text, {
                    style: { marginBottom: '16px' },
                    variant: 'text-lg/bold',
                    children: 'Manage Subscription'
                }),
                (0, r.jsxs)('section', {
                    className: f.buttons,
                    children: [
                        null == m &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(c.Text, {
                                        variant: 'text-md/normal',
                                        children: ' Subscription Type'
                                    }),
                                    (0, r.jsx)(c.Select, {
                                        serialize: (e) => e,
                                        isSelected: (t) => t === e,
                                        options: b,
                                        select: t,
                                        popoutLayerContext: d.O$
                                    }),
                                    (0, r.jsx)(c.Button, {
                                        size: c.Button.Sizes.SMALL,
                                        onClick: v,
                                        children: 'Create Subscription'
                                    })
                                ]
                            }),
                        (0, r.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: C,
                            children: 'Delete Subscription'
                        })
                    ]
                }),
                null != m &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(c.Text, {
                                style: { marginTop: '15px' },
                                variant: 'text-md/normal',
                                children: 'Existing active subscription'
                            }),
                            (0, r.jsx)(u.Z, {
                                subscription: m,
                                onUpdated: s
                            })
                        ]
                    }),
                g.length > 0 &&
                    (0, r.jsxs)('div', {
                        style: { marginTop: '8px' },
                        children: [
                            (0, r.jsx)(c.Text, {
                                style: { marginTop: '15px' },
                                variant: 'text-md/normal',
                                children: 'Previous subscriptions'
                            }),
                            g.map((e) =>
                                (0, r.jsx)(
                                    u.Z,
                                    {
                                        subscription: e,
                                        onUpdated: s
                                    },
                                    e.id
                                )
                            )
                        ]
                    })
            ]
        })
    });
}

r.d(t, {
    Z: function () {
        return E;
    }
}),
    r(47120);
var a = r(735250),
    n = r(470079),
    i = r(120356),
    o = r.n(i),
    l = r(913527),
    c = r.n(l),
    s = r(442837),
    d = r(481060),
    u = r(129861),
    h = r(665149),
    m = r(594174),
    g = r(55935),
    p = r(120816),
    b = r(31336),
    f = r(257785),
    x = r(484036),
    y = r(681619),
    k = r(621060),
    v = r(689938),
    _ = r(408126),
    j = r(535271);
let w = [
    {
        key: 'event',
        cellClassName: _.eventColumn,
        render(e) {
            let { event: t } = e;
            return t;
        }
    },
    {
        key: 'location',
        cellClassName: _.locationColumn,
        render(e) {
            let { properties: t } = e;
            return null == t.location ? null : t.location;
        }
    }
];
function C(e) {
    let { children: t } = e;
    return (0, a.jsx)(d.ScrollerThin, {
        className: _.customPropertiesContainer,
        children: (0, a.jsx)('dl', { children: t })
    });
}
function T(e) {
    let { name: t, children: r } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)('dt', {
                className: _.customPropertiesName,
                children: t
            }),
            (0, a.jsx)('dd', {
                className: _.customPropertiesValue,
                children: r
            })
        ]
    });
}
let S = [
        {
            id: 'details',
            name: 'Details',
            render: (e) => {
                let {
                        loggedEvent: { event: t, properties: r, timestamp: n, fingerprint: i },
                        onClose: l
                    } = e,
                    s = m.default.getUser(i),
                    p = c()(n);
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)(h.ZP, {
                            className: o()(j.headerBar, _.subPanelHeaderBar),
                            children: [
                                (0, a.jsx)(h.ZP.Icon, {
                                    icon: d.AnalyticsIcon,
                                    tooltip: t
                                }),
                                (0, a.jsx)(h.ZP.Title, {
                                    wrapperClassName: j.headerTitle,
                                    children: t
                                }),
                                (0, a.jsx)(h.ZP.Icon, {
                                    icon: d.CircleXIcon,
                                    tooltip: 'Close',
                                    onClick: l
                                })
                            ]
                        }),
                        (0, a.jsxs)(f.E, {
                            className: _.commonProperties,
                            children: [
                                (0, a.jsx)(f.Z9, {
                                    name: 'Timestamp (local)',
                                    children: (0, a.jsx)('time', {
                                        dateTime: n.toISOString(),
                                        title: (0, g.vc)(p, 'LLLL'),
                                        children: (0, g.Y4)(p)
                                    })
                                }),
                                null != s &&
                                    (0, a.jsx)(f.Z9, {
                                        name: 'User',
                                        children: (0, a.jsx)(u.Z, { user: s })
                                    }),
                                (0, a.jsx)(f.Z9, {
                                    name: 'Fingerprint',
                                    children: (0, a.jsx)('code', { children: i })
                                })
                            ]
                        }),
                        (0, a.jsx)(C, {
                            children: Object.entries(r).map((e) => {
                                let [t, r] = e;
                                return (0, a.jsx)(
                                    T,
                                    {
                                        name: ''.concat(t, ':'),
                                        children:
                                            null != r
                                                ? (0, a.jsx)('code', { children: JSON.stringify(r) })
                                                : (0, a.jsx)('code', {
                                                      className: _.emptyProperty,
                                                      children: 'null'
                                                  })
                                    },
                                    t
                                );
                            })
                        })
                    ]
                });
            }
        }
    ],
    N = {
        events: {
            label: 'Events',
            filter: (e) =>
                Object.entries(N)
                    .filter((e) => {
                        let [t] = e;
                        return 'events' !== t;
                    })
                    .map((t) => {
                        let [r, { filter: a }] = t;
                        return !a(e);
                    })
                    .every((e) => e)
        },
        experiments: {
            label: 'Experiments',
            filter: (e) => ['experiment_user_triggered', 'experiment_guild_triggered'].includes(e.event)
        },
        impressions: {
            label: 'Impressions',
            filter: (e) => e.event.startsWith('impression_')
        },
        networkActions: {
            label: 'Network',
            filter: (e) => e.event.startsWith('network_action')
        }
    };
function E() {
    let e = n.useRef(null),
        t = (0, s.e7)([p.Z], () => p.Z.loggedEvents),
        [r, i] = n.useState(Object.keys(N)),
        l = t.filter((e) => {
            for (let t of r) if (N[t].filter(e)) return !0;
            return !1;
        }),
        [c, u] = n.useState(void 0),
        h = l.find((e) => e.key === c),
        { TabBar: m, renderSelectedTab: g } = (0, k.Z)({ tabs: S }, []);
    return (0, a.jsxs)('div', {
        ref: e,
        className: o()(j.panel, _.panel),
        children: [
            (0, a.jsxs)('div', {
                className: _.toolbar,
                children: [
                    (0, a.jsx)(d.Button, {
                        className: _.toolbarButton,
                        look: d.Button.Looks.BLANK,
                        size: d.Button.Sizes.ICON,
                        onClick: b.Zw,
                        children: (0, a.jsx)('span', {
                            title: v.Z.Messages.CLEAR,
                            children: (0, a.jsx)(d.TrashIcon, {
                                size: 'md',
                                color: 'currentColor',
                                'aria-label': v.Z.Messages.CLEAR
                            })
                        })
                    }),
                    (0, a.jsx)('div', { className: _.toolbarDivider }),
                    (0, a.jsx)('div', {
                        className: _.filters,
                        children: Object.entries(N).map((e) => {
                            let [t, n] = e;
                            return (0, a.jsx)(
                                d.Clickable,
                                {
                                    className: o()(_.filter, r.includes(t) && _.activeFilter),
                                    onClick: () => {
                                        var e;
                                        return (e = t), void i((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
                                    },
                                    children: n.label
                                },
                                t
                            );
                        })
                    })
                ]
            }),
            (0, a.jsx)(y.Z, {
                columns: w,
                data: l,
                selectedRowKey: c,
                onClickRow: (e) => u(e.key)
            }),
            null != h &&
                (0, a.jsxs)(x.Z, {
                    className: _.subPanel,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [
                        (0, a.jsx)(m, {}),
                        g({
                            loggedEvent: h,
                            onClose: () => u(void 0)
                        })
                    ]
                })
        ]
    });
}

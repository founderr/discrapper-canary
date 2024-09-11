n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var r = n(735250),
    a = n(470079),
    l = n(120356),
    i = n.n(l),
    o = n(913527),
    s = n.n(o),
    c = n(442837),
    u = n(481060),
    d = n(129861),
    h = n(665149),
    m = n(594174),
    x = n(55935),
    f = n(120816),
    p = n(31336),
    g = n(257785),
    b = n(484036),
    v = n(681619),
    j = n(621060),
    C = n(689938),
    _ = n(574001),
    T = n(219299);
let S = [
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
function N(e) {
    let { children: t } = e;
    return (0, r.jsx)(u.ScrollerThin, {
        className: _.customPropertiesContainer,
        children: (0, r.jsx)('dl', { children: t })
    });
}
function y(e) {
    let { name: t, children: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('dt', {
                className: _.customPropertiesName,
                children: t
            }),
            (0, r.jsx)('dd', {
                className: _.customPropertiesValue,
                children: n
            })
        ]
    });
}
let I = [
        {
            id: 'details',
            name: 'Details',
            render: (e) => {
                let {
                        loggedEvent: { event: t, properties: n, timestamp: a, fingerprint: l },
                        onClose: o
                    } = e,
                    c = m.default.getUser(l),
                    f = s()(a);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(h.ZP, {
                            className: i()(T.headerBar, _.subPanelHeaderBar),
                            children: [
                                (0, r.jsx)(h.ZP.Icon, {
                                    icon: u.AnalyticsIcon,
                                    tooltip: t
                                }),
                                (0, r.jsx)(h.ZP.Title, {
                                    wrapperClassName: T.headerTitle,
                                    children: t
                                }),
                                (0, r.jsx)(h.ZP.Icon, {
                                    icon: u.CircleXIcon,
                                    tooltip: 'Close',
                                    onClick: o
                                })
                            ]
                        }),
                        (0, r.jsxs)(g.E, {
                            className: _.commonProperties,
                            children: [
                                (0, r.jsx)(g.Z9, {
                                    name: 'Timestamp (local)',
                                    children: (0, r.jsx)('time', {
                                        dateTime: a.toISOString(),
                                        title: (0, x.vc)(f, 'LLLL'),
                                        children: (0, x.Y4)(f)
                                    })
                                }),
                                null != c &&
                                    (0, r.jsx)(g.Z9, {
                                        name: 'User',
                                        children: (0, r.jsx)(d.Z, { user: c })
                                    }),
                                (0, r.jsx)(g.Z9, {
                                    name: 'Fingerprint',
                                    children: (0, r.jsx)('code', { children: l })
                                })
                            ]
                        }),
                        (0, r.jsx)(N, {
                            children: Object.entries(n).map((e) => {
                                let [t, n] = e;
                                return (0, r.jsx)(
                                    y,
                                    {
                                        name: ''.concat(t, ':'),
                                        children:
                                            null != n
                                                ? (0, r.jsx)('code', { children: JSON.stringify(n) })
                                                : (0, r.jsx)('code', {
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
    w = {
        events: {
            label: 'Events',
            filter: (e) =>
                Object.entries(w)
                    .filter((e) => {
                        let [t] = e;
                        return 'events' !== t;
                    })
                    .map((t) => {
                        let [n, { filter: r }] = t;
                        return !r(e);
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
    let e = a.useRef(null),
        t = (0, c.e7)([f.Z], () => f.Z.loggedEvents),
        [n, l] = a.useState(Object.keys(w)),
        o = t.filter((e) => {
            for (let t of n) if (w[t].filter(e)) return !0;
            return !1;
        }),
        [s, d] = a.useState(void 0),
        h = o.find((e) => e.key === s),
        { TabBar: m, renderSelectedTab: x } = (0, j.Z)({ tabs: I }, []);
    return (0, r.jsxs)('div', {
        ref: e,
        className: i()(T.panel, _.panel),
        children: [
            (0, r.jsxs)('div', {
                className: _.toolbar,
                children: [
                    (0, r.jsx)(u.Button, {
                        className: _.toolbarButton,
                        look: u.Button.Looks.BLANK,
                        size: u.Button.Sizes.ICON,
                        onClick: p.Zw,
                        children: (0, r.jsx)('span', {
                            title: C.Z.Messages.CLEAR,
                            children: (0, r.jsx)(u.TrashIcon, {
                                size: 'md',
                                color: 'currentColor',
                                'aria-label': C.Z.Messages.CLEAR
                            })
                        })
                    }),
                    (0, r.jsx)('div', { className: _.toolbarDivider }),
                    (0, r.jsx)('div', {
                        className: _.filters,
                        children: Object.entries(w).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                u.Clickable,
                                {
                                    className: i()(_.filter, n.includes(t) && _.activeFilter),
                                    onClick: () => {
                                        var e;
                                        return (e = t), void l((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
                                    },
                                    children: a.label
                                },
                                t
                            );
                        })
                    })
                ]
            }),
            (0, r.jsx)(v.Z, {
                columns: S,
                data: o,
                selectedRowKey: s,
                onClickRow: (e) => d(e.key)
            }),
            null != h &&
                (0, r.jsxs)(b.Z, {
                    className: _.subPanel,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [
                        (0, r.jsx)(m, {}),
                        x({
                            loggedEvent: h,
                            onClose: () => d(void 0)
                        })
                    ]
                })
        ]
    });
}

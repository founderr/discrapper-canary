n.d(t, {
    Z: function () {
        return k;
    }
}),
    n(47120);
var r = n(735250),
    a = n(470079),
    l = n(120356),
    i = n.n(l),
    o = n(913527),
    c = n.n(o),
    s = n(442837),
    d = n(481060),
    u = n(129861),
    h = n(665149),
    m = n(594174),
    f = n(55935),
    x = n(120816),
    p = n(31336),
    g = n(257785),
    b = n(484036),
    v = n(681619),
    _ = n(621060),
    j = n(689938),
    C = n(574001),
    T = n(219299);
let S = [
    {
        key: 'event',
        cellClassName: C.eventColumn,
        render(e) {
            let { event: t } = e;
            return t;
        }
    },
    {
        key: 'location',
        cellClassName: C.locationColumn,
        render(e) {
            let { properties: t } = e;
            return null == t.location ? null : t.location;
        }
    }
];
function N(e) {
    let { children: t } = e;
    return (0, r.jsx)(d.ScrollerThin, {
        className: C.customPropertiesContainer,
        children: (0, r.jsx)('dl', { children: t })
    });
}
function y(e) {
    let { name: t, children: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('dt', {
                className: C.customPropertiesName,
                children: t
            }),
            (0, r.jsx)('dd', {
                className: C.customPropertiesValue,
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
                    s = m.default.getUser(l),
                    x = c()(a);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(h.ZP, {
                            className: i()(T.headerBar, C.subPanelHeaderBar),
                            children: [
                                (0, r.jsx)(h.ZP.Icon, {
                                    icon: d.AnalyticsIcon,
                                    tooltip: t
                                }),
                                (0, r.jsx)(h.ZP.Title, {
                                    wrapperClassName: T.headerTitle,
                                    children: t
                                }),
                                (0, r.jsx)(h.ZP.Icon, {
                                    icon: d.CircleXIcon,
                                    tooltip: 'Close',
                                    onClick: o
                                })
                            ]
                        }),
                        (0, r.jsxs)(g.E, {
                            className: C.commonProperties,
                            children: [
                                (0, r.jsx)(g.Z9, {
                                    name: 'Timestamp (local)',
                                    children: (0, r.jsx)('time', {
                                        dateTime: a.toISOString(),
                                        title: (0, f.vc)(x, 'LLLL'),
                                        children: (0, f.Y4)(x)
                                    })
                                }),
                                null != s &&
                                    (0, r.jsx)(g.Z9, {
                                        name: 'User',
                                        children: (0, r.jsx)(u.Z, { user: s })
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
                                                      className: C.emptyProperty,
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
function k() {
    let e = a.useRef(null),
        t = (0, s.e7)([x.Z], () => x.Z.loggedEvents),
        [n, l] = a.useState(Object.keys(w)),
        o = t.filter((e) => {
            for (let t of n) if (w[t].filter(e)) return !0;
            return !1;
        }),
        [c, u] = a.useState(void 0),
        h = o.find((e) => e.key === c),
        { TabBar: m, renderSelectedTab: f } = (0, _.Z)({ tabs: I }, []);
    return (0, r.jsxs)('div', {
        ref: e,
        className: i()(T.panel, C.panel),
        children: [
            (0, r.jsxs)('div', {
                className: C.toolbar,
                children: [
                    (0, r.jsx)(d.Button, {
                        className: C.toolbarButton,
                        look: d.Button.Looks.BLANK,
                        size: d.Button.Sizes.ICON,
                        onClick: p.Zw,
                        children: (0, r.jsx)('span', {
                            title: j.Z.Messages.CLEAR,
                            children: (0, r.jsx)(d.TrashIcon, {
                                size: 'md',
                                color: 'currentColor',
                                'aria-label': j.Z.Messages.CLEAR
                            })
                        })
                    }),
                    (0, r.jsx)('div', { className: C.toolbarDivider }),
                    (0, r.jsx)('div', {
                        className: C.filters,
                        children: Object.entries(w).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                d.Clickable,
                                {
                                    className: i()(C.filter, n.includes(t) && C.activeFilter),
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
                selectedRowKey: c,
                onClickRow: (e) => u(e.key)
            }),
            null != h &&
                (0, r.jsxs)(b.Z, {
                    className: C.subPanel,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [
                        (0, r.jsx)(m, {}),
                        f({
                            loggedEvent: h,
                            onClose: () => u(void 0)
                        })
                    ]
                })
        ]
    });
}

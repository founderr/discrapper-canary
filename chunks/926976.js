n.d(t, {
    Z: function () {
        return R;
    }
}),
    n(47120);
var r = n(735250),
    a = n(470079),
    l = n(120356),
    i = n.n(l),
    o = n(392711),
    s = n(913527),
    c = n.n(s),
    d = n(442837),
    u = n(481060),
    m = n(129861),
    h = n(665149),
    x = n(301801),
    f = n(594174),
    p = n(55935),
    g = n(120816),
    b = n(31336),
    v = n(257785),
    _ = n(484036),
    j = n(681619),
    C = n(621060),
    S = n(689938),
    T = n(574001),
    N = n(219299);
let y = [
    {
        key: 'event',
        cellClassName: T.eventColumn,
        render(e) {
            let { event: t } = e;
            return t;
        }
    },
    {
        key: 'location',
        cellClassName: T.locationColumn,
        render(e) {
            let { properties: t } = e;
            return null == t.location ? null : t.location;
        }
    }
];
function I(e) {
    let { children: t } = e;
    return (0, r.jsx)(u.ScrollerThin, {
        className: T.customPropertiesContainer,
        children: (0, r.jsx)('dl', { children: t })
    });
}
function E(e) {
    let { name: t, children: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('dt', {
                className: T.customPropertiesName,
                children: t
            }),
            (0, r.jsx)('dd', {
                className: T.customPropertiesValue,
                children: n
            })
        ]
    });
}
let w = [
        {
            id: 'details',
            name: 'Details',
            render: (e) => {
                let {
                        loggedEvent: { event: t, properties: n, timestamp: a, fingerprint: l },
                        onClose: o
                    } = e,
                    s = f.default.getUser(l),
                    d = c()(a);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(h.ZP, {
                            className: i()(N.headerBar, T.subPanelHeaderBar),
                            children: [
                                (0, r.jsx)(h.ZP.Icon, {
                                    icon: u.AnalyticsIcon,
                                    tooltip: t
                                }),
                                (0, r.jsx)(h.ZP.Title, {
                                    wrapperClassName: N.headerTitle,
                                    children: t
                                }),
                                (0, r.jsx)(h.ZP.Icon, {
                                    icon: u.CircleXIcon,
                                    tooltip: 'Close',
                                    onClick: o
                                })
                            ]
                        }),
                        (0, r.jsxs)(v.E, {
                            className: T.commonProperties,
                            children: [
                                (0, r.jsx)(v.Z9, {
                                    name: 'Timestamp (local)',
                                    children: (0, r.jsx)('time', {
                                        dateTime: a.toISOString(),
                                        title: (0, p.vc)(d, 'LLLL'),
                                        children: (0, p.Y4)(d)
                                    })
                                }),
                                null != s &&
                                    (0, r.jsx)(v.Z9, {
                                        name: 'User',
                                        children: (0, r.jsx)(m.Z, { user: s })
                                    }),
                                (0, r.jsx)(v.Z9, {
                                    name: 'Fingerprint',
                                    children: (0, r.jsx)('code', { children: l })
                                })
                            ]
                        }),
                        (0, r.jsx)(I, {
                            children: Object.entries(n).map((e) => {
                                let [t, n] = e;
                                return (0, r.jsx)(
                                    E,
                                    {
                                        name: ''.concat(t, ':'),
                                        children:
                                            null != n
                                                ? (0, r.jsx)('code', { children: JSON.stringify(n) })
                                                : (0, r.jsx)('code', {
                                                      className: T.emptyProperty,
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
    k = {
        events: {
            label: 'Events',
            filter: (e) =>
                Object.entries(k)
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
function R() {
    let e = a.useRef(null),
        [t, n] = a.useState(''),
        l = (0, d.e7)([g.Z], () => g.Z.loggedEvents),
        [s, c] = a.useState(Object.keys(k)),
        [m, h] = a.useState(l),
        f = a.useRef(null),
        p = a.useCallback(
            (0, o.throttle)(
                async (e, t) => {
                    if ('' === e) {
                        h(t);
                        return;
                    }
                    f.current = (0, o.uniqueId)();
                    let n = await (0, x.H)(
                        t,
                        (e) => {
                            let { event: t } = e;
                            return t;
                        },
                        e,
                        !0
                    );
                    if (null != f.current) h(n);
                },
                300,
                { leading: !0 }
            ),
            []
        ),
        v = a.useMemo(
            () =>
                m.filter((e) => {
                    for (let t of s) if (k[t].filter(e)) return !0;
                    return !1;
                }),
            [m, s]
        );
    a.useEffect(() => {
        p(t, l);
    }, [t, p, l]);
    let [I, E] = a.useState(void 0),
        R = v.find((e) => e.key === I),
        { TabBar: Z, renderSelectedTab: O } = (0, C.Z)({ tabs: w }, []);
    return (0, r.jsxs)('div', {
        ref: e,
        className: i()(N.panel, T.panel),
        children: [
            (0, r.jsxs)('div', {
                className: T.toolbar,
                children: [
                    (0, r.jsx)(u.Button, {
                        className: T.toolbarButton,
                        look: u.Button.Looks.BLANK,
                        size: u.Button.Sizes.ICON,
                        onClick: b.Zw,
                        children: (0, r.jsx)('span', {
                            title: S.Z.Messages.CLEAR,
                            children: (0, r.jsx)(u.TrashIcon, {
                                size: 'md',
                                color: 'currentColor',
                                'aria-label': S.Z.Messages.CLEAR
                            })
                        })
                    }),
                    (0, r.jsx)('div', { className: T.toolbarDivider }),
                    (0, r.jsx)('div', {
                        className: T.filters,
                        children: Object.entries(k).map((e) => {
                            let [t, n] = e;
                            return (0, r.jsx)(
                                u.Clickable,
                                {
                                    className: i()(T.filter, s.includes(t) && T.activeFilter),
                                    onClick: () => {
                                        var e;
                                        return (e = t), void c((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
                                    },
                                    children: n.label
                                },
                                t
                            );
                        })
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: T.toolbar,
                children: (0, r.jsx)(u.SearchBar, {
                    className: T.searchBar,
                    query: t,
                    onChange: n,
                    onClear: () => n(''),
                    placeholder: 'Search by event name'
                })
            }),
            (0, r.jsx)(j.Z, {
                columns: y,
                data: v,
                selectedRowKey: I,
                onClickRow: (e) => E(e.key)
            }),
            null != R &&
                (0, r.jsxs)(_.Z, {
                    className: T.subPanel,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [
                        (0, r.jsx)(Z, {}),
                        O({
                            loggedEvent: R,
                            onClose: () => E(void 0)
                        })
                    ]
                })
        ]
    });
}

n.d(t, {
    Z: function () {
        return Z;
    }
}),
    n(47120);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(392711),
    c = n(913527),
    s = n.n(c),
    d = n(442837),
    u = n(481060),
    h = n(129861),
    m = n(665149),
    x = n(301801),
    f = n(594174),
    p = n(55935),
    b = n(120816),
    g = n(31336),
    v = n(257785),
    C = n(484036),
    _ = n(681619),
    j = n(621060),
    T = n(388032),
    S = n(619208),
    y = n(986310);
let N = [
    {
        key: 'event',
        cellClassName: S.eventColumn,
        render(e) {
            let { event: t } = e;
            return t;
        }
    },
    {
        key: 'location',
        cellClassName: S.locationColumn,
        render(e) {
            let { properties: t } = e;
            return null == t.location ? null : t.location;
        }
    }
];
function I(e) {
    let { children: t } = e;
    return (0, r.jsx)(u.ScrollerThin, {
        className: S.customPropertiesContainer,
        children: (0, r.jsx)('dl', { children: t })
    });
}
function k(e) {
    let { name: t, children: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('dt', {
                className: S.customPropertiesName,
                children: t
            }),
            (0, r.jsx)('dd', {
                className: S.customPropertiesValue,
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
                    c = f.default.getUser(l),
                    d = s()(a);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(m.ZP, {
                            className: i()(y.headerBar, S.subPanelHeaderBar),
                            children: [
                                (0, r.jsx)(m.ZP.Icon, {
                                    icon: u.AnalyticsIcon,
                                    tooltip: t
                                }),
                                (0, r.jsx)(m.ZP.Title, {
                                    wrapperClassName: y.headerTitle,
                                    children: t
                                }),
                                (0, r.jsx)(m.ZP.Icon, {
                                    icon: u.CircleXIcon,
                                    tooltip: 'Close',
                                    onClick: o
                                })
                            ]
                        }),
                        (0, r.jsxs)(v.E, {
                            className: S.commonProperties,
                            children: [
                                (0, r.jsx)(v.Z9, {
                                    name: 'Timestamp (local)',
                                    children: (0, r.jsxs)('time', {
                                        dateTime: a.toISOString(),
                                        title: (0, p.vc)(d, 'LLLL'),
                                        children: [s().locale(), (0, p.Y4)(d)]
                                    })
                                }),
                                null != c &&
                                    (0, r.jsx)(v.Z9, {
                                        name: 'User',
                                        children: (0, r.jsx)(h.Z, { user: c })
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
                                    k,
                                    {
                                        name: ''.concat(t, ':'),
                                        children:
                                            null != n
                                                ? (0, r.jsx)('code', { children: JSON.stringify(n) })
                                                : (0, r.jsx)('code', {
                                                      className: S.emptyProperty,
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
    E = {
        events: {
            label: 'Events',
            filter: (e) =>
                Object.entries(E)
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
function Z() {
    let e = a.useRef(null),
        [t, n] = a.useState(''),
        l = (0, d.e7)([b.Z], () => b.Z.loggedEvents),
        [c, s] = a.useState(Object.keys(E)),
        [h, m] = a.useState(l),
        f = a.useRef(null),
        p = a.useCallback(
            (0, o.throttle)(
                async (e, t) => {
                    if ('' === e) {
                        m(t);
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
                    if (null != f.current) m(n);
                },
                300,
                { leading: !0 }
            ),
            []
        ),
        v = a.useMemo(
            () =>
                h.filter((e) => {
                    for (let t of c) if (E[t].filter(e)) return !0;
                    return !1;
                }),
            [h, c]
        );
    a.useEffect(() => {
        p(t, l);
    }, [t, p, l]);
    let [I, k] = a.useState(void 0),
        Z = v.find((e) => e.key === I),
        { TabBar: R, renderSelectedTab: O } = (0, j.Z)({ tabs: w }, []);
    return (0, r.jsxs)('div', {
        ref: e,
        className: i()(y.panel, S.panel),
        children: [
            (0, r.jsxs)('div', {
                className: S.toolbar,
                children: [
                    (0, r.jsx)(u.Button, {
                        className: S.toolbarButton,
                        look: u.Button.Looks.BLANK,
                        size: u.Button.Sizes.ICON,
                        onClick: g.Zw,
                        children: (0, r.jsx)('span', {
                            title: T.intl.string(T.t.VkKicX),
                            children: (0, r.jsx)(u.TrashIcon, {
                                size: 'md',
                                color: 'currentColor',
                                'aria-label': T.intl.string(T.t.VkKicX)
                            })
                        })
                    }),
                    (0, r.jsx)('div', { className: S.toolbarDivider }),
                    (0, r.jsx)('div', {
                        className: S.filters,
                        children: Object.entries(E).map((e) => {
                            let [t, n] = e;
                            return (0, r.jsx)(
                                u.Clickable,
                                {
                                    className: i()(S.filter, c.includes(t) && S.activeFilter),
                                    onClick: () => {
                                        var e;
                                        return (e = t), void s((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
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
                className: S.toolbar,
                children: (0, r.jsx)(u.SearchBar, {
                    className: S.searchBar,
                    query: t,
                    onChange: n,
                    onClear: () => n(''),
                    placeholder: 'Search by event name'
                })
            }),
            (0, r.jsx)(_.Z, {
                columns: N,
                data: v,
                selectedRowKey: I,
                onClickRow: (e) => k(e.key)
            }),
            null != Z &&
                (0, r.jsxs)(C.Z, {
                    className: S.subPanel,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [
                        (0, r.jsx)(R, {}),
                        O({
                            loggedEvent: Z,
                            onClose: () => k(void 0)
                        })
                    ]
                })
        ]
    });
}

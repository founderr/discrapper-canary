n.d(t, {
    Z: function () {
        return Z;
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
    h = n(129861),
    m = n(665149),
    x = n(301801),
    f = n(594174),
    p = n(55935),
    b = n(120816),
    g = n(31336),
    v = n(257785),
    j = n(484036),
    C = n(681619),
    _ = n(621060),
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
function k(e) {
    let { children: t } = e;
    return (0, r.jsx)(u.ScrollerThin, {
        className: T.customPropertiesContainer,
        children: (0, r.jsx)('dl', { children: t })
    });
}
function w(e) {
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
let I = [
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
                        (0, r.jsxs)(m.ZP, {
                            className: i()(N.headerBar, T.subPanelHeaderBar),
                            children: [
                                (0, r.jsx)(m.ZP.Icon, {
                                    icon: u.AnalyticsIcon,
                                    tooltip: t
                                }),
                                (0, r.jsx)(m.ZP.Title, {
                                    wrapperClassName: N.headerTitle,
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
                                        children: (0, r.jsx)(h.Z, { user: s })
                                    }),
                                (0, r.jsx)(v.Z9, {
                                    name: 'Fingerprint',
                                    children: (0, r.jsx)('code', { children: l })
                                })
                            ]
                        }),
                        (0, r.jsx)(k, {
                            children: Object.entries(n).map((e) => {
                                let [t, n] = e;
                                return (0, r.jsx)(
                                    w,
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
        [s, c] = a.useState(Object.keys(E)),
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
                    for (let t of s) if (E[t].filter(e)) return !0;
                    return !1;
                }),
            [h, s]
        );
    a.useEffect(() => {
        p(t, l);
    }, [t, p, l]);
    let [k, w] = a.useState(void 0),
        Z = v.find((e) => e.key === k),
        { TabBar: R, renderSelectedTab: O } = (0, _.Z)({ tabs: I }, []);
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
                        onClick: g.Zw,
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
                        children: Object.entries(E).map((e) => {
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
            (0, r.jsx)(C.Z, {
                columns: y,
                data: v,
                selectedRowKey: k,
                onClickRow: (e) => w(e.key)
            }),
            null != Z &&
                (0, r.jsxs)(j.Z, {
                    className: T.subPanel,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [
                        (0, r.jsx)(R, {}),
                        O({
                            loggedEvent: Z,
                            onClose: () => w(void 0)
                        })
                    ]
                })
        ]
    });
}

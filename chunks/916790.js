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
    l = r(392711),
    c = r(913527),
    s = r.n(c),
    d = r(481060),
    u = r(570140),
    h = r(665149),
    m = r(301801),
    g = r(4912),
    p = r(55935),
    b = r(428530),
    f = r(257785),
    x = r(484036),
    y = r(681619),
    k = r(621060),
    v = r(981073),
    _ = r(535271);
function j(e) {
    return parseFloat(e.toFixed(3));
}
let w = [
    {
        key: 'store',
        cellClassName: v.actionColumn,
        render(e) {
            let { trace: t } = e;
            return t.name;
        }
    },
    {
        key: 'time',
        cellClassName: v.totalTimeColumn,
        render(e) {
            let { trace: t } = e;
            return ''.concat(j(t.time), ' ms');
        }
    }
];
function C(e) {
    let { actionLog: t } = e,
        r = n.useMemo(
            () =>
                t.traces.map((e) => ({
                    key: e.name,
                    trace: e
                })),
            [t]
        );
    return (0, a.jsx)(d.ScrollerThin, {
        children: (0, a.jsx)(y.Z, {
            columns: w,
            data: r
        })
    });
}
let T = [
    {
        id: 'action',
        name: 'Action',
        render(e) {
            var t;
            let { actionLog: r } = e,
                n = s()(r.createdAt);
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsxs)(f.E, {
                        className: v.actionProperties,
                        children: [
                            (0, a.jsx)(f.Z9, {
                                name: 'Created at',
                                children: (0, a.jsx)('time', {
                                    dateTime: null === (t = r.createdAt) || void 0 === t ? void 0 : t.toISOString(),
                                    title: (0, p.vc)(n, 'LLLL'),
                                    children: (0, p.Y4)(n)
                                })
                            }),
                            (0, a.jsxs)(f.Z9, {
                                name: 'Total Time',
                                children: [j(r.totalTime), ' ms']
                            })
                        ]
                    }),
                    (0, a.jsx)(d.ScrollerThin, {
                        className: v.inspectorContainer,
                        children: (0, a.jsx)(b.Z, { data: r.action })
                    })
                ]
            });
        }
    },
    {
        id: 'traces',
        name: 'Store Handlers',
        render(e) {
            let { actionLog: t } = e;
            return (0, a.jsx)(C, { actionLog: t });
        }
    }
];
function S(e) {
    let { actionLog: t, initialHeight: r } = e,
        i = n.useMemo(
            () =>
                t.error
                    ? [
                          ...T,
                          {
                              id: 'error',
                              name: (0, a.jsxs)(a.Fragment, {
                                  children: [(0, a.jsx)(g.Z, { className: v.errorIcon }), 'Error']
                              }),
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          (0, a.jsx)('div', {
                                              className: o()(v.errorToolbar, _.toolbar),
                                              children: (0, a.jsx)('div', {
                                                  className: _.toolbarGroup,
                                                  children: (0, a.jsx)(d.Button, {
                                                      className: _.toolbarButton,
                                                      size: d.Button.Sizes.MIN,
                                                      onClick: () => console.error(t.error),
                                                      children: 'Log to Console'
                                                  })
                                              })
                                          }),
                                          (0, a.jsx)(d.ScrollerThin, {
                                              className: v.inspectorContainer,
                                              children: (0, a.jsx)(b.Z, { data: t.error })
                                          })
                                      ]
                                  });
                              }
                          }
                      ]
                    : T,
            [t]
        ),
        { TabBar: l, renderSelectedTab: c } = (0, k.Z)({ tabs: i }, [i]);
    return (0, a.jsxs)(x.Z, {
        className: v.subPanel,
        minHeight: 100,
        initialHeight: r,
        children: [
            (0, a.jsx)(l, {}),
            (0, a.jsxs)(h.ZP, {
                className: o()(_.headerBar, v.subPanelHeaderBar),
                children: [
                    (0, a.jsx)(h.ZP.Icon, {
                        icon: d.ReceiptIcon,
                        tooltip: t.name
                    }),
                    (0, a.jsx)(h.ZP.Title, { children: t.name })
                ]
            }),
            c({ actionLog: t })
        ]
    });
}
let N = [
    {
        key: 'action',
        cellClassName: v.actionColumn,
        render(e) {
            let { actionLog: t } = e;
            return (0, a.jsxs)(a.Fragment, {
                children: [t.error && (0, a.jsx)(g.Z, { className: v.errorIcon }), t.name]
            });
        }
    },
    {
        key: 'total time',
        cellClassName: v.totalTimeColumn,
        render(e) {
            let { actionLog: t } = e;
            return ''.concat(j(t.totalTime), ' ms');
        }
    }
];
function E() {
    let e = n.useRef(null),
        [t, r] = n.useState(''),
        i = (function (e) {
            let [t, r] = n.useState([...e.logs]),
                a = n.useCallback(() => r([...e.logs]), [e]);
            return (
                n.useEffect(
                    () => (
                        e.on('log', a),
                        () => {
                            e.off('log', a);
                        }
                    ),
                    [e, a]
                ),
                t
            );
        })(u.Z.actionLogger),
        c = n.useMemo(
            () =>
                i.map((e) => ({
                    key: e.id.toString(),
                    actionLog: e
                })),
            [i]
        ),
        [s, h] = n.useState(c),
        [g, p] = n.useState(),
        b = n.useRef(null),
        f = n.useCallback(
            (0, l.debounce)(
                async (e, t) => {
                    if ('' === e) {
                        h(t);
                        return;
                    }
                    b.current = (0, l.uniqueId)();
                    let r = await (0, m.H)(
                        t,
                        (e) => {
                            let { actionLog: t } = e;
                            return t.name;
                        },
                        e,
                        !0
                    );
                    if (null != b.current) h(r);
                },
                100,
                { leading: !0 }
            ),
            []
        );
    return (
        n.useEffect(() => {
            f(t, c);
        }, [t, f, c]),
        n.useEffect(() => {
            b.current = null;
        }, [t, c]),
        (0, a.jsxs)('div', {
            ref: e,
            className: o()(_.panel, v.panel),
            children: [
                (0, a.jsx)('div', {
                    className: v.toolbar,
                    children: (0, a.jsx)(d.SearchBar, {
                        className: v.searchBar,
                        query: t,
                        onChange: r,
                        onClear: () => r(''),
                        placeholder: 'Search by action name'
                    })
                }),
                (0, a.jsx)(y.Z, {
                    columns: N,
                    data: s,
                    selectedRowKey: null == g ? void 0 : g.id.toString(),
                    onClickRow: (e) => p(e.actionLog)
                }),
                null != g &&
                    (0, a.jsx)(S, {
                        actionLog: g,
                        initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
                    })
            ]
        })
    );
}

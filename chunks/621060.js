n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120),
    n(653041);
var r = n(735250),
    a = n(470079),
    l = n(120356),
    i = n.n(l),
    o = n(481060),
    s = n(424625),
    c = n(823379),
    u = n(246992),
    d = n(535271);
let h = a.forwardRef(function (e, t) {
    let { id: n, selected: a, onClick: l, children: s } = e;
    return (0, r.jsx)(o.Clickable, {
        className: i()(d.tabItem, { [d.selected]: a }),
        'data-tab-id': n,
        innerRef: t,
        onClick: l,
        children: s
    });
});
function m(e) {
    let { tabs: t, selectedTabId: n, onSelectTab: l } = e,
        i = a.useRef(null),
        m = a.useRef(0),
        f = a.useRef(new Map()),
        [x, g] = a.useState([]),
        p = a.useCallback(() => {
            var e, r, a, l;
            if (null == i.current) return;
            let o = [],
                s = i.current.getBoundingClientRect().width;
            if (s !== m.current) {
                for (let i of ((m.current = s), (s -= null !== (r = null === (e = f.current.get(n)) || void 0 === e ? void 0 : e.width) && void 0 !== r ? r : 0), t)) {
                    if (i.id !== n) (s -= null !== (l = null === (a = f.current.get(i.id)) || void 0 === a ? void 0 : a.width) && void 0 !== l ? l : 0) < 0 && o.push(i.id);
                }
                g(o);
            }
        }, [t, n]),
        b = a.useRef(null);
    a.useEffect(
        () => (
            (b.current = new ResizeObserver(() => p())),
            null != i.current && b.current.observe(i.current),
            () => {
                var e;
                null === (e = b.current) || void 0 === e || e.disconnect();
            }
        ),
        [p]
    );
    let v = a.useCallback(
        (e) => {
            let { closePopout: a } = e;
            return (0, r.jsx)(o.Menu, {
                navId: 'devtools-overflow',
                variant: 'fixed',
                onClose: a,
                'aria-label': 'Overflowed DevTools Tabs',
                onSelect: a,
                children: t
                    .map((e) => {
                        let { id: t, name: a } = e;
                        return x.includes(t) && n !== t
                            ? (0, r.jsx)(
                                  o.MenuItem,
                                  {
                                      id: t,
                                      label: a,
                                      action: () => l(t)
                                  },
                                  t
                              )
                            : null;
                    })
                    .filter(c.lm)
            });
        },
        [t, x, l, n]
    );
    return (0, r.jsxs)('div', {
        className: d.tabBar,
        ref: i,
        children: [
            t
                .map((e) => {
                    let { id: t, name: a } = e;
                    if (!x.includes(t))
                        return (0, r.jsx)(
                            h,
                            {
                                id: t,
                                selected: n === t,
                                ref: (e) => {
                                    var n, r, a;
                                    let l = null !== (r = null === (n = f.current.get(t)) || void 0 === n ? void 0 : n.width) && void 0 !== r ? r : 0;
                                    f.current.set(t, {
                                        node: e,
                                        width: null !== (a = null == e ? void 0 : e.getBoundingClientRect().width) && void 0 !== a ? a : l
                                    });
                                },
                                onClick: n !== t ? () => l(t) : void 0,
                                children: a
                            },
                            t
                        );
                })
                .filter(c.lm),
            x.length > 0 &&
                (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(o.Popout, {
                        layerContext: u.O$,
                        renderPopout: v,
                        position: 'bottom',
                        align: 'right',
                        spacing: 0,
                        children: (e) =>
                            (0, r.jsx)(o.Button, {
                                ...e,
                                className: d.overflowChevron,
                                size: o.Button.Sizes.ICON,
                                look: o.Button.Looks.BLANK,
                                children: (0, r.jsx)(s.Z, {
                                    className: d.__invalid_overflowIcon,
                                    width: 16,
                                    height: 16
                                })
                            })
                    })
                })
        ]
    });
}
function f(e, t) {
    var n, l, i;
    let { tabs: o, initialSelectedTabId: s, onChangeTab: c } = e,
        [u, d] = a.useState(null != s ? s : null === (n = o[0]) || void 0 === n ? void 0 : n.id),
        h = a.useCallback(
            () =>
                (0, r.jsx)(m, {
                    tabs: o,
                    selectedTabId: u,
                    onSelectTab: (e) => {
                        d(e), null == c || c(e);
                    }
                }),
            [u, d, c, ...t]
        );
    return {
        TabBar: h,
        renderSelectedTab: null !== (i = null === (l = o.find((e) => e.id === u)) || void 0 === l ? void 0 : l.render) && void 0 !== i ? i : () => null,
        selectedTabId: u
    };
}

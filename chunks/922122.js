n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(47120),
    n(724458);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(21260),
    s = n(780384),
    c = n(481060),
    d = n(410030),
    u = n(540059),
    h = n(889711),
    m = n(79707),
    p = n(388032),
    g = n(333078);
function f(e) {
    let { onTabSelect: t, tabs: n, selectedTab: l } = e,
        o = (0, d.ZP)(),
        h = (0, s.wj)(o),
        f = (0, u.Q3)('GlobalDiscoveryHeaderMoreTab'),
        _ = r.useMemo(
            () =>
                null !=
                n.find((e) => {
                    let { id: t } = e;
                    return t === l;
                }),
            [l, n]
        ),
        [E, I] = r.useState(!1),
        C = (function (e) {
            let { selected: t, isVisualRefreshEnabled: n, isDarkTheme: i, isHovered: r } = e;
            if (n) return r ? 'text-primary' : t ? 'text-brand' : 'text-normal';
            return !t && r ? 'interactive-hover' : t ? 'header-primary' : i ? 'interactive-normal' : 'header-primary';
        })({
            selected: _,
            isVisualRefreshEnabled: f,
            isDarkTheme: h,
            isHovered: E
        }),
        v = (function (e) {
            let { selected: t, isVisualRefreshEnabled: n, isDarkTheme: i, isHovered: r } = e;
            if (n) return r ? c.tokens.colors.TEXT_PRIMARY : t ? c.tokens.colors.TEXT_BRAND : c.tokens.colors.INTERACTIVE_NORMAL;
            return !t && r ? c.tokens.colors.INTERACTIVE_HOVER : t ? c.tokens.colors.HEADER_PRIMARY : i ? c.tokens.colors.TEXT_MUTED : c.tokens.colors.HEADER_PRIMARY;
        })({
            selected: _,
            isVisualRefreshEnabled: f,
            isDarkTheme: h,
            isHovered: E
        }),
        S = r.useCallback(() => I(!0), []),
        N = r.useCallback(() => I(!1), []);
    return (0, i.jsx)(c.Popout, {
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, i.jsx)(m.Z, {
                selectedTab: l,
                onClose: r,
                tabs: n,
                onTabSelect: t
            });
        },
        position: 'bottom',
        align: 'left',
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(c.TabBar.Item, {
                ...e,
                id: 'more',
                look: 'brand',
                selectedItem: f && _ ? 'more' : void 0,
                className: a()(g.tab, { [g.selected]: !f && _ }),
                'aria-label': p.intl.string(p.t.UKOtz8),
                children: (0, i.jsxs)('div', {
                    className: g.more,
                    onMouseEnter: S,
                    onMouseLeave: N,
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: f ? 'text-sm/semibold' : 'text-md/medium',
                            color: C,
                            children: p.intl.string(p.t.UKOtz8)
                        }),
                        n
                            ? (0, i.jsx)(c.ChevronSmallUpIcon, {
                                  size: 'xs',
                                  color: v
                              })
                            : (0, i.jsx)(c.ChevronSmallDownIcon, {
                                  size: 'xs',
                                  color: v
                              })
                    ]
                })
            });
        }
    });
}
function _(e) {
    let { className: t, selectedTab: n, tabs: l, onTabSelect: s, onAvailableWidthChange: d } = e,
        [m, p] = r.useState(0),
        _ = r.useRef(m),
        {
            lastVisibleIndex: E,
            onItemLayout: I,
            overflowItemsRef: C,
            itemWidthsRef: v
        } = (0, o.zP)({
            items: l,
            itemGapPx: 20,
            maxLines: 1,
            containerWidth: m
        }),
        S = r.useMemo(() => l.slice(0, E + 1), [E, l]),
        N = r.useMemo(() => l.slice(E + 1), [E, l]),
        T = r.useRef(null),
        b = r.useCallback(() => {
            var e;
            let t = null === (e = T.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
            if (null == t || _.current === t.width) return;
            p(t.width), (_.current = t.width);
            let n = v.current.reduce((e, t, n) => e + t + (0 === n ? 0 : 20)),
                i = t.width - n;
            null == d || d(i);
        }, [v, d]);
    r.useEffect(() => {
        let e = (0, h.pP)(b);
        return (0, h.YP)(e, document.body), () => (0, h.UC)(e, document.body);
    }, [b]);
    let A = 0 !== m,
        x = (0, u.Q3)('GlobalDiscoveryHeaderTabs');
    return (0, i.jsxs)('div', {
        className: a()(g.container, t),
        ref: T,
        children: [
            (0, i.jsxs)('div', {
                className: g.measurements,
                children: [
                    l.map((e, t) =>
                        (0, i.jsx)(
                            o.AJ,
                            {
                                index: t,
                                onItemLayout: I,
                                children: (0, i.jsx)(c.TabBar.Item, {
                                    id: e.id,
                                    'aria-label': e.label,
                                    className: g.tab,
                                    children: (0, i.jsx)(c.Text, {
                                        variant: 'text-md/medium',
                                        children: e.label
                                    })
                                })
                            },
                            e.id
                        )
                    ),
                    (0, i.jsx)('div', {
                        ref: C,
                        children: (0, i.jsx)(f, {
                            tabs: N,
                            onTabSelect: s,
                            selectedTab: n
                        })
                    })
                ]
            }),
            A &&
                (0, i.jsxs)(c.TabBar, {
                    type: 'top',
                    look: 'brand',
                    selectedItem: n,
                    onItemSelect: s,
                    className: g.tabs,
                    children: [
                        S.map((e) =>
                            (0, i.jsx)(
                                c.TabBar.Item,
                                {
                                    id: e.id,
                                    look: 'brand',
                                    'aria-label': e.label,
                                    className: a()(g.tab, { [g.selected]: !x && n === e.id }),
                                    children: e.label
                                },
                                e.id
                            )
                        ),
                        0 !== N.length
                            ? (0, i.jsx)(f, {
                                  tabs: N,
                                  onTabSelect: s,
                                  selectedTab: n
                              })
                            : null
                    ]
                })
        ]
    });
}

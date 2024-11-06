n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120),
    n(724458);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(780384),
    o = n(481060),
    c = n(410030),
    d = n(355932),
    u = n(889711),
    h = n(79707),
    m = n(388032),
    p = n(116155);
function g(e) {
    let { onTabSelect: t, tabs: n, selectedTab: l } = e,
        d = (0, c.ZP)(),
        u = (0, s.wj)(d),
        g = r.useMemo(
            () =>
                null !=
                n.find((e) => {
                    let { id: t } = e;
                    return t === l;
                }),
            [l, n]
        ),
        f = g ? 'header-primary' : u ? 'text-muted' : 'header-primary',
        _ = g ? o.tokens.colors.HEADER_PRIMARY : u ? o.tokens.colors.TEXT_MUTED : o.tokens.colors.HEADER_PRIMARY;
    return (0, i.jsx)(o.Popout, {
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, i.jsx)(h.Z, {
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
            return (0, i.jsxs)(o.TabBar.Item, {
                ...e,
                id: 'more',
                color: 'text-muted',
                className: a()(p.tab, p.more, { [p.selected]: g }),
                'aria-label': m.intl.string(m.t.UKOtz8),
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/medium',
                        color: f,
                        children: m.intl.string(m.t.UKOtz8)
                    }),
                    n
                        ? (0, i.jsx)(o.ChevronSmallUpIcon, {
                              size: 'sm',
                              color: _
                          })
                        : (0, i.jsx)(o.ChevronSmallDownIcon, {
                              size: 'sm',
                              color: _
                          })
                ]
            });
        }
    });
}
function f(e) {
    let { className: t, selectedTab: n, tabs: l, onTabSelect: s, onAvailableWidthChange: c } = e,
        [h, m] = r.useState(0),
        f = r.useRef(h),
        {
            lastVisibleIndex: _,
            onItemLayout: E,
            overflowItemsRef: I,
            itemWidthsRef: C
        } = (0, d.zP)({
            items: l,
            itemGapPx: 20,
            maxLines: 1,
            containerWidth: h
        }),
        v = r.useMemo(() => l.slice(0, _ + 1), [_, l]),
        S = r.useMemo(() => l.slice(_ + 1), [_, l]),
        N = r.useRef(null),
        T = r.useCallback(() => {
            var e;
            let t = null === (e = N.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
            if (null == t || f.current === t.width) return;
            m(t.width), (f.current = t.width);
            let n = C.current.reduce((e, t, n) => e + t + (0 === n ? 0 : 20)),
                i = t.width - n;
            null == c || c(i);
        }, [C, c]);
    r.useEffect(() => {
        let e = (0, u.pP)(T);
        return (0, u.YP)(e, document.body), () => (0, u.UC)(e, document.body);
    }, [T]);
    let x = 0 !== h;
    return (0, i.jsxs)('div', {
        className: a()(p.container, t),
        ref: N,
        children: [
            (0, i.jsxs)('div', {
                className: p.measurements,
                children: [
                    l.map((e, t) =>
                        (0, i.jsx)(
                            d.AJ,
                            {
                                index: t,
                                onItemLayout: E,
                                children: (0, i.jsx)(o.TabBar.Item, {
                                    id: e.id,
                                    'aria-label': e.label,
                                    className: p.tab,
                                    children: (0, i.jsx)(o.Text, {
                                        variant: 'text-md/medium',
                                        children: e.label
                                    })
                                })
                            },
                            e.id
                        )
                    ),
                    (0, i.jsx)('div', {
                        ref: I,
                        children: (0, i.jsx)(g, {
                            tabs: S,
                            onTabSelect: s,
                            selectedTab: n
                        })
                    })
                ]
            }),
            x &&
                (0, i.jsxs)(o.TabBar, {
                    type: 'top',
                    look: 'brand',
                    selectedItem: n,
                    onItemSelect: s,
                    className: p.tabs,
                    children: [
                        v.map((e) =>
                            (0, i.jsx)(
                                o.TabBar.Item,
                                {
                                    id: e.id,
                                    'aria-label': e.label,
                                    className: a()(p.tab, { [p.selected]: n === e.id }),
                                    children: e.label
                                },
                                e.id
                            )
                        ),
                        0 !== S.length
                            ? (0, i.jsx)(g, {
                                  tabs: S,
                                  onTabSelect: s,
                                  selectedTab: n
                              })
                            : null
                    ]
                })
        ]
    });
}

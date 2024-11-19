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
    s = n(21260),
    o = n(780384),
    c = n(481060),
    d = n(410030),
    u = n(889711),
    h = n(79707),
    m = n(388032),
    p = n(415861);
function g(e) {
    let { onTabSelect: t, tabs: n, selectedTab: l } = e,
        s = (0, d.ZP)(),
        u = (0, o.wj)(s),
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
        _ = g ? c.tokens.colors.HEADER_PRIMARY : u ? c.tokens.colors.TEXT_MUTED : c.tokens.colors.HEADER_PRIMARY;
    return (0, i.jsx)(c.Popout, {
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
            return (0, i.jsxs)(c.TabBar.Item, {
                ...e,
                id: 'more',
                color: 'text-muted',
                className: a()(p.tab, p.more, { [p.selected]: g }),
                'aria-label': m.intl.string(m.t.UKOtz8),
                children: [
                    (0, i.jsx)(c.Text, {
                        variant: 'text-md/medium',
                        color: f,
                        children: m.intl.string(m.t.UKOtz8)
                    }),
                    n
                        ? (0, i.jsx)(c.ChevronSmallUpIcon, {
                              size: 'sm',
                              color: _
                          })
                        : (0, i.jsx)(c.ChevronSmallDownIcon, {
                              size: 'sm',
                              color: _
                          })
                ]
            });
        }
    });
}
function f(e) {
    let { className: t, selectedTab: n, tabs: l, onTabSelect: o, onAvailableWidthChange: d } = e,
        [h, m] = r.useState(0),
        f = r.useRef(h),
        {
            lastVisibleIndex: _,
            onItemLayout: E,
            overflowItemsRef: I,
            itemWidthsRef: C
        } = (0, s.zP)({
            items: l,
            itemGapPx: 20,
            maxLines: 1,
            containerWidth: h
        }),
        v = r.useMemo(() => l.slice(0, _ + 1), [_, l]),
        N = r.useMemo(() => l.slice(_ + 1), [_, l]),
        T = r.useRef(null),
        S = r.useCallback(() => {
            var e;
            let t = null === (e = T.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
            if (null == t || f.current === t.width) return;
            m(t.width), (f.current = t.width);
            let n = C.current.reduce((e, t, n) => e + t + (0 === n ? 0 : 20)),
                i = t.width - n;
            null == d || d(i);
        }, [C, d]);
    r.useEffect(() => {
        let e = (0, u.pP)(S);
        return (0, u.YP)(e, document.body), () => (0, u.UC)(e, document.body);
    }, [S]);
    let A = 0 !== h;
    return (0, i.jsxs)('div', {
        className: a()(p.container, t),
        ref: T,
        children: [
            (0, i.jsxs)('div', {
                className: p.measurements,
                children: [
                    l.map((e, t) =>
                        (0, i.jsx)(
                            s.AJ,
                            {
                                index: t,
                                onItemLayout: E,
                                children: (0, i.jsx)(c.TabBar.Item, {
                                    id: e.id,
                                    'aria-label': e.label,
                                    className: p.tab,
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
                        ref: I,
                        children: (0, i.jsx)(g, {
                            tabs: N,
                            onTabSelect: o,
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
                    onItemSelect: o,
                    className: p.tabs,
                    children: [
                        v.map((e) =>
                            (0, i.jsx)(
                                c.TabBar.Item,
                                {
                                    id: e.id,
                                    'aria-label': e.label,
                                    className: a()(p.tab, { [p.selected]: n === e.id }),
                                    children: e.label
                                },
                                e.id
                            )
                        ),
                        0 !== N.length
                            ? (0, i.jsx)(g, {
                                  tabs: N,
                                  onTabSelect: o,
                                  selectedTab: n
                              })
                            : null
                    ]
                })
        ]
    });
}

t.d(n, {
    Z: function () {
        return v;
    }
}),
    t(47120);
var l = t(200651),
    i = t(192379),
    r = t(120356),
    a = t.n(r),
    s = t(21260),
    o = t(780384),
    c = t(481060),
    d = t(410030),
    u = t(571728),
    m = t(984370),
    x = t(889711),
    h = t(384433),
    b = t(388032),
    C = t(998810);
let j = (e) => [
        {
            id: h.e.ALL_MEMBERS,
            label: b.intl.string(b.t.NOOm1d)
        },
        {
            id: h.e.PENDING,
            label: 0 === e ? b.intl.string(b.t['4eQVBA']) : b.intl.formatToPlainString(b.t['Wo+zLy'], { count: e })
        },
        {
            id: h.e.REJECTED,
            label: b.intl.string(b.t.bSZklZ)
        }
    ],
    g = (e) => {
        let { tabs: n, selectedTab: t, onTabSelect: i, onClose: r } = e;
        return (0, l.jsx)(c.Menu, {
            navId: 'members-tabs-overflow-menu',
            'aria-label': b.intl.string(b.t.riPnr6),
            hideScroller: !0,
            onClose: r,
            onSelect: r,
            children: (0, l.jsx)(
                c.MenuGroup,
                {
                    children: n.map((e) => {
                        let { id: n, label: r } = e;
                        return (0, l.jsx)(
                            c.MenuItem,
                            {
                                id: n,
                                label: r,
                                icon: n === t ? c.CircleCheckIcon : void 0,
                                action: () => i(n)
                            },
                            n
                        );
                    })
                },
                'applications-overflow-tabs'
            )
        });
    };
function f(e) {
    let { onTabSelect: n, tabs: t, selectedTab: r } = e,
        s = (0, d.ZP)(),
        u = (0, o.wj)(s),
        m = i.useMemo(
            () =>
                null !=
                t.find((e) => {
                    let { id: n } = e;
                    return n === r;
                }),
            [r, t]
        ),
        x = m ? 'header-primary' : u ? 'text-muted' : 'header-primary',
        h = m ? c.tokens.colors.HEADER_PRIMARY : u ? c.tokens.colors.TEXT_MUTED : c.tokens.colors.HEADER_PRIMARY;
    return (0, l.jsx)(c.Popout, {
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, l.jsx)(g, {
                selectedTab: r,
                onClose: i,
                tabs: t,
                onTabSelect: n
            });
        },
        position: 'bottom',
        align: 'left',
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsxs)(c.TabBar.Item, {
                ...e,
                id: 'more',
                color: 'text-muted',
                className: a()(C.more, { [C.selected]: m }),
                'aria-label': b.intl.string(b.t.UKOtz8),
                children: [
                    (0, l.jsx)(c.Text, {
                        variant: 'text-md/medium',
                        color: x,
                        children: b.intl.string(b.t.UKOtz8)
                    }),
                    t
                        ? (0, l.jsx)(c.ChevronSmallUpIcon, {
                              size: 'sm',
                              color: h
                          })
                        : (0, l.jsx)(c.ChevronSmallDownIcon, {
                              size: 'sm',
                              color: h
                          })
                ]
            });
        }
    });
}
function v(e) {
    var n;
    let { guildId: t, currentTab: r, onTabSelect: a } = e,
        [o, d] = i.useState(0),
        h = i.useRef(null),
        g = i.useRef(o),
        v = j(null !== (n = (0, u.A)({ guildId: t })) && void 0 !== n ? n : 0),
        {
            lastVisibleIndex: N,
            onItemLayout: _,
            overflowItemsRef: E
        } = (0, s.zP)({
            items: v,
            itemGapPx: 16,
            maxLines: 1,
            containerWidth: o - 200
        }),
        T = i.useMemo(() => v.slice(0, N + 1), [N, v]),
        I = i.useMemo(() => v.slice(N + 1), [N, v]),
        S = i.useCallback(() => {
            var e;
            let n = null === (e = h.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
            null != n && g.current !== n.width && (d(n.width), (g.current = n.width));
        }, []);
    return (
        i.useEffect(() => {
            let e = (0, x.pP)(S);
            return (0, x.YP)(e, document.body), () => (0, x.UC)(e, document.body);
        }, [S]),
        i.useEffect(() => {
            S();
        }, [S]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(m.Z.Divider, { className: C.divider }),
                (0, l.jsxs)('div', {
                    className: C.tabsContainer,
                    ref: h,
                    children: [
                        (0, l.jsxs)('div', {
                            className: C.measurements,
                            children: [
                                v.map((e, n) =>
                                    (0, l.jsx)(
                                        s.AJ,
                                        {
                                            index: n,
                                            onItemLayout: _,
                                            children: (0, l.jsx)(c.TabBar.Item, {
                                                id: e.id,
                                                'aria-label': e.label,
                                                children: e.label
                                            })
                                        },
                                        e.id
                                    )
                                ),
                                (0, l.jsx)('div', {
                                    ref: E,
                                    children: (0, l.jsx)(f, {
                                        tabs: I,
                                        onTabSelect: a,
                                        selectedTab: r
                                    })
                                })
                            ]
                        }),
                        (0, l.jsxs)(c.TabBar, {
                            'aria-label': b.intl.string(b.t.tcvVXF),
                            selectedItem: r,
                            type: 'top-pill',
                            onItemSelect: a,
                            children: [
                                T.map((e) =>
                                    (0, l.jsx)(
                                        c.TabBar.Item,
                                        {
                                            id: e.id,
                                            'aria-label': e.label,
                                            children: e.label
                                        },
                                        e.id
                                    )
                                ),
                                0 !== I.length
                                    ? (0, l.jsx)(f, {
                                          tabs: I,
                                          onTabSelect: a,
                                          selectedTab: r
                                      })
                                    : null
                            ]
                        })
                    ]
                })
            ]
        })
    );
}

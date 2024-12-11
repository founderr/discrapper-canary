t.d(n, {
    Z: function () {
        return f;
    }
}),
    t(47120);
var l = t(200651),
    r = t(192379),
    i = t(120356),
    a = t.n(i),
    o = t(21260),
    s = t(780384),
    c = t(481060),
    d = t(410030),
    u = t(571728),
    x = t(984370),
    m = t(889711),
    h = t(384433),
    b = t(388032),
    _ = t(998810);
let C = (e) => [
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
    j = (e) => {
        let { tabs: n, selectedTab: t, onTabSelect: r, onClose: i } = e;
        return (0, l.jsx)(c.Menu, {
            navId: 'members-tabs-overflow-menu',
            'aria-label': b.intl.string(b.t.riPnr6),
            hideScroller: !0,
            onClose: i,
            onSelect: i,
            children: (0, l.jsx)(
                c.MenuGroup,
                {
                    children: n.map((e) => {
                        let { id: n, label: i } = e;
                        return (0, l.jsx)(
                            c.MenuItem,
                            {
                                id: n,
                                label: i,
                                icon: n === t ? c.CircleCheckIcon : void 0,
                                action: () => r(n)
                            },
                            n
                        );
                    })
                },
                'applications-overflow-tabs'
            )
        });
    };
function g(e) {
    let { onTabSelect: n, tabs: t, selectedTab: i } = e,
        o = (0, d.ZP)(),
        u = (0, s.wj)(o),
        x = r.useMemo(
            () =>
                null !=
                t.find((e) => {
                    let { id: n } = e;
                    return n === i;
                }),
            [i, t]
        ),
        m = x ? 'header-primary' : u ? 'text-muted' : 'header-primary',
        h = x ? c.tokens.colors.HEADER_PRIMARY : u ? c.tokens.colors.TEXT_MUTED : c.tokens.colors.HEADER_PRIMARY;
    return (0, l.jsx)(c.Popout, {
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, l.jsx)(j, {
                selectedTab: i,
                onClose: r,
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
                className: a()(_.more, { [_.selected]: x }),
                'aria-label': b.intl.string(b.t.UKOtz8),
                children: [
                    (0, l.jsx)(c.Text, {
                        variant: 'text-md/medium',
                        color: m,
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
function f(e) {
    var n;
    let { guildId: t, currentTab: i, onTabSelect: a } = e,
        [s, d] = r.useState(0),
        h = r.useRef(null),
        j = r.useRef(s),
        f = C(null !== (n = (0, u.A)({ guildId: t })) && void 0 !== n ? n : 0),
        {
            lastVisibleIndex: v,
            onItemLayout: p,
            overflowItemsRef: N
        } = (0, o.zP)({
            items: f,
            itemGapPx: 16,
            maxLines: 1,
            containerWidth: s - 200
        }),
        S = r.useMemo(() => f.slice(0, v + 1), [v, f]),
        T = r.useMemo(() => f.slice(v + 1), [v, f]),
        E = r.useCallback(() => {
            var e;
            let n = null === (e = h.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
            null != n && j.current !== n.width && (d(n.width), (j.current = n.width));
        }, []);
    return (
        r.useEffect(() => {
            let e = (0, m.pP)(E);
            return (0, m.YP)(e, document.body), () => (0, m.UC)(e, document.body);
        }, [E]),
        r.useEffect(() => {
            E();
        }, [E]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(x.Z.Divider, { className: _.divider }),
                (0, l.jsxs)('div', {
                    className: _.tabsContainer,
                    ref: h,
                    children: [
                        (0, l.jsxs)('div', {
                            className: _.measurements,
                            children: [
                                f.map((e, n) =>
                                    (0, l.jsx)(
                                        o.AJ,
                                        {
                                            index: n,
                                            onItemLayout: p,
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
                                    ref: N,
                                    children: (0, l.jsx)(g, {
                                        tabs: T,
                                        onTabSelect: a,
                                        selectedTab: i
                                    })
                                })
                            ]
                        }),
                        (0, l.jsxs)(c.TabBar, {
                            'aria-label': b.intl.string(b.t.tcvVXF),
                            selectedItem: i,
                            type: 'top-pill',
                            onItemSelect: a,
                            children: [
                                S.map((e) =>
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
                                0 !== T.length
                                    ? (0, l.jsx)(g, {
                                          tabs: T,
                                          onTabSelect: a,
                                          selectedTab: i
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

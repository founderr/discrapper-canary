t.d(n, {
    Z: function () {
        return E;
    }
}),
    t(47120);
var l = t(200651),
    i = t(192379),
    r = t(120356),
    a = t.n(r),
    s = t(442837),
    o = t(21260),
    c = t(780384),
    d = t(481060),
    u = t(410030),
    m = t(328977),
    x = t(571728),
    h = t(984370),
    b = t(433355),
    C = t(889711),
    j = t(384433),
    g = t(388032),
    f = t(998810);
let v = (e) => [
        {
            id: j.e.ALL_MEMBERS,
            label: g.intl.string(g.t.NOOm1d)
        },
        {
            id: j.e.PENDING,
            label: 0 === e ? g.intl.string(g.t['4eQVBA']) : g.intl.formatToPlainString(g.t['Wo+zLy'], { count: e })
        },
        {
            id: j.e.REJECTED,
            label: g.intl.string(g.t.bSZklZ)
        }
    ],
    N = (e) => {
        let { tabs: n, selectedTab: t, onTabSelect: i, onClose: r } = e;
        return (0, l.jsx)(d.Menu, {
            navId: 'members-tabs-overflow-menu',
            'aria-label': g.intl.string(g.t.riPnr6),
            hideScroller: !0,
            onClose: r,
            onSelect: r,
            children: (0, l.jsx)(
                d.MenuGroup,
                {
                    children: n.map((e) => {
                        let { id: n, label: r } = e;
                        return (0, l.jsx)(
                            d.MenuItem,
                            {
                                id: n,
                                label: r,
                                icon: n === t ? d.CircleCheckIcon : void 0,
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
function _(e) {
    let { onTabSelect: n, tabs: t, selectedTab: r } = e,
        s = (0, u.ZP)(),
        o = (0, c.wj)(s),
        m = i.useMemo(
            () =>
                null !=
                t.find((e) => {
                    let { id: n } = e;
                    return n === r;
                }),
            [r, t]
        ),
        x = m ? 'header-primary' : o ? 'text-muted' : 'header-primary',
        h = m ? d.tokens.colors.HEADER_PRIMARY : o ? d.tokens.colors.TEXT_MUTED : d.tokens.colors.HEADER_PRIMARY;
    return (0, l.jsx)(d.Popout, {
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, l.jsx)(N, {
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
            return (0, l.jsxs)(d.TabBar.Item, {
                ...e,
                id: 'more',
                color: 'text-muted',
                className: a()(f.more, { [f.selected]: m }),
                'aria-label': g.intl.string(g.t.UKOtz8),
                children: [
                    (0, l.jsx)(d.Text, {
                        variant: 'text-md/medium',
                        color: x,
                        children: g.intl.string(g.t.UKOtz8)
                    }),
                    t
                        ? (0, l.jsx)(d.ChevronSmallUpIcon, {
                              size: 'sm',
                              color: h
                          })
                        : (0, l.jsx)(d.ChevronSmallDownIcon, {
                              size: 'sm',
                              color: h
                          })
                ]
            });
        }
    });
}
function E(e) {
    var n;
    let { guildId: t, currentTab: r, onTabSelect: a } = e,
        [c, u] = i.useState(0),
        N = i.useRef(null),
        E = i.useRef(c),
        T = v(null !== (n = (0, x.A)({ guildId: t })) && void 0 !== n ? n : 0),
        {
            lastVisibleIndex: I,
            onItemLayout: S,
            overflowItemsRef: p
        } = (0, o.zP)({
            items: T,
            itemGapPx: 16,
            maxLines: 1,
            containerWidth: c - 200
        }),
        M = (0, s.e7)([b.ZP], () => null != b.ZP.getGuildSidebarState(t), [t]),
        R = (0, m.L)({ guildId: t }),
        A = i.useMemo(() => (r === j.e.ALL_MEMBERS ? M : null != R && null != R.user), [r, M, R]),
        Z = i.useMemo(() => T.slice(0, I + 1), [I, T]),
        k = i.useMemo(() => T.slice(I + 1), [I, T]),
        B = i.useCallback(() => {
            var e;
            let n = null === (e = N.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
            null != n && E.current !== n.width && (u(n.width), (E.current = n.width));
        }, []);
    return (
        i.useEffect(() => {
            let e = (0, C.pP)(B);
            return (0, C.YP)(e, document.body), () => (0, C.UC)(e, document.body);
        }, [B]),
        i.useEffect(() => {
            B();
        }, [B, A]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(h.Z.Divider, { className: f.divider }),
                (0, l.jsxs)('div', {
                    className: f.tabsContainer,
                    ref: N,
                    children: [
                        (0, l.jsxs)('div', {
                            className: f.measurements,
                            children: [
                                T.map((e, n) =>
                                    (0, l.jsx)(
                                        o.AJ,
                                        {
                                            index: n,
                                            onItemLayout: S,
                                            children: (0, l.jsx)(d.TabBar.Item, {
                                                id: e.id,
                                                'aria-label': e.label,
                                                children: e.label
                                            })
                                        },
                                        e.id
                                    )
                                ),
                                (0, l.jsx)('div', {
                                    ref: p,
                                    children: (0, l.jsx)(_, {
                                        tabs: k,
                                        onTabSelect: a,
                                        selectedTab: r
                                    })
                                })
                            ]
                        }),
                        (0, l.jsxs)(d.TabBar, {
                            'aria-label': g.intl.string(g.t.tcvVXF),
                            selectedItem: r,
                            type: 'top-pill',
                            onItemSelect: a,
                            children: [
                                Z.map((e) =>
                                    (0, l.jsx)(
                                        d.TabBar.Item,
                                        {
                                            id: e.id,
                                            'aria-label': e.label,
                                            children: e.label
                                        },
                                        e.id
                                    )
                                ),
                                0 !== k.length
                                    ? (0, l.jsx)(_, {
                                          tabs: k,
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

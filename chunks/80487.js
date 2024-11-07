n(653041), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(780384),
    o = n(481060),
    c = n(410030),
    d = n(355932),
    u = n(984370),
    m = n(785195),
    h = n(889711),
    x = n(246364),
    b = n(388032),
    j = n(358528);
let p = (e) => {
        let { tabs: t, selectedTab: n, onTabSelect: l, onClose: r } = e;
        return (0, i.jsx)(o.Menu, {
            navId: 'member-applications-tabs-overflow-menu',
            'aria-label': b.intl.string(b.t.riPnr6),
            hideScroller: !0,
            onClose: r,
            onSelect: r,
            children: (0, i.jsx)(
                o.MenuGroup,
                {
                    children: t.map((e) => {
                        let { id: t, label: r } = e;
                        return (0, i.jsx)(
                            o.MenuItem,
                            {
                                id: t,
                                label: r,
                                icon: t === n ? o.CircleCheckIcon : void 0,
                                action: () => l(t)
                            },
                            t
                        );
                    })
                },
                'applications-overflow-tabs'
            )
        });
    },
    g = (e, t, n) => {
        let i = [];
        return (
            e &&
                i.push({
                    id: 'REVIEW_APPLICATION',
                    label: b.intl.string(b.t.fSGLR0)
                }),
            t &&
                (i.push({
                    id: x.wB.SUBMITTED,
                    label: 0 === n ? b.intl.string(b.t['4eQVBA']) : b.intl.formatToPlainString(b.t['Wo+zLy'], { count: n })
                }),
                i.push({
                    id: x.wB.APPROVED,
                    label: b.intl.string(b.t.aURgY2)
                }),
                i.push({
                    id: x.wB.REJECTED,
                    label: b.intl.string(b.t.bSZklZ)
                })),
            i
        );
    };
function v(e) {
    let { onTabSelect: t, tabs: n, selectedTab: r } = e,
        d = (0, c.ZP)(),
        u = (0, s.wj)(d),
        m = l.useMemo(
            () =>
                null !=
                n.find((e) => {
                    let { id: t } = e;
                    return t === r;
                }),
            [r, n]
        ),
        h = m ? 'header-primary' : u ? 'text-muted' : 'header-primary',
        x = m ? o.tokens.colors.HEADER_PRIMARY : u ? o.tokens.colors.TEXT_MUTED : o.tokens.colors.HEADER_PRIMARY;
    return (0, i.jsx)(o.Popout, {
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(p, {
                selectedTab: r,
                onClose: l,
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
                className: a()(j.more, { [j.selected]: m }),
                'aria-label': b.intl.string(b.t.UKOtz8),
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/medium',
                        color: h,
                        children: b.intl.string(b.t.UKOtz8)
                    }),
                    n
                        ? (0, i.jsx)(o.ChevronSmallUpIcon, {
                              size: 'sm',
                              color: x
                          })
                        : (0, i.jsx)(o.ChevronSmallDownIcon, {
                              size: 'sm',
                              color: x
                          })
                ]
            });
        }
    });
}
t.Z = function (e) {
    let { pendingGuildJoinRequestsTotal: t, currentTab: n, onTabItemSelect: r, showSetupTab: a, canActionJoinRequests: s, isSidebarOpen: c } = e,
        [x, p] = l.useState(0),
        f = l.useRef(null),
        C = l.useRef(x),
        I = g(a, s, t),
        {
            lastVisibleIndex: R,
            onItemLayout: E,
            overflowItemsRef: T
        } = (0, d.zP)({
            items: I,
            itemGapPx: 16,
            maxLines: 1,
            containerWidth: x - 400
        }),
        S = l.useMemo(() => I.slice(0, R + 1), [R, I]),
        _ = l.useMemo(() => I.slice(R + 1), [R, I]),
        N = l.useCallback(() => {
            var e;
            let t = null === (e = f.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
            null != t && C.current !== t.width && (p(t.width), (C.current = t.width));
        }, []);
    return (
        l.useEffect(() => {
            let e = (0, h.pP)(N);
            return (0, h.YP)(e, document.body), () => (0, h.UC)(e, document.body);
        }, [N]),
        l.useEffect(() => {
            N();
        }, [N, c]),
        (0, i.jsx)('div', {
            ref: f,
            children: (0, i.jsxs)(u.Z, {
                hideSearch: !0,
                toolbar: (0, i.jsx)('div', {}),
                children: [
                    (0, i.jsx)(u.Z.Icon, {
                        icon: (0, o.makeIconCompat)(m.Z),
                        disabled: !0,
                        'aria-label': b.intl.string(b.t.tcvVXF)
                    }),
                    (0, i.jsx)(u.Z.Title, {
                        className: j.title,
                        children: b.intl.string(b.t.tcvVXF)
                    }),
                    (0, i.jsx)(u.Z.Divider, { className: j.divider }),
                    (0, i.jsxs)('div', {
                        className: j.container,
                        children: [
                            (0, i.jsxs)('div', {
                                className: j.measurements,
                                children: [
                                    I.map((e, t) =>
                                        (0, i.jsx)(
                                            d.AJ,
                                            {
                                                index: t,
                                                onItemLayout: E,
                                                children: (0, i.jsx)(o.TabBar.Item, {
                                                    id: e.id,
                                                    'aria-label': e.label,
                                                    children: e.label
                                                })
                                            },
                                            e.id
                                        )
                                    ),
                                    (0, i.jsx)('div', {
                                        ref: T,
                                        children: (0, i.jsx)(v, {
                                            tabs: _,
                                            onTabSelect: r,
                                            selectedTab: n
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsxs)(o.TabBar, {
                                'aria-label': b.intl.string(b.t.TdEu5e),
                                selectedItem: n,
                                type: 'top-pill',
                                onItemSelect: r,
                                children: [
                                    S.map((e) =>
                                        (0, i.jsx)(
                                            o.TabBar.Item,
                                            {
                                                id: e.id,
                                                'aria-label': e.label,
                                                children: e.label
                                            },
                                            e.id
                                        )
                                    ),
                                    0 !== _.length
                                        ? (0, i.jsx)(v, {
                                              tabs: _,
                                              onTabSelect: r,
                                              selectedTab: n
                                          })
                                        : null
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    );
};

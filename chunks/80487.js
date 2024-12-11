n(653041), n(47120);
var i = n(200651),
    r = n(192379),
    o = n(120356),
    a = n.n(o),
    c = n(21260),
    l = n(780384),
    s = n(481060),
    d = n(410030),
    u = n(984370),
    f = n(785195),
    b = n(889711),
    _ = n(246364),
    m = n(388032),
    p = n(315651);
let C = (e) => {
        let { tabs: t, selectedTab: n, onTabSelect: r, onClose: o } = e;
        return (0, i.jsx)(s.Menu, {
            navId: 'member-applications-tabs-overflow-menu',
            'aria-label': m.intl.string(m.t.riPnr6),
            hideScroller: !0,
            onClose: o,
            onSelect: o,
            children: (0, i.jsx)(
                s.MenuGroup,
                {
                    children: t.map((e) => {
                        let { id: t, label: o } = e;
                        return (0, i.jsx)(
                            s.MenuItem,
                            {
                                id: t,
                                label: o,
                                icon: t === n ? s.CircleCheckIcon : void 0,
                                action: () => r(t)
                            },
                            t
                        );
                    })
                },
                'applications-overflow-tabs'
            )
        });
    },
    x = (e, t, n) => {
        let i = [];
        return (
            e &&
                i.push({
                    id: 'REVIEW_APPLICATION',
                    label: m.intl.string(m.t.fSGLR0)
                }),
            t &&
                (i.push({
                    id: _.wB.SUBMITTED,
                    label: 0 === n ? m.intl.string(m.t['4eQVBA']) : m.intl.formatToPlainString(m.t['Wo+zLy'], { count: n })
                }),
                i.push({
                    id: _.wB.APPROVED,
                    label: m.intl.string(m.t.aURgY2)
                }),
                i.push({
                    id: _.wB.REJECTED,
                    label: m.intl.string(m.t.bSZklZ)
                })),
            i
        );
    };
function v(e) {
    let { onTabSelect: t, tabs: n, selectedTab: o } = e,
        c = (0, d.ZP)(),
        u = (0, l.wj)(c),
        f = r.useMemo(
            () =>
                null !=
                n.find((e) => {
                    let { id: t } = e;
                    return t === o;
                }),
            [o, n]
        ),
        b = f ? 'header-primary' : u ? 'text-muted' : 'header-primary',
        _ = f ? s.tokens.colors.HEADER_PRIMARY : u ? s.tokens.colors.TEXT_MUTED : s.tokens.colors.HEADER_PRIMARY;
    return (0, i.jsx)(s.Popout, {
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, i.jsx)(C, {
                selectedTab: o,
                onClose: r,
                tabs: n,
                onTabSelect: t
            });
        },
        position: 'bottom',
        align: 'left',
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsxs)(s.TabBar.Item, {
                ...e,
                id: 'more',
                color: 'text-muted',
                className: a()(p.more, { [p.selected]: f }),
                'aria-label': m.intl.string(m.t.UKOtz8),
                children: [
                    (0, i.jsx)(s.Text, {
                        variant: 'text-md/medium',
                        color: b,
                        children: m.intl.string(m.t.UKOtz8)
                    }),
                    n
                        ? (0, i.jsx)(s.ChevronSmallUpIcon, {
                              size: 'sm',
                              color: _
                          })
                        : (0, i.jsx)(s.ChevronSmallDownIcon, {
                              size: 'sm',
                              color: _
                          })
                ]
            });
        }
    });
}
t.Z = function (e) {
    let { pendingGuildJoinRequestsTotal: t, currentTab: n, onTabItemSelect: o, showSetupTab: a, canActionJoinRequests: l, isSidebarOpen: d } = e,
        [_, C] = r.useState(0),
        I = r.useRef(null),
        g = r.useRef(_),
        h = x(a, l, t),
        {
            lastVisibleIndex: T,
            onItemLayout: R,
            overflowItemsRef: E
        } = (0, c.zP)({
            items: h,
            itemGapPx: 16,
            maxLines: 1,
            containerWidth: _ - 400
        }),
        S = r.useMemo(() => h.slice(0, T + 1), [T, h]),
        j = r.useMemo(() => h.slice(T + 1), [T, h]),
        A = r.useCallback(() => {
            var e;
            let t = null === (e = I.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
            null != t && g.current !== t.width && (C(t.width), (g.current = t.width));
        }, []);
    return (
        r.useEffect(() => {
            let e = (0, b.pP)(A);
            return (0, b.YP)(e, document.body), () => (0, b.UC)(e, document.body);
        }, [A]),
        r.useEffect(() => {
            A();
        }, [A, d]),
        (0, i.jsx)('div', {
            ref: I,
            children: (0, i.jsxs)(u.Z, {
                hideSearch: !0,
                toolbar: (0, i.jsx)('div', {}),
                children: [
                    (0, i.jsx)(u.Z.Icon, {
                        icon: (0, s.makeIconCompat)(f.Z),
                        disabled: !0,
                        'aria-label': m.intl.string(m.t.tcvVXF)
                    }),
                    (0, i.jsx)(u.Z.Title, {
                        className: p.title,
                        children: m.intl.string(m.t.tcvVXF)
                    }),
                    (0, i.jsx)(u.Z.Divider, { className: p.divider }),
                    (0, i.jsxs)('div', {
                        className: p.container,
                        children: [
                            (0, i.jsxs)('div', {
                                className: p.measurements,
                                children: [
                                    h.map((e, t) =>
                                        (0, i.jsx)(
                                            c.AJ,
                                            {
                                                index: t,
                                                onItemLayout: R,
                                                children: (0, i.jsx)(s.TabBar.Item, {
                                                    id: e.id,
                                                    'aria-label': e.label,
                                                    children: e.label
                                                })
                                            },
                                            e.id
                                        )
                                    ),
                                    (0, i.jsx)('div', {
                                        ref: E,
                                        children: (0, i.jsx)(v, {
                                            tabs: j,
                                            onTabSelect: o,
                                            selectedTab: n
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsxs)(s.TabBar, {
                                'aria-label': m.intl.string(m.t.TdEu5e),
                                selectedItem: n,
                                type: 'top-pill',
                                onItemSelect: o,
                                children: [
                                    S.map((e) =>
                                        (0, i.jsx)(
                                            s.TabBar.Item,
                                            {
                                                id: e.id,
                                                'aria-label': e.label,
                                                children: e.label
                                            },
                                            e.id
                                        )
                                    ),
                                    0 !== j.length
                                        ? (0, i.jsx)(v, {
                                              tabs: j,
                                              onTabSelect: o,
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

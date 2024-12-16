n(653041), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(21260),
    c = n(780384),
    s = n(481060),
    d = n(410030),
    u = n(984370),
    m = n(785195),
    f = n(889711),
    b = n(246364),
    x = n(388032),
    p = n(315651);
let h = (e) => {
        let { tabs: t, selectedTab: n, onTabSelect: r, onClose: a } = e;
        return (0, i.jsx)(s.Menu, {
            navId: 'member-applications-tabs-overflow-menu',
            'aria-label': x.intl.string(x.t.riPnr6),
            hideScroller: !0,
            onClose: a,
            onSelect: a,
            children: (0, i.jsx)(
                s.MenuGroup,
                {
                    children: t.map((e) => {
                        let { id: t, label: a } = e;
                        return (0, i.jsx)(
                            s.MenuItem,
                            {
                                id: t,
                                label: a,
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
    C = (e, t, n) => {
        let i = [];
        return (
            e &&
                i.push({
                    id: 'REVIEW_APPLICATION',
                    label: x.intl.string(x.t.fSGLR0)
                }),
            t &&
                (i.push({
                    id: b.wB.SUBMITTED,
                    label: 0 === n ? x.intl.string(x.t['4eQVBA']) : x.intl.formatToPlainString(x.t['Wo+zLy'], { count: n })
                }),
                i.push({
                    id: b.wB.APPROVED,
                    label: x.intl.string(x.t.aURgY2)
                }),
                i.push({
                    id: b.wB.REJECTED,
                    label: x.intl.string(x.t.bSZklZ)
                })),
            i
        );
    };
function g(e) {
    let { onTabSelect: t, tabs: n, selectedTab: a } = e,
        l = (0, d.ZP)(),
        u = (0, c.wj)(l),
        m = r.useMemo(
            () =>
                null !=
                n.find((e) => {
                    let { id: t } = e;
                    return t === a;
                }),
            [a, n]
        ),
        f = m ? 'header-primary' : u ? 'text-muted' : 'header-primary',
        b = m ? s.tokens.colors.HEADER_PRIMARY : u ? s.tokens.colors.TEXT_MUTED : s.tokens.colors.HEADER_PRIMARY;
    return (0, i.jsx)(s.Popout, {
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, i.jsx)(h, {
                selectedTab: a,
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
                className: o()(p.more, { [p.selected]: m }),
                'aria-label': x.intl.string(x.t.UKOtz8),
                children: [
                    (0, i.jsx)(s.Text, {
                        variant: 'text-md/medium',
                        color: f,
                        children: x.intl.string(x.t.UKOtz8)
                    }),
                    n
                        ? (0, i.jsx)(s.ChevronSmallUpIcon, {
                              size: 'sm',
                              color: b
                          })
                        : (0, i.jsx)(s.ChevronSmallDownIcon, {
                              size: 'sm',
                              color: b
                          })
                ]
            });
        }
    });
}
t.Z = function (e) {
    let { pendingGuildJoinRequestsTotal: t, currentTab: n, onTabItemSelect: a, showSetupTab: o, canActionJoinRequests: c, isSidebarOpen: d } = e,
        [b, h] = r.useState(0),
        _ = r.useRef(null),
        v = r.useRef(b),
        j = C(o, c, t),
        {
            lastVisibleIndex: I,
            onItemLayout: T,
            overflowItemsRef: R
        } = (0, l.zP)({
            items: j,
            itemGapPx: 16,
            maxLines: 1,
            containerWidth: b - 400
        }),
        E = r.useMemo(() => j.slice(0, I + 1), [I, j]),
        S = r.useMemo(() => j.slice(I + 1), [I, j]),
        w = r.useCallback(() => {
            var e;
            let t = null === (e = _.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
            null != t && v.current !== t.width && (h(t.width), (v.current = t.width));
        }, []);
    return (
        r.useEffect(() => {
            let e = (0, f.pP)(w);
            return (0, f.YP)(e, document.body), () => (0, f.UC)(e, document.body);
        }, [w]),
        r.useEffect(() => {
            w();
        }, [w, d]),
        (0, i.jsx)('div', {
            ref: _,
            children: (0, i.jsxs)(u.Z, {
                hideSearch: !0,
                toolbar: (0, i.jsx)('div', {}),
                children: [
                    (0, i.jsx)(u.Z.Icon, {
                        icon: (0, s.makeIconCompat)(m.Z),
                        disabled: !0,
                        'aria-label': x.intl.string(x.t.tcvVXF)
                    }),
                    (0, i.jsx)(u.Z.Title, {
                        className: p.title,
                        children: x.intl.string(x.t.tcvVXF)
                    }),
                    (0, i.jsx)(u.Z.Divider, { className: p.divider }),
                    (0, i.jsxs)('div', {
                        className: p.container,
                        children: [
                            (0, i.jsxs)('div', {
                                className: p.measurements,
                                children: [
                                    j.map((e, t) =>
                                        (0, i.jsx)(
                                            l.AJ,
                                            {
                                                index: t,
                                                onItemLayout: T,
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
                                        ref: R,
                                        children: (0, i.jsx)(g, {
                                            tabs: S,
                                            onTabSelect: a,
                                            selectedTab: n
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsxs)(s.TabBar, {
                                'aria-label': x.intl.string(x.t.TdEu5e),
                                selectedItem: n,
                                type: 'top-pill',
                                onItemSelect: a,
                                children: [
                                    E.map((e) =>
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
                                    0 !== S.length
                                        ? (0, i.jsx)(g, {
                                              tabs: S,
                                              onTabSelect: a,
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

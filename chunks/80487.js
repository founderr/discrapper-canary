n(653041), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(780384),
    c = n(481060),
    s = n(410030),
    d = n(355932),
    u = n(984370),
    m = n(785195),
    f = n(889711),
    b = n(246364),
    x = n(388032),
    h = n(576779);
let p = (e) => {
        let { tabs: t, selectedTab: n, onTabSelect: r, onClose: a } = e;
        return (0, i.jsx)(c.Menu, {
            navId: 'member-applications-tabs-overflow-menu',
            'aria-label': x.intl.string(x.t.riPnr6),
            hideScroller: !0,
            onClose: a,
            onSelect: a,
            children: (0, i.jsx)(
                c.MenuGroup,
                {
                    children: t.map((e) => {
                        let { id: t, label: a } = e;
                        return (0, i.jsx)(
                            c.MenuItem,
                            {
                                id: t,
                                label: a,
                                icon: t === n ? c.CircleCheckIcon : void 0,
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
    g = (e, t, n) => {
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
function C(e) {
    let { onTabSelect: t, tabs: n, selectedTab: a } = e,
        d = (0, s.ZP)(),
        u = (0, o.wj)(d),
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
        b = m ? c.tokens.colors.HEADER_PRIMARY : u ? c.tokens.colors.TEXT_MUTED : c.tokens.colors.HEADER_PRIMARY;
    return (0, i.jsx)(c.Popout, {
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, i.jsx)(p, {
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
            return (0, i.jsxs)(c.TabBar.Item, {
                ...e,
                id: 'more',
                color: 'text-muted',
                className: l()(h.more, { [h.selected]: m }),
                'aria-label': x.intl.string(x.t.UKOtz8),
                children: [
                    (0, i.jsx)(c.Text, {
                        variant: 'text-md/medium',
                        color: f,
                        children: x.intl.string(x.t.UKOtz8)
                    }),
                    n
                        ? (0, i.jsx)(c.ChevronSmallUpIcon, {
                              size: 'sm',
                              color: b
                          })
                        : (0, i.jsx)(c.ChevronSmallDownIcon, {
                              size: 'sm',
                              color: b
                          })
                ]
            });
        }
    });
}
t.Z = function (e) {
    let { pendingGuildJoinRequestsTotal: t, currentTab: n, onTabItemSelect: a, showSetupTab: l, canActionJoinRequests: o, isSidebarOpen: s } = e,
        [b, p] = r.useState(0),
        _ = r.useRef(null),
        v = r.useRef(b),
        j = g(l, o, t),
        {
            lastVisibleIndex: I,
            onItemLayout: T,
            overflowItemsRef: R
        } = (0, d.zP)({
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
            null != t && v.current !== t.width && (p(t.width), (v.current = t.width));
        }, []);
    return (
        r.useEffect(() => {
            let e = (0, f.pP)(w);
            return (0, f.YP)(e, document.body), () => (0, f.UC)(e, document.body);
        }, [w]),
        r.useEffect(() => {
            w();
        }, [w, s]),
        (0, i.jsx)('div', {
            ref: _,
            children: (0, i.jsxs)(u.Z, {
                hideSearch: !0,
                toolbar: (0, i.jsx)('div', {}),
                children: [
                    (0, i.jsx)(u.Z.Icon, {
                        icon: (0, c.makeIconCompat)(m.Z),
                        disabled: !0,
                        'aria-label': x.intl.string(x.t.tcvVXF)
                    }),
                    (0, i.jsx)(u.Z.Title, {
                        className: h.title,
                        children: x.intl.string(x.t.tcvVXF)
                    }),
                    (0, i.jsx)(u.Z.Divider, { className: h.divider }),
                    (0, i.jsxs)('div', {
                        className: h.container,
                        children: [
                            (0, i.jsxs)('div', {
                                className: h.measurements,
                                children: [
                                    j.map((e, t) =>
                                        (0, i.jsx)(
                                            d.AJ,
                                            {
                                                index: t,
                                                onItemLayout: T,
                                                children: (0, i.jsx)(c.TabBar.Item, {
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
                                        children: (0, i.jsx)(C, {
                                            tabs: S,
                                            onTabSelect: a,
                                            selectedTab: n
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsxs)(c.TabBar, {
                                'aria-label': x.intl.string(x.t.TdEu5e),
                                selectedItem: n,
                                type: 'top-pill',
                                onItemSelect: a,
                                children: [
                                    E.map((e) =>
                                        (0, i.jsx)(
                                            c.TabBar.Item,
                                            {
                                                id: e.id,
                                                'aria-label': e.label,
                                                children: e.label
                                            },
                                            e.id
                                        )
                                    ),
                                    0 !== S.length
                                        ? (0, i.jsx)(C, {
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

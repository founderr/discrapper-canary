t.d(n, {
    Z: function () {
        return u;
    }
}),
    t(653041);
var l = t(735250),
    i = t(470079),
    r = t(120356),
    a = t.n(r),
    o = t(481060),
    c = t(765305),
    s = t(689938),
    d = t(400463);
function u(e) {
    let { onClose: n, selectedTab: t, onTabSelected: r, userCount: u, hasBanner: _, isHub: h = !1 } = e,
        v = i.useRef(null);
    i.useEffect(() => {
        var e, n, t;
        return null === (t = v.current) || void 0 === t ? void 0 : null === (n = t.ref) || void 0 === n ? void 0 : null === (e = n.blur) || void 0 === e ? void 0 : e.call(n);
    }, []);
    let f = s.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_TAB_TITLE.format({ userCount: u }),
        E = [
            (0, l.jsx)(
                o.TabBar.Item,
                {
                    className: d.tabBarItem,
                    id: c.fL.EVENT_INFO,
                    children: s.Z.Messages.GUILD_EVENT_DETAILS_INFO_TAB_TITLE
                },
                'event-details'
            )
        ];
    return (
        !h &&
            E.push(
                (0, l.jsx)(
                    o.TabBar.Item,
                    {
                        className: d.tabBarItem,
                        id: c.fL.RSVP_LIST,
                        children: f
                    },
                    'is-hub'
                )
            ),
        (0, l.jsxs)('div', {
            className: d.container,
            children: [
                (0, l.jsx)(o.Clickable, {
                    ref: v,
                    onClick: n,
                    className: d.closeButton,
                    'aria-label': s.Z.Messages.CLOSE,
                    children: (0, l.jsx)(o.XSmallIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: a()(d.closeIcon, _ && d.closeIconBanner)
                    })
                }),
                (0, l.jsx)(o.TabBar, {
                    className: d.tabBar,
                    'aria-label': s.Z.Messages.OPTIONS,
                    selectedItem: t,
                    type: 'top',
                    onItemSelect: r,
                    children: E
                })
            ]
        })
    );
}

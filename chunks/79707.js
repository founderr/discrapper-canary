n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(388032);
function l(e) {
    let { tabs: t, selectedTab: n, onTabSelect: l, onClose: s } = e;
    return (0, i.jsx)(r.Menu, {
        navId: 'global-discovery-tabs-overflow-menu',
        'aria-label': a.intl.string(a.t.riPnr6),
        hideScroller: !0,
        onClose: s,
        onSelect: s,
        children: (0, i.jsx)(
            r.MenuGroup,
            {
                children: t.map((e) => {
                    let { id: t, label: a } = e;
                    return (0, i.jsx)(
                        r.MenuItem,
                        {
                            id: t,
                            label: a,
                            icon: t === n ? r.CircleCheckIcon : void 0,
                            action: () => l(t)
                        },
                        t
                    );
                })
            },
            'overflow-tabs'
        )
    });
}

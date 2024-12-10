n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(388032);
function a(e) {
    let { tabs: t, selectedTab: n, onTabSelect: a, onClose: o } = e;
    return (0, i.jsx)(r.Menu, {
        navId: 'global-discovery-tabs-overflow-menu',
        'aria-label': l.intl.string(l.t.riPnr6),
        hideScroller: !0,
        onClose: o,
        onSelect: o,
        children: (0, i.jsx)(
            r.MenuGroup,
            {
                children: t.map((e) => {
                    let { id: t, label: l } = e;
                    return (0, i.jsx)(
                        r.MenuItem,
                        {
                            id: t,
                            label: l,
                            icon: t === n ? r.CircleCheckIcon : void 0,
                            action: () => a(t)
                        },
                        t
                    );
                })
            },
            'overflow-tabs'
        )
    });
}

n.d(t, {
    Z: function () {
        return r;
    }
});
var s = n(200651);
n(192379);
var a = n(481060),
    i = n(400698);
function r(e) {
    let { children: t, disabled: n, disabledTooltip: r, id: l, ...o } = e;
    return (0, s.jsx)(a.TooltipContainer, {
        text: n ? r : null,
        children: (0, s.jsx)(a.TabBar.Item, {
            className: i.tabBarItem,
            id: l,
            disabled: n,
            ...o,
            children: t
        })
    });
}

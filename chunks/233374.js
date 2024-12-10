var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(578451);
t.Z = function (e) {
    let { tabs: t, onTabSelect: n, selectedTab: r, className: s } = e;
    return (0, i.jsx)(a.TabBar, {
        type: 'top-pill',
        selectedItem: r,
        onItemSelect: n,
        className: s,
        children: t.map((e, t) => {
            let { id: n, label: r, count: s } = e;
            return (0, i.jsx)(
                a.TabBar.Item,
                {
                    id: n,
                    className: l()(o.tabItem, { [o.firstChildSpacingFix]: 0 === t }),
                    'aria-label': r,
                    children: null != s && s > 0 ? ''.concat(r, ' (').concat(s, ')') : r
                },
                n
            );
        })
    });
};

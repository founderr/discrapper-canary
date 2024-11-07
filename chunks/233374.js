var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(481060),
    s = n(204873);
t.Z = function (e) {
    let { tabs: t, onTabSelect: n, selectedTab: r, className: o } = e;
    return (0, i.jsx)(a.TabBar, {
        type: 'top-pill',
        selectedItem: r,
        onItemSelect: n,
        className: o,
        children: t.map((e, t) => {
            let { id: n, label: r, count: o } = e;
            return (0, i.jsx)(
                a.TabBar.Item,
                {
                    id: n,
                    className: l()(s.tabItem, { [s.firstChildSpacingFix]: 0 === t }),
                    'aria-label': r,
                    children: null != o && o > 0 ? ''.concat(r, ' (').concat(o, ')') : r
                },
                n
            );
        })
    });
};

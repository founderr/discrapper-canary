var i = n(735250);
n(470079);
var a = n(120356),
    s = n.n(a),
    r = n(481060),
    l = n(371043);
t.Z = function (e) {
    let { tabs: t, onTabSelect: n, selectedTab: a, className: o } = e;
    return (0, i.jsx)(r.TabBar, {
        type: 'top-pill',
        selectedItem: a,
        onItemSelect: n,
        className: o,
        children: t.map((e, t) => {
            let { id: n, label: a, count: o } = e;
            return (0, i.jsx)(
                r.TabBar.Item,
                {
                    id: n,
                    className: s()(l.tabItem, { [l.firstChildSpacingFix]: 0 === t }),
                    'aria-label': a,
                    children: null != o && o > 0 ? ''.concat(a, ' (').concat(o, ')') : a
                },
                n
            );
        })
    });
};

var n = t(200651);
t(192379);
var a = t(120356),
    i = t.n(a),
    r = t(481060),
    o = t(230711),
    l = t(528084),
    c = t(746943);
s.Z = (e) => {
    var s;
    let { tabs: t, settingsSection: a, parentSetting: d, panelClassName: _, defaultTabIndex: u, onTabChange: E } = e,
        { viewableTabs: T, filteredTab: S } = (0, l.a)(t, d),
        I = null != u ? t[u] : null,
        N = null !== (s = null != I ? I : S) && void 0 !== s ? s : T[0];
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(r.TabBar, {
                className: c.tabBar,
                selectedItem: N.setting,
                onItemSelect: (e) => {
                    o.Z.setSection(a, e), null == E || E(e);
                },
                orientation: 'horizontal',
                type: 'top',
                look: 'brand',
                children: T.map((e) =>
                    (0, n.jsx)(
                        r.TabBar.Item,
                        {
                            className: c.tab,
                            id: e.setting,
                            'aria-label': e.title,
                            children: e.title
                        },
                        e.setting
                    )
                )
            }),
            (0, n.jsx)(r.TabBar.Panel, {
                id: N.setting,
                'aria-labelledby': N.title,
                className: i()(c.tabBarPanel, _),
                children: ((e) => {
                    let s = e.component;
                    return 'function' == typeof s ? (0, n.jsx)(s, {}) : s;
                })(N)
            })
        ]
    });
};

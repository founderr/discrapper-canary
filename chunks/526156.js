var n = t(735250);
t(470079);
var a = t(120356),
    i = t.n(a),
    r = t(481060),
    o = t(230711),
    l = t(528084),
    c = t(746943);
s.Z = (e) => {
    var s;
    let { tabs: t, settingsSection: a, parentSetting: d, panelClassName: _, defaultTabIndex: u } = e,
        { viewableTabs: E, filteredTab: T } = (0, l.a)(t, d),
        S = null != u ? t[u] : null,
        I = null !== (s = null != S ? S : T) && void 0 !== s ? s : E[0];
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(r.TabBar, {
                className: c.tabBar,
                selectedItem: I.setting,
                onItemSelect: (e) => {
                    o.Z.setSection(a, e);
                },
                orientation: 'horizontal',
                type: 'top',
                look: 'brand',
                children: E.map((e) =>
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
                id: I.setting,
                'aria-labelledby': I.title,
                className: i()(c.tabBarPanel, _),
                children: ((e) => {
                    let s = e.component;
                    return 'function' == typeof s ? (0, n.jsx)(s, {}) : s;
                })(I)
            })
        ]
    });
};

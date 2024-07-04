n.d(t, {
    f: function () {
        return c;
    }
});
var i = n(735250), s = n(470079), a = n(920906), r = n(481060), l = n(689938), o = n(479882);
function c(e) {
    var t;
    let {
            icon: n,
            title: c,
            selectedTab: d,
            tabs: u,
            onTabSelect: _,
            searchQuery: h,
            onSearch: E,
            onSearchClear: I,
            onSearchSubmit: m,
            scrollManager: g,
            showSearch: p = !0
        } = e, T = l.Z.Messages.GLOBAL_DISCOVERY_SEARCH_PLACEHOLDER.format({ title: c }), S = s.useCallback(e => {
            'Enter' === e.key && (null == m || m(null != h ? h : ''));
        }, [
            m,
            h
        ]);
    return (0, i.jsx)('div', {
        className: o.container,
        children: (0, i.jsxs)('div', {
            className: o.innerContainer,
            children: [
                (0, i.jsx)(a.animated.div, {
                    className: o.backdrop,
                    style: {
                        opacity: null == g ? void 0 : null === (t = g.current) || void 0 === t ? void 0 : t.top.to([
                            0,
                            100
                        ], [
                            0,
                            1
                        ])
                    }
                }),
                (0, i.jsx)('div', {
                    className: o.icon,
                    children: n
                }),
                (0, i.jsx)(r.TabBar, {
                    type: 'top',
                    look: 'brand',
                    selectedItem: d,
                    onItemSelect: _,
                    className: o.tabs,
                    children: u.map(e => (0, i.jsx)(r.TabBar.Item, {
                        id: e,
                        children: e.label
                    }, e.id))
                }),
                p && null != E ? (0, i.jsx)('div', {
                    className: o.search,
                    children: (0, i.jsx)(r.SearchBar, {
                        placeholder: T,
                        query: null != h ? h : '',
                        onChange: E,
                        onClear: I,
                        onKeyDown: S
                    })
                }) : null
            ]
        })
    });
}

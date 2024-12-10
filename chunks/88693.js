n.d(t, {
    U: function () {
        return s;
    }
});
var i = n(192379),
    r = n(49898),
    l = n(406014);
let a = 20 + r.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX - r.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX,
    o = 20 + r.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX + r.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX;
function s(e) {
    let { isSearchBarVisible: t, isSearchBarEmpty: n, searchBarState: s, setSearchBarState: c } = e,
        d = i.useCallback(
            (e) => {
                if (!t) return;
                let i = Math.round(e);
                switch (s) {
                    case r.GlobalDiscoverySearchBarState.DEFAULT:
                        i < 20 && c(n ? r.GlobalDiscoverySearchBarState.COLLAPSED : r.GlobalDiscoverySearchBarState.FLOATING);
                        break;
                    case r.GlobalDiscoverySearchBarState.COLLAPSED:
                        i > a && c(r.GlobalDiscoverySearchBarState.DEFAULT);
                        break;
                    case r.GlobalDiscoverySearchBarState.FLOATING:
                        i > o && c(r.GlobalDiscoverySearchBarState.DEFAULT);
                }
            },
            [n, t, s, c]
        ),
        u = i.useCallback(() => {
            c(r.GlobalDiscoverySearchBarState.FLOATING);
        }, [c]),
        h = i.useCallback(() => {
            s === r.GlobalDiscoverySearchBarState.FLOATING && n && c(r.GlobalDiscoverySearchBarState.COLLAPSED);
        }, [n, s, c]);
    return {
        onTabsAvailableWidthChange: d,
        tabsClassName: s === r.GlobalDiscoverySearchBarState.FLOATING ? l.floatingSearchTabsMask : void 0,
        onCollapsedSearchBarClick: u,
        onSearchBarBlur: h
    };
}

n.d(t, {
    U: function () {
        return o;
    }
});
var i = n(192379),
    r = n(49898),
    l = n(406014);
let a = 20 + r.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX - r.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX,
    s = 20 + r.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX + r.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX;
function o(e) {
    let { isSearchBarVisible: t, isSearchBarEmpty: n, searchBarState: o, setSearchBarState: c } = e,
        d = i.useCallback(
            (e) => {
                if (!t) return;
                let i = Math.round(e);
                switch (o) {
                    case r.GlobalDiscoverySearchBarState.DEFAULT:
                        i < 20 && c(n ? r.GlobalDiscoverySearchBarState.COLLAPSED : r.GlobalDiscoverySearchBarState.FLOATING);
                        break;
                    case r.GlobalDiscoverySearchBarState.COLLAPSED:
                        i > a && c(r.GlobalDiscoverySearchBarState.DEFAULT);
                        break;
                    case r.GlobalDiscoverySearchBarState.FLOATING:
                        i > s && c(r.GlobalDiscoverySearchBarState.DEFAULT);
                }
            },
            [n, t, o, c]
        ),
        u = i.useCallback(() => {
            c(r.GlobalDiscoverySearchBarState.FLOATING);
        }, [c]),
        h = i.useCallback(() => {
            o === r.GlobalDiscoverySearchBarState.FLOATING && n && c(r.GlobalDiscoverySearchBarState.COLLAPSED);
        }, [n, o, c]);
    return {
        onTabsAvailableWidthChange: d,
        tabsClassName: o === r.GlobalDiscoverySearchBarState.FLOATING ? l.floatingSearchTabsMask : void 0,
        onCollapsedSearchBarClick: u,
        onSearchBarBlur: h
    };
}

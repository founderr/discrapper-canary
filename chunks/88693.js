n.d(t, {
    U: function () {
        return o;
    }
}),
    n(47120);
var i = n(192379),
    a = n(49898),
    s = n(25912);
let r = 20 + a.U1 - a.Kl,
    l = 20 + a.U1 + a.Kl;
function o(e) {
    let { isSearchBarVisible: t, isSearchBarEmpty: n } = e,
        [o, c] = i.useState(a.WB.DEFAULT),
        d = i.useCallback(
            (e) => {
                if (!t) return;
                let i = Math.round(e);
                switch (o) {
                    case a.WB.DEFAULT:
                        i < 20 && c(n ? a.WB.COLLAPSED : a.WB.FLOATING);
                        break;
                    case a.WB.COLLAPSED:
                        i > r && c(a.WB.DEFAULT);
                        break;
                    case a.WB.FLOATING:
                        i > l && c(a.WB.DEFAULT);
                }
            },
            [n, t, o]
        ),
        u = i.useCallback(() => {
            c(a.WB.FLOATING);
        }, []),
        _ = i.useCallback(() => {
            o === a.WB.FLOATING && n && c(a.WB.COLLAPSED);
        }, [n, o]),
        E = o === a.WB.FLOATING ? s.floatingSearchTabsMask : void 0;
    return {
        searchBarState: o,
        onTabsAvailableWidthChange: d,
        tabsClassName: E,
        onCollapsedSearchBarClick: u,
        onSearchBarBlur: _
    };
}

n.d(t, {
    U: function () {
        return o;
    }
});
var i = n(192379),
    r = n(49898),
    l = n(406014);
let a = 20 + r.U1 - r.Kl,
    s = 20 + r.U1 + r.Kl;
function o(e) {
    let { isSearchBarVisible: t, isSearchBarEmpty: n, searchBarState: o, setSearchBarState: c } = e,
        d = i.useCallback(
            (e) => {
                if (!t) return;
                let i = Math.round(e);
                switch (o) {
                    case r.WB.DEFAULT:
                        i < 20 && c(n ? r.WB.COLLAPSED : r.WB.FLOATING);
                        break;
                    case r.WB.COLLAPSED:
                        i > a && c(r.WB.DEFAULT);
                        break;
                    case r.WB.FLOATING:
                        i > s && c(r.WB.DEFAULT);
                }
            },
            [n, t, o, c]
        ),
        u = i.useCallback(() => {
            c(r.WB.FLOATING);
        }, [c]),
        h = i.useCallback(() => {
            o === r.WB.FLOATING && n && c(r.WB.COLLAPSED);
        }, [n, o, c]);
    return {
        onTabsAvailableWidthChange: d,
        tabsClassName: o === r.WB.FLOATING ? l.floatingSearchTabsMask : void 0,
        onCollapsedSearchBarClick: u,
        onSearchBarBlur: h
    };
}

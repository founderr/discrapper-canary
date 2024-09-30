n.d(t, {
    U: function () {
        return r;
    }
}),
    n(47120);
var i = n(470079),
    a = n(49898),
    s = n(25912);
function r(e) {
    let { isSearchBarVisible: t, isSearchBarEmpty: n } = e,
        [r, l] = i.useState(a.WB.DEFAULT),
        o = i.useCallback(
            (e) => {
                if (!t) return;
                let n = Math.round(e);
                switch (r) {
                    case a.WB.DEFAULT:
                        n < 260 - a.U1 && l(a.WB.COLLAPSED);
                        break;
                    case a.WB.COLLAPSED:
                        n > 260 - a.Kl && l(a.WB.DEFAULT);
                        break;
                    case a.WB.FLOATING:
                        n > 260 && l(a.WB.DEFAULT);
                }
            },
            [t, r]
        ),
        c = i.useCallback(() => {
            l(a.WB.FLOATING);
        }, []),
        d = i.useCallback(() => {
            r === a.WB.FLOATING && n && l(a.WB.COLLAPSED);
        }, [n, r]),
        u = r === a.WB.FLOATING ? s.floatingSearchTabsMask : void 0;
    return {
        searchBarState: r,
        onTabsAvailableWidthChange: o,
        tabsClassName: u,
        onCollapsedSearchBarClick: c,
        onSearchBarBlur: d
    };
}

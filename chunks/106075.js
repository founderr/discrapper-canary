n.d(t, {
    Z: function () {
        return T;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(979233),
    s = n(88693),
    o = n(611928),
    c = n(922122),
    d = n(680180),
    u = n(164991),
    h = n(444324),
    m = n(726115),
    p = n(750910),
    g = n(28494),
    f = n(29086),
    _ = n(590771),
    E = n(273596),
    I = n(128449),
    C = n(49898),
    v = n(388032),
    N = n(636872);
function T() {
    let e = r.useRef((0, m.PM)()),
        { onScroll: t, scrollPosition: n, resetScrollPosition: T } = (0, a.M)(),
        { tabs: S, selectedTab: A, setSelectedTab: x } = (0, f.Y)(),
        b = (0, m.lg)(A),
        Z = !I.MU.has(A),
        { searchQuery: L, onSearchTextChange: y, onClearSearch: O, onSearchSubmit: P, isSearchVisible: R } = (0, g.H)({ loadId: e.current }),
        {
            searchBarState: j,
            onTabsAvailableWidthChange: D,
            onCollapsedSearchBarClick: M,
            onSearchBarBlur: w,
            tabsClassName: k
        } = (0, s.U)({
            isSearchBarVisible: Z,
            isSearchBarEmpty: '' === L.trim()
        }),
        U = u.Z.useField('fetchedQuery'),
        G = r.useCallback(
            (e) => {
                x(e), R && O();
            },
            [R, O, x]
        ),
        B = r.useMemo(
            () =>
                R
                    ? S.filter((e) => {
                          let { id: t } = e;
                          return !I.MU.has(t);
                      })
                    : S,
            [S, R]
        ),
        H = r.useRef(new h.Z(b)),
        { onGuildCardSeen: V, onGuildCardClick: F } = (0, p.H)({
            guildDiscoveryCardSeenManager: H.current,
            loadId: e.current
        });
    return (
        r.useEffect(() => {
            H.current.flushSeenGuilds(e.current);
        }, [b]),
        r.useEffect(() => {
            T();
        }, [A, T]),
        r.useEffect(() => {
            !R && u.Z.setState({ scrollPosition: null });
        }, [R]),
        (0, i.jsxs)('div', {
            className: N.container,
            children: [
                (0, i.jsxs)(o.ZP, {
                    className: R ? N.search : void 0,
                    children: [
                        !R && (0, i.jsx)(o.z6, { scrollPosition: n }),
                        R
                            ? (0, i.jsx)(o.Cm, {
                                  icon: l.ArrowLargeLeftIcon,
                                  onClick: O
                              })
                            : (0, i.jsx)(o.aV, { icon: l.ServerIcon }),
                        !R &&
                            (0, i.jsx)(c.Z, {
                                className: k,
                                tabs: B,
                                selectedTab: R ? null : A,
                                onTabSelect: G,
                                onAvailableWidthChange: D
                            }),
                        R &&
                            (0, i.jsx)(l.Heading, {
                                variant: 'heading-lg/semibold',
                                color: 'header-primary',
                                className: N.searchResultsHeader,
                                children: v.intl.format(v.t.zHdzqa, { query: U })
                            }),
                        Z &&
                            (0, i.jsx)(d.Z, {
                                query: L,
                                placeholder: v.intl.string(v.t['5h0QOD']),
                                onTextChange: y,
                                onClear: O,
                                onSubmit: P,
                                onCollapsedClick: M,
                                state: R ? C.WB.DEFAULT : j,
                                onBlur: w
                            })
                    ]
                }),
                R
                    ? (0, i.jsx)(E.Z, {
                          loadId: e.current,
                          onGuildCardClick: F,
                          onGuildCardSeen: V
                      })
                    : (0, i.jsx)(_.Z, {
                          selectedTab: A,
                          onScroll: t,
                          onGuildCardClick: F,
                          onGuildCardSeen: V
                      })
            ]
        })
    );
}

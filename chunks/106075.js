n.d(t, {
    Z: function () {
        return N;
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
    S = n(608576);
function N() {
    let e = r.useRef((0, m.PM)()),
        { onScroll: t, scrollPosition: n, resetScrollPosition: N } = (0, a.M)(),
        { tabs: T, selectedTab: A, setSelectedTab: b } = (0, f.Y)(),
        x = (0, m.lg)(A),
        Z = !I.MU.has(A),
        { searchQuery: L, onSearchTextChange: y, onClearSearch: O, onSearchSubmit: R, isSearchVisible: P } = (0, g.H)({ loadId: e.current }),
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
                b(e), P && O();
            },
            [P, O, b]
        ),
        B = r.useMemo(
            () =>
                P
                    ? T.filter((e) => {
                          let { id: t } = e;
                          return !I.MU.has(t);
                      })
                    : T,
            [T, P]
        ),
        V = r.useRef(new h.Z(x)),
        { onGuildCardSeen: H, onGuildCardClick: F } = (0, p.H)({
            guildDiscoveryCardSeenManager: V.current,
            loadId: e.current
        });
    return (
        r.useEffect(() => {
            V.current.flushSeenGuilds(e.current);
        }, [x]),
        r.useEffect(() => {
            N();
        }, [A, N]),
        r.useEffect(() => {
            !P && u.Z.setState({ scrollPosition: null });
        }, [P]),
        (0, i.jsxs)('div', {
            className: S.container,
            children: [
                (0, i.jsxs)(o.ZP, {
                    variant: P ? o._6.RELATIVE : o._6.OVERLAY,
                    children: [
                        !P && (0, i.jsx)(o.z6, { scrollPosition: n }),
                        P
                            ? (0, i.jsx)(o.Cm, {
                                  icon: l.ArrowLargeLeftIcon,
                                  onClick: O
                              })
                            : (0, i.jsx)(o.aV, { icon: l.ServerIcon }),
                        !P &&
                            (0, i.jsx)(c.Z, {
                                className: k,
                                tabs: B,
                                selectedTab: P ? null : A,
                                onTabSelect: G,
                                onAvailableWidthChange: D
                            }),
                        P &&
                            (0, i.jsx)(l.Heading, {
                                variant: 'heading-lg/semibold',
                                color: 'header-primary',
                                className: S.searchResultsHeader,
                                children: v.intl.format(v.t.zHdzqa, { query: U })
                            }),
                        Z &&
                            (0, i.jsx)(d.Z, {
                                query: L,
                                placeholder: v.intl.string(v.t['5h0QOD']),
                                onTextChange: y,
                                onClear: O,
                                onSubmit: R,
                                onCollapsedClick: M,
                                state: P ? C.WB.DEFAULT : j,
                                onBlur: w
                            })
                    ]
                }),
                P
                    ? (0, i.jsx)(E.Z, {
                          loadId: e.current,
                          onGuildCardClick: F,
                          onGuildCardSeen: H
                      })
                    : (0, i.jsx)(_.Z, {
                          selectedTab: A,
                          onScroll: t,
                          onGuildCardClick: F,
                          onGuildCardSeen: H
                      })
            ]
        })
    );
}

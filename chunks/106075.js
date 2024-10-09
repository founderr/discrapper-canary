n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(143927),
    o = n(481060),
    c = n(963202),
    d = n(117496),
    u = n(702646),
    _ = n(207796),
    E = n(979233),
    h = n(88693),
    m = n(611928),
    I = n(922122),
    p = n(680180),
    g = n(164991),
    T = n(444324),
    f = n(726115),
    S = n(750910),
    C = n(28494),
    N = n(29086),
    A = n(590771),
    v = n(273596),
    Z = n(128449),
    L = n(49898),
    R = n(689938),
    O = n(636872);
function x() {
    let e = a.useRef((0, d.P)()),
        { onScroll: t, scrollPosition: n, resetScrollPosition: s } = (0, E.M)(),
        { tabs: x, selectedTab: b, setSelectedTab: M } = (0, N.Y)(),
        P = (0, f.lg)(b),
        D = !Z.MU.has(b),
        y = (0, c.iN)('global_discovery_servers_layout'),
        { searchQuery: j, onSearchTextChange: U, onClearSearch: G, onSearchSubmit: w, isSearchVisible: k } = (0, C.H)({ loadId: e.current }),
        {
            searchBarState: B,
            onTabsAvailableWidthChange: V,
            onCollapsedSearchBarClick: H,
            onSearchBarBlur: F,
            tabsClassName: Y
        } = (0, h.U)({
            isSearchBarVisible: D,
            isSearchBarEmpty: '' === j.trim()
        }),
        z = (0, g.NL)(),
        W = (0, _.GN)((e) => e.mode, l.Z),
        K = a.useCallback(
            (e) => {
                M(e), k && G();
            },
            [k, G, M]
        ),
        q = a.useMemo(
            () =>
                k
                    ? x.filter((e) => {
                          let { id: t } = e;
                          return !Z.MU.has(t);
                      })
                    : x,
            [x, k]
        ),
        Q = W === _.v0.SAVED_GUILDS,
        X = a.useRef(new T.Z(P)),
        { onGuildCardSeen: J, onGuildCardClick: $ } = (0, S.H)({
            guildDiscoveryCardSeenManager: X.current,
            loadId: e.current
        });
    a.useEffect(() => {
        X.current.flushSeenGuilds(e.current);
    }, [P]),
        a.useEffect(() => {
            s();
        }, [b, s]),
        a.useEffect(() => {
            !k && (0, g.LD)({ scrollPosition: null });
        }, [k]);
    let ee = a.useMemo(() => {
        switch (b) {
            case Z.vf.HUBS:
                return null;
            case Z.vf.GUILDS:
                if (y) return (0, i.jsx)(u.Z, { className: r()(O.clanDiscoveryToolbar, !Q && O.rightAlignedToolbar) });
                return null;
            default:
                return (0, i.jsx)(p.Z, {
                    query: j,
                    placeholder: R.Z.Messages.SEARCH,
                    onTextChange: U,
                    onClear: G,
                    onSubmit: w,
                    onCollapsedClick: H,
                    state: k ? L.WB.DEFAULT : B,
                    onBlur: F
                });
        }
    }, [b, y, j, U, G, w, H, k, B, F, Q]);
    return (0, i.jsxs)('div', {
        className: O.container,
        children: [
            (0, i.jsxs)(m.ZP, {
                className: k ? O.search : void 0,
                children: [
                    !k && (0, i.jsx)(m.z6, { scrollPosition: n }),
                    !Q &&
                        (0, i.jsx)(m.aV, {
                            icon: k ? o.ArrowLargeLeftIcon : o.ServerIcon,
                            onClick: k ? G : void 0
                        }),
                    !Q &&
                        !k &&
                        (0, i.jsx)(I.Z, {
                            className: Y,
                            tabs: q,
                            selectedTab: k ? null : b,
                            onTabSelect: K,
                            onAvailableWidthChange: V
                        }),
                    !Q &&
                        k &&
                        (0, i.jsx)(o.Heading, {
                            variant: 'heading-lg/semibold',
                            color: 'header-primary',
                            className: O.searchResultsHeader,
                            children: R.Z.Messages.GLOBAL_DISCOVERY_SERVERS_SEARCH_RESULTS_HEADER.format({ query: z })
                        }),
                    ee
                ]
            }),
            k
                ? (0, i.jsx)(v.Z, {
                      loadId: e.current,
                      onGuildCardClick: $,
                      onGuildCardSeen: J
                  })
                : (0, i.jsx)(A.Z, {
                      selectedTab: b,
                      onScroll: t,
                      onGuildCardClick: $,
                      onGuildCardSeen: J
                  })
        ]
    });
}

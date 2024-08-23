n.d(t, {
    Z: function () {
        return O;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(143927),
    r = n(481060),
    l = n(963202),
    o = n(117496),
    c = n(702646),
    d = n(207796),
    u = n(540742),
    _ = n(766219),
    h = n(801543),
    E = n(979233),
    m = n(88693),
    I = n(611928),
    g = n(680180),
    p = n(791734),
    T = n(341789),
    f = n(591433),
    S = n(282773),
    C = n(143021),
    N = n(775260),
    A = n(49898),
    v = n(731455),
    Z = n(689938),
    L = n(645664);
function O() {
    let e = a.useRef((0, o.P)()),
        { onScroll: t, scrollPosition: n, resetScrollPosition: O } = (0, E.M)(),
        { tabs: R, selectedTab: x, setSelectedTab: b } = (0, N.Y)(),
        P = (0, _.lg)(x),
        M = !A.MU.has(x),
        D = (0, l.iN)('global_discovery_servers_layout'),
        { searchBarState: y, onTabsAvailableWidthChange: j, onCollapsedSearchBarClick: U, onSearchBarBlur: G, tabsClassName: k } = (0, m.U)({ isSearchBarVisible: M }),
        { searchQuery: w, onSearchTextChange: B, onClearSearch: H, onSearchSubmit: V, isSearchVisible: F } = (0, C.H)({ loadId: e.current }),
        Y = (0, d.GN)((e) => e.mode, s.Z),
        W = a.useCallback(
            (e) => {
                b(e), F && H();
            },
            [F, H, b]
        ),
        z = a.useMemo(
            () =>
                F
                    ? R.filter((e) => {
                          let { id: t } = e;
                          return !A.MU.has(t);
                      })
                    : R,
            [R, F]
        ),
        K = Y === d.v0.SAVED_GUILDS,
        q = a.useRef(new h.Z(P)),
        { onGuildCardSeen: Q, onGuildCardClick: X } = (0, S.H)({
            guildDiscoveryCardSeenManager: q.current,
            loadId: e.current
        });
    a.useEffect(() => {
        q.current.flushSeenGuilds(e.current);
    }, [P]),
        a.useEffect(() => {
            O();
        }, [x, O]),
        a.useEffect(() => {
            !F && u.B.setState({ searchScrollPosition: null });
        }, [F]);
    let J = a.useMemo(() => {
        switch (x) {
            case A.vf.HUBS:
                return null;
            case A.vf.GUILDS:
                if (D) return (0, i.jsx)(c.Z, { className: L.clanDiscoveryToolbar });
                return null;
            default:
                return (0, i.jsx)(g.Z, {
                    query: w,
                    placeholder: P === v.Hk ? Z.Z.Messages.SEARCH : Z.Z.Messages.GLOBAL_DISCOVERY_SEARCH_PLACEHOLDER.format({ title: (0, _.vb)(x) }),
                    onTextChange: B,
                    onClear: H,
                    onSubmit: V,
                    onCollapsedClick: U,
                    state: y,
                    onBlur: G
                });
        }
    }, [x, D, w, P, B, H, V, U, y, G]);
    return (0, i.jsxs)('div', {
        className: L.container,
        children: [
            (0, i.jsxs)(I.ZP, {
                className: F ? L.search : void 0,
                children: [
                    !F && (0, i.jsx)(I.z6, { scrollPosition: n }),
                    !K &&
                        (0, i.jsx)(I.aV, {
                            icon: F ? r.ArrowLargeLeftIcon : r.ServerIcon,
                            onClick: F ? H : void 0
                        }),
                    !K &&
                        (0, i.jsx)(p.Z, {
                            className: k,
                            tabs: z,
                            selectedTab: F ? null : x,
                            onTabSelect: W,
                            onAvailableWidthChange: j
                        }),
                    J
                ]
            }),
            F
                ? (0, i.jsx)(f.Z, {
                      loadId: e.current,
                      onGuildCardClick: X,
                      onGuildCardSeen: Q
                  })
                : (0, i.jsx)(T.Z, {
                      loadId: e.current,
                      selectedTab: x,
                      onScroll: t,
                      onGuildCardClick: X,
                      onGuildCardSeen: Q
                  })
        ]
    });
}

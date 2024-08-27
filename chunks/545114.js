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
    E = n(540742),
    h = n(766219),
    m = n(801543),
    I = n(979233),
    g = n(88693),
    p = n(611928),
    T = n(680180),
    S = n(791734),
    f = n(341789),
    C = n(591433),
    N = n(282773),
    A = n(143021),
    v = n(775260),
    Z = n(49898),
    L = n(731455),
    O = n(689938),
    R = n(645664);
function x() {
    let e = a.useRef((0, d.P)()),
        { onScroll: t, scrollPosition: n, resetScrollPosition: s } = (0, I.M)(),
        { tabs: x, selectedTab: b, setSelectedTab: P } = (0, v.Y)(),
        M = (0, h.lg)(b),
        D = !Z.MU.has(b),
        y = (0, c.iN)('global_discovery_servers_layout'),
        { searchBarState: j, onTabsAvailableWidthChange: U, onCollapsedSearchBarClick: G, onSearchBarBlur: k, tabsClassName: w } = (0, g.U)({ isSearchBarVisible: D }),
        { searchQuery: B, onSearchTextChange: H, onClearSearch: V, onSearchSubmit: F, isSearchVisible: Y } = (0, A.H)({ loadId: e.current }),
        W = (0, _.GN)((e) => e.mode, l.Z),
        z = a.useCallback(
            (e) => {
                P(e), Y && V();
            },
            [Y, V, P]
        ),
        K = a.useMemo(
            () =>
                Y
                    ? x.filter((e) => {
                          let { id: t } = e;
                          return !Z.MU.has(t);
                      })
                    : x,
            [x, Y]
        ),
        q = W === _.v0.SAVED_GUILDS,
        Q = a.useRef(new m.Z(M)),
        { onGuildCardSeen: X, onGuildCardClick: J } = (0, N.H)({
            guildDiscoveryCardSeenManager: Q.current,
            loadId: e.current
        });
    a.useEffect(() => {
        Q.current.flushSeenGuilds(e.current);
    }, [M]),
        a.useEffect(() => {
            s();
        }, [b, s]),
        a.useEffect(() => {
            !Y && E.B.setState({ searchScrollPosition: null });
        }, [Y]);
    let $ = a.useMemo(() => {
        switch (b) {
            case Z.vf.HUBS:
                return null;
            case Z.vf.GUILDS:
                if (y) return (0, i.jsx)(u.Z, { className: r()(R.clanDiscoveryToolbar, !q && R.rightAlignedToolbar) });
                return null;
            default:
                return (0, i.jsx)(T.Z, {
                    query: B,
                    placeholder: M === L.Hk ? O.Z.Messages.SEARCH : O.Z.Messages.GLOBAL_DISCOVERY_SEARCH_PLACEHOLDER.format({ title: (0, h.vb)(b) }),
                    onTextChange: H,
                    onClear: V,
                    onSubmit: F,
                    onCollapsedClick: G,
                    state: j,
                    onBlur: k
                });
        }
    }, [b, y, B, M, H, V, F, G, j, k, q]);
    return (0, i.jsxs)('div', {
        className: R.container,
        children: [
            (0, i.jsxs)(p.ZP, {
                className: Y ? R.search : void 0,
                children: [
                    !Y && (0, i.jsx)(p.z6, { scrollPosition: n }),
                    !q &&
                        (0, i.jsx)(p.aV, {
                            icon: Y ? o.ArrowLargeLeftIcon : o.ServerIcon,
                            onClick: Y ? V : void 0
                        }),
                    !q &&
                        (0, i.jsx)(S.Z, {
                            className: w,
                            tabs: K,
                            selectedTab: Y ? null : b,
                            onTabSelect: z,
                            onAvailableWidthChange: U
                        }),
                    $
                ]
            }),
            Y
                ? (0, i.jsx)(C.Z, {
                      loadId: e.current,
                      onGuildCardClick: J,
                      onGuildCardSeen: X
                  })
                : (0, i.jsx)(f.Z, {
                      loadId: e.current,
                      selectedTab: b,
                      onScroll: t,
                      onGuildCardClick: J,
                      onGuildCardSeen: X
                  })
        ]
    });
}

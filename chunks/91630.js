n.d(t, {
    U: function () {
        return T;
    }
});
var i = n(735250), s = n(470079), a = n(657707), r = n(823379), l = n(51448), o = n(164427), c = n(624383), d = n(742916), u = n(860403), _ = n(536763), E = n(160460), h = n(968669), I = n(982345), m = n(49898), g = n(689938), p = n(65050);
function T() {
    let {
            tabs: e,
            selectedTab: t,
            onSelectTab: n
        } = (0, I.Y)(), T = s.useRef(new d.m()), S = (0, m.$G)(t.id), {
            searching: C,
            searchQuery: f,
            setSearchQuery: N,
            handleSearchClear: A,
            handleSearchSubmit: Z
        } = (0, h.C)(S), v = s.useCallback(e => {
            let {
                tabId: t,
                categoryId: n,
                searchQuery: s,
                searching: a
            } = e;
            if (a)
                return (0, i.jsx)(E.x, {
                    searchQuery: s,
                    categoryId: (0, m.$G)(t),
                    onSearchClear: A
                });
            switch (t) {
            case m.vf.GUILDS:
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(c.c, {
                        title: g.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_TITLE,
                        description: g.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_DESCRIPTION,
                        backgroundImageUrl: 'https://cdn.discordapp.com/assets/clans/DiscoveryUpsell_Valorant_Background.png'
                    })
                });
            case m.vf.GAMING:
                return (0, i.jsx)(u.j, {
                    categoryId: n,
                    categoryName: g.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GAMING_CATEGORY
                });
            case m.vf.MUSIC:
                return (0, i.jsx)(u.j, {
                    categoryId: n,
                    categoryName: g.Z.Messages.GLOBAL_DISCOVERY_SERVERS_MUSIC_CATEGORY
                });
            case m.vf.ENTERTAINMENT:
                return (0, i.jsx)(u.j, {
                    categoryId: n,
                    categoryName: g.Z.Messages.GLOBAL_DISCOVERY_SERVERS_ENTERTAINMENT_CATEGORY
                });
            case m.vf.TECH:
                return (0, i.jsx)(u.j, {
                    categoryId: n,
                    categoryName: g.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TECH_CATEGORY
                });
            case m.vf.EDUCATION:
                return (0, i.jsx)(u.j, {
                    categoryId: n,
                    categoryName: g.Z.Messages.GLOBAL_DISCOVERY_SERVERS_EDUCATION_CATEGORY
                });
            case m.vf.HUBS:
                return (0, i.jsx)(_.X, {});
            default:
                (0, r.vE)(t);
            }
        }, [A]);
    return (0, i.jsxs)('div', {
        className: p.container,
        children: [
            (0, i.jsx)(l.f, {
                icon: (0, i.jsx)(a.QTo, {}),
                title: g.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TITLE,
                tabs: e,
                selectedTab: t,
                onTabSelect: n,
                searchQuery: f,
                onSearch: N,
                onSearchClear: A,
                onSearchSubmit: Z,
                scrollManager: T
            }),
            (0, i.jsx)(o.J, {
                scrollManager: T,
                children: v({
                    tabId: t.id,
                    searchQuery: f,
                    searching: C,
                    categoryId: S
                })
            })
        ]
    });
}

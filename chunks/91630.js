n.d(t, {
    U: function () {
        return g;
    }
}), n(47120);
var i = n(735250), s = n(470079), a = n(657707), r = n(823379), l = n(51448), o = n(164427), c = n(624383), d = n(742916), u = n(860403), _ = n(536763), E = n(982345), h = n(49898), I = n(731455), m = n(689938), p = n(432403);
function g() {
    let [e, t] = s.useState(''), {
            tabs: n,
            selectedTab: g,
            onSelectTab: T
        } = (0, E.Y)(), S = s.useRef(new d.m()), C = s.useCallback(e => {
            switch (e) {
            case h.v.GUILDS:
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(c.c, {
                        title: m.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_TITLE,
                        description: m.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_DESCRIPTION,
                        backgroundImageUrl: 'https://cdn.discordapp.com/assets/clans/DiscoveryUpsell_Valorant_Background.png'
                    })
                });
            case h.v.GAMING:
                return (0, i.jsx)(u.j, {
                    categoryId: I.Gj.Activity,
                    categoryName: m.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GAMING_CATEGORY
                });
            case h.v.MUSIC:
                return (0, i.jsx)(u.j, {
                    categoryId: I.Gj.Music,
                    categoryName: m.Z.Messages.GLOBAL_DISCOVERY_SERVERS_MUSIC_CATEGORY
                });
            case h.v.ENTERTAINMENT:
                return (0, i.jsx)(u.j, {
                    categoryId: I.Gj.Television,
                    categoryName: m.Z.Messages.GLOBAL_DISCOVERY_SERVERS_ENTERTAINMENT_CATEGORY
                });
            case h.v.TECH:
                return (0, i.jsx)(u.j, {
                    categoryId: I.Gj.Science,
                    categoryName: m.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TECH_CATEGORY
                });
            case h.v.EDUCATION:
                return (0, i.jsx)(u.j, {
                    categoryId: I.Gj.Education,
                    categoryName: m.Z.Messages.GLOBAL_DISCOVERY_SERVERS_EDUCATION_CATEGORY
                });
            case h.v.HUBS:
                return (0, i.jsx)(_.X, {});
            default:
                (0, r.vE)(e);
            }
        }, []);
    return (0, i.jsxs)('div', {
        className: p.container,
        children: [
            (0, i.jsx)(l.f, {
                icon: (0, i.jsx)(a.QTo, {}),
                title: m.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TITLE,
                tabs: n,
                selectedTab: g,
                onTabSelect: T,
                searchQuery: e,
                onSearch: t,
                onSearchClear: () => t(''),
                scrollManager: S
            }),
            (0, i.jsx)(o.J, {
                scrollManager: S,
                children: C(g.id)
            })
        ]
    });
}

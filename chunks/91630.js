n.d(t, {
    U: function () {
        return p;
    }
}), n(47120);
var i = n(735250), s = n(470079), a = n(657707), r = n(823379), l = n(51448), o = n(164427), c = n(624383), d = n(742916), u = n(860403), _ = n(982345), E = n(49898), h = n(731455), I = n(689938), m = n(432403);
function p() {
    let [e, t] = s.useState(''), {
            tabs: n,
            selectedTab: p,
            onSelectTab: g
        } = (0, _.Y)(), T = s.useRef(new d.m()), S = s.useCallback(e => {
            switch (e) {
            case E.v.GUILDS:
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(c.c, {
                        title: I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_TITLE,
                        description: I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_DESCRIPTION,
                        backgroundImageUrl: 'https://cdn.discordapp.com/assets/clans/DiscoveryUpsell_Valorant_Background.png'
                    })
                });
            case E.v.GAMING:
                return (0, i.jsx)(u.j, {
                    categoryId: h.Gj.Activity,
                    categoryName: I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GAMING_CATEGORY
                });
            case E.v.MUSIC:
                return (0, i.jsx)(u.j, {
                    categoryId: h.Gj.Music,
                    categoryName: I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_MUSIC_CATEGORY
                });
            case E.v.ENTERTAINMENT:
                return (0, i.jsx)(u.j, {
                    categoryId: h.Gj.Television,
                    categoryName: I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_ENTERTAINMENT_CATEGORY
                });
            case E.v.TECH:
                return (0, i.jsx)(u.j, {
                    categoryId: h.Gj.Science,
                    categoryName: I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TECH_CATEGORY
                });
            case E.v.EDUCATION:
                return (0, i.jsx)(u.j, {
                    categoryId: h.Gj.Education,
                    categoryName: I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_EDUCATION_CATEGORY
                });
            case E.v.HUBS:
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(c.c, {
                        title: I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GENERIC_HERO_TITLE.format({ category: I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_HUBS_CATEGORY }),
                        description: I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GENERIC_HERO_DESCRIPTION
                    })
                });
            default:
                (0, r.vE)(e);
            }
        }, []);
    return (0, i.jsxs)('div', {
        className: m.container,
        children: [
            (0, i.jsx)(l.f, {
                icon: (0, i.jsx)(a.QTo, {}),
                title: I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TITLE,
                tabs: n,
                selectedTab: p,
                onTabSelect: g,
                searchQuery: e,
                onSearch: t,
                onSearchClear: () => t(''),
                scrollManager: T
            }),
            (0, i.jsx)(o.J, {
                scrollManager: T,
                children: S(p.id)
            })
        ]
    });
}

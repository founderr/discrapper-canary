var i = n(735250);
n(470079);
var a = n(636977),
    s = n(442837),
    r = n(481060),
    l = n(212093),
    o = n(963202),
    c = n(677277),
    d = n(285865),
    u = n(918701),
    _ = n(702428),
    h = n(341907),
    E = n(703656),
    m = n(683301),
    I = n(150192),
    g = n(889010),
    p = n(488905),
    T = n(347137),
    f = n(731455),
    S = n(981631),
    C = n(46140),
    N = n(689938),
    A = n(289505);
let v = (e) => {
        switch (e) {
            case f.Gj.Activity:
                return f.fW.Activity;
            case f.Gj.Music:
                return f.fW.Music;
            case f.Gj.Television:
                return f.fW.Television;
            case f.Gj.Science:
                return f.fW.Science;
            case f.Gj.Education:
                return f.fW.Education;
            default:
                return f.fW.Discover;
        }
    },
    Z = () => {
        let { currentCategoryId: e, isViewingSearchResults: t } = (0, s.cj)([m.ZP], () => ({
                currentCategoryId: m.ZP.getCurrentCategoryId(),
                isViewingSearchResults: m.ZP.getMostRecentQuery().length > 0
            })),
            n = (0, s.e7)([I.Z], () => I.Z.getDiscoveryCategories(), [], I.j),
            o =
                null == n
                    ? void 0
                    : n.map((e) => ({
                          ...e,
                          icon: v(e.categoryId)
                      })),
            T = (e) => {
                (0, l.uY)(e, !0), d.Z.closeSidebar(), t && (0, l.AQ)(), (0, u.OG)() && e !== f.Gj.Quests && (0, E.uL)(S.Z5c.GUILD_DISCOVERY), !(0, u.OG)() && e === f.Gj.Quests && (0, h.navigateToQuestHome)(C.dr.DISCOVERY_SIDEBAR, a.j.DISCOVERY_SIDEBAR);
            };
        return (0, i.jsxs)(r.Scroller, {
            className: A.sidebarContainer,
            children: [
                (0, i.jsx)(p.V, { text: N.Z.Messages.DISCOVER }),
                (0, i.jsx)(g.Z, {
                    categories: o,
                    handleCategorySelect: T,
                    currentCategoryId: e,
                    shouldDisplaySelectedCategory: !t
                }),
                (0, i.jsx)(c.Z, {
                    handleCategorySelect: T,
                    currentCategoryId: e,
                    shouldDisplaySelectedCategory: !t
                }),
                (0, i.jsx)(_.Z, {
                    onClick: () => T(f.Gj.Quests),
                    isSelected: e === f.Gj.Quests
                })
            ]
        });
    };
t.Z = function () {
    let { guilds: e } = (0, o.C3)({
            location: 'guild_discovery_sidebar',
            includeConverted: !0
        }),
        t = e.length > 0,
        { clanDiscoveryEnabled: n } = (0, o.nk)('guild_discovery_sidebar');
    return t || n ? (0, i.jsx)(T.Z, {}) : (0, i.jsx)(Z, {});
};

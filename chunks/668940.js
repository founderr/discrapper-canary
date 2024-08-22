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
    _ = n(471985),
    h = n(702428),
    E = n(341907),
    m = n(703656),
    I = n(683301),
    g = n(150192),
    p = n(889010),
    T = n(488905),
    S = n(347137),
    f = n(731455),
    C = n(981631),
    N = n(46140),
    A = n(689938),
    v = n(745322);
let Z = (e) => {
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
    L = () => {
        let { currentCategoryId: e, isViewingSearchResults: t } = (0, s.cj)([I.ZP], () => ({
                currentCategoryId: I.ZP.getCurrentCategoryId(),
                isViewingSearchResults: I.ZP.getMostRecentQuery().length > 0
            })),
            n = (0, _.Z)(N.dr.QUEST_HOME_DESKTOP),
            o = (0, s.e7)([g.Z], () => g.Z.getDiscoveryCategories(), [], g.j),
            S =
                null == o
                    ? void 0
                    : o.map((e) => ({
                          ...e,
                          icon: Z(e.categoryId)
                      })),
            L = (e) => {
                (0, l.uY)(e, !0), d.Z.closeSidebar(), t && (0, l.AQ)(), (0, u.OG)() && e !== f.Gj.Quests && (0, m.uL)(C.Z5c.GUILD_DISCOVERY), !(0, u.OG)() && e === f.Gj.Quests && (0, E.navigateToQuestHome)(N.dr.DISCOVERY_SIDEBAR, a.j.DISCOVERY_SIDEBAR);
            };
        return (0, i.jsxs)(r.Scroller, {
            className: v.sidebarContainer,
            children: [
                (0, i.jsx)(T.V, { text: A.Z.Messages.DISCOVER }),
                (0, i.jsx)(p.Z, {
                    categories: S,
                    handleCategorySelect: L,
                    currentCategoryId: e,
                    shouldDisplaySelectedCategory: !t
                }),
                (0, i.jsx)(c.Z, {
                    handleCategorySelect: L,
                    currentCategoryId: e,
                    shouldDisplaySelectedCategory: !t
                }),
                n &&
                    (0, i.jsx)(h.Z, {
                        onClick: () => L(f.Gj.Quests),
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
    return t || n ? (0, i.jsx)(S.Z, {}) : (0, i.jsx)(L, {});
};

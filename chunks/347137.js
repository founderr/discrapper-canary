var i = n(735250),
    a = n(470079),
    s = n(636977),
    r = n(948789),
    l = n(481060),
    o = n(442837),
    c = n(212093),
    d = n(570938),
    u = n(554300),
    _ = n(677277),
    E = n(285865),
    h = n(918701),
    m = n(471985),
    I = n(702428),
    g = n(341907),
    p = n(683301),
    T = n(296386),
    f = n(150192),
    S = n(889010),
    C = n(488905),
    N = n(731455),
    A = n(981631),
    v = n(46140),
    L = n(689938),
    Z = n(653534);
let O = (e) => {
    switch (e) {
        case N.Gj.Activity:
            return N.fW.Activity;
        case N.Gj.Music:
            return N.fW.Music;
        case N.Gj.Television:
            return N.fW.Television;
        case N.Gj.Science:
            return N.fW.Science;
        case N.Gj.Education:
            return N.fW.Education;
        default:
            return N.fW.Server;
    }
};
t.Z = function () {
    let {
            currentCategoryId: e,
            isViewingSearchResults: t,
            currentHomepageCategoryId: n
        } = (0, o.cj)([p.ZP], () => ({
            currentCategoryId: p.ZP.getCurrentCategoryId(),
            isViewingSearchResults: p.ZP.getMostRecentQuery().length > 0,
            currentHomepageCategoryId: p.ZP.getCurrentHomepageCategoryId()
        })),
        R = (0, m.Z)(v.dr.QUEST_HOME_DESKTOP),
        x = (0, h.OG)(),
        b = (0, o.e7)([f.Z], () => f.Z.getClanDiscoveryCategories(), [], f.j),
        P =
            null == b
                ? void 0
                : b.map((e) => ({
                      ...e,
                      icon: O(e.categoryId)
                  })),
        M = (e) => {
            (0, c.uY)(e, !0), E.Z.closeSidebar(), t && (0, c.AQ)(), (0, h.OG)() && e !== N.Gj.Quests && (0, r.uL)(A.Z5c.GUILD_DISCOVERY), !(0, h.OG)() && e === N.Gj.Quests && (0, g.navigateToQuestHome)(v.dr.DISCOVERY_SIDEBAR, s.j.DISCOVERY_SIDEBAR);
        };
    return (
        a.useEffect(() => {
            (0, T.le)(!1, !0);
        }, [e]),
        a.useEffect(() => {
            !x && null == n && (0, c.uY)(N.Gj.Clans, !0);
        }, [x, n]),
        (0, i.jsxs)(l.Scroller, {
            children: [
                (0, i.jsx)(C.V, { text: L.Z.Messages.DISCOVER }),
                (0, i.jsx)(
                    u.Z,
                    {
                        avatar: (0, i.jsx)(d.Z, {}),
                        name: L.Z.Messages.CLANS,
                        focusProps: {
                            offset: {
                                right: 4,
                                top: 1,
                                bottom: 1
                            }
                        },
                        onClick: () => M(N.Gj.Clans),
                        wrapContent: !0,
                        selected: e === N.Gj.Clans,
                        className: Z.categoryItem,
                        selectedClassName: Z.selectedCategoryItem,
                        innerClassName: Z.itemInner
                    },
                    'clan-discovery-home'
                ),
                (0, i.jsx)(S.Z, {
                    categories: P,
                    handleCategorySelect: M,
                    currentCategoryId: e,
                    shouldDisplaySelectedCategory: !t
                }),
                (0, i.jsx)(_.Z, {
                    handleCategorySelect: M,
                    currentCategoryId: e,
                    shouldDisplaySelectedCategory: !t
                }),
                R &&
                    (0, i.jsx)(I.Z, {
                        onClick: () => M(N.Gj.Quests),
                        isSelected: e === N.Gj.Quests
                    })
            ]
        })
    );
};

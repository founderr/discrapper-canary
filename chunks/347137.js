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
    h = n(285865),
    E = n(918701),
    m = n(702428),
    I = n(341907),
    g = n(683301),
    p = n(296386),
    T = n(150192),
    f = n(889010),
    S = n(488905),
    C = n(731455),
    N = n(981631),
    A = n(46140),
    v = n(689938),
    Z = n(1836);
let L = (e) => {
    switch (e) {
        case C.Gj.Activity:
            return C.fW.Activity;
        case C.Gj.Music:
            return C.fW.Music;
        case C.Gj.Television:
            return C.fW.Television;
        case C.Gj.Science:
            return C.fW.Science;
        case C.Gj.Education:
            return C.fW.Education;
        default:
            return C.fW.Server;
    }
};
t.Z = function () {
    let {
            currentCategoryId: e,
            isViewingSearchResults: t,
            currentHomepageCategoryId: n
        } = (0, o.cj)([g.ZP], () => ({
            currentCategoryId: g.ZP.getCurrentCategoryId(),
            isViewingSearchResults: g.ZP.getMostRecentQuery().length > 0,
            currentHomepageCategoryId: g.ZP.getCurrentHomepageCategoryId()
        })),
        R = (0, E.OG)(),
        O = (0, o.e7)([T.Z], () => T.Z.getClanDiscoveryCategories(), [], T.j),
        x =
            null == O
                ? void 0
                : O.map((e) => ({
                      ...e,
                      icon: L(e.categoryId)
                  })),
        b = (e) => {
            (0, c.uY)(e, !0), h.Z.closeSidebar(), t && (0, c.AQ)(), (0, E.OG)() && e !== C.Gj.Quests && (0, r.uL)(N.Z5c.GUILD_DISCOVERY), !(0, E.OG)() && e === C.Gj.Quests && (0, I.navigateToQuestHome)(A.dr.DISCOVERY_SIDEBAR, s.j.DISCOVERY_SIDEBAR);
        };
    return (
        a.useEffect(() => {
            (0, p.le)(!1, !0);
        }, [e]),
        a.useEffect(() => {
            !R && null == n && (0, c.uY)(C.Gj.Clans, !0);
        }, [R, n]),
        (0, i.jsxs)(l.Scroller, {
            children: [
                (0, i.jsx)(S.V, { text: v.Z.Messages.DISCOVER }),
                (0, i.jsx)(
                    u.Z,
                    {
                        avatar: (0, i.jsx)(d.Z, {}),
                        name: v.Z.Messages.CLANS,
                        focusProps: {
                            offset: {
                                right: 4,
                                top: 1,
                                bottom: 1
                            }
                        },
                        onClick: () => b(C.Gj.Clans),
                        wrapContent: !0,
                        selected: e === C.Gj.Clans,
                        className: Z.categoryItem,
                        selectedClassName: Z.selectedCategoryItem,
                        innerClassName: Z.itemInner
                    },
                    'clan-discovery-home'
                ),
                (0, i.jsx)(f.Z, {
                    categories: x,
                    handleCategorySelect: b,
                    currentCategoryId: e,
                    shouldDisplaySelectedCategory: !t
                }),
                (0, i.jsx)(_.Z, {
                    handleCategorySelect: b,
                    currentCategoryId: e,
                    shouldDisplaySelectedCategory: !t
                }),
                (0, i.jsx)(m.Z, {
                    onClick: () => b(C.Gj.Quests),
                    isSelected: e === C.Gj.Quests
                })
            ]
        })
    );
};

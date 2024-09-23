var i = n(735250),
    a = n(470079),
    s = n(990547),
    r = n(481060),
    l = n(213609),
    o = n(252618),
    c = n(979233),
    d = n(175307),
    u = n(17845),
    _ = n(422169),
    E = n(748699),
    h = n(611928),
    m = n(922122),
    I = n(63063),
    g = n(113434),
    p = n(833435),
    T = n(150560),
    S = n(558652),
    f = n(736683),
    C = n(452081),
    N = n(46140),
    A = n(981631),
    v = n(689938),
    L = n(431418);
t.Z = function () {
    let { tabs: e, selectedTab: t, onSelectTab: n } = (0, C.z)(),
        { onScroll: Z, scrollPosition: R } = (0, c.M)(),
        O = T.Z.getState().getUtmCurrentContext(),
        x = (0, p._)({ location: N.dr.QUEST_HOME_DESKTOP }) ? f.Z : f.j;
    a.useEffect(() => {
        (0, l.h)({
            name: s.ImpressionNames.QUEST_HOME,
            type: s.ImpressionTypes.VIEW,
            properties: {
                utm_source_current: O.utmSourceCurrent,
                utm_medium_current: O.utmMediumCurrent,
                utm_campaign_current: O.utmCampaignCurrent,
                utm_content_current: O.utmContentCurrent,
                tab: t
            }
        });
    }, [t]);
    let b = a.useCallback(() => {
        window.open(I.Z.getArticleURL(A.BhN.QUESTS_LEARN_MORE));
    }, []);
    (0, o.Tt)({ location: v.Z.Messages.QUESTS });
    let P = a.useMemo(() => ({ backgroundImage: 'url('.concat('https://cdn.discordapp.com/assets/discovery/quests-wumpus-hikes-mountain-transparent-background.png', ')') }), []);
    return (0, i.jsxs)('div', {
        className: L.container,
        children: [
            (0, i.jsxs)(h.ZP, {
                children: [
                    (0, i.jsx)('div', { className: L.dragRegion }),
                    (0, i.jsx)(h.z6, { scrollPosition: R }),
                    (0, i.jsx)(h.aV, { icon: r.QuestsIcon }),
                    (0, i.jsx)(m.Z, {
                        tabs: e,
                        selectedTab: t,
                        onTabSelect: n
                    })
                ]
            }),
            (0, i.jsxs)(E.Z, {
                onScroll: Z,
                children: [
                    (0, i.jsx)(u.Z, {
                        title: v.Z.Messages.QUESTS_HOME_HERO_TITLE,
                        description: v.Z.Messages.QUESTS_HOME_HERO_DESCRIPTION,
                        button: (0, i.jsx)(d.u, {
                            text: v.Z.Messages.LEARN_MORE,
                            onClick: b
                        }),
                        className: L.bannerContainer,
                        background: (0, i.jsx)('div', {
                            className: L.bannerImage,
                            style: P,
                            children: (0, i.jsx)('div', { className: L.bannerGradient })
                        })
                    }),
                    (0, i.jsx)(_.Z, { children: t === g.e5.CLAIMED ? (0, i.jsx)(x, { onSelectTab: n }) : (0, i.jsx)(S.Z, {}) })
                ]
            })
        ]
    });
};

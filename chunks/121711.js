var i = n(735250),
    a = n(470079),
    s = n(990547),
    r = n(481060),
    l = n(213609),
    o = n(252618),
    c = n(979233),
    d = n(175307),
    u = n(374939),
    _ = n(611928),
    E = n(791734),
    h = n(63063),
    m = n(113434),
    I = n(833435),
    g = n(150560),
    p = n(558652),
    T = n(736683),
    S = n(452081),
    C = n(46140),
    f = n(981631),
    N = n(689938),
    A = n(431418);
t.Z = function () {
    let { tabs: e, selectedTab: t, onSelectTab: n } = (0, S.z)(),
        { onScroll: v, scrollPosition: L } = (0, c.M)(),
        Z = g.Z.getState().getUtmCurrentContext(),
        R = (0, I._)({ location: C.dr.QUEST_HOME_DESKTOP }) ? T.Z : T.j;
    a.useEffect(() => {
        (0, l.h)({
            name: s.ImpressionNames.QUEST_HOME,
            type: s.ImpressionTypes.VIEW,
            properties: {
                utm_source_current: Z.utmSourceCurrent,
                utm_medium_current: Z.utmMediumCurrent,
                utm_campaign_current: Z.utmCampaignCurrent,
                utm_content_current: Z.utmContentCurrent,
                tab: t
            }
        });
    }, [t]);
    let O = a.useCallback(() => {
        window.open(h.Z.getArticleURL(f.BhN.QUESTS_LEARN_MORE));
    }, []);
    (0, o.Tt)({ location: N.Z.Messages.QUESTS });
    let x = a.useMemo(() => ({ backgroundImage: 'url('.concat('https://cdn.discordapp.com/assets/discovery/quests-wumpus-hikes-mountain-transparent-background.png', ')') }), []);
    return (0, i.jsxs)('div', {
        className: A.container,
        children: [
            (0, i.jsxs)(_.ZP, {
                children: [
                    (0, i.jsx)('div', { className: A.dragRegion }),
                    (0, i.jsx)(_.z6, { scrollPosition: L }),
                    (0, i.jsx)(_.aV, { icon: r.QuestsIcon }),
                    (0, i.jsx)(E.Z, {
                        tabs: e,
                        selectedTab: t,
                        onTabSelect: n
                    })
                ]
            }),
            (0, i.jsx)(u.Z, {
                title: N.Z.Messages.QUESTS_HOME_HERO_TITLE,
                description: N.Z.Messages.QUESTS_HOME_HERO_DESCRIPTION,
                onScroll: v,
                button: (0, i.jsx)(d.u, {
                    text: N.Z.Messages.LEARN_MORE,
                    onClick: O
                }),
                bannerClassName: A.bannerContainer,
                bannerBackground: (0, i.jsx)('div', {
                    className: A.bannerImage,
                    style: x,
                    children: (0, i.jsx)('div', { className: A.bannerGradient })
                }),
                children: t === m.e5.CLAIMED ? (0, i.jsx)(R, { onSelectTab: n }) : (0, i.jsx)(p.Z, {})
            })
        ]
    });
};

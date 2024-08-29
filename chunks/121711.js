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
    h = n(791734),
    E = n(63063),
    m = n(113434),
    I = n(150560),
    g = n(558652),
    p = n(736683),
    T = n(452081),
    f = n(981631),
    S = n(689938),
    C = n(296561);
t.Z = function (e) {
    let {} = e,
        { tabs: t, selectedTab: n, onSelectTab: N } = (0, T.z)(),
        { onScroll: A, scrollPosition: v } = (0, c.M)(),
        Z = I.Z.getState().getUtmCurrentContext();
    a.useEffect(() => {
        (0, l.h)({
            name: s.ImpressionNames.QUEST_HOME,
            type: s.ImpressionTypes.VIEW,
            properties: {
                utm_source_current: Z.utmSourceCurrent,
                utm_medium_current: Z.utmMediumCurrent,
                utm_campaign_current: Z.utmCampaignCurrent,
                utm_content_current: Z.utmContentCurrent
            }
        });
    }, []);
    let L = a.useCallback(() => {
        window.open(E.Z.getArticleURL(f.BhN.QUESTS_LEARN_MORE));
    }, []);
    (0, o.Tt)({ location: S.Z.Messages.QUESTS });
    let O = a.useMemo(() => ({ backgroundImage: 'url('.concat('https://cdn.discordapp.com/assets/discovery/quests-wumpus-hikes-mountain-transparent-background.png', ')') }), []);
    return (0, i.jsxs)('div', {
        className: C.container,
        children: [
            (0, i.jsxs)(_.ZP, {
                children: [
                    (0, i.jsx)('div', { className: C.dragRegion }),
                    (0, i.jsx)(_.z6, { scrollPosition: v }),
                    (0, i.jsx)(_.aV, { icon: r.QuestsIcon }),
                    (0, i.jsx)(h.Z, {
                        tabs: t,
                        selectedTab: n,
                        onTabSelect: N
                    })
                ]
            }),
            (0, i.jsx)(u.Z, {
                title: S.Z.Messages.QUESTS_HOME_HERO_TITLE,
                description: S.Z.Messages.QUESTS_HOME_HERO_DESCRIPTION,
                onScroll: A,
                button: (0, i.jsx)(d.u, {
                    text: S.Z.Messages.LEARN_MORE,
                    onClick: L
                }),
                bannerClassName: C.bannerContainer,
                bannerBackground: (0, i.jsx)('div', {
                    className: C.bannerImage,
                    style: O,
                    children: (0, i.jsx)('div', { className: C.bannerGradient })
                }),
                children: n === m.e5.CLAIMED ? (0, i.jsx)(p.Z, { onSelectTab: N }) : (0, i.jsx)(g.Z, {})
            })
        ]
    });
};

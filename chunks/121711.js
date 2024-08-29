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
    I = n(471985),
    g = n(150560),
    p = n(558652),
    T = n(736683),
    f = n(452081),
    S = n(46140),
    C = n(981631),
    N = n(689938),
    A = n(296561);
t.Z = function (e) {
    let {} = e,
        t = (0, I.Z)(S.dr.QUEST_HOME_DESKTOP),
        { tabs: n, selectedTab: v, onSelectTab: L } = (0, f.z)(),
        { onScroll: Z, scrollPosition: O } = (0, c.M)(),
        R = g.Z.getState().getUtmCurrentContext();
    a.useEffect(() => {
        (0, l.h)({
            name: s.ImpressionNames.QUEST_HOME,
            type: s.ImpressionTypes.VIEW,
            properties: {
                utm_source_current: R.utmSourceCurrent,
                utm_medium_current: R.utmMediumCurrent,
                utm_campaign_current: R.utmCampaignCurrent,
                utm_content_current: R.utmContentCurrent
            }
        });
    }, []);
    let x = a.useCallback(() => {
        window.open(h.Z.getArticleURL(C.BhN.QUESTS_LEARN_MORE));
    }, []);
    (0, o.Tt)({ location: N.Z.Messages.QUESTS });
    let b = a.useMemo(() => ({ backgroundImage: 'url('.concat('https://cdn.discordapp.com/assets/discovery/quests-wumpus-hikes-mountain-transparent-background.png', ')') }), []);
    return t
        ? (0, i.jsxs)('div', {
              className: A.container,
              children: [
                  (0, i.jsxs)(_.ZP, {
                      children: [
                          (0, i.jsx)('div', { className: A.dragRegion }),
                          (0, i.jsx)(_.z6, { scrollPosition: O }),
                          (0, i.jsx)(_.aV, { icon: r.QuestsIcon }),
                          (0, i.jsx)(E.Z, {
                              tabs: n,
                              selectedTab: v,
                              onTabSelect: L
                          })
                      ]
                  }),
                  (0, i.jsx)(u.Z, {
                      title: N.Z.Messages.QUESTS_HOME_HERO_TITLE,
                      description: N.Z.Messages.QUESTS_HOME_HERO_DESCRIPTION,
                      onScroll: Z,
                      button: (0, i.jsx)(d.u, {
                          text: N.Z.Messages.LEARN_MORE,
                          onClick: x
                      }),
                      bannerClassName: A.bannerContainer,
                      bannerBackground: (0, i.jsx)('div', {
                          className: A.bannerImage,
                          style: b,
                          children: (0, i.jsx)('div', { className: A.bannerGradient })
                      }),
                      children: v === m.e5.CLAIMED ? (0, i.jsx)(T.Z, { onSelectTab: L }) : (0, i.jsx)(p.Z, {})
                  })
              ]
          })
        : null;
};

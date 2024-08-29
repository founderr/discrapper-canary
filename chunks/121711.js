n(47120);
var i = n(735250),
    a = n(470079),
    s = n(990547),
    r = n(481060),
    l = n(410030),
    o = n(213609),
    c = n(252618),
    d = n(979233),
    u = n(175307),
    _ = n(374939),
    E = n(611928),
    h = n(791734),
    m = n(63063),
    I = n(113434),
    g = n(471985),
    p = n(150560),
    T = n(710914),
    f = n(452081),
    S = n(46140),
    C = n(981631),
    N = n(689938),
    A = n(296561);
t.Z = function (e) {
    let {} = e,
        t = (0, g.Z)(S.dr.QUEST_HOME_DESKTOP),
        { tabs: v, selectedTab: L, onSelectTab: Z } = (0, f.z)(),
        { onScroll: O, scrollPosition: R } = (0, d.M)(),
        x = (0, l.ZP)(),
        b = p.Z.getState().getUtmCurrentContext(),
        { quests: P, isFetchingCurrentQuests: M } = (0, I.bA)(L),
        D = null;
    if (window.location.hash.length > 0) {
        let e = window.location.hash.slice(1);
        for (let t of P)
            if (t.id === e) {
                D = e;
                break;
            }
    }
    a.useEffect(() => {
        (0, o.h)({
            name: s.ImpressionNames.QUEST_HOME,
            type: s.ImpressionTypes.VIEW,
            properties: {
                utm_source_current: b.utmSourceCurrent,
                utm_medium_current: b.utmMediumCurrent,
                utm_campaign_current: b.utmCampaignCurrent,
                utm_content_current: b.utmContentCurrent
            }
        });
    }, []);
    let y = a.useCallback(() => {
        window.open(m.Z.getArticleURL(C.BhN.QUESTS_LEARN_MORE));
    }, []);
    (0, c.Tt)({ location: N.Z.Messages.QUESTS });
    let j = a.useMemo(() => ({ backgroundImage: 'url('.concat('https://cdn.discordapp.com/assets/discovery/quests-wumpus-hikes-mountain-transparent-background.png', ')') }), []);
    return t
        ? (0, i.jsxs)('div', {
              className: A.container,
              children: [
                  (0, i.jsxs)(E.ZP, {
                      children: [
                          (0, i.jsx)('div', { className: A.dragRegion }),
                          (0, i.jsx)(E.z6, { scrollPosition: R }),
                          (0, i.jsx)(E.aV, { icon: r.QuestsIcon }),
                          (0, i.jsx)(h.Z, {
                              tabs: v,
                              selectedTab: L,
                              onTabSelect: Z
                          })
                      ]
                  }),
                  (0, i.jsx)(_.Z, {
                      title: N.Z.Messages.QUESTS_HOME_HERO_TITLE,
                      description: N.Z.Messages.QUESTS_HOME_HERO_DESCRIPTION,
                      onScroll: O,
                      button: (0, i.jsx)(u.u, {
                          text: N.Z.Messages.LEARN_MORE,
                          onClick: y
                      }),
                      bannerClassName: A.bannerContainer,
                      bannerBackground: (0, i.jsx)('div', {
                          className: A.bannerImage,
                          style: j,
                          children: (0, i.jsx)('div', { className: A.bannerGradient })
                      }),
                      children:
                          M && 0 === P.length
                              ? (0, i.jsx)(r.Spinner, { className: A.spinner })
                              : 0 === P.length && L === I.e5.CLAIMED
                                ? (0, i.jsxs)(r.EmptyState, {
                                      theme: x,
                                      children: [
                                          (0, i.jsx)(r.EmptyStateImage, {
                                              lightSrc: n(979770),
                                              darkSrc: n(138715),
                                              width: 415,
                                              height: 200
                                          }),
                                          (0, i.jsx)(r.EmptyStateText, { note: N.Z.Messages.QUESTS_CLAIMED_QUEST_EMPTY_STATE.format({ onClick: () => Z(I.e5.ALL) }) })
                                      ]
                                  })
                                : (0, i.jsx)('div', {
                                      className: A.gridContainer,
                                      children: (0, i.jsx)(T.Z, {
                                          quests: P,
                                          selectedQuestId: D
                                      })
                                  })
                  })
              ]
          })
        : null;
};

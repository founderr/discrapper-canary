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
    S = n(906739),
    f = n(452081),
    C = n(46140),
    N = n(981631),
    A = n(689938),
    v = n(296561);
t.Z = function (e) {
    let {} = e,
        t = (0, g.Z)(C.dr.QUEST_HOME_DESKTOP),
        { tabs: Z, selectedTab: L, onSelectTab: O } = (0, f.z)(),
        { onScroll: R, scrollPosition: x } = (0, d.M)(),
        b = (0, l.ZP)(),
        P = p.Z.getState().getUtmCurrentContext(),
        { quests: M, isFetchingCurrentQuests: D } = (0, I.bA)(L),
        y = (0, S.Z)(),
        j = null;
    if (window.location.hash.length > 0) {
        let e = window.location.hash.slice(1);
        for (let t of M)
            if (t.id === e) {
                j = e;
                break;
            }
    }
    a.useEffect(() => {
        (0, o.h)({
            name: s.ImpressionNames.QUEST_HOME,
            type: s.ImpressionTypes.VIEW,
            properties: {
                utm_source_current: P.utmSourceCurrent,
                utm_medium_current: P.utmMediumCurrent,
                utm_campaign_current: P.utmCampaignCurrent,
                utm_content_current: P.utmContentCurrent
            }
        });
    }, []);
    let U = a.useCallback(() => {
        window.open(m.Z.getArticleURL(N.BhN.QUESTS_LEARN_MORE));
    }, []);
    (0, c.Tt)({ location: A.Z.Messages.QUESTS });
    let G = a.useMemo(() => ({ backgroundImage: 'url('.concat(y, ')') }), [y]);
    return t
        ? (0, i.jsxs)('div', {
              className: v.container,
              children: [
                  (0, i.jsxs)(E.ZP, {
                      children: [
                          (0, i.jsx)('div', { className: v.dragRegion }),
                          (0, i.jsx)(E.z6, { scrollPosition: x }),
                          (0, i.jsx)(E.aV, { icon: r.QuestsIcon }),
                          (0, i.jsx)(h.Z, {
                              tabs: Z,
                              selectedTab: L,
                              onTabSelect: O
                          })
                      ]
                  }),
                  (0, i.jsx)(_.Z, {
                      title: A.Z.Messages.QUESTS_HOME_HERO_TITLE,
                      description: A.Z.Messages.QUESTS_HOME_HERO_DESCRIPTION,
                      onScroll: R,
                      button: (0, i.jsx)(u.u, {
                          text: A.Z.Messages.LEARN_MORE,
                          onClick: U
                      }),
                      bannerClassName: v.bannerContainer,
                      bannerBackground: (0, i.jsx)('div', {
                          className: v.bannerImage,
                          style: G,
                          children: (0, i.jsx)('div', { className: v.bannerGradient })
                      }),
                      children:
                          D && 0 === M.length
                              ? (0, i.jsx)(r.Spinner, { className: v.spinner })
                              : 0 === M.length && L === I.e5.CLAIMED
                                ? (0, i.jsxs)(r.EmptyState, {
                                      theme: b,
                                      children: [
                                          (0, i.jsx)(r.EmptyStateImage, {
                                              lightSrc: n(979770),
                                              darkSrc: n(138715),
                                              width: 415,
                                              height: 200
                                          }),
                                          (0, i.jsx)(r.EmptyStateText, { note: A.Z.Messages.QUESTS_CLAIMED_QUEST_EMPTY_STATE.format({ onClick: () => O(I.e5.ALL) }) })
                                      ]
                                  })
                                : (0, i.jsx)('div', {
                                      className: v.gridContainer,
                                      children: (0, i.jsx)(T.Z, {
                                          quests: M,
                                          selectedQuestId: j
                                      })
                                  })
                  })
              ]
          })
        : null;
};

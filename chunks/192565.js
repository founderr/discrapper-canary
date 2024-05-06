"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("442837"),
  i = n("481060"),
  r = n("224706"),
  o = n("931240"),
  u = n("650461"),
  d = n("94963"),
  c = n("745628"),
  f = n("950279"),
  E = n("796918"),
  h = n("513532"),
  _ = n("741595"),
  C = n("974842"),
  m = n("359380"),
  S = n("641037"),
  p = n("308083"),
  I = n("689938"),
  T = n("156610");

function g(e) {
  let {
    guildId: t
  } = e, {
    progress: n,
    errors: g
  } = (0, l.useStateFromStoresObject)([u.default], () => {
    var e;
    let n = u.default.getStateForGuild(t);
    return {
      progress: null !== (e = n.progress) && void 0 !== e ? e : u.DEFAULT_CLAN_PROGRESS,
      errors: n.errors
    }
  }), {
    requiredGameId: A,
    gameApplicationIds: N,
    playstyle: v,
    interests: R,
    description: L,
    tag: O,
    currentStep: M,
    furthestStep: P
  } = n;
  s.useEffect(() => {
    r.default.getDetectableGames()
  }, []);
  let y = s.useCallback(e => o.updateClanSetup(t, e), [t]),
    x = s.useCallback(e => y({
      gameApplicationIds: e
    }), [y]),
    D = s.useCallback(e => y({
      playstyle: e
    }), [y]),
    b = s.useCallback(e => y({
      interests: e
    }), [y]),
    U = s.useMemo(() => (0, S.getClanSetupSteps)(), []);
  return (0, a.jsx)(i.Sequencer, {
    step: M,
    steps: U,
    sideMargin: 24,
    verticalMargin: 24,
    className: T.sequencer,
    innerClassName: T.sequencer,
    animatedNodeClassName: T.sequencer,
    children: (0, a.jsx)(i.ScrollerThin, {
      className: T.scroller,
      fade: !0,
      children: (() => {
        switch (M) {
          case p.ClanSetupSteps.GAMES:
            return (0, a.jsx)(f.default, {
              title: I.default.Messages.CLAN_SETUP_GAMES_TITLE,
              description: I.default.Messages.CLAN_SETUP_GAMES_SUBTITLE,
              handleUpdate: x,
              gameApplicationIds: N,
              requiredGameId: A,
              error: null == g ? void 0 : g.gameApplicationIds
            });
          case p.ClanSetupSteps.PLAYSTYLE:
            return (0, a.jsx)(_.default, {
              title: I.default.Messages.CLAN_SETUP_PLAYSTYLE_TITLE,
              description: I.default.Messages.CLAN_SETUP_PLAYSTYLE_SUBTITLE,
              handleUpdate: D,
              playstyle: v,
              error: null == g ? void 0 : g.playstyle
            });
          case p.ClanSetupSteps.UTILITY_TRAITS:
            return (0, a.jsx)(m.default, {
              title: I.default.Messages.CLAN_SETUP_UTILITY_TRAITS_TITLE,
              description: I.default.Messages.CLAN_SETUP_UTILITY_TRAITS_SUBTITLE,
              requiredGameId: A,
              handleUpdate: b,
              interests: R
            });
          case p.ClanSetupSteps.INTERESTS:
            return (0, a.jsx)(E.default, {
              handleUpdate: y,
              interests: R,
              error: null == g ? void 0 : g.interests
            });
          case p.ClanSetupSteps.DESCRIPTION:
            return (0, a.jsx)(c.default, {
              handleUpdate: y,
              description: L,
              wildcardDescriptors: n.wildcardDescriptors,
              errors: g
            });
          case p.ClanSetupSteps.CUSTOMIZE_TAG_BADGE:
            return (0, a.jsx)(C.default, {
              handleUpdate: y,
              tag: O,
              error: null == g ? void 0 : g.tag,
              badge: n.badgeKind,
              primaryColor: n.badgePrimaryColor,
              secondaryColor: n.badgeSecondaryColor,
              furthestStep: P
            });
          case p.ClanSetupSteps.CUSTOMIZE_BANNER:
            return (0, a.jsx)(d.default, {
              handleUpdate: y,
              progress: n,
              guildId: t
            });
          case p.ClanSetupSteps.MEMBER_APPLICATION:
            return (0, a.jsx)(h.default, {
              guildId: t
            })
        }
      })()
    })
  })
}
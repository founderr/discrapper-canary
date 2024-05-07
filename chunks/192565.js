"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("442837"),
  i = n("481060"),
  r = n("224706"),
  o = n("931240"),
  u = n("650461"),
  d = n("94963"),
  c = n("745628"),
  f = n("950279"),
  h = n("796918"),
  p = n("513532"),
  m = n("741595"),
  C = n("974842"),
  g = n("359380"),
  E = n("641037"),
  S = n("308083"),
  _ = n("689938"),
  I = n("156610");

function N(e) {
  let {
    guildId: t
  } = e, {
    progress: n,
    errors: N
  } = (0, s.useStateFromStoresObject)([u.default], () => {
    var e;
    let n = u.default.getStateForGuild(t);
    return {
      progress: null !== (e = n.progress) && void 0 !== e ? e : u.DEFAULT_CLAN_PROGRESS,
      errors: n.errors
    }
  }), {
    requiredGameId: T,
    gameApplicationIds: A,
    playstyle: L,
    interests: v,
    description: x,
    tag: R,
    currentStep: M,
    furthestStep: y
  } = n;
  a.useEffect(() => {
    r.default.getDetectableGames()
  }, []);
  let O = a.useCallback(e => o.updateClanSetup(t, e), [t]),
    D = a.useCallback(e => O({
      gameApplicationIds: e
    }), [O]),
    b = a.useCallback(e => O({
      playstyle: e
    }), [O]),
    j = a.useCallback(e => O({
      interests: e
    }), [O]),
    P = a.useMemo(() => (0, E.getClanSetupSteps)(), []);
  return (0, l.jsx)(i.Sequencer, {
    step: M,
    steps: P,
    sideMargin: 24,
    verticalMargin: 24,
    className: I.sequencer,
    innerClassName: I.sequencer,
    animatedNodeClassName: I.sequencer,
    children: (0, l.jsx)(i.ScrollerThin, {
      className: I.scroller,
      fade: !0,
      children: (() => {
        switch (M) {
          case S.ClanSetupSteps.GAMES:
            return (0, l.jsx)(f.default, {
              title: _.default.Messages.CLAN_SETUP_GAMES_TITLE,
              description: _.default.Messages.CLAN_SETUP_GAMES_SUBTITLE,
              handleUpdate: D,
              gameApplicationIds: A,
              requiredGameId: T,
              error: null == N ? void 0 : N.gameApplicationIds
            });
          case S.ClanSetupSteps.PLAYSTYLE:
            return (0, l.jsx)(m.default, {
              title: _.default.Messages.CLAN_SETUP_PLAYSTYLE_TITLE,
              description: _.default.Messages.CLAN_SETUP_PLAYSTYLE_SUBTITLE,
              handleUpdate: b,
              playstyle: L,
              error: null == N ? void 0 : N.playstyle
            });
          case S.ClanSetupSteps.UTILITY_TRAITS:
            return (0, l.jsx)(g.default, {
              title: _.default.Messages.CLAN_SETUP_UTILITY_TRAITS_TITLE,
              description: _.default.Messages.CLAN_SETUP_UTILITY_TRAITS_SUBTITLE,
              requiredGameId: T,
              handleUpdate: j,
              interests: v
            });
          case S.ClanSetupSteps.INTERESTS:
            return (0, l.jsx)(h.default, {
              handleUpdate: O,
              interests: v,
              error: null == N ? void 0 : N.interests
            });
          case S.ClanSetupSteps.DESCRIPTION:
            return (0, l.jsx)(c.default, {
              handleUpdate: O,
              description: x,
              wildcardDescriptors: n.wildcardDescriptors,
              errors: N
            });
          case S.ClanSetupSteps.CUSTOMIZE_TAG_BADGE:
            return (0, l.jsx)(C.default, {
              handleUpdate: O,
              tag: R,
              error: null == N ? void 0 : N.tag,
              badge: n.badgeKind,
              primaryColor: n.badgePrimaryColor,
              secondaryColor: n.badgeSecondaryColor,
              furthestStep: y
            });
          case S.ClanSetupSteps.CUSTOMIZE_BANNER:
            return (0, l.jsx)(d.default, {
              handleUpdate: O,
              progress: n,
              guildId: t
            });
          case S.ClanSetupSteps.MEMBER_APPLICATION:
            return (0, l.jsx)(p.default, {
              guildId: t
            })
        }
      })()
    })
  })
}
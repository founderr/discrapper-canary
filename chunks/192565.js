"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("442837"),
  i = n("224706"),
  r = n("931240"),
  o = n("650461"),
  u = n("94963"),
  d = n("745628"),
  c = n("950279"),
  f = n("796918"),
  E = n("513532"),
  h = n("741595"),
  _ = n("974842"),
  C = n("363915"),
  m = n("359380"),
  S = n("308083"),
  p = n("689938");

function g(e) {
  let t = (0, o.useDefaultClanProgress)(),
    {
      progress: n,
      errors: a
    } = (0, l.useStateFromStoresObject)([o.default], () => {
      var n;
      let a = o.default.getStateForGuild(e);
      return {
        progress: null !== (n = a.progress) && void 0 !== n ? n : t,
        errors: a.errors
      }
    });
  return {
    progress: n,
    errors: a,
    handleClanUpdate: s.useCallback(t => r.updateClanSetup(e, t), [e])
  }
}
let I = {
  [S.ClanSetupSteps.GAMES]: function(e) {
    let {
      guildId: t
    } = e;
    s.useEffect(() => {
      i.default.getDetectableGames()
    }, []);
    let {
      progress: n,
      errors: l,
      handleClanUpdate: r
    } = g(t);
    return (0, a.jsx)(c.default, {
      title: p.default.Messages.CLAN_SETUP_GAMES_TITLE,
      description: p.default.Messages.CLAN_SETUP_GAMES_SUBTITLE,
      handleUpdate: e => r({
        gameApplicationIds: e
      }),
      gameApplicationIds: n.gameApplicationIds,
      requiredGameId: n.requiredGameId,
      error: null == l ? void 0 : l.gameApplicationIds
    })
  },
  [S.ClanSetupSteps.PLAYSTYLE]: function(e) {
    let {
      guildId: t
    } = e, {
      progress: n,
      errors: s,
      handleClanUpdate: l
    } = g(t);
    return (0, a.jsx)(h.default, {
      title: p.default.Messages.CLAN_SETUP_PLAYSTYLE_TITLE,
      description: p.default.Messages.CLAN_SETUP_PLAYSTYLE_SUBTITLE,
      handleUpdate: e => l({
        playstyle: e
      }),
      playstyle: n.playstyle,
      error: null == s ? void 0 : s.playstyle
    })
  },
  [S.ClanSetupSteps.UTILITY_TRAITS]: function(e) {
    let {
      guildId: t
    } = e, {
      progress: n,
      handleClanUpdate: s
    } = g(t);
    return (0, a.jsx)(m.default, {
      guildId: t,
      title: p.default.Messages.CLAN_SETUP_UTILITY_TRAITS_TITLE,
      description: p.default.Messages.CLAN_SETUP_UTILITY_TRAITS_SUBTITLE,
      handleUpdate: e => s({
        interests: e
      }),
      requiredGameId: n.requiredGameId,
      progress: n
    })
  },
  [S.ClanSetupSteps.INTERESTS]: function(e) {
    let {
      guildId: t
    } = e, {
      progress: n,
      errors: s,
      handleClanUpdate: l
    } = g(t);
    return (0, a.jsx)(f.default, {
      guildId: t,
      handleUpdate: l,
      progress: n,
      error: null == s ? void 0 : s.interests
    })
  },
  [S.ClanSetupSteps.DESCRIPTION]: function(e) {
    let {
      guildId: t
    } = e, {
      progress: n,
      errors: s,
      handleClanUpdate: l
    } = g(t);
    return (0, a.jsx)(d.default, {
      guildId: t,
      handleUpdate: l,
      progress: n,
      errors: s
    })
  },
  [S.ClanSetupSteps.CUSTOMIZE_TAG_BADGE]: function(e) {
    let {
      guildId: t
    } = e, {
      progress: n,
      errors: s,
      handleClanUpdate: l
    } = g(t);
    return (0, a.jsx)(_.default, {
      handleUpdate: l,
      tag: n.tag,
      error: null == s ? void 0 : s.tag,
      badge: n.badgeKind,
      primaryColor: n.badgePrimaryColor,
      secondaryColor: n.badgeSecondaryColor,
      furthestStep: n.furthestStep
    })
  },
  [S.ClanSetupSteps.CUSTOMIZE_BANNER]: function(e) {
    let {
      guildId: t
    } = e, {
      progress: n,
      handleClanUpdate: s
    } = g(t);
    return (0, a.jsx)(u.default, {
      handleUpdate: s,
      progress: n,
      guildId: t
    })
  },
  [S.ClanSetupSteps.MEMBER_APPLICATION]: function(e) {
    let {
      guildId: t
    } = e;
    return (0, a.jsx)(E.default, {
      guildId: t
    })
  }
};

function T(e) {
  return e.currentStep.toString()
}

function A(e) {
  let t = I[e.currentStep];
  return (0, a.jsx)(t, {
    guildId: e.guildId
  })
}

function N(e) {
  let {
    guildId: t
  } = e, n = (0, o.useDefaultClanProgress)(), i = (0, l.useStateFromStores)([o.default], () => {
    var e, a, s;
    return null !== (s = null === (a = o.default.getStateForGuild(t)) || void 0 === a ? void 0 : null === (e = a.progress) || void 0 === e ? void 0 : e.currentStep) && void 0 !== s ? s : n.currentStep
  }), r = s.useMemo(() => [{
    currentStep: i,
    guildId: t
  }], [i, t]);
  return (0, a.jsx)(C.default, {
    currentStep: i,
    items: r,
    renderItem: A,
    getItemKey: T
  })
}
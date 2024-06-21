n.d(t, {
  Z: function() {
    return f
  }
});
var i = n(735250),
  s = n(470079),
  l = n(442837),
  a = n(224706),
  r = n(931240),
  o = n(650461),
  c = n(94963),
  u = n(745628),
  d = n(950279),
  E = n(796918),
  h = n(513532),
  _ = n(741595),
  I = n(974842),
  m = n(363915),
  g = n(359380),
  p = n(308083),
  N = n(689938);

function T(e) {
  let t = (0, o.Wg)(),
    {
      progress: n,
      errors: i
    } = (0, l.cj)([o.ZP], () => {
      var n;
      let i = o.ZP.getStateForGuild(e);
      return {
        progress: null !== (n = i.progress) && void 0 !== n ? n : t,
        errors: i.errors
      }
    });
  return {
    progress: n,
    errors: i,
    handleClanUpdate: s.useCallback(t => r._9(e, t), [e])
  }
}
let C = {
  [p.Wy.GAMES]: function(e) {
    let {
      guildId: t
    } = e;
    s.useEffect(() => {
      a.Z.getDetectableGames()
    }, []);
    let {
      progress: n,
      errors: l,
      handleClanUpdate: r
    } = T(t);
    return (0, i.jsx)(d.Z, {
      title: N.Z.Messages.CLAN_SETUP_GAMES_TITLE,
      description: N.Z.Messages.CLAN_SETUP_GAMES_SUBTITLE,
      handleUpdate: e => r({
        gameApplicationIds: e
      }),
      gameApplicationIds: n.gameApplicationIds,
      requiredGameId: n.requiredGameId,
      error: null == l ? void 0 : l.gameApplicationIds
    })
  },
  [p.Wy.PLAYSTYLE]: function(e) {
    let {
      guildId: t
    } = e, {
      progress: n,
      errors: s,
      handleClanUpdate: l
    } = T(t);
    return (0, i.jsx)(_.Z, {
      title: N.Z.Messages.CLAN_SETUP_PLAYSTYLE_TITLE,
      description: N.Z.Messages.CLAN_SETUP_PLAYSTYLE_SUBTITLE,
      handleUpdate: e => l({
        playstyle: e
      }),
      playstyle: n.playstyle,
      error: null == s ? void 0 : s.playstyle
    })
  },
  [p.Wy.UTILITY_TRAITS]: function(e) {
    let {
      guildId: t
    } = e, {
      progress: n,
      handleClanUpdate: s
    } = T(t);
    return (0, i.jsx)(g.Z, {
      guildId: t,
      title: N.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_TITLE,
      description: N.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_SUBTITLE,
      handleUpdate: e => s({
        interests: e
      }),
      requiredGameId: n.requiredGameId,
      progress: n
    })
  },
  [p.Wy.INTERESTS]: function(e) {
    let {
      guildId: t
    } = e, {
      progress: n,
      errors: s,
      handleClanUpdate: l
    } = T(t);
    return (0, i.jsx)(E.Z, {
      guildId: t,
      handleUpdate: l,
      progress: n,
      error: null == s ? void 0 : s.interests
    })
  },
  [p.Wy.DESCRIPTION]: function(e) {
    let {
      guildId: t
    } = e, {
      progress: n,
      errors: s,
      handleClanUpdate: l
    } = T(t);
    return (0, i.jsx)(u.Z, {
      guildId: t,
      handleUpdate: l,
      progress: n,
      errors: s
    })
  },
  [p.Wy.CUSTOMIZE_TAG_BADGE]: function(e) {
    let {
      guildId: t
    } = e, {
      progress: n,
      errors: s,
      handleClanUpdate: l
    } = T(t);
    return (0, i.jsx)(I.Z, {
      handleUpdate: l,
      tag: n.tag,
      error: null == s ? void 0 : s.tag,
      badge: n.badgeKind,
      primaryColor: n.badgePrimaryColor,
      secondaryColor: n.badgeSecondaryColor,
      furthestStep: n.furthestStep
    })
  },
  [p.Wy.CUSTOMIZE_BANNER]: function(e) {
    let {
      guildId: t
    } = e, {
      progress: n,
      handleClanUpdate: s
    } = T(t);
    return (0, i.jsx)(c.Z, {
      handleUpdate: s,
      progress: n,
      guildId: t
    })
  },
  [p.Wy.MEMBER_APPLICATION]: function(e) {
    let {
      guildId: t
    } = e, {
      errors: n
    } = T(t);
    return (0, i.jsx)(h.Z, {
      guildId: t,
      error: null == n ? void 0 : n.verificationForm
    })
  }
};

function S(e) {
  return e.currentStep.toString()
}

function A(e) {
  let t = C[e.currentStep];
  return (0, i.jsx)(t, {
    guildId: e.guildId
  })
}

function f(e) {
  let {
    guildId: t
  } = e, n = (0, o.Wg)(), a = (0, l.e7)([o.ZP], () => {
    var e, i, s;
    return null !== (s = null === (i = o.ZP.getStateForGuild(t)) || void 0 === i ? void 0 : null === (e = i.progress) || void 0 === e ? void 0 : e.currentStep) && void 0 !== s ? s : n.currentStep
  }), r = s.useMemo(() => [{
    currentStep: a,
    guildId: t
  }], [a, t]);
  return (0, i.jsx)(m.Z, {
    currentStep: a,
    items: r,
    renderItem: A,
    getItemKey: S
  })
}
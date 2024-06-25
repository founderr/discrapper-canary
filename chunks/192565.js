n.d(t, {
  Z: function() {
    return f
  }
});
var s = n(735250),
  i = n(470079),
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
  T = n(359380),
  g = n(308083),
  p = n(689938);

function N(e) {
  let t = (0, o.Wg)(),
    {
      progress: n,
      errors: s
    } = (0, l.cj)([o.ZP], () => {
      var n;
      let s = o.ZP.getStateForGuild(e);
      return {
        progress: null !== (n = s.progress) && void 0 !== n ? n : t,
        errors: s.errors
      }
    });
  return {
    progress: n,
    errors: s,
    handleClanUpdate: i.useCallback(t => r._9(e, t), [e])
  }
}
let S = {
  [g.Wy.GAMES]: function(e) {
    let {
      guildId: t
    } = e;
    i.useEffect(() => {
      a.Z.getDetectableGames()
    }, []);
    let {
      progress: n,
      errors: l,
      handleClanUpdate: r
    } = N(t);
    return (0, s.jsx)(d.Z, {
      title: p.Z.Messages.CLAN_SETUP_GAMES_TITLE,
      description: p.Z.Messages.CLAN_SETUP_GAMES_SUBTITLE,
      handleUpdate: e => r({
        gameApplicationIds: e
      }),
      gameApplicationIds: n.gameApplicationIds,
      requiredGameId: n.requiredGameId,
      error: null == l ? void 0 : l.gameApplicationIds
    })
  },
  [g.Wy.PLAYSTYLE]: function(e) {
    let {
      guildId: t
    } = e, {
      progress: n,
      errors: i,
      handleClanUpdate: l
    } = N(t);
    return (0, s.jsx)(_.Z, {
      title: p.Z.Messages.CLAN_SETUP_PLAYSTYLE_TITLE,
      description: p.Z.Messages.CLAN_SETUP_PLAYSTYLE_SUBTITLE,
      handleUpdate: e => l({
        playstyle: e
      }),
      playstyle: n.playstyle,
      error: null == i ? void 0 : i.playstyle
    })
  },
  [g.Wy.UTILITY_TRAITS]: function(e) {
    let {
      guildId: t
    } = e, {
      progress: n,
      handleClanUpdate: i
    } = N(t);
    return (0, s.jsx)(T.Z, {
      guildId: t,
      title: p.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_TITLE,
      description: p.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_SUBTITLE,
      handleUpdate: e => i({
        interests: e
      }),
      requiredGameId: n.requiredGameId,
      progress: n
    })
  },
  [g.Wy.INTERESTS]: function(e) {
    let {
      guildId: t
    } = e, {
      progress: n,
      errors: i,
      handleClanUpdate: l
    } = N(t);
    return (0, s.jsx)(E.Z, {
      guildId: t,
      handleUpdate: l,
      progress: n,
      error: null == i ? void 0 : i.interests
    })
  },
  [g.Wy.DESCRIPTION]: function(e) {
    let {
      guildId: t
    } = e, {
      progress: n,
      errors: i,
      handleClanUpdate: l
    } = N(t);
    return (0, s.jsx)(u.Z, {
      guildId: t,
      handleUpdate: l,
      progress: n,
      errors: i
    })
  },
  [g.Wy.CUSTOMIZE_TAG_BADGE]: function(e) {
    let {
      guildId: t
    } = e, {
      progress: n,
      errors: i,
      handleClanUpdate: l
    } = N(t);
    return (0, s.jsx)(I.Z, {
      handleUpdate: l,
      tag: n.tag,
      error: null == i ? void 0 : i.tag,
      badge: n.badgeKind,
      primaryColor: n.badgePrimaryColor,
      secondaryColor: n.badgeSecondaryColor,
      furthestStep: n.furthestStep
    })
  },
  [g.Wy.CUSTOMIZE_BANNER]: function(e) {
    let {
      guildId: t
    } = e, {
      progress: n,
      handleClanUpdate: i
    } = N(t);
    return (0, s.jsx)(c.Z, {
      handleUpdate: i,
      progress: n,
      guildId: t
    })
  },
  [g.Wy.MEMBER_APPLICATION]: function(e) {
    let {
      guildId: t
    } = e, {
      errors: n
    } = N(t);
    return (0, s.jsx)(h.Z, {
      guildId: t,
      error: null == n ? void 0 : n.verificationForm
    })
  }
};

function C(e) {
  return e.currentStep.toString()
}

function A(e) {
  let t = S[e.currentStep];
  return (0, s.jsx)(t, {
    guildId: e.guildId
  })
}

function f(e) {
  let {
    guildId: t
  } = e, n = (0, o.Wg)(), a = (0, l.e7)([o.ZP], () => {
    var e, s, i;
    return null !== (i = null === (s = o.ZP.getStateForGuild(t)) || void 0 === s ? void 0 : null === (e = s.progress) || void 0 === e ? void 0 : e.currentStep) && void 0 !== i ? i : n.currentStep
  }), r = i.useMemo(() => [{
    currentStep: a,
    guildId: t
  }], [a, t]);
  return (0, s.jsx)(m.Z, {
    currentStep: a,
    items: r,
    renderItem: A,
    getItemKey: C
  })
}
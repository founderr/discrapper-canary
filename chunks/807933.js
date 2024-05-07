"use strict";
n.r(t), n.d(t, {
  GameSelector: function() {
    return h
  },
  PlayStyleSelector: function() {
    return E
  },
  TraitSelector: function() {
    return f
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  i = n("143927"),
  l = n("950279"),
  r = n("741595"),
  o = n("359380"),
  u = n("207796"),
  d = n("316553"),
  c = n("689938");

function f() {
  let e = (0, u.useClanDiscoveryUIStore)(e => e.game, i.default),
    t = (0, d.useDiscoveryGameApplicationId)({
      selectedGame: e
    }),
    n = (0, u.useClanDiscoveryUIStore)(e => e.selectedTraits, i.default),
    l = (0, u.useClanDiscoveryUIStore)(e => e.setSelectedTraits, i.default),
    r = s.useMemo(() => new Set(n), [n]),
    f = s.useCallback(e => l(Array.from(e)), [l]);
  return (0, a.jsx)(o.default, {
    title: c.default.Messages.CLAN_DISCOVERY_TRAIT_TITLE,
    description: c.default.Messages.CLAN_DISCOVERY_TRAIT_SUBTITLE,
    handleUpdate: f,
    interests: r,
    requiredGameId: t
  })
}

function E() {
  let e = (0, u.useClanDiscoveryUIStore)(e => e.selectedPlaystyle, i.default),
    t = (0, u.useClanDiscoveryUIStore)(e => e.setSelectedPlaystyle, i.default),
    n = s.useCallback(e => t(e), [t]);
  return (0, a.jsx)(r.default, {
    title: c.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_TITLE,
    description: c.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_SUBTITLE,
    handleUpdate: n,
    playstyle: e
  })
}

function h() {
  let e = (0, u.useClanDiscoveryUIStore)(e => e.game, i.default),
    t = (0, d.useDiscoveryGameApplicationId)({
      selectedGame: e
    }),
    n = (0, u.useClanDiscoveryUIStore)(e => e.selectedGames, i.default),
    r = s.useMemo(() => new Set(n), [n]),
    o = (0, u.useClanDiscoveryUIStore)(e => e.setSelectedGames, i.default),
    [f, E] = s.useState(null),
    h = s.useCallback(e => {
      E(null), o(Array.from(e))
    }, [o]);
  return (0, a.jsx)(l.default, {
    title: c.default.Messages.CLAN_DISCOVERY_GAME_TITLE,
    description: c.default.Messages.CLAN_DISCOVERY_GAME_SUBTITLE,
    requiredGameId: t,
    handleUpdate: h,
    gameApplicationIds: r,
    error: f
  })
}
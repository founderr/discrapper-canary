"use strict";
n.r(t), n.d(t, {
  GameSelector: function() {
    return _
  },
  PlayStyleSelector: function() {
    return h
  },
  TraitSelector: function() {
    return E
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("143927"),
  i = n("950279"),
  r = n("741595"),
  o = n("359380"),
  u = n("480222"),
  d = n("207796"),
  c = n("316553"),
  f = n("689938");

function E() {
  let e = (0, d.useClanDiscoveryUIStore)(e => e.game, l.default),
    t = (0, c.useDiscoveryGameApplicationId)({
      selectedGame: e
    }),
    [n, i] = s.useState(new Set(d.useClanDiscoveryUIStore.getState().selectedTraits)),
    r = s.useCallback(() => {
      d.useClanDiscoveryUIStore.getState().setSelectedTraits(Array.from(n))
    }, [n]);
  return (0, a.jsx)(u.default, {
    onClose: r,
    children: (0, a.jsx)(o.default, {
      title: f.default.Messages.CLAN_DISCOVERY_TRAIT_TITLE,
      description: f.default.Messages.CLAN_DISCOVERY_TRAIT_SUBTITLE,
      handleUpdate: i,
      interests: n,
      requiredGameId: t,
      hidePreview: !0
    })
  })
}

function h() {
  let [e, t] = s.useState(d.useClanDiscoveryUIStore.getState().selectedPlaystyle), n = s.useCallback(() => {
    null != e && d.useClanDiscoveryUIStore.getState().setSelectedPlaystyle(e)
  }, [e]);
  return (0, a.jsx)(u.default, {
    onClose: n,
    children: (0, a.jsx)(r.default, {
      title: f.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_TITLE,
      description: f.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_SUBTITLE,
      handleUpdate: t,
      playstyle: e
    })
  })
}

function _() {
  let e = (0, d.useClanDiscoveryUIStore)(e => e.game, l.default),
    t = (0, c.useDiscoveryGameApplicationId)({
      selectedGame: e
    }),
    [n, r] = s.useState(new Set(d.useClanDiscoveryUIStore.getState().selectedGames)),
    o = s.useCallback(() => {
      d.useClanDiscoveryUIStore.getState().setSelectedGames(Array.from(n))
    }, [n]);
  return (0, a.jsx)(u.default, {
    onClose: o,
    children: (0, a.jsx)(i.default, {
      title: f.default.Messages.CLAN_DISCOVERY_GAME_TITLE,
      description: f.default.Messages.CLAN_DISCOVERY_GAME_SUBTITLE,
      requiredGameId: t,
      handleUpdate: r,
      gameApplicationIds: n
    })
  })
}
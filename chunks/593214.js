t.d(n, {
  Mt: function() {
    return x
  },
  li: function() {
    return f
  },
  s4: function() {
    return m
  },
  up: function() {
    return g
  },
  zv: function() {
    return v
  }
}), t(47120), t(653041);
var l = t(470079),
  r = t(106351),
  i = t(442837);
t(592125);
var o = t(984933),
  a = t(914010),
  s = t(594174);
t(709054);
var d = t(853856),
  u = t(362658),
  c = t(434065),
  h = t(981631);

function f(e) {
  let {
    favoritesEnabled: n,
    hasStaffPrivileges: t
  } = (0, u.z)("useCanFavoriteChannel"), l = (0, i.e7)([d.Z], () => d.Z.isFavorite(e.id)), r = (0, i.e7)([s.default], () => s.default.getCurrentUser()), o = !(e.isDM() || e.isThread()) || t && (null == r ? void 0 : r.isStaff()) === !0;
  return n && !__OVERLAY__ && !l && o
}

function m(e) {
  return (0, i.e7)([d.Z], () => d.Z.getFavorite(e))
}

function v() {
  return (0, i.e7)([o.ZP], () => o.ZP.getChannels(h.I_8))[r.d.GUILD_CATEGORY].map(e => ({
    id: "null" === e.channel.id ? null : e.channel.id,
    name: e.channel.name
  }))
}

function x() {
  return (0, i.e7)([a.Z], () => a.Z.getGuildId()) === h.I_8
}

function g() {
  let {
    isFavoritesPerk: e
  } = (0, u.z)("useFavoriteAdded"), n = (0, c.r)(), t = l.useCallback(() => {
    e && n.notifyFavoriteAdded()
  }, [n, e]), r = l.useCallback(() => {
    e && n.clearFavoriteAdded()
  }, [n, e]);
  return {
    favoriteAdded: n.favoriteAdded,
    notifyFavoriteAdded: t,
    clearFavoriteAdded: r
  }
}
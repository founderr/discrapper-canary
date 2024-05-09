"use strict";
n.r(t), n.d(t, {
  useCanFavoriteChannel: function() {
    return f
  },
  useFavorite: function() {
    return T
  },
  useFavoriteAdded: function() {
    return _
  },
  useFavoritesCategories: function() {
    return S
  },
  useFavoritesGuildSelected: function() {
    return I
  }
}), n("47120"), n("653041");
var r = n("470079"),
  a = n("106351"),
  i = n("442837");
n("592125");
var s = n("984933"),
  o = n("914010"),
  u = n("594174");
n("709054");
var l = n("853856"),
  d = n("362658"),
  E = n("434065"),
  c = n("981631");

function f(e) {
  let {
    favoritesEnabled: t,
    hasStaffPrivileges: n
  } = (0, d.useFavoritesServerExperiment)("useCanFavoriteChannel"), r = (0, i.useStateFromStores)([l.default], () => l.default.isFavorite(e.id)), a = (0, i.useStateFromStores)([u.default], () => u.default.getCurrentUser()), s = !(e.isDM() || e.isThread()) || n && (null == a ? void 0 : a.isStaff()) === !0;
  return t && !__OVERLAY__ && !r && s
}

function T(e) {
  return (0, i.useStateFromStores)([l.default], () => l.default.getFavorite(e))
}

function S() {
  return (0, i.useStateFromStores)([s.default], () => s.default.getChannels(c.FAVORITES))[a.ChannelTypes.GUILD_CATEGORY].map(e => ({
    id: "null" === e.channel.id ? null : e.channel.id,
    name: e.channel.name
  }))
}

function I() {
  return (0, i.useStateFromStores)([o.default], () => o.default.getGuildId()) === c.FAVORITES
}

function _() {
  let {
    isFavoritesPerk: e
  } = (0, d.useFavoritesServerExperiment)("useFavoriteAdded"), t = (0, E.useFavoritesTooltipStore)(), n = r.useCallback(() => {
    e && t.notifyFavoriteAdded()
  }, [t, e]), a = r.useCallback(() => {
    e && t.clearFavoriteAdded()
  }, [t, e]);
  return {
    favoriteAdded: t.favoriteAdded,
    notifyFavoriteAdded: n,
    clearFavoriteAdded: a
  }
}
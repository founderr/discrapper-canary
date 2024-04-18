"use strict";
n.r(t), n.d(t, {
  useCanFavoriteChannel: function() {
    return T
  },
  useFavorite: function() {
    return f
  },
  useFavoriteAdded: function() {
    return _
  },
  useFavoritesCategories: function() {
    return I
  },
  useFavoritesGuildSelected: function() {
    return p
  }
}), n("47120"), n("653041");
var a = n("470079"),
  i = n("106351"),
  r = n("442837");
n("592125");
var s = n("984933"),
  o = n("914010"),
  u = n("594174");
n("709054");
var l = n("853856"),
  d = n("362658"),
  c = n("434065"),
  E = n("981631");

function T(e) {
  let {
    favoritesEnabled: t,
    hasStaffPrivileges: n
  } = (0, d.useFavoritesServerExperiment)("useCanFavoriteChannel"), a = (0, r.useStateFromStores)([l.default], () => l.default.isFavorite(e.id)), i = (0, r.useStateFromStores)([u.default], () => u.default.getCurrentUser()), s = !(e.isDM() || e.isThread()) || n && (null == i ? void 0 : i.isStaff()) === !0;
  return t && !__OVERLAY__ && !a && s
}

function f(e) {
  return (0, r.useStateFromStores)([l.default], () => l.default.getFavorite(e))
}

function I() {
  return (0, r.useStateFromStores)([s.default], () => s.default.getChannels(E.FAVORITES))[i.ChannelTypes.GUILD_CATEGORY].map(e => ({
    id: "null" === e.channel.id ? null : e.channel.id,
    name: e.channel.name
  }))
}

function p() {
  return (0, r.useStateFromStores)([o.default], () => o.default.getGuildId()) === E.FAVORITES
}

function _() {
  let {
    isFavoritesPerk: e
  } = (0, d.useFavoritesServerExperiment)("useFavoriteAdded"), t = (0, c.useFavoritesTooltipStore)(), n = a.useCallback(() => {
    e && t.notifyFavoriteAdded()
  }, [t, e]), i = a.useCallback(() => {
    e && t.clearFavoriteAdded()
  }, [t, e]);
  return {
    favoriteAdded: t.favoriteAdded,
    notifyFavoriteAdded: n,
    clearFavoriteAdded: i
  }
}
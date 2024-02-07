"use strict";
n.r(t), n.d(t, {
  useCanFavoriteChannel: function() {
    return E
  },
  useFavorite: function() {
    return h
  },
  useFavoritesCategories: function() {
    return C
  },
  useFavoritesGuildSelected: function() {
    return p
  },
  useFavoriteAdded: function() {
    return _
  }
}), n("424973"), n("222007");
var i = n("884691"),
  a = n("298386"),
  l = n("446674");
n("42203");
var r = n("923959"),
  s = n("162771"),
  u = n("697218"),
  o = n("379881"),
  d = n("498139"),
  c = n("136569"),
  f = n("49111");

function E(e) {
  let {
    favoritesEnabled: t,
    hasStaffPrivileges: n
  } = (0, d.useFavoritesServerExperiment)("useCanFavoriteChannel"), i = (0, l.useStateFromStores)([o.default], () => o.default.isFavorite(e.id)), a = (0, l.useStateFromStores)([u.default], () => u.default.getCurrentUser()), r = e.isDM() || e.isThread(), s = !r || n && (null == a ? void 0 : a.isStaff()) === !0;
  return t && !__OVERLAY__ && !i && s
}

function h(e) {
  let t = (0, l.useStateFromStores)([o.default], () => o.default.getFavorite(e));
  return t
}

function C() {
  let e = (0, l.useStateFromStores)([r.default], () => r.default.getChannels(f.FAVORITES))[a.ChannelTypes.GUILD_CATEGORY];
  return e.map(e => ({
    id: "null" === e.channel.id ? null : e.channel.id,
    name: e.channel.name
  }))
}

function p() {
  let e = (0, l.useStateFromStores)([s.default], () => s.default.getGuildId());
  return e === f.FAVORITES
}

function _() {
  let {
    isFavoritesPerk: e
  } = (0, d.useFavoritesServerExperiment)("useFavoriteAdded"), t = (0, c.useFavoritesTooltipStore)(), n = i.useCallback(() => {
    e && t.notifyFavoriteAdded()
  }, [t, e]), a = i.useCallback(() => {
    e && t.clearFavoriteAdded()
  }, [t, e]);
  return {
    favoriteAdded: t.favoriteAdded,
    notifyFavoriteAdded: n,
    clearFavoriteAdded: a
  }
}
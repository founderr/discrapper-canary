"use strict";
n.r(t), n.d(t, {
  useCanFavoriteChannel: function() {
    return E
  },
  useFavorite: function() {
    return _
  },
  useFavoritesCategories: function() {
    return S
  },
  useFavoritesGuildSelected: function() {
    return N
  },
  useFavoriteAdded: function() {
    return C
  }
}), n("222007"), n("424973");
var a = n("884691"),
  i = n("298386"),
  l = n("446674");
n("42203");
var u = n("923959"),
  r = n("162771"),
  s = n("697218");
n("299039");
var o = n("379881"),
  d = n("498139"),
  c = n("136569"),
  f = n("49111");

function E(e) {
  let {
    favoritesEnabled: t,
    hasStaffPrivileges: n
  } = (0, d.useFavoritesServerExperiment)("useCanFavoriteChannel"), a = (0, l.useStateFromStores)([o.default], () => o.default.isFavorite(e.id)), i = (0, l.useStateFromStores)([s.default], () => s.default.getCurrentUser()), u = e.isDM() || e.isThread(), r = !u || n && (null == i ? void 0 : i.isStaff()) === !0;
  return t && !__OVERLAY__ && !a && r
}

function _(e) {
  let t = (0, l.useStateFromStores)([o.default], () => o.default.getFavorite(e));
  return t
}

function S() {
  let e = (0, l.useStateFromStores)([u.default], () => u.default.getChannels(f.FAVORITES))[i.ChannelTypes.GUILD_CATEGORY];
  return e.map(e => ({
    id: "null" === e.channel.id ? null : e.channel.id,
    name: e.channel.name
  }))
}

function N() {
  let e = (0, l.useStateFromStores)([r.default], () => r.default.getGuildId());
  return e === f.FAVORITES
}

function C() {
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
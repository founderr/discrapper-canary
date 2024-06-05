"use strict";
n.r(t), n.d(t, {
  addFavoriteCategory: function() {
    return c
  },
  addFavoriteChannel: function() {
    return _
  },
  removeFavoriteCategory: function() {
    return f
  },
  removeFavoriteChannel: function() {
    return S
  },
  setFavoriteChannelNickname: function() {
    return T
  },
  toggleFavoriteServerMuted: function() {
    return A
  },
  updateFavoriteChannelParent: function() {
    return N
  },
  updateFavoriteChannels: function() {
    return I
  }
}), n("47120");
var a = n("524437"),
  s = n("675478"),
  r = n("592125"),
  i = n("496675"),
  u = n("709054"),
  l = n("853856"),
  o = n("231338");

function d() {
  let e = l.default.getFavoriteChannels(),
    t = 1;
  for (let n in e) t = Math.max(t, e[n].order);
  return t + 1
}

function E(e) {
  for (let t in e) {
    let n = e[t];
    if (null == n) {
      delete e[t];
      continue
    }
    if (n.type === a.FavoriteChannelType.CATEGORY) continue;
    let s = r.default.getChannel(t);
    if (null == s || !s.isPrivate() && !i.default.can(o.Permissions.VIEW_CHANNEL, s)) {
      delete e[t];
      continue
    }
  }
}

function _(e, t) {
  !l.default.isFavorite(e) && s.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
    n.favoriteChannels[e] = a.FavoriteChannel.create({
      nickname: "",
      type: a.FavoriteChannelType.REFERENCE_ORIGINAL,
      position: d(),
      parentId: null != t ? t : "0"
    }), E(n.favoriteChannels)
  }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
}

function S(e) {
  let t = l.default.getFavorite(e);
  null != t && s.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
    if (delete n.favoriteChannels[e], t.type === a.FavoriteChannelType.CATEGORY)
      for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
    E(n.favoriteChannels)
  }, s.UserSettingsDelay.INFREQUENT_USER_ACTION)
}

function T(e, t) {
  l.default.isFavorite(e) && s.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
    n.favoriteChannels[e].nickname = null != t ? t : ""
  }, s.UserSettingsDelay.INFREQUENT_USER_ACTION)
}

function c(e) {
  let t = u.default.fromTimestamp(Date.now());
  s.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
    n.favoriteChannels[t] = a.FavoriteChannel.create({
      nickname: e,
      type: a.FavoriteChannelType.CATEGORY,
      position: d(),
      parentId: "0"
    })
  }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
}

function f(e) {
  S(e)
}

function I(e) {
  s.PreloadedUserSettingsActionCreators.updateAsync("favorites", t => {
    for (let a of e)
      if (null != a.position && (t.favoriteChannels[a.id].position = a.position), void 0 !== a.parent_id) {
        var n;
        t.favoriteChannels[a.id].parentId = null !== (n = a.parent_id) && void 0 !== n ? n : "0"
      }
  }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
}

function N(e, t) {
  s.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
    n.favoriteChannels[e].parentId = null != t ? t : "0"
  }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
}

function A() {
  s.PreloadedUserSettingsActionCreators.updateAsync("favorites", e => {
    e.muted = !e.muted
  }, s.UserSettingsDelay.INFREQUENT_USER_ACTION)
}
"use strict";
n.r(t), n.d(t, {
  addFavoriteCategory: function() {
    return _
  },
  addFavoriteChannel: function() {
    return c
  },
  removeFavoriteCategory: function() {
    return S
  },
  removeFavoriteChannel: function() {
    return T
  },
  setFavoriteChannelNickname: function() {
    return f
  },
  toggleFavoriteServerMuted: function() {
    return p
  },
  updateFavoriteChannelParent: function() {
    return N
  },
  updateFavoriteChannels: function() {
    return I
  }
}), n("47120");
var a = n("524437"),
  r = n("675478"),
  i = n("592125"),
  s = n("496675"),
  u = n("709054"),
  o = n("853856"),
  l = n("231338");

function d() {
  let e = o.default.getFavoriteChannels(),
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
    let r = i.default.getChannel(t);
    if (null == r || !r.isPrivate() && !s.default.can(l.Permissions.VIEW_CHANNEL, r)) {
      delete e[t];
      continue
    }
  }
}

function c(e, t) {
  !o.default.isFavorite(e) && r.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
    n.favoriteChannels[e] = a.FavoriteChannel.create({
      nickname: "",
      type: a.FavoriteChannelType.REFERENCE_ORIGINAL,
      position: d(),
      parentId: null != t ? t : "0"
    }), E(n.favoriteChannels)
  }, r.UserSettingsDelay.FREQUENT_USER_ACTION)
}

function T(e) {
  let t = o.default.getFavorite(e);
  null != t && r.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
    if (delete n.favoriteChannels[e], t.type === a.FavoriteChannelType.CATEGORY)
      for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
    E(n.favoriteChannels)
  }, r.UserSettingsDelay.INFREQUENT_USER_ACTION)
}

function f(e, t) {
  o.default.isFavorite(e) && r.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
    n.favoriteChannels[e].nickname = null != t ? t : ""
  }, r.UserSettingsDelay.INFREQUENT_USER_ACTION)
}

function _(e) {
  let t = u.default.fromTimestamp(Date.now());
  r.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
    n.favoriteChannels[t] = a.FavoriteChannel.create({
      nickname: e,
      type: a.FavoriteChannelType.CATEGORY,
      position: d(),
      parentId: "0"
    })
  }, r.UserSettingsDelay.FREQUENT_USER_ACTION)
}

function S(e) {
  T(e)
}

function I(e) {
  r.PreloadedUserSettingsActionCreators.updateAsync("favorites", t => {
    for (let a of e)
      if (null != a.position && (t.favoriteChannels[a.id].position = a.position), void 0 !== a.parent_id) {
        var n;
        t.favoriteChannels[a.id].parentId = null !== (n = a.parent_id) && void 0 !== n ? n : "0"
      }
  }, r.UserSettingsDelay.FREQUENT_USER_ACTION)
}

function N(e, t) {
  r.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
    n.favoriteChannels[e].parentId = null != t ? t : "0"
  }, r.UserSettingsDelay.FREQUENT_USER_ACTION)
}

function p() {
  r.PreloadedUserSettingsActionCreators.updateAsync("favorites", e => {
    e.muted = !e.muted
  }, r.UserSettingsDelay.INFREQUENT_USER_ACTION)
}
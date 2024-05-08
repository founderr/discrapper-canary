"use strict";
n.r(t), n.d(t, {
  addFavoriteCategory: function() {
    return f
  },
  addFavoriteChannel: function() {
    return c
  },
  removeFavoriteCategory: function() {
    return I
  },
  removeFavoriteChannel: function() {
    return T
  },
  setFavoriteChannelNickname: function() {
    return S
  },
  toggleFavoriteServerMuted: function() {
    return p
  },
  updateFavoriteChannelParent: function() {
    return N
  },
  updateFavoriteChannels: function() {
    return _
  }
}), n("47120");
var r = n("524437"),
  a = n("675478"),
  i = n("592125"),
  s = n("496675"),
  o = n("709054"),
  u = n("853856"),
  l = n("231338");

function d() {
  let e = u.default.getFavoriteChannels(),
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
    if (n.type === r.FavoriteChannelType.CATEGORY) continue;
    let a = i.default.getChannel(t);
    if (null == a || !a.isPrivate() && !s.default.can(l.Permissions.VIEW_CHANNEL, a)) {
      delete e[t];
      continue
    }
  }
}

function c(e, t) {
  !u.default.isFavorite(e) && a.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
    n.favoriteChannels[e] = r.FavoriteChannel.create({
      nickname: "",
      type: r.FavoriteChannelType.REFERENCE_ORIGINAL,
      position: d(),
      parentId: null != t ? t : "0"
    }), E(n.favoriteChannels)
  }, a.UserSettingsDelay.FREQUENT_USER_ACTION)
}

function T(e) {
  let t = u.default.getFavorite(e);
  null != t && a.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
    if (delete n.favoriteChannels[e], t.type === r.FavoriteChannelType.CATEGORY)
      for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
    E(n.favoriteChannels)
  }, a.UserSettingsDelay.INFREQUENT_USER_ACTION)
}

function S(e, t) {
  u.default.isFavorite(e) && a.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
    n.favoriteChannels[e].nickname = null != t ? t : ""
  }, a.UserSettingsDelay.INFREQUENT_USER_ACTION)
}

function f(e) {
  let t = o.default.fromTimestamp(Date.now());
  a.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
    n.favoriteChannels[t] = r.FavoriteChannel.create({
      nickname: e,
      type: r.FavoriteChannelType.CATEGORY,
      position: d(),
      parentId: "0"
    })
  }, a.UserSettingsDelay.FREQUENT_USER_ACTION)
}

function I(e) {
  T(e)
}

function _(e) {
  a.PreloadedUserSettingsActionCreators.updateAsync("favorites", t => {
    for (let r of e)
      if (null != r.position && (t.favoriteChannels[r.id].position = r.position), void 0 !== r.parent_id) {
        var n;
        t.favoriteChannels[r.id].parentId = null !== (n = r.parent_id) && void 0 !== n ? n : "0"
      }
  }, a.UserSettingsDelay.FREQUENT_USER_ACTION)
}

function N(e, t) {
  a.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
    n.favoriteChannels[e].parentId = null != t ? t : "0"
  }, a.UserSettingsDelay.FREQUENT_USER_ACTION)
}

function p() {
  a.PreloadedUserSettingsActionCreators.updateAsync("favorites", e => {
    e.muted = !e.muted
  }, a.UserSettingsDelay.INFREQUENT_USER_ACTION)
}
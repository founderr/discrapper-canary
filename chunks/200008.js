"use strict";
n.r(t), n.d(t, {
  addFavoriteChannel: function() {
    return f
  },
  removeFavoriteChannel: function() {
    return C
  },
  setFavoriteChannelNickname: function() {
    return v
  },
  addFavoriteCategory: function() {
    return h
  },
  removeFavoriteCategory: function() {
    return p
  },
  updateFavoriteChannels: function() {
    return E
  },
  updateFavoriteChannelParent: function() {
    return A
  },
  toggleFavoriteServerMuted: function() {
    return g
  }
}), n("222007");
var r = n("151426"),
  a = n("872173"),
  i = n("42203"),
  o = n("957255"),
  u = n("299039"),
  s = n("379881"),
  l = n("843455");

function c() {
  let e = s.default.getFavoriteChannels(),
    t = 1;
  for (let n in e) t = Math.max(t, e[n].order);
  return t + 1
}

function d(e) {
  for (let t in e) {
    let n = e[t];
    if (null == n) {
      delete e[t];
      continue
    }
    if (n.type === r.FavoriteChannelType.CATEGORY) continue;
    let a = i.default.getChannel(t);
    if (null == a || !a.isPrivate() && !o.default.can(l.Permissions.VIEW_CHANNEL, a)) {
      delete e[t];
      continue
    }
  }
}

function f(e, t) {
  let n = s.default.isFavorite(e);
  !n && a.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
    n.favoriteChannels[e] = r.FavoriteChannel.create({
      nickname: "",
      type: r.FavoriteChannelType.REFERENCE_ORIGINAL,
      position: c(),
      parentId: null != t ? t : "0"
    }), d(n.favoriteChannels)
  }, a.UserSettingsDelay.FREQUENT_USER_ACTION)
}

function C(e) {
  let t = s.default.getFavorite(e);
  null != t && a.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
    if (delete n.favoriteChannels[e], t.type === r.FavoriteChannelType.CATEGORY)
      for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
    d(n.favoriteChannels)
  }, a.UserSettingsDelay.INFREQUENT_USER_ACTION)
}

function v(e, t) {
  let n = s.default.isFavorite(e);
  n && a.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
    n.favoriteChannels[e].nickname = null != t ? t : ""
  }, a.UserSettingsDelay.INFREQUENT_USER_ACTION)
}

function h(e) {
  let t = u.default.fromTimestamp(Date.now());
  a.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
    n.favoriteChannels[t] = r.FavoriteChannel.create({
      nickname: e,
      type: r.FavoriteChannelType.CATEGORY,
      position: c(),
      parentId: "0"
    })
  }, a.UserSettingsDelay.FREQUENT_USER_ACTION)
}

function p(e) {
  C(e)
}

function E(e) {
  a.PreloadedUserSettingsActionCreators.updateAsync("favorites", t => {
    for (let r of e)
      if (null != r.position && (t.favoriteChannels[r.id].position = r.position), void 0 !== r.parent_id) {
        var n;
        t.favoriteChannels[r.id].parentId = null !== (n = r.parent_id) && void 0 !== n ? n : "0"
      }
  }, a.UserSettingsDelay.FREQUENT_USER_ACTION)
}

function A(e, t) {
  a.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
    n.favoriteChannels[e].parentId = null != t ? t : "0"
  }, a.UserSettingsDelay.FREQUENT_USER_ACTION)
}

function g() {
  a.PreloadedUserSettingsActionCreators.updateAsync("favorites", e => {
    e.muted = !e.muted
  }, a.UserSettingsDelay.INFREQUENT_USER_ACTION)
}
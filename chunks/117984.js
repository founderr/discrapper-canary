"use strict";
n.r(t), n.d(t, {
  addFavoriteCategory: function() {
    return I
  },
  addFavoriteChannel: function() {
    return E
  },
  removeFavoriteCategory: function() {
    return p
  },
  removeFavoriteChannel: function() {
    return T
  },
  setFavoriteChannelNickname: function() {
    return f
  },
  toggleFavoriteServerMuted: function() {
    return S
  },
  updateFavoriteChannelParent: function() {
    return N
  },
  updateFavoriteChannels: function() {
    return _
  }
}), n("47120");
var a = n("524437"),
  i = n("675478"),
  r = n("592125"),
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

function c(e) {
  for (let t in e) {
    let n = e[t];
    if (null == n) {
      delete e[t];
      continue
    }
    if (n.type === a.FavoriteChannelType.CATEGORY) continue;
    let i = r.default.getChannel(t);
    if (null == i || !i.isPrivate() && !s.default.can(l.Permissions.VIEW_CHANNEL, i)) {
      delete e[t];
      continue
    }
  }
}

function E(e, t) {
  !u.default.isFavorite(e) && i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
    n.favoriteChannels[e] = a.FavoriteChannel.create({
      nickname: "",
      type: a.FavoriteChannelType.REFERENCE_ORIGINAL,
      position: d(),
      parentId: null != t ? t : "0"
    }), c(n.favoriteChannels)
  }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
}

function T(e) {
  let t = u.default.getFavorite(e);
  null != t && i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
    if (delete n.favoriteChannels[e], t.type === a.FavoriteChannelType.CATEGORY)
      for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
    c(n.favoriteChannels)
  }, i.UserSettingsDelay.INFREQUENT_USER_ACTION)
}

function f(e, t) {
  u.default.isFavorite(e) && i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
    n.favoriteChannels[e].nickname = null != t ? t : ""
  }, i.UserSettingsDelay.INFREQUENT_USER_ACTION)
}

function I(e) {
  let t = o.default.fromTimestamp(Date.now());
  i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
    n.favoriteChannels[t] = a.FavoriteChannel.create({
      nickname: e,
      type: a.FavoriteChannelType.CATEGORY,
      position: d(),
      parentId: "0"
    })
  }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
}

function p(e) {
  T(e)
}

function _(e) {
  i.PreloadedUserSettingsActionCreators.updateAsync("favorites", t => {
    for (let a of e)
      if (null != a.position && (t.favoriteChannels[a.id].position = a.position), void 0 !== a.parent_id) {
        var n;
        t.favoriteChannels[a.id].parentId = null !== (n = a.parent_id) && void 0 !== n ? n : "0"
      }
  }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
}

function N(e, t) {
  i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
    n.favoriteChannels[e].parentId = null != t ? t : "0"
  }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
}

function S() {
  i.PreloadedUserSettingsActionCreators.updateAsync("favorites", e => {
    e.muted = !e.muted
  }, i.UserSettingsDelay.INFREQUENT_USER_ACTION)
}
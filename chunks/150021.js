"use strict";
i.r(t), i.d(t, {
  setDiversityColor: function() {
    return I
  },
  fetchEmoji: function() {
    return y
  },
  uploadEmoji: function() {
    return T
  },
  deleteEmoji: function() {
    return k
  },
  updateEmoji: function() {
    return C
  },
  favoriteEmoji: function() {
    return M
  },
  unfavoriteEmoji: function() {
    return v
  }
}), i("424973");
var r = i("917351"),
  n = i.n(r),
  a = i("872717"),
  s = i("750028"),
  u = i("913144"),
  o = i("599417"),
  c = i("385976"),
  l = i("867805"),
  d = i("619443"),
  E = i("872173"),
  _ = i("341542"),
  f = i("404118"),
  S = i("49111"),
  p = i("397336"),
  m = i("782340");

function I(e) {
  E.PreloadedUserSettingsActionCreators.updateAsync("textAndImages", t => {
    t.diversitySurrogate = s.StringValue.create(), t.diversitySurrogate.value = e
  }, p.UserSettingsDelay.FREQUENT_USER_ACTION)
}

function y(e) {
  u.default.dispatch({
    type: "EMOJI_FETCH",
    guildId: e
  }), a.default.get({
    url: S.Endpoints.GUILD_EMOJIS(e),
    oldFormErrors: !0
  }).then(t => u.default.dispatch({
    type: "EMOJI_FETCH_SUCCESS",
    guildId: e,
    emojis: t.body
  }), () => u.default.dispatch({
    type: "EMOJI_FETCH_FAILURE",
    guildId: e
  }))
}

function T(e) {
  let {
    guildId: t,
    image: i,
    name: r,
    roles: n
  } = e;
  return u.default.dispatch({
    type: "EMOJI_UPLOAD_START",
    guildId: t
  }), a.default.post({
    url: S.Endpoints.GUILD_EMOJIS(t),
    body: {
      image: i,
      name: r,
      roles: n
    },
    oldFormErrors: !0
  }).then(() => u.default.dispatch({
    type: "EMOJI_UPLOAD_STOP",
    guildId: t
  }), e => (u.default.dispatch({
    type: "EMOJI_UPLOAD_STOP",
    guildId: t
  }), Promise.reject(e)))
}

function k(e, t) {
  return u.default.dispatch({
    type: "EMOJI_DELETE",
    guildId: e,
    emojiId: t
  }), a.default.delete({
    url: S.Endpoints.GUILD_EMOJI(e, t),
    oldFormErrors: !0
  })
}
async function C(e) {
  let {
    guildId: t,
    emojiId: i,
    name: r,
    roles: n
  } = e;
  try {
    return await a.default.patch({
      url: S.Endpoints.GUILD_EMOJI(t, i),
      body: {
        name: r,
        roles: n
      },
      oldFormErrors: !0
    })
  } catch (e) {
    throw new o.default(e)
  }
}

function A(e) {
  return _.default.totalUnavailableGuilds > 0 || !d.default.isConnected() ? e : e.filter(e => {
    var t;
    let i = null !== (t = c.default.getCustomEmojiById(e)) && void 0 !== t ? t : l.default.getByName(e);
    return null != i
  })
}

function M(e) {
  var t;
  (function(e) {
    null != e && E.FrecencyUserSettingsActionCreators.updateAsync("favoriteEmojis", t => (t.emojis = A(t.emojis), n.size(t.emojis) >= p.MAX_FAVORITES) ? (f.default.show({
      title: m.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
      body: m.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
        count: p.MAX_FAVORITES
      })
    }), !1) : !t.emojis.includes(e) && void t.emojis.push(e), p.UserSettingsDelay.INFREQUENT_USER_ACTION)
  })(null !== (t = e.id) && void 0 !== t ? t : e.name)
}

function v(e) {
  var t;
  (function(e) {
    null != e && E.FrecencyUserSettingsActionCreators.updateAsync("favoriteEmojis", t => {
      if (!t.emojis.includes(e)) return !1;
      t.emojis = t.emojis.filter(t => e !== t), t.emojis = A(t.emojis)
    }, p.UserSettingsDelay.INFREQUENT_USER_ACTION)
  })(null !== (t = e.id) && void 0 !== t ? t : e.name)
}
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
    return v
  },
  favoriteEmoji: function() {
    return A
  },
  unfavoriteEmoji: function() {
    return M
  }
}), i("424973");
var n = i("917351"),
  r = i.n(n),
  a = i("872717"),
  s = i("750028"),
  o = i("913144"),
  u = i("599417"),
  c = i("385976"),
  l = i("867805"),
  d = i("619443"),
  E = i("872173"),
  f = i("341542"),
  _ = i("404118"),
  p = i("49111"),
  S = i("397336"),
  m = i("782340");

function I(e) {
  E.PreloadedUserSettingsActionCreators.updateAsync("textAndImages", t => {
    t.diversitySurrogate = s.StringValue.create(), t.diversitySurrogate.value = e
  }, S.UserSettingsDelay.FREQUENT_USER_ACTION)
}

function y(e) {
  o.default.dispatch({
    type: "EMOJI_FETCH",
    guildId: e
  }), a.default.get({
    url: p.Endpoints.GUILD_EMOJIS(e),
    oldFormErrors: !0
  }).then(t => o.default.dispatch({
    type: "EMOJI_FETCH_SUCCESS",
    guildId: e,
    emojis: t.body
  }), () => o.default.dispatch({
    type: "EMOJI_FETCH_FAILURE",
    guildId: e
  }))
}

function T(e) {
  let {
    guildId: t,
    image: i,
    name: n,
    roles: r
  } = e;
  return o.default.dispatch({
    type: "EMOJI_UPLOAD_START",
    guildId: t
  }), a.default.post({
    url: p.Endpoints.GUILD_EMOJIS(t),
    body: {
      image: i,
      name: n,
      roles: r
    },
    oldFormErrors: !0
  }).then(() => o.default.dispatch({
    type: "EMOJI_UPLOAD_STOP",
    guildId: t
  }), e => (o.default.dispatch({
    type: "EMOJI_UPLOAD_STOP",
    guildId: t
  }), Promise.reject(e)))
}

function k(e, t) {
  return o.default.dispatch({
    type: "EMOJI_DELETE",
    guildId: e,
    emojiId: t
  }), a.default.delete({
    url: p.Endpoints.GUILD_EMOJI(e, t),
    oldFormErrors: !0
  })
}
async function v(e) {
  let {
    guildId: t,
    emojiId: i,
    name: n,
    roles: r
  } = e;
  try {
    return await a.default.patch({
      url: p.Endpoints.GUILD_EMOJI(t, i),
      body: {
        name: n,
        roles: r
      },
      oldFormErrors: !0
    })
  } catch (e) {
    throw new u.default(e)
  }
}

function C(e) {
  return f.default.totalUnavailableGuilds > 0 || !d.default.isConnected() ? e : e.filter(e => {
    var t;
    let i = null !== (t = c.default.getCustomEmojiById(e)) && void 0 !== t ? t : l.default.getByName(e);
    return null != i
  })
}

function A(e) {
  var t;
  (function(e) {
    null != e && E.FrecencyUserSettingsActionCreators.updateAsync("favoriteEmojis", t => (t.emojis = C(t.emojis), r.size(t.emojis) >= S.MAX_FAVORITES) ? (_.default.show({
      title: m.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
      body: m.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
        count: S.MAX_FAVORITES
      })
    }), !1) : !t.emojis.includes(e) && void t.emojis.push(e), S.UserSettingsDelay.INFREQUENT_USER_ACTION)
  })(null !== (t = e.id) && void 0 !== t ? t : e.name)
}

function M(e) {
  var t;
  (function(e) {
    null != e && E.FrecencyUserSettingsActionCreators.updateAsync("favoriteEmojis", t => {
      if (!t.emojis.includes(e)) return !1;
      t.emojis = t.emojis.filter(t => e !== t), t.emojis = C(t.emojis)
    }, S.UserSettingsDelay.INFREQUENT_USER_ACTION)
  })(null !== (t = e.id) && void 0 !== t ? t : e.name)
}
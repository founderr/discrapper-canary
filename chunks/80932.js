"use strict";
n.r(t), n.d(t, {
  deleteEmoji: function() {
    return O
  },
  favoriteEmoji: function() {
    return L
  },
  fetchEmoji: function() {
    return N
  },
  setDiversityColor: function() {
    return m
  },
  unfavoriteEmoji: function() {
    return v
  },
  updateEmoji: function() {
    return C
  },
  uploadEmoji: function() {
    return p
  }
}), n("47120"), n("653041");
var i = n("392711"),
  r = n.n(i),
  s = n("544891"),
  a = n("381499"),
  o = n("570140"),
  l = n("479531"),
  u = n("339085"),
  d = n("633302"),
  _ = n("347374"),
  c = n("38618"),
  E = n("675478"),
  I = n("486472"),
  T = n("823379"),
  f = n("668781"),
  S = n("981631"),
  h = n("526761"),
  A = n("689938");

function m(e) {
  E.PreloadedUserSettingsActionCreators.updateAsync("textAndImages", t => {
    t.diversitySurrogate = a.StringValue.create(), t.diversitySurrogate.value = e
  }, h.UserSettingsDelay.FREQUENT_USER_ACTION)
}

function N(e) {
  o.default.dispatch({
    type: "EMOJI_FETCH",
    guildId: e
  }), s.HTTP.get({
    url: S.Endpoints.GUILD_EMOJIS(e),
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

function p(e) {
  let {
    guildId: t,
    image: n,
    name: i,
    roles: r
  } = e;
  return o.default.dispatch({
    type: "EMOJI_UPLOAD_START",
    guildId: t
  }), s.HTTP.post({
    url: S.Endpoints.GUILD_EMOJIS(t),
    body: {
      image: n,
      name: i,
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

function O(e, t) {
  return o.default.dispatch({
    type: "EMOJI_DELETE",
    guildId: e,
    emojiId: t
  }), s.HTTP.del({
    url: S.Endpoints.GUILD_EMOJI(e, t),
    oldFormErrors: !0
  })
}
async function C(e) {
  let {
    guildId: t,
    emojiId: n,
    name: i,
    roles: r
  } = e;
  try {
    return await s.HTTP.patch({
      url: S.Endpoints.GUILD_EMOJI(t, n),
      body: {
        name: i,
        roles: r
      },
      oldFormErrors: !0
    })
  } catch (e) {
    throw new l.default(e)
  }
}

function R(e) {
  if (I.default.totalUnavailableGuilds > 0 || !c.default.isConnected()) return e;
  let t = e.map(e => {
    var t;
    return null !== (t = u.default.getCustomEmojiById(e)) && void 0 !== t ? t : d.default.getByName(e)
  }).filter(T.isNotNullish);
  return [...(0, _.default)(t).keys()]
}

function g(e) {
  var t, n, i;
  return null == e ? null : null !== (i = null !== (n = e.id) && void 0 !== n ? n : null === (t = d.default.convertSurrogateToBase(e.surrogates)) || void 0 === t ? void 0 : t.name) && void 0 !== i ? i : e.name
}

function L(e) {
  let t = g(e);
  null != t && E.FrecencyUserSettingsActionCreators.updateAsync("favoriteEmojis", e => (e.emojis = R(e.emojis), r().size(e.emojis) >= h.MAX_FAVORITES) ? (f.default.show({
    title: A.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
    body: A.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
      count: h.MAX_FAVORITES
    })
  }), !1) : !e.emojis.includes(t) && void e.emojis.push(t), h.UserSettingsDelay.INFREQUENT_USER_ACTION)
}

function v(e) {
  let t = g(e);
  null != t && E.FrecencyUserSettingsActionCreators.updateAsync("favoriteEmojis", e => {
    if (e.emojis = R(e.emojis), !e.emojis.includes(t)) return !1;
    e.emojis = e.emojis.filter(e => t !== e)
  }, h.UserSettingsDelay.INFREQUENT_USER_ACTION)
}
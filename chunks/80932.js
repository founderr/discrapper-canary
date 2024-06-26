"use strict";
n.d(t, {
  $K: function() {
    return v
  },
  OQ: function() {
    return m
  },
  RE: function() {
    return p
  },
  Xe: function() {
    return L
  },
  dv: function() {
    return R
  },
  rS: function() {
    return O
  },
  t0: function() {
    return A
  }
}), n(47120), n(653041);
var i = n(392711),
  r = n.n(i),
  s = n(544891),
  o = n(381499),
  a = n(570140),
  l = n(479531),
  u = n(339085),
  _ = n(633302),
  c = n(347374),
  d = n(38618),
  E = n(675478),
  I = n(486472),
  T = n(823379),
  h = n(668781),
  f = n(981631),
  S = n(526761),
  N = n(689938);

function A(e) {
  E.hW.updateAsync("textAndImages", t => {
    t.diversitySurrogate = o.Gm.create(), t.diversitySurrogate.value = e
  }, S.fy.FREQUENT_USER_ACTION)
}

function m(e) {
  a.Z.dispatch({
    type: "EMOJI_FETCH",
    guildId: e
  }), s.tn.get({
    url: f.ANM.GUILD_EMOJIS(e),
    oldFormErrors: !0
  }).then(t => a.Z.dispatch({
    type: "EMOJI_FETCH_SUCCESS",
    guildId: e,
    emojis: t.body
  }), () => a.Z.dispatch({
    type: "EMOJI_FETCH_FAILURE",
    guildId: e
  }))
}

function O(e) {
  let {
    guildId: t,
    image: n,
    name: i,
    roles: r
  } = e;
  return a.Z.dispatch({
    type: "EMOJI_UPLOAD_START",
    guildId: t
  }), s.tn.post({
    url: f.ANM.GUILD_EMOJIS(t),
    body: {
      image: n,
      name: i,
      roles: r
    },
    oldFormErrors: !0
  }).then(() => a.Z.dispatch({
    type: "EMOJI_UPLOAD_STOP",
    guildId: t
  }), e => (a.Z.dispatch({
    type: "EMOJI_UPLOAD_STOP",
    guildId: t
  }), Promise.reject(e)))
}

function p(e, t) {
  return a.Z.dispatch({
    type: "EMOJI_DELETE",
    guildId: e,
    emojiId: t
  }), s.tn.del({
    url: f.ANM.GUILD_EMOJI(e, t),
    oldFormErrors: !0
  })
}
async function R(e) {
  let {
    guildId: t,
    emojiId: n,
    name: i,
    roles: r
  } = e;
  try {
    return await s.tn.patch({
      url: f.ANM.GUILD_EMOJI(t, n),
      body: {
        name: i,
        roles: r
      },
      oldFormErrors: !0
    })
  } catch (e) {
    throw new l.Z(e)
  }
}

function g(e) {
  if (I.Z.totalUnavailableGuilds > 0 || !d.Z.isConnected()) return e;
  let t = e.map(e => {
    var t;
    return null !== (t = u.Z.getCustomEmojiById(e)) && void 0 !== t ? t : _.ZP.getByName(e)
  }).filter(T.lm);
  return [...(0, c.Z)(t).keys()]
}

function C(e) {
  var t, n, i;
  return null == e ? null : null !== (i = null !== (n = e.id) && void 0 !== n ? n : null === (t = _.ZP.convertSurrogateToBase(e.surrogates)) || void 0 === t ? void 0 : t.name) && void 0 !== i ? i : e.name
}

function v(e) {
  let t = C(e);
  if (null != t) E.DZ.updateAsync("favoriteEmojis", e => (e.emojis = g(e.emojis), r().size(e.emojis) >= S.oX) ? (h.Z.show({
    title: N.Z.Messages.FAVORITES_LIMIT_REACHED_TITLE,
    body: N.Z.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
      count: S.oX
    })
  }), !1) : !e.emojis.includes(t) && void e.emojis.push(t), S.fy.INFREQUENT_USER_ACTION)
}

function L(e) {
  let t = C(e);
  if (null != t) E.DZ.updateAsync("favoriteEmojis", e => {
    if (e.emojis = g(e.emojis), !e.emojis.includes(t)) return !1;
    e.emojis = e.emojis.filter(e => t !== e)
  }, S.fy.INFREQUENT_USER_ACTION)
}
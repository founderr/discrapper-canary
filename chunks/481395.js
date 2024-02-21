"use strict";
n.r(t), n.d(t, {
  default: function() {
    return Y
  }
}), n("781738"), n("843762");
var a = n("866227"),
  s = n.n(a),
  i = n("913144"),
  l = n("533280"),
  r = n("679653"),
  o = n("646630"),
  u = n("256572"),
  d = n("915639"),
  c = n("845579"),
  f = n("271938"),
  E = n("982108"),
  h = n("42203"),
  _ = n("26989"),
  C = n("305961"),
  I = n("42887"),
  S = n("385649"),
  m = n("27618"),
  p = n("18494"),
  T = n("282109"),
  g = n("697218"),
  A = n("158998"),
  N = n("76629"),
  R = n("981957"),
  v = n("357046"),
  O = n("49111"),
  L = n("782340");
let M = [],
  P = null,
  D = null,
  y = null,
  x = /\|\|([\s\S]+?)\|\|/g;

function b(e, t, n, a) {
  let i = C.default.getGuild(n),
    l = e.replace(x, L.default.Messages.SPOILER).replace(/<@!?(\d+)>/g, (e, t) => {
      var a;
      let s = g.default.getUser(t);
      if (null == s) return e;
      return null !== (a = _.default.getNick(n, s.id)) && void 0 !== a ? a : A.default.getName(s)
    }).replace(/<@&?(\d+)>/g, (e, t) => {
      let n = null != i ? i.roles[t] : null;
      return null != n && null != n.name ? n.name : L.default.Messages.MESSAGE_TTS_DELETED_ROLE
    }).replace(/<#(\d+)>/g, (e, t) => {
      let n = h.default.getChannel(t);
      return null == n ? e : (0, r.computeChannelName)(n, g.default, m.default)
    }).replace(/<a?:(\w+):(\d+)>/g, (e, t) => "".concat(L.default.Messages.EMOJI, " ").concat(t)).replace(/<\/([^\s]+?):(\d+)>/g, (e, t) => "/".concat(t)).replace(/<t:(\d+):([A-Z]|[a-z])>/g, (e, t, n) => {
      let a = o.TIMESTAMP_FORMATS[n],
        i = 1e3 * parseInt(t, 10),
        l = s(i);
      return null != a ? a(l) : l.format()
    });
  return null == a ? L.default.Messages.MESSAGE_TTS.format({
    username: t,
    body: l
  }) : L.default.Messages.MESSAGE_TTS_REPLY.format({
    username: t,
    body: l,
    replyUsername: a
  })
}

function U() {
  if (!l.supported) return !1;
  let e = d.default.locale;
  if (null == y) {
    var t;
    y = null === (t = window.speechSynthesis) || void 0 === t ? void 0 : t.getVoices()
  }
  let n = y.filter(t => t.lang === e || t.lang.slice(0, e.length) === e || !1);
  D = n.length > 0 ? n[0] : null
}
async function G(e, t, n, a, s) {
  let i = l.createUtterance(e, n);
  null !== i && (null == D && U(), t ? await (0, N.stopSpeaking)() : null == P || P.removeEventListener("end", N.stopSpeaking), i.addEventListener("end", N.stopSpeaking), null != a && i.addEventListener("start", a), null != s && i.addEventListener("end", s), P = i, l.speakUtterance(i, D))
}

function j(e, t, n, a, s) {
  G(e, t, s, () => {
    (0, N.speakingMessage)(n, a)
  })
}

function w(e) {
  let {
    text: t,
    interrupt: n,
    maxLength: a,
    onStart: s,
    onEnd: i
  } = e;
  G(t, n, a, s, i)
}

function k() {
  return null !== P && P.removeEventListener("end", N.stopSpeaking), l.cancelAll(), P = null, !0
}

function F(e) {
  var t, n, a;
  let {
    message: s,
    channel: i
  } = e, l = s.type === O.MessageTypes.REPLY ? u.default.getMessageByReference(s.messageReference) : null, r = (null == l ? void 0 : l.state) === u.ReferencedMessageState.LOADED ? null == l ? void 0 : null === (t = l.message) || void 0 === t ? void 0 : t.author : null, o = null != r ? null !== (n = _.default.getNick(i.guild_id, null == r ? void 0 : r.id)) && void 0 !== n ? n : A.default.getName(r) : null, d = i.getGuildId(), c = null !== (a = _.default.getNick(d, s.author.id)) && void 0 !== a ? a : A.default.getName(s.author), f = b(s.content, c, d, o);
  return j(f, !0, i.id, s.id), !0
}

function B(e) {
  var t, n, a, s, i, l, r;
  let {
    channelId: o,
    message: u,
    optimistic: d
  } = e;
  if (d || I.default.isSelfDeaf()) return !1;
  let C = h.default.getChannel(o);
  if (null == C) return !1;
  let g = p.default.getChannelId(),
    N = E.default.getCurrentSidebarChannelId(g),
    R = o === g || o === N,
    L = c.EnableTTSCommand.getSetting() && u.tts && R,
    P = S.default.getTTSType(),
    D = (null === (t = u.author) || void 0 === t ? void 0 : t.id) !== f.default.getId() && (P === O.TTSNotificationTypes.ALL_CHANNELS || P === O.TTSNotificationTypes.SELECTED_CHANNEL && R);
  if ((L || D) && ((null === (n = u.author) || void 0 === n ? void 0 : n.id) == null || !m.default.isBlocked(u.author.id))) {
    if (M.indexOf(u.id) >= 0) return !1;
    M.unshift(u.id) > 10 && M.pop();
    let e = C.getGuildId();
    if (null != e && T.default.getMutedChannels(e).has(o)) return !1;
    let t = null !== (l = null !== (i = _.default.getNick(e, null === (a = u.author) || void 0 === a ? void 0 : a.id)) && void 0 !== i ? i : A.default.getName(u.author)) && void 0 !== l ? l : "",
      n = u.type === O.MessageTypes.REPLY ? null === (s = u.referenced_message) || void 0 === s ? void 0 : s.author : null,
      d = null != n ? null !== (r = _.default.getNick(e, null == n ? void 0 : n.id)) && void 0 !== r ? r : A.default.getName(n) : null,
      c = b(u.content, t, e, d);
    j(c, !1, C.id, u.id, v.MAX_TTS_LENGTH)
  }
  return !1
}

function H(e) {
  let {
    id: t,
    channelId: n
  } = e, a = R.default.currentMessage;
  return null != a && t === a.messageId && n === a.channelId && ((0, N.stopSpeaking)(), !0)
}

function V() {
  I.default.isSelfDeaf() && l.cancelAll()
}
var Y = {
  init() {
    i.default.subscribe("SPEAK_TEXT", w), i.default.subscribe("SPEAK_MESSAGE", F), i.default.subscribe("STOP_SPEAKING", k), i.default.subscribe("MESSAGE_CREATE", B), i.default.subscribe("MESSAGE_DELETE", H), i.default.subscribe("AUDIO_TOGGLE_SELF_DEAF", V), i.default.subscribe("USER_SETTINGS_PROTO_UPDATE", U), i.default.subscribe("I18N_LOAD_SUCCESS", U)
  }
}
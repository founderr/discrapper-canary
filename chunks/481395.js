"use strict";
n.r(t), n.d(t, {
  default: function() {
    return B
  }
}), n("781738"), n("843762");
var a = n("913144"),
  s = n("533280"),
  l = n("679653"),
  i = n("256572"),
  r = n("915639"),
  o = n("845579"),
  u = n("271938"),
  d = n("982108"),
  c = n("42203"),
  f = n("26989"),
  E = n("305961"),
  h = n("42887"),
  _ = n("385649"),
  C = n("27618"),
  I = n("18494"),
  S = n("282109"),
  p = n("697218"),
  m = n("158998"),
  T = n("76629"),
  g = n("981957"),
  A = n("357046"),
  N = n("49111"),
  R = n("782340");
let O = [],
  v = null,
  L = null,
  M = null,
  P = /\|\|([\s\S]+?)\|\|/g;

function D(e, t, n, a) {
  let s = E.default.getGuild(n),
    i = e.replace(P, R.default.Messages.SPOILER).replace(/<@!?(\d+)>/g, (e, t) => {
      var a;
      let s = p.default.getUser(t);
      if (null == s) return e;
      return null !== (a = f.default.getNick(n, s.id)) && void 0 !== a ? a : m.default.getName(s)
    }).replace(/<@&?(\d+)>/g, (e, t) => {
      let n = null != s ? s.roles[t] : null;
      return null != n && null != n.name ? n.name : R.default.Messages.MESSAGE_TTS_DELETED_ROLE
    }).replace(/<#(\d+)>/g, (e, t) => {
      let n = c.default.getChannel(t);
      return null == n ? e : (0, l.computeChannelName)(n, p.default, C.default)
    }).replace(/<a?:(\w+):(\d+)>/g, (e, t) => "".concat(R.default.Messages.EMOJI, " ").concat(t)).replace(/<\/([^\s]+?):(\d+)>/g, (e, t) => "/".concat(t));
  return null == a ? R.default.Messages.MESSAGE_TTS.format({
    username: t,
    body: i
  }) : R.default.Messages.MESSAGE_TTS_REPLY.format({
    username: t,
    body: i,
    replyUsername: a
  })
}

function y() {
  if (!s.supported) return !1;
  let e = r.default.locale;
  if (null == M) {
    var t;
    M = null === (t = window.speechSynthesis) || void 0 === t ? void 0 : t.getVoices()
  }
  let n = M.filter(t => t.lang === e || t.lang.slice(0, e.length) === e || !1);
  L = n.length > 0 ? n[0] : null
}
async function x(e, t, n, a, l) {
  let i = s.createUtterance(e, n);
  null !== i && (null == L && y(), t ? await (0, T.stopSpeaking)() : null == v || v.removeEventListener("end", T.stopSpeaking), i.addEventListener("end", T.stopSpeaking), null != a && i.addEventListener("start", a), null != l && i.addEventListener("end", l), v = i, s.speakUtterance(i, L))
}

function b(e, t, n, a, s) {
  x(e, t, s, () => {
    (0, T.speakingMessage)(n, a)
  })
}

function U(e) {
  let {
    text: t,
    interrupt: n,
    maxLength: a,
    onStart: s,
    onEnd: l
  } = e;
  x(t, n, a, s, l)
}

function G() {
  return null !== v && v.removeEventListener("end", T.stopSpeaking), s.cancelAll(), v = null, !0
}

function j(e) {
  var t, n, a;
  let {
    message: s,
    channel: l
  } = e, r = s.type === N.MessageTypes.REPLY ? i.default.getMessageByReference(s.messageReference) : null, o = (null == r ? void 0 : r.state) === i.ReferencedMessageState.LOADED ? null == r ? void 0 : null === (t = r.message) || void 0 === t ? void 0 : t.author : null, u = null != o ? null !== (n = f.default.getNick(l.guild_id, null == o ? void 0 : o.id)) && void 0 !== n ? n : m.default.getName(o) : null, d = l.getGuildId(), c = null !== (a = f.default.getNick(d, s.author.id)) && void 0 !== a ? a : m.default.getName(s.author), E = D(s.content, c, d, u);
  return b(E, !0, l.id, s.id), !0
}

function w(e) {
  var t, n, a, s, l, i, r;
  let {
    channelId: E,
    message: p,
    optimistic: T
  } = e;
  if (T || h.default.isSelfDeaf()) return !1;
  let g = c.default.getChannel(E);
  if (null == g) return !1;
  let R = I.default.getChannelId(),
    v = d.default.getCurrentSidebarChannelId(R),
    L = E === R || E === v,
    M = o.EnableTTSCommand.getSetting() && p.tts && L,
    P = _.default.getTTSType(),
    y = (null === (t = p.author) || void 0 === t ? void 0 : t.id) !== u.default.getId() && (P === N.TTSNotificationTypes.ALL_CHANNELS || P === N.TTSNotificationTypes.SELECTED_CHANNEL && L);
  if ((M || y) && ((null === (n = p.author) || void 0 === n ? void 0 : n.id) == null || !C.default.isBlocked(p.author.id))) {
    if (O.indexOf(p.id) >= 0) return !1;
    O.unshift(p.id) > 10 && O.pop();
    let e = g.getGuildId();
    if (null != e && S.default.getMutedChannels(e).has(E)) return !1;
    let t = null !== (i = null !== (l = f.default.getNick(e, null === (a = p.author) || void 0 === a ? void 0 : a.id)) && void 0 !== l ? l : m.default.getName(p.author)) && void 0 !== i ? i : "",
      n = p.type === N.MessageTypes.REPLY ? null === (s = p.referenced_message) || void 0 === s ? void 0 : s.author : null,
      o = null != n ? null !== (r = f.default.getNick(e, null == n ? void 0 : n.id)) && void 0 !== r ? r : m.default.getName(n) : null,
      u = D(p.content, t, e, o);
    b(u, !1, g.id, p.id, A.MAX_TTS_LENGTH)
  }
  return !1
}

function k(e) {
  let {
    id: t,
    channelId: n
  } = e, a = g.default.currentMessage;
  return null != a && t === a.messageId && n === a.channelId && ((0, T.stopSpeaking)(), !0)
}

function F() {
  h.default.isSelfDeaf() && s.cancelAll()
}
var B = {
  init() {
    a.default.subscribe("SPEAK_TEXT", U), a.default.subscribe("SPEAK_MESSAGE", j), a.default.subscribe("STOP_SPEAKING", G), a.default.subscribe("MESSAGE_CREATE", w), a.default.subscribe("MESSAGE_DELETE", k), a.default.subscribe("AUDIO_TOGGLE_SELF_DEAF", F), a.default.subscribe("USER_SETTINGS_PROTO_UPDATE", y), a.default.subscribe("I18N_LOAD_SUCCESS", y)
  }
}
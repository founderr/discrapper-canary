"use strict";
n.r(t), n("757143"), n("733860");
var a = n("913527"),
  s = n.n(a),
  i = n("570140"),
  l = n("419363"),
  r = n("933557"),
  o = n("660199"),
  u = n("869765"),
  d = n("706454"),
  c = n("695346"),
  f = n("314897"),
  E = n("433355"),
  h = n("592125"),
  _ = n("271383"),
  C = n("430824"),
  m = n("131951"),
  S = n("292959"),
  p = n("699516"),
  g = n("944486"),
  I = n("9156"),
  T = n("594174"),
  A = n("51144"),
  N = n("196051"),
  v = n("441729"),
  R = n("653477"),
  L = n("981631"),
  O = n("689938");
let M = [],
  y = null,
  P = null,
  x = null,
  D = /\|\|([\s\S]+?)\|\|/g;

function b(e, t, n, a) {
  let i = C.default.getGuild(n),
    l = e.replace(D, O.default.Messages.SPOILER).replace(/<@!?(\d+)>/g, (e, t) => {
      var a;
      let s = T.default.getUser(t);
      if (null == s) return e;
      return null !== (a = _.default.getNick(n, s.id)) && void 0 !== a ? a : A.default.getName(s)
    }).replace(/<@&?(\d+)>/g, (e, t) => {
      let n = null != i ? C.default.getRole(i.id, t) : null;
      return null != n && null != n.name ? n.name : O.default.Messages.MESSAGE_TTS_DELETED_ROLE
    }).replace(/<#(\d+)>/g, (e, t) => {
      let n = h.default.getChannel(t);
      return null == n ? e : (0, r.computeChannelName)(n, T.default, p.default)
    }).replace(/<a?:(\w+):(\d+)>/g, (e, t) => "".concat(O.default.Messages.EMOJI, " ").concat(t)).replace(/<\/([^\s]+?):(\d+)>/g, (e, t) => "/".concat(t)).replace(/<t:(\d+):([A-Z]|[a-z])>/g, (e, t, n) => {
      let a = o.TIMESTAMP_FORMATS[n],
        i = 1e3 * parseInt(t, 10),
        l = s()(i);
      return null != a ? a(l) : l.format()
    });
  return null == a ? O.default.Messages.MESSAGE_TTS.format({
    username: t,
    body: l
  }) : O.default.Messages.MESSAGE_TTS_REPLY.format({
    username: t,
    body: l,
    replyUsername: a
  })
}

function U() {
  if (!l.supported) return !1;
  let e = d.default.locale;
  if (null == x) {
    var t;
    x = null === (t = window.speechSynthesis) || void 0 === t ? void 0 : t.getVoices()
  }
  let n = x.filter(t => t.lang === e || t.lang.slice(0, e.length) === e || !1);
  P = n.length > 0 ? n[0] : null
}
async function j(e, t, n, a, s) {
  let i = l.createUtterance(e, n);
  null !== i && (null == P && U(), t ? await (0, N.stopSpeaking)() : null == y || y.removeEventListener("end", N.stopSpeaking), i.addEventListener("end", N.stopSpeaking), null != a && i.addEventListener("start", a), null != s && i.addEventListener("end", s), y = i, l.speakUtterance(i, P))
}

function G(e, t, n, a, s) {
  j(e, t, s, () => {
    (0, N.speakingMessage)(n, a)
  })
}

function k(e) {
  let {
    text: t,
    interrupt: n,
    maxLength: a,
    onStart: s,
    onEnd: i
  } = e;
  j(t, n, a, s, i)
}

function w() {
  return null !== y && y.removeEventListener("end", N.stopSpeaking), l.cancelAll(), y = null, !0
}

function F(e) {
  var t, n, a;
  let {
    message: s,
    channel: i
  } = e, l = s.type === L.MessageTypes.REPLY ? u.default.getMessageByReference(s.messageReference) : null, r = (null == l ? void 0 : l.state) === u.ReferencedMessageState.LOADED ? null == l ? void 0 : null === (t = l.message) || void 0 === t ? void 0 : t.author : null, o = null != r ? null !== (n = _.default.getNick(i.guild_id, null == r ? void 0 : r.id)) && void 0 !== n ? n : A.default.getName(r) : null, d = i.getGuildId(), c = null !== (a = _.default.getNick(d, s.author.id)) && void 0 !== a ? a : A.default.getName(s.author);
  return G(b(s.content, c, d, o), !0, i.id, s.id), !0
}

function B(e) {
  var t, n, a, s, i, l, r;
  let {
    channelId: o,
    message: u,
    optimistic: d
  } = e;
  if (d || m.default.isSelfDeaf()) return !1;
  let C = h.default.getChannel(o);
  if (null == C) return !1;
  let T = g.default.getChannelId(),
    N = E.default.getCurrentSidebarChannelId(T),
    v = o === T || o === N,
    O = c.EnableTTSCommand.getSetting() && u.tts && v,
    y = S.default.getTTSType(),
    P = (null === (t = u.author) || void 0 === t ? void 0 : t.id) !== f.default.getId() && (y === L.TTSNotificationTypes.ALL_CHANNELS || y === L.TTSNotificationTypes.SELECTED_CHANNEL && v);
  if ((O || P) && ((null === (n = u.author) || void 0 === n ? void 0 : n.id) == null || !p.default.isBlocked(u.author.id))) {
    if (M.indexOf(u.id) >= 0) return !1;
    M.unshift(u.id) > 10 && M.pop();
    let e = C.getGuildId();
    if (null != e && I.default.getMutedChannels(e).has(o)) return !1;
    let t = null !== (l = null !== (i = _.default.getNick(e, null === (a = u.author) || void 0 === a ? void 0 : a.id)) && void 0 !== i ? i : A.default.getName(u.author)) && void 0 !== l ? l : "",
      n = u.type === L.MessageTypes.REPLY ? null === (s = u.referenced_message) || void 0 === s ? void 0 : s.author : null,
      d = null != n ? null !== (r = _.default.getNick(e, null == n ? void 0 : n.id)) && void 0 !== r ? r : A.default.getName(n) : null;
    G(b(u.content, t, e, d), !1, C.id, u.id, R.MAX_TTS_LENGTH)
  }
  return !1
}

function H(e) {
  let {
    id: t,
    channelId: n
  } = e, a = v.default.currentMessage;
  return null != a && t === a.messageId && n === a.channelId && ((0, N.stopSpeaking)(), !0)
}

function V() {
  m.default.isSelfDeaf() && l.cancelAll()
}
t.default = {
  init() {
    i.default.subscribe("SPEAK_TEXT", k), i.default.subscribe("SPEAK_MESSAGE", F), i.default.subscribe("STOP_SPEAKING", w), i.default.subscribe("MESSAGE_CREATE", B), i.default.subscribe("MESSAGE_DELETE", H), i.default.subscribe("AUDIO_TOGGLE_SELF_DEAF", V), i.default.subscribe("USER_SETTINGS_PROTO_UPDATE", U), i.default.subscribe("I18N_LOAD_SUCCESS", U)
  }
}
"use strict";
a.r(t), a("757143"), a("733860");
var n = a("913527"),
  s = a.n(n),
  l = a("570140"),
  i = a("419363"),
  r = a("933557"),
  o = a("660199"),
  u = a("869765"),
  d = a("706454"),
  c = a("695346"),
  f = a("314897"),
  E = a("433355"),
  h = a("592125"),
  _ = a("271383"),
  C = a("430824"),
  m = a("131951"),
  S = a("292959"),
  p = a("699516"),
  I = a("944486"),
  g = a("9156"),
  T = a("594174"),
  A = a("51144"),
  N = a("196051"),
  v = a("441729"),
  R = a("653477"),
  L = a("981631"),
  O = a("689938");
let M = [],
  P = null,
  x = null,
  y = null,
  D = /\|\|([\s\S]+?)\|\|/g;

function b(e, t, a, n) {
  let l = C.default.getGuild(a),
    i = e.replace(D, O.default.Messages.SPOILER).replace(/<@!?(\d+)>/g, (e, t) => {
      var n;
      let s = T.default.getUser(t);
      if (null == s) return e;
      return null !== (n = _.default.getNick(a, s.id)) && void 0 !== n ? n : A.default.getName(s)
    }).replace(/<@&?(\d+)>/g, (e, t) => {
      let a = null != l ? C.default.getRole(l.id, t) : null;
      return null != a && null != a.name ? a.name : O.default.Messages.MESSAGE_TTS_DELETED_ROLE
    }).replace(/<#(\d+)>/g, (e, t) => {
      let a = h.default.getChannel(t);
      return null == a ? e : (0, r.computeChannelName)(a, T.default, p.default)
    }).replace(/<a?:(\w+):(\d+)>/g, (e, t) => "".concat(O.default.Messages.EMOJI, " ").concat(t)).replace(/<\/([^\s]+?):(\d+)>/g, (e, t) => "/".concat(t)).replace(/<t:(\d+):([A-Z]|[a-z])>/g, (e, t, a) => {
      let n = o.TIMESTAMP_FORMATS[a],
        l = 1e3 * parseInt(t, 10),
        i = s()(l);
      return null != n ? n(i) : i.format()
    });
  return null == n ? O.default.Messages.MESSAGE_TTS.format({
    username: t,
    body: i
  }) : O.default.Messages.MESSAGE_TTS_REPLY.format({
    username: t,
    body: i,
    replyUsername: n
  })
}

function U() {
  if (!i.supported) return !1;
  let e = d.default.locale;
  if (null == y) {
    var t;
    y = null === (t = window.speechSynthesis) || void 0 === t ? void 0 : t.getVoices()
  }
  let a = y.filter(t => t.lang === e || t.lang.slice(0, e.length) === e || !1);
  x = a.length > 0 ? a[0] : null
}
async function j(e, t, a, n, s) {
  let l = i.createUtterance(e, a);
  null !== l && (null == x && U(), t ? await (0, N.stopSpeaking)() : null == P || P.removeEventListener("end", N.stopSpeaking), l.addEventListener("end", N.stopSpeaking), null != n && l.addEventListener("start", n), null != s && l.addEventListener("end", s), P = l, i.speakUtterance(l, x))
}

function G(e, t, a, n, s) {
  j(e, t, s, () => {
    (0, N.speakingMessage)(a, n)
  })
}

function w(e) {
  let {
    text: t,
    interrupt: a,
    maxLength: n,
    onStart: s,
    onEnd: l
  } = e;
  j(t, a, n, s, l)
}

function k() {
  return null !== P && P.removeEventListener("end", N.stopSpeaking), i.cancelAll(), P = null, !0
}

function B(e) {
  var t, a, n;
  let {
    message: s,
    channel: l
  } = e, i = s.type === L.MessageTypes.REPLY ? u.default.getMessageByReference(s.messageReference) : null, r = (null == i ? void 0 : i.state) === u.ReferencedMessageState.LOADED ? null == i ? void 0 : null === (t = i.message) || void 0 === t ? void 0 : t.author : null, o = null != r ? null !== (a = _.default.getNick(l.guild_id, null == r ? void 0 : r.id)) && void 0 !== a ? a : A.default.getName(r) : null, d = l.getGuildId(), c = null !== (n = _.default.getNick(d, s.author.id)) && void 0 !== n ? n : A.default.getName(s.author);
  return G(b(s.content, c, d, o), !0, l.id, s.id), !0
}

function F(e) {
  var t, a, n, s, l, i, r;
  let {
    channelId: o,
    message: u,
    optimistic: d
  } = e;
  if (d || m.default.isSelfDeaf()) return !1;
  let C = h.default.getChannel(o);
  if (null == C) return !1;
  let T = I.default.getChannelId(),
    N = E.default.getCurrentSidebarChannelId(T),
    v = o === T || o === N,
    O = c.EnableTTSCommand.getSetting() && u.tts && v,
    P = S.default.getTTSType(),
    x = (null === (t = u.author) || void 0 === t ? void 0 : t.id) !== f.default.getId() && (P === L.TTSNotificationTypes.ALL_CHANNELS || P === L.TTSNotificationTypes.SELECTED_CHANNEL && v);
  if ((O || x) && ((null === (a = u.author) || void 0 === a ? void 0 : a.id) == null || !p.default.isBlocked(u.author.id))) {
    if (M.indexOf(u.id) >= 0) return !1;
    M.unshift(u.id) > 10 && M.pop();
    let e = C.getGuildId();
    if (null != e && g.default.getMutedChannels(e).has(o)) return !1;
    let t = null !== (i = null !== (l = _.default.getNick(e, null === (n = u.author) || void 0 === n ? void 0 : n.id)) && void 0 !== l ? l : A.default.getName(u.author)) && void 0 !== i ? i : "",
      a = u.type === L.MessageTypes.REPLY ? null === (s = u.referenced_message) || void 0 === s ? void 0 : s.author : null,
      d = null != a ? null !== (r = _.default.getNick(e, null == a ? void 0 : a.id)) && void 0 !== r ? r : A.default.getName(a) : null;
    G(b(u.content, t, e, d), !1, C.id, u.id, R.MAX_TTS_LENGTH)
  }
  return !1
}

function H(e) {
  let {
    id: t,
    channelId: a
  } = e, n = v.default.currentMessage;
  return null != n && t === n.messageId && a === n.channelId && ((0, N.stopSpeaking)(), !0)
}

function V() {
  m.default.isSelfDeaf() && i.cancelAll()
}
t.default = {
  init() {
    l.default.subscribe("SPEAK_TEXT", w), l.default.subscribe("SPEAK_MESSAGE", B), l.default.subscribe("STOP_SPEAKING", k), l.default.subscribe("MESSAGE_CREATE", F), l.default.subscribe("MESSAGE_DELETE", H), l.default.subscribe("AUDIO_TOGGLE_SELF_DEAF", V), l.default.subscribe("USER_SETTINGS_PROTO_UPDATE", U), l.default.subscribe("I18N_LOAD_SUCCESS", U)
  }
}
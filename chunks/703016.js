n(757143), n(733860);
var i = n(913527),
  s = n.n(i),
  l = n(570140),
  a = n(419363),
  r = n(933557),
  o = n(660199),
  c = n(869765),
  u = n(706454),
  d = n(695346),
  E = n(314897),
  h = n(433355),
  _ = n(592125),
  I = n(271383),
  m = n(430824),
  g = n(131951),
  p = n(292959),
  N = n(699516),
  T = n(944486),
  C = n(9156),
  S = n(594174),
  A = n(51144),
  f = n(196051),
  Z = n(441729),
  v = n(653477),
  L = n(981631),
  O = n(689938);
let R = [],
  x = null,
  M = null,
  P = null,
  D = /\|\|([\s\S]+?)\|\|/g;

function b(e, t, n, i) {
  let l = m.Z.getGuild(n),
    a = e.replace(D, O.Z.Messages.SPOILER).replace(/<@!?(\d+)>/g, (e, t) => {
      var i;
      let s = S.default.getUser(t);
      if (null == s) return e;
      return null !== (i = I.ZP.getNick(n, s.id)) && void 0 !== i ? i : A.ZP.getName(s)
    }).replace(/<@&?(\d+)>/g, (e, t) => {
      let n = null != l ? m.Z.getRole(l.id, t) : null;
      return null != n && null != n.name ? n.name : O.Z.Messages.MESSAGE_TTS_DELETED_ROLE
    }).replace(/<#(\d+)>/g, (e, t) => {
      let n = _.Z.getChannel(t);
      return null == n ? e : (0, r.F6)(n, S.default, N.Z)
    }).replace(/<a?:(\w+):(\d+)>/g, (e, t) => "".concat(O.Z.Messages.EMOJI, " ").concat(t)).replace(/<\/([^\s]+?):(\d+)>/g, (e, t) => "/".concat(t)).replace(/<t:(\d+):([A-Z]|[a-z])>/g, (e, t, n) => {
      let i = o.Qh[n],
        l = 1e3 * parseInt(t, 10),
        a = s()(l);
      return null != i ? i(a) : a.format()
    });
  return null == i ? O.Z.Messages.MESSAGE_TTS.format({
    username: t,
    body: a
  }) : O.Z.Messages.MESSAGE_TTS_REPLY.format({
    username: t,
    body: a,
    replyUsername: i
  })
}

function y() {
  if (!a.Zh) return !1;
  let e = u.default.locale;
  if (null == P) {
    var t;
    P = null === (t = window.speechSynthesis) || void 0 === t ? void 0 : t.getVoices()
  }
  let n = P.filter(t => t.lang === e || t.lang.slice(0, e.length) === e || !1);
  M = n.length > 0 ? n[0] : null
}
async function j(e, t, n, i, s) {
  let l = a.e6(e, n);
  null !== l && (null == M && y(), t ? await (0, f.NB)() : null == x || x.removeEventListener("end", f.NB), l.addEventListener("end", f.NB), null != i && l.addEventListener("start", i), null != s && l.addEventListener("end", s), x = l, a.iq(l, M))
}

function U(e, t, n, i, s) {
  j(e, t, s, () => {
    (0, f.Bo)(n, i)
  })
}

function G(e) {
  let {
    text: t,
    interrupt: n,
    maxLength: i,
    onStart: s,
    onEnd: l
  } = e;
  j(t, n, i, s, l)
}

function w() {
  return null !== x && x.removeEventListener("end", f.NB), a.M9(), x = null, !0
}

function k(e) {
  var t, n, i;
  let {
    message: s,
    channel: l
  } = e, a = s.type === L.uaV.REPLY ? c.Z.getMessageByReference(s.messageReference) : null, r = (null == a ? void 0 : a.state) === c.Y.LOADED ? null == a ? void 0 : null === (t = a.message) || void 0 === t ? void 0 : t.author : null, o = null != r ? null !== (n = I.ZP.getNick(l.guild_id, null == r ? void 0 : r.id)) && void 0 !== n ? n : A.ZP.getName(r) : null, u = l.getGuildId(), d = null !== (i = I.ZP.getNick(u, s.author.id)) && void 0 !== i ? i : A.ZP.getName(s.author);
  return U(b(s.content, d, u, o), !0, l.id, s.id), !0
}

function B(e) {
  var t, n, i, s, l, a;
  let {
    channelId: r,
    message: o,
    optimistic: c
  } = e;
  if (c || g.Z.isSelfDeaf()) return !1;
  let u = _.Z.getChannel(r);
  if (null == u) return !1;
  let m = T.Z.getChannelId(),
    S = h.ZP.getCurrentSidebarChannelId(m),
    f = r === m || r === S,
    Z = d.OW.getSetting() && o.tts && f,
    O = p.Z.getTTSType(),
    x = (null === (t = o.author) || void 0 === t ? void 0 : t.id) !== E.default.getId() && (O === L.PrB.ALL_CHANNELS || O === L.PrB.SELECTED_CHANNEL && f);
  if ((Z || x) && !N.Z.isBlockedForMessage(o)) {
    if (R.indexOf(o.id) >= 0) return !1;
    R.unshift(o.id) > 10 && R.pop();
    let e = u.getGuildId();
    if (null != e && C.ZP.getMutedChannels(e).has(r)) return !1;
    let t = null !== (l = null !== (s = I.ZP.getNick(e, null === (n = o.author) || void 0 === n ? void 0 : n.id)) && void 0 !== s ? s : A.ZP.getName(o.author)) && void 0 !== l ? l : "",
      c = o.type === L.uaV.REPLY ? null === (i = o.referenced_message) || void 0 === i ? void 0 : i.author : null,
      d = null != c ? null !== (a = I.ZP.getNick(e, null == c ? void 0 : c.id)) && void 0 !== a ? a : A.ZP.getName(c) : null;
    U(b(o.content, t, e, d), !1, u.id, o.id, v.f)
  }
  return !1
}

function H(e) {
  let {
    id: t,
    channelId: n
  } = e, i = Z.Z.currentMessage;
  return null != i && t === i.messageId && n === i.channelId && ((0, f.NB)(), !0)
}

function V() {
  g.Z.isSelfDeaf() && a.M9()
}
t.Z = {
  init() {
    l.Z.subscribe("SPEAK_TEXT", G), l.Z.subscribe("SPEAK_MESSAGE", k), l.Z.subscribe("STOP_SPEAKING", w), l.Z.subscribe("MESSAGE_CREATE", B), l.Z.subscribe("MESSAGE_DELETE", H), l.Z.subscribe("AUDIO_TOGGLE_SELF_DEAF", V), l.Z.subscribe("USER_SETTINGS_PROTO_UPDATE", y), l.Z.subscribe("I18N_LOAD_SUCCESS", y)
  }
}
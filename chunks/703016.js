n(757143), n(733860);
var s = n(913527),
  i = n.n(s),
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
  T = n(131951),
  g = n(292959),
  p = n(699516),
  N = n(944486),
  S = n(9156),
  C = n(594174),
  A = n(51144),
  f = n(196051),
  Z = n(441729),
  L = n(653477),
  O = n(981631),
  v = n(689938);
let R = [],
  P = null,
  x = null,
  M = null,
  D = /\|\|([\s\S]+?)\|\|/g;

function b(e, t, n, s) {
  let l = m.Z.getGuild(n),
    a = e.replace(D, v.Z.Messages.SPOILER).replace(/<@!?(\d+)>/g, (e, t) => {
      var s;
      let i = C.default.getUser(t);
      if (null == i) return e;
      return null !== (s = I.ZP.getNick(n, i.id)) && void 0 !== s ? s : A.ZP.getName(i)
    }).replace(/<@&?(\d+)>/g, (e, t) => {
      let n = null != l ? m.Z.getRole(l.id, t) : null;
      return null != n && null != n.name ? n.name : v.Z.Messages.MESSAGE_TTS_DELETED_ROLE
    }).replace(/<#(\d+)>/g, (e, t) => {
      let n = _.Z.getChannel(t);
      return null == n ? e : (0, r.F6)(n, C.default, p.Z)
    }).replace(/<a?:(\w+):(\d+)>/g, (e, t) => "".concat(v.Z.Messages.EMOJI, " ").concat(t)).replace(/<\/([^\s]+?):(\d+)>/g, (e, t) => "/".concat(t)).replace(/<t:(\d+):([A-Z]|[a-z])>/g, (e, t, n) => {
      let s = o.Qh[n],
        l = 1e3 * parseInt(t, 10),
        a = i()(l);
      return null != s ? s(a) : a.format()
    });
  return null == s ? v.Z.Messages.MESSAGE_TTS.format({
    username: t,
    body: a
  }) : v.Z.Messages.MESSAGE_TTS_REPLY.format({
    username: t,
    body: a,
    replyUsername: s
  })
}

function y() {
  if (!a.Zh) return !1;
  let e = u.default.locale;
  if (null == M) {
    var t;
    M = null === (t = window.speechSynthesis) || void 0 === t ? void 0 : t.getVoices()
  }
  let n = M.filter(t => t.lang === e || t.lang.slice(0, e.length) === e || !1);
  x = n.length > 0 ? n[0] : null
}
async function j(e, t, n, s, i) {
  let l = a.e6(e, n);
  null !== l && (null == x && y(), t ? await (0, f.NB)() : null == P || P.removeEventListener("end", f.NB), l.addEventListener("end", f.NB), null != s && l.addEventListener("start", s), null != i && l.addEventListener("end", i), P = l, a.iq(l, x))
}

function U(e, t, n, s, i) {
  j(e, t, i, () => {
    (0, f.Bo)(n, s)
  })
}

function G(e) {
  let {
    text: t,
    interrupt: n,
    maxLength: s,
    onStart: i,
    onEnd: l
  } = e;
  j(t, n, s, i, l)
}

function w() {
  return null !== P && P.removeEventListener("end", f.NB), a.M9(), P = null, !0
}

function k(e) {
  var t, n, s;
  let {
    message: i,
    channel: l
  } = e, a = i.type === O.uaV.REPLY ? c.Z.getMessageByReference(i.messageReference) : null, r = (null == a ? void 0 : a.state) === c.Y.LOADED ? null == a ? void 0 : null === (t = a.message) || void 0 === t ? void 0 : t.author : null, o = null != r ? null !== (n = I.ZP.getNick(l.guild_id, null == r ? void 0 : r.id)) && void 0 !== n ? n : A.ZP.getName(r) : null, u = l.getGuildId(), d = null !== (s = I.ZP.getNick(u, i.author.id)) && void 0 !== s ? s : A.ZP.getName(i.author);
  return U(b(i.content, d, u, o), !0, l.id, i.id), !0
}

function B(e) {
  var t, n, s, i, l, a;
  let {
    channelId: r,
    message: o,
    optimistic: c
  } = e;
  if (c || T.Z.isSelfDeaf()) return !1;
  let u = _.Z.getChannel(r);
  if (null == u) return !1;
  let m = N.Z.getChannelId(),
    C = h.ZP.getCurrentSidebarChannelId(m),
    f = r === m || r === C,
    Z = d.OW.getSetting() && o.tts && f,
    v = g.Z.getTTSType(),
    P = (null === (t = o.author) || void 0 === t ? void 0 : t.id) !== E.default.getId() && (v === O.PrB.ALL_CHANNELS || v === O.PrB.SELECTED_CHANNEL && f);
  if ((Z || P) && !p.Z.isBlockedForMessage(o)) {
    if (R.indexOf(o.id) >= 0) return !1;
    R.unshift(o.id) > 10 && R.pop();
    let e = u.getGuildId();
    if (null != e && S.ZP.getMutedChannels(e).has(r)) return !1;
    let t = null !== (l = null !== (i = I.ZP.getNick(e, null === (n = o.author) || void 0 === n ? void 0 : n.id)) && void 0 !== i ? i : A.ZP.getName(o.author)) && void 0 !== l ? l : "",
      c = o.type === O.uaV.REPLY ? null === (s = o.referenced_message) || void 0 === s ? void 0 : s.author : null,
      d = null != c ? null !== (a = I.ZP.getNick(e, null == c ? void 0 : c.id)) && void 0 !== a ? a : A.ZP.getName(c) : null;
    U(b(o.content, t, e, d), !1, u.id, o.id, L.f)
  }
  return !1
}

function H(e) {
  let {
    id: t,
    channelId: n
  } = e, s = Z.Z.currentMessage;
  return null != s && t === s.messageId && n === s.channelId && ((0, f.NB)(), !0)
}

function V() {
  T.Z.isSelfDeaf() && a.M9()
}
t.Z = {
  init() {
    l.Z.subscribe("SPEAK_TEXT", G), l.Z.subscribe("SPEAK_MESSAGE", k), l.Z.subscribe("STOP_SPEAKING", w), l.Z.subscribe("MESSAGE_CREATE", B), l.Z.subscribe("MESSAGE_DELETE", H), l.Z.subscribe("AUDIO_TOGGLE_SELF_DEAF", V), l.Z.subscribe("USER_SETTINGS_PROTO_UPDATE", y), l.Z.subscribe("I18N_LOAD_SUCCESS", y)
  }
}
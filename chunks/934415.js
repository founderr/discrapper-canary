"use strict";
n.d(t, {
  EO: function() {
    return w
  },
  LY: function() {
    return b
  },
  Nj: function() {
    return s.Z
  },
  a5: function() {
    return y
  },
  c4: function() {
    return P
  },
  g7: function() {
    return M
  },
  jZ: function() {
    return C
  },
  oQ: function() {
    return g
  },
  rX: function() {
    return v
  },
  rY: function() {
    return D
  },
  rt: function() {
    return L
  },
  wR: function() {
    return G
  },
  wl: function() {
    return U
  }
}), n(411104), n(653041), n(47120);
var i = n(149765),
  r = n(911969),
  s = n(90463),
  o = n(968358),
  a = n(874748),
  l = n(590415),
  u = n(131704),
  _ = n(592125),
  c = n(984933),
  d = n(496675),
  E = n(944486),
  I = n(938475),
  T = n(700785),
  h = n(709054),
  f = n(981631),
  S = n(474936),
  N = n(689938);
let {
  GUILD_VOICE: A,
  GUILD_CATEGORY: m,
  GUILD_STAGE_VOICE: O
} = f.d4z;

function p(e, t) {
  return e === t || e === m
}

function R(e, t, n) {
  let r = T.Hn;
  return ((0, u.r8)(t) || t === m) && (r = i.IH(r, f.Plq.VIEW_CHANNEL)), (p(t, A) || p(t, O)) && (r = i.IH(r, f.Plq.VIEW_CHANNEL), r = i.IH(r, f.Plq.CONNECT)), {
    id: e,
    type: n,
    deny: T.Hn,
    allow: r
  }
}

function g(e, t, n) {
  let s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    o = [];
  if (n.length > 0 || s) {
    var a, l, _;
    let n;
    o.push((a = e, l = t, _ = r.BN.ROLE, n = T.Hn, ((0, u.r8)(l) || l === m) && (n = i.IH(n, f.Plq.VIEW_CHANNEL)), p(l, A) && (n = i.IH(n, f.Plq.VIEW_CHANNEL), n = i.IH(n, f.Plq.CONNECT)), {
      id: a,
      type: _,
      allow: T.Hn,
      deny: n
    }))
  }
  return n.forEach(e => {
    o.push(R(e, t, r.BN.ROLE))
  }), o
}

function C(e, t) {
  return R(e, t, r.BN.MEMBER)
}

function v(e, t) {
  return R(e, t, r.BN.ROLE)
}

function L(e) {
  return [{
    id: e,
    type: r.BN.ROLE,
    deny: f.Plq.SEND_MESSAGES,
    allow: T.Hn
  }]
}

function D(e, t, n) {
  var i, r;
  let s = e.getGuildId(),
    a = n.getGuild(s),
    l = null !== (i = null == a ? void 0 : a.maxVideoChannelUsers) && void 0 !== i ? i : -1,
    u = null !== (r = null == a ? void 0 : a.maxStageVideoChannelUsers) && void 0 !== r ? r : -1,
    _ = I.ZP.countVoiceStatesForChannel(e.id),
    c = I.ZP.getVoiceStatesForChannel(e),
    E = d.Z.can(f.Plq.MOVE_MEMBERS, e) && d.Z.can(f.Plq.CONNECT, e),
    T = !1;
  T = e.type === O ? null != s && (t.hasVideo(e.id) || (0, o.a)(c)) && u > 0 && _ >= u : null != s && t.hasVideo(e.id) && l > 0 && _ >= l + (E ? 1 : 0);
  let h = e.userLimit > 0 && _ >= e.userLimit;
  return T || h && !E
}

function M(e, t) {
  return t.isGuildStageVoice() ? f.epw : null == e ? f.eWB : Math.max(e.hasFeature(f.oNc.VIP_REGIONS) ? S.HO[f.Eu4.TIER_3].limits.bitrate : f.eWB, S.HO[e.premiumTier].limits.bitrate)
}

function P(e) {
  let {
    channels: t,
    selectedChannelId: n,
    selectedVoiceChannelId: i,
    voiceStates: r
  } = e;
  return (function(e) {
    let {
      channels: t,
      selectedChannelId: n,
      selectedVoiceChannelId: i,
      voiceStates: r
    } = e, s = [];
    return t.forEach(e => {
      if (e.id === i || e.id === n) return;
      let t = r[e.id];
      null != t && (e.isGuildStageVoice() ? t.forEach(e => {
        (0, l.gf)(e.voiceState) === l.xO.ON_STAGE && s.push(e)
      }) : t.forEach(e => s.push(e)))
    }), s
  })({
    channels: t,
    selectedChannelId: n,
    selectedVoiceChannelId: i,
    voiceStates: r
  }).map(e => e.user)
}

function y(e) {
  let {
    type: t
  } = e;
  switch (t) {
    case f.d4z.DM:
      return N.Z.Messages.DM;
    case f.d4z.GROUP_DM:
      return N.Z.Messages.GROUP_DM;
    case f.d4z.GUILD_TEXT:
      return N.Z.Messages.TEXT_CHANNEL;
    case f.d4z.GUILD_FORUM:
      return N.Z.Messages.FORUM_CHANNEL;
    case f.d4z.GUILD_MEDIA:
      return N.Z.Messages.MEDIA_CHANNEL;
    case f.d4z.GUILD_VOICE:
      return N.Z.Messages.VOICE_CHANNEL;
    case f.d4z.GUILD_STAGE_VOICE:
      return N.Z.Messages.STAGE_CHANNEL;
    case f.d4z.GUILD_ANNOUNCEMENT:
      return N.Z.Messages.NEWS_CHANNEL;
    case f.d4z.GUILD_STORE:
      return N.Z.Messages.STORE_CHANNEL;
    case f.d4z.GUILD_CATEGORY:
      return N.Z.Messages.CATEGORY;
    default:
      return null
  }
}

function U(e) {
  if (null == e) return "text";
  let t = e.isMediaChannel();
  if (e.type === f.d4z.GUILD_VOICE) return d.Z.can(f.Plq.CONNECT, e) ? "voice" : "voice-locked";
  if (e.type === f.d4z.GUILD_STAGE_VOICE) return d.Z.can(f.Plq.CONNECT, e) ? "stage" : "stage-locked";
  if (u.Ec.has(e.type)) return e.isForumPost() ? "post" : "thread";
  else if (e.type === f.d4z.GUILD_FORUM) return t ? "media" : "forum";
  else if (e.type === f.d4z.GUILD_MEDIA) return "media";
  else if (u.sR.has(e.type)) return "text"
}

function b(e) {
  let t;
  let n = _.Z.getChannel(E.Z.getLastSelectedChannelId());
  if (null != n && n.getGuildId() === e && n.type === f.d4z.GUILD_TEXT) t = n.id;
  else {
    let n = c.ZP.getDefaultChannel(e);
    t = null != n ? n.id : null
  }
  return f.Z5c.CHANNEL(e, t)
}

function G(e, t, n, i) {
  return "".concat(location.protocol, "//").concat(location.host).concat(f.Z5c.CHANNEL(e, t, n)).concat(null == i ? "" : "?summaryId=".concat(i))
}

function w(e, t, n, i) {
  let r;
  let s = e.getGuildId(),
    o = (0, a.BC)(s, t);
  if (null != t && o) {
    var l, u, _, c;
    l = s, u = t.id, _ = e.id, c = h.default.castChannelIdAsMessageId(e.id), r = null == l || null == u || null == _ ? G(l, u, c) : "".concat(location.protocol, "//").concat(location.host).concat(f.Z5c.CHANNEL_THREAD_VIEW(l, u, _, c))
  } else r = null != i ? i : G(s, e.id, n);
  return r
}
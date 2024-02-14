"use strict";
n.r(t), n.d(t, {
  permissionOverwritesForRoles: function() {
    return O
  },
  permissionOverwriteForUser: function() {
    return h
  },
  permissionOverwriteForRole: function() {
    return P
  },
  permissionOverwritesForAnnouncement: function() {
    return g
  },
  isChannelFull: function() {
    return m
  },
  sanitizeGuildTextChannelName: function() {
    return l.default
  },
  getBitrateLimit: function() {
    return y
  },
  computeSummarizedVoiceUsers: function() {
    return D
  },
  channelTypeString: function() {
    return v
  },
  getMentionIconType: function() {
    return U
  },
  previousTextChannelRouteForGuild: function() {
    return M
  },
  getChannelPermalink: function() {
    return G
  },
  getChannelLinkToCopy: function() {
    return B
  }
}), n("70102"), n("424973"), n("222007");
var r = n("316693"),
  i = n("798609"),
  l = n("364480"),
  u = n("89073"),
  a = n("711326"),
  o = n("808422"),
  s = n("233069"),
  d = n("42203"),
  _ = n("923959"),
  E = n("957255"),
  c = n("18494"),
  I = n("316133"),
  S = n("991170"),
  T = n("49111"),
  f = n("646718"),
  N = n("782340");
let {
  GUILD_VOICE: p,
  GUILD_CATEGORY: A,
  GUILD_STAGE_VOICE: R
} = T.ChannelTypes;

function C(e, t) {
  return e === t || e === A
}

function L(e, t, n) {
  let i = S.default.NONE;
  return ((0, s.isGuildSelectableChannelType)(t) || t === A) && (i = r.default.add(i, T.Permissions.VIEW_CHANNEL)), (C(t, p) || C(t, R)) && (i = r.default.add(i, T.Permissions.VIEW_CHANNEL), i = r.default.add(i, T.Permissions.CONNECT)), {
    id: e,
    type: n,
    deny: S.default.NONE,
    allow: i
  }
}

function O(e, t, n) {
  let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    u = [];
  if (n.length > 0 || l) {
    var a, o, d;
    let n;
    u.push((a = e, o = t, d = i.PermissionOverwriteType.ROLE, n = S.default.NONE, ((0, s.isGuildSelectableChannelType)(o) || o === A) && (n = r.default.add(n, T.Permissions.VIEW_CHANNEL)), C(o, p) && (n = r.default.add(n, T.Permissions.VIEW_CHANNEL), n = r.default.add(n, T.Permissions.CONNECT)), {
      id: a,
      type: d,
      allow: S.default.NONE,
      deny: n
    }))
  }
  return n.forEach(e => {
    u.push(L(e, t, i.PermissionOverwriteType.ROLE))
  }), u
}

function h(e, t) {
  return L(e, t, i.PermissionOverwriteType.MEMBER)
}

function P(e, t) {
  return L(e, t, i.PermissionOverwriteType.ROLE)
}

function g(e) {
  return [{
    id: e,
    type: i.PermissionOverwriteType.ROLE,
    deny: T.Permissions.SEND_MESSAGES,
    allow: S.default.NONE
  }]
}

function m(e, t, n) {
  var r, i;
  let l = e.getGuildId(),
    a = n.getGuild(l),
    o = null !== (r = null == a ? void 0 : a.maxVideoChannelUsers) && void 0 !== r ? r : -1,
    s = null !== (i = null == a ? void 0 : a.maxStageVideoChannelUsers) && void 0 !== i ? i : -1,
    d = I.default.countVoiceStatesForChannel(e.id),
    _ = I.default.getVoiceStatesForChannel(e),
    c = E.default.can(T.Permissions.MOVE_MEMBERS, e) && E.default.can(T.Permissions.CONNECT, e),
    S = !1;
  S = e.type === R ? null != l && (t.hasVideo(e.id) || (0, u.hasStream)(_)) && s > 0 && d >= s : null != l && t.hasVideo(e.id) && o > 0 && d >= o + (c ? 1 : 0);
  let f = e.userLimit > 0 && d >= e.userLimit;
  return S || f && !c
}

function y(e, t) {
  return t.isGuildStageVoice() ? T.BITRATE_DEFAULT : null == e ? T.BITRATE_MAX : Math.max(e.hasFeature(T.GuildFeatures.VIP_REGIONS) ? f.BoostedGuildFeatures[T.BoostedGuildTiers.TIER_3].limits.bitrate : T.BITRATE_MAX, f.BoostedGuildFeatures[e.premiumTier].limits.bitrate)
}

function D(e) {
  let {
    channels: t,
    selectedChannelId: n,
    selectedVoiceChannelId: r,
    voiceStates: i
  } = e, l = function(e) {
    let {
      channels: t,
      selectedChannelId: n,
      selectedVoiceChannelId: r,
      voiceStates: i
    } = e, l = [];
    return t.forEach(e => {
      if (e.id === r || e.id === n) return;
      let t = i[e.id];
      null != t && (e.isGuildStageVoice() ? t.forEach(e => {
        (0, o.getAudienceRequestToSpeakState)(e.voiceState) === o.RequestToSpeakStates.ON_STAGE && l.push(e)
      }) : t.forEach(e => l.push(e)))
    }), l
  }({
    channels: t,
    selectedChannelId: n,
    selectedVoiceChannelId: r,
    voiceStates: i
  });
  return l.map(e => e.user)
}

function v(e) {
  let {
    type: t
  } = e;
  switch (t) {
    case T.ChannelTypes.DM:
      return N.default.Messages.DM;
    case T.ChannelTypes.GROUP_DM:
      return N.default.Messages.GROUP_DM;
    case T.ChannelTypes.GUILD_TEXT:
      return N.default.Messages.TEXT_CHANNEL;
    case T.ChannelTypes.GUILD_FORUM:
      return N.default.Messages.FORUM_CHANNEL;
    case T.ChannelTypes.GUILD_MEDIA:
      return N.default.Messages.MEDIA_CHANNEL;
    case T.ChannelTypes.GUILD_VOICE:
      return N.default.Messages.VOICE_CHANNEL;
    case T.ChannelTypes.GUILD_STAGE_VOICE:
      return N.default.Messages.STAGE_CHANNEL;
    case T.ChannelTypes.GUILD_ANNOUNCEMENT:
      return N.default.Messages.NEWS_CHANNEL;
    case T.ChannelTypes.GUILD_STORE:
      return N.default.Messages.STORE_CHANNEL;
    case T.ChannelTypes.GUILD_CATEGORY:
      return N.default.Messages.CATEGORY;
    default:
      return null
  }
}

function U(e) {
  if (null == e) return "text";
  let t = e.isMediaChannel();
  if (e.type === T.ChannelTypes.GUILD_VOICE) return E.default.can(T.Permissions.CONNECT, e) ? "voice" : "voice-locked";
  if (e.type === T.ChannelTypes.GUILD_STAGE_VOICE) return E.default.can(T.Permissions.CONNECT, e) ? "stage" : "stage-locked";
  if (s.THREAD_CHANNEL_TYPES.has(e.type)) return e.isForumPost() ? "post" : "thread";
  else if (e.type === T.ChannelTypes.GUILD_FORUM) return t ? "media" : "forum";
  else if (e.type === T.ChannelTypes.GUILD_MEDIA) return "media";
  else if (s.TEXT_CHANNEL_TYPES.has(e.type)) return "text"
}

function M(e) {
  let t;
  let n = d.default.getChannel(c.default.getLastSelectedChannelId());
  if (null != n && n.getGuildId() === e && n.type === T.ChannelTypes.GUILD_TEXT) t = n.id;
  else {
    let n = _.default.getDefaultChannel(e);
    t = null != n ? n.id : null
  }
  return T.Routes.CHANNEL(e, t)
}

function G(e, t, n, r) {
  return "".concat(location.protocol, "//").concat(location.host).concat(T.Routes.CHANNEL(e, t, n)).concat(null == r ? "" : "?summaryId=".concat(r))
}

function B(e, t, n, r) {
  let i;
  let l = e.getGuildId(),
    u = (0, a.canUseMediaPostEmbed)(l, t);
  if (null != t && u) {
    var o, s, d, _;
    o = l, s = t.id, d = e.id, _ = e.id, i = null == o || null == s || null == d ? G(o, s, _) : "".concat(location.protocol, "//").concat(location.host).concat(T.Routes.CHANNEL_THREAD_VIEW(o, s, d, _))
  } else i = null != r ? r : G(l, e.id, n);
  return i
}
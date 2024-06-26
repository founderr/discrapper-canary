"use strict";
n.d(t, {
  Fw: function() {
    return r
  },
  ZP: function() {
    return T
  },
  s5: function() {
    return h
  }
});
var i, r, s = n(442837),
  o = n(592125),
  a = n(430824),
  l = n(496675),
  u = n(594174),
  _ = n(979651),
  c = n(934415),
  d = n(782769),
  E = n(983695),
  I = n(981631);

function T(e) {
  var t, n, i;
  let {
    userId: r,
    activity: s,
    application: o,
    channelId: a,
    currentUser: l,
    isActivitiesEnabledForCurrentPlatform: u,
    ChannelStore: _,
    VoiceStateStore: d,
    PermissionStore: T,
    GuildStore: h
  } = e;
  if (null == r) return 8;
  if ((null == l ? void 0 : l.nsfwAllowed) === !1 && (null == o ? void 0 : null === (t = o.embeddedActivityConfig) || void 0 === t ? void 0 : t.requires_age_gate) === !0) return 7;
  if (!u) return 5;
  if (!(0, E.Z)(null == o ? void 0 : null === (n = o.embeddedActivityConfig) || void 0 === n ? void 0 : n.supported_platforms)) return 6;
  let f = null != a ? a : null === (i = d.getVoiceStateForSession(r, null == s ? void 0 : s.session_id)) || void 0 === i ? void 0 : i.channelId;
  if (null == f) return 4;
  let S = _.getChannel(a);
  if (null == S) return 4;
  let N = S.getGuildId();
  if (!S.isPrivate()) {
    if (null == N) return 10;
    let e = h.getGuild(N);
    if ((null == e ? void 0 : e.afkChannelId) === S.id) return 9;
    let t = d.getCurrentClientVoiceChannelId(S.getGuildId()) === f,
      n = (0, c.rY)(S, d, h),
      i = T.can(I.Plq.CONNECT, S);
    if (!T.can(I.Plq.USE_EMBEDDED_ACTIVITIES, S)) return 1;
    if (S.isVocal() && !t) {
      if (n) return 3;
      if (!i) return 2
    }
  }
  return 0
}

function h(e) {
  let {
    userId: t,
    activity: n,
    channelId: i,
    application: r
  } = e, c = (0, d.z)(null != i ? i : void 0), E = (0, s.e7)([u.default], () => u.default.getCurrentUser());
  return (0, s.e7)([o.Z, _.Z, l.Z, a.Z], () => T({
    userId: t,
    activity: n,
    application: r,
    channelId: i,
    currentUser: E,
    isActivitiesEnabledForCurrentPlatform: c,
    ChannelStore: o.Z,
    VoiceStateStore: _.Z,
    PermissionStore: l.Z,
    GuildStore: a.Z
  }), [n, r, i, E, c, t])
}(i = r || (r = {}))[i.CAN_JOIN = 0] = "CAN_JOIN", i[i.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1] = "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", i[i.NO_CHANNEL_CONNECT_PERMISSION = 2] = "NO_CHANNEL_CONNECT_PERMISSION", i[i.CHANNEL_FULL = 3] = "CHANNEL_FULL", i[i.NO_CHANNEL = 4] = "NO_CHANNEL", i[i.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 5] = "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS", i[i.ACTIVITY_NOT_SUPPORTED_ON_OS = 6] = "ACTIVITY_NOT_SUPPORTED_ON_OS", i[i.ACTIVITY_AGE_GATED = 7] = "ACTIVITY_AGE_GATED", i[i.NO_USER = 8] = "NO_USER", i[i.IS_AFK_CHANNEL = 9] = "IS_AFK_CHANNEL", i[i.NO_GUILD = 10] = "NO_GUILD"
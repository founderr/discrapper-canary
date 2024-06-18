"use strict";
n.d(t, {
  Z: function() {
    return g
  }
});
var i = n(668781),
  r = n(812206),
  s = n(835873),
  o = n(592125),
  a = n(430824),
  l = n(496675),
  u = n(594174),
  _ = n(979651),
  c = n(585483),
  d = n(867176),
  E = n(337682),
  I = n(566620),
  T = n(882347),
  h = n(307091),
  S = n(374065),
  f = n(917107),
  N = n(89425),
  A = n(275920),
  m = n(197386),
  O = n(701488),
  R = n(981631),
  p = n(689938);
async function g(e) {
  var t;
  let {
    targetApplicationId: n,
    currentEmbeddedApplication: g,
    locationObject: C,
    channelId: v,
    guildId: L,
    embeddedActivitiesManager: D,
    analyticsLocations: M
  } = e, P = a.Z.getGuild(L), y = u.default.getCurrentUser();
  if (null == n) return !1;
  let U = null !== (t = r.Z.getApplication(n)) && void 0 !== t ? t : await (0, h.Z)(n, v);
  if (null == v) return c.S.dispatch(R.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, {
    applicationId: n
  }), !1;
  let b = o.Z.getChannel(v);
  if (null == b || null == P && !b.isPrivate() || null == y || null == U) return !1;
  let G = null != v ? (0, S.e4)({
    channelId: v,
    ChannelStore: o.Z,
    GuildStore: a.Z,
    PermissionStore: l.Z,
    VoiceStateStore: _.Z
  }) : S.jy.NO_CHANNEL;
  if (G !== S.jy.CAN_LAUNCH) return G === S.jy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION ? (0, s.w)() : G === S.jy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS && i.Z.show({
    title: p.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC,
    body: p.Z.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS,
    hideActionSheet: !1
  }), !1;
  if (!await (0, T.p)({
      applicationId: U.id,
      application: U,
      channel: b,
      currentEmbeddedApplication: g,
      embeddedActivitiesManager: D,
      user: y
    })) return !1;
  let w = (0, f.Z)(v),
    k = O.wP.includes(b.type);
  if (w) {
    if (!await (0, N.Z)({
        channelId: v,
        bypassChangeModal: null != g
      })) return !1
  } else if (!(0, d.WS)(b, !0, "handleStartEmbeddedActivity") || !k) return !1;
  return I.J$(v, U.id, M), (0, m.Z)(L, v), (0, A.Z)({
    type: R.q5t.LAUNCH,
    userId: y.id,
    applicationId: U.id,
    locationObject: C,
    analyticsLocations: M
  }), E.tZ(U.id), !0
}
"use strict";
n.d(t, {
  Z: function() {
    return h
  }
});
var i = n(812206),
  r = n(592125),
  s = n(944486),
  o = n(594174),
  a = n(867176),
  l = n(566620),
  u = n(882347),
  _ = n(917107),
  c = n(89425),
  d = n(275920),
  E = n(197386),
  I = n(701488),
  T = n(981631);
async function h(e) {
  let {
    applicationId: t,
    currentEmbeddedApplication: n,
    activityChannelId: h,
    locationObject: f,
    embeddedActivitiesManager: S,
    analyticsLocations: A
  } = e, N = r.Z.getChannel(h), m = null == N ? void 0 : N.getGuildId(), O = null == m || "" === m, R = o.default.getCurrentUser();
  if (null == N || O && !N.isPrivate() || null == h || null == R) return Promise.resolve(!1);
  if (s.Z.getVoiceChannelId() === h && (null == n ? void 0 : n.id) === t) return (0, E.Z)(m, h), Promise.resolve(!0);
  if (!await (0, u.p)({
      applicationId: t,
      application: i.Z.getApplication(t),
      channel: N,
      currentEmbeddedApplication: n,
      embeddedActivitiesManager: S,
      user: R
    })) return !1;
  let p = (0, _.Z)(N.id),
    g = I.wP.includes(N.type);
  if (p) {
    if (!await (0, c.Z)({
        channelId: N.id,
        bypassChangeModal: null != n
      })) return !1
  } else if (!(0, a.WS)(N, !1, "joinEmbeddedActivity") || !g) return !1;
  return (0, E.Z)(m, h), (0, l.J$)(h, t, A), (0, d.Z)({
    type: T.q5t.JOIN,
    userId: R.id,
    applicationId: t,
    locationObject: f,
    analyticsLocations: A
  }), !0
}
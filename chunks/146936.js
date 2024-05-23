"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
});
var i = n("668781"),
  r = n("812206"),
  s = n("835873"),
  a = n("592125"),
  o = n("430824"),
  l = n("496675"),
  u = n("594174"),
  d = n("979651"),
  _ = n("585483"),
  c = n("867176"),
  E = n("337682"),
  I = n("566620"),
  T = n("882347"),
  f = n("307091"),
  S = n("374065"),
  h = n("917107"),
  A = n("89425"),
  m = n("275920"),
  N = n("197386"),
  p = n("701488"),
  O = n("981631"),
  C = n("689938");
async function R(e) {
  var t;
  let {
    targetApplicationId: n,
    currentEmbeddedApplication: R,
    locationObject: g,
    channelId: L,
    guildId: v,
    embeddedActivitiesManager: D,
    analyticsLocations: M
  } = e, y = o.default.getGuild(v), P = u.default.getCurrentUser();
  if (null == n) return !1;
  let U = null !== (t = r.default.getApplication(n)) && void 0 !== t ? t : await (0, f.default)(n, L);
  if (null == L) return _.ComponentDispatch.dispatch(O.ComponentActions.SHOW_ACTIVITIES_CHANNEL_SELECTOR, {
    applicationId: n
  }), !1;
  let b = a.default.getChannel(L);
  if (null == b || null == y && !b.isPrivate() || null == P || null == U) return !1;
  let G = null != L ? (0, S.getEmbeddedActivityLaunchability)({
    channelId: L,
    ChannelStore: a.default,
    GuildStore: o.default,
    PermissionStore: l.default,
    VoiceStateStore: d.default
  }) : S.EmbeddedActivityLaunchability.NO_CHANNEL;
  if (G !== S.EmbeddedActivityLaunchability.CAN_LAUNCH) return G === S.EmbeddedActivityLaunchability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION ? (0, s.showActivitiesInvalidPermissionsAlert)() : G === S.EmbeddedActivityLaunchability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS && i.default.show({
    title: C.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC,
    body: C.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS,
    hideActionSheet: !1
  }), !1;
  if (!await (0, T.confirmActivityLaunchChecks)({
      applicationId: U.id,
      application: U,
      channel: b,
      currentEmbeddedApplication: R,
      embeddedActivitiesManager: D,
      user: P
    })) return !1;
  let w = (0, h.default)(L),
    k = p.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES.includes(b.type);
  if (w) {
    if (!await (0, A.default)({
        channelId: L,
        bypassChangeModal: null != R
      })) return !1
  } else if (!(0, c.isActivitiesInTextEnabled)(b, !0, "handleStartEmbeddedActivity") || !k) return !1;
  return I.startEmbeddedActivity(L, U.id, M), (0, N.default)(v, L), (0, m.default)({
    type: O.AnalyticsGameOpenTypes.LAUNCH,
    userId: P.id,
    applicationId: U.id,
    locationObject: g,
    analyticsLocations: M
  }), E.markActivityUsed(U.id), !0
}
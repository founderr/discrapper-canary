"use strict";
i.r(t), i.d(t, {
  default: function() {
    return p
  }
});
var n = i("404118"),
  l = i("645999"),
  a = i("42203"),
  u = i("305961"),
  r = i("957255"),
  d = i("697218"),
  s = i("659500"),
  o = i("427953"),
  c = i("898065"),
  f = i("550766"),
  _ = i("191225"),
  E = i("544805"),
  I = i("370507"),
  A = i("943349"),
  T = i("420444"),
  C = i("541473"),
  v = i("407908"),
  S = i("578708"),
  N = i("702173"),
  h = i("954016"),
  y = i("49111"),
  D = i("782340");

function p(e) {
  let {
    activityItem: t,
    currentActivity: i,
    locationObject: o,
    channelId: c,
    guildId: f,
    embeddedActivitiesManager: T,
    analyticsLocations: C
  } = e, v = u.default.getGuild(f), S = d.default.getCurrentUser(), h = _.default.getConnectedActivityChannelId(), p = a.default.getChannel(h);
  if (null == v && !(0, N.isPrivateChannelWithEnabledActivities)(c) || null == S || null == t) return Promise.resolve(!1);
  let {
    application: g,
    activity: L
  } = t;
  if (null == g) return Promise.resolve(!1);
  if (null == c) return s.ComponentDispatch.dispatch(y.ComponentActions.SHOW_ACTIVITIES_CHANNEL_SELECTOR, {
    applicationId: g.id
  }), Promise.resolve(!1);
  let m = null != c ? (0, A.getEmbeddedActivityLaunchability)({
    channelId: c,
    ChannelStore: a.default,
    GuildStore: u.default,
    PermissionStore: r.default
  }) : A.EmbeddedActivityLaunchability.NO_CHANNEL;
  if (m !== A.EmbeddedActivityLaunchability.CAN_LAUNCH) return m === A.EmbeddedActivityLaunchability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION ? (0, l.showActivitiesInvalidPermissionsAlert)() : m === A.EmbeddedActivityLaunchability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS && n.default.show({
    title: D.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC,
    body: D.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS,
    hideActionSheet: !1
  }), Promise.resolve(!1);
  let P = function() {
    let {
      bypassChangeVcModal: e
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      bypassChangeVcModal: !1
    }, t = L.requires_age_gate && null == S.nsfwAllowed;
    return t ? new Promise(t => {
      (0, E.confirmActivityAgeGate)({
        application: g,
        onAgree: () => t(O({
          channelId: c,
          guildId: null == v ? void 0 : v.id,
          locationObject: o,
          application: g,
          analyticsLocations: C,
          bypassChangeVcModal: e
        })),
        onDisagree: () => t(!1)
      })
    }) : O({
      channelId: c,
      guildId: null == v ? void 0 : v.id,
      locationObject: o,
      application: g,
      analyticsLocations: C,
      bypassChangeVcModal: e
    })
  };
  return null != i ? new Promise(e => {
    (0, I.default)(i, p, () => {
      T.leaveActivity({
        channelId: c,
        applicationId: i.id
      }), e(P({
        bypassChangeVcModal: !0
      }))
    }, () => e(!1))
  }) : P()
}
async function O(e) {
  let {
    channelId: t,
    guildId: i,
    locationObject: n,
    application: l,
    analyticsLocations: u,
    bypassChangeVcModal: r
  } = e, s = d.default.getCurrentUser(), _ = a.default.getChannel(t);
  if (null == s || null == _) return !1;
  let E = (0, T.default)(t),
    I = h.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES.includes(_.type);
  if (E) {
    let e = await (0, C.default)({
      channelId: t,
      bypassChangeModal: r
    });
    if (!e) return !1
  } else if (!(0, o.isActivitiesInTextEnabled)(_, "handleStartEmbeddedActivity") || !I) return !1;
  return f.startEmbeddedActivity(t, l.id, u), (0, S.default)(i, t), (0, v.default)({
    type: y.AnalyticsGameOpenTypes.LAUNCH,
    userId: s.id,
    applicationId: l.id,
    locationObject: n,
    analyticsLocations: u
  }), c.markActivityUsed(l.id), !0
}
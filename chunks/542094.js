"use strict";
l.r(t), l.d(t, {
  ActivityAction: function() {
    return i
  },
  default: function() {
    return g
  }
}), l("757143");
var i, n, a = l("442837"),
  u = l("911969"),
  d = l("906732"),
  r = l("835473"),
  o = l("592125"),
  s = l("358085"),
  c = l("317381"),
  f = l("638880"),
  p = l("146936"),
  v = l("619915"),
  E = l("761122"),
  A = l("361213"),
  m = l("716600"),
  y = l("952561"),
  S = l("778569"),
  h = l("701488");
(n = i || (i = {}))[n.START = 0] = "START", n[n.JOIN = 1] = "JOIN", n[n.LEAVE = 2] = "LEAVE";

function g(e) {
  let {
    activityItem: t,
    channel: l,
    guildId: i,
    locationObject: n,
    onActivityItemSelected: a,
    embeddedActivitiesManager: r,
    assetNames: o = ["embedded_cover"],
    backgroundResolution: m = 250
  } = e, {
    application: g,
    activity: b
  } = t, I = b.client_platform_config[(0, E.default)((0, s.getOS)())], T = null != I.label_until && Date.now() < Date.parse(I.label_until), N = (0, S.default)({
    applicationId: g.id,
    size: m,
    names: o
  }), C = null != b.activity_preview_video_asset_id ? (0, A.default)(g.id, b.activity_preview_video_asset_id) : null, D = (0, v.default)(l).find(e => {
    let {
      embeddedActivity: t
    } = e;
    return g.id === t.applicationId
  }), L = _({
    channelId: null == l ? void 0 : l.id,
    applicationId: g.id
  }), w = function(e) {
    let {
      applicationId: t,
      channelId: l,
      guildId: i,
      locationObject: n,
      embeddedActivitiesManager: a,
      onActivityItemSelectedProp: u
    } = e, r = _({
      channelId: l,
      applicationId: t
    }), o = (0, y.default)(), {
      analyticsLocations: s
    } = (0, d.default)();
    switch (r) {
      case 0:
        return () => {
          (0, p.default)({
            targetApplicationId: t,
            currentEmbeddedApplication: o,
            locationObject: n,
            guildId: i,
            channelId: l,
            embeddedActivitiesManager: a,
            analyticsLocations: s
          }).then(e => e && (null == u ? void 0 : u({
            applicationId: t
          })))
        };
      case 1:
        return () => {
          !c.default.isLaunchingActivity() && (0, f.default)({
            applicationId: t,
            currentEmbeddedApplication: o,
            activityChannelId: l,
            locationObject: n,
            embeddedActivitiesManager: a,
            analyticsLocations: s
          }).then(e => e && (null == u ? void 0 : u({
            applicationId: t
          })))
        };
      case 2:
        return () => {
          !c.default.isLaunchingActivity() && (null != l && a.leaveActivity({
            channelId: l,
            applicationId: t
          }), null == u || u({
            applicationId: t
          }))
        }
    }
  }({
    applicationId: t.application.id,
    channelId: null == l ? void 0 : l.id,
    guildId: i,
    locationObject: n,
    embeddedActivitiesManager: r,
    onActivityItemSelectedProp: a
  }), F = t.activity.client_platform_config[(0, E.default)((0, s.getOS)())].release_phase, O = h.STAFF_RELEASE_PHASES.includes(F) ? F.replace("_", " ").replace(/(^\w|\s\w)/g, e => e.toUpperCase()) : void 0;
  return {
    imageBackground: N,
    videoUrl: C,
    joinableEmbeddedApp: D,
    activityAction: L,
    onActivityItemSelected: w,
    labelType: T ? I.label_type : u.EmbeddedActivityLabelTypes.NONE,
    staffReleasePhase: O
  }
}

function _(e) {
  let {
    channelId: t,
    applicationId: l
  } = e, i = 0, n = (0, a.useStateFromStores)([o.default], () => o.default.getChannel(t)), u = (0, m.default)(), d = (0, y.default)(), s = (0, r.useGetOrFetchApplication)(l), c = (0, v.default)(n).find(e => {
    let {
      embeddedActivity: t
    } = e;
    return null != s && s.id === t.applicationId
  });
  return null == s ? i : (null != n && (null == u ? void 0 : u.channelId) === n.id && (null == d ? void 0 : d.id) === s.id ? i = 2 : null != c && (i = 1), i)
}
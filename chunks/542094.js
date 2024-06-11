"use strict";
n.r(t), n.d(t, {
  ActivityAction: function() {
    return i
  },
  default: function() {
    return N
  },
  useActivityAction: function() {
    return p
  },
  useOnActivityItemSelected: function() {
    return O
  }
}), n("757143");
var i, r, s = n("442837"),
  a = n("911969"),
  o = n("906732"),
  l = n("835473"),
  u = n("592125"),
  d = n("358085"),
  _ = n("317381"),
  c = n("638880"),
  E = n("146936"),
  I = n("619915"),
  T = n("761122"),
  f = n("361213"),
  S = n("716600"),
  h = n("952561"),
  A = n("778569"),
  m = n("701488");
(r = i || (i = {}))[r.START = 0] = "START", r[r.JOIN = 1] = "JOIN", r[r.LEAVE = 2] = "LEAVE";

function N(e) {
  let {
    activityItem: t,
    channel: n,
    guildId: i,
    locationObject: r,
    onActivityItemSelected: s,
    embeddedActivitiesManager: o,
    assetNames: l = ["embedded_cover"],
    backgroundResolution: u = 250
  } = e, {
    application: _,
    activity: c
  } = t, E = c.client_platform_config[(0, T.default)((0, d.getOS)())], S = null != E.label_until && Date.now() < Date.parse(E.label_until), h = (0, A.default)({
    applicationId: _.id,
    size: u,
    names: l
  }), N = null != c.activity_preview_video_asset_id ? (0, f.default)(_.id, c.activity_preview_video_asset_id) : null, C = (0, I.default)(n).find(e => {
    let {
      embeddedActivity: t
    } = e;
    return _.id === t.applicationId
  }), R = p({
    channelId: null == n ? void 0 : n.id,
    applicationId: _.id
  }), g = O({
    applicationId: t.application.id,
    channelId: null == n ? void 0 : n.id,
    guildId: i,
    locationObject: r,
    embeddedActivitiesManager: o,
    onActivityItemSelectedProp: s
  }), L = t.activity.client_platform_config[(0, T.default)((0, d.getOS)())].release_phase, v = m.STAFF_RELEASE_PHASES.includes(L) ? L.replace("_", " ").replace(/(^\w|\s\w)/g, e => e.toUpperCase()) : void 0;
  return {
    imageBackground: h,
    videoUrl: N,
    joinableEmbeddedApp: C,
    activityAction: R,
    onActivityItemSelected: g,
    labelType: S ? E.label_type : a.EmbeddedActivityLabelTypes.NONE,
    staffReleasePhase: v
  }
}

function p(e) {
  let {
    channelId: t,
    applicationId: n
  } = e, i = 0, r = (0, s.useStateFromStores)([u.default], () => u.default.getChannel(t)), a = (0, S.default)(), o = (0, h.default)(), d = (0, l.useGetOrFetchApplication)(n), _ = (0, I.default)(r).find(e => {
    let {
      embeddedActivity: t
    } = e;
    return null != d && d.id === t.applicationId
  });
  return null == d ? i : (null != r && (null == a ? void 0 : a.channelId) === r.id && (null == o ? void 0 : o.id) === d.id ? i = 2 : null != _ && (i = 1), i)
}

function O(e) {
  let {
    applicationId: t,
    channelId: n,
    guildId: i,
    locationObject: r,
    embeddedActivitiesManager: s,
    onActivityItemSelectedProp: a
  } = e, l = p({
    channelId: n,
    applicationId: t
  }), u = (0, h.default)(), {
    analyticsLocations: d
  } = (0, o.default)();
  switch (l) {
    case 0:
      return () => {
        (0, E.default)({
          targetApplicationId: t,
          currentEmbeddedApplication: u,
          locationObject: r,
          guildId: i,
          channelId: n,
          embeddedActivitiesManager: s,
          analyticsLocations: d
        }).then(e => e && (null == a ? void 0 : a({
          applicationId: t
        })))
      };
    case 1:
      return () => {
        !_.default.isLaunchingActivity() && (0, c.default)({
          applicationId: t,
          currentEmbeddedApplication: u,
          activityChannelId: n,
          locationObject: r,
          embeddedActivitiesManager: s,
          analyticsLocations: d
        }).then(e => e && (null == a ? void 0 : a({
          applicationId: t
        })))
      };
    case 2:
      return () => {
        !_.default.isLaunchingActivity() && (null != n && s.leaveActivity({
          channelId: n,
          applicationId: t
        }), null == a || a({
          applicationId: t
        }))
      }
  }
}
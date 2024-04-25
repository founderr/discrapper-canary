"use strict";
i.r(t), i.d(t, {
  ActivityAction: function() {
    return l
  },
  default: function() {
    return y
  }
}), i("757143");
var l, n, a = i("911969"),
  d = i("906732"),
  u = i("358085"),
  o = i("317381"),
  r = i("638880"),
  c = i("266820"),
  s = i("619915"),
  f = i("761122"),
  p = i("361213"),
  v = i("716600"),
  E = i("952561"),
  A = i("778569"),
  m = i("701488");
(n = l || (l = {})).START = "START", n.JOIN = "JOIN", n.LEAVE = "LEAVE";

function y(e) {
  let {
    activityItem: t,
    channel: i,
    guildId: l,
    locationObject: n,
    onActivityItemSelected: y,
    embeddedActivitiesManager: S,
    assetNames: _ = ["embedded_cover"],
    backgroundResolution: b = 250
  } = e, {
    analyticsLocations: h
  } = (0, d.default)(), {
    application: I,
    activity: g
  } = t, T = g.client_platform_config[(0, f.default)((0, u.getOS)())], N = null != T.label_until && Date.now() < Date.parse(T.label_until), C = (0, A.default)({
    applicationId: I.id,
    size: b,
    names: _
  }), D = null != g.activity_preview_video_asset_id ? (0, p.default)(I.id, g.activity_preview_video_asset_id) : null, L = (0, v.default)(), w = (0, E.default)(), O = (0, s.default)(i).find(e => {
    let {
      embeddedActivity: t
    } = e;
    return I.id === t.applicationId
  }), F = "START", M = () => {
    (0, c.default)({
      activityItem: t,
      currentEmbeddedApplication: w,
      locationObject: n,
      guildId: l,
      channelId: null == i ? void 0 : i.id,
      embeddedActivitiesManager: S,
      analyticsLocations: h
    }).then(e => e && (null == y ? void 0 : y({
      applicationId: I.id
    })))
  };
  null != i && (null == L ? void 0 : L.channelId) === i.id && (null == w ? void 0 : w.id) === I.id ? (F = "LEAVE", M = () => {
    !o.default.isLaunchingActivity() && (S.leaveActivity({
      channelId: i.id,
      applicationId: I.id
    }), null == y || y({
      applicationId: I.id
    }))
  }) : null != O && (F = "JOIN", M = () => {
    !o.default.isLaunchingActivity() && (0, r.default)({
      applicationId: O.embeddedActivity.applicationId,
      currentEmbeddedApplication: w,
      activityChannelId: null == i ? void 0 : i.id,
      locationObject: n,
      embeddedActivitiesManager: S,
      analyticsLocations: h
    }).then(e => e && (null == y ? void 0 : y({
      applicationId: I.id
    })))
  });
  let U = t.activity.client_platform_config[(0, f.default)((0, u.getOS)())].release_phase,
    x = m.STAFF_RELEASE_PHASES.includes(U) ? U.replace("_", " ").replace(/(^\w|\s\w)/g, e => e.toUpperCase()) : void 0;
  return {
    imageBackground: C,
    videoUrl: D,
    joinableEmbeddedApp: O,
    activityAction: F,
    onActivityItemSelected: M,
    labelType: N ? T.label_type : a.EmbeddedActivityLabelTypes.NONE,
    staffReleasePhase: x
  }
}
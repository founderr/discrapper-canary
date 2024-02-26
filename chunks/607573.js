"use strict";
i.r(t), i.d(t, {
  ActivityAction: function() {
    return l
  },
  default: function() {
    return E
  }
}), i("781738");
var l, a, n = i("798609"),
  r = i("685665"),
  u = i("773336"),
  o = i("191225"),
  d = i("706508"),
  c = i("986214"),
  s = i("575136"),
  f = i("334368"),
  p = i("525167"),
  v = i("577261"),
  m = i("698372"),
  b = i("969380"),
  A = i("954016");
(a = l || (l = {})).START = "START", a.JOIN = "JOIN", a.LEAVE = "LEAVE";

function E(e) {
  let {
    activityItem: t,
    channel: i,
    guildId: l,
    locationObject: a,
    onActivityItemSelected: E,
    embeddedActivitiesManager: h,
    assetNames: g,
    backgroundResolution: y = 250
  } = e, {
    analyticsLocations: S
  } = (0, r.default)(), {
    application: _,
    activity: T
  } = t, D = T.client_platform_config[(0, f.default)((0, u.getOS)())], I = null != D.label_until && Date.now() < Date.parse(D.label_until), N = (0, b.default)({
    applicationId: _.id,
    size: y,
    names: g
  }), C = null != T.activity_preview_video_asset_id ? (0, p.default)(_.id, T.activity_preview_video_asset_id) : null, P = (0, v.default)(), L = (0, m.default)(), O = (0, s.default)(i), M = O.find(e => {
    let {
      embeddedActivity: t
    } = e;
    return _.id === t.applicationId
  }), w = "START", x = () => {
    (0, c.default)({
      activityItem: t,
      currentActivity: L,
      locationObject: a,
      guildId: l,
      channelId: null == i ? void 0 : i.id,
      embeddedActivitiesManager: h,
      analyticsLocations: S
    }).then(e => e && (null == E ? void 0 : E({
      applicationId: _.id
    })))
  };
  null != i && (null == P ? void 0 : P.channelId) === i.id && (null == L ? void 0 : L.id) === _.id ? (w = "LEAVE", x = () => {
    !o.default.isLaunchingActivity() && (h.leaveActivity({
      channelId: i.id,
      applicationId: _.id
    }), null == E || E({
      applicationId: _.id
    }))
  }) : null != M && (w = "JOIN", x = () => {
    !o.default.isLaunchingActivity() && (0, d.default)({
      applicationId: M.embeddedActivity.applicationId,
      currentEmbeddedApplication: L,
      activityChannelId: null == i ? void 0 : i.id,
      locationObject: a,
      embeddedActivitiesManager: h,
      analyticsLocations: S
    }).then(e => e && (null == E ? void 0 : E({
      applicationId: _.id
    })))
  });
  let F = t.activity.client_platform_config[(0, f.default)((0, u.getOS)())].release_phase,
    B = A.STAFF_RELEASE_PHASES.includes(F),
    U = B ? F.replace("_", " ").replace(/(^\w|\s\w)/g, e => e.toUpperCase()) : void 0;
  return {
    imageBackground: N,
    videoUrl: C,
    joinableEmbeddedApp: M,
    activityAction: w,
    onActivityItemSelected: x,
    labelType: I ? D.label_type : n.EmbeddedActivityLabelTypes.NONE,
    staffReleasePhase: U
  }
}
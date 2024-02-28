"use strict";
l.r(t), l.d(t, {
  ActivityAction: function() {
    return i
  },
  default: function() {
    return y
  }
}), l("781738");
var i, n, a = l("798609"),
  d = l("685665"),
  u = l("773336"),
  o = l("191225"),
  r = l("706508"),
  c = l("986214"),
  s = l("575136"),
  f = l("334368"),
  p = l("525167"),
  v = l("577261"),
  A = l("698372"),
  E = l("969380"),
  m = l("954016");
(n = i || (i = {})).START = "START", n.JOIN = "JOIN", n.LEAVE = "LEAVE";

function y(e) {
  let {
    activityItem: t,
    channel: l,
    guildId: i,
    locationObject: n,
    onActivityItemSelected: y,
    embeddedActivitiesManager: S,
    assetNames: b,
    backgroundResolution: _ = 250
  } = e, {
    analyticsLocations: I
  } = (0, d.default)(), {
    application: g,
    activity: h
  } = t, T = h.client_platform_config[(0, f.default)((0, u.getOS)())], N = null != T.label_until && Date.now() < Date.parse(T.label_until), L = (0, E.default)({
    applicationId: g.id,
    size: _,
    names: b
  }), C = null != h.activity_preview_video_asset_id ? (0, p.default)(g.id, h.activity_preview_video_asset_id) : null, w = (0, v.default)(), D = (0, A.default)(), O = (0, s.default)(l), F = O.find(e => {
    let {
      embeddedActivity: t
    } = e;
    return g.id === t.applicationId
  }), M = "START", U = () => {
    (0, c.default)({
      activityItem: t,
      currentEmbeddedApplication: D,
      locationObject: n,
      guildId: i,
      channelId: null == l ? void 0 : l.id,
      embeddedActivitiesManager: S,
      analyticsLocations: I
    }).then(e => e && (null == y ? void 0 : y({
      applicationId: g.id
    })))
  };
  null != l && (null == w ? void 0 : w.channelId) === l.id && (null == D ? void 0 : D.id) === g.id ? (M = "LEAVE", U = () => {
    !o.default.isLaunchingActivity() && (S.leaveActivity({
      channelId: l.id,
      applicationId: g.id
    }), null == y || y({
      applicationId: g.id
    }))
  }) : null != F && (M = "JOIN", U = () => {
    !o.default.isLaunchingActivity() && (0, r.default)({
      applicationId: F.embeddedActivity.applicationId,
      currentEmbeddedApplication: D,
      activityChannelId: null == l ? void 0 : l.id,
      locationObject: n,
      embeddedActivitiesManager: S,
      analyticsLocations: I
    }).then(e => e && (null == y ? void 0 : y({
      applicationId: g.id
    })))
  });
  let W = t.activity.client_platform_config[(0, f.default)((0, u.getOS)())].release_phase,
    x = m.STAFF_RELEASE_PHASES.includes(W),
    P = x ? W.replace("_", " ").replace(/(^\w|\s\w)/g, e => e.toUpperCase()) : void 0;
  return {
    imageBackground: L,
    videoUrl: C,
    joinableEmbeddedApp: F,
    activityAction: M,
    onActivityItemSelected: U,
    labelType: N ? T.label_type : a.EmbeddedActivityLabelTypes.NONE,
    staffReleasePhase: P
  }
}
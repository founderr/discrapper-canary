"use strict";
i.r(t), i.d(t, {
  ActivityAction: function() {
    return l
  },
  default: function() {
    return h
  }
}), i("781738");
var l, a, n = i("798609"),
  r = i("685665"),
  o = i("773336"),
  d = i("550766"),
  u = i("191225"),
  c = i("706508"),
  s = i("986214"),
  f = i("575136"),
  p = i("334368"),
  v = i("525167"),
  m = i("577261"),
  b = i("698372"),
  A = i("969380"),
  E = i("954016");
(a = l || (l = {})).START = "START", a.JOIN = "JOIN", a.LEAVE = "LEAVE";

function h(e) {
  let {
    activityItem: t,
    channel: i,
    guildId: l,
    locationObject: a,
    onActivityItemSelected: h,
    embeddedActivitiesManager: g,
    assetNames: y,
    backgroundResolution: S = 250
  } = e, {
    analyticsLocations: _
  } = (0, r.default)(), {
    application: T,
    activity: D
  } = t, I = D.client_platform_config[(0, p.default)((0, o.getOS)())], N = null != I.label_until && Date.now() < Date.parse(I.label_until), C = (0, A.default)({
    applicationId: T.id,
    size: S,
    names: y
  }), P = null != D.activity_preview_video_asset_id ? (0, v.default)(T.id, D.activity_preview_video_asset_id) : null, L = (0, m.default)(), O = (0, b.default)(), M = (0, f.default)(i), w = M.find(e => {
    let {
      embeddedActivity: t
    } = e;
    return T.id === t.applicationId
  }), x = "START", F = () => {
    (0, s.default)({
      activityItem: t,
      currentActivity: O,
      locationObject: a,
      guildId: l,
      channelId: null == i ? void 0 : i.id,
      embeddedActivitiesManager: g,
      analyticsLocations: _
    }).then(e => e && (null == h ? void 0 : h({
      applicationId: T.id
    })))
  };
  null != i && (null == L ? void 0 : L.channelId) === i.id && (null == O ? void 0 : O.id) === T.id ? (x = "LEAVE", F = () => {
    !u.default.isLaunchingActivity() && ((0, d.stopEmbeddedActivity)({
      channelId: i.id,
      applicationId: T.id
    }), g.leaveActivity({
      channelId: i.id,
      applicationId: T.id
    }), null == h || h({
      applicationId: T.id
    }))
  }) : null != w && (x = "JOIN", F = () => {
    !u.default.isLaunchingActivity() && (0, c.default)({
      applicationId: w.embeddedActivity.applicationId,
      currentEmbeddedApplication: O,
      activityChannelId: null == i ? void 0 : i.id,
      locationObject: a,
      embeddedActivitiesManager: g,
      analyticsLocations: _
    }).then(e => e && (null == h ? void 0 : h({
      applicationId: T.id
    })))
  });
  let B = t.activity.client_platform_config[(0, p.default)((0, o.getOS)())].release_phase,
    U = E.STAFF_RELEASE_PHASES.includes(B),
    W = U ? B.replace("_", " ").replace(/(^\w|\s\w)/g, e => e.toUpperCase()) : void 0;
  return {
    imageBackground: C,
    videoUrl: P,
    joinableEmbeddedApp: w,
    activityAction: x,
    onActivityItemSelected: F,
    labelType: N ? I.label_type : n.EmbeddedActivityLabelTypes.NONE,
    staffReleasePhase: W
  }
}
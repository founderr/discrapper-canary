"use strict";
n.d(t, {
  JS: function() {
    return i
  },
  Qv: function() {
    return O
  },
  ZP: function() {
    return m
  },
  w1: function() {
    return p
  }
}), n(757143);
var i, r, s = n(442837),
  o = n(911969),
  a = n(906732),
  l = n(835473),
  u = n(592125),
  _ = n(358085),
  c = n(317381),
  d = n(638880),
  E = n(146936),
  I = n(619915),
  T = n(761122),
  h = n(361213),
  f = n(716600),
  S = n(952561),
  A = n(778569),
  N = n(701488);
(r = i || (i = {}))[r.START = 0] = "START", r[r.JOIN = 1] = "JOIN", r[r.LEAVE = 2] = "LEAVE";

function m(e) {
  let {
    activityItem: t,
    channel: n,
    guildId: i,
    locationObject: r,
    onActivityItemSelected: s,
    embeddedActivitiesManager: a,
    assetNames: l = ["embedded_cover"],
    backgroundResolution: u = 250
  } = e, {
    application: c,
    activity: d
  } = t, E = d.client_platform_config[(0, T.Z)((0, _.getOS)())], f = null != E.label_until && Date.now() < Date.parse(E.label_until), S = (0, A.Z)({
    applicationId: c.id,
    size: u,
    names: l
  }), m = null != d.activity_preview_video_asset_id ? (0, h.Z)(c.id, d.activity_preview_video_asset_id) : null, R = (0, I.ZP)(n).find(e => {
    let {
      embeddedActivity: t
    } = e;
    return c.id === t.applicationId
  }), g = O({
    channelId: null == n ? void 0 : n.id,
    applicationId: c.id
  }), C = p({
    applicationId: t.application.id,
    channelId: null == n ? void 0 : n.id,
    guildId: i,
    locationObject: r,
    embeddedActivitiesManager: a,
    onActivityItemSelectedProp: s
  }), v = t.activity.client_platform_config[(0, T.Z)((0, _.getOS)())].release_phase, L = N.eB.includes(v) ? v.replace("_", " ").replace(/(^\w|\s\w)/g, e => e.toUpperCase()) : void 0;
  return {
    imageBackground: S,
    videoUrl: m,
    joinableEmbeddedApp: R,
    activityAction: g,
    onActivityItemSelected: C,
    labelType: f ? E.label_type : o.ww.NONE,
    staffReleasePhase: L
  }
}

function O(e) {
  let {
    channelId: t,
    applicationId: n
  } = e, i = 0, r = (0, s.e7)([u.Z], () => u.Z.getChannel(t)), o = (0, f.Z)(), a = (0, S.Z)(), _ = (0, l.q)(n), c = (0, I.ZP)(r).find(e => {
    let {
      embeddedActivity: t
    } = e;
    return null != _ && _.id === t.applicationId
  });
  return null == _ ? i : (null != r && (null == o ? void 0 : o.channelId) === r.id && (null == a ? void 0 : a.id) === _.id ? i = 2 : null != c && (i = 1), i)
}

function p(e) {
  let {
    applicationId: t,
    channelId: n,
    guildId: i,
    locationObject: r,
    embeddedActivitiesManager: s,
    onActivityItemSelectedProp: o
  } = e, l = O({
    channelId: n,
    applicationId: t
  }), u = (0, S.Z)(), {
    analyticsLocations: _
  } = (0, a.ZP)();
  switch (l) {
    case 0:
      return () => {
        (0, E.Z)({
          targetApplicationId: t,
          currentEmbeddedApplication: u,
          locationObject: r,
          guildId: i,
          channelId: n,
          embeddedActivitiesManager: s,
          analyticsLocations: _
        }).then(e => e && (null == o ? void 0 : o({
          applicationId: t
        })))
      };
    case 1:
      return () => {
        !c.ZP.isLaunchingActivity() && (0, d.Z)({
          applicationId: t,
          currentEmbeddedApplication: u,
          activityChannelId: n,
          locationObject: r,
          embeddedActivitiesManager: s,
          analyticsLocations: _
        }).then(e => e && (null == o ? void 0 : o({
          applicationId: t
        })))
      };
    case 2:
      return () => {
        !c.ZP.isLaunchingActivity() && (null != n && s.leaveActivity({
          channelId: n,
          applicationId: t
        }), null == o || o({
          applicationId: t
        }))
      }
  }
}
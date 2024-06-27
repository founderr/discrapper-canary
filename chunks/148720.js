"use strict";
n.d(t, {
  k: function() {
    return S
  }
});
var i = n(668781),
  r = n(728345),
  s = n(812206),
  o = n(835873),
  a = n(973616),
  l = n(592125),
  u = n(430824),
  _ = n(496675),
  c = n(594174),
  d = n(979651),
  E = n(317381),
  I = n(638880),
  T = n(782769),
  h = n(527805),
  f = n(689938);
async function S(e) {
  var t;
  let {
    channelId: n,
    applicationId: S,
    launchId: A,
    inputApplication: N,
    analyticsLocations: m,
    embeddedActivitiesManager: O
  } = e, R = E.ZP.getEmbeddedActivitiesForChannel(n).find(e => e.applicationId === S && (null == A || e.launchId === A)), p = N;
  if (null == p) {
    let e = await r.Z.fetchApplication(S);
    p = a.Z.createFromServer(e)
  }
  if (null == R || null == p) return;
  let g = c.default.getCurrentUser(),
    C = l.Z.getChannel(n),
    v = (0, h.ZP)({
      userId: null == g ? void 0 : g.id,
      application: p,
      channelId: n,
      currentUser: g,
      isActivitiesEnabledForCurrentPlatform: (0, T.a)(C),
      ChannelStore: l.Z,
      VoiceStateStore: d.Z,
      PermissionStore: _.Z,
      GuildStore: u.Z
    }),
    L = E.ZP.getSelfEmbeddedActivityForChannel(n),
    D = null == L ? void 0 : L.applicationId,
    M = null != D && null !== (t = s.Z.getApplication(D)) && void 0 !== t ? t : void 0;
  ! function(e) {
    let {
      embeddedActivityJoinability: t,
      handleCanJoin: n
    } = e;
    switch (t) {
      case h.Fw.CAN_JOIN:
        null == n || n();
        break;
      case h.Fw.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
        (0, o.w)();
        break;
      case h.Fw.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
        i.Z.show({
          title: f.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
          body: f.Z.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS,
          hideActionSheet: !1
        });
        break;
      case h.Fw.ACTIVITY_NOT_SUPPORTED_ON_OS:
        i.Z.show({
          title: f.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
          body: f.Z.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS,
          hideActionSheet: !1
        });
        break;
      case h.Fw.ACTIVITY_AGE_GATED:
        i.Z.show({
          title: f.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
          body: f.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE,
          hideActionSheet: !1
        });
        break;
      case h.Fw.NO_CHANNEL_CONNECT_PERMISSION:
      case h.Fw.CHANNEL_FULL:
      case h.Fw.NO_CHANNEL:
      case h.Fw.NO_USER:
        i.Z.show({
          title: f.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
          body: f.Z.Messages.ACTIVITIES_GENERIC_LAUNCH_FAILURE_DIALOG_BODY,
          hideActionSheet: !1
        })
    }
  }({
    embeddedActivityJoinability: v,
    handleCanJoin: async function e() {
      if (null != R) await (0, I.Z)({
        applicationId: R.applicationId,
        currentEmbeddedApplication: M,
        activityChannelId: n,
        locationObject: {},
        embeddedActivitiesManager: O,
        analyticsLocations: m
      })
    }
  })
}
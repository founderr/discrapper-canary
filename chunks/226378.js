"use strict";
n.r(t), n.d(t, {
  useJoinOrStartButtonState: function() {
    return d
  }
});
var s, a, l = n("470079"),
  i = n("867176"),
  r = n("527805"),
  o = n("592125"),
  u = n("689938");

function d(e) {
  let {
    embeddedActivity: t,
    joinability: n,
    currentEmbeddedActivity: s
  } = e;
  return l.useMemo(() => (function(e) {
    let {
      embeddedActivity: t,
      joinability: n,
      currentEmbeddedActivity: s
    } = e, a = null == t, l = {
      disabled: !1,
      isJoinAction: !a,
      text: a ? u.default.Messages.START : u.default.Messages.EMBEDDED_ACTIVITIES_JOIN,
      tooltip: void 0
    }, d = o.default.getChannel(null == t ? void 0 : t.channelId), c = (0, i.isActivitiesInTextEnabled)(d, "EmbeddedApplicationInstanceUtils");
    if (null != t && null != s && t.launchId === s.launchId) return {
      ...l,
      disabled: !0,
      text: u.default.Messages.EMBEDDED_ACTIVITIES_JOINED,
      tooltip: u.default.Messages.EMBEDDED_ACTIVITIES_ALREADY_IN_ACTIVITY
    };
    if (a) return {
      ...l,
      disabled: !c,
      tooltip: c ? void 0 : u.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_DISABLED_START
    };
    if (null != n && n !== r.EmbeddedActivityJoinability.CAN_JOIN) {
      let e;
      switch (n) {
        case r.EmbeddedActivityJoinability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
          e = u.default.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
          break;
        case r.EmbeddedActivityJoinability.ACTIVITY_AGE_GATED:
          e = u.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE;
          break;
        case r.EmbeddedActivityJoinability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
          e = u.default.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS;
          break;
        case r.EmbeddedActivityJoinability.ACTIVITY_NOT_SUPPORTED_ON_OS:
          e = u.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS;
          break;
        case r.EmbeddedActivityJoinability.CHANNEL_FULL:
          e = u.default.Messages.UNABLE_TO_JOIN_CHANNEL_FULL;
          break;
        case r.EmbeddedActivityJoinability.NO_CHANNEL_CONNECT_PERMISSION:
          e = u.default.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_NO_VOICE_PERMISSION;
          break;
        case r.EmbeddedActivityJoinability.NO_CHANNEL:
        case r.EmbeddedActivityJoinability.NO_GUILD:
        case r.EmbeddedActivityJoinability.NO_USER:
        case r.EmbeddedActivityJoinability.IS_AFK_CHANNEL:
          e = u.default.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_INVALID_CHANNEL
      }
      return {
        ...l,
        disabled: !0,
        tooltip: e
      }
    }
    return l
  })({
    embeddedActivity: t,
    joinability: n,
    currentEmbeddedActivity: s
  }), [t, n, s])
}(s = a || (a = {}))[s.ACTIVE = 0] = "ACTIVE", s[s.ENDED = 1] = "ENDED"
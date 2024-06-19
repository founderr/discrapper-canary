n.d(t, {
  NL: function() {
    return c
  }
});
var s, i, l = n(470079),
  a = n(867176),
  r = n(527805),
  o = n(689938);

function c(e) {
  let {
    embeddedActivity: t,
    joinability: n,
    currentEmbeddedActivity: s,
    channel: i
  } = e;
  return l.useMemo(() => (function(e) {
    let {
      embeddedActivity: t,
      joinability: n,
      currentEmbeddedActivity: s,
      channel: i
    } = e, l = null == t, c = {
      disabled: !1,
      isJoinAction: !l,
      text: l ? o.Z.Messages.START : o.Z.Messages.EMBEDDED_ACTIVITIES_JOIN,
      tooltip: void 0
    }, u = (0, a.WS)(i, l, "EmbeddedApplicationInstanceUtils");
    if (null != t && null != s && t.launchId === s.launchId) return {
      ...c,
      disabled: !0,
      text: o.Z.Messages.EMBEDDED_ACTIVITIES_JOINED,
      tooltip: o.Z.Messages.EMBEDDED_ACTIVITIES_ALREADY_IN_ACTIVITY
    };
    if (l) return {
      ...c,
      disabled: !u,
      tooltip: u ? void 0 : o.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_DISABLED_START
    };
    if (null != n && n !== r.Fw.CAN_JOIN) {
      let e;
      switch (n) {
        case r.Fw.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
          e = o.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
          break;
        case r.Fw.ACTIVITY_AGE_GATED:
          e = o.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE;
          break;
        case r.Fw.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
          e = o.Z.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS;
          break;
        case r.Fw.ACTIVITY_NOT_SUPPORTED_ON_OS:
          e = o.Z.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS;
          break;
        case r.Fw.CHANNEL_FULL:
          e = o.Z.Messages.UNABLE_TO_JOIN_CHANNEL_FULL;
          break;
        case r.Fw.NO_CHANNEL_CONNECT_PERMISSION:
          e = o.Z.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_NO_VOICE_PERMISSION;
          break;
        case r.Fw.NO_CHANNEL:
        case r.Fw.NO_GUILD:
        case r.Fw.NO_USER:
        case r.Fw.IS_AFK_CHANNEL:
          e = o.Z.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_INVALID_CHANNEL
      }
      return {
        ...c,
        disabled: !0,
        tooltip: e
      }
    }
    return c
  })({
    embeddedActivity: t,
    joinability: n,
    currentEmbeddedActivity: s,
    channel: i
  }), [t, n, s, i])
}(s = i || (i = {}))[s.ACTIVE = 0] = "ACTIVE", s[s.ENDED = 1] = "ENDED"
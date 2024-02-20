"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var i = n("446674"),
  a = n("913144"),
  l = n("271938"),
  s = n("42203"),
  r = n("42887"),
  o = n("957255"),
  u = n("945956"),
  d = n("800762"),
  c = n("49111");
let f = !0,
  E = !0;

function h() {
  let e;
  let t = u.default.getChannelId();
  if (null == t) e = !0;
  else {
    var n;
    let i = s.default.getChannel(t),
      a = d.default.getVoiceState(null == i ? void 0 : i.getGuildId(), l.default.getId());
    e = r.default.getMode() !== c.InputModes.VOICE_ACTIVITY || null == i || i.isPrivate() || i.isGuildStageVoice() || o.default.can(c.Permissions.USE_VAD, i) || null == (n = a) || !!n.suppress || null != n.requestToSpeakTimestamp || !1
  }
  if (f === e) return !1;
  E = e, f = e, a.default.dispatch({
    type: "SET_VAD_PERMISSION",
    hasPermission: f
  })
}
class _ extends i.default.Store {
  initialize() {
    this.waitFor(o.default, r.default, u.default, d.default)
  }
  shouldShowWarning() {
    return !E
  }
  canUseVoiceActivity() {
    return f
  }
}
_.displayName = "PermissionVADStore";
var C = new _(a.default, {
  RTC_CONNECTION_STATE: h,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: h,
  AUDIO_SET_MODE: h,
  CHANNEL_UPDATES: h,
  THREAD_UPDATE: h,
  GUILD_ROLE_UPDATE: h,
  GUILD_MEMBER_UPDATE: h,
  IMPERSONATE_UPDATE: h,
  IMPERSONATE_STOP: h,
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.some(e => {
      let {
        userId: t
      } = e;
      return t === l.default.getId() && h()
    })
  },
  AUDIO_TOGGLE_SELF_MUTE: function() {
    E = f
  },
  PERMISSION_CLEAR_VAD_WARNING: function() {
    E = !0
  }
})
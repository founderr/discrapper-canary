"use strict";
E.r(_), E.d(_, {
  default: function() {
    return R
  }
});
var t = E("446674"),
  o = E("913144"),
  n = E("271938"),
  r = E("42203"),
  a = E("42887"),
  i = E("957255"),
  I = E("945956"),
  s = E("800762"),
  T = E("49111");
let S = !0,
  N = !0;

function A() {
  let e;
  let _ = I.default.getChannelId();
  if (null == _) e = !0;
  else {
    var E;
    let t = r.default.getChannel(_),
      o = s.default.getVoiceState(null == t ? void 0 : t.getGuildId(), n.default.getId());
    e = a.default.getMode() !== T.InputModes.VOICE_ACTIVITY || null == t || t.isPrivate() || t.isGuildStageVoice() || i.default.can(T.Permissions.USE_VAD, t) || null == (E = o) || !!E.suppress || null != E.requestToSpeakTimestamp || !1
  }
  if (S === e) return !1;
  N = e, S = e, o.default.dispatch({
    type: "SET_VAD_PERMISSION",
    hasPermission: S
  })
}
class O extends t.default.Store {
  initialize() {
    this.waitFor(i.default, a.default, I.default, s.default)
  }
  shouldShowWarning() {
    return !N
  }
  canUseVoiceActivity() {
    return S
  }
}
O.displayName = "PermissionVADStore";
var R = new O(o.default, {
  RTC_CONNECTION_STATE: A,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: A,
  AUDIO_SET_MODE: A,
  CHANNEL_UPDATES: A,
  THREAD_UPDATE: A,
  GUILD_ROLE_UPDATE: A,
  GUILD_MEMBER_UPDATE: A,
  IMPERSONATE_UPDATE: A,
  IMPERSONATE_STOP: A,
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: _
    } = e;
    return _.some(e => {
      let {
        userId: _
      } = e;
      return _ === n.default.getId() && A()
    })
  },
  AUDIO_TOGGLE_SELF_MUTE: function() {
    N = S
  },
  PERMISSION_CLEAR_VAD_WARNING: function() {
    N = !0
  }
})
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("446674"),
  r = n("913144");
let i = !1,
  s = !1;
class l extends a.default.DeviceSettingsStore {
  initialize(e) {
    null != e && (i = e)
  }
  isMuted() {
    return i
  }
  shouldPlay() {
    return s
  }
  getUserAgnosticState() {
    return i
  }
}
l.displayName = "StageMusicStore", l.persistKey = "StageMusicStore";
var u = new l(r.default, {
  STAGE_MUSIC_MUTE: function(e) {
    let {
      muted: t
    } = e;
    i = t, s = !1
  },
  STAGE_MUSIC_PLAY: function(e) {
    let {
      play: t
    } = e;
    s = t
  },
  VOICE_CHANNEL_SELECT: function() {
    s = !1
  }
})
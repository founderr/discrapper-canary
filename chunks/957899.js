"use strict";
n(47120);
var i = n(147913),
  r = n(604375),
  s = n(202511),
  o = n(828354);
class a extends i.Z {
  handlePostConnectionOpen() {
    s.d.trigger()
  }
  handleVoiceChannelSelect() {
    o.M.trigger()
  }
  handleCallCreate() {
    o.M.trigger()
  }
  handleUserSettingsModalOpen() {
    r.X.trigger()
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
      VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
      CALL_CREATE: this.handleCallCreate,
      USER_SETTINGS_MODAL_OPEN: this.handleUserSettingsModalOpen
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new a
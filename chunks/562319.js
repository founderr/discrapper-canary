"use strict";
n.r(t), n("47120");
var i = n("846519"),
  r = n("570140"),
  s = n("710845"),
  a = n("671335"),
  o = n("928518"),
  l = n("451478"),
  u = n("70956"),
  d = n("981631");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let c = new class e {
  isIncomingVideoEnabled() {
    return this.incomingVideoEnabled
  }
  subscribe(e) {
    this.videoEnabledObservers.add(e)
  }
  unsubscribe(e) {
    this.videoEnabledObservers.delete(e)
  }
  setIncomingVideoEnabled(e) {
    let t = this.incomingVideoEnabled !== e;
    this.incomingVideoEnabled = e, t && (this.logger.info("Window visibility incoming video changed, incomingVideoEnabled = ".concat(this.incomingVideoEnabled)), this.videoEnabledObservers.forEach(e => e(this.incomingVideoEnabled)))
  }
  anyDiscordWindowVisible() {
    return l.default.isVisible() || o.default.getWindowVisible(d.PopoutWindowKeys.CHANNEL_CALL_POPOUT)
  }
  constructor() {
    _(this, "hiddenWindowDisableVideoTimer", new i.Timeout), _(this, "incomingVideoEnabled", !0), _(this, "videoEnabledObservers", new Set), _(this, "logger", new s.default("WindowVisibilityVideoManager")), _(this, "HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS", 30 * u.default.Millis.SECOND), _(this, "handleWindowVisibilityChange", () => {
      a.default.getCurrentConfig({
        location: "WindowVisibilityVideoManager"
      }, {
        autoTrackExposure: !0
      }).stopVideoForHiddenWindow && (this.anyDiscordWindowVisible() ? (this.hiddenWindowDisableVideoTimer.stop(), this.setIncomingVideoEnabled(!0)) : this.hiddenWindowDisableVideoTimer.start(this.HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS, () => {
        this.setIncomingVideoEnabled(!1)
      }))
    }), r.default.subscribe("WINDOW_VISIBILITY_CHANGE", this.handleWindowVisibilityChange)
  }
};
t.default = new class e {
  isIncomingVideoEnabled() {
    return c.isIncomingVideoEnabled()
  }
  subscribe(e) {
    c.subscribe(e)
  }
  unsubscribe(e) {
    c.unsubscribe(e)
  }
}
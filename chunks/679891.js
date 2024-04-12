"use strict";
a.r(t), a("47120");
var n = a("570140"),
  s = a("846027"),
  l = a("317770"),
  i = a("594190"),
  r = a("928518"),
  o = a("131951"),
  u = a("451478"),
  d = a("981631"),
  c = a("65154");

function f(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let E = new Set,
  h = new Set,
  _ = null;

function C() {
  for (let e of E) s.default.setDisableLocalVideo(e, d.VideoToggleState.MANUAL_ENABLED, c.MediaEngineContextTypes.DEFAULT, !1);
  h.clear(), E.clear()
}
class m extends l.default {
  _initialize() {
    n.default.subscribe("RTC_CONNECTION_VIDEO", this.handleIncomingVideo), n.default.subscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleManualLocalVideoToggle), n.default.subscribe("WINDOW_VISIBILITY_CHANGE", this.handleWindowVisibilityChange), n.default.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), r.default.addChangeListener(this.handlePopoutChange)
  }
  _terminate() {
    n.default.unsubscribe("RTC_CONNECTION_VIDEO", this.handleIncomingVideo), n.default.unsubscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleManualLocalVideoToggle), n.default.unsubscribe("WINDOW_VISIBILITY_CHANGE", this.handleWindowVisibilityChange), n.default.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), r.default.removeChangeListener(this.handlePopoutChange), C(), _ = null
  }
  handleIncomingVideo(e) {
    let {
      userId: t,
      context: a,
      streamId: n
    } = e;
    if (a !== c.MediaEngineContextTypes.DEFAULT || null == n) return;
    let l = null != i.default.getVisibleGame(),
      f = u.default.isVisible(),
      _ = r.default.getWindowVisible(d.PopoutWindowKeys.CHANNEL_CALL_POPOUT),
      C = o.default.isLocalVideoDisabled(t, a),
      m = h.has(t);
    l && !f && !_ && !C && !m && (E.add(t), s.default.setDisableLocalVideo(t, d.VideoToggleState.DISABLED, a, !1))
  }
  handleManualLocalVideoToggle(e) {
    let {
      userId: t,
      persist: a
    } = e;
    a && (h.add(t), E.delete(t))
  }
  constructor(...e) {
    super(...e), f(this, "handleWindowVisibilityChange", e => {
      let {
        visible: t
      } = e;
      t && C()
    }), f(this, "handleVoiceChannelSelect", e => {
      let {
        channelId: t
      } = e;
      t !== _ && (C(), _ = t)
    }), f(this, "handlePopoutChange", () => {
      r.default.getWindowVisible(d.PopoutWindowKeys.CHANNEL_CALL_POPOUT) && C()
    })
  }
}
t.default = new m
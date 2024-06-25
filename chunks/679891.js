n(47120);
var s = n(570140),
  i = n(846027),
  l = n(317770),
  a = n(594190),
  r = n(928518),
  o = n(131951),
  c = n(451478),
  u = n(981631),
  d = n(65154);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let h = new Set,
  _ = new Set,
  I = null;

function m() {
  for (let e of h) i.Z.setDisableLocalVideo(e, u.ZUi.MANUAL_ENABLED, d.Yn.DEFAULT, !1);
  _.clear(), h.clear()
}
class T extends l.Z {
  _initialize() {
    s.Z.subscribe("RTC_CONNECTION_VIDEO", this.handleIncomingVideo), s.Z.subscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleManualLocalVideoToggle), s.Z.subscribe("WINDOW_VISIBILITY_CHANGE", this.handleWindowVisibilityChange), s.Z.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), r.Z.addChangeListener(this.handlePopoutChange)
  }
  _terminate() {
    s.Z.unsubscribe("RTC_CONNECTION_VIDEO", this.handleIncomingVideo), s.Z.unsubscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleManualLocalVideoToggle), s.Z.unsubscribe("WINDOW_VISIBILITY_CHANGE", this.handleWindowVisibilityChange), s.Z.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), r.Z.removeChangeListener(this.handlePopoutChange), m(), I = null
  }
  handleIncomingVideo(e) {
    let {
      userId: t,
      context: n,
      streamId: s
    } = e;
    if (n !== d.Yn.DEFAULT || null == s) return;
    let l = null != a.ZP.getVisibleGame(),
      E = c.Z.isVisible(),
      I = r.Z.getWindowVisible(u.KJ3.CHANNEL_CALL_POPOUT),
      m = o.Z.isLocalVideoDisabled(t, n),
      T = _.has(t);
    l && !E && !I && !m && !T && (h.add(t), i.Z.setDisableLocalVideo(t, u.ZUi.DISABLED, n, !1))
  }
  handleManualLocalVideoToggle(e) {
    let {
      userId: t,
      persist: n
    } = e;
    n && (_.add(t), h.delete(t))
  }
  constructor(...e) {
    super(...e), E(this, "handleWindowVisibilityChange", e => {
      let {
        visible: t
      } = e;
      t && m()
    }), E(this, "handleVoiceChannelSelect", e => {
      let {
        channelId: t
      } = e;
      t !== I && (m(), I = t)
    }), E(this, "handlePopoutChange", () => {
      r.Z.getWindowVisible(u.KJ3.CHANNEL_CALL_POPOUT) && m()
    })
  }
}
t.Z = new T
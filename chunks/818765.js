"use strict";
s.r(t), s("47120"), s("653041");
var a = s("570140"),
  n = s("317770"),
  l = s("474873"),
  i = s("314897"),
  r = s("19780"),
  o = s("944486"),
  u = s("111583"),
  d = s("557177"),
  c = s("351780"),
  E = s("843693"),
  _ = s("981631");
let f = (0, d.createSoundForPack)("poggermode_applause", l.default.getSoundpack()),
  h = !1,
  m = !1,
  C = [],
  T = null,
  g = () => {
    !h && (f.loop(), h = !0)
  },
  A = () => {
    f.stop(), h = !1
  },
  p = () => {
    let e = c.default.isEnabled(),
      t = c.default.comboSoundsEnabled;
    return !!e && !!t && null != o.default.getChannelId() || !1
  },
  N = () => {
    if (0 === C.length || !p() || m) return;
    m = !0;
    let [e, t] = C[C.length - 1];
    (0, d.playSound)(e, t), T = setTimeout(S, 1e3)
  },
  S = () => {
    C.pop(), m = !1, N()
  },
  I = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
      s = r.default.isConnected();
    C.push([e, t * (s ? .1 : 1)]), N()
  };
class x extends n.default {
  _initialize() {
    E.default.addChangeListener(this.startAudio), a.default.subscribe("RTC_CONNECTION_STATE", this.setVolume), a.default.subscribe("TYPING_STOP", this.stopAudio), a.default.subscribe("TYPING_STOP_LOCAL", this.stopAudio), a.default.subscribe("CHANNEL_SELECT", this.stopAudio), a.default.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio)
  }
  _terminate() {
    E.default.removeChangeListener(this.startAudio), a.default.unsubscribe("RTC_CONNECTION_STATE", this.setVolume), a.default.unsubscribe("TYPING_STOP", this.stopAudio), a.default.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio), a.default.unsubscribe("CHANNEL_SELECT", this.stopAudio), a.default.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio), clearTimeout(T)
  }
  setVolume(e) {
    let {
      state: t
    } = e;
    t === _.RTCConnectionStates.RTC_CONNECTED ? f.volume = .1 : f.volume = 1
  }
  handleTypingStop(e) {
    let {
      userId: t
    } = e;
    i.default.getId() === t && A()
  }
  stopAudio() {
    A()
  }
  startAudio() {
    var e;
    if (!p()) return;
    let t = o.default.getChannelId();
    if (null == t) return;
    let s = i.default.getId(),
      a = u.default.isTyping(t, s),
      n = E.default.getUserCombo(s, t),
      l = null !== (e = null == n ? void 0 : n.multiplier) && void 0 !== e ? e : 1;
    a && l >= 7 ? g() : A()
  }
  playAchievementUnlockSound() {
    p() && I("poggermode_achievement_unlock")
  }
}
t.default = new x
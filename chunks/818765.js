"use strict";
a.r(t), a("47120"), a("653041");
var n = a("570140"),
  s = a("317770"),
  l = a("474873"),
  i = a("314897"),
  r = a("19780"),
  o = a("944486"),
  u = a("111583"),
  d = a("557177"),
  c = a("351780"),
  f = a("843693"),
  E = a("981631");
let h = (0, d.createSoundForPack)("poggermode_applause", l.default.getSoundpack()),
  _ = !1,
  C = !1,
  m = [],
  S = null,
  p = () => {
    !_ && (h.loop(), _ = !0)
  },
  I = () => {
    h.stop(), _ = !1
  },
  T = () => {
    let e = c.default.isEnabled(),
      t = c.default.comboSoundsEnabled;
    return !!e && !!t && null != o.default.getChannelId() || !1
  },
  g = () => {
    if (0 === m.length || !T() || C) return;
    C = !0;
    let [e, t] = m[m.length - 1];
    (0, d.playSound)(e, t), S = setTimeout(A, 1e3)
  },
  A = () => {
    m.pop(), C = !1, g()
  },
  N = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
      a = r.default.isConnected();
    m.push([e, t * (a ? .1 : 1)]), g()
  };
class v extends s.default {
  _initialize() {
    f.default.addChangeListener(this.startAudio), n.default.subscribe("RTC_CONNECTION_STATE", this.setVolume), n.default.subscribe("TYPING_STOP", this.stopAudio), n.default.subscribe("TYPING_STOP_LOCAL", this.stopAudio), n.default.subscribe("CHANNEL_SELECT", this.stopAudio), n.default.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio)
  }
  _terminate() {
    f.default.removeChangeListener(this.startAudio), n.default.unsubscribe("RTC_CONNECTION_STATE", this.setVolume), n.default.unsubscribe("TYPING_STOP", this.stopAudio), n.default.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio), n.default.unsubscribe("CHANNEL_SELECT", this.stopAudio), n.default.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio), clearTimeout(S)
  }
  setVolume(e) {
    let {
      state: t
    } = e;
    t === E.RTCConnectionStates.RTC_CONNECTED ? h.volume = .1 : h.volume = 1
  }
  handleTypingStop(e) {
    let {
      userId: t
    } = e;
    i.default.getId() === t && I()
  }
  stopAudio() {
    I()
  }
  startAudio() {
    var e;
    if (!T()) return;
    let t = o.default.getChannelId();
    if (null == t) return;
    let a = i.default.getId(),
      n = u.default.isTyping(t, a),
      s = f.default.getUserCombo(a, t),
      l = null !== (e = null == s ? void 0 : s.multiplier) && void 0 !== e ? e : 1;
    n && l >= 7 ? p() : I()
  }
  playAchievementUnlockSound() {
    T() && N("poggermode_achievement_unlock")
  }
}
t.default = new v
"use strict";
n.r(t), n("47120"), n("653041");
var a = n("570140"),
  s = n("317770"),
  i = n("474873"),
  l = n("314897"),
  r = n("19780"),
  o = n("944486"),
  u = n("111583"),
  d = n("557177"),
  c = n("351780"),
  f = n("843693"),
  E = n("981631");
let h = (0, d.createSoundForPack)("poggermode_applause", i.default.getSoundpack()),
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
  g = () => {
    let e = c.default.isEnabled(),
      t = c.default.comboSoundsEnabled;
    return !!e && !!t && null != o.default.getChannelId() || !1
  },
  T = () => {
    if (0 === m.length || !g() || C) return;
    C = !0;
    let [e, t] = m[m.length - 1];
    (0, d.playSound)(e, t), S = setTimeout(A, 1e3)
  },
  A = () => {
    m.pop(), C = !1, T()
  },
  N = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
      n = r.default.isConnected();
    m.push([e, t * (n ? .1 : 1)]), T()
  };
class v extends s.default {
  _initialize() {
    f.default.addChangeListener(this.startAudio), a.default.subscribe("RTC_CONNECTION_STATE", this.setVolume), a.default.subscribe("TYPING_STOP", this.stopAudio), a.default.subscribe("TYPING_STOP_LOCAL", this.stopAudio), a.default.subscribe("CHANNEL_SELECT", this.stopAudio), a.default.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio)
  }
  _terminate() {
    f.default.removeChangeListener(this.startAudio), a.default.unsubscribe("RTC_CONNECTION_STATE", this.setVolume), a.default.unsubscribe("TYPING_STOP", this.stopAudio), a.default.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio), a.default.unsubscribe("CHANNEL_SELECT", this.stopAudio), a.default.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio), clearTimeout(S)
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
    l.default.getId() === t && I()
  }
  stopAudio() {
    I()
  }
  startAudio() {
    var e;
    if (!g()) return;
    let t = o.default.getChannelId();
    if (null == t) return;
    let n = l.default.getId(),
      a = u.default.isTyping(t, n),
      s = f.default.getUserCombo(n, t),
      i = null !== (e = null == s ? void 0 : s.multiplier) && void 0 !== e ? e : 1;
    a && i >= 7 ? p() : I()
  }
  playAchievementUnlockSound() {
    g() && N("poggermode_achievement_unlock")
  }
}
t.default = new v
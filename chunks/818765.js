"use strict";
s.r(t), s("47120"), s("653041");
var n = s("570140"),
  a = s("317770"),
  l = s("474873"),
  i = s("314897"),
  r = s("19780"),
  o = s("944486"),
  u = s("111583"),
  d = s("557177"),
  c = s("351780"),
  E = s("843693"),
  f = s("981631");
let _ = (0, d.createSoundForPack)("poggermode_applause", l.default.getSoundpack()),
  h = !1,
  C = !1,
  m = [],
  T = null,
  g = () => {
    !h && (_.loop(), h = !0)
  },
  A = () => {
    _.stop(), h = !1
  },
  p = () => {
    let e = c.default.isEnabled(),
      t = c.default.comboSoundsEnabled;
    return !!e && !!t && null != o.default.getChannelId() || !1
  },
  N = () => {
    if (0 === m.length || !p() || C) return;
    C = !0;
    let [e, t] = m[m.length - 1];
    (0, d.playSound)(e, t), T = setTimeout(S, 1e3)
  },
  S = () => {
    m.pop(), C = !1, N()
  },
  I = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
      s = r.default.isConnected();
    m.push([e, t * (s ? .1 : 1)]), N()
  };
class x extends a.default {
  _initialize() {
    E.default.addChangeListener(this.startAudio), n.default.subscribe("RTC_CONNECTION_STATE", this.setVolume), n.default.subscribe("TYPING_STOP", this.stopAudio), n.default.subscribe("TYPING_STOP_LOCAL", this.stopAudio), n.default.subscribe("CHANNEL_SELECT", this.stopAudio), n.default.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio)
  }
  _terminate() {
    E.default.removeChangeListener(this.startAudio), n.default.unsubscribe("RTC_CONNECTION_STATE", this.setVolume), n.default.unsubscribe("TYPING_STOP", this.stopAudio), n.default.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio), n.default.unsubscribe("CHANNEL_SELECT", this.stopAudio), n.default.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio), clearTimeout(T)
  }
  setVolume(e) {
    let {
      state: t
    } = e;
    t === f.RTCConnectionStates.RTC_CONNECTED ? _.volume = .1 : _.volume = 1
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
      n = u.default.isTyping(t, s),
      a = E.default.getUserCombo(s, t),
      l = null !== (e = null == a ? void 0 : a.multiplier) && void 0 !== e ? e : 1;
    n && l >= 7 ? g() : A()
  }
  playAchievementUnlockSound() {
    p() && I("poggermode_achievement_unlock")
  }
}
t.default = new x
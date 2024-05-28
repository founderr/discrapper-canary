"use strict";
s.r(t), s("47120"), s("653041");
var a = s("570140"),
  n = s("317770"),
  l = s("474873"),
  i = s("314897"),
  r = s("19780"),
  u = s("944486"),
  o = s("111583"),
  d = s("557177"),
  c = s("351780"),
  E = s("843693"),
  _ = s("981631");
let f = (0, d.createSoundForPack)("poggermode_applause", l.default.getSoundpack()),
  h = !1,
  m = !1,
  T = [],
  C = null,
  g = () => {
    !h && (f.loop(), h = !0)
  },
  A = () => {
    f.stop(), h = !1
  },
  N = () => {
    let e = c.default.isEnabled(),
      t = c.default.comboSoundsEnabled;
    return !!e && !!t && null != u.default.getChannelId() || !1
  },
  p = () => {
    if (0 === T.length || !N() || m) return;
    m = !0;
    let [e, t] = T[T.length - 1];
    (0, d.playSound)(e, t), C = setTimeout(S, 1e3)
  },
  S = () => {
    T.pop(), m = !1, p()
  },
  I = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
      s = r.default.isConnected();
    T.push([e, t * (s ? .1 : 1)]), p()
  };
class v extends n.default {
  _initialize() {
    E.default.addChangeListener(this.startAudio), a.default.subscribe("RTC_CONNECTION_STATE", this.setVolume), a.default.subscribe("TYPING_STOP", this.stopAudio), a.default.subscribe("TYPING_STOP_LOCAL", this.stopAudio), a.default.subscribe("CHANNEL_SELECT", this.stopAudio), a.default.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio)
  }
  _terminate() {
    E.default.removeChangeListener(this.startAudio), a.default.unsubscribe("RTC_CONNECTION_STATE", this.setVolume), a.default.unsubscribe("TYPING_STOP", this.stopAudio), a.default.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio), a.default.unsubscribe("CHANNEL_SELECT", this.stopAudio), a.default.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio), clearTimeout(C)
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
    if (!N()) return;
    let t = u.default.getChannelId();
    if (null == t) return;
    let s = i.default.getId(),
      a = o.default.isTyping(t, s),
      n = E.default.getUserCombo(s, t),
      l = null !== (e = null == n ? void 0 : n.multiplier) && void 0 !== e ? e : 1;
    a && l >= 7 ? g() : A()
  }
  playAchievementUnlockSound() {
    N() && I("poggermode_achievement_unlock")
  }
}
t.default = new v
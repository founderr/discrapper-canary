n(47120), n(653041);
var s = n(570140),
  a = n(317770),
  i = n(474873),
  l = n(314897),
  r = n(19780),
  c = n(944486),
  o = n(111583),
  d = n(557177),
  u = n(351780),
  E = n(843693),
  _ = n(981631);
let h = (0, d.uk)("poggermode_applause", i.Z.getSoundpack()),
  T = !1,
  I = !1,
  C = [],
  N = null,
  g = () => {
    if (!T) h.loop(), T = !0
  },
  A = () => {
    h.stop(), T = !1
  },
  m = () => {
    let e = u.Z.isEnabled(),
      t = u.Z.comboSoundsEnabled;
    return !!e && !!t && null != c.Z.getChannelId() || !1
  },
  f = () => {
    if (0 === C.length || !m() || I) return;
    I = !0;
    let [e, t] = C[C.length - 1];
    (0, d.GN)(e, t), N = setTimeout(p, 1e3)
  },
  p = () => {
    C.pop(), I = !1, f()
  },
  R = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
      n = r.Z.isConnected();
    C.push([e, t * (n ? .1 : 1)]), f()
  };
class M extends a.Z {
  _initialize() {
    E.ZP.addChangeListener(this.startAudio), s.Z.subscribe("RTC_CONNECTION_STATE", this.setVolume), s.Z.subscribe("TYPING_STOP", this.stopAudio), s.Z.subscribe("TYPING_STOP_LOCAL", this.stopAudio), s.Z.subscribe("CHANNEL_SELECT", this.stopAudio), s.Z.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio)
  }
  _terminate() {
    E.ZP.removeChangeListener(this.startAudio), s.Z.unsubscribe("RTC_CONNECTION_STATE", this.setVolume), s.Z.unsubscribe("TYPING_STOP", this.stopAudio), s.Z.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio), s.Z.unsubscribe("CHANNEL_SELECT", this.stopAudio), s.Z.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio), clearTimeout(N)
  }
  setVolume(e) {
    let {
      state: t
    } = e;
    t === _.hes.RTC_CONNECTED ? h.volume = .1 : h.volume = 1
  }
  handleTypingStop(e) {
    let {
      userId: t
    } = e;
    l.default.getId() === t && A()
  }
  stopAudio() {
    A()
  }
  startAudio() {
    var e;
    if (!m()) return;
    let t = c.Z.getChannelId();
    if (null == t) return;
    let n = l.default.getId(),
      s = o.Z.isTyping(t, n),
      a = E.ZP.getUserCombo(n, t),
      i = null !== (e = null == a ? void 0 : a.multiplier) && void 0 !== e ? e : 1;
    s && i >= 7 ? g() : A()
  }
  playAchievementUnlockSound() {
    if (!!m()) R("poggermode_achievement_unlock")
  }
}
t.Z = new M
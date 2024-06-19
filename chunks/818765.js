n(47120), n(653041);
var s = n(570140),
  a = n(317770),
  i = n(474873),
  l = n(314897),
  r = n(19780),
  o = n(944486),
  c = n(111583),
  d = n(557177),
  u = n(351780),
  E = n(843693),
  _ = n(981631);
let h = (0, d.uk)("poggermode_applause", i.Z.getSoundpack()),
  m = !1,
  T = !1,
  C = [],
  g = null,
  p = () => {
    if (!m) h.loop(), m = !0
  },
  N = () => {
    h.stop(), m = !1
  },
  I = () => {
    let e = u.Z.isEnabled(),
      t = u.Z.comboSoundsEnabled;
    return !!e && !!t && null != o.Z.getChannelId() || !1
  },
  A = () => {
    if (0 === C.length || !I() || T) return;
    T = !0;
    let [e, t] = C[C.length - 1];
    (0, d.GN)(e, t), g = setTimeout(f, 1e3)
  },
  f = () => {
    C.pop(), T = !1, A()
  },
  x = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
      n = r.Z.isConnected();
    C.push([e, t * (n ? .1 : 1)]), A()
  };
class S extends a.Z {
  _initialize() {
    E.ZP.addChangeListener(this.startAudio), s.Z.subscribe("RTC_CONNECTION_STATE", this.setVolume), s.Z.subscribe("TYPING_STOP", this.stopAudio), s.Z.subscribe("TYPING_STOP_LOCAL", this.stopAudio), s.Z.subscribe("CHANNEL_SELECT", this.stopAudio), s.Z.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio)
  }
  _terminate() {
    E.ZP.removeChangeListener(this.startAudio), s.Z.unsubscribe("RTC_CONNECTION_STATE", this.setVolume), s.Z.unsubscribe("TYPING_STOP", this.stopAudio), s.Z.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio), s.Z.unsubscribe("CHANNEL_SELECT", this.stopAudio), s.Z.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio), clearTimeout(g)
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
    l.default.getId() === t && N()
  }
  stopAudio() {
    N()
  }
  startAudio() {
    var e;
    if (!I()) return;
    let t = o.Z.getChannelId();
    if (null == t) return;
    let n = l.default.getId(),
      s = c.Z.isTyping(t, n),
      a = E.ZP.getUserCombo(n, t),
      i = null !== (e = null == a ? void 0 : a.multiplier) && void 0 !== e ? e : 1;
    s && i >= 7 ? p() : N()
  }
  playAchievementUnlockSound() {
    if (!!I()) x("poggermode_achievement_unlock")
  }
}
t.Z = new S
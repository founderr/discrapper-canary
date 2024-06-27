n(47120), n(653041);
var s = n(570140),
  a = n(317770),
  i = n(474873),
  r = n(314897),
  l = n(19780),
  o = n(944486),
  c = n(111583),
  d = n(557177),
  _ = n(351780),
  E = n(843693),
  u = n(981631);
let T = (0, d.uk)("poggermode_applause", i.Z.getSoundpack()),
  I = !1,
  R = !1,
  C = [],
  g = null,
  p = () => {
    if (!I) T.loop(), I = !0
  },
  A = () => {
    T.stop(), I = !1
  },
  N = () => {
    let e = _.Z.isEnabled(),
      t = _.Z.comboSoundsEnabled;
    return !!e && !!t && null != o.Z.getChannelId() || !1
  },
  m = () => {
    if (0 === C.length || !N() || R) return;
    R = !0;
    let [e, t] = C[C.length - 1];
    (0, d.GN)(e, t), g = setTimeout(S, 1e3)
  },
  S = () => {
    C.pop(), R = !1, m()
  },
  f = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
      n = l.Z.isConnected();
    C.push([e, t * (n ? .1 : 1)]), m()
  };
class M extends a.Z {
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
    t === u.hes.RTC_CONNECTED ? T.volume = .1 : T.volume = 1
  }
  handleTypingStop(e) {
    let {
      userId: t
    } = e;
    r.default.getId() === t && A()
  }
  stopAudio() {
    A()
  }
  startAudio() {
    var e;
    if (!N()) return;
    let t = o.Z.getChannelId();
    if (null == t) return;
    let n = r.default.getId(),
      s = c.Z.isTyping(t, n),
      a = E.ZP.getUserCombo(n, t),
      i = null !== (e = null == a ? void 0 : a.multiplier) && void 0 !== e ? e : 1;
    s && i >= 7 ? p() : A()
  }
  playAchievementUnlockSound() {
    if (!!N()) f("poggermode_achievement_unlock")
  }
}
t.Z = new M
s(47120), s(653041);
var n = s(570140),
  a = s(317770),
  i = s(474873),
  r = s(314897),
  l = s(19780),
  o = s(944486),
  c = s(111583),
  E = s(557177),
  _ = s(351780),
  u = s(843693),
  d = s(981631);
let T = (0, E.uk)("poggermode_applause", i.Z.getSoundpack()),
  I = !1,
  R = !1,
  A = [],
  N = null,
  C = () => {
    if (!I) T.loop(), I = !0
  },
  g = () => {
    T.stop(), I = !1
  },
  m = () => {
    let e = _.Z.isEnabled(),
      t = _.Z.comboSoundsEnabled;
    return !!e && !!t && null != o.Z.getChannelId() || !1
  },
  M = () => {
    if (0 === A.length || !m() || R) return;
    R = !0;
    let [e, t] = A[A.length - 1];
    (0, E.GN)(e, t), N = setTimeout(S, 1e3)
  },
  S = () => {
    A.pop(), R = !1, M()
  },
  p = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
      s = l.Z.isConnected();
    A.push([e, t * (s ? .1 : 1)]), M()
  };
class h extends a.Z {
  _initialize() {
    u.ZP.addChangeListener(this.startAudio), n.Z.subscribe("RTC_CONNECTION_STATE", this.setVolume), n.Z.subscribe("TYPING_STOP", this.stopAudio), n.Z.subscribe("TYPING_STOP_LOCAL", this.stopAudio), n.Z.subscribe("CHANNEL_SELECT", this.stopAudio), n.Z.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio)
  }
  _terminate() {
    u.ZP.removeChangeListener(this.startAudio), n.Z.unsubscribe("RTC_CONNECTION_STATE", this.setVolume), n.Z.unsubscribe("TYPING_STOP", this.stopAudio), n.Z.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio), n.Z.unsubscribe("CHANNEL_SELECT", this.stopAudio), n.Z.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio), clearTimeout(N)
  }
  setVolume(e) {
    let {
      state: t
    } = e;
    t === d.hes.RTC_CONNECTED ? T.volume = .1 : T.volume = 1
  }
  handleTypingStop(e) {
    let {
      userId: t
    } = e;
    r.default.getId() === t && g()
  }
  stopAudio() {
    g()
  }
  startAudio() {
    var e;
    if (!m()) return;
    let t = o.Z.getChannelId();
    if (null == t) return;
    let s = r.default.getId(),
      n = c.Z.isTyping(t, s),
      a = u.ZP.getUserCombo(s, t),
      i = null !== (e = null == a ? void 0 : a.multiplier) && void 0 !== e ? e : 1;
    n && i >= 7 ? C() : g()
  }
  playAchievementUnlockSound() {
    if (!!m()) p("poggermode_achievement_unlock")
  }
}
t.Z = new h
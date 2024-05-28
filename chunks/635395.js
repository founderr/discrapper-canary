"use strict";
n.r(t), n("47120");
var a, s, l = n("470079"),
  i = n("442837"),
  r = n("846027"),
  o = n("230711"),
  u = n("888369"),
  d = n("131951"),
  c = n("292959"),
  f = n("19780"),
  E = n("699516"),
  C = n("606304"),
  h = n("358085"),
  _ = n("998502"),
  S = n("981631");
(s = a || (a = {})).DEFAULT = "DEFAULT", s.UNREAD = "UNREAD", s.CONNECTED = "CONNECTED", s.SPEAKING = "SPEAKING", s.MUTED = "MUTED", s.DEAFENED = "DEAFENED";
let m = (0, h.isMac)() ? null : "DEFAULT";
class p extends l.PureComponent {
  componentDidMount() {
    _.default.setSystemTrayIcon(this.getIcon())
  }
  componentDidUpdate() {
    _.default.setSystemTrayIcon(this.getIcon())
  }
  componentWillUnmount() {
    _.default.setSystemTrayIcon(m)
  }
  render() {
    return null
  }
  constructor(...e) {
    var t, n, a;
    super(...e), t = this, n = "getIcon", a = () => {
      let {
        deafened: e,
        muted: t,
        speaking: n,
        connected: a,
        unread: s
      } = this.props, l = m;
      return (0, h.isMac)() && !a ? l : (0, h.isLinux)() || !a ? (s && (l = "UNREAD"), l) : l = e ? "DEAFENED" : t ? "MUTED" : n ? "SPEAKING" : "CONNECTED"
    }, n in t ? Object.defineProperty(t, n, {
      value: a,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = a
  }
}
let I = () => null;
h.isPlatformEmbedded && (_.default.on("SYSTEM_TRAY_TOGGLE_MUTE", () => r.default.toggleSelfMute()), _.default.on("SYSTEM_TRAY_TOGGLE_DEAFEN", () => r.default.toggleSelfDeaf()), _.default.on("SYSTEM_TRAY_OPEN_VOICE_SETTINGS", () => {
  o.default.open(S.UserSettingsSections.VOICE)
}), I = i.default.connectStores([f.default, d.default, C.default, u.default, E.default, c.default], () => {
  let e = u.default.getTotalMentionCount(),
    t = u.default.hasAnyUnread(),
    n = E.default.getPendingCount(),
    a = c.default.getDisableUnreadBadge();
  return {
    connected: f.default.isConnected(),
    speaking: C.default.isCurrentUserSpeaking(),
    muted: d.default.isSelfMute() || d.default.isSelfMutedTemporarily(),
    deafened: d.default.isSelfDeaf(),
    unread: !a && !!(t || e + n > 0)
  }
})(p)), t.default = I
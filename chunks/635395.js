"use strict";
a.r(t), a("47120");
var n, s, l = a("470079"),
  i = a("442837"),
  r = a("846027"),
  o = a("230711"),
  u = a("888369"),
  d = a("131951"),
  c = a("292959"),
  f = a("19780"),
  E = a("699516"),
  h = a("606304"),
  _ = a("358085"),
  C = a("998502"),
  m = a("981631");
(s = n || (n = {})).DEFAULT = "DEFAULT", s.UNREAD = "UNREAD", s.CONNECTED = "CONNECTED", s.SPEAKING = "SPEAKING", s.MUTED = "MUTED", s.DEAFENED = "DEAFENED";
let S = (0, _.isMac)() ? null : "DEFAULT";
class p extends l.PureComponent {
  componentDidMount() {
    C.default.setSystemTrayIcon(this.getIcon())
  }
  componentDidUpdate() {
    C.default.setSystemTrayIcon(this.getIcon())
  }
  componentWillUnmount() {
    C.default.setSystemTrayIcon(S)
  }
  render() {
    return null
  }
  constructor(...e) {
    var t, a, n;
    super(...e), t = this, a = "getIcon", n = () => {
      let {
        deafened: e,
        muted: t,
        speaking: a,
        connected: n,
        unread: s
      } = this.props, l = S;
      return (0, _.isMac)() && !n ? l : (0, _.isLinux)() || !n ? (s && (l = "UNREAD"), l) : l = e ? "DEAFENED" : t ? "MUTED" : a ? "SPEAKING" : "CONNECTED"
    }, a in t ? Object.defineProperty(t, a, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[a] = n
  }
}
let I = () => null;
_.isPlatformEmbedded && (C.default.on("SYSTEM_TRAY_TOGGLE_MUTE", () => r.default.toggleSelfMute()), C.default.on("SYSTEM_TRAY_TOGGLE_DEAFEN", () => r.default.toggleSelfDeaf()), C.default.on("SYSTEM_TRAY_OPEN_VOICE_SETTINGS", () => {
  o.default.open(m.UserSettingsSections.VOICE)
}), I = i.default.connectStores([f.default, d.default, h.default, u.default, E.default, c.default], () => {
  let e = u.default.getTotalMentionCount(),
    t = u.default.hasAnyUnread(),
    a = E.default.getPendingCount(),
    n = c.default.getDisableUnreadBadge();
  return {
    connected: f.default.isConnected(),
    speaking: h.default.isCurrentUserSpeaking(),
    muted: d.default.isSelfMute() || d.default.isSelfMutedTemporarily(),
    deafened: d.default.isSelfDeaf(),
    unread: !n && !!(t || e + a > 0)
  }
})(p)), t.default = I
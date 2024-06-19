n(47120);
var i, s, l = n(470079),
  a = n(442837),
  r = n(846027),
  o = n(230711),
  c = n(888369),
  u = n(131951),
  d = n(292959),
  E = n(19780),
  h = n(699516),
  _ = n(606304),
  I = n(358085),
  m = n(998502),
  g = n(981631);
(s = i || (i = {})).DEFAULT = "DEFAULT", s.UNREAD = "UNREAD", s.CONNECTED = "CONNECTED", s.SPEAKING = "SPEAKING", s.MUTED = "MUTED", s.DEAFENED = "DEAFENED";
let p = (0, I.isMac)() ? null : "DEFAULT";
class T extends l.PureComponent {
  componentDidMount() {
    m.ZP.setSystemTrayIcon(this.getIcon())
  }
  componentDidUpdate() {
    m.ZP.setSystemTrayIcon(this.getIcon())
  }
  componentWillUnmount() {
    m.ZP.setSystemTrayIcon(p)
  }
  render() {
    return null
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "getIcon", i = () => {
      let {
        deafened: e,
        muted: t,
        speaking: n,
        connected: i,
        unread: s
      } = this.props, l = p;
      return (0, I.isMac)() && !i ? l : (0, I.isLinux)() || !i ? (s && (l = "UNREAD"), l) : l = e ? "DEAFENED" : t ? "MUTED" : n ? "SPEAKING" : "CONNECTED"
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
let N = () => null;
I.isPlatformEmbedded && (m.ZP.on("SYSTEM_TRAY_TOGGLE_MUTE", () => r.Z.toggleSelfMute()), m.ZP.on("SYSTEM_TRAY_TOGGLE_DEAFEN", () => r.Z.toggleSelfDeaf()), m.ZP.on("SYSTEM_TRAY_OPEN_VOICE_SETTINGS", () => {
  o.Z.open(g.oAB.VOICE)
}), N = a.ZP.connectStores([E.Z, u.Z, _.Z, c.default, h.Z, d.Z], () => {
  let e = c.default.getTotalMentionCount(),
    t = c.default.hasAnyUnread(),
    n = h.Z.getPendingCount(),
    i = d.Z.getDisableUnreadBadge();
  return {
    connected: E.Z.isConnected(),
    speaking: _.Z.isCurrentUserSpeaking(),
    muted: u.Z.isSelfMute() || u.Z.isSelfMutedTemporarily(),
    deafened: u.Z.isSelfDeaf(),
    unread: !i && !!(t || e + n > 0)
  }
})(T)), t.Z = N
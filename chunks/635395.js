n(47120);
var s, i, l = n(470079),
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
  T = n(981631);
(i = s || (s = {})).DEFAULT = "DEFAULT", i.UNREAD = "UNREAD", i.CONNECTED = "CONNECTED", i.SPEAKING = "SPEAKING", i.MUTED = "MUTED", i.DEAFENED = "DEAFENED";
let g = (0, I.isMac)() ? null : "DEFAULT";
class p extends l.PureComponent {
  componentDidMount() {
    m.ZP.setSystemTrayIcon(this.getIcon())
  }
  componentDidUpdate() {
    m.ZP.setSystemTrayIcon(this.getIcon())
  }
  componentWillUnmount() {
    m.ZP.setSystemTrayIcon(g)
  }
  render() {
    return null
  }
  constructor(...e) {
    var t, n, s;
    super(...e), t = this, n = "getIcon", s = () => {
      let {
        deafened: e,
        muted: t,
        speaking: n,
        connected: s,
        unread: i
      } = this.props, l = g;
      return (0, I.isMac)() && !s ? l : (0, I.isLinux)() || !s ? (i && (l = "UNREAD"), l) : l = e ? "DEAFENED" : t ? "MUTED" : n ? "SPEAKING" : "CONNECTED"
    }, n in t ? Object.defineProperty(t, n, {
      value: s,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = s
  }
}
let N = () => null;
I.isPlatformEmbedded && (m.ZP.on("SYSTEM_TRAY_TOGGLE_MUTE", () => r.Z.toggleSelfMute()), m.ZP.on("SYSTEM_TRAY_TOGGLE_DEAFEN", () => r.Z.toggleSelfDeaf()), m.ZP.on("SYSTEM_TRAY_OPEN_VOICE_SETTINGS", () => {
  o.Z.open(T.oAB.VOICE)
}), N = a.ZP.connectStores([E.Z, u.Z, _.Z, c.default, h.Z, d.Z], () => {
  let e = c.default.getTotalMentionCount(),
    t = c.default.hasAnyUnread(),
    n = h.Z.getPendingCount(),
    s = d.Z.getDisableUnreadBadge();
  return {
    connected: E.Z.isConnected(),
    speaking: _.Z.isCurrentUserSpeaking(),
    muted: u.Z.isSelfMute() || u.Z.isSelfMutedTemporarily(),
    deafened: u.Z.isSelfDeaf(),
    unread: !s && !!(t || e + n > 0)
  }
})(p)), t.Z = N